using Microsoft.AspNetCore.Mvc;
using PizzaDeliveryBackend.Models;
using PizzaDeliveryBackend.Services;
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
        IOrderService _service;

        public OrderController(MySQLDatabaseContext context,
            IOrderService service)
        {
            _context = context;
            _service = service;
        }

        [HttpPost]
        public Order CreateOrder([FromBody] Order model)
        {
            _service.Add(model);
            var client = new MqttClient("straka.app");
            client.Connect("testid");
            client.Publish("orders", Encoding.UTF8.GetBytes(model.Id.ToString()), MqttMsgBase.QOS_LEVEL_AT_LEAST_ONCE, true);

            return model;

        }

        [HttpGet("{orderId}")]
        public Order Get(int orderId)
        {
            return _service.Get(orderId);

        }

    }
}
