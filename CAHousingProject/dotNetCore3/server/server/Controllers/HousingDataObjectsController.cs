using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
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
            //return null;
            /*
            string path = @"housing.csv";
            using (StreamReader sr = File.OpenText(path))
            {
                string s;


                while ((s = sr.ReadLine()) != null)
                {

                    Console.WriteLine(s);

                }
            }
            
            */
            /*
            try {
                string path = @"housings.csv";
                System.IO.FileInfo file = new System.IO.FileInfo(path);
                Console.WriteLine(file);
                var owners = System.IO.File.ReadAllLines(path);
                return owners;
            } catch (Exception e) {
                throw new Exception(e.Message);
            }
            */
            //System.IO.StreamWriter sw = System.IO.File.AppendText(file);
            //var sw = new StreamWriter(path);
            /*
            sw.WriteLine(email);
            sw.Close();
            sw.Dispose();
            */            
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
            //Database Columns that match the Object.
            houseDataObject.ID = housingDataDTO.ID;
            houseDataObject.Longitude = housingDataDTO.Longitude;
            houseDataObject.Latitude = housingDataDTO.Latitude;
            houseDataObject.Housing_Median_Age = housingDataDTO.Housing_Median_Age;
            houseDataObject.Total_Rooms = housingDataDTO.Total_Rooms;
            houseDataObject.Bedrooms = housingDataDTO.Bedrooms;
            houseDataObject.Population = housingDataDTO.Population;
            houseDataObject.HouseHolds = housingDataDTO.HouseHolds;
            houseDataObject.Median_Income = housingDataDTO.Median_Income;
            houseDataObject.Median_House_Value = housingDataDTO.Median_House_Value;
            houseDataObject.Ocean_Proximity = housingDataDTO.Ocean_Proximity;            

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
                Longitude = housingDataDTO.Longitude,
                Latitude = housingDataDTO.Latitude,
                Housing_Median_Age = housingDataDTO.Housing_Median_Age,
                Total_Rooms = housingDataDTO.Total_Rooms,
                Bedrooms = housingDataDTO.Bedrooms,
                Population = housingDataDTO.Population,
                HouseHolds = housingDataDTO.HouseHolds,
                Median_Income = housingDataDTO.Median_Income,
                Median_House_Value = housingDataDTO.Median_House_Value,
                Ocean_Proximity = housingDataDTO.Ocean_Proximity
                //More Database Columns go here...
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
            ID = housingDataObject.ID,
            Longitude = housingDataObject.Longitude,
            Latitude = housingDataObject.Latitude,
            Housing_Median_Age = housingDataObject.Housing_Median_Age,
            Total_Rooms = housingDataObject.Total_Rooms,
            Bedrooms = housingDataObject.Bedrooms,
            Population = housingDataObject.Population,
            HouseHolds = housingDataObject.HouseHolds,
            Median_Income = housingDataObject.Median_Income,
            Median_House_Value = housingDataObject.Median_House_Value,
            Ocean_Proximity = housingDataObject.Ocean_Proximity
            //Additional Database Fields Go Here...
        };
    }
}
