import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { blogPosts } from '../data/products';
import { useApp } from '../contexts/AppContext';



export default function Blog() {
  const { dispatch } = useApp();

  const handleReadMore = (post: any) => {
    dispatch({ type: 'SET_SELECTED_BLOG_POST', payload: post });
    dispatch({ type: 'SET_PAGE', payload: 'blog' });
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#162a42] mb-4">Lifestyle Trends</h2>
          <p className="text-[#9b8879] text-lg max-w-2xl mx-auto">
            Get the newest updates on AI technology, lifestyle hacks, and industry news.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.slice(0, 3).map((post) => (
            <article key={post.id} className="group cursor-pointer">
              <div className="bg-white/60 backdrop-blur-sm border border-white/40 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#162a42] text-white text-xs px-3 py-1 rounded-full font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#162a42] mb-3 group-hover:text-[#870134] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-[#9b8879] mb-4 leading-relaxed">{post.excerpt}</p>

                  <div className="flex items-center justify-between text-sm text-[#9b8879]">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    <button
                      onClick={() => handleReadMore(post)}
                      className="flex items-center text-[#870134] font-medium group-hover:text-[#162a42] transition-colors"
                    >
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/blog"
            target="_blank"
            rel="noopener noreferrer"
            onMouseDown={() => dispatch({ type: 'SET_PAGE', payload: 'blog' })}
            className="inline-block bg-gradient-to-r from-[#162a42] to-[#870134] text-white px-8 py-3 rounded-xl font-semibold hover:opacity-90 transition-all duration-300"
          >
            View All Products
          </a>
        </div>
      </div>
    </section>
  );
}
