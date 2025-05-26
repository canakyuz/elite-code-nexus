
import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import contactData from "@/content/contact/data.json";

const Contact = () => {
  const [formData, setFormData] = useState(
    contactData.form.fields.reduce((acc, field) => {
      acc[field.name] = "";
      return acc;
    }, {} as Record<string, string>)
  );

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

  const iconMap: Record<string, any> = {
    Email: Mail,
    LinkedIn: MapPin,
    GitHub: Phone
  };

  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-4xl font-extralight text-blue-200 mb-4">{contactData.sectionNumber}</div>
          <h2 className="text-4xl font-light text-slate-900 mb-6">{contactData.title}</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            {contactData.description}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info - Compact Cards */}
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-slate-900 mb-6">İletişim Bilgileri</h3>
            <div className="grid gap-4">
              {contactData.contactInfo.map((contact, index) => {
                const Icon = iconMap[contact.label] || Mail;
                return (
                  <a
                    key={index}
                    href={contact.href}
                    className="group flex items-center gap-4 p-4 bg-white rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 group-hover:bg-blue-200 rounded-lg flex items-center justify-center transition-colors">
                      <Icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="text-sm text-slate-500 uppercase tracking-wide">
                        {contact.label}
                      </div>
                      <div className="text-slate-900 font-medium group-hover:text-blue-600 transition-colors">
                        {contact.value}
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Contact Form - Improved */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
            <h3 className="text-xl font-medium text-slate-900 mb-6">Mesaj Gönder</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name || ""}
                    onChange={handleChange}
                    placeholder="Adınız"
                    className="w-full p-3 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 bg-white text-slate-900 placeholder-slate-400 rounded-lg transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email || ""}
                    onChange={handleChange}
                    placeholder="E-posta"
                    className="w-full p-3 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 bg-white text-slate-900 placeholder-slate-400 rounded-lg transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <input
                  type="text"
                  name="project"
                  value={formData.project || ""}
                  onChange={handleChange}
                  placeholder="Proje/Konu (opsiyonel)"
                  className="w-full p-3 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 bg-white text-slate-900 placeholder-slate-400 rounded-lg transition-all"
                />
              </div>

              <div className="space-y-2">
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={formData.message || ""}
                  onChange={handleChange}
                  placeholder="Mesajınız"
                  className="w-full p-3 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 bg-white text-slate-900 placeholder-slate-400 rounded-lg resize-none transition-all"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                {contactData.form.submitText}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
