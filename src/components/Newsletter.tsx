import React, { useState } from 'react';
import { Mail, Send } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  return (
    <section className="py-16 bg-gradient-to-br from-[#162a42] to-[#870134]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-12">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Mail className="w-8 h-8 text-white" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stay Ahead with AI Insights
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Be the first to know about new AI innovations, exclusive discounts, and members-only promotions straight to your inbox
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                required
              />
              <button
                type="submit"
                className="bg-white text-[#162a42] px-8 py-4 rounded-xl font-semibold hover:bg-white/90 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Send className="w-4 h-4" />
                <span>Subscribe</span>
              </button>
            </div>
          </form>

          <p className="text-white/60 text-sm mt-4">
            No spam. You can unsubscribe anytime. We value and respect your privacy.
          </p>
        </div>
      </div>
    </section>
  );
}