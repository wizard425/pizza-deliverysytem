using PizzaDeliveryBackend.Models;

namespace PizzaDeliveryBackend.Services
{
    public class PizzaService : BaseService<Pizza>
    {
        public PizzaService(MySQLDatabaseContext context) : base(context)
        {
        }
    }
}
