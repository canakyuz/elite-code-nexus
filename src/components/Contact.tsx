
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
    <section id="contact" className="py-32 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-20">
          <div className="lg:col-span-3 space-y-8">
            <div className="space-y-4">
              <div className="text-6xl font-extralight text-slate-200">{contactData.sectionNumber}</div>
              <h2 className="text-title text-slate-900">{contactData.title}</h2>
            </div>
          </div>

          <div className="lg:col-span-9">
            <div className="grid lg:grid-cols-2 gap-20">
              <div className="space-y-12">
                <div className="space-y-8">
                  <p className="text-body text-slate-600 leading-relaxed">
                    {contactData.description}
                  </p>
                  
                  <div className="space-y-6">
                    {contactData.contactInfo.map((contact, index) => (
                      <div key={index} className="space-y-2">
                        <div className="text-small text-slate-400">
                          {contact.label}
                        </div>
                        <a href={contact.href} className="text-slate-900 hover:text-blue-500 transition-colors text-lg">
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
                    <div key={index} className="space-y-2">
                      {field.type === "textarea" ? (
                        <textarea
                          name={field.name}
                          required={field.required}
                          rows={field.rows}
                          value={formData[field.name]}
                          onChange={handleChange}
                          placeholder={field.placeholder}
                          className="w-full p-4 border border-slate-200 focus:border-blue-500 focus:ring-0 bg-white text-slate-900 placeholder-slate-400 rounded-lg resize-none transition-colors"
                        />
                      ) : (
                        <input
                          type={field.type}
                          name={field.name}
                          required={field.required}
                          value={formData[field.name]}
                          onChange={handleChange}
                          placeholder={field.placeholder}
                          className="w-full p-4 border border-slate-200 focus:border-blue-500 focus:ring-0 bg-white text-slate-900 placeholder-slate-400 rounded-lg transition-colors"
                        />
                      )}
                    </div>
                  ))}

                  <button
                    type="submit"
                    className="px-8 py-4 bg-blue-500 text-white text-small hover:bg-blue-600 transition-colors rounded-lg"
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
