import React from 'react';
import { Calendar, User, ArrowRight, Search, Tag, Clock, ArrowLeft } from 'lucide-react';
import { blogPosts } from '../../data/products';
import { useApp } from '../../contexts/AppContext';

export default function BlogPage() {
  const { state, dispatch } = useApp();
  const categories = ['All', 'AI', 'VR', 'Smart Devices'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [searchQuery, setSearchQuery] = React.useState('');

  // ✅ Scroll to top when BlogPage mounts or returns from post detail
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts[0];

  const handleReadMore = (post: any) => {
    dispatch({ type: 'SET_SELECTED_BLOG_POST', payload: post });
    window.scrollTo({ top: 0, behavior: 'smooth' }); // ✅ Scroll to top on read more
  };

  const handleBackToBlog = () => {
    dispatch({ type: 'SET_SELECTED_BLOG_POST', payload: null });
    window.scrollTo({ top: 0, behavior: 'smooth' }); // ✅ Scroll to top on back
  };

  if (state.selectedBlogPost) {
    const post = state.selectedBlogPost;
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#162a42]/5 to-[#870134]/5 pt-20">
        <div className="absolute inset-0 bg-white/30 backdrop-blur-sm"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <button onClick={handleBackToBlog} className="flex items-center text-[#162a42] hover:text-[#870134] mb-8">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Blog
          </button>

          <div className="bg-white/60 backdrop-blur-sm border border-white/40 rounded-2xl overflow-hidden mb-8">
            <img src={post.image} alt={post.title} className="w-full h-64 md:h-80 object-cover" />
            <div className="p-8">
              <div className="flex items-center space-x-4 mb-4">
                <span className="bg-[#870134] text-white text-sm px-3 py-1 rounded-full font-medium">{post.category}</span>
                <div className="flex items-center space-x-2 text-[#9b8879] text-sm">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center space-x-2 text-[#9b8879] text-sm">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-[#162a42] mb-4">{post.title}</h1>

              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#162a42] to-[#870134] rounded-full flex items-center justify-center text-white font-semibold">
                  {post.author.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-[#162a42]">{post.author}</p>
                  <p className="text-[#9b8879] text-sm">Author</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {post.tags.map((tag: string, index: number) => (
                  <span key={index} className="bg-[#162a42]/10 text-[#162a42] text-sm px-3 py-1 rounded-full">#{tag}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white/60 backdrop-blur-sm border border-white/40 rounded-2xl p-8 prose prose-lg max-w-none text-[#162a42]">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#162a42]/5 to-[#870134]/5">
      <section className="relative h-[50vh] md:h-[60vh] bg-[url('/bloghero.png')] bg-cover bg-center flex items-center justify-center text-center">
        <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px]"></div>
        <div className="relative z-10 px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-[#ffffff] mb-4">TechTonic Blog</h1>
          <p className="text-lg md:text-xl text-[#ffffff] max-w-2xl mx-auto">
            Stay updated with the latest insights on AI technology, smart living tips, product reviews, and industry trends.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Search & Filter */}
        <div className="bg-white/60 backdrop-blur-sm border border-white/40 rounded-2xl p-6 mb-12">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3.5 w-5 h-5 text-[#9b8879]" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white/50 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#870134]/50"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-[#870134] text-white'
                      : 'bg-white/50 text-[#162a42] hover:bg-[#870134]/10'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Article */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-[#162a42] mb-8">Featured Article</h2>
          <div className="bg-white/60 backdrop-blur-sm border border-white/40 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative">
                <img src={featuredPost.image} alt={featuredPost.title} className="w-full h-64 lg:h-full object-cover" />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#162a42] text-white text-sm px-3 py-1 rounded-full font-medium">Featured</span>
                </div>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="bg-[#870134]/10 text-[#870134] text-sm px-3 py-1 rounded-full font-medium">
                    {featuredPost.category}
                  </span>
                  <div className="flex items-center space-x-2 text-[#9b8879] text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>{featuredPost.date}</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-[#162a42] mb-4">{featuredPost.title}</h3>
                <p className="text-[#9b8879] mb-6 leading-relaxed">{featuredPost.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4 text-[#9b8879]" />
                    <span className="text-[#9b8879] text-sm">{featuredPost.author}</span>
                  </div>
                  <button
                    onClick={() => handleReadMore(featuredPost)}
                    className="flex items-center space-x-2 text-[#870134] font-medium hover:text-[#162a42] transition-colors"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article key={post.id} className="group cursor-pointer">
              <div className="bg-white/60 backdrop-blur-sm border border-white/40 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="relative overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#162a42] text-white text-xs px-3 py-1 rounded-full font-medium">{post.category}</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-3 text-sm text-[#9b8879]">
                    <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />{post.date}</span>
                    <span className="flex items-center gap-1"><User className="w-4 h-4" />{post.author}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-[#162a42] mb-3 group-hover:text-[#870134] transition-colors">{post.title}</h3>
                  <p className="text-[#9b8879] mb-4 leading-relaxed">{post.excerpt}</p>
                  <button onClick={() => handleReadMore(post)} className="flex items-center text-[#870134] font-medium group-hover:text-[#162a42] transition-colors">
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
