
import { useState } from "react";
import { Send } from "lucide-react";
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
    <section id="contact" className="py-16 px-6 bg-gradient-to-br from-white to-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-3 space-y-6">
            <div className="space-y-4">
              <div className="text-5xl font-extralight text-blue-100 leading-none">{contactData.sectionNumber}</div>
              <h2 className="text-3xl font-light text-slate-900 relative">
                {contactData.title}
                <div className="absolute -bottom-2 left-0 w-16 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
              </h2>
            </div>
          </div>

          <div className="lg:col-span-9">
            <div className="max-w-2xl">
              <div className="space-y-6">
                <p className="text-lg text-slate-600 leading-relaxed">
                  {contactData.description}
                </p>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition-all duration-300">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {contactData.form.fields.map((field, index) => (
                      <div key={index} className="space-y-1">
                        <label className="text-sm font-medium text-slate-700 block">
                          {field.placeholder}
                        </label>
                        {field.type === "textarea" ? (
                          <textarea
                            name={field.name}
                            required={field.required}
                            rows={3}
                            value={formData[field.name]}
                            onChange={handleChange}
                            placeholder={field.placeholder}
                            className="w-full p-3 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 bg-white text-slate-900 placeholder-slate-400 rounded-lg resize-none transition-all outline-none"
                          />
                        ) : (
                          <input
                            type={field.type}
                            name={field.name}
                            required={field.required}
                            value={formData[field.name]}
                            onChange={handleChange}
                            placeholder={field.placeholder}
                            className="w-full p-3 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 bg-white text-slate-900 placeholder-slate-400 rounded-lg transition-all outline-none"
                          />
                        )}
                      </div>
                    ))}

                    <button
                      type="submit"
                      className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02] flex items-center justify-center gap-2 font-medium mt-6"
                    >
                      <Send className="w-5 h-5" />
                      {contactData.form.submitText}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
