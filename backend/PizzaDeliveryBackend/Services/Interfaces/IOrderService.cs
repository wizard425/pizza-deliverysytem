using PizzaDeliveryBackend.Models;

namespace PizzaDeliveryBackend.Services
{
    public interface IOrderService : IBaseService<Order>
    {

        public IList<Order> GetFromToday();
    }
}
