using Microsoft.EntityFrameworkCore;
namespace PizzaDeliveryBackend.Models
{
    public class MySQLDatabaseContext : DbContext
    {

        public DbSet<Pizza> Pizzas { get; set; }
        public DbSet<Extra> Extras { get; set; }
        public MySQLDatabaseContext(DbContextOptions<MySQLDatabaseContext> options) : base(options) { }

    }
}
