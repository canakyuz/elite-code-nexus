
import { Link } from "react-router-dom";
import projectsData from "@/content/projects/data.json";
import { ArrowRight } from "lucide-react";

const Projects = () => {
  return (
    <section id="work" className="py-32 px-6 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-20">
          <div className="lg:col-span-3 space-y-8">
            <div className="space-y-6">
              <div className="text-8xl font-extralight text-blue-100 leading-none">{projectsData.sectionNumber}</div>
              <h2 className="text-title text-slate-900 relative">
                {projectsData.title}
                <div className="absolute -bottom-2 left-0 w-16 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
              </h2>
            </div>
          </div>

          <div className="lg:col-span-9 space-y-8">
            {projectsData.projects.map((project, index) => (
              <div key={index} className="group">
                <div className="bg-white p-10 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100 hover:border-blue-200">
                  <div className="space-y-8">
                    <div className="flex items-start justify-between">
                      <div className="space-y-6 flex-1">
                        <h3 className="text-3xl font-light text-slate-900 group-hover:text-blue-600 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-body text-slate-600 max-w-2xl leading-relaxed">
                          {project.description}
                        </p>
                      </div>
                      <div className="ml-8 bg-slate-50 px-4 py-2 rounded-lg">
                        <span className="text-small text-slate-500 font-medium">
                          {project.year}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-3 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="text-xs font-mono text-blue-600 uppercase tracking-wider px-4 py-2 bg-blue-50 rounded-full border border-blue-100 hover:bg-blue-100 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex justify-end">
                      <Link 
                        to={`/project/${project.id}`}
                        className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors font-medium group/link"
                      >
                        Detayları İncele
                        <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
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
