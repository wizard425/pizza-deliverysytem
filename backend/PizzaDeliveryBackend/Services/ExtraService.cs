
using PizzaDeliveryBackend.Models;

namespace PizzaDeliveryBackend.Services
{
    public class ExtraService : BaseService<Extra>, IExtraService
    {
        public ExtraService(MySQLDatabaseContext context) : base(context)
        {
        }
    }
}
