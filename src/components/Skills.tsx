
import skillsData from "@/content/skills/data.json";

const Skills = () => {
  return (
    <section id="skills" className="py-16 px-4 bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4 space-y-6">
            <div className="space-y-4">
              <div className="text-5xl font-extralight text-blue-100 leading-none font-departure">{skillsData.sectionNumber}</div>
              <h2 className="text-2xl text-slate-900 relative font-departure font-light">
                {skillsData.title}
                <div className="absolute -bottom-2 left-0 w-16 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed font-departure">
                Modern teknolojiler ve metodolojiler ile çözüm odaklı yaklaşım
              </p>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="grid md:grid-cols-2 gap-6">
              {skillsData.categories.map((category, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-slate-100">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-slate-900 font-departure">
                      {category.title}
                    </h3>
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-sm"></div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <div 
                        key={skillIndex}
                        className="flex items-center gap-3 text-slate-700 font-departure text-sm p-2"
                      >
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        <span className="font-medium">{skill}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-slate-100">
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-slate-500 font-departure">
                        {category.skills.length} teknoloji
                      </span>
                      <div className="flex space-x-1">
                        {[...Array(3)].map((_, i) => (
                          <div 
                            key={i}
                            className="w-1.5 h-1.5 bg-blue-400 rounded-full opacity-60"
                          ></div>
                        ))}
                      </div>
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
