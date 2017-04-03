using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using PropertyManager.Infrastructure;
using PropertyManager.Models;

namespace PropertyManager.Controllers
{
    public class PropertiesController : ApiController
    {
        private PropertyManagerDataContext db = new PropertyManagerDataContext();

        // GET: api/Properties/Filter
        [Route("api/Properties/Filter")]
        [HttpGet]
        public IQueryable<Property> FilterProperties([FromUri]UserPropertySearch fieldsObject)
        {
            IQueryable<Property> ResultSet = db.Properties;

            if (!String.IsNullOrEmpty (fieldsObject.Zip)) 
            {
                ResultSet = ResultSet.Where(property => property.Zip == fieldsObject.Zip);
            }
            if (!String.IsNullOrEmpty (fieldsObject.City))
            {
                ResultSet = ResultSet.Where(property => property.City == fieldsObject.City);
            }


            if (fieldsObject.MinRent>0)
           {

                ResultSet = ResultSet.Where(p => p.Rent >= fieldsObject.MinRent);
            }

            if (fieldsObject.MaxRent>0)
            {
                ResultSet = ResultSet.Where(p => p.Rent <= fieldsObject.MaxRent);
            }
            return ResultSet;


            ////Retrieve Minimum Date
            //var MinDate = (from d in dataRows select d.Date).Min();

            ////Retrieve Maximum Date
            //var MaxDate = (from d in dataRows select d.Date).Max();

            //.Properties if for zip then var 

        }



        // GET: api/Properties/Username
        [Route("api/Properties/Username")]
        [HttpGet]
        public IQueryable<Property> SearchPropertyByUsername([FromUri]UserPropertySearch SearchUser)
        {
            //getting out just username form object

            //user = db.Users.FirstOrDefault(u => u.UserName == username);
            //crosses over tables
            string username = SearchUser.UserName;
            IQueryable<Property> user = db.Properties.Where(u => u.User.UserName == username);

            return user;
        }


        //IQueryable<Property> user = db.Properties.Where(u => u.User.UserName == username);

        // GET: api/Properties
        public IQueryable<Property> GetProperties()
        {
            return db.Properties;
        }





        // GET: api/Properties/5
        [ResponseType(typeof(Property))]
        public IHttpActionResult GetProperty(int id)
        {

            Property property = db.Properties.Find(id);
            if (property == null)
            {
                return NotFound();
            }

            return Ok(property);
        }



        // PUT: api/Properties/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutProperty(int id, Property property)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != property.PropertyId)
            {
                return BadRequest();
            }

            db.Entry(property).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PropertyExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Properties
        [ResponseType(typeof(Property))]
        public IHttpActionResult PostProperty(Property property)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Properties.Add(property);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = property.PropertyId }, property);
        }

        // DELETE: api/Properties/5
        [ResponseType(typeof(Property))]
        public IHttpActionResult DeleteProperty(int id)
        {
            Property property = db.Properties.Find(id);
            if (property == null)
            {
                return NotFound();
            }

            db.Properties.Remove(property);
            db.SaveChanges();

            return Ok(property);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool PropertyExists(int id)
        {
            return db.Properties.Count(e => e.PropertyId == id) > 0;
        }
    }
}