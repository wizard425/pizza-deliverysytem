using Microsoft.AspNetCore.Mvc;
using PizzaDeliveryBackend.Models;

namespace PizzaDeliveryBackend.Controllers
{
    [ApiController]
    [Route("v1/order")]
    public class OrderController : ControllerBase
    {

        MySQLDatabaseContext _context;

        public OrderController(MySQLDatabaseContext context)
        {
            _context = context;
        }

    }
}
