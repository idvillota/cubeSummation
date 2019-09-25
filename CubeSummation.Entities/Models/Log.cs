using System;

namespace CubeSummation.Entities.Models
{
    public class Log: IEntity
    {
        public Guid Id { get; set; }
        public DateTime TimeStamp { get; set; }
        public string Message { get; set; }
        public string Level { get; set; }
        public string Logger { get; set; }
    }
}
