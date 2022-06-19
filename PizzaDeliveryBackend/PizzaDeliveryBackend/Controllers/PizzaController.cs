using Microsoft.AspNetCore.Mvc;
using PizzaDeliveryBackend.Models;

namespace PizzaDeliveryBackend.Controllers
{
    [ApiController]
    [Route("pizza")]
    public class PizzaController : ControllerBase
    {

        MySQLDatabaseContext _context;

        public PizzaController(MySQLDatabaseContext context)
        {
            _context = context;
        }

        [HttpGet("get/{pizzaId}")]
        public Pizza Get(int pizzad)
        {
            Pizza ret = _context.Pizzas.Find(pizzad);
            return ret;
        }
    }
}