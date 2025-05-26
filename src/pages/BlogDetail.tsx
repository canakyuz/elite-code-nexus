
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, List, FileText } from "lucide-react";
import { useState, useEffect } from "react";
import blogData from "@/content/blog/data.json";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  publishDate: string;
  readTime: string;
  category: string;
  slug: string;
}

interface TableOfContentsItem {
  id: string;
  text: string;
  level: number;
}

const BlogDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState<string>("");
  const [tableOfContents, setTableOfContents] = useState<TableOfContentsItem[]>([]);

  const post = blogData.posts.find(p => p.slug === slug);

  // Group posts by category
  const groupedPosts = blogData.posts.reduce((acc, post) => {
    if (!acc[post.category]) {
      acc[post.category] = [];
    }
    acc[post.category].push(post);
    return acc;
  }, {} as Record<string, BlogPost[]>);

  // Mock content for demonstration - in a real app this would come from the data
  const mockContent = `
    <h2 id="introduction">Introduction</h2>
    <p>This is the introduction section of the blog post. Here we introduce the main concepts and ideas that will be discussed throughout the article.</p>
    
    <h2 id="main-concepts">Main Concepts</h2>
    <p>In this section, we dive deeper into the core concepts that are essential for understanding the topic.</p>
    
    <h3 id="concept-one">Concept One</h3>
    <p>Detailed explanation of the first important concept.</p>
    
    <h3 id="concept-two">Concept Two</h3>
    <p>Detailed explanation of the second important concept.</p>
    
    <h2 id="implementation">Implementation</h2>
    <p>This section covers the practical implementation aspects.</p>
    
    <h3 id="step-one">Step One</h3>
    <p>First step in the implementation process.</p>
    
    <h3 id="step-two">Step Two</h3>
    <p>Second step in the implementation process.</p>
    
    <h2 id="conclusion">Conclusion</h2>
    <p>Final thoughts and summary of the key points discussed in this article.</p>
  `;

  useEffect(() => {
    // Extract table of contents from content
    const parser = new DOMParser();
    const doc = parser.parseFromString(mockContent, 'text/html');
    const headings = doc.querySelectorAll('h1, h2, h3, h4, h5, h6');
    const toc: TableOfContentsItem[] = Array.from(headings).map(heading => ({
      id: heading.id || heading.textContent?.toLowerCase().replace(/\s+/g, '-') || '',
      text: heading.textContent || '',
      level: parseInt(heading.tagName.charAt(1))
    }));
    setTableOfContents(toc);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
      const scrollPosition = window.scrollY + 100;
      
      for (let i = headings.length - 1; i >= 0; i--) {
        const heading = headings[i] as HTMLElement;
        if (heading.offsetTop <= scrollPosition) {
          setActiveSection(heading.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
        <Navbar />
        <div className="pt-32 pb-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-title text-slate-900 mb-8 font-departure">Blog Post Not Found</h1>
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      <Navbar />
      
      <div className="pt-20">
        <div className="flex max-w-7xl mx-auto shadow-2xl bg-white rounded-t-3xl overflow-hidden">
          {/* Left Sidebar - Posts List */}
          <div className="w-80 bg-gradient-to-b from-blue-50 to-indigo-50 border-r border-blue-100 h-screen sticky top-0 overflow-hidden">
            <div className="p-6 border-b border-blue-200 bg-white/50 backdrop-blur-sm">
              <Button 
                onClick={() => navigate('/')} 
                variant="ghost" 
                size="sm" 
                className="mb-4 -ml-2 font-departure text-blue-700 hover:text-blue-900 hover:bg-blue-100"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
              <h2 className="text-lg font-medium text-blue-900 font-departure">All Posts</h2>
            </div>
            
            <ScrollArea className="h-full pb-20">
              <div className="p-6">
                <Tabs defaultValue={Object.keys(groupedPosts)[0]} className="w-full">
                  <TabsList className="grid w-full grid-cols-3 mb-6 bg-white/80 backdrop-blur-sm">
                    {Object.keys(groupedPosts).map(category => (
                      <TabsTrigger 
                        key={category} 
                        value={category} 
                        className="text-xs font-departure data-[state=active]:bg-blue-500 data-[state=active]:text-white"
                      >
                        {category}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                  
                  {Object.entries(groupedPosts).map(([category, posts]) => (
                    <TabsContent key={category} value={category} className="space-y-3">
                      {posts.map(blogPost => (
                        <div
                          key={blogPost.id}
                          onClick={() => navigate(`/blog/${blogPost.slug}`)}
                          className={`p-4 rounded-xl border cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                            blogPost.slug === slug 
                              ? 'bg-gradient-to-r from-blue-500 to-indigo-500 border-blue-300 text-white shadow-lg' 
                              : 'bg-white/80 backdrop-blur-sm border-blue-200 hover:border-blue-300 hover:bg-white'
                          }`}
                        >
                          <h3 className={`font-medium text-sm mb-2 font-departure line-clamp-2 ${
                            blogPost.slug === slug ? 'text-white' : 'text-slate-900'
                          }`}>
                            {blogPost.title}
                          </h3>
                          <p className={`text-xs mb-3 line-clamp-2 font-departure ${
                            blogPost.slug === slug ? 'text-blue-100' : 'text-slate-600'
                          }`}>
                            {blogPost.excerpt}
                          </p>
                          <div className={`flex items-center gap-3 text-xs ${
                            blogPost.slug === slug ? 'text-blue-200' : 'text-slate-500'
                          }`}>
                            <div className="flex items-center gap-1 font-departure">
                              <Calendar className="w-3 h-3" />
                              {new Date(blogPost.publishDate).toLocaleDateString('en-US', {
                                month: 'short',
                                day: 'numeric'
                              })}
                            </div>
                            <div className="flex items-center gap-1 font-departure">
                              <Clock className="w-3 h-3" />
                              {blogPost.readTime}
                            </div>
                          </div>
                        </div>
                      ))}
                    </TabsContent>
                  ))}
                </Tabs>
              </div>
            </ScrollArea>
          </div>

          {/* Main Content */}
          <div className="flex-1 max-w-none bg-white">
            <div className="px-8 py-12">
              <div className="max-w-4xl">
                <div className="space-y-8">
                  <div className="space-y-6">
                    <div className="flex items-start justify-between">
                      <h1 className="text-4xl font-light text-slate-900 font-departure leading-tight">
                        {post.title}
                      </h1>
                      <div className="bg-gradient-to-r from-blue-500 to-indigo-500 px-4 py-2 rounded-full shadow-lg">
                        <span className="text-sm text-white font-medium font-departure">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-xl text-slate-600 font-light max-w-3xl font-departure leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center gap-6 text-sm text-slate-500 pb-6 border-b border-slate-200">
                      <div className="flex items-center gap-2 font-departure">
                        <Calendar className="w-4 h-4 text-blue-500" />
                        {new Date(post.publishDate).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </div>
                      <div className="flex items-center gap-2 font-departure">
                        <Clock className="w-4 h-4 text-blue-500" />
                        {post.readTime}
                      </div>
                    </div>
                  </div>

                  <div className="pt-8">
                    <div 
                      className="prose prose-lg max-w-none prose-headings:font-departure prose-p:font-departure prose-headings:text-slate-900 prose-p:text-slate-700 prose-headings:border-l-4 prose-headings:border-blue-500 prose-headings:pl-4 prose-headings:bg-blue-50 prose-headings:py-2 prose-headings:rounded-r-lg" 
                      dangerouslySetInnerHTML={{ __html: mockContent }} 
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar - Table of Contents */}
          <div className="w-64 bg-gradient-to-b from-slate-50 to-gray-50 border-l border-slate-200 h-screen sticky top-0 overflow-hidden">
            <div className="p-6">
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-slate-200">
                <List className="w-4 h-4 text-blue-500" />
                <h3 className="font-medium text-slate-900 font-departure">Table of Contents</h3>
              </div>
              
              <ScrollArea className="h-full">
                <nav className="space-y-1">
                  {tableOfContents.map(item => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-200 font-departure ${
                        activeSection === item.id 
                          ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-md font-medium' 
                          : 'text-slate-600 hover:text-slate-900 hover:bg-white hover:shadow-sm'
                      }`}
                      style={{ paddingLeft: `${(item.level - 1) * 12 + 12}px` }}
                    >
                      {item.text}
                    </button>
                  ))}
                </nav>
              </ScrollArea>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default BlogDetail;
