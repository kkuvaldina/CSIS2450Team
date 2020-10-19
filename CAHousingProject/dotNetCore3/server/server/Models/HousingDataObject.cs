using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
    
namespace server
{
    public class HousingDataObject
    {
        public long ID { get; set; }
        public float Longitude { get; set; }
        public float Latitude { get; set; }
        public float Housing_Median_Age { get; set; }
        public float Total_Rooms { get; set; }
        public float Bedrooms { get; set; }
        public float Population { get; set; }
        public float HouseHolds { get; set; }
        public float Median_Income { get; set; }
        public float Median_House_Value { get; set; }
        public float Ocean_Proximity { get; set; }
    }    
}
