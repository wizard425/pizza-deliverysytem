using PizzaDeliveryBackend.Models;

namespace PizzaDeliveryBackend.Services
{
    public interface IAuthService
    {
        UserView Authenticate(User model);            
     }
}
