
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
    <section id="contact" className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            İletişime Geçin
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Projenizi görüşmek veya iş birliği fırsatlarını değerlendirmek için benimle iletişime geçin.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Ad Soyad
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Adınızı ve soyadınızı girin"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  E-posta
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="E-posta adresinizi girin"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Mesaj
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder="Projeniz hakkında detayları paylaşın..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-4 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Mesajı Gönder
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">
                Doğrudan İletişim
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <span className="text-gray-500">E-posta:</span>
                  <a href="mailto:hello@ahmetkoc.dev" className="text-blue-600 hover:text-blue-700">
                    hello@ahmetkoc.dev
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-gray-500">LinkedIn:</span>
                  <a href="#" className="text-blue-600 hover:text-blue-700">
                    linkedin.com/in/ahmetkoc
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-gray-500">GitHub:</span>
                  <a href="#" className="text-blue-600 hover:text-blue-700">
                    github.com/ahmetkoc
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="font-medium text-gray-900 mb-2">Hızlı Yanıt</h4>
              <p className="text-gray-600">
                Tüm mesajlara 24 saat içinde yanıt veriyorum. Acil projeler için 
                aynı gün içinde geri dönüş sağlıyorum.
              </p>
            </div>

            <div className="bg-green-50 rounded-lg p-6">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="font-medium text-gray-900">Müsaitlik Durumu</span>
              </div>
              <p className="text-gray-600">
                Şu anda yeni projeler için müsaitim.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
