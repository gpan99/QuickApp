// ====================================================
// More Templates: https://www.ebenmonney.com/templates
// Email: support@ebenmonney.com
// ====================================================

using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace QuickApp.ViewModels
{
    public class TodoViewModel
    {
        public int Id { get; set; }
        public string Task { get; set; }
        public string Description { get; set; }

        public bool Completed { get; set; } // is completed
        public bool Marked { get; set; } // as important
    }
}
