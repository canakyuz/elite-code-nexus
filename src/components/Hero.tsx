
const Hero = () => {
  return (
    <section className="min-h-screen px-6 bg-black text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-12 h-full">
            {Array.from({ length: 48 }).map((_, i) => (
              <div key={i} className="border-r border-gray-800 h-full"></div>
            ))}
          </div>
        </div>
        
        <div className="relative z-10 pt-32 pb-20">
          {/* Top section */}
          <div className="flex justify-between items-start mb-20">
            <div className="space-y-2">
              <div className="text-sm font-mono text-gray-400">001</div>
              <div className="text-sm font-mono text-gray-400">INTRO</div>
            </div>
            <div className="text-right space-y-1">
              <div className="text-sm font-mono text-gray-400">AVAILABLE FOR WORK</div>
              <div className="w-2 h-2 bg-green-400 rounded-full ml-auto animate-pulse"></div>
            </div>
          </div>

          {/* Main content */}
          <div className="space-y-16">
            <div>
              <h1 className="text-7xl md:text-9xl font-bold leading-none tracking-tight mb-4">
                CAN
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                  AKYÜZ
                </span>
              </h1>
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
                <div className="max-w-md">
                  <p className="text-xl text-gray-300 leading-relaxed">
                    Senior Software Engineer & Tech Entrepreneur crafting digital experiences 
                    that matter.
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-px h-16 bg-gradient-to-b from-transparent via-blue-400 to-transparent"></div>
                  <div className="text-sm font-mono text-gray-400">
                    SCROLL TO EXPLORE
                  </div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 md:grid-cols-6 gap-8 pt-16 border-t border-gray-800">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-blue-400">10+</div>
                <div className="text-xs font-mono text-gray-500 uppercase tracking-wider">Years</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-purple-400">150+</div>
                <div className="text-xs font-mono text-gray-500 uppercase tracking-wider">Projects</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-green-400">5</div>
                <div className="text-xs font-mono text-gray-500 uppercase tracking-wider">Companies</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-yellow-400">1M+</div>
                <div className="text-xs font-mono text-gray-500 uppercase tracking-wider">Users</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-red-400">24/7</div>
                <div className="text-xs font-mono text-gray-500 uppercase tracking-wider">Uptime</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-cyan-400">∞</div>
                <div className="text-xs font-mono text-gray-500 uppercase tracking-wider">Learning</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
