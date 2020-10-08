using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using server;
using server.Models;

namespace server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HousingDataObjectsController : ControllerBase
    {
        private readonly HousingDataObjectsDbContext _context;

        public HousingDataObjectsController(HousingDataObjectsDbContext context)
        {
            _context = context;
        }

        // GET: api/HousingDataObjects
        [HttpGet]
        public async Task<ActionResult<IEnumerable<HousingDataDTO>>> GetHousingDataObjects()
        {
            return await _context.HousingDataObjects.Select(x=> HousingDataToDTO(x)).ToListAsync();
        }

        // GET: api/HousingDataObjects/5
        [HttpGet("{id}")]
        public async Task<ActionResult<HousingDataDTO>> GetHousingDataObject(long id)
        {
            var housingDataObject = await _context.HousingDataObjects.FindAsync(id);

            if (housingDataObject == null)
            {
                return NotFound();
            }

            return HousingDataToDTO(housingDataObject);
        }

        // PUT: api/HousingDataObjects/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateHousingDataObject(long id, HousingDataDTO housingDataDTO)
        {
            if (id != housingDataDTO.ID)
            {
                return BadRequest();
            }

            //_context.Entry(housingDataObject).State = EntityState.Modified;Original Project Code Generated This.
            var houseDataObject = await _context.HousingDataObjects.FindAsync(id);
            if (houseDataObject == null) {
                return NotFound();
            }

            houseDataObject.ID = housingDataDTO.ID;
            //More Database Fields Here...

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!HousingDataObjectExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/HousingDataObjects
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<HousingDataDTO>> CreateHousingDataObject(HousingDataDTO housingDataDTO)
        {
            var housingDataObject = new HousingDataObject
            {
                ID = housingDataDTO.ID,
                //More Database Fields go here...
            };

            _context.HousingDataObjects.Add(housingDataObject);
            await _context.SaveChangesAsync();

            //return CreatedAtAction("GetHousingDataObject", new { id = housingDataObject.ID }, housingDataObject);//Originally Generated Code Piece
            return CreatedAtAction(nameof(GetHousingDataObject), new { id = housingDataObject.ID }, HousingDataToDTO(housingDataObject));//Web API Doc Code Piece
        }

        // DELETE: api/HousingDataObjects/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<HousingDataObject>> DeleteHousingDataObject(long id)
        {
            var housingDataObject = await _context.HousingDataObjects.FindAsync(id);
            if (housingDataObject == null)
            {
                return NotFound();
            }

            _context.HousingDataObjects.Remove(housingDataObject);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool HousingDataObjectExists(long id)
        {
            return _context.HousingDataObjects.Any(e => e.ID == id);
        }

        private static HousingDataDTO HousingDataToDTO(HousingDataObject housingDataObject) =>
        new HousingDataDTO
        {
            ID = housingDataObject.ID
            //More Database Fields Go Here...
        };
    }
}
