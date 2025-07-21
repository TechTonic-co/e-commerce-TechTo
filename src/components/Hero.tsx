import React from 'react';
import { ArrowRight, Sparkles, Brain, TrendingUp } from 'lucide-react';
import { useApp } from '../contexts/AppContext';

export default function Hero() {
  const { dispatch } = useApp();  // Get dispatch from context

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: "url('/Hero_2.png')",
        }}
      >
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#162a42]/90 via-[#870134]/80 to-[#000000]/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <div className="space-y-10">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-2 text-sm font-medium text-white">
            <Sparkles className="w-4 h-4 text-[#c67734]" />
            <span>AI-Powered E-Commerce Platform</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight text-center">
            Savvy Shopping{' '}
            <span className="bg-gradient-to-r from-[#c67734] to-white bg-clip-text text-transparent">
              for Brighter Living
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Step into a new era of online shopping with trendy collections,
            predictive product picks, and pricing that adapts to every click.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <button
              onClick={() => dispatch({ type: 'SET_PAGE', payload: 'shop' })}
              className="bg-white text-[#162a42] px-6 py-3 rounded-lg font-semibold hover:bg-white/90 shadow transition"
            >
              View Products →
            </button>

            <button
              onClick={() =>
                dispatch({ type: 'SET_PAGE', payload: 'techtonic' })
              }
              className="bg-white/10 backdrop-blur-sm border border-white/30 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition"
            >
              TECHTONIC AI
            </button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/5 border border-white/20 rounded-xl p-6 backdrop-blur-md text-center hover:bg-white/10 transition">
              <Brain className="w-8 h-8 text-[#c67734] mx-auto mb-4" />
              <h3 className="text-white font-semibold text-lg">Shopping Assistant</h3>
              <p className="text-white/70 text-sm">
                Personalized product suggestions based on your preferences
              </p>
            </div>
            <div className="bg-white/5 border border-white/20 rounded-xl p-6 backdrop-blur-md text-center hover:bg-white/10 transition">
              <TrendingUp className="w-8 h-8 text-[#c67734] mx-auto mb-4" />
              <h3 className="text-white font-semibold text-lg">Flexible Pricing</h3>
              <p className="text-white/70 text-sm">
                Better pricing that adapts to market conditions and demand
              </p>
            </div>
            <div className="bg-white/5 border border-white/20 rounded-xl p-6 backdrop-blur-md text-center hover:bg-white/10 transition">
              <Sparkles className="w-8 h-8 text-[#c67734] mx-auto mb-4" />
              <h3 className="text-white font-semibold text-lg">Predictive Insights</h3>
              <p className="text-white/70 text-sm">
                Advanced analytics that decode customer purchases
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-[#c67734]/20 rounded-full blur-2xl" />
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-[#870134]/20 rounded-full blur-2xl" />
    </section>
  );
}
