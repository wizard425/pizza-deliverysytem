using Microsoft.IdentityModel.Tokens;
using PizzaDeliveryBackend.Models;
using System.IdentityModel.Tokens.Jwt;
using System.Text;

namespace PizzaDeliveryBackend.Services
{
    public class AuthService : IAuthService
    {

        MySQLDatabaseContext _context;
        private readonly IConfiguration _conf;

        public AuthService(MySQLDatabaseContext context, IConfiguration conf)
        {
            _context = context;
            _conf = conf;
        }


        public UserView? Authenticate(User model)
        {
            var userInDb = _context.Users.Where(x => x.Username == model.Username).FirstOrDefault();

            if (userInDb != null && userInDb.Password == model.Password)
            {
                var tokenHandler = new JwtSecurityTokenHandler();
                var key = Encoding.ASCII.GetBytes(_conf["JWTKey"]);
                var tokenDescriptor = new SecurityTokenDescriptor
                {
                    Expires = DateTime.UtcNow.AddYears(1),
                    SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
                };
                var token = tokenHandler.CreateToken(tokenDescriptor);
                var ret = new UserView()
                {
                    Username = userInDb.Username,
                    Token = tokenHandler.WriteToken(token)
                };
                return ret;
            }
            return null;
        }

    }
}
