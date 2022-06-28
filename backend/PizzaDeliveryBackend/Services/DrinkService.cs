using PizzaDeliveryBackend.Models;

namespace PizzaDeliveryBackend.Services
{
    public class DrinkService : BaseService<Drink>, IDrinkService
    {

        MySQLDatabaseContext _context;
        public DrinkService(MySQLDatabaseContext context) : base(context)
        {
            _context = context;
        }
    }
}
