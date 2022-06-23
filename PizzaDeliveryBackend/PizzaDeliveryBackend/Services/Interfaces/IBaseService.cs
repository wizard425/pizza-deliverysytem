using PizzaDeliveryBackend.Models;

namespace PizzaDeliveryBackend.Services
{
    public interface IBaseService<T> where T : class
    {
        IList<T> GetAll();
        T Add(T model);
        T Get(int id);
        T Update(T model);
        void Delete(T model);
    }
}
