
import aboutData from "@/content/about/data.json";

const About = () => {
  return (
    <section id="about" className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-20">
          <div className="lg:col-span-3 space-y-8">
            <div className="space-y-4">
              <div className="text-6xl font-extralight text-slate-200">{aboutData.sectionNumber}</div>
              <h2 className="text-title text-slate-900">{aboutData.title}</h2>
            </div>
          </div>

          <div className="lg:col-span-9 space-y-16">
            <div className="space-y-12">
              <div className="space-y-8">
                <div className="text-title text-slate-800 max-w-4xl leading-relaxed">
                  {aboutData.mainDescription}
                </div>
                
                <div className="w-16 h-0.5 bg-blue-500"></div>
                
                <div className="text-body text-slate-600 max-w-3xl space-y-8">
                  {aboutData.detailedDescription.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-16 pt-16 border-t border-slate-100">
              {aboutData.highlights.map((highlight, index) => (
                <div key={index} className="space-y-4">
                  <div className="text-4xl font-light text-slate-900">{highlight.number}</div>
                  <div className="text-small text-slate-500">{highlight.label}</div>
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
