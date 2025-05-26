
import aboutData from "@/content/about/data.json";

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-gradient-to-br from-white via-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-3 space-y-8">
            <div className="space-y-6">
              <div className="text-6xl font-extralight text-blue-100 leading-none">{aboutData.sectionNumber}</div>
              <h2 className="text-4xl font-light text-slate-900 relative">
                {aboutData.title}
                <div className="absolute -bottom-2 left-0 w-16 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
              </h2>
            </div>
          </div>

          <div className="lg:col-span-9 space-y-16">
            <div className="space-y-8">
              <div className="text-2xl text-slate-800 max-w-4xl leading-relaxed font-light">
                {aboutData.mainDescription}
              </div>
              
              <div className="text-lg text-slate-600 max-w-3xl space-y-6 leading-relaxed">
                {aboutData.detailedDescription.map((paragraph, index) => (
                  <p key={index} className="relative pl-6">
                    <span className="absolute left-0 top-3 w-2 h-2 bg-blue-500 rounded-full"></span>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 pt-12 border-t border-slate-200">
              {aboutData.highlights.map((highlight, index) => (
                <div key={index} className="group text-center">
                  <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100 hover:border-blue-200 hover:-translate-y-1">
                    <div className="text-4xl font-light text-blue-600 mb-4 group-hover:scale-110 transition-transform">
                      {highlight.number}
                    </div>
                    <div className="text-sm text-slate-600 font-medium uppercase tracking-wider">
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
