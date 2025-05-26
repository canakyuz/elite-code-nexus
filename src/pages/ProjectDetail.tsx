
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import projectsData from "@/content/projects/data.json";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const project = projectsData.projects.find(p => p.id === id);
  
  if (!project) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="pt-32 pb-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-title text-slate-900 mb-8 font-departure">Project Not Found</h1>
            <Button onClick={() => navigate('/')} variant="outline" className="font-departure">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const renderContent = (item: any) => {
    switch (item.type) {
      case 'heading':
        return (
          <h2 key={Math.random()} className="text-2xl font-light text-slate-900 mt-12 mb-6 font-departure">
            {item.text}
          </h2>
        );
      case 'paragraph':
        return (
          <p key={Math.random()} className="text-body text-slate-600 mb-6 leading-relaxed font-departure">
            {item.text}
          </p>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <Button 
            onClick={() => navigate('/')} 
            variant="ghost" 
            className="mb-8 -ml-4 font-departure"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Button>

          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h1 className="text-display text-slate-900 font-departure">
                  {project.title}
                </h1>
                <div className="bg-slate-50 px-4 py-2 rounded-lg">
                  <span className="text-small text-slate-500 font-medium font-departure">
                    {project.year}
                  </span>
                </div>
              </div>
              
              <p className="text-title text-slate-600 font-light max-w-3xl font-departure">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className="text-xs font-departure text-blue-600 uppercase tracking-wider px-4 py-2 bg-blue-50 rounded-full border border-blue-100"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {project.blogContent && (
              <div className="pt-16 border-t border-slate-200">
                <div className="space-y-8">
                  <div className="space-y-4">
                    <h2 className="text-title text-slate-900 font-departure">
                      {project.blogContent.title}
                    </h2>
                    
                    <div className="flex items-center gap-6 text-small text-slate-500">
                      <div className="flex items-center gap-2 font-departure">
                        <Calendar className="w-4 h-4" />
                        {new Date(project.blogContent.publishDate).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </div>
                      <div className="flex items-center gap-2 font-departure">
                        <Clock className="w-4 h-4" />
                        {project.blogContent.readTime}
                      </div>
                    </div>
                  </div>

                  <div className="prose prose-lg max-w-none">
                    {project.blogContent.content.map((item, index) => renderContent(item))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ProjectDetail;
