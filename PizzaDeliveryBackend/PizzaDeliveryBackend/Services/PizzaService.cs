using PizzaDeliveryBackend.Models;

namespace PizzaDeliveryBackend.Services
{
    public class PizzaService : BaseService<Pizza>, IPizzaService
    {
        public PizzaService(MySQLDatabaseContext context) : base(context)
        {
        }
    }
}
