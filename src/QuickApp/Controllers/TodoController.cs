
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using DAL;
using QuickApp.ViewModels;
using AutoMapper;
using Microsoft.Extensions.Logging;
using QuickApp.Helpers;
using DAL.Models;

namespace QuickApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TodoController : Controller
    {
        private IUnitOfWork _unitOfWork;
        readonly ILogger _logger;
        readonly IEmailSender _emailer;


        public TodoController(IUnitOfWork unitOfWork, ILogger<TodoController> logger, IEmailSender emailer)
        {
            _unitOfWork = unitOfWork;
            _logger = logger;
            _emailer = emailer;
        }


        // GET: api/values
        [HttpGet]
        public IActionResult Get()
        {
            var alltodos = _unitOfWork.Todos.GetAllData();

            var todos = Mapper.Map<IEnumerable<TodoViewModel>>(alltodos);

            return Ok(todos);
        }

        // GET: api/Todo/5
        [HttpGet("{id}", Name = "Get")]
        public IActionResult Get(int id)
        {
            try
            {
                var todo = _unitOfWork.Todos.GetById(id);

                if (todo != null)
                    return Ok(Mapper.Map<Todo,TodoViewModel>(todo));
                else
                    return NotFound();
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to get orders: {ex}");
                return null;// BadRequest("Failed to get orders");
            }
        }

        // POST: api/Todo
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT: api/Todo/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
