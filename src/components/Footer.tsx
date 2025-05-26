
import { Download, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Can_Akyuz_Resume.pdf';
    link.click();
  };

  return (
    <footer className="py-12 px-4 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-8 left-8 w-24 h-24 border border-white rounded-full animate-pulse"></div>
        <div className="absolute bottom-16 right-16 w-16 h-16 border border-white rotate-45"></div>
        <div className="absolute top-1/2 left-1/3 w-12 h-12 border border-white transform -translate-y-1/2"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-12 gap-8 mb-8">
          <div className="md:col-span-5 space-y-4">
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center rounded-lg shadow-lg">
                  <span className="text-white font-bold text-sm font-departure">CA</span>
                </div>
                <div>
                  <div className="text-lg font-light font-departure">Can Akyüz</div>
                  <div className="text-blue-300 text-xs font-departure">Software Architect</div>
                </div>
              </div>
              
              <p className="text-slate-300 text-body leading-relaxed max-w-sm font-departure">
                Building scalable solutions with mathematical precision and technical depth.
              </p>
              
              <Button 
                onClick={handleDownloadResume}
                className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-4 py-2 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 font-departure text-xs"
              >
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </Button>
            </div>
          </div>

          <div className="md:col-span-7 grid md:grid-cols-3 gap-6">
            <div className="space-y-3">
              <div className="text-xs text-blue-300 font-departure uppercase tracking-wider">Links</div>
              <div className="space-y-2">
                {[
                  { label: "LinkedIn", href: "https://linkedin.com/in/canakyuz" },
                  { label: "GitHub", href: "https://github.com/canakyuz" },
                  { label: "Email", href: "mailto:hello@canakyuz.dev" }
                ].map((link) => (
                  <a key={link.label} href={link.href} className="block text-slate-300 hover:text-blue-400 transition-colors group">
                    <span className="text-xs font-departure">{link.label}</span>
                    <div className="w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></div>
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <div className="text-xs text-blue-300 font-departure uppercase tracking-wider">Navigation</div>
              <div className="space-y-2">
                {[
                  { label: "About", href: "#about" },
                  { label: "Projects", href: "#work" },
                  { label: "Skills", href: "#skills" },
                  { label: "Contact", href: "#contact" }
                ].map((link) => (
                  <a key={link.label} href={link.href} className="block text-slate-300 hover:text-blue-400 transition-colors text-xs font-departure">
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <div className="text-xs text-blue-300 font-departure uppercase tracking-wider">Location</div>
              <div className="space-y-1">
                <div className="text-slate-300 text-xs font-departure">Istanbul, Turkey</div>
                <div className="text-slate-400 text-xs font-departure">UTC+3</div>
                <div className="flex items-center space-x-2 mt-3">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-xs text-green-400 font-departure">Available for projects</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
            <div className="text-xs text-slate-400 font-departure">
              © 2024 Can Akyüz. Designed with precision and passion.
            </div>
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-xs text-slate-400 hover:text-blue-400 transition-colors group flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-slate-800 font-departure"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3 h-3 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
