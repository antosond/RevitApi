using Microsoft.EntityFrameworkCore;

namespace RevitApi.Models
{
    public class ProjectsContext : DbContext
    {
        public ProjectsContext(DbContextOptions<ProjectsContext> options) : base(options)
        { 
        }
        public DbSet<Project> Projects { get; set; }

    }
}
