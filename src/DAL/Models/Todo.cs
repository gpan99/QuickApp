// ====================================================
// More Templates: https://www.ebenmonney.com/templates
// Email: support@ebenmonney.com
// ====================================================

using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Models
{
    public class Todo : AuditableEntity
    {
        public int Id { get; set; }
        public string Task { get; set; }
        public string Description { get; set; }

        public bool Completed { get; set; } = false;
        public bool Marked { get; set; } = false;

        public DateTime DateCreated { get; set; }
        public DateTime DateModified { get; set; }

    }
}
