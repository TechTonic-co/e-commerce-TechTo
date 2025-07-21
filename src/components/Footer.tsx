import React from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Youtube,
  Twitter,
  Linkedin,
  Instagram,
} from 'lucide-react';
import { useApp } from '../contexts/AppContext';

export default function Footer() {
  const { dispatch } = useApp();

  return (
    <footer className="bg-[#162a42] text-white pt-10 pb-6 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
        {/* Column 1: Logo, Description, Social Icons */}
        <div>
          <div className="flex items-center space-x-3 mb-4">
            <a href="https://techtonic-co.com/" title="Go to homepage">
              <img
                src="/footer logo.png"
                alt="TechTonic Logo"
                className="w-18 h-10 object-contain"
              />
            </a>
          </div>

          <p className="text-white/70 text-base mb-4 leading-relaxed">
            Techtonic-co features smart devices, revolutionizing e-commerce with AI-powered technology that makes your digital lifestyle efficient.
          </p>
          <div className="flex space-x-4 mt-4">
            {[
              { icon: Facebook, url: 'https://www.facebook.com/profile.php?id=61578202899388' },
              { icon: Youtube, url: 'https://www.youtube.com/@Techtonic-Co' },
              { icon: Twitter, url: 'https://x.com/CoTechtonic' },
              { icon: Linkedin, url: 'https://www.linkedin.com/company/techtonic-co' },
              { icon: Instagram, url: 'https://www.instagram.com/techtonic.co/?hl=en' },
            ].map(({ icon: Icon, url }, index) => (
              <a
                key={index}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3 text-base text-white/70">
            <li><button onClick={() => dispatch({ type: 'SET_PAGE', payload: 'home' })} className="hover:text-white">Home</button></li>
            <li><button onClick={() => dispatch({ type: 'SET_PAGE', payload: 'shop' })} className="hover:text-white">Shop</button></li>
            <li><button onClick={() => dispatch({ type: 'SET_PAGE', payload: 'categories' })} className="hover:text-white">Categories</button></li>
            <li><button onClick={() => dispatch({ type: 'SET_PAGE', payload: 'about' })} className="hover:text-white">About Us</button></li>
            <li><button onClick={() => dispatch({ type: 'SET_PAGE', payload: 'contact' })} className="hover:text-white">Contact</button></li>
            <li><button onClick={() => dispatch({ type: 'SET_PAGE', payload: 'blog' })} className="hover:text-white">Blog</button></li>
          </ul>
        </div>

        {/* Column 3: Customer Service */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
          <ul className="space-y-3 text-base text-white/70">
            <li><button onClick={() => dispatch({ type: 'SET_PAGE', payload: 'contact' })} className="hover:text-white">Help Center</button></li>
            <li><button onClick={() => dispatch({ type: 'SET_PAGE', payload: 'track' })} className="hover:text-white">Track Order</button></li>
            <li><button onClick={() => dispatch({ type: 'SET_PAGE', payload: 'returns' })} className="hover:text-white">Returns</button></li>
            <li><button onClick={() => dispatch({ type: 'SET_PAGE', payload: 'warranty' })} className="hover:text-white">Warranty</button></li>
            <li><button onClick={() => dispatch({ type: 'SET_PAGE', payload: 'contact' })} className="hover:text-white">FAQ</button></li>
          </ul>
        </div>

        {/* Column 4: Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
          <ul className="space-y-4 text-base text-white/70">
            <li className="flex items-start space-x-3">
              <MapPin size={20} className="text-[#ff9c3d] mt-1" />
              <span>25 Greenhill Gardens, Kandy 20000, Sri Lanka.</span>
            </li>
            <li className="flex items-center space-x-3">
              <Phone size={20} className="text-[#ff9c3d]" />
              <span>+94760213457</span>
            </li>
            <li className="flex items-center space-x-3">
              <Mail size={20} className="text-[#ff9c3d]" />
              <span>support@techtonic-co.com</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Footer Bottom */}
      <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 text-sm text-white/60">
        <a href="https://techtonic-co.com/" target="_blank" rel="noopener noreferrer">
          <span>© 2025 TechTonic-Co. All rights reserved.</span>
        </a>

        <div className="flex space-x-6">
          <button onClick={() => dispatch({ type: 'SET_PAGE', payload: 'privacy' })} className="hover:text-white">Privacy Policy</button>
          <button onClick={() => dispatch({ type: 'SET_PAGE', payload: 'terms' })} className="hover:text-white">Terms of Service</button>
        </div>
      </div>
    </footer>
  );
}
