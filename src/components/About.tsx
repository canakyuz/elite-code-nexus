
import aboutData from "@/content/about/data.json";

const About = () => {
  return (
    <section id="about" className="py-32 px-6 bg-gradient-to-br from-blue-25 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-20">
          <div className="lg:col-span-3">
            <div className="space-y-4">
              <div className="text-8xl font-light text-blue-200">{aboutData.sectionNumber}</div>
              <h2 className="text-3xl font-light text-blue-900">{aboutData.title}</h2>
            </div>
          </div>

          <div className="lg:col-span-9 space-y-12">
            <div className="space-y-8">
              <div className="text-2xl font-light leading-relaxed text-blue-900 max-w-3xl">
                {aboutData.mainDescription}
              </div>
              
              <div className="w-16 h-px bg-blue-400"></div>
              
              <div className="text-lg font-light text-blue-700 leading-relaxed max-w-2xl space-y-6">
                {aboutData.detailedDescription.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-12 pt-12 border-t border-blue-200">
              {aboutData.highlights.map((highlight, index) => (
                <div key={index} className="space-y-3">
                  <div className="text-3xl font-light text-blue-900">{highlight.number}</div>
                  <div className="text-sm font-mono text-blue-600 uppercase tracking-wider">{highlight.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
