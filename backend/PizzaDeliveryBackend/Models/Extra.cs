using System.Text.Json.Serialization;

namespace PizzaDeliveryBackend.Models
{
    public class Extra : EntityBase
    {
        public String Name { get; set; }
        public double Price { get; set; }
    }
}
