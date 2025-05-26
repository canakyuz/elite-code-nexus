import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, List, BookOpen } from "lucide-react";
import { useState, useEffect } from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
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

  // Enhanced content sections
  const contentSections = [
    {
      id: "introduction",
      title: "Giriş",
      content: "Modern React geliştirmede en iyi uygulamaları bu makalede detaylarıyla ele alacağız. React'in güçlü özelliklerini nasıl etkili bir şekilde kullanabileceğinizi öğreneceksiniz."
    },
    {
      id: "component-architecture",
      title: "Bileşen Mimarisi",
      content: "React bileşenlerini doğru şekilde yapılandırmak, sürdürülebilir ve ölçeklenebilir uygulamalar geliştirmenin temelidir.",
      subsections: [
        {
          id: "functional-components",
          title: "Fonksiyonel Bileşenler",
          content: "Modern React'te fonksiyonel bileşenler kullanmayı tercih edin:",
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
        console.error('Kullanıcı bilgileri alınamadı:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [userId]);

  if (loading) return <div>Yükleniyor...</div>;
  if (!user) return <div>Kullanıcı bulunamadı</div>;

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
          title: "Özel Hook'lar",
          content: "Tekrar kullanılabilir mantığı özel hook'lara ayırın:",
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
          throw new Error('Veri alınamadı');
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
      title: "State Yönetimi",
      content: "React'te state yönetimi için doğru yöntemleri seçmek kritik önem taşır.",
      subsections: [
        {
          id: "usestate-best-practices",
          title: "useState En İyi Uygulamaları",
          content: "State güncellemelerinde dikkat edilmesi gereken noktalar:",
          code: `// ❌ Yanlış kullanım
const [user, setUser] = useState({});
setUser(user.name = 'Yeni İsim'); // Direkt mutasyon

// ✅ Doğru kullanım
const [user, setUser] = useState({});
setUser(prevUser => ({
  ...prevUser,
  name: 'Yeni İsim'
}));`
        }
      ]
    },
    {
      id: "performance",
      title: "Performans Optimizasyonu",
      content: "React uygulamalarında performansı artırmak için kullanabileceğiniz teknikler.",
      subsections: [
        {
          id: "memo-optimization",
          title: "React.memo ve useMemo",
          content: "Gereksiz render'ları önlemek için memoization kullanın:",
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
      title: "Sonuç",
      content: "Bu makalede React geliştirmede dikkat edilmesi gereken en önemli noktaları ele aldık. Bu uygulamaları projelerinizde kullanarak daha temiz, performanslı ve sürdürülebilir kod yazabilirsiniz."
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
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Blog Yazısı Bulunamadı</h1>
            <Button onClick={() => navigate('/')} variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Ana Sayfaya Dön
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
          <div className="w-80 bg-gray-50 border-r border-gray-200 h-screen sticky top-20 overflow-hidden">
            <div className="p-6 border-b border-gray-200 bg-white">
              <Button onClick={() => navigate('/')} variant="ghost" size="sm" className="mb-4 -ml-2 text-gray-700 hover:text-gray-900">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Ana Sayfaya Dön
              </Button>
              <h2 className="text-lg font-semibold text-gray-900">Tüm Yazılar</h2>
            </div>
            
            <ScrollArea className="h-full pb-20">
              <div className="p-6">
                <Tabs defaultValue={Object.keys(groupedPosts)[0]} className="w-full">
                  <TabsList className="grid w-full grid-cols-3 gap-1 mb-6 h-auto p-1 bg-gray-100">
                    {Object.keys(groupedPosts).map(category => (
                      <TabsTrigger 
                        key={category} 
                        value={category} 
                        className="text-xs py-2 px-3 data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-sm"
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
                          className={`p-4 rounded-lg border cursor-pointer transition-all hover:shadow-md ${
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
                          <p className={`text-xs mb-3 line-clamp-2 ${
                            blogPost.slug === slug ? 'text-blue-700' : 'text-gray-600'
                          }`}>
                            {blogPost.excerpt}
                          </p>
                          <div className={`flex items-center gap-3 text-xs ${
                            blogPost.slug === slug ? 'text-blue-600' : 'text-gray-500'
                          }`}>
                            <div className="flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              {new Date(blogPost.publishDate).toLocaleDateString('tr-TR', {
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
                    </TabsContent>
                  ))}
                </Tabs>
              </div>
            </ScrollArea>
          </div>

          {/* Main Content */}
          <div className="flex-1 bg-white">
            <div className="px-12 py-12">
              <div className="max-w-4xl">
                {/* Header */}
                <div className="mb-12">
                  <div className="flex items-start justify-between mb-6">
                    <h1 className="text-5xl font-bold text-gray-900 leading-tight">
                      {post.title}
                    </h1>
                    <div className="bg-blue-500 px-4 py-2 rounded-full">
                      <span className="text-sm text-white font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-6 text-sm text-gray-500 pb-8 border-b border-gray-200">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-blue-500" />
                      {new Date(post.publishDate).toLocaleDateString('tr-TR', {
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

                {/* Content */}
                <div className="space-y-12">
                  {contentSections.map(section => (
                    <div key={section.id}>
                      <h2 
                        data-section-id={section.id}
                        className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-500 pl-4"
                      >
                        {section.title}
                      </h2>
                      <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                        {section.content}
                      </p>
                      
                      {section.subsections && (
                        <div className="space-y-10 ml-6">
                          {section.subsections.map(subsection => (
                            <div key={subsection.id}>
                              <h3 
                                data-section-id={subsection.id}
                                className="text-2xl font-semibold text-gray-800 mb-4"
                              >
                                {subsection.title}
                              </h3>
                              <p className="text-gray-700 mb-6 leading-relaxed">
                                {subsection.content}
                              </p>
                              {subsection.code && (
                                <div className="mb-8">
                                  <SyntaxHighlighter
                                    language="javascript"
                                    style={vscDarkPlus}
                                    customStyle={{
                                      borderRadius: '12px',
                                      fontSize: '14px',
                                      lineHeight: '1.6'
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
          </div>

          {/* Right Sidebar - Table of Contents */}
          <div className="w-80 bg-gray-50 border-l border-gray-200 h-screen sticky top-20 overflow-hidden">
            <div className="p-6">
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-gray-200">
                <List className="w-5 h-5 text-blue-500" />
                <h3 className="font-semibold text-gray-900">İçindekiler</h3>
              </div>
              
              <ScrollArea className="h-full">
                <nav className="space-y-2">
                  {tableOfContents.map(item => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`w-full text-left px-4 py-3 rounded-lg text-sm transition-all ${
                        activeSection === item.id 
                          ? 'bg-blue-100 text-blue-900 font-medium border border-blue-200' 
                          : 'text-gray-700 hover:text-gray-900 hover:bg-white'
                      }`}
                      style={{
                        paddingLeft: `${(item.level - 1) * 12 + 16}px`,
                        fontSize: item.level === 2 ? '14px' : '13px',
                        fontWeight: item.level === 2 ? '500' : '400'
                      }}
                    >
                      <div className="flex items-center gap-2">
                        {item.level === 2 && <div className="w-2 h-2 rounded-full bg-blue-500" />}
                        {item.level === 3 && <div className="w-1.5 h-1.5 rounded-full bg-gray-400" />}
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
