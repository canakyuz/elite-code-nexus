
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
    <section id="contact" className="py-32 px-6 bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-20">
          <div className="lg:col-span-3">
            <div className="space-y-4">
              <div className="text-8xl font-light text-blue-200">{contactData.sectionNumber}</div>
              <h2 className="text-3xl font-light text-blue-900">{contactData.title}</h2>
            </div>
          </div>

          <div className="lg:col-span-9">
            <div className="grid lg:grid-cols-2 gap-16">
              <div className="space-y-8">
                <div className="space-y-6">
                  <p className="text-lg font-light text-blue-700 leading-relaxed">
                    {contactData.description}
                  </p>
                  
                  <div className="space-y-4">
                    {contactData.contactInfo.map((contact, index) => (
                      <div key={index}>
                        <div className="text-xs font-mono text-blue-500 uppercase tracking-wider mb-1">
                          {contact.label}
                        </div>
                        <a href={contact.href} className="text-blue-900 hover:text-blue-700 transition-colors">
                          {contact.value}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

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
                          className="w-full pb-3 border-0 border-b border-blue-300 focus:border-blue-600 focus:ring-0 bg-transparent text-blue-900 placeholder-blue-400 font-light resize-none"
                        />
                      ) : (
                        <input
                          type={field.type}
                          name={field.name}
                          required={field.required}
                          value={formData[field.name]}
                          onChange={handleChange}
                          placeholder={field.placeholder}
                          className="w-full pb-3 border-0 border-b border-blue-300 focus:border-blue-600 focus:ring-0 bg-transparent text-blue-900 placeholder-blue-400 font-light"
                        />
                      )}
                    </div>
                  ))}

                  <button
                    type="submit"
                    className="text-sm font-mono text-blue-900 hover:text-blue-700 transition-colors uppercase tracking-wider border-b border-blue-600 pb-1"
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
