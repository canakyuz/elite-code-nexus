
import { Code, Globe, Settings, User } from "lucide-react";

const Skills = () => {
  const technologies = [
    { name: "JavaScript", level: 95, category: "Frontend" },
    { name: "TypeScript", level: 90, category: "Frontend" },
    { name: "React", level: 95, category: "Frontend" },
    { name: "Next.js", level: 88, category: "Frontend" },
    { name: "Node.js", level: 90, category: "Backend" },
    { name: "Python", level: 85, category: "Backend" },
    { name: "PostgreSQL", level: 80, category: "Database" },
    { name: "MongoDB", level: 82, category: "Database" },
    { name: "AWS", level: 85, category: "Cloud" },
    { name: "Docker", level: 80, category: "DevOps" },
    { name: "Kubernetes", level: 75, category: "DevOps" },
    { name: "GraphQL", level: 88, category: "API" },
  ];

  const categories = [
    { name: "Frontend", icon: Globe, color: "from-blue-500 to-cyan-500" },
    { name: "Backend", icon: Settings, color: "from-green-500 to-emerald-500" },
    { name: "Database", icon: Code, color: "from-purple-500 to-violet-500" },
    { name: "Cloud", icon: Globe, color: "from-orange-500 to-red-500" },
    { name: "DevOps", icon: Settings, color: "from-pink-500 to-rose-500" },
    { name: "API", icon: Code, color: "from-indigo-500 to-blue-500" },
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Teknoloji <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Yetkinliklerim</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Modern teknolojilerle gelişen dünyada, sürekli öğrenme ve gelişim ile en güncel araçları kullanıyorum.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {categories.map((category, index) => (
            <div key={category.name} className="group">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                <div className={`w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold">{category.name}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Technologies List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {technologies.map((tech, index) => (
            <div key={tech.name} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
              <div className="flex justify-between items-center mb-3">
                <h4 className="text-white font-semibold text-lg">{tech.name}</h4>
                <span className="text-gray-400 text-sm">{tech.category}</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000"
                  style={{ width: `${tech.level}%` }}
                ></div>
              </div>
              <div className="text-right mt-2">
                <span className="text-gray-400 text-sm">{tech.level}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
