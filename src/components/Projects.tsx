
import { Globe, Code, ArrowUp } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Ticaret Platformu",
      description: "Mikroservis mimarisi ile geliştirilmiş, günlük 100K+ kullanıcıya hizmet veren modern e-ticaret platformu.",
      tech: ["React", "Node.js", "PostgreSQL", "AWS"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      stats: { users: "100K+", revenue: "$2M+", growth: "+150%" }
    },
    {
      title: "Fintech Mobil Uygulaması",
      description: "Blockchain teknolojisi ile entegre, güvenli ödeme sistemi ve portföy yönetimi sunan mobil uygulama.",
      tech: ["React Native", "Python", "MongoDB", "Blockchain"],
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
      stats: { users: "50K+", transactions: "$10M+", rating: "4.8/5" }
    },
    {
      title: "AI Destekli SaaS Platformu",
      description: "Makine öğrenmesi algoritmaları ile iş süreçlerini otomatikleştiren B2B SaaS çözümü.",
      tech: ["Next.js", "Python", "TensorFlow", "Docker"],
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop",
      stats: { clients: "200+", automation: "85%", satisfaction: "98%" }
    }
  ];

  return (
    <section className="py-20 px-6 bg-black/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Öne Çıkan <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Projelerim</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Milyonlarca kullanıcıyı etkileyen, inovatif teknoloji çözümleri geliştirdim.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-500 transform hover:scale-105">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 text-blue-300 px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {Object.entries(project.stats).map(([key, value], statIndex) => (
                      <div key={statIndex} className="text-center">
                        <div className="text-lg font-bold text-white">{value}</div>
                        <div className="text-xs text-gray-500 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-2 px-4 rounded-lg text-sm font-semibold transition-all duration-300 flex items-center justify-center gap-2">
                      <Globe className="w-4 h-4" />
                      Demo
                    </button>
                    <button className="flex-1 border border-white/30 hover:border-white/50 text-white py-2 px-4 rounded-lg text-sm font-semibold transition-all duration-300 hover:bg-white/10 flex items-center justify-center gap-2">
                      <Code className="w-4 h-4" />
                      Kod
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Tüm Projeleri Görüntüle
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
