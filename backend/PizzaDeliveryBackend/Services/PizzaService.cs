using PizzaDeliveryBackend.Models;
using System;

namespace PizzaDeliveryBackend.Services
{
    public class PizzaService : BaseService<Pizza>, IPizzaService
    {
        MySQLDatabaseContext _context;
        public PizzaService(MySQLDatabaseContext context) : base(context)
        {
            _context = context;
        }

        public virtual Pizza Get(int pizzaId)
        {
            var ret = _context.Pizzas.Find(pizzaId);
            if (ret != null)
            {
                IList<PizzaExtra> extras = (from c in _context.Pizzas.Where(x => x.Id == pizzaId)
                                            join pextras in _context.PizzaExtras on c.Id equals pextras.PizzaId
                                            join extr in _context.Extras on pextras.ExtraId equals extr.Id
                                            select new PizzaExtra
                                            {
                                                PizzaId = pextras.PizzaId,
                                                Extra = extr,
                                                ExtraId = pextras.ExtraId
                                            }).ToList();

                ret.PizzaExtras = extras;
            }
            return ret;

        }
    }
}
