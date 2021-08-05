using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace RevitApi.Models
{
    public class Project
    {
        public long Id { get; set; }
        public string Title { get; set; }
        public string Data { get; set; }
    }
}
