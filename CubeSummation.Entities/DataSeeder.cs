using CubeSummation.Entities.Models;
using System.Linq;

namespace CubeSummation.Entities
{
    public class DataSeeder
    {
        private RepositoryContext _context;

        public DataSeeder(RepositoryContext context)
        {
            _context = context;
        }

        public void SeedData()
        {
            CreateCubes();
            _context.SaveChanges();
        }

        public void CreateCubes()
        {
            AddNewCube(new Cube
            {
                Size = 2,
            });
        }

        private void AddNewCube(Cube cube)
        {
            var existingCube = _context.Cubes.FirstOrDefault(c => c.Size == cube.Size);

            if (existingCube == null)
                _context.Cubes.Add(cube);
        }
    }
}
