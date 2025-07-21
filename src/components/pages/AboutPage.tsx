import React, { useEffect } from 'react';
import { Zap, Brain, TrendingUp, Users, Award, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AboutPage() {
  // Scroll to top when this page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Intelligence',
      description: 'Analyzes customer behavior and preferences to provide personalized shopping experiences to everyone.',
    },
    {
      icon: TrendingUp,
      title: 'Dynamic Pricing',
      description: 'The Best pricing algorithms that adapt to current market trends and customer demand in real-time.',
    },
    {
      icon: Users,
      title: 'Customer-Centric',
      description: 'Every feature is designed with the customer in mind, creating seamless and intuitive shopping journeys.',
    },
    {
      icon: Award,
      title: 'Quality Assurance',
      description: 'Strict quality checks and thorough product testing guarantee every product meets our highest standards.',
    },
  ];

  const stats = [
    { number: '50K+', label: 'Happy Customers' },
    { number: '99.9%', label: 'Uptime' },
    { number: '24/7', label: 'Support' },
    { number: '100+', label: 'AI Models' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#162a42]/5 to-[#870134]/5 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Hero Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-[#162a42] to-[#870134] rounded-xl flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-[#162a42]">TechTonic-Co</h1>
          </div>
          <p className="text-xl text-[#9b8879] max-w-3xl mx-auto leading-relaxed">
            We’re elevating the way individuals sell and shop online through AI-powered automation, personalized experiences, and advanced technology that brings simplicity and growth at your fingertips.
          </p>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          className="bg-[#870134] backdrop-blur-sm border border-white/40 rounded-3xl p-12 mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-white/90 text-lg leading-relaxed mb-6">
                Creating shopping experiences that make our AI-powered commerce platform accessible to everyone, and we believe technology should support human choices, not replace them.
              </p>
              <p className="text-white/90 text-lg leading-relaxed">
                We combine machine learning, natural language processing, and computer vision to build e-commerce experiences that are not just smart but deeply intuitive, personalized, and impactful.
              </p>
            </div>
            <div className="relative">
              <img
                src="/About.png"
                alt="AI Technology"
                className="w-full h-80 object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#162a42]/40 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-[#162a42] text-center mb-12">What Makes Us Different</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white/60 backdrop-blur-sm border border-white/40 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-16 h-16 bg-gradient-to-br from-[#162a42] to-[#870134] rounded-xl flex items-center justify-center mx-auto mb-6"
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-xl font-semibold text-[#162a42] mb-4">{feature.title}</h3>
                <p className="text-[#9b8879] leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="bg-gradient-to-r from-[#162a42] to-[#870134] rounded-3xl p-12 mb-16"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-white/80 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          className="bg-white/60 backdrop-blur-sm border border-white/40 rounded-3xl p-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-[#162a42] text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <motion.div
                whileHover={{ rotate: 10 }}
                className="w-16 h-16 bg-[#c67734] rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <Globe className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-xl font-semibold text-[#162a42] mb-4">Innovation</h3>
              <p className="text-[#9b8879] leading-relaxed">
                We constantly push the boundaries of what's possible with AI and e-commerce technology.
              </p>
            </div>
            <div className="text-center">
              <motion.div
                whileHover={{ rotate: 10 }}
                className="w-16 h-16 bg-[#870134] rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <Users className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-xl font-semibold text-[#162a42] mb-4">User-Centric</h3>
              <p className="text-[#9b8879] leading-relaxed">
                Every decision we make is guided by what's best for our customers and their experience.
              </p>
            </div>
            <div className="text-center">
              <motion.div
                whileHover={{ rotate: 10 }}
                className="w-16 h-16 bg-[#162a42] rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <Award className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-xl font-semibold text-[#162a42] mb-4">Excellence</h3>
              <p className="text-[#9b8879] leading-relaxed">
                We strive for excellence in everything we do, from product quality to customer service.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
