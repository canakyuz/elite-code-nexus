
import projectsData from "@/content/projects/data.json";

const Projects = () => {
  return (
    <section id="work" className="py-32 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-20">
          {/* Left column */}
          <div className="lg:col-span-3">
            <div className="space-y-4">
              <div className="text-8xl font-light text-gray-200">{projectsData.sectionNumber}</div>
              <h2 className="text-3xl font-light text-black">{projectsData.title}</h2>
            </div>
          </div>

          {/* Right column */}
          <div className="lg:col-span-9 space-y-16">
            {projectsData.projects.map((project, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="space-y-6 py-8 border-b border-gray-200 hover:border-black transition-colors">
                  <div className="flex items-start justify-between">
                    <div className="space-y-4">
                      <h3 className="text-2xl font-light text-black group-hover:text-gray-600 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed max-w-lg">
                        {project.description}
                      </p>
                    </div>
                    <div className="text-sm font-mono text-gray-400">
                      {project.year}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="text-xs font-mono text-gray-500 uppercase tracking-wider"
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
