using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SehirRehberi.API.Data;

namespace SehirRehberi.API.Controllers
{
    [Route("api/[controller]")]
    public class ValuesController : Controller
    {
        private DataContext _context;

        public ValuesController(DataContext context)
        {
            _context = context;

        }

        [HttpGet]
        public async Task<ActionResult> GetValues()
        {
            var result = await _context.Values.ToListAsync();

            return Ok(result);
        }

        // GET api/values/5

        //Async Action’lar I/O bağımlı uygulamalarda kullanıldığında uygulamanın kaynakları daha iyi kullanması ile ölçeklenebilirliğini artırır.
        //Bununla birlikte Async Action’lar sıfır maliyetle gelmez, Async kod yazmak daha fazla dikkat, uzmanlık ister. 
        [HttpGet("{id}")]
        public async Task<ActionResult> GetValue(int id)
        {
            var result = await _context.Values.FirstOrDefaultAsync(p => p.Id == id);
            return Ok(result);
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
