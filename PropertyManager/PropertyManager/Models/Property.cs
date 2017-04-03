using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace PropertyManager.Models
{
    public class Property
    {//primary key
        public int PropertyId { get; set; }
        //foreign key
        public int UserId { get; set; }
        public string PropertyName { get; set; }
        public string AddressOne { get; set; }
        public string AddressTwo { get; set; }
        public string City { get; set; }
        public string State { get; set;}

        [Column(TypeName = "VARCHAR")]
        [StringLength(5)]
        public string Zip { get; set; }
        public string Phone { get; set; }
        public int Rent { get; set; }
        public int SquareFootage { get; set; }
        public int Bedrooms { get; set;}
        public int Baths { get; set; }
        public bool Pets { get; set; }
        public string LeaseTerm { get; set; }
        public string Photo { get; set; }

        //public byte[] Photo { get; set; }

        //add an entity relationship mapping User
        public User User { get; set; }
       
    }
}