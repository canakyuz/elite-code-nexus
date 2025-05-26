
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";
import blogData from "@/content/blog/data.json";

const Blog = () => {
  const navigate = useNavigate();

  const handlePostClick = (slug: string) => {
    navigate(`/blog/${slug}`);
  };

  return (
    <section id="blog" className="py-16 px-4 bg-gradient-to-br from-white to-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-3 space-y-6">
            <div className="space-y-4">
              <div className="text-4xl font-extralight text-blue-100 leading-none font-departure">{blogData.sectionNumber}</div>
              <h2 className="text-title text-slate-900 relative font-departure">
                {blogData.title}
                <div className="absolute -bottom-1 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
              </h2>
            </div>
          </div>

          <div className="lg:col-span-9">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogData.posts.map((post, index) => (
                <article 
                  key={post.id} 
                  className="group bg-white rounded-xl border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all duration-500 overflow-hidden hover:-translate-y-2 cursor-pointer"
                  onClick={() => handlePostClick(post.slug)}
                >
                  <div className="p-6 space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="inline-block px-2 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-md border border-blue-100 font-departure">
                          {post.category}
                        </span>
                        <BookOpen className="w-3 h-3 text-slate-400 group-hover:text-blue-500 transition-colors" />
                      </div>
                      
                      <h3 className="text-lg font-light text-slate-900 group-hover:text-blue-600 transition-colors leading-tight line-clamp-2 font-departure">
                        {post.title}
                      </h3>
                      
                      <p className="text-slate-600 text-xs leading-relaxed line-clamp-3 font-departure">
                        {post.excerpt}
                      </p>
                    </div>

                    <div className="flex items-center justify-between text-xs text-slate-500 pt-3 border-t border-slate-100">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1 font-departure">
                          <Calendar className="w-2.5 h-2.5" />
                          {new Date(post.publishDate).toLocaleDateString('en-US', {
                            day: 'numeric',
                            month: 'short'
                          })}
                        </div>
                        <div className="flex items-center gap-1 font-departure">
                          <Clock className="w-2.5 h-2.5" />
                          {post.readTime}
                        </div>
                      </div>
                      
                      <button className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 transition-colors font-medium group/link font-departure">
                        <span className="text-xs">Read</span>
                        <ArrowRight className="w-2.5 h-2.5 transition-transform group-hover/link:translate-x-1" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
