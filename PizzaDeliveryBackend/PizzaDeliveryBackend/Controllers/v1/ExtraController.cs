﻿using Microsoft.AspNetCore.Mvc;
using PizzaDeliveryBackend.Models;
using PizzaDeliveryBackend.Services;

namespace PizzaDeliveryBackend.Controllers
{
    [ApiController]
    [Route("v1/extra")]
    public class ExtraController : ControllerBase
    {

        MySQLDatabaseContext _context;
        IExtraService _service;

        public ExtraController(MySQLDatabaseContext context, IExtraService service)
        {
            _context = context;
            _service = service;
        }


        [HttpGet]
        public IList<Extra> GetAll()
        {
            var ret = _service.GetAll();
            return ret;
        }

        [HttpGet("{extraId}")]
        public Extra Get(int extraId)
        {
            var ret = _service.Get(extraId);
            return ret;
        }

        [HttpPost]
        public Extra Add([FromBody] Extra model)
        {
            _service.Add(model);

            return model;
        }

        [HttpPut("extraId")]
        public Extra Update([FromBody] Extra model)
        {
            _service.Update(model);

            return model;
        }

    }
}