
import aboutData from "@/content/about/data.json";

const About = () => {
  return (
    <section id="about" className="py-16 px-4 bg-gradient-to-br from-white via-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-3 space-y-6">
            <div className="space-y-4">
              <div className="text-4xl font-extralight text-blue-100 leading-none font-departure">{aboutData.sectionNumber}</div>
              <h2 className="text-title text-slate-900 relative font-departure">
                {aboutData.title}
                <div className="absolute -bottom-1 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
              </h2>
            </div>
          </div>

          <div className="lg:col-span-9 space-y-10">
            <div className="space-y-6">
              <div className="text-lg text-slate-800 max-w-3xl leading-relaxed font-departure font-light">
                {aboutData.mainDescription}
              </div>
              
              <div className="text-body text-slate-600 max-w-2xl space-y-4 leading-relaxed font-departure">
                {aboutData.detailedDescription.map((paragraph, index) => (
                  <p key={index} className="relative pl-4">
                    <span className="absolute left-0 top-2 w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 pt-8 border-t border-slate-200">
              {aboutData.highlights.map((highlight, index) => (
                <div key={index} className="group text-center">
                  <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100 hover:border-blue-200 hover:-translate-y-1">
                    <div className="text-3xl font-light text-blue-600 mb-3 group-hover:scale-110 transition-transform font-departure">
                      {highlight.number}
                    </div>
                    <div className="text-xs text-slate-600 font-medium uppercase tracking-wider font-departure">
                      {highlight.label}
                    </div>
                  </div>
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
