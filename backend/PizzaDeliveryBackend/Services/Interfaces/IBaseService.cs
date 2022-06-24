using PizzaDeliveryBackend.Models;

namespace PizzaDeliveryBackend.Services
{
    public interface IBaseService<T> where T : class
    {
        public IList<T> GetAll();
        public T Add(T model);
        public T Get(int id);
        public T Update(T model);
        public void Delete(T model);
    }
}
