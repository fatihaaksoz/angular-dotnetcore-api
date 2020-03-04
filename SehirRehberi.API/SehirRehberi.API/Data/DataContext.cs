using Microsoft.EntityFrameworkCore;
using SehirRehberi.API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SehirRehberi.API.Data
{
    //Value nesnesini veritabanıyla ilişkilendirmek için Entity FrameWork'te Context oluşturmamız gerekir.
    //DataContext ın çalışması için Entity Framework'un DbContext classından inherit olması gerekir.
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) //hangi veritabanına bağlanacağını parametre olarak göndereceğiz.                                                                                
        {

        }
        //Context e veritabanı tablosunu ilişkilendiriyoruz. Yani Values gelen değeri value tablosuna bağla anlammına gelmektedir.
        public DbSet<Value> Values { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<City> Cities { get; set; }
        public DbSet<Photo> Photos { get; set; }
    }
}
