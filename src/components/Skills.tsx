
const Skills = () => {
  const skills = [
    {
      category: "Frontend",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"]
    },
    {
      category: "Backend", 
      technologies: ["Node.js", "Python", "PostgreSQL", "GraphQL"]
    },
    {
      category: "Cloud",
      technologies: ["AWS", "Docker", "Kubernetes", "Terraform"]
    },
    {
      category: "Mobile",
      technologies: ["React Native", "Flutter", "iOS", "Android"]
    }
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <p className="text-sm uppercase tracking-widest text-gray-500 font-light mb-4">
            02 — Teknik Yetenekler
          </p>
          <h2 className="text-4xl font-light text-gray-900">
            Kullandığım Teknolojiler
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {skills.map((skill, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-lg font-light text-gray-900 uppercase tracking-wide">
                {skill.category}
              </h3>
              <div className="space-y-2">
                {skill.technologies.map((tech, techIndex) => (
                  <div 
                    key={techIndex}
                    className="text-gray-600 font-light border-b border-gray-100 pb-2"
                  >
                    {tech}
                  </div>
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
