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

        public virtual IList<Pizza> GetAll()
        {
            var ret = _context.Pizzas.ToList();
            int index = 0;
            foreach (var pizza in ret)
            {
                ret[index].PizzaExtras = _context.PizzaExtras.Join(_context.Extras, pextr => pextr.ExtraId, extra => extra.Id, (pextr, extra) => new PizzaExtra
                {
                    ExtraId = pextr.ExtraId,
                    PizzaId = pextr.PizzaId,
                    Extra = extra
                }).Where(x => x.PizzaId == pizza.Id).ToList();
                index++;
            }
            return ret;

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

        public virtual Pizza Update(Pizza model)
        {
            var pizzaExtras = _context.PizzaExtras.Where(x => x.PizzaId == model.Id);
            _context.PizzaExtras.RemoveRange(pizzaExtras);

            //_context.PizzaExtras.AddRange(model.PizzaExtras);
            _context.Update(model);
            _context.SaveChanges();

            return model;

        }
    }
}
