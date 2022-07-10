using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using PizzaDeliveryBackend.Models;
using PizzaDeliveryBackend.Services;
using PizzaDeliveryBackend.SignalR;

namespace PizzaDeliveryBackend.Controllers
{
    [ApiController]
    [Route("v1/order")]
    public class OrderController : ControllerBase
    {

        IOrderService _service;
        IHubContext<PizzaHub> _hub;

        public OrderController(IOrderService service, IHubContext<PizzaHub> hub)
        {
            _service = service;
            _hub = hub;
        }

        [HttpPost]
        public Order CreateOrder([FromBody] Order model)
        {
            model.CreatedOn = DateTime.Now;
            _service.Add(model);
            _hub.Clients.All.SendAsync("orders", model);

            return model;

        }

        [HttpGet("{orderId}")]
        public Order Get(int orderId)
        {
            return _service.Get(orderId);

        }

        [HttpPut]
        public Order UpdateOrder([FromBody] Order model)
        {
            model.LastModified = DateTime.Now;
            _service.Update(model);

            return model;

        }

        [HttpGet("today")]
        public IList<Order> GetFromToday()
        {
            return _service.GetFromToday();

        }

    }
}
