namespace PizzaDeliveryBackend.Models
{
    public class OrderItem : EntityBase
    {
        public int PizzaId { get; set; }
        public Pizza Pizza { get; set; }
    }
}
