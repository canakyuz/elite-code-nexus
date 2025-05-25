
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
    <section id="contact" className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <p className="text-sm uppercase tracking-widest text-gray-500 font-light mb-4">
                04 — İletişim
              </p>
              <h2 className="text-4xl font-light text-gray-900">
                Birlikte Çalışalım
              </h2>
            </div>
            
            <div className="space-y-6">
              <p className="text-gray-600 font-light leading-relaxed">
                Yeni projeler ve iş birliği fırsatları için benimle iletişime geçin. 
                Her mesaja 24 saat içinde yanıt veriyorum.
              </p>
              
              <div className="space-y-4">
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">E-posta</p>
                  <a href="mailto:hello@ahmetkoc.dev" className="text-blue-600 hover:text-blue-700 font-light">
                    hello@ahmetkoc.dev
                  </a>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">LinkedIn</p>
                  <a href="#" className="text-blue-600 hover:text-blue-700 font-light">
                    linkedin.com/in/ahmetkoc
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Ad Soyad"
                  className="w-full pb-2 border-0 border-b border-gray-200 focus:border-blue-600 focus:ring-0 bg-transparent text-gray-900 placeholder-gray-500 font-light"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="E-posta"
                  className="w-full pb-2 border-0 border-b border-gray-200 focus:border-blue-600 focus:ring-0 bg-transparent text-gray-900 placeholder-gray-500 font-light"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Mesajınız"
                  className="w-full pb-2 border-0 border-b border-gray-200 focus:border-blue-600 focus:ring-0 bg-transparent text-gray-900 placeholder-gray-500 font-light resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="text-sm uppercase tracking-widest text-blue-600 hover:text-blue-700 font-light border-b border-blue-600 pb-1 transition-colors"
              >
                Gönder
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
