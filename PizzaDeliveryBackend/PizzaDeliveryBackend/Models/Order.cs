namespace PizzaDeliveryBackend.Models
{
    public class Order : EntityBase
    {
        public IList<OrderItem> Pizzas { get; set; }
        public String Location {  get; set; }
        public String? Notes { get; set; }
        public bool IsCompleted { get; set; }
        public String PhoneNumber { get; set; }
    }
}
