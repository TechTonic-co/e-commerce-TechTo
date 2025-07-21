import { Link } from 'react-router-dom';

import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  Sparkles,
  Zap,
  Target,
  Brain,
  Shield,
  Clock,
  Users,
  Search,
  Filter,
  Star,
  ShoppingCart,
  DollarSign,
  Heart,
  TrendingUp,
  Award,
  Globe,
  MessageSquare,
  ShoppingBag,
  Quote,
  ChevronDown,
  ChevronUp,
  Gift
} from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { items, itemCategories, Items } from '../../data/products';

const TechtonicPage: React.FC = () => {
  console.log('TechtonicPage rendering, items count:', items.length);

  // State for FeatureIntro section
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [maxBudget, setMaxBudget] = useState(2000);
  const [filteredProducts, setFilteredProducts] = useState<Items[]>(items.slice(0, 6));

  // State for ProductFilter section
  const [filterSearchQuery, setFilterSearchQuery] = useState('');
  const [filterSelectedCategory, setFilterSelectedCategory] = useState('');
  const [filterMaxBudget, setFilterMaxBudget] = useState(5000);
  const [filteredFilterProducts, setFilteredFilterProducts] = useState<Items[]>(items);
  const [showFilters, setShowFilters] = useState(false);

  // State for FAQ section
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // Scroll animation refs
  const heroRef = useScrollAnimation();
  const featuresRef = useScrollAnimation();
  const demoRef = useScrollAnimation();
  const benefitsRef = useScrollAnimation();
  const platformRef = useScrollAnimation();
  const howToRef = useScrollAnimation();
  const filterRef = useScrollAnimation();
  const testimonialsRef = useScrollAnimation();
  const faqRef = useScrollAnimation();
  const ctaRef = useScrollAnimation();

  // FeatureIntro useEffect
  useEffect(() => {
    let filtered = items;

    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    if (selectedCategory) {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    filtered = filtered.filter(product => product.price <= maxBudget);
    setFilteredProducts(filtered.slice(0, 6));
  }, [searchQuery, selectedCategory, maxBudget]);

  // ProductFilter useEffect
  useEffect(() => {
    let filtered = items;

    if (filterSearchQuery) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(filterSearchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(filterSearchQuery.toLowerCase()) ||
        product.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    if (filterSelectedCategory) {
      filtered = filtered.filter(product => product.category === filterSelectedCategory);
    }

    filtered = filtered.filter(product => product.price <= filterMaxBudget);
    setFilteredFilterProducts(filtered);
  }, [filterSearchQuery, filterSelectedCategory, filterMaxBudget]);

  const handleAddToCart = (product: Items) => {
    console.log('Added to cart:', product);
  };

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Data arrays
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Recommendations",
      description: "Our NVIDIA-powered AI analyzes your needs and budget to find the perfect products for you.",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Zap,
      title: "Lightning Fast Results",
      description: "Get instant product recommendations in seconds, not hours of browsing.",
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: Target,
      title: "Precision Matching",
      description: "Advanced algorithms ensure you get exactly what you need within your budget.",
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: Shield,
      title: "Trusted & Secure",
      description: "All products are verified and come with warranty protection and secure checkout.",
      color: "from-orange-500 to-red-600"
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Shop anytime with our AI assistant always ready to help you find what you need.",
      color: "from-teal-500 to-cyan-600"
    },
    {
      icon: Users,
      title: "Expert-Curated",
      description: "Our product database is maintained by tech experts to ensure quality and accuracy.",
      color: "from-indigo-500 to-purple-600"
    }
  ];

  const featureBenefits = [
    {
      icon: Clock,
      title: "Save 90% of Your Time",
      description: "No more endless browsing. Get perfect recommendations in seconds.",
      metric: "90% faster"
    },
    {
      icon: DollarSign,
      title: "Stay Within Budget",
      description: "Our AI ensures you never overspend while getting the best value.",
      metric: "100% budget-friendly"
    },
    {
      icon: Shield,
      title: "Avoid Wrong Purchases",
      description: "AI-powered matching eliminates costly mistakes and buyer's remorse.",
      metric: "99.9% satisfaction"
    },
    {
      icon: Heart,
      title: "Personalized Experience",
      description: "Every recommendation is tailored specifically to your needs and preferences.",
      metric: "Truly personal"
    }
  ];

  const platformBenefits = [
    {
      icon: TrendingUp,
      title: "Cutting-Edge Technology",
      description: "Built on the latest NVIDIA AI infrastructure for unmatched performance and reliability."
    },
    {
      icon: Award,
      title: "Industry-Leading Accuracy",
      description: "Our recommendation engine has been trained on millions of product matches and customer preferences."
    },
    {
      icon: Users,
      title: "Trusted by Thousands",
      description: "Join over 50,000 satisfied customers who've found their perfect tech products with us."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Access to products from top manufacturers worldwide with international shipping options."
    }
  ];

  const steps = [
    {
      icon: MessageSquare,
      title: "Tell Us What You Need",
      description: "Simply describe what you're looking for and your budget. Our AI understands natural language.",
      example: "I need a gaming laptop under $1500 for streaming"
    },
    {
      icon: Sparkles,
      title: "AI Finds Perfect Matches",
      description: "Our NVIDIA-powered AI analyzes thousands of products to find the best options for you.",
      example: "AI analyzes specs, reviews, and compatibility"
    },
    {
      icon: ShoppingBag,
      title: "Choose & Purchase",
      description: "Review personalized recommendations and purchase with confidence knowing they're perfect for you.",
      example: "Compare options and complete secure checkout"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Content Creator",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5,
      text: "I was struggling to find the right gaming laptop for my streaming setup. The AI found the perfect match within my budget in seconds! The RTX 4070 laptop recommended has been absolutely perfect for my needs.",
      product: "ASUS ROG Strix G15 RTX 4070"
    },
    {
      name: "Michael Chen",
      role: "Software Developer",
      avatar: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5,
      text: "As a developer, I needed a workstation that could handle multiple VMs and complex builds. The AI understood my requirements perfectly and recommended a setup that's been running flawlessly for months.",
      product: "Dell Precision 7760 RTX A4000"
    },
    {
      name: "Emily Rodriguez",
      role: "Graphic Designer",
      avatar: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5,
      text: "The AI's recommendation saved me from making a costly mistake. I was about to buy the wrong graphics card, but the AI suggested a better option that fits my Adobe Creative Suite workflow perfectly.",
      product: "NVIDIA GeForce RTX 4070 Ti"
    },
    {
      name: "David Park",
      role: "Business Owner",
      avatar: "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5,
      text: "Setting up our office with the right tech was overwhelming until I found this platform. The AI helped us choose compatible equipment that fit our budget and needs perfectly. Highly recommend!",
      product: "Multiple Office Setup"
    },
    {
      name: "Jessica Taylor",
      role: "Gaming Enthusiast",
      avatar: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5,
      text: "I wanted to upgrade my gaming setup but didn't know where to start. The AI asked the right questions and created a perfect build recommendation that's been amazing for 4K gaming.",
      product: "Origin PC Gaming Desktop RTX 4090"
    },
    {
      name: "Robert Kim",
      role: "Video Editor",
      avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5,
      text: "The AI's understanding of video editing requirements is incredible. It recommended hardware that cut my render times in half and stays within my budget. This platform is a game-changer!",
      product: "HP Z8 G4 RTX A6000"
    }
  ];

  const faqs = [
    {
      question: "How accurate are the AI recommendations?",
      answer: "Our AI has a 99.9% accuracy rate based on customer satisfaction surveys. It's trained on millions of product specifications, user reviews, and purchase patterns. The system continuously learns from user feedback to improve recommendations. We also have a 30-day return policy if you're not completely satisfied with your AI-recommended purchase."
    },
    {
      question: "Can the AI work with any budget range?",
      answer: "Absolutely! Our AI can find great products across all budget ranges, from $100 to $10,000+. It's designed to maximize value within your specific budget constraints. The AI considers price-to-performance ratios, deals, and discounts to ensure you get the best possible product for your money. Simply set your budget, and the AI will find options that fit perfectly."
    },
    {
      question: "What if I don't like the AI's recommendations?",
      answer: "We offer multiple safeguards for your satisfaction. First, you can provide feedback to refine the recommendations in real-time. Second, our customer support team can manually review and adjust recommendations based on your specific needs. Finally, we have a 30-day return policy on all purchases. Our goal is 100% customer satisfaction, and we'll work with you until you find the perfect product."
    }
  ];

  return (
    <div className="min-h-screen">


      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24">
        {/* Background */}
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: "url('/products/NHero.jpg')",
          }}
        >
          {/* Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#162a42]/90 via-[#870134]/80 to-[#000000]/70" />
        </div>

        {/* Animated Background Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-green-500/20 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-2000" />

        {/* Hero Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div ref={heroRef} className="text-center opacity-0 transform translate-y-10 transition-all duration-700 ease-out">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-[#f5dfe7] rounded-full text-sm font-medium text-[#870134] mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              Powered by NVIDIA AI Technology
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Find Your Perfect
              <span className="block bg-gradient-to-t from-[#c67734] to-white bg-clip-text text-transparent">
                Tech Solution
              </span>
              with AI
            </h1>

            {/* Subheading */}
            <p className="text-xl md:text-2xl text-gray-100 mb-8 max-w-4xl mx-auto leading-relaxed">
              Simply tell us what you need and your budget. Our AI-powered platform will instantly find and recommend the perfect tech products for you.
            </p>

            {/* Feature Highlights */}
            <div className="flex flex-wrap justify-center gap-6 mb-10">
              <div className="flex items-center text-gray-700">
                <Zap className="w-5 h-5 text-green-500 mr-2" />
                <span className="text-white">Instant Results</span>
              </div>
              <div className="flex items-center text-gray-700">
                <Target className="w-5 h-5 text-blue-500 mr-2" />
                <span className="text-white">Personalized Recommendations</span>
              </div>
              <div className="flex items-center text-gray-700">
                <Sparkles className="w-5 h-5 text-purple-500 mr-2" />
                <span className="text-white">AI-Powered Matching</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group bg-white text-gray-900 px-8 py-4 rounded-xl text-lg font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                <span className="flex items-center">
                  <a href="/#nvidia">Try AI Search Now</a>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </div>

            {/* Stats */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-100">10,000+</div>
                <div className="text-gray-300">Products</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-100">50,000+</div>
                <div className="text-gray-300">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-100">99.9%</div>
                <div className="text-gray-300">Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-100">24/7</div>
                <div className="text-gray-300">AI Support</div>
              </div>
            </div>
            <br />
            <br />
          </div>
        </div>

      </section>


      {/* Feature Introduction Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={featuresRef} className="opacity-0 transform translate-y-10">
            {/* Header */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Revolutionary AI Shopping <span className="text-[#870134]">Experience</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Powered by cutting-edge NVIDIA technology, our platform transforms how you discover and buy tech products.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-transparent hover:-translate-y-1"
                >
                  <div className={`w-12 h-12 bg-[#870134] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Interactive Demo Section */}
            <div ref={demoRef} id="nvidia" className="opacity-0 transform translate-y-10 mt-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Try Our <span className="text-[#870134]">AI-Powered Search</span>
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Experience the power of AI product matching. Tell us what you need and watch the magic happen.
                </p>
              </div>

              {/* Search Interface */}
              <div className="bg-white rounded-2xl shadow-xl p-8 mb-12 border border-gray-100">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                  {/* Search Input */}
                  <div className="lg:col-span-1">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      What are you looking for?
                    </label>
                    <div className="relative">
                      <Search className="absolute left-3 top-1/4 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="text"
                        placeholder="e.g., gaming laptop for streaming"
                        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                    </div>
                  </div>

                  {/* Category Selection */}
                  <div className="lg:col-span-1">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Category
                    </label>
                    <div className="relative">
                      <Filter className="absolute left-3 top-1/4 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent appearance-none bg-white transition-all"
                      >
                        <option value="">All Categories</option>
                        {itemCategories.map(category => (
                          <option key={category} value={category}>
                            {category}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Budget Selection */}
                  <div className="lg:col-span-1">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Maximum Budget: ${maxBudget}
                    </label>
                    <div className="pt-2">
                      <input
                        type="range"
                        min="100"
                        max="5000"
                        step="100"
                        value={maxBudget}
                        onChange={(e) => setMaxBudget(parseInt(e.target.value))}
                        className="w-full h-3 bg-gradient-to-r from-white to-[#870134] rounded-lg appearance-none cursor-pointer slider"
                      />
                      <div className="flex justify-between text-sm text-gray-500 mt-2">
                        <span>$100</span>
                        <span>$5000</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Results Counter */}
                <div className="mb-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {filteredProducts.length} products found
                    </h3>
                    {(searchQuery || selectedCategory || maxBudget < 5000) && (
                      <button
                        onClick={() => {
                          setSearchQuery('');
                          setSelectedCategory('');
                          setMaxBudget(5000);
                        }}
                        className="text-sm text-[#870134] hover:text-[#162a42] font-medium"
                      >
                        Clear filters
                      </button>
                    )}
                  </div>
                </div>

                {/* Product Results */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map((product) => (
                    <div key={product.id} className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 group">
                      <div className="relative">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-bold text-[#870134]">
                          ${product.price}
                        </div>
                      </div>

                      <div className="p-4">
                        <div className="text-xs text-gray-500 mb-1">{product.category}</div>
                        <h4 className="text-sm font-semibold text-gray-900 mb-2 line-clamp-2">
                          {product.name}
                        </h4>

                        {/* Rating */}
                        <div className="flex items-center mb-3">
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-3 h-3 ${i < Math.floor(product.rating)
                                  ? 'text-yellow-400 fill-current'
                                  : 'text-gray-300'
                                  }`}
                              />
                            ))}
                          </div>
                          <span className="text-xs text-gray-600 ml-1">
                            {product.rating} ({product.reviews})
                          </span>
                        </div>

                        {/* Key Specs */}
                        <div className="mb-3">
                          <div className="flex flex-wrap gap-1">
                            {product.specs.slice(0, 2).map((spec, index) => (
                              <span
                                key={index}
                                className="bg-white text-gray-600 px-2 py-1 rounded-full text-xs border"
                              >
                                {spec}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Add to Cart Button */}
                        <button
                          onClick={() => handleAddToCart(product)}
                          className="w-full bg-gradient-to-r from-[#162a42] to-[#870134] text-white py-2 rounded-lg text-sm font-semibold transition-all duration-300 flex items-center justify-center"
                        >
                          <ShoppingCart className="w-3 h-3 mr-1" />
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* No Results */}
                {filteredProducts.length === 0 && (
                  <div className="text-center py-12">
                    <div className="text-gray-500 text-lg mb-2">
                      No products match your criteria
                    </div>
                    <p className="text-gray-400">
                      Try adjusting your search terms, category, or budget
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="text-center mt-16">
              <div className="bg-gradient-to-r from-[#f5dfe7] to-blue-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Ready to Experience the Future of Shopping?
                </h3>
                <p className="text-gray-600 mb-6">
                  Join thousands of satisfied customers who've discovered their perfect tech products with our AI.
                </p>
                <a href="/#features">
                  <button className="bg-gradient-to-r from-[#162a42] to-[#870134] text-white px-8 py-3 rounded-xl font-semibold hover:from-[#870134]  hover:to-[#162a42] transition-all duration-300 shadow-lg hover:shadow-xl">
                    Start Your AI Search
                  </button>
                </a>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Feature Benefits */}
          <div ref={benefitsRef} className="opacity-0 transform translate-y-10 mb-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our AI Shopping <span className="text-[#870134]">Assistant?</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experience the benefits of AI-powered product discovery that puts you first.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {featureBenefits.map((benefit, index) => (
                <div key={index} className="text-center group">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-gradient-to-r from-[#162a42] to-[#870134] rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <benefit.icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-white px-3 py-1 rounded-full text-sm font-bold text-[#870134] shadow-md">
                      {benefit.metric}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Platform Benefits */}
          <div ref={platformRef} className="opacity-0 transform translate-y-10">
            <div className="bg-gradient-to-r from-[#f5dfe7] to-blue-50 rounded-3xl p-8 lg:p-12">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  The Platform That Powers <span className="text-[#870134]">Your Success</span>
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Built for the modern tech enthusiast with enterprise-grade reliability and consumer-friendly simplicity.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {platformBenefits.map((benefit, index) => (
                  <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-[#162a42] to-[#870134] rounded-xl flex items-center justify-center flex-shrink-0">
                        <benefit.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {benefit.title}
                        </h3>
                        <p className="text-gray-600">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-2">10K+</div>
                  <div className="text-gray-600">Products Analyzed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-2">50K+</div>
                  <div className="text-gray-600">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-2">99.9%</div>
                  <div className="text-gray-600">AI Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-2">24/7</div>
                  <div className="text-gray-600">Support Availability</div>
                </div>
              </div>

              {/* New: Call to Action for Platform */}
              <div className="mt-16 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Discover the Difference with TechTonic
                </h3>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  Our platform is trusted by thousands for its speed, reliability, and user-first design. Whether you're a tech enthusiast or a casual shopper, our AI adapts to your needs and delivers results you can count on.
                </p>
                <button
                  onClick={() => {
                    const section = document.getElementById('features');
                    if (section) {
                      section.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="bg-gradient-to-r from-[#162a42] to-[#870134] text-white px-8 py-3 rounded-xl font-semibold hover:from-[#870134] hover:to-[#162a42] transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Explore Platform Features
                </button>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gradient-to-r from-[#f5dfe7] to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={testimonialsRef} className="opacity-0 transform translate-y-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What Our <span className="text-[#870134]">Customers Say</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Real stories from people who found their perfect tech with our AI.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, idx) => (
                <div key={idx} className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 flex flex-col">
                  <div className="flex items-center mb-4">
                    <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">{testimonial.role}</div>
                    </div>
                  </div>
                  <div className="flex items-center mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400" />
                    ))}
                  </div>
                  <div className="text-gray-700 mb-2">&ldquo;{testimonial.text}&rdquo;</div>
                  <div className="text-xs text-gray-500 mt-auto">Recommended: <span className="font-semibold">{testimonial.product}</span></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={faqRef} className="opacity-0 transform translate-y-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked <span className="text-[#870134]">Questions</span>
              </h2>
              <p className="text-xl text-gray-600">
                Everything you need to know about our AI-powered shopping assistant.
              </p>
            </div>

            {/* FAQ Items */}
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-gradient-to-r from-[#f5dfe7] to-blue-50 rounded-2xl overflow-hidden">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-100 transition-colors duration-200"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </h3>
                    {openIndex === index ? (
                      <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                    )}
                  </button>
                  {openIndex === index && (
                    <div className="px-8 pb-6">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-gradient-to-r from-[#f5dfe7] to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {/* 24 Hours Service */}
            <div className="flex flex-col items-center text-center bg-white rounded-2xl shadow-md p-8">
              <div className="mb-4">
                <svg className="w-12 h-12 text-[#870134] mx-auto" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 48 48">
                  <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="3" fill="none" />
                  <path d="M24 12v12l8 4" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">24/7 Service</h3>
              <p className="text-gray-600">Our support team is available around the clock to assist you anytime, any day.</p>
            </div>
            {/* Delivery Service within 7 Days */}
            <div className="flex flex-col items-center text-center bg-white rounded-2xl shadow-md p-8">
              <div className="mb-4">
                <svg className="w-12 h-12 text-[#870134] mx-auto" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 48 48">
                  <rect x="6" y="18" width="28" height="16" rx="3" stroke="currentColor" strokeWidth="3" fill="none" />
                  <path d="M34 26h6l2 4v4a2 2 0 01-2 2h-6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="14" cy="38" r="2" fill="currentColor" />
                  <circle cx="38" cy="38" r="2" fill="currentColor" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">7-Day Delivery</h3>
              <p className="text-gray-600">Fast and reliable delivery service ensures your products arrive within 7 days.</p>
            </div>
            {/* AI Chat Assistant */}
            <div className="flex flex-col items-center text-center bg-white rounded-2xl shadow-md p-8">
              <div className="mb-4">
                <svg className="w-12 h-12 text-[#870134] mx-auto" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 48 48">
                  <rect x="8" y="10" width="32" height="20" rx="5" stroke="currentColor" strokeWidth="3" fill="none" />
                  <path d="M16 38h16l-4-8h-8l-4 8z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" fill="none" />
                  <circle cx="18" cy="20" r="2" fill="currentColor" />
                  <circle cx="24" cy="20" r="2" fill="currentColor" />
                  <circle cx="30" cy="20" r="2" fill="currentColor" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">AI Chat Assistant</h3>
              <p className="text-gray-600">Get instant answers and personalized recommendations from our smart AI assistant.</p>
            </div>
            {/* Cash On Delivery */}
            <div className="flex flex-col items-center text-center bg-white rounded-2xl shadow-md p-8">
              <div className="mb-4">
                <svg className="w-12 h-12 text-[#870134] mx-auto" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 48 48">
                  <rect x="8" y="16" width="32" height="16" rx="4" stroke="currentColor" strokeWidth="3" fill="none" />
                  <circle cx="24" cy="24" r="5" stroke="currentColor" strokeWidth="3" fill="none" />
                  <path d="M16 24h-4M36 24h-4" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Cash On Delivery</h3>
              <p className="text-gray-600">Pay for your order at your doorstep with our secure cash on delivery option.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default TechtonicPage;