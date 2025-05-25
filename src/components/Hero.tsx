
import ThreeBackground from "./ThreeBackground";
import heroData from "@/content/hero/data.json";

const Hero = () => {
  return (
    <section className="min-h-screen px-6 bg-white relative overflow-hidden">
      <ThreeBackground />
      
      <div className="max-w-6xl mx-auto">
        {/* Subtle geometric background */}
        <div className="absolute top-20 right-10 w-96 h-96 opacity-5">
          <div className="w-full h-full border-2 border-black transform rotate-45"></div>
        </div>
        
        <div className="relative z-10 pt-40 pb-20">
          {/* Main content */}
          <div className="space-y-16">
            {/* Name and title */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="text-sm font-mono text-gray-400 uppercase tracking-[0.2em]">
                  {heroData.subtitle}
                </div>
                <h1 className="text-8xl md:text-9xl font-light leading-none tracking-tight text-black">
                  {heroData.title.firstName}
                  <br />
                  <span className="font-mono text-7xl md:text-8xl">{heroData.title.lastName}</span>
                </h1>
              </div>
              
              <div className="max-w-lg space-y-6">
                <div className="w-16 h-px bg-black"></div>
                <p className="text-xl font-light text-gray-600 leading-relaxed">
                  {heroData.description}
                </p>
              </div>
            </div>

            {/* Status and location */}
            <div className="flex items-start justify-between pt-20 border-t border-gray-200">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className={`w-2 h-2 ${heroData.status.available ? 'bg-green-500' : 'bg-red-500'} rounded-full`}></div>
                  <span className="text-sm font-mono text-gray-500 uppercase tracking-wider">
                    {heroData.status.text}
                  </span>
                </div>
              </div>
              
              <div className="text-right space-y-1">
                <div className="text-sm font-mono text-gray-500 uppercase tracking-wider">
                  {heroData.location.city}
                </div>
                <div className="text-xs text-gray-400">{heroData.location.timezone}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
