
const Skills = () => {
  const skills = [
    {
      category: "Frontend Development",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"]
    },
    {
      category: "Backend Development", 
      technologies: ["Node.js", "Python", "PostgreSQL", "MongoDB", "GraphQL"]
    },
    {
      category: "Cloud & DevOps",
      technologies: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform"]
    },
    {
      category: "Mobile Development",
      technologies: ["React Native", "Flutter", "iOS", "Android", "Expo"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Teknik Yetenekler
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Modern teknolojilerle ölçeklenebilir ve sürdürülebilir çözümler geliştiriyorum.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {skills.map((skill, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-xl font-medium text-gray-900">
                {skill.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skill.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
