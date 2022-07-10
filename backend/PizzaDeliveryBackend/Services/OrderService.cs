using PizzaDeliveryBackend.Models;

namespace PizzaDeliveryBackend.Services
{
    public class OrderService : BaseService<Order>, IOrderService
    {
        MySQLDatabaseContext _context;
        public OrderService(MySQLDatabaseContext context) : base(context)
        {
            _context = context;
        }

        public virtual Order Get(int orderId)
        {
            Order ret = _context.Orders.Find(orderId);
            if (ret != null)
            {
                ret.OrderItems = _context.OrderItems.Where(x => x.OrderId == ret.Id).ToList();
                ret.OrderItemDrinks = _context.OrderDrinks.Where(x => x.OrderId == ret.Id).ToList();

                foreach (var item in ret.OrderItems)
                {
                    var oiextras = _context.OrderItemExtras.Where(x => x.OrderItemId == item.Id).ToList();
                    item.Pizza = _context.Pizzas.Find(item.PizzaId);
                    foreach (var extra in oiextras)
                    {
                        var extraDef = _context.Extras.Find(extra.ExtraId);
                        if (extraDef != null)
                            extra.Extra = extraDef;
                    }

                    item.OrderItemExtras = oiextras;
                }

                foreach (var drinkItem in ret.OrderItemDrinks)
                {
                    drinkItem.Drink = _context.Drinks.Find(drinkItem.DrinkId);
                }
            }
            return ret;
        }

        public IList<Order> GetFromToday()
        {
            IList<Order> ret = new List<Order>();
            var orders = _context.Orders.Where(x => x.CreatedOn.DayOfYear == DateTime.Now.DayOfYear && x.CreatedOn.Year == DateTime.Now.Year).ToList();
            foreach (var order in orders)
            {
                ret.Add(Get(order.Id));
            }

            return ret;
        }
    }
}
