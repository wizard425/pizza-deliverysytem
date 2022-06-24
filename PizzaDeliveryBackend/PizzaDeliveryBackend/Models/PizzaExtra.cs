namespace PizzaDeliveryBackend.Models
{
    public class PizzaExtra
    {
        public int PizzaId  { get; set; }
        public int ExtraId { get; set; }
        public Extra? Extra { get; set; }
    }
}
