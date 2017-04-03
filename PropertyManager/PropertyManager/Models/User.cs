using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PropertyManager.Models
{
    public class User
    { //primary key
        public int UserId { get; set; }

        //columns
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string email { get; set; }
        public bool IsPropertyManager { get; set; }
        public string UserName { get; set; }

        //add an ICollection entity relationship mapping to Property
        public virtual ICollection<Property> Properties { get; set; }
     
    }
}