
const Projects = () => {
  const projects = [
    {
      title: "E-Ticaret Platformu",
      description: "Mikroservis mimarisi ile geliştirilmiş, günlük 100K+ kullanıcıya hizmet veren modern e-ticaret platformu.",
      technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      link: "#"
    },
    {
      title: "Fintech Mobil Uygulaması", 
      description: "Blockchain teknolojisi ile entegre, güvenli ödeme sistemi ve portföy yönetimi sunan mobil uygulama.",
      technologies: ["React Native", "Python", "MongoDB", "Blockchain"],
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
      link: "#"
    },
    {
      title: "AI Destekli SaaS Platformu",
      description: "Makine öğrenmesi algoritmaları ile iş süreçlerini otomatikleştiren B2B SaaS çözümü.",
      technologies: ["Next.js", "Python", "TensorFlow", "Docker"],
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop",
      link: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Öne Çıkan Projeler
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Milyonlarca kullanıcıyı etkileyen, inovatif teknoloji çözümleri.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-video bg-gray-200">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-medium text-gray-900 mb-3">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-blue-50 text-blue-600 rounded text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <a 
                  href={project.link}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                >
                  Projeyi İncele →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
