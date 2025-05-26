
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Github, ExternalLink, BookOpen, Monitor, Cpu, Database, Globe } from "lucide-react";
import projectsData from "@/content/projects/data.json";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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

  const getLinkIcon = (linkType: string) => {
    switch (linkType) {
      case 'github':
        return <Github className="w-4 h-4" />;
      case 'demo':
        return <ExternalLink className="w-4 h-4" />;
      case 'documentation':
        return <BookOpen className="w-4 h-4" />;
      default:
        return <Globe className="w-4 h-4" />;
    }
  };

  const getTechIcon = (category: string) => {
    switch (category) {
      case 'frontend':
        return <Monitor className="w-4 h-4" />;
      case 'backend':
        return <Database className="w-4 h-4" />;
      case 'ai':
        return <Cpu className="w-4 h-4" />;
      default:
        return <Globe className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      <Navbar />
      
      <div className="pt-24 pb-16 px-6">
        <div className="max-w-5xl mx-auto">
          <Button 
            onClick={() => navigate('/')} 
            variant="ghost" 
            className="mb-6 -ml-4 font-departure"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Button>

          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium mb-4 font-departure">
              {project.year}
            </div>
            <h1 className="text-4xl md:text-5xl font-light text-slate-900 mb-4 font-departure">
              {project.title}
            </h1>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed font-departure">
              {project.overview}
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {Object.entries(project.links).map(([type, url]) => (
              <a
                key={type}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white hover:bg-blue-50 border border-slate-200 hover:border-blue-300 rounded-lg px-4 py-2 transition-colors font-departure text-sm"
              >
                {getLinkIcon(type)}
                <span className="capitalize">{type}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Key Features */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-departure text-slate-900">Key Features</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-3">
                    {project.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 p-3 bg-slate-50 rounded-lg">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-sm font-departure text-slate-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Technology Stack */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-departure text-slate-900">Technology Stack</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {Object.entries(project.techStack).map(([category, techs]) => (
                      <div key={category}>
                        <div className="flex items-center gap-2 mb-2">
                          {getTechIcon(category)}
                          <h4 className="font-medium capitalize font-departure text-slate-800">{category}</h4>
                        </div>
                        <div className="flex flex-wrap gap-2 ml-6">
                          {techs.map((tech, index) => (
                            <Badge key={index} variant="secondary" className="font-departure text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Project Info */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg font-departure text-slate-900">Project Info</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="text-sm font-medium text-slate-500 font-departure">Year</div>
                    <div className="text-slate-900 font-departure">{project.year}</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-slate-500 font-departure">Category</div>
                    <div className="text-slate-900 font-departure">Full Stack Development</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-slate-500 font-departure">Status</div>
                    <Badge className="bg-green-100 text-green-700 hover:bg-green-100 font-departure">
                      Completed
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              {/* All Technologies */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg font-departure text-slate-900">Technologies Used</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <Badge key={index} variant="outline" className="font-departure text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ProjectDetail;
