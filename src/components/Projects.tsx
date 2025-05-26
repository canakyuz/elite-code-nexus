
import { Link } from "react-router-dom";
import projectsData from "@/content/projects/data.json";
import { ArrowRight, ExternalLink } from "lucide-react";

const Projects = () => {
  return (
    <section id="work" className="py-12 px-4 bg-gradient-to-br from-white to-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-3 space-y-4">
            <div className="space-y-3">
              <div className="text-3xl font-extralight text-blue-100 leading-none font-departure">{projectsData.sectionNumber}</div>
              <h2 className="text-xl text-slate-900 relative font-departure">
                {projectsData.title}
                <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
              </h2>
            </div>
          </div>

          <div className="lg:col-span-9 grid md:grid-cols-2 gap-4">
            {projectsData.projects.map((project, index) => (
              <div key={index} className="group">
                <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100 hover:border-blue-200 hover:-translate-y-0.5 h-full flex flex-col">
                  <div className="space-y-3 flex-1">
                    <div className="flex items-start justify-between">
                      <div className="space-y-2 flex-1">
                        <div className="flex items-center gap-2">
                          <h3 className="text-lg font-light text-slate-900 group-hover:text-blue-600 transition-colors font-departure">
                            {project.title}
                          </h3>
                          <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-blue-500 transition-colors" />
                        </div>
                        <p className="text-xs text-slate-600 leading-relaxed font-departure line-clamp-2">
                          {project.description}
                        </p>
                      </div>
                      <div className="ml-3 bg-gradient-to-r from-blue-50 to-blue-100 px-2 py-1 rounded border border-blue-200">
                        <span className="text-xs text-blue-700 font-medium font-departure">
                          {project.year}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="text-xs font-departure text-blue-600 uppercase tracking-wider px-2 py-0.5 bg-blue-50 rounded border border-blue-100"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="text-xs font-departure text-slate-400 px-2 py-0.5">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex justify-end pt-3 mt-auto">
                    <Link 
                      to={`/project/${project.id}`}
                      className="inline-flex items-center gap-1.5 text-blue-600 hover:text-blue-700 transition-colors font-medium group/link px-3 py-1.5 rounded hover:bg-blue-50 font-departure text-xs"
                    >
                      View Project
                      <ArrowRight className="w-3 h-3 transition-transform group-hover/link:translate-x-0.5" />
                    </Link>
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
