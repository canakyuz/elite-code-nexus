
const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: "⚡",
      skills: ["React", "Next.js", "TypeScript", "Vue.js", "Tailwind CSS", "React Native"],
      level: 95
    },
    {
      title: "Backend", 
      icon: "🔧",
      skills: ["Node.js", "Python", "Go", "PostgreSQL", "MongoDB", "GraphQL"],
      level: 90
    },
    {
      title: "Cloud & DevOps",
      icon: "☁️",
      skills: ["AWS", "Docker", "Kubernetes", "Terraform", "CI/CD", "Microservices"],
      level: 85
    },
    {
      title: "Mobile & Others",
      icon: "📱",
      skills: ["React Native", "Flutter", "iOS", "Android", "Blockchain", "AI/ML"],
      level: 80
    }
  ];

  return (
    <section id="skills" className="py-32 px-6 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-8 mb-20">
          <div className="text-sm font-mono text-gray-400">003</div>
          <div className="h-px bg-gradient-to-r from-gray-700 to-transparent flex-1"></div>
          <h2 className="text-6xl font-bold text-white">SKILLS</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {skillCategories.map((category, index) => (
            <div key={index} className="group">
              <div className="border border-gray-800 rounded-2xl p-8 hover:border-gray-600 transition-all duration-300 h-full">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-4">
                    <span className="text-3xl">{category.icon}</span>
                    <h3 className="text-2xl font-bold">{category.title}</h3>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-blue-400">{category.level}%</div>
                    <div className="text-xs font-mono text-gray-500">PROFICIENCY</div>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="mb-8">
                  <div className="w-full bg-gray-800 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-blue-400 to-purple-500 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${category.level}%` }}
                    ></div>
                  </div>
                </div>

                {/* Skills grid */}
                <div className="grid grid-cols-2 gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex}
                      className="px-3 py-2 bg-gray-900 rounded-lg text-sm font-mono text-gray-300 hover:bg-gray-800 hover:text-white transition-all duration-200 text-center"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div className="mt-20 text-center">
          <div className="text-lg text-gray-400 mb-4">
            "The best way to predict the future is to create it."
          </div>
          <div className="text-sm font-mono text-gray-600">
            — Constantly evolving with technology
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
