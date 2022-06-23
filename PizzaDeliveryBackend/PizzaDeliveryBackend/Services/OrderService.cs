using PizzaDeliveryBackend.Models;

namespace PizzaDeliveryBackend.Services
{
    public class OrderService : BaseService<Order>, IOrderService
    {
        public OrderService(MySQLDatabaseContext context) : base(context)
        {
        }
    }
}
