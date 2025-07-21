import React, { useState, useMemo, useEffect } from 'react';
import { Star, ShoppingCart, Heart, Filter, Grid, List } from 'lucide-react';
import { useApp } from '../../contexts/AppContext';
import { products, categories } from '../../data/products';
import { Product } from '../../types';

export default function ShopPage() {
  const { state, dispatch } = useApp();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredProducts = useMemo(() => {
    let filtered = products;

    // Search filter
    if (state.searchQuery) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
        product.brand.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(state.searchQuery.toLowerCase())
      );
    }

    // Category filter
    if (state.selectedCategory) {
      filtered = filtered.filter(product => product.category === state.selectedCategory);
    }

    // Price range filter
    filtered = filtered.filter(product => 
      product.price >= state.priceRange[0] && product.price <= state.priceRange[1]
    );

    // Sort
    switch (state.sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      default:
        // Featured - prioritize AI recommended, best sellers, new
        filtered.sort((a, b) => {
          const aScore = (a.isAIRecommended ? 3 : 0) + (a.isBestSeller ? 2 : 0) + (a.isNew ? 1 : 0);
          const bScore = (b.isAIRecommended ? 3 : 0) + (b.isBestSeller ? 2 : 0) + (b.isNew ? 1 : 0);
          return bScore - aScore;
        });
    }

    return filtered;
  }, [state.searchQuery, state.selectedCategory, state.priceRange, state.sortBy]);

  const handleAddToCart = (product: Product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  const handleAddToWishlist = (product: Product) => {
    dispatch({ type: 'ADD_TO_WISHLIST', payload: product });
  };

  const handleProductClick = (product: Product) => {
    dispatch({ type: 'SET_SELECTED_PRODUCT', payload: product });
    dispatch({ type: 'SET_PAGE', payload: 'product' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#162a42]/5 to-[#870134]/5 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-[#162a42] mb-4">FutureTech Store</h1>
          <p className="text-[#9b8879] text-lg">
            Upgrade your world with the latest smart devices.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className={`lg:w-64 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-white/60 backdrop-blur-sm border border-white/40 rounded-2xl p-6 sticky top-24">
              <h3 className="text-lg font-semibold text-[#162a42] mb-4">Filters</h3>
              
              {/* Categories */}
              <div className="mb-6">
                <h4 className="font-medium text-[#162a42] mb-3">Categories</h4>
                <div className="space-y-2">
                  <button
                    onClick={() => dispatch({ type: 'SET_CATEGORY', payload: '' })}
                    className={`block w-full text-left px-3 py-2 rounded-lg transition-colors ${
                      state.selectedCategory === '' 
                        ? 'bg-[#870134] text-white' 
                        : 'text-[#9b8879] hover:bg-[#870134]/10'
                    }`}
                  >
                    All Categories
                  </button>
                  {categories.map(category => (
                    <button
                      key={category.id}
                      onClick={() => dispatch({ type: 'SET_CATEGORY', payload: category.name })}
                      className={`block w-full text-left px-3 py-2 rounded-lg transition-colors ${
                        state.selectedCategory === category.name 
                          ? 'bg-[#870134] text-white' 
                          : 'text-[#9b8879] hover:bg-[#870134]/10'
                      }`}
                    >
                      {category.name} ({category.productCount})
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <h4 className="font-medium text-[#162a42] mb-3">Price Range</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <input
                      type="range"
                      min="0"
                      max="1000"
                      value={state.priceRange[0]}
                      onChange={(e) => dispatch({ 
                        type: 'SET_PRICE_RANGE', 
                        payload: [parseInt(e.target.value), state.priceRange[1]] 
                      })}
                      className="flex-1"
                    />
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="range"
                      min="0"
                      max="1000"
                      value={state.priceRange[1]}
                      onChange={(e) => dispatch({ 
                        type: 'SET_PRICE_RANGE', 
                        payload: [state.priceRange[0], parseInt(e.target.value)] 
                      })}
                      className="flex-1"
                    />
                  </div>
                  <div className="flex justify-between text-sm text-[#9b8879]">
                    <span>${state.priceRange[0]}</span>
                    <span>${state.priceRange[1]}</span>
                  </div>
                </div>
              </div>

              {/* Clear Filters */}
              <button
                onClick={() => {
                  dispatch({ type: 'SET_CATEGORY', payload: '' });
                  dispatch({ type: 'SET_PRICE_RANGE', payload: [0, 1000] });
                  dispatch({ type: 'SET_SEARCH_QUERY', payload: '' });
                }}
                className="w-full bg-[#162a42] text-white py-2 rounded-lg hover:bg-[#162a42]/90 transition-colors"
              >
                Clear All Filters
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="bg-white/60 backdrop-blur-sm border border-white/40 rounded-2xl p-4 mb-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => setShowFilters(!showFilters)}
                    className="lg:hidden flex items-center space-x-2 px-4 py-2 bg-[#162a42] text-white rounded-lg"
                  >
                    <Filter className="w-4 h-4" />
                    <span>Filters</span>
                  </button>
                  <span className="text-[#9b8879]">
                    {filteredProducts.length} products found
                  </span>
                </div>

                <div className="flex items-center space-x-4">
                  <select
                    value={state.sortBy}
                    onChange={(e) => dispatch({ type: 'SET_SORT_BY', payload: e.target.value })}
                    className="px-4 py-2 bg-white/50 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#870134]/50"
                  >
                    <option value="featured">Featured</option>
                    <option value="newest">Newest</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Highest Rated</option>
                  </select>

                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 rounded-lg transition-colors ${
                        viewMode === 'grid' 
                          ? 'bg-[#870134] text-white' 
                          : 'text-[#9b8879] hover:bg-[#870134]/10'
                      }`}
                    >
                      <Grid className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 rounded-lg transition-colors ${
                        viewMode === 'list' 
                          ? 'bg-[#870134] text-white' 
                          : 'text-[#9b8879] hover:bg-[#870134]/10'
                      }`}
                    >
                      <List className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className={`grid gap-6 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' 
                : 'grid-cols-1'
            }`}>
              {filteredProducts.map((product) => (
                <div key={product.id} className="group relative">
                  <div className="bg-white/50 backdrop-blur-sm border border-white/30 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    {/* Badges */}
                    <div className="absolute top-4 left-4 flex flex-col space-y-2 z-10">
                      {product.originalPrice && (
                        <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                          -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                        </span>
                      )}
                      {product.isNew && (
                        <span className="bg-[#c67734] text-white text-xs px-2 py-1 rounded-full font-medium">
                          New
                        </span>
                      )}
                      {product.isBestSeller && (
                        <span className="bg-[#870134] text-white text-xs px-2 py-1 rounded-full font-medium">
                          Best Seller
                        </span>
                      )}
                      
                    </div>

                    {/* Wishlist Button */}
                    <button 
                      onClick={() => handleAddToWishlist(product)}
                      className="absolute top-4 right-4 w-8 h-8 bg-white/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/80 transition-all duration-300"
                    >
                      <Heart className={`w-4 h-4 ${
                        state.wishlist.find(item => item.id === product.id) 
                          ? 'text-red-500 fill-current' 
                          : 'text-[#870134]'
                      }`} />
                    </button>

                    {/* Product Image */}
                    <div 
                      className="relative mb-6 overflow-hidden rounded-xl cursor-pointer mt-2"
                      onClick={() => handleProductClick(product)}
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* Product Info */}
                    <div className="space-y-3">
                      <div>
                        <p className="text-[#9b8879] text-sm font-medium">{product.brand}</p>
                        <h3 
                          className="text-[#162a42] font-semibold text-lg leading-tight cursor-pointer hover:text-[#870134] transition-colors"
                          onClick={() => handleProductClick(product)}
                        >
                          {product.name}
                        </h3>
                      </div>

                      <div className="flex items-center space-x-2">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < Math.floor(product.rating) 
                                  ? 'text-[#c67734] fill-current' 
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-[#9b8879] text-sm">({product.reviewCount})</span>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <span className="text-[#162a42] font-bold text-xl">${product.price}</span>
                          {product.originalPrice && (
                            <span className="text-[#9b8879] line-through text-sm">${product.originalPrice}</span>
                          )}
                        </div>
                        {product.originalPrice && (
                          <span className="bg-[#870134]/10 text-[#870134] text-xs px-2 py-1 rounded-full font-medium">
                            Save ${product.originalPrice - product.price}
                          </span>
                        )}
                      </div>

                      <div className="flex items-center justify-between">
                        <span className={`text-sm ${
                          product.stock > 10 
                            ? 'text-green-600' 
                            : product.stock > 0 
                              ? 'text-orange-600' 
                              : 'text-red-600'
                        }`}>
                          {product.stock > 10 
                            ? 'In Stock' 
                            : product.stock > 0 
                              ? `Only ${product.stock} left` 
                              : 'Out of Stock'
                          }
                        </span>
                      </div>

                      <button
                        onClick={() => handleAddToCart(product)}
                        disabled={product.stock === 0}
                        className="w-full bg-gradient-to-r from-[#162a42] to-[#870134] text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <ShoppingCart className="w-4 h-4" />
                        <span>{product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <div className="bg-white/60 backdrop-blur-sm border border-white/40 rounded-2xl p-8">
                  <h3 className="text-xl font-semibold text-[#162a42] mb-2">No products found</h3>
                  <p className="text-[#9b8879] mb-4">Try adjusting your filters or search terms</p>
                  <button
                    onClick={() => {
                      dispatch({ type: 'SET_CATEGORY', payload: '' });
                      dispatch({ type: 'SET_PRICE_RANGE', payload: [0, 1000] });
                      dispatch({ type: 'SET_SEARCH_QUERY', payload: '' });
                    }}
                    className="bg-[#162a42] text-white px-6 py-2 rounded-lg hover:bg-[#162a42]/90 transition-colors"
                  >
                    Clear All Filters
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
