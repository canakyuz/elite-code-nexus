
import { useState } from "react";
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

  return (
    <section id="contact" className="py-32 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-20">
          {/* Left column */}
          <div className="lg:col-span-3">
            <div className="space-y-4">
              <div className="text-8xl font-light text-gray-200">{contactData.sectionNumber}</div>
              <h2 className="text-3xl font-light text-black">{contactData.title}</h2>
            </div>
          </div>

          {/* Right column */}
          <div className="lg:col-span-9">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact info */}
              <div className="space-y-8">
                <div className="space-y-6">
                  <p className="text-lg font-light text-gray-600 leading-relaxed">
                    {contactData.description}
                  </p>
                  
                  <div className="space-y-4">
                    {contactData.contactInfo.map((contact, index) => (
                      <div key={index}>
                        <div className="text-xs font-mono text-gray-400 uppercase tracking-wider mb-1">
                          {contact.label}
                        </div>
                        <a href={contact.href} className="text-black hover:text-gray-600 transition-colors">
                          {contact.value}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contact form */}
              <div>
                <form onSubmit={handleSubmit} className="space-y-8">
                  {contactData.form.fields.map((field, index) => (
                    <div key={index}>
                      {field.type === "textarea" ? (
                        <textarea
                          name={field.name}
                          required={field.required}
                          rows={field.rows}
                          value={formData[field.name]}
                          onChange={handleChange}
                          placeholder={field.placeholder}
                          className="w-full pb-3 border-0 border-b border-gray-300 focus:border-black focus:ring-0 bg-transparent text-black placeholder-gray-400 font-light resize-none"
                        />
                      ) : (
                        <input
                          type={field.type}
                          name={field.name}
                          required={field.required}
                          value={formData[field.name]}
                          onChange={handleChange}
                          placeholder={field.placeholder}
                          className="w-full pb-3 border-0 border-b border-gray-300 focus:border-black focus:ring-0 bg-transparent text-black placeholder-gray-400 font-light"
                        />
                      )}
                    </div>
                  ))}

                  <button
                    type="submit"
                    className="text-sm font-mono text-black hover:text-gray-600 transition-colors uppercase tracking-wider border-b border-black pb-1"
                  >
                    {contactData.form.submitText}
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
