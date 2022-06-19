namespace PizzaDeliveryBackend.Models
{
    public class Extra : EntityBase
    {
        public String Name { get; set; }
        public double Price { get; set; }
        public virtual IList<Pizza> Pizzas { get; set; }
    }
}
