using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using SehirRehberi.API.Models;

namespace SehirRehberi.API.Data
{
    public class AppRepository : IAppRepository
    {
        private DataContext _context;

        public AppRepository(DataContext context)
        {
            _context = context;
        }

        public void Add<T>(T entity) where T : class
        {
            _context.Add(entity);
        }

        public void Delete<T>(T entity) where T : class
        {
            _context.Remove(entity);
        }

        public List<City> GetCities()
        {
            var city = _context.Cities.Include(c => c.Photos).ToList();
            return city;
        }

        public City GetCityById(int cityId)
        {
            var city = _context.Cities.Include(c => c.Photos).FirstOrDefault(p => p.Id == cityId);
            return city;
        }

        public Photo GetPhoto(int id)
        {
            var photo = _context.Photos.FirstOrDefault(p => p.Id == id);
            return photo;
        }

        public List<Photo> GetPhotoByCity(int cityId)
        {
            var photo = _context.Photos.Where(p => p.CityId == cityId).ToList();
            return photo;
        }

        public bool SaveAll()
        {
            return _context.SaveChanges() > 0;
        }
    }
}
