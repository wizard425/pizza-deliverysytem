namespace PizzaDeliveryBackend.Models
{
    public class Order : EntityBase
    {
        public String Location {  get; set; }
        public String? Notes { get; set; }
        public bool IsCompleted { get; set; }
        public String PhoneNumber { get; set; }
        public IList<OrderItem> OrderItems { get; set; }
        public IList<OrderDrink> OrderItemDrinks { get; set; }
    }
}
