
const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      year: "2024",
      description: "Microservice architecture serving 100K+ daily users with modern e-commerce solutions.",
      technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
    },
    {
      title: "FinTech Mobile App",
      year: "2023", 
      description: "Secure payment system and portfolio management using blockchain technology.",
      technologies: ["React Native", "Python", "Blockchain"],
    },
    {
      title: "AI SaaS Platform",
      year: "2023",
      description: "AI-powered platform automating business processes and increasing efficiency by 300%.",
      technologies: ["Next.js", "Python", "TensorFlow"],
    },
    {
      title: "Developer Tools Suite",
      year: "2022",
      description: "Open-source tools package simplifying developers' work. 10K+ stars on GitHub.",
      technologies: ["TypeScript", "Node.js", "CLI"],
    }
  ];

  return (
    <section id="work" className="py-32 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-20">
          {/* Left column */}
          <div className="lg:col-span-3">
            <div className="space-y-4">
              <div className="text-8xl font-light text-gray-200">03</div>
              <h2 className="text-3xl font-light text-black">Selected Work</h2>
            </div>
          </div>

          {/* Right column */}
          <div className="lg:col-span-9 space-y-16">
            {projects.map((project, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="space-y-6 py-8 border-b border-gray-200 hover:border-black transition-colors">
                  <div className="flex items-start justify-between">
                    <div className="space-y-4">
                      <h3 className="text-2xl font-light text-black group-hover:text-gray-600 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed max-w-lg">
                        {project.description}
                      </p>
                    </div>
                    <div className="text-sm font-mono text-gray-400">
                      {project.year}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="text-xs font-mono text-gray-500 uppercase tracking-wider"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
