
import { Briefcase, User, ArrowUp } from "lucide-react";

const About = () => {
  const milestones = [
    { year: "2024", title: "AI Startup Kurucu", description: "Yapay zeka odaklı SaaS platformu kurdum" },
    { year: "2022", title: "CTO Pozisyonu", description: "Unicorn statüsündeki fintech şirketinde CTO" },
    { year: "2020", title: "Teknoloji Lideri", description: "100+ geliştiricilik ekibine liderlik" },
    { year: "2018", title: "İlk Girişim", description: "İlk teknoloji şirketimi kurdum ve sattım" },
    { year: "2014", title: "Kariyer Başlangıcı", description: "Senior developer olarak kariyerime başladım" }
  ];

  const achievements = [
    { number: "10+", label: "Yıllık Deneyim" },
    { number: "5", label: "Kurulan Şirket" },
    { number: "100M+", label: "Elde Edilen Yatırım" },
    { number: "50+", label: "Ödül & Sertifika" }
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Hakkımda <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Daha Fazlası</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Teknoloji dünyasında 10+ yıllık deneyimim ile, sadece kod yazmakla kalmayıp, 
            vizyoner projeler geliştiren ve başarılı takımlar kuran bir liderim.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Side - Story */}
          <div>
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 bg-green-600/20 border border-green-500/30 rounded-full px-4 py-2 mb-6">
                <User className="w-4 h-4 text-green-400" />
                <span className="text-sm text-green-300">Hikayem</span>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Koddan İnovasyona Uzanan Yolculuk
              </h3>
              
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                2014 yılında bir yazılım geliştirici olarak başladığım kariyerimde, 
                sadece teknik beceriler geliştirmekle kalmadım. Aynı zamanda iş dünyasını 
                anlayan, kullanıcı deneyimini önemseyen ve takım çalışmasına değer veren 
                bir profesyonel haline geldim.
              </p>
              
              <p className="text-gray-400 text-lg leading-relaxed">
                Bugün, 5 adet teknoloji şirketi kurmuş, 100M+ dolar yatırım almış ve 
                milyonlarca kullanıcının hayatına dokunmuş projeler geliştirmiş bir 
                girişimci olarak, teknolojinin gücünü iş dünyasına kazandırmaya devam ediyorum.
              </p>
            </div>

            {/* Achievements */}
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl">
                  <div className="text-2xl md:text-3xl font-bold text-white mb-2">{achievement.number}</div>
                  <div className="text-gray-400 text-sm">{achievement.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Timeline */}
          <div>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-500 via-blue-500 to-purple-500"></div>
              
              {milestones.map((milestone, index) => (
                <div key={index} className="relative flex items-start mb-8 last:mb-0">
                  {/* Timeline Dot */}
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-6 shadow-lg relative z-10">
                    {milestone.year}
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                    <h4 className="text-lg font-bold text-white mb-2">{milestone.title}</h4>
                    <p className="text-gray-400">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-green-600/20 to-blue-600/20 border border-green-500/30 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white mb-4">Birlikte Çalışmaya Hazır mısınız?</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Projenizi hayata geçirmek, teknoloji stratejinizi geliştirmek veya 
            girişiminizi büyütmek için benimle iletişime geçin.
          </p>
          <button className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            İletişime Geç
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
