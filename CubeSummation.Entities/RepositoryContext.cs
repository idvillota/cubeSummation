using CubeSummation.Entities.Models;
using Microsoft.EntityFrameworkCore;

namespace CubeSummation.Entities
{
    public class RepositoryContext : DbContext
    {
        public DbSet<Cube> Cubes { get; set; }
        public DbSet<Log> Logs { get; set; }

        public RepositoryContext(DbContextOptions options)
            :base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
        }

    }
}
