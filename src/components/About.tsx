
const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-8">
              Hakkımda
            </h2>
            
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                2014 yılında yazılım geliştirici olarak başladığım kariyerimde, 
                sadece kod yazmakla kalmayıp, teknolojinin iş dünyasındaki gücünü 
                keşfettim ve bu alanda kendimi sürekli geliştirdim.
              </p>
              
              <p>
                Bugün, 5 farklı teknoloji şirketi kurmuş, 100M+ dolar yatırım almış 
                ve milyonlarca kullanıcının hayatına dokunmuş projeler geliştirmiş 
                bir girişimci olarak, hem teknik hem de iş geliştirme alanlarında 
                deneyim sahibiyim.
              </p>
              
              <p>
                Modern web teknolojilerinden cloud mimarilerine, yapay zeka 
                uygulamalarından blockchain çözümlerine kadar geniş bir yelpazede 
                projeler geliştiriyor ve danışmanlık hizmetleri veriyorum.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-8">
            <div className="text-center">
              <div className="text-4xl font-light text-blue-600 mb-2">100+</div>
              <div className="text-gray-600">Tamamlanan Proje</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-light text-blue-600 mb-2">5</div>
              <div className="text-gray-600">Kurulan Şirket</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-light text-blue-600 mb-2">10M+</div>
              <div className="text-gray-600">Etkilenen Kullanıcı</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-light text-blue-600 mb-2">10+</div>
              <div className="text-gray-600">Yıllık Deneyim</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
