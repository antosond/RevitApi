using System.Collections.Generic;

namespace RevitApi.Models
{
    public class ProjectOut
    {
        public long Id { get; set; }
        public string Title { get; set; }
        public List<Data> Data { get; set; }
    }
}