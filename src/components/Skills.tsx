
import skillsData from "@/content/skills/data.json";

const Skills = () => {
  return (
    <section id="skills" className="py-16 px-4 bg-gradient-to-br from-blue-50 via-white to-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-3 space-y-6">
            <div className="space-y-4">
              <div className="text-4xl font-extralight text-blue-100 leading-none font-departure">{skillsData.sectionNumber}</div>
              <h2 className="text-title text-slate-900 relative font-departure">
                {skillsData.title}
                <div className="absolute -bottom-1 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
              </h2>
            </div>
          </div>

          <div className="lg:col-span-9">
            <div className="grid md:grid-cols-2 gap-6">
              {skillsData.categories.map((category, index) => (
                <div key={index} className="group">
                  <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-blue-200 hover:-translate-y-1">
                    <h3 className="text-lg font-medium text-slate-900 mb-6 pb-3 border-b border-slate-100 relative font-departure">
                      {category.title}
                      <div className="absolute bottom-0 left-0 w-6 h-0.5 bg-blue-500 group-hover:w-12 transition-all duration-300"></div>
                    </h3>
                    <div className="space-y-3">
                      {category.skills.map((skill, skillIndex) => (
                        <div 
                          key={skillIndex}
                          className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors font-departure text-xs group/skill p-2 rounded-lg hover:bg-blue-50"
                        >
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full group-hover/skill:bg-blue-600 transition-colors group-hover/skill:scale-125"></div>
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
