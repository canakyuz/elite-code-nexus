
const About = () => {
  return (
    <section id="about" className="py-32 px-6 bg-white relative">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-8 mb-20">
          <div className="text-sm font-mono text-gray-400">002</div>
          <div className="h-px bg-gradient-to-r from-gray-200 to-transparent flex-1"></div>
          <h2 className="text-6xl font-bold text-black">ABOUT</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-20">
          {/* Left column */}
          <div className="space-y-12">
            <div className="space-y-8">
              <div className="text-2xl font-light leading-relaxed text-gray-800">
                Merhaba! Ben <span className="font-bold text-black">Can Akyüz</span>, 
                10+ yıldır yazılım dünyasında yenilikçi çözümler geliştiren bir 
                <span className="italic"> senior software engineer</span> ve 
                <span className="font-bold text-black"> girişimciyim</span>.
              </div>
              
              <div className="text-lg text-gray-600 leading-relaxed space-y-4">
                <p>
                  2014'ten bu yana teknolojinin gücünü keşfediyor, her gün yeni şeyler 
                  öğreniyor ve karmaşık problemleri elegant çözümlere dönüştürüyorum.
                </p>
                <p>
                  5 farklı teknoloji şirketi kurarak milyonlarca kullanıcının hayatına 
                  dokunmuş, hem teknik hem de iş geliştirme alanlarında derin deneyim 
                  kazanmış bir profesyonelim.
                </p>
              </div>
            </div>

            {/* Timeline */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-black">Journey</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="font-mono text-sm text-gray-500">2024 — Present</div>
                    <div className="font-semibold text-black">Senior Tech Lead</div>
                    <div className="text-gray-600">Building next-gen platforms</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="font-mono text-sm text-gray-500">2019 — 2024</div>
                    <div className="font-semibold text-black">Serial Entrepreneur</div>
                    <div className="text-gray-600">Founded 5 tech companies</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="font-mono text-sm text-gray-500">2014 — 2019</div>
                    <div className="font-semibold text-black">Software Engineer</div>
                    <div className="text-gray-600">Learning & building foundations</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-12">
            {/* Image placeholder */}
            <div className="aspect-square bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl flex items-center justify-center border border-gray-200">
              <div className="text-center space-y-4">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full mx-auto flex items-center justify-center">
                  <span className="text-4xl font-bold text-white">CA</span>
                </div>
                <div className="text-gray-500 font-mono text-sm">Can Akyüz</div>
              </div>
            </div>

            {/* Values */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-black">Values</h3>
              <div className="grid gap-4">
                <div className="p-4 border border-gray-200 rounded-lg">
                  <div className="font-semibold text-black mb-2">Innovation First</div>
                  <div className="text-sm text-gray-600">Always pushing boundaries with cutting-edge solutions</div>
                </div>
                <div className="p-4 border border-gray-200 rounded-lg">
                  <div className="font-semibold text-black mb-2">User-Centric</div>
                  <div className="text-sm text-gray-600">Building products that truly matter to people</div>
                </div>
                <div className="p-4 border border-gray-200 rounded-lg">
                  <div className="font-semibold text-black mb-2">Continuous Learning</div>
                  <div className="text-sm text-gray-600">Staying ahead of the curve with emerging technologies</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
