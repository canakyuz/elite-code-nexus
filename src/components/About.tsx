
const About = () => {
  return (
    <section id="about" className="py-32 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-20">
          {/* Left column - number and title */}
          <div className="lg:col-span-3">
            <div className="space-y-4">
              <div className="text-8xl font-light text-gray-200">01</div>
              <h2 className="text-3xl font-light text-black">About</h2>
            </div>
          </div>

          {/* Right column - content */}
          <div className="lg:col-span-9 space-y-12">
            {/* Main description */}
            <div className="space-y-8">
              <div className="text-2xl font-light leading-relaxed text-gray-900 max-w-3xl">
                I'm a senior software engineer and entrepreneur with over 10 years 
                of experience building innovative digital solutions.
              </div>
              
              <div className="w-16 h-px bg-gray-300"></div>
              
              <div className="text-lg font-light text-gray-600 leading-relaxed max-w-2xl space-y-6">
                <p>
                  Since 2014, I've been exploring the power of technology, learning 
                  something new every day, and transforming complex problems into 
                  elegant solutions.
                </p>
                <p>
                  I've founded 5 different technology companies, touching the lives 
                  of millions of users and gaining deep experience in both technical 
                  and business development.
                </p>
              </div>
            </div>

            {/* Experience highlights */}
            <div className="grid md:grid-cols-3 gap-12 pt-12 border-t border-gray-200">
              <div className="space-y-3">
                <div className="text-3xl font-light text-black">10+</div>
                <div className="text-sm font-mono text-gray-500 uppercase tracking-wider">Years Experience</div>
              </div>
              <div className="space-y-3">
                <div className="text-3xl font-light text-black">5</div>
                <div className="text-sm font-mono text-gray-500 uppercase tracking-wider">Companies Founded</div>
              </div>
              <div className="space-y-3">
                <div className="text-3xl font-light text-black">1M+</div>
                <div className="text-sm font-mono text-gray-500 uppercase tracking-wider">Users Impacted</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
