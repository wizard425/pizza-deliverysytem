using Microsoft.AspNetCore.Mvc;
using PizzaDeliveryBackend.Models;
using System.Text;
using uPLibrary.Networking.M2Mqtt;
using uPLibrary.Networking.M2Mqtt.Messages;

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

        [HttpPost]
        public void CreateOrder()
        {
            var client = new MqttClient("straka.app");
            client.Connect("testid");
            client.Publish("test", Encoding.UTF8.GetBytes("das ist jetzt der text"), MqttMsgBase.QOS_LEVEL_AT_LEAST_ONCE, true);

        }

    }
}
