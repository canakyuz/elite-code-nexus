
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";
import blogData from "@/content/blog/data.json";

const Blog = () => {
  return (
    <section id="blog" className="py-20 px-6 bg-gradient-to-br from-white to-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4 space-y-8">
            <div className="space-y-6">
              <div className="text-6xl font-extralight text-blue-100 leading-none">{blogData.sectionNumber}</div>
              <h2 className="text-4xl font-light text-slate-900 relative">
                {blogData.title}
                <div className="absolute -bottom-2 left-0 w-16 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
              </h2>
            </div>
          </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogData.posts.map((post, index) => (
            <article 
              key={post.id} 
              className="group bg-white rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all duration-500 overflow-hidden hover:-translate-y-2"
            >
              <div className="p-8 space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-full border border-blue-100">
                      {post.category}
                    </span>
                    <BookOpen className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                  </div>
                  
                  <h3 className="text-xl font-light text-slate-900 group-hover:text-blue-600 transition-colors leading-tight line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                <div className="flex items-center justify-between text-xs text-slate-500 pt-4 border-t border-slate-100">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(post.publishDate).toLocaleDateString('tr-TR', {
                        day: 'numeric',
                        month: 'short'
                      })}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <button className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 transition-colors font-medium group/link">
                    <span className="text-xs">Oku</span>
                    <ArrowRight className="w-3 h-3 transition-transform group-hover/link:translate-x-1" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
