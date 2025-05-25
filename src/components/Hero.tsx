
const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-8">
          {/* Subtitle */}
          <p className="text-sm uppercase tracking-widest text-gray-500 font-light">
            Yazılım Geliştirici ve Girişimci
          </p>
          
          {/* Main Title */}
          <h1 className="text-6xl md:text-8xl font-light text-gray-900 leading-none">
            AHMET
            <span className="block text-blue-600">KOÇ</span>
          </h1>
          
          {/* Description */}
          <div className="max-w-lg">
            <p className="text-lg text-gray-600 leading-relaxed font-light">
              10+ yıllık deneyimle yazılım dünyasında yenilik yaratan, 
              ölçeklenebilir çözümler geliştiren ve teknoloji şirketleri kuran uzman.
            </p>
          </div>
          
          {/* Simple Stats */}
          <div className="pt-12 grid grid-cols-3 gap-8 max-w-md">
            <div>
              <div className="text-2xl font-light text-blue-600">100+</div>
              <div className="text-xs uppercase tracking-wide text-gray-500">Proje</div>
            </div>
            <div>
              <div className="text-2xl font-light text-blue-600">5</div>
              <div className="text-xs uppercase tracking-wide text-gray-500">Şirket</div>
            </div>
            <div>
              <div className="text-2xl font-light text-blue-600">10+</div>
              <div className="text-xs uppercase tracking-wide text-gray-500">Yıl</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
