
import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
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

  const contactIcons = {
    "E-posta": Mail,
    "Telefon": Phone,
    "Konum": MapPin
  };

  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-6xl font-extralight text-blue-100 mb-4">{contactData.sectionNumber}</div>
          <h2 className="text-4xl font-light text-slate-900 mb-4">{contactData.title}</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">{contactData.description}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            {contactData.contactInfo.map((contact, index) => {
              const IconComponent = contactIcons[contact.label as keyof typeof contactIcons] || Mail;
              return (
                <div key={index} className="group bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100 hover:border-blue-200">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                      <IconComponent className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <div className="text-sm text-slate-500 mb-1">{contact.label}</div>
                      <a 
                        href={contact.href} 
                        className="text-slate-900 hover:text-blue-600 transition-colors font-medium"
                      >
                        {contact.value}
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              {contactData.form.fields.map((field, index) => (
                <div key={index} className="space-y-2">
                  <label className="text-sm font-medium text-slate-700 block">
                    {field.placeholder}
                  </label>
                  {field.type === "textarea" ? (
                    <textarea
                      name={field.name}
                      required={field.required}
                      rows={field.rows}
                      value={formData[field.name]}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      className="w-full p-4 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 bg-white text-slate-900 placeholder-slate-400 rounded-lg resize-none transition-all outline-none"
                    />
                  ) : (
                    <input
                      type={field.type}
                      name={field.name}
                      required={field.required}
                      value={formData[field.name]}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      className="w-full p-4 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 bg-white text-slate-900 placeholder-slate-400 rounded-lg transition-all outline-none"
                    />
                  )}
                </div>
              ))}

              <button
                type="submit"
                className="w-full px-6 py-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02] flex items-center justify-center gap-2 font-medium"
              >
                <Send className="w-5 h-5" />
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
