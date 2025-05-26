import skillsData from "@/content/skills/data.json";
const Skills = () => {
  return <section id="skills" className="py-12 px-4 bg-gradient-to-br from-blue-50 via-white to-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-3 space-y-4">
            <div className="space-y-3">
              <div className="text-3xl font-extralight text-blue-100 leading-none font-departure">{skillsData.sectionNumber}</div>
              <h2 className="text-title text-slate-900 relative font-departure">
                {skillsData.title}
                <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
              </h2>
            </div>
          </div>

          <div className="lg:col-span-9">
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
              {skillsData.categories.map((category, index) => <div key={index} className="group">
                  <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100 hover:border-blue-200">
                    <h3 className="text-sm font-medium text-slate-900 mb-3 pb-2 border-b border-slate-100 relative font-departure">
                      {category.title}
                      <div className="absolute bottom-0 left-0 w-4 h-0.5 bg-blue-500 group-hover:w-8 transition-all duration-300"></div>
                    </h3>
                    <div className="grid grid-cols-2 gap-1">
                      {category.skills.map((skill, skillIndex) => <div key={skillIndex} className="flex items-center gap-1.5 text-slate-600 hover:text-blue-600 transition-colors font-departure text-xs group/skill p-1.5 rounded hover:bg-blue-50">
                          <div className="w-1 h-1 bg-blue-400 rounded-full group-hover/skill:bg-blue-600 transition-colors flex-shrink-0"></div>
                          <span className="truncate">{skill}</span>
                        </div>)}
                    </div>
                  </div>
                </div>)}
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Skills;