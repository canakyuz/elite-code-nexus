import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, List, BookOpen, Copy, Check } from "lucide-react";
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
  const [copiedCode, setCopiedCode] = useState<string>("");

  const post = blogData.posts.find(p => p.slug === slug);

  // Group posts by category
  const groupedPosts = blogData.posts.reduce((acc, post) => {
    if (!acc[post.category]) {
      acc[post.category] = [];
    }
    acc[post.category].push(post);
    return acc;
  }, {} as Record<string, BlogPost[]>);

  // Enhanced content with proper code blocks and better structure
  const mockContent = `
    <h2 id="introduction">Giriş</h2>
    <p>Modern React geliştirmede en iyi uygulamaları bu makalede detaylarıyla ele alacağız. React'in güçlü özelliklerini nasıl etkili bir şekilde kullanabileceğinizi öğreneceksiniz.</p>
    
    <h2 id="component-architecture">Bileşen Mimarisi</h2>
    <p>React bileşenlerini doğru şekilde yapılandırmak, sürdürülebilir ve ölçeklenebilir uygulamalar geliştirmenin temelidir.</p>
    
    <h3 id="functional-components">Fonksiyonel Bileşenler</h3>
    <p>Modern React'te fonksiyonel bileşenler kullanmayı tercih edin:</p>
    <pre class="code-block"><code class="language-jsx">import React, { useState, useEffect } from 'react';

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

export default UserProfile;</code></pre>

    <h3 id="custom-hooks">Özel Hook'lar</h3>
    <p>Tekrar kullanılabilir mantığı özel hook'lara ayırın:</p>
    <pre class="code-block"><code class="language-jsx">import { useState, useEffect } from 'react';

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
};</code></pre>

    <h2 id="state-management">State Yönetimi</h2>
    <p>React'te state yönetimi için doğru yöntemleri seçmek kritik önem taşır.</p>
    
    <h3 id="usestate-best-practices">useState En İyi Uygulamaları</h3>
    <p>State güncellemelerinde dikkat edilmesi gereken noktalar:</p>
    <pre class="code-block"><code class="language-jsx">// ❌ Yanlış kullanım
const [user, setUser] = useState({});
setUser(user.name = 'Yeni İsim'); // Direkt mutasyon

// ✅ Doğru kullanım
const [user, setUser] = useState({});
setUser(prevUser => ({
  ...prevUser,
  name: 'Yeni İsim'
}));</code></pre>

    <h3 id="context-api">Context API</h3>
    <p>Global state yönetimi için Context API'yi etkili kullanın:</p>
    <pre class="code-block"><code class="language-jsx">import React, { createContext, useContext, useReducer } from 'react';

const AppContext = createContext();

const appReducer = (state, action) => {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.payload };
    case 'SET_THEME':
      return { ...state, theme: action.payload };
    default:
      return state;
  }
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, {
    user: null,
    theme: 'light'
  });

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp hook must be used within AppProvider');
  }
  return context;
};</code></pre>

    <h2 id="performance">Performans Optimizasyonu</h2>
    <p>React uygulamalarında performansı artırmak için kullanabileceğiniz teknikler.</p>
    
    <h3 id="memo-optimization">React.memo ve useMemo</h3>
    <p>Gereksiz render'ları önlemek için memoization kullanın:</p>
    <pre class="code-block"><code class="language-jsx">import React, { memo, useMemo } from 'react';

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
});</code></pre>

    <h2 id="testing">Test Yazma</h2>
    <p>React bileşenlerinizi test etmek için önerilen yaklaşımlar.</p>
    
    <h3 id="unit-testing">Birim Testleri</h3>
    <pre class="code-block"><code class="language-jsx">import { render, screen, fireEvent } from '@testing-library/react';
import UserProfile from './UserProfile';

describe('UserProfile', () => {
  test('kullanıcı bilgilerini gösterir', async () => {
    const mockUser = { id: 1, name: 'Ahmet', email: 'ahmet@test.com' };
    
    render(<UserProfile userId={1} />);
    
    expect(screen.getByText('Yükleniyor...')).toBeInTheDocument();
    
    const userName = await screen.findByText('Ahmet');
    expect(userName).toBeInTheDocument();
  });
});</code></pre>

    <h2 id="conclusion">Sonuç</h2>
    <p>Bu makalede React geliştirmede dikkat edilmesi gereken en önemli noktaları ele aldık. Bu uygulamaları projelerinizde kullanarak daha temiz, performanslı ve sürdürülebilir kod yazabilirsiniz.</p>
  `;

  const copyToClipboard = async (code: string, id: string) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedCode(id);
      setTimeout(() => setCopiedCode(""), 2000);
    } catch (err) {
      console.error('Kopyalama başarısız:', err);
    }
  };

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
      const scrollPosition = window.scrollY + 150;
      
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

  useEffect(() => {
    // Enhanced code block styling and copy functionality
    const codeBlocks = document.querySelectorAll('pre.code-block');
    
    codeBlocks.forEach((block, index) => {
      const code = block.querySelector('code');
      if (code && !block.querySelector('.copy-button')) {
        const copyButton = document.createElement('button');
        copyButton.className = 'copy-button';
        copyButton.innerHTML = `
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
          </svg>
        `;
        
        copyButton.addEventListener('click', () => {
          copyToClipboard(code.textContent || '', `code-${index}`);
          copyButton.innerHTML = `
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="20,6 9,17 4,12"></polyline>
            </svg>
          `;
          setTimeout(() => {
            copyButton.innerHTML = `
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
              </svg>
            `;
          }, 2000);
        });
        
        (block as HTMLElement).style.position = 'relative';
        block.appendChild(copyButton);
      }
    });
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
        <Navbar />
        <div className="pt-32 pb-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-title text-slate-900 mb-8 font-departure">Blog Yazısı Bulunamadı</h1>
            <Button onClick={() => navigate('/')} variant="outline" className="font-departure">
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      <Navbar />
      
      <div className="pt-20">
        <div className="flex max-w-7xl mx-auto shadow-2xl bg-white rounded-t-3xl overflow-hidden">
          {/* Left Sidebar - Posts List */}
          <div className="w-80 bg-gradient-to-b from-blue-50 to-indigo-50 border-r border-blue-100 h-screen sticky top-0 overflow-hidden">
            <div className="p-6 border-b border-blue-200 bg-white/50 backdrop-blur-sm">
              <Button onClick={() => navigate('/')} variant="ghost" size="sm" className="mb-4 -ml-2 font-departure text-blue-700 hover:text-blue-900 hover:bg-blue-100">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Ana Sayfaya Dön
              </Button>
              <h2 className="text-lg font-medium text-blue-900 font-departure">Tüm Yazılar</h2>
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
                              {new Date(blogPost.publishDate).toLocaleDateString('tr-TR', {
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
                        {new Date(post.publishDate).toLocaleDateString('tr-TR', {
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
                      className="prose prose-lg max-w-none prose-headings:font-departure prose-p:font-departure prose-headings:text-slate-900 prose-p:text-slate-700 prose-headings:border-l-4 prose-headings:border-blue-500 prose-headings:pl-4 prose-headings:bg-blue-50 prose-headings:py-3 prose-headings:rounded-r-lg prose-headings:font-medium"
                      dangerouslySetInnerHTML={{ __html: mockContent }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar - Table of Contents */}
          <div className="w-72 bg-gradient-to-b from-slate-50 to-gray-50 border-l border-slate-200 h-screen sticky top-0 overflow-hidden">
            <div className="p-6">
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-slate-200">
                <List className="w-5 h-5 text-blue-500" />
                <h3 className="font-medium text-slate-900 font-departure">İçindekiler</h3>
              </div>
              
              <ScrollArea className="h-full">
                <nav className="space-y-1">
                  {tableOfContents.map(item => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`w-full text-left px-4 py-3 rounded-lg text-sm transition-all duration-200 font-departure border border-transparent hover:border-blue-200 ${
                        activeSection === item.id 
                          ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-md font-medium border-blue-300' 
                          : 'text-slate-600 hover:text-slate-900 hover:bg-white hover:shadow-sm'
                      }`}
                      style={{
                        paddingLeft: `${(item.level - 1) * 12 + 16}px`,
                        fontSize: item.level === 2 ? '14px' : '13px',
                        fontWeight: item.level === 2 ? '500' : '400'
                      }}
                    >
                      <div className="flex items-center gap-2">
                        {item.level === 2 && <div className="w-1.5 h-1.5 rounded-full bg-current opacity-60" />}
                        {item.level === 3 && <div className="w-1 h-1 rounded-full bg-current opacity-40" />}
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

      <style>{`
        .code-block {
          background: linear-gradient(145deg, #1e293b, #334155);
          border: 1px solid #475569;
          border-radius: 12px;
          padding: 24px;
          margin: 24px 0;
          position: relative;
          overflow-x: auto;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }
        
        .code-block code {
          color: #e2e8f0;
          font-family: 'JetBrains Mono', monospace;
          font-size: 14px;
          line-height: 1.6;
          white-space: pre;
        }
        
        .copy-button {
          position: absolute;
          top: 16px;
          right: 16px;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 8px;
          padding: 8px;
          color: #e2e8f0;
          cursor: pointer;
          transition: all 0.2s ease;
          backdrop-filter: blur(4px);
        }
        
        .copy-button:hover {
          background: rgba(255, 255, 255, 0.2);
          border-color: rgba(255, 255, 255, 0.3);
          transform: translateY(-1px);
        }
        
        .prose p {
          margin-bottom: 16px;
          line-height: 1.7;
        }
        
        .prose h2 {
          margin-top: 48px;
          margin-bottom: 24px;
          font-size: 24px;
        }
        
        .prose h3 {
          margin-top: 32px;
          margin-bottom: 16px;
          font-size: 20px;
        }
      `}</style>
    </div>
  );
};

export default BlogDetail;
