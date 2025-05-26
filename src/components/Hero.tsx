
import ThreeBackground from "./ThreeBackground";
import heroData from "@/content/hero/data.json";

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900">
      {/* 3D Background sadece hero bölümünde */}
      <div className="absolute inset-0 z-0">
        <ThreeBackground />
      </div>
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30 z-5"></div>
      
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto px-4 w-full">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="text-small text-blue-300 tracking-wider font-departure">
                  {heroData.subtitle}
                </div>
                
                <div className="space-y-2">
                  <h1 className="text-display text-white leading-none font-departure">
                    {heroData.title.firstName}
                  </h1>
                  <h1 className="text-display text-blue-400 leading-none font-departure">
                    {heroData.title.lastName}
                  </h1>
                </div>
                
                <div className="w-16 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"></div>
                
                <p className="text-body text-slate-300 max-w-md leading-relaxed font-departure">
                  {heroData.description}
                </p>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-slate-700/50">
                <div className="flex items-center gap-3">
                  <div className={`w-2 h-2 ${heroData.status.available ? 'bg-green-400' : 'bg-red-400'} rounded-full animate-pulse`}></div>
                  <span className="text-small text-slate-400 font-departure">
                    {heroData.status.text}
                  </span>
                </div>
                
                <div className="text-right space-y-1">
                  <div className="text-small text-slate-400 font-departure">
                    {heroData.location.city}
                  </div>
                  <div className="text-xs text-slate-500 font-departure">{heroData.location.timezone}</div>
                </div>
              </div>
            </div>

            {/* Right Column - Space for 3D objects */}
            <div className="hidden lg:block">
              {/* This space is for the 3D background elements */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
