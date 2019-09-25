using System;

namespace CubeSummation.Entities.Models
{
    public class Cube : IEntity
    {
        public Guid Id { get; set; }

        public int Size { get; set; }

        public int[,,] Array { get; set; }
    }
}
