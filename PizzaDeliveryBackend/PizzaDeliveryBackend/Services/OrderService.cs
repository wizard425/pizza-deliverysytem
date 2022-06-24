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
                var orderitems = _context.OrderItems.Where(x => x.OrderId == ret.Id).ToList();
                ret.OrderItems = orderitems;

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
            }
            return ret;
        }
    }
}
