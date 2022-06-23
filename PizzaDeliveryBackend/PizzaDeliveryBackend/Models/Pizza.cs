namespace PizzaDeliveryBackend.Models
{
    public class Pizza : EntityBase
    {
        public String Name { get; set; }
        public String? Description { get; set; }
        public double Price { get; set; }
        public ICollection<Extra>? Extras { get; set; }

    }
}
