
const Projects = () => {
  const projects = [
    {
      id: "01",
      title: "E-Commerce Revolution",
      category: "Full Stack Platform",
      year: "2024",
      description: "Mikroservis mimarisi ile geliştirilmiş, günde 100K+ kullanıcıya hizmet veren modern e-ticaret platformu.",
      technologies: ["React", "Node.js", "PostgreSQL", "AWS", "Docker"],
      status: "Live",
      impact: "10M+ transactions"
    },
    {
      id: "02",
      title: "FinTech Mobile App",
      category: "Mobile Development",
      year: "2023",
      description: "Blockchain teknolojisi kullanarak güvenli ödeme sistemi ve portföy yönetimi sunan mobil platform.",
      technologies: ["React Native", "Python", "Blockchain", "Firebase"],
      status: "Live",
      impact: "500K+ users"
    },
    {
      id: "03",
      title: "AI SaaS Platform",
      category: "Artificial Intelligence",
      year: "2023",
      description: "İş süreçlerini otomatikleştiren ve verimliliği %300 artıran yapay zeka destekli SaaS platformu.",
      technologies: ["Next.js", "Python", "TensorFlow", "AWS Lambda"],
      status: "Beta",
      impact: "1M+ API calls"
    },
    {
      id: "04",
      title: "Developer Tools Suite",
      category: "Open Source",
      year: "2022",
      description: "Geliştiricilerin işini kolaylaştıran, açık kaynak kodlu araçlar paketi. GitHub'da 10K+ star.",
      technologies: ["TypeScript", "Node.js", "CLI", "NPM"],
      status: "Open Source",
      impact: "50K+ downloads"
    }
  ];

  return (
    <section id="projects" className="py-32 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-8 mb-20">
          <div className="text-sm font-mono text-gray-400">004</div>
          <div className="h-px bg-gradient-to-r from-gray-200 to-transparent flex-1"></div>
          <h2 className="text-6xl font-bold text-black">PROJECTS</h2>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="grid lg:grid-cols-12 gap-8 py-12 border-b border-gray-200 hover:bg-white hover:shadow-lg transition-all duration-300 hover:-mx-8 hover:px-8 hover:rounded-2xl">
                {/* Project number and year */}
                <div className="lg:col-span-2 space-y-2">
                  <div className="text-4xl font-bold text-gray-300 group-hover:text-blue-500 transition-colors">
                    {project.id}
                  </div>
                  <div className="text-sm font-mono text-gray-500">{project.year}</div>
                  <div className={`inline-block px-2 py-1 rounded-full text-xs font-mono ${
                    project.status === 'Live' ? 'bg-green-100 text-green-700' :
                    project.status === 'Beta' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-blue-100 text-blue-700'
                  }`}>
                    {project.status}
                  </div>
                </div>

                {/* Project info */}
                <div className="lg:col-span-6 space-y-4">
                  <div>
                    <h3 className="text-3xl font-bold text-black group-hover:text-blue-600 transition-colors mb-2">
                      {project.title}
                    </h3>
                    <div className="text-sm font-mono text-gray-500 uppercase tracking-wider">
                      {project.category}
                    </div>
                  </div>
                  
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-mono group-hover:bg-blue-50 group-hover:text-blue-700 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Impact */}
                <div className="lg:col-span-4 flex items-center justify-end">
                  <div className="text-right space-y-2">
                    <div className="text-2xl font-bold text-blue-600">
                      {project.impact}
                    </div>
                    <div className="text-sm font-mono text-gray-500">
                      IMPACT
                    </div>
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center ml-auto group-hover:scale-110 transition-transform">
                      <span className="text-white text-xl">→</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-black text-white rounded-full hover:bg-gray-800 transition-colors cursor-pointer">
            <span className="font-mono">VIEW ALL PROJECTS</span>
            <span className="text-xl">→</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
