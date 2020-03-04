using SehirRehberi.API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SehirRehberi.API.Data
{
    public interface IAppRepository
    {

        void Add<T>(T entity) where T : class;

        void Delete<T>(T entity) where T : class;

        bool SaveAll();



        List<City> GetCities();
        List<Photo> GetPhotoByCity(int id);
        City GetCityById(int id);
        Photo GetPhoto(int id);

    }
}
