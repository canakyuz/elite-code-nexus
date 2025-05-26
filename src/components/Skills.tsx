
import skillsData from "@/content/skills/data.json";

const Skills = () => {
  return (
    <section id="skills" className="py-32 px-6 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-20">
          <div className="lg:col-span-3 space-y-8">
            <div className="space-y-6">
              <div className="text-8xl font-extralight text-blue-100 leading-none">{skillsData.sectionNumber}</div>
              <h2 className="text-title text-slate-900 relative">
                {skillsData.title}
                <div className="absolute -bottom-2 left-0 w-16 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
              </h2>
            </div>
          </div>

          <div className="lg:col-span-9">
            <div className="grid md:grid-cols-2 gap-12">
              {skillsData.categories.map((category, index) => (
                <div key={index} className="group">
                  <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100 hover:border-blue-200">
                    <h3 className="text-xl font-medium text-slate-900 mb-8 pb-4 border-b border-slate-100 relative">
                      {category.title}
                      <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-blue-500 group-hover:w-16 transition-all duration-300"></div>
                    </h3>
                    <div className="space-y-4">
                      {category.skills.map((skill, skillIndex) => (
                        <div 
                          key={skillIndex}
                          className="flex items-center gap-3 text-slate-600 hover:text-blue-600 transition-colors font-mono text-sm group/skill"
                        >
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full group-hover/skill:bg-blue-600 transition-colors"></div>
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
