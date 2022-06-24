namespace PizzaDeliveryBackend.Models
{
    public class OrderItem : EntityBase
    {
        public int? OrderId { get; set; }
        public int PizzaId { get; set; }
        public Pizza? Pizza { get; set; }
        public string Notes { get; set; }
        public IList<OrderItemExtra> OrderItemExtras { get; set;}
    }
}
