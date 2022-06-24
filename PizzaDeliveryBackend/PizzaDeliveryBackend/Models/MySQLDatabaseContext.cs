using Microsoft.EntityFrameworkCore;

namespace PizzaDeliveryBackend.Models
{
    public class MySQLDatabaseContext : DbContext
    {
        public DbSet<Pizza> Pizzas { get; set; }
        public DbSet<Extra> Extras { get; set; }
        public DbSet<PizzaExtra> PizzaExtras { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<OrderItem> OrderItems { get; set; }
        public DbSet <OrderItemExtra> OrderItemExtras { get; set; }
        public MySQLDatabaseContext(DbContextOptions<MySQLDatabaseContext> options) : base(options) { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Relation between Pizza and Extras ( for definition of different pizzas)
            modelBuilder.Entity<PizzaExtra>().HasKey(bc => new { bc.PizzaId, bc.ExtraId });
            modelBuilder.Entity<Pizza>().HasMany(x => x.PizzaExtras).WithOne().HasForeignKey(x => x.PizzaId);
            modelBuilder.Entity<PizzaExtra>().HasOne(x => x.Extra).WithMany().HasForeignKey(x => x.ExtraId);


            // Relation between Order and OrderItems
            modelBuilder.Entity<Order>().HasMany(x => x.OrderItems).WithOne().HasForeignKey(oi => oi.OrderId);

            // Relation between OrderItem and Pizza
            modelBuilder.Entity<OrderItem>().HasOne(x => x.Pizza).WithMany().HasForeignKey(pizza => pizza.PizzaId);

            // Relation between OrderItemExtra and OrderItem
            modelBuilder.Entity<OrderItem>().HasMany(x => x.OrderItemExtras).WithOne().HasForeignKey(extra => extra.OrderItemId);

            // Relation between OrderItemExtra and Extra
            modelBuilder.Entity<OrderItemExtra>().HasOne(x => x.Extra).WithMany().HasForeignKey(x => x.ExtraId);
        }
    }
}
