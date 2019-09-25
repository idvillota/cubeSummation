using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace CubeSummation.Entities.Models
{
    public class Cube : IEntity
    {
        public Guid Id { get; set; }

        public int Size { get; set; }

        [NotMapped]
        public int[,,] Array { get; set; }
    }
}
