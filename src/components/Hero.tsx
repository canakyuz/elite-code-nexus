
const Hero = () => {
  return (
    <section className="pt-24 pb-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 leading-tight mb-8">
            Dijital dünyayı
            <span className="block text-blue-600">şekillendiren</span>
            <span className="block">yazılımcı</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-12 max-w-2xl">
            10+ yıllık deneyimle modern teknolojiler kullanarak ölçeklenebilir yazılım çözümleri geliştiren ve başarılı teknoloji şirketleri kuran senior yazılımcı ve girişimci.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#projects"
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Projelerimi İncele
            </a>
            <a 
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 border border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-colors"
            >
              İletişime Geç
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
