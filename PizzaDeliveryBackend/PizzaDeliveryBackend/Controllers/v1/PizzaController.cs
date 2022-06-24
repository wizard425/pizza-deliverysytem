using Microsoft.AspNetCore.Mvc;
using PizzaDeliveryBackend.Models;
using PizzaDeliveryBackend.Services;

namespace PizzaDeliveryBackend.Controllers
{
    [ApiController]
    [Route("v1/pizza")]
    public class PizzaController : ControllerBase
    {

        MySQLDatabaseContext _context;
        IPizzaService _service;

        public PizzaController(MySQLDatabaseContext context, IPizzaService service)
        {
            _context = context;
            _service = service;
        }


        [HttpGet]
        public IList<Pizza> GetAll()
        {
            var ret = _service.GetAll();
            return ret;
        }

        [HttpGet("{pizzaId}")]
        public Pizza Get(int pizzaId)
        {
            var ret = _service.Get(pizzaId);
            return ret;
        }

        [HttpPost]
        public Pizza Add([FromBody] Pizza model)
        {
            _service.Add(model);

            return model;
        }

        [HttpPut("pizzaId")]
        public Pizza Update([FromBody] Pizza model)
        {
            _service.Update(model);

            return model;
        }

    }
}