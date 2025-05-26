
import projectsData from "@/content/projects/data.json";

const Projects = () => {
  return (
    <section id="work" className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-20">
          <div className="lg:col-span-3 space-y-8">
            <div className="space-y-4">
              <div className="text-6xl font-extralight text-slate-200">{projectsData.sectionNumber}</div>
              <h2 className="text-title text-slate-900">{projectsData.title}</h2>
            </div>
          </div>

          <div className="lg:col-span-9 space-y-12">
            {projectsData.projects.map((project, index) => (
              <div key={index} className="group cursor-pointer border-b border-slate-100 pb-12 hover:border-blue-200 transition-all duration-300">
                <div className="space-y-8">
                  <div className="flex items-start justify-between">
                    <div className="space-y-6 flex-1">
                      <h3 className="text-2xl font-light text-slate-900 group-hover:text-blue-500 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-body text-slate-600 max-w-2xl">
                        {project.description}
                      </p>
                    </div>
                    <div className="text-small text-slate-400 ml-8">
                      {project.year}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="text-xs font-mono text-slate-500 uppercase tracking-wider px-3 py-1 bg-slate-50 rounded-full"
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
