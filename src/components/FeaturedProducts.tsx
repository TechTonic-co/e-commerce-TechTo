import React from 'react';
import { Star, ShoppingCart, Heart, Zap } from 'lucide-react';
import { products } from '../data/products';
import { useApp } from '../contexts/AppContext';

export default function FeaturedProducts() {
  const { dispatch } = useApp();
  const featuredProducts = products
    .filter((p) => p.isBestSeller || p.isNew || p.isAIRecommended)
    .slice(0, 8);

  const handleAddToCart = (product: typeof products[0]) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  const handleAddToWishlist = (product: typeof products[0]) => {
    dispatch({ type: 'ADD_TO_WISHLIST', payload: product });
  };

  return (
    <section className="py-16 bg-white" id="featured">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#162a42] mb-4">Trending Tech Gadgets</h2>
          <p className="text-[#9b8879] text-lg max-w-2xl mx-auto">
            Stay updated with today’s hottest devices and innovations that are advancing the way we live and work
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <div key={product.id} className="group relative">
              <div className="bg-white/50 backdrop-blur-sm border border-white/30 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative">

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
                  className="absolute top-4 right-4 w-8 h-8 bg-white/80 border border-[#870134]/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all duration-300 z-20"
                >
                  <Heart className="w-4 h-4 text-[#870134]" fill="currentColor" />
                </button>

                {/* Product Image */}
                <div className="relative mb-6 overflow-hidden rounded-xl mt-2">
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
                    <h3 className="text-[#162a42] font-semibold text-lg leading-tight">{product.name}</h3>
                  </div>

                  <div className="flex items-center space-x-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${i < Math.floor(product.rating)
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

                  <button
                    onClick={() => handleAddToCart(product)}
                    className="w-full bg-gradient-to-r from-[#162a42] to-[#870134] text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/shop"
            target="_blank"
            rel="noopener noreferrer"
            onMouseDown={() => dispatch({ type: 'SET_PAGE', payload: 'shop' })}
            className="inline-block bg-gradient-to-r from-[#162a42] to-[#870134] text-white px-8 py-3 rounded-xl font-semibold hover:opacity-90 transition-all duration-300"
          >
            View All Products
          </a>


        </div>
      </div>
    </section>
  );
}
