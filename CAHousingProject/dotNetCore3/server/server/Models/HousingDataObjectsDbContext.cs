using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace server.Models
{
    public class HousingDataObjectsDbContext: DbContext
    {
        public HousingDataObjectsDbContext(DbContextOptions<HousingDataObjectsDbContext> options) : base(options) { }
        public DbSet<HousingDataObject> HousingDataObjects { get; set; }
    }
}
