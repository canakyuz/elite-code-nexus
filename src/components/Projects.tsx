
import projectsData from "@/content/projects/data.json";

const Projects = () => {
  return (
    <section id="work" className="py-32 px-6 bg-gradient-to-br from-blue-25 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-20">
          <div className="lg:col-span-3">
            <div className="space-y-4">
              <div className="text-8xl font-light text-blue-200">{projectsData.sectionNumber}</div>
              <h2 className="text-3xl font-light text-blue-900">{projectsData.title}</h2>
            </div>
          </div>

          <div className="lg:col-span-9 space-y-16">
            {projectsData.projects.map((project, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="space-y-6 py-8 border-b border-blue-200 hover:border-blue-600 transition-colors">
                  <div className="flex items-start justify-between">
                    <div className="space-y-4">
                      <h3 className="text-2xl font-light text-blue-900 group-hover:text-blue-700 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-blue-700 leading-relaxed max-w-lg">
                        {project.description}
                      </p>
                    </div>
                    <div className="text-sm font-mono text-blue-500">
                      {project.year}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="text-xs font-mono text-blue-600 uppercase tracking-wider"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
