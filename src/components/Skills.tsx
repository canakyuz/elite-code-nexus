
import skillsData from "@/content/skills/data.json";

const Skills = () => {
  return (
    <section className="py-32 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-20">
          {/* Left column */}
          <div className="lg:col-span-3">
            <div className="space-y-4">
              <div className="text-8xl font-light text-gray-200">{skillsData.sectionNumber}</div>
              <h2 className="text-3xl font-light text-black">{skillsData.title}</h2>
            </div>
          </div>

          {/* Right column */}
          <div className="lg:col-span-9">
            <div className="grid md:grid-cols-2 gap-12">
              {skillsData.categories.map((category, index) => (
                <div key={index} className="space-y-6">
                  <h3 className="text-xl font-light text-black border-b border-gray-300 pb-3">
                    {category.title}
                  </h3>
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div 
                        key={skillIndex}
                        className="text-gray-600 font-mono text-sm hover:text-black transition-colors"
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
