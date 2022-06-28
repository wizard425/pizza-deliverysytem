namespace PizzaDeliveryBackend.Models
{
    public class OrderDrink : EntityBase
    {
        public int OrderId { get; set; }
        public int DrinkId { get; set; }
        public Drink? Drink { get; set; }
    }
}
