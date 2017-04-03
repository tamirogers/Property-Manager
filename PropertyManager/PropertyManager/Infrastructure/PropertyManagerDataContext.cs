using PropertyManager.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace PropertyManager.Infrastructure
{
    public class PropertyManagerDataContext : DbContext
    {
        //added 
        public PropertyManagerDataContext() : base("PropertyManager")
        {
        }
        public IDbSet<Property> Properties { get; set; }

        public IDbSet<User> Users { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            //implement connection to database
            //one to many, properties to User. 


           
            //one to many, User to Properties

            modelBuilder.Entity<User>()
                .HasMany(User => User.Properties)
                .WithRequired(Properties => Properties.User)
                .HasForeignKey(Properties => Properties.UserId);

            base.OnModelCreating(modelBuilder);


        }

    }
}