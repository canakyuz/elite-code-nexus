
import { Calendar, Clock, ArrowRight } from "lucide-react";
import blogData from "@/content/blog/data.json";

const Blog = () => {
  return (
    <section id="blog" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-4xl font-extralight text-blue-200 mb-4">
            {blogData.sectionNumber}
          </div>
          <h2 className="text-4xl font-light text-slate-900 mb-6">
            {blogData.title}
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            {blogData.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogData.posts.map((post, index) => (
            <article 
              key={post.id} 
              className="group bg-white rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="p-6 space-y-4">
                <div className="space-y-3">
                  <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
                    {post.category}
                  </div>
                  
                  <h3 className="text-xl font-medium text-slate-900 group-hover:text-blue-600 transition-colors leading-tight line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                <div className="flex items-center justify-between text-xs text-slate-500 pt-4 border-t border-slate-100">
                  <div className="flex items-center gap-3">
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
                </div>

                <button className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors font-medium text-sm group/link pt-2">
                  Devamını Oku
                  <ArrowRight className="w-3 h-3 transition-transform group-hover/link:translate-x-1" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
