
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using DAL.Models;
using DAL.Repositories.Interfaces;


namespace DAL.Repositories
{
    public class TodoRepository : Repository<Todo>, ITodoRepository
    {
        public TodoRepository(ApplicationDbContext context) : base(context)
        { }


        //public IEnumerable<Customer> GetTopActiveCustomers(int count)
        //{
        //    throw new NotImplementedException();
        //}

        public IEnumerable<Todo> GetAllData()
        {
            return _appContext.Todos               
                .OrderBy(c => c.Task)
                .ToList();
        }
        public Todo GetById(int id)
        {
            return _appContext.Todos
                .Where(p => p.Id == id).FirstOrDefault();                
        }
        private ApplicationDbContext _appContext => (ApplicationDbContext)_context;
    }
}
