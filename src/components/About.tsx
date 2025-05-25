
const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <p className="text-sm uppercase tracking-widest text-gray-500 font-light mb-4">
                01 — Hakkımda
              </p>
              <h2 className="text-4xl font-light text-gray-900">
                Yazılım ve İnovasyon
              </h2>
            </div>
            
            <div className="space-y-6 text-gray-600 leading-relaxed font-light">
              <p>
                2014 yılından bu yana yazılım geliştirici olarak teknolojinin 
                gücünü keşfediyor ve bu alanda sürekli kendimi geliştiriyorum.
              </p>
              
              <p>
                Bugün, 5 farklı teknoloji şirketi kurmuş ve milyonlarca kullanıcının 
                hayatına dokunmuş projeler geliştiren bir girişimci olarak hem teknik 
                hem de iş geliştirme alanlarında deneyim sahibiyim.
              </p>
            </div>
          </div>

          {/* Simple Visual Element */}
          <div className="flex items-center justify-center">
            <div className="w-48 h-48 border border-blue-200 rounded-full flex items-center justify-center">
              <div className="w-32 h-32 bg-blue-50 rounded-full flex items-center justify-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
