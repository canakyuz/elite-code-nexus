
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
    <section id="contact" className="py-12 px-6 bg-gradient-to-br from-white to-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-3 space-y-4">
            <div className="space-y-3">
              <div className="text-4xl font-extralight text-blue-100 leading-none">{contactData.sectionNumber}</div>
              <h2 className="text-2xl font-light text-slate-900 relative">
                {contactData.title}
                <div className="absolute -bottom-2 left-0 w-16 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
              </h2>
            </div>
          </div>

          <div className="lg:col-span-9">
            <div className="max-w-2xl">
              <div className="space-y-4">
                <p className="text-base text-slate-600 leading-relaxed">
                  {contactData.description}
                </p>

                <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 hover:shadow-lg transition-all duration-300">
                  <form onSubmit={handleSubmit} className="space-y-3">
                    {contactData.form.fields.map((field, index) => (
                      <div key={index} className="space-y-1">
                        <label className="text-xs font-medium text-slate-700 block">
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
                            className="w-full p-2 border border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-100 bg-white text-slate-900 placeholder-slate-400 rounded-md resize-none transition-all outline-none text-sm"
                          />
                        ) : (
                          <input
                            type={field.type}
                            name={field.name}
                            required={field.required}
                            value={formData[field.name]}
                            onChange={handleChange}
                            placeholder={field.placeholder}
                            className="w-full p-2 border border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-100 bg-white text-slate-900 placeholder-slate-400 rounded-md transition-all outline-none text-sm"
                          />
                        )}
                      </div>
                    ))}

                    <button
                      type="submit"
                      className="w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-md shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02] flex items-center justify-center gap-2 font-medium mt-4 text-sm"
                    >
                      <Send className="w-4 h-4" />
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
