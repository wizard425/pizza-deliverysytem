namespace PizzaDeliveryBackend.Models
{
    public class OrderItemExtra : EntityBase
    {
        public int OrderItemId { get; set; }
        public int ExtraId { get; set; }
        public Extra Extra { get; set; }

    }
}
