import React from 'react';
import { Search, ShoppingCart, User, Menu, Heart } from 'lucide-react';
import { useApp } from '../contexts/AppContext';

export default function Header() {
  const { state, dispatch } = useApp();

  const cartItemsCount = state.cart.reduce((total, item) => total + item.quantity, 0);
  const wishlistCount = state.wishlist.length;

  const handleNavigation = (page: any) => {
    dispatch({ type: 'SET_PAGE', payload: page });
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (state.searchQuery.trim()) {
      dispatch({ type: 'SET_PAGE', payload: 'shop' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-[9999] bg-white/95 backdrop-blur-lg border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo with Link */}
          <a 
            href="https://techtonic-co.com/" 
            className="flex items-center space-x-2"
            onClick={() => handleNavigation('home')}
          >
            <img 
              src="/Logo.png" 
              alt="TechTonic Logo" 
              className="w-18 h-10 object-contain" 
            />
          </a>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {['home', 'shop', 'about', 'blog', 'contact', 'techtonic'].map((page) => (
              <button
                key={page}
                onClick={() => handleNavigation(page)}
                className={`transition-colors font-medium ${
                  state.currentPage === page
                    ? 'text-[#870134]'
                    : 'text-[#162a42] hover:text-[#870134]'
                }`}
              >
                {page === 'techtonic' ? (
                  <span className="text-[#870134] font-bold animate-pulse-glow">
                    TECHTONIC AI
                  </span>
                ) : (
                  page.charAt(0).toUpperCase() + page.slice(1)
                )}
              </button>
            ))}
          </nav>

          {/* Search Bar */}
          <div className="hidden lg:flex items-center w-64 mx-4">
            <form onSubmit={handleSearch} className="relative w-full">
              <input
                type="text"
                placeholder="Search AI-powered devices..."
                value={state.searchQuery}
                onChange={(e) =>
                  dispatch({ type: 'SET_SEARCH_QUERY', payload: e.target.value })
                }
                className="w-full pl-10 pr-4 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#870134]/50 focus:border-[#870134]"
              />
              <Search className="absolute left-3 top-2.5 w-4 h-4 text-[#9b8879]" />
            </form>
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => handleNavigation('wishlist')}
              className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <Heart className="w-5 h-5 text-[#162a42]" />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#870134] text-white text-xs rounded-full flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </button>
            <button 
              onClick={() => handleNavigation('cart')}
              className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ShoppingCart className="w-5 h-5 text-[#162a42]" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#870134] text-white text-xs rounded-full flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </button>
            <button 
              onClick={() => handleNavigation(state.user ? 'account' : 'login')}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <User className="w-5 h-5 text-[#162a42]" />
            </button>
            <button 
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
              onClick={() => dispatch({ type: 'TOGGLE_MENU' })}
            >
              <Menu className="w-5 h-5 text-[#162a42]" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {state.isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="px-4 py-2 space-y-2">
            {['home', 'shop', 'about', 'blog', 'contact', 'techtonic'].map((page) => (
              <button
                key={page}
                onClick={() => handleNavigation(page)}
                className="block w-full text-left py-2 text-[#162a42] hover:text-[#870134] transition-colors"
              >
                {page === 'techtonic' ? (
                  <span className="text-[#870134] font-bold animate-pulse-glow">
                    TECHTONIC AI
                  </span>
                ) : (
                  page.charAt(0).toUpperCase() + page.slice(1)
                )}
              </button>
            ))}
            <div className="pt-2">
              <form onSubmit={handleSearch}>
                <input
                  type="text"
                  placeholder="Search..."
                  value={state.searchQuery}
                  onChange={(e) =>
                    dispatch({ type: 'SET_SEARCH_QUERY', payload: e.target.value })
                  }
                  className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#870134]/50"
                />
              </form>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
