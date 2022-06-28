using Microsoft.AspNetCore.Mvc;
using PizzaDeliveryBackend.Models;
using PizzaDeliveryBackend.Services;

namespace PizzaDeliveryBackend.Controllers
{
    [ApiController]
    [Route("v1/drink")]
    public class DrinkController : ControllerBase
    {
        IDrinkService _service;

        public DrinkController( IDrinkService service)
        {
            _service = service;
        }


        [HttpGet]
        public IList<Drink> GetAll()
        {
            var ret = _service.GetAll();
            return ret;
        }

        [HttpGet("{drinkId}")]
        public Drink Get(int drinkId)
        {
            var ret = _service.Get(drinkId);
            return ret;
        }

        [HttpPost]
        public Drink Add([FromBody] Drink model)
        {
            _service.Add(model);

            return model;
        }

        [HttpPut]
        public Drink Update([FromBody] Drink model)
        {
            _service.Update(model);

            return model;
        }

    }
}