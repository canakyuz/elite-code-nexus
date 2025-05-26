
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
    
    const toc: TableOfContentsItem[] = Array.from(headings).map((heading) => ({
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
      <div className="min-h-screen bg-white">
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
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="pt-20">
        <div className="flex max-w-7xl mx-auto">
          {/* Left Sidebar - Posts List */}
          <div className="w-80 bg-slate-50 border-r border-slate-200 h-screen sticky top-0 overflow-hidden">
            <div className="p-6 border-b border-slate-200">
              <Button 
                onClick={() => navigate('/')} 
                variant="ghost" 
                size="sm"
                className="mb-4 -ml-2 font-departure"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
              <h2 className="text-lg font-medium text-slate-900 font-departure">All Posts</h2>
            </div>
            
            <ScrollArea className="h-full pb-20">
              <div className="p-6">
                <Tabs defaultValue={Object.keys(groupedPosts)[0]} className="w-full">
                  <TabsList className="grid w-full grid-cols-3 mb-6">
                    {Object.keys(groupedPosts).map((category) => (
                      <TabsTrigger key={category} value={category} className="text-xs font-departure">
                        {category}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                  
                  {Object.entries(groupedPosts).map(([category, posts]) => (
                    <TabsContent key={category} value={category} className="space-y-3">
                      {posts.map((blogPost) => (
                        <div
                          key={blogPost.id}
                          onClick={() => navigate(`/blog/${blogPost.slug}`)}
                          className={`p-4 rounded-lg border cursor-pointer transition-all hover:shadow-md ${
                            blogPost.slug === slug 
                              ? 'bg-blue-50 border-blue-200' 
                              : 'bg-white border-slate-200 hover:border-slate-300'
                          }`}
                        >
                          <h3 className="font-medium text-slate-900 text-sm mb-2 font-departure line-clamp-2">
                            {blogPost.title}
                          </h3>
                          <p className="text-xs text-slate-600 mb-3 line-clamp-2 font-departure">
                            {blogPost.excerpt}
                          </p>
                          <div className="flex items-center gap-3 text-xs text-slate-500">
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
          <div className="flex-1 max-w-none">
            <div className="px-8 py-12">
              <div className="max-w-4xl">
                <div className="space-y-8">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <h1 className="text-4xl font-light text-slate-900 font-departure">
                        {post.title}
                      </h1>
                      <div className="bg-slate-50 px-4 py-2 rounded-lg">
                        <span className="text-sm text-slate-500 font-medium font-departure">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-xl text-slate-600 font-light max-w-3xl font-departure">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center gap-6 text-sm text-slate-500">
                      <div className="flex items-center gap-2 font-departure">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.publishDate).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </div>
                      <div className="flex items-center gap-2 font-departure">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </div>
                    </div>
                  </div>

                  <div className="pt-8 border-t border-slate-200">
                    <div 
                      className="prose prose-lg max-w-none prose-headings:font-departure prose-p:font-departure"
                      dangerouslySetInnerHTML={{ __html: mockContent }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar - Table of Contents */}
          <div className="w-64 bg-slate-50 border-l border-slate-200 h-screen sticky top-0 overflow-hidden">
            <div className="p-6">
              <div className="flex items-center gap-2 mb-6">
                <List className="w-4 h-4 text-slate-600" />
                <h3 className="font-medium text-slate-900 font-departure">Table of Contents</h3>
              </div>
              
              <ScrollArea className="h-full">
                <nav className="space-y-2">
                  {tableOfContents.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors font-departure ${
                        activeSection === item.id
                          ? 'bg-blue-100 text-blue-700 font-medium'
                          : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
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
