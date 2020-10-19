using CsvHelper;
using Microsoft.AspNetCore.Mvc;
using server_csvfile.Models;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace server_csvfile.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class HousingDataController
    {
        /*
        [HttpGet]
        public IEnumerable<HousingDataObject> Get()
        {
            
            /*
            TextReader reader = new StreamReader("housing.csv");
            var csvReader = new CsvReader(reader, CultureInfo.CurrentCulture);
            var records = csvReader.GetRecords<HousingDataObject>().ToList();
            return records;
            */

        /*
        HousingDataController c = (HousingDataController)records;
        return c;
        */

        /*
        return new List<HousingDataObject> { new HousingDataObject {
            Longitude = 0,
            Latitude = 1,
            Housing_Median_Age = 2,
            Total_Rooms = 3,
            Total_Bedrooms = 4,
            HouseHolds = 8,
            Median_Income = 9,
            Median_House_Value = 5,
            Population = 6,
            Ocean_Proximity = 7,
        }};
        */
        //return Enumerable.Select()
        /*
        var records = File.ReadAllText("housing.csv");
        return records;
        
      }
    */
    }
}
