using Microsoft.EntityFrameworkCore;
using PizzaDeliveryBackend.Models;
using PizzaDeliveryBackend.Services;
using PizzaDeliveryBackend.SignalR;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddDbContext<MySQLDatabaseContext>(options =>
{
    var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
    options.UseMySql(connectionString, ServerVersion.AutoDetect(connectionString));
});

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: "All",
                      policy =>
                      {
                          policy.AllowAnyHeader().AllowAnyOrigin().AllowAnyMethod();
                      });
});

builder.Services.AddSignalR();

// Services with Dependency Injection
builder.Services.AddScoped<IPizzaService, PizzaService>();
builder.Services.AddScoped<IExtraService, ExtraService>();
builder.Services.AddScoped<IOrderService, OrderService>();
builder.Services.AddScoped<IDrinkService, DrinkService>();
builder.Services.AddScoped<IAuthService, AuthService>();



builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors("All");
app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.MapHub<PizzaHub>("/signalr");
app.Run();