namespace PizzaDeliveryBackend.Models
{
    public class Drink : EntityBase
    {
        public string Name { get; set; }
        public string? Description { get; set; }
        public double Price { get; set; }
    }
}
