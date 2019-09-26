using System;

namespace CubeSummation.Entities.Models
{
    public class ArrayValue : IEntity
    {
        public Guid Id { get; set; }

        public int X { get; set; }

        public int Y { get; set; }

        public int Z { get; set; }

        public int Value { get; set; }

        public Cube Cube { get; set; }
    }
}
