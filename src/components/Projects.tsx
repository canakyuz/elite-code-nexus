
const Projects = () => {
  const projects = [
    {
      title: "E-Ticaret Platformu",
      category: "Full Stack Development",
      technologies: ["React", "Node.js", "PostgreSQL"],
      description: "Mikroservis mimarisi ile geliştirilmiş modern e-ticaret çözümü."
    },
    {
      title: "Fintech Uygulaması", 
      category: "Mobile Development",
      technologies: ["React Native", "Python", "Blockchain"],
      description: "Güvenli ödeme sistemi ve portföy yönetimi sunan mobil platform."
    },
    {
      title: "AI SaaS Platformu",
      category: "AI/ML Development",
      technologies: ["Next.js", "Python", "TensorFlow"],
      description: "İş süreçlerini otomatikleştiren yapay zeka destekli platform."
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <p className="text-sm uppercase tracking-widest text-gray-500 font-light mb-4">
            03 — Öne Çıkan Projeler
          </p>
          <h2 className="text-4xl font-light text-gray-900">
            Seçilmiş Çalışmalar
          </h2>
        </div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <div key={index} className="group">
              <div className="grid md:grid-cols-3 gap-8 pb-8 border-b border-gray-200">
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
                    {project.category}
                  </p>
                  <h3 className="text-xl font-light text-gray-900 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                </div>
                
                <div className="md:col-span-2 space-y-4">
                  <p className="text-gray-600 font-light leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="text-xs uppercase tracking-wide text-blue-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
