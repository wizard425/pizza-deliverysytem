using Microsoft.AspNetCore.SignalR;
using PizzaDeliveryBackend.Models;

namespace PizzaDeliveryBackend.SignalR
{
    public class PizzaHub : Hub
    {


        public async Task SendNewOrder(Order order)
        {

            await Clients.All.SendAsync("ReceiveOrder", order);

        }

    }
}
