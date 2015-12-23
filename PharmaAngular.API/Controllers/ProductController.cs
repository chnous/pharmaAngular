using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading;
using System.Web.Http;

namespace PharmaAngular.API.Controllers
{
    [RoutePrefix("api/Products")]
    public class ProductController : ApiController
    {
        [Authorize]
        [Route("")]
        public  IHttpActionResult Get()
        {
            return Ok(Product.CreateProducts());
        }




    }

    public class Product
    {
        public int ProductId { get; set; }
        public string Name { get; set; }

        public static List<Product> CreateProducts()
        {
            List<Product> productList = new List<Product>
            {
                new Product {ProductId = 0,  Name = "toto" },
                new Product { ProductId = 1, Name = "titi" }
            };
            for (int i = 2; i < 500; i++)
            {
                productList.Add(new Product { ProductId = i, Name = "test" + i });
                Thread.Sleep(10);
            }

            return productList;

        }
    }
}
