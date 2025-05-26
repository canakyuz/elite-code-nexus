import skillsData from "@/content/skills/data.json";

const Skills = () => {
  return (
    <section id="skills" className="py-32 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-20">
          <div className="lg:col-span-3 space-y-8">
            <div className="space-y-4">
              <div className="text-6xl font-extralight text-slate-200">{skillsData.sectionNumber}</div>
              <h2 className="text-title text-slate-900">{skillsData.title}</h2>
            </div>
          </div>

          <div className="lg:col-span-9">
            <div className="grid md:grid-cols-2 gap-16">
              {skillsData.categories.map((category, index) => (
                <div key={index} className="space-y-8">
                  <h3 className="text-xl font-light text-slate-900 pb-4 border-b border-slate-200">
                    {category.title}
                  </h3>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div 
                        key={skillIndex}
                        className="text-slate-600 hover:text-blue-500 transition-colors font-mono text-sm"
                      >
                        {skill}
                      </div>
                    ))}
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
