
import { Link } from "react-router-dom";
import projectsData from "@/content/projects/data.json";
import { ArrowRight, ExternalLink } from "lucide-react";

const Projects = () => {
  return (
    <section id="work" className="py-16 px-4 bg-gradient-to-br from-white to-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-3 space-y-6">
            <div className="space-y-4">
              <div className="text-4xl font-extralight text-blue-100 leading-none font-departure">{projectsData.sectionNumber}</div>
              <h2 className="text-title text-slate-900 relative font-departure">
                {projectsData.title}
                <div className="absolute -bottom-1 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
              </h2>
            </div>
          </div>

          <div className="lg:col-span-9 space-y-6">
            {projectsData.projects.map((project, index) => (
              <div key={index} className="group">
                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 hover:border-blue-200 hover:-translate-y-1">
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="space-y-3 flex-1">
                        <div className="flex items-center gap-3">
                          <h3 className="text-xl font-light text-slate-900 group-hover:text-blue-600 transition-colors font-departure">
                            {project.title}
                          </h3>
                          <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                        </div>
                        <p className="text-body text-slate-600 max-w-2xl leading-relaxed font-departure">
                          {project.description}
                        </p>
                      </div>
                      <div className="ml-6 bg-gradient-to-r from-blue-50 to-blue-100 px-3 py-1.5 rounded-lg border border-blue-200">
                        <span className="text-xs text-blue-700 font-medium font-departure">
                          {project.year}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="text-xs font-departure text-blue-600 uppercase tracking-wider px-2 py-1 bg-blue-50 rounded-md border border-blue-100 hover:bg-blue-100 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex justify-end pt-3">
                      <Link 
                        to={`/project/${project.id}`}
                        className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors font-medium group/link px-4 py-2 rounded-lg hover:bg-blue-50 font-departure text-xs"
                      >
                        View Details
                        <ArrowRight className="w-3 h-3 transition-transform group-hover/link:translate-x-1" />
                      </Link>
                    </div>
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
