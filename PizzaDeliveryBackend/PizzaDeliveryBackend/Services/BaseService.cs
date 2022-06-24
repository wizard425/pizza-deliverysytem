using PizzaDeliveryBackend.Models;
using System.Linq;

namespace PizzaDeliveryBackend.Services
{
    public class BaseService<T> : IBaseService<T> where T : class
    {
        MySQLDatabaseContext _context;

        public BaseService(MySQLDatabaseContext context)
        {
            _context = context;
        }

        public IList<T> GetAll()
        {
            return _context.Set<T>().ToList();
        }

        public T Add(T model)
        {
            if (model != null)
            {
                _context.Add(model);
                
                _context.SaveChanges();
                return model;
            }
            throw new Exception("Given Entity is null");
        }

        public T Get(int id)
        {
            var res = _context.Find<T>(id);
            if (res != null)
                return res;
            else
                throw new Exception("Nothing found");
        }

        public T Update(T model)
        {
            try
            {
                _context.Update(model);
                return model;
            }
            catch (Exception ex)
            {
                throw new Exception("Could not update entity");
            }
        }

        public void Delete(T model)
        {
            _context.Remove<T>(model);
        }
    }
}
