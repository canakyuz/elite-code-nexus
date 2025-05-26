
import aboutData from "@/content/about/data.json";

const About = () => {
  return (
    <section id="about" className="py-32 px-6 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-20">
          <div className="lg:col-span-3 space-y-8">
            <div className="space-y-6">
              <div className="text-8xl font-extralight text-blue-100 leading-none">{aboutData.sectionNumber}</div>
              <h2 className="text-title text-slate-900 relative">
                {aboutData.title}
                <div className="absolute -bottom-2 left-0 w-16 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
              </h2>
            </div>
          </div>

          <div className="lg:col-span-9 space-y-20">
            <div className="space-y-12">
              <div className="space-y-10">
                <div className="text-title text-slate-800 max-w-4xl leading-relaxed font-light">
                  {aboutData.mainDescription}
                </div>
                
                <div className="text-body text-slate-600 max-w-3xl space-y-8 leading-relaxed">
                  {aboutData.detailedDescription.map((paragraph, index) => (
                    <p key={index} className="relative pl-6">
                      <span className="absolute left-0 top-2 w-2 h-2 bg-blue-500 rounded-full"></span>
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-16 pt-20 border-t border-slate-200">
              {aboutData.highlights.map((highlight, index) => (
                <div key={index} className="space-y-6 p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-5xl font-extralight text-blue-600">{highlight.number}</div>
                  <div className="text-small text-slate-600 font-medium">{highlight.label}</div>
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
