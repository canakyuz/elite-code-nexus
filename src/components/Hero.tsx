
import ThreeBackground from "./ThreeBackground";
import heroData from "@/content/hero/data.json";

const Hero = () => {
  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100">
      <ThreeBackground />
      
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-12">
              <div className="space-y-6">
                <div className="text-small text-blue-500">
                  {heroData.subtitle}
                </div>
                
                <div className="space-y-2">
                  <h1 className="text-display text-slate-900 leading-none">
                    {heroData.title.firstName}
                  </h1>
                  <h1 className="text-display text-blue-500 leading-none">
                    {heroData.title.lastName}
                  </h1>
                </div>
                
                <div className="w-16 h-0.5 bg-blue-500"></div>
                
                <p className="text-body text-slate-600 max-w-lg">
                  {heroData.description}
                </p>
              </div>

              <div className="flex items-center justify-between pt-8">
                <div className="flex items-center gap-3">
                  <div className={`w-2 h-2 ${heroData.status.available ? 'bg-green-500' : 'bg-red-500'} rounded-full`}></div>
                  <span className="text-small text-slate-500">
                    {heroData.status.text}
                  </span>
                </div>
                
                <div className="text-right space-y-1">
                  <div className="text-small text-slate-500">
                    {heroData.location.city}
                  </div>
                  <div className="text-xs text-slate-400">{heroData.location.timezone}</div>
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
