
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, List, BookOpen } from "lucide-react";
import { useState, useEffect } from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import blogData from "@/content/blog/data.json";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
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
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const post = blogData.posts.find(p => p.slug === slug);

  // Group posts by category
  const groupedPosts = blogData.posts.reduce((acc, post) => {
    if (!acc[post.category]) {
      acc[post.category] = [];
    }
    acc[post.category].push(post);
    return acc;
  }, {} as Record<string, BlogPost[]>);

  // Set initial selected category
  useEffect(() => {
    if (!selectedCategory && Object.keys(groupedPosts).length > 0) {
      setSelectedCategory(Object.keys(groupedPosts)[0]);
    }
  }, [groupedPosts, selectedCategory]);

  // Enhanced content sections with English content
  const contentSections = [
    {
      id: "introduction",
      title: "Introduction",
      content: "In this comprehensive guide, we'll explore the best practices for modern React development. You'll learn how to effectively leverage React's powerful features to build maintainable and scalable applications."
    },
    {
      id: "component-architecture",
      title: "Component Architecture",
      content: "Properly structuring React components is the foundation of building sustainable and scalable applications. Let's dive into the key principles.",
      subsections: [
        {
          id: "functional-components",
          title: "Functional Components",
          content: "Prefer functional components in modern React development:",
          code: `import React, { useState, useEffect } from 'react';

const UserProfile = ({ userId }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(\`/api/users/\${userId}\`);
        const userData = await response.json();
        setUser(userData);
      } catch (error) {
        console.error('Failed to fetch user data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [userId]);

  if (loading) return <div>Loading...</div>;
  if (!user) return <div>User not found</div>;

  return (
    <div className="user-profile">
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  );
};

export default UserProfile;`
        },
        {
          id: "custom-hooks",
          title: "Custom Hooks",
          content: "Extract reusable logic into custom hooks:",
          code: `import { useState, useEffect } from 'react';

const useApi = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};`
        }
      ]
    },
    {
      id: "state-management",
      title: "State Management",
      content: "Choosing the right approach for state management in React is crucial for application performance and maintainability.",
      subsections: [
        {
          id: "usestate-best-practices",
          title: "useState Best Practices",
          content: "Key considerations when updating state:",
          code: `// ❌ Wrong approach
const [user, setUser] = useState({});
setUser(user.name = 'New Name'); // Direct mutation

// ✅ Correct approach
const [user, setUser] = useState({});
setUser(prevUser => ({
  ...prevUser,
  name: 'New Name'
}));`
        }
      ]
    },
    {
      id: "performance",
      title: "Performance Optimization",
      content: "Techniques to improve performance in React applications and deliver better user experiences.",
      subsections: [
        {
          id: "memo-optimization",
          title: "React.memo and useMemo",
          content: "Use memoization to prevent unnecessary re-renders:",
          code: `import React, { memo, useMemo } from 'react';

const ExpensiveComponent = memo(({ data, filter }) => {
  const filteredData = useMemo(() => {
    return data.filter(item => 
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
  }, [data, filter]);

  return (
    <div>
      {filteredData.map(item => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
});`
        }
      ]
    },
    {
      id: "conclusion",
      title: "Conclusion",
      content: "We've covered the most important aspects of React development best practices. By implementing these patterns in your projects, you can write cleaner, more performant, and maintainable code."
    }
  ];

  useEffect(() => {
    // Extract table of contents from content sections
    const toc: TableOfContentsItem[] = [];
    
    contentSections.forEach(section => {
      toc.push({
        id: section.id,
        text: section.title,
        level: 2
      });
      
      if (section.subsections) {
        section.subsections.forEach(subsection => {
          toc.push({
            id: subsection.id,
            text: subsection.title,
            level: 3
          });
        });
      }
    });
    
    setTableOfContents(toc);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const headings = document.querySelectorAll('[data-section-id]');
      const scrollPosition = window.scrollY + 150;
      
      for (let i = headings.length - 1; i >= 0; i--) {
        const heading = headings[i] as HTMLElement;
        if (heading.offsetTop <= scrollPosition) {
          const sectionId = heading.getAttribute('data-section-id');
          if (sectionId) {
            setActiveSection(sectionId);
          }
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.querySelector(`[data-section-id="${id}"]`);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="pt-32 pb-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Blog Post Not Found</h1>
            <Button onClick={() => navigate('/')} variant="outline">
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
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="pt-20">
        <div className="flex max-w-7xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
          {/* Left Sidebar - Posts List */}
          <div className="w-72 bg-gray-50 border-r border-gray-200 h-screen sticky top-20 overflow-hidden">
            <div className="p-5 border-b border-gray-200 bg-white">
              <Button onClick={() => navigate('/')} variant="ghost" size="sm" className="mb-3 -ml-2 text-gray-700 hover:text-gray-900">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
              <h2 className="text-lg font-semibold text-gray-900 mb-3">All Posts</h2>
              
              {/* Category Badges - More Compact */}
              <div className="mb-4">
                <ScrollArea className="w-full">
                  <div className="flex gap-1.5 pb-2">
                    {Object.keys(groupedPosts).map(category => (
                      <Badge
                        key={category}
                        variant={selectedCategory === category ? "default" : "outline"}
                        className={`cursor-pointer whitespace-nowrap transition-all hover:shadow-sm text-xs px-2 py-1 ${
                          selectedCategory === category 
                            ? 'bg-blue-500 text-white hover:bg-blue-600' 
                            : 'text-gray-700 hover:text-blue-600 hover:border-blue-300'
                        }`}
                        onClick={() => setSelectedCategory(category)}
                      >
                        {category}
                      </Badge>
                    ))}
                  </div>
                </ScrollArea>
              </div>
            </div>
            
            <ScrollArea className="h-full pb-20">
              <div className="p-5">
                <div className="space-y-2.5">
                  {selectedCategory && groupedPosts[selectedCategory]?.map(blogPost => (
                    <div 
                      key={blogPost.id}
                      onClick={() => navigate(`/blog/${blogPost.slug}`)}
                      className={`p-3 rounded-lg border cursor-pointer transition-all hover:shadow-md ${
                        blogPost.slug === slug 
                          ? 'bg-blue-50 border-blue-200 shadow-sm' 
                          : 'bg-white border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <h3 className={`font-medium text-sm mb-2 line-clamp-2 ${
                        blogPost.slug === slug ? 'text-blue-900' : 'text-gray-900'
                      }`}>
                        {blogPost.title}
                      </h3>
                      <p className={`text-xs mb-2 line-clamp-2 ${
                        blogPost.slug === slug ? 'text-blue-700' : 'text-gray-600'
                      }`}>
                        {blogPost.excerpt}
                      </p>
                      <div className={`flex items-center gap-3 text-xs ${
                        blogPost.slug === slug ? 'text-blue-600' : 'text-gray-500'
                      }`}>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {new Date(blogPost.publishDate).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric'
                          })}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {blogPost.readTime}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollArea>
          </div>

          {/* Main Content - Optimized */}
          <div className="flex-1 bg-white">
            <div className="px-8 py-8 max-w-4xl">
              {/* Header - More Compact */}
              <div className="mb-8">
                <div className="flex items-start justify-between mb-5">
                  <h1 className="text-4xl font-bold text-gray-900 leading-tight max-w-3xl">
                    {post.title}
                  </h1>
                  <div className="bg-blue-500 px-3 py-1.5 rounded-full ml-4">
                    <span className="text-sm text-white font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center gap-6 text-sm text-gray-500 pb-6 border-b border-gray-200">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-blue-500" />
                    {new Date(post.publishDate).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-blue-500" />
                    {post.readTime}
                  </div>
                </div>
              </div>

              {/* Content - Better Optimized */}
              <div className="space-y-10">
                {contentSections.map(section => (
                  <div key={section.id}>
                    <h2 
                      data-section-id={section.id}
                      className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-blue-500 pl-4"
                    >
                      {section.title}
                    </h2>
                    <p className="text-base text-gray-700 mb-6 leading-relaxed">
                      {section.content}
                    </p>
                    
                    {section.subsections && (
                      <div className="space-y-8 ml-4">
                        {section.subsections.map(subsection => (
                          <div key={subsection.id}>
                            <h3 
                              data-section-id={subsection.id}
                              className="text-xl font-semibold text-gray-800 mb-3"
                            >
                              {subsection.title}
                            </h3>
                            <p className="text-gray-700 mb-4 leading-relaxed">
                              {subsection.content}
                            </p>
                            {subsection.code && (
                              <div className="mb-6">
                                <SyntaxHighlighter
                                  language="javascript"
                                  style={vscDarkPlus}
                                  customStyle={{
                                    borderRadius: '8px',
                                    fontSize: '13px',
                                    lineHeight: '1.5'
                                  }}
                                  showLineNumbers={true}
                                >
                                  {subsection.code}
                                </SyntaxHighlighter>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar - Table of Contents (More Compact) */}
          <div className="w-64 bg-gray-50 border-l border-gray-200 h-screen sticky top-20 overflow-hidden">
            <div className="p-4">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-200">
                <List className="w-4 h-4 text-blue-500" />
                <h3 className="font-semibold text-gray-900 text-sm">Contents</h3>
              </div>
              
              <ScrollArea className="h-full">
                <nav className="space-y-1">
                  {tableOfContents.map(item => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`w-full text-left px-3 py-2 rounded-md text-xs transition-all ${
                        activeSection === item.id 
                          ? 'bg-blue-100 text-blue-900 font-medium border border-blue-200' 
                          : 'text-gray-700 hover:text-gray-900 hover:bg-white'
                      }`}
                      style={{
                        paddingLeft: `${(item.level - 1) * 8 + 12}px`,
                        fontSize: item.level === 2 ? '12px' : '11px',
                        fontWeight: item.level === 2 ? '500' : '400'
                      }}
                    >
                      <div className="flex items-center gap-1.5">
                        {item.level === 2 && <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />}
                        {item.level === 3 && <div className="w-1 h-1 rounded-full bg-gray-400" />}
                        <span className="line-clamp-2">{item.text}</span>
                      </div>
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
