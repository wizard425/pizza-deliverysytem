using PizzaDeliveryBackend.Models;

namespace PizzaDeliveryBackend.Services
{
    public class BaseService<T>
    {
        MySQLDatabaseContext _context;

        public BaseService(MySQLDatabaseContext context)
        {
            _context = context;
        }

         public T Add ( T model)
        {
            _context.Add(model);
            _context.SaveChanges();
            return model;
        }
    }
}
