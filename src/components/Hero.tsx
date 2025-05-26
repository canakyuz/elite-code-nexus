
import ThreeBackground from "./ThreeBackground";
import heroData from "@/content/hero/data.json";

const Hero = () => {
  return (
    <section className="min-h-screen px-6 bg-gradient-to-br from-blue-50 to-blue-100 relative overflow-hidden">
      <ThreeBackground />
      
      <div className="max-w-6xl mx-auto">
        {/* Geometric background accent */}
        <div className="absolute top-20 right-10 w-96 h-96 opacity-10">
          <div className="w-full h-full border-2 border-blue-600 transform rotate-45"></div>
        </div>
        
        <div className="relative z-10 pt-40 pb-20">
          <div className="space-y-16">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="text-sm font-mono text-blue-500 uppercase tracking-[0.2em]">
                  {heroData.subtitle}
                </div>
                <h1 className="text-8xl md:text-9xl font-light leading-none tracking-tight text-blue-900">
                  {heroData.title.firstName}
                  <br />
                  <span className="font-mono text-7xl md:text-8xl text-blue-700">{heroData.title.lastName}</span>
                </h1>
              </div>
              
              <div className="max-w-lg space-y-6">
                <div className="w-16 h-px bg-blue-600"></div>
                <p className="text-xl font-light text-blue-700 leading-relaxed">
                  {heroData.description}
                </p>
              </div>
            </div>

            <div className="flex items-start justify-between pt-20 border-t border-blue-200">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className={`w-2 h-2 ${heroData.status.available ? 'bg-blue-500' : 'bg-red-500'} rounded-full`}></div>
                  <span className="text-sm font-mono text-blue-600 uppercase tracking-wider">
                    {heroData.status.text}
                  </span>
                </div>
              </div>
              
              <div className="text-right space-y-1">
                <div className="text-sm font-mono text-blue-600 uppercase tracking-wider">
                  {heroData.location.city}
                </div>
                <div className="text-xs text-blue-500">{heroData.location.timezone}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
