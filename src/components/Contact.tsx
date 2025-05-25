
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-32 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-20">
          {/* Left column */}
          <div className="lg:col-span-3">
            <div className="space-y-4">
              <div className="text-8xl font-light text-gray-200">04</div>
              <h2 className="text-3xl font-light text-black">Contact</h2>
            </div>
          </div>

          {/* Right column */}
          <div className="lg:col-span-9">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact info */}
              <div className="space-y-8">
                <div className="space-y-6">
                  <p className="text-lg font-light text-gray-600 leading-relaxed">
                    Let's work together on new projects and collaboration opportunities. 
                    I respond to every message within 24 hours.
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="text-xs font-mono text-gray-400 uppercase tracking-wider mb-1">Email</div>
                      <a href="mailto:hello@canakyuz.dev" className="text-black hover:text-gray-600 transition-colors">
                        hello@canakyuz.dev
                      </a>
                    </div>
                    <div>
                      <div className="text-xs font-mono text-gray-400 uppercase tracking-wider mb-1">LinkedIn</div>
                      <a href="#" className="text-black hover:text-gray-600 transition-colors">
                        linkedin.com/in/canakyuz
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact form */}
              <div>
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Name"
                      className="w-full pb-3 border-0 border-b border-gray-300 focus:border-black focus:ring-0 bg-transparent text-black placeholder-gray-400 font-light"
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email"
                      className="w-full pb-3 border-0 border-b border-gray-300 focus:border-black focus:ring-0 bg-transparent text-black placeholder-gray-400 font-light"
                    />
                  </div>

                  <div>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Message"
                      className="w-full pb-3 border-0 border-b border-gray-300 focus:border-black focus:ring-0 bg-transparent text-black placeholder-gray-400 font-light resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="text-sm font-mono text-black hover:text-gray-600 transition-colors uppercase tracking-wider border-b border-black pb-1"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
