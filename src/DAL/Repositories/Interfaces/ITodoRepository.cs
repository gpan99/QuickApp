// ====================================================
// More Templates: https://www.ebenmonney.com/templates
// Email: support@ebenmonney.com
// ====================================================

using DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace DAL.Repositories.Interfaces
{
    public interface ITodoRepository : IRepository<Todo>
    {
      //  IEnumerable<Todo> GetTopActiveCustomers(int count);
        IEnumerable<Todo> GetAllData();
        Todo GetById(int id);
    }
}
