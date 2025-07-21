import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, User } from 'lucide-react';
import { useApp } from '../../contexts/AppContext';

export default function LoginPage() {
  const { dispatch } = useApp();
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isLogin && formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    // Simulate authentication
    const user = {
      id: Date.now().toString(),
      name: formData.name || formData.email.split('@')[0],
      email: formData.email,
    };

    dispatch({ type: 'SET_USER', payload: user });
    dispatch({ type: 'SET_PAGE', payload: 'home' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#162a42]/5 to-[#870134]/5 pt-20">
      <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white/60 backdrop-blur-sm border border-white/40 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-[#162a42] mb-2">
              {isLogin ? 'Welcome Back' : 'Create Account'}
            </h1>
            <p className="text-[#9b8879]">
              {isLogin 
                ? 'Sign in to your TechTonic account' 
                : 'Join the AI-powered shopping revolution'
              }
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {!isLogin && (
              <div className="relative">
                <User className="absolute left-3 top-3.5 w-5 h-5 text-[#9b8879]" />
                <input
                  type="text"
                  name="name"
                  placeholder="Full name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required={!isLogin}
                  className="w-full pl-12 pr-4 py-3 bg-white/50 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#870134]/50 focus:border-[#870134]"
                />
              </div>
            )}

            <div className="relative">
              <Mail className="absolute left-3 top-3.5 w-5 h-5 text-[#9b8879]" />
              <input
                type="email"
                name="email"
                placeholder="Email address"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full pl-12 pr-4 py-3 bg-white/50 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#870134]/50 focus:border-[#870134]"
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-3 top-3.5 w-5 h-5 text-[#9b8879]" />
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                required
                className="w-full pl-12 pr-12 py-3 bg-white/50 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#870134]/50 focus:border-[#870134]"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3.5 text-[#9b8879] hover:text-[#162a42] transition-colors"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>

            {!isLogin && (
              <div className="relative">
                <Lock className="absolute left-3 top-3.5 w-5 h-5 text-[#9b8879]" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  placeholder="Confirm password"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  required={!isLogin}
                  className="w-full pl-12 pr-4 py-3 bg-white/50 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#870134]/50 focus:border-[#870134]"
                />
              </div>
            )}

            {isLogin && (
              <div className="flex items-center justify-between">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input type="checkbox" className="text-[#870134]" />
                  <span className="text-sm text-[#9b8879]">Remember me</span>
                </label>
                <button
                  type="button"
                  className="text-sm text-[#870134] hover:text-[#162a42] transition-colors"
                >
                  Forgot password?
                </button>
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#162a42] to-[#870134] text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
            >
              {isLogin ? 'Sign In' : 'Create Account'}
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-[#9b8879]">
              {isLogin ? "Don't have an account?" : 'Already have an account?'}
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="ml-2 text-[#870134] hover:text-[#162a42] font-medium transition-colors"
              >
                {isLogin ? 'Sign up' : 'Sign in'}
              </button>
            </p>
          </div>

          <div className="mt-6 pt-6 border-t border-white/30">
            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center space-x-2 py-3 bg-white/50 border border-white/30 rounded-lg hover:bg-white/80 transition-colors">
                <span className="text-sm font-medium text-[#162a42]">Google</span>
              </button>
              <button className="flex items-center justify-center space-x-2 py-3 bg-white/50 border border-white/30 rounded-lg hover:bg-white/80 transition-colors">
                <span className="text-sm font-medium text-[#162a42]">Apple</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}