using Microsoft.AspNetCore.Mvc;
using PizzaDeliveryBackend.Models;
using PizzaDeliveryBackend.Services;

namespace PizzaDeliveryBackend.Controllers
{
    [ApiController]
    [Route("v1/auth")]
    public class AuthController : ControllerBase
    {
        IAuthService _service;

        public AuthController(IAuthService service)
        {
            _service = service;
        }


        [HttpPost]
        public UserView Authenticate([FromBody] User model)
        {
            var ret = _service.Authenticate(model);
            return ret;
        }
    }
}