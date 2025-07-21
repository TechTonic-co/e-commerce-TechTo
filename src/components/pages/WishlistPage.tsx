import React from 'react';
import { Heart, ShoppingCart, Trash2 } from 'lucide-react';
import { useApp } from '../../contexts/AppContext';

export default function WishlistPage() {
  const { state, dispatch } = useApp();

  const handleAddToCart = (product: any) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  const handleRemoveFromWishlist = (productId: string) => {
    dispatch({ type: 'REMOVE_FROM_WISHLIST', payload: productId });
  };

  const handleProductClick = (product: any) => {
    dispatch({ type: 'SET_SELECTED_PRODUCT', payload: product });
    dispatch({ type: 'SET_PAGE', payload: 'product' });
  };

  if (state.wishlist.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#162a42]/5 to-[#870134]/5 pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="bg-white/60 backdrop-blur-sm border border-white/40 rounded-2xl p-12">
              <Heart className="w-16 h-16 text-[#9b8879] mx-auto mb-6" />
              <h2 className="text-2xl font-bold text-[#162a42] mb-4">Your wishlist is empty</h2>
              <p className="text-[#9b8879] mb-8">Save items you love to your wishlist and shop them later!</p>
              <button
                onClick={() => dispatch({ type: 'SET_PAGE', payload: 'shop' })}
                className="bg-gradient-to-r from-[#162a42] to-[#870134] text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
              >
                Start Shopping
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#162a42]/5 to-[#870134]/5 pt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-[#162a42]">My Wishlist</h1>
          <p className="text-[#9b8879]">{state.wishlist.length} items</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {state.wishlist.map((product) => (
            <div key={product.id} className="group relative">
              <div className="bg-white/50 backdrop-blur-sm border border-white/30 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                {/* Sale Badge */}
                {product.originalPrice && (
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                      -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                    </span>
                  </div>
                )}

                {/* Remove Button */}
                <button 
                  onClick={() => handleRemoveFromWishlist(product.id)}
                  className="absolute top-4 right-4 w-8 h-8 bg-white/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-red-50 transition-all duration-300"
                >
                  <Trash2 className="w-4 h-4 text-red-500" />
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

        <div className="mt-12 text-center">
          <button
            onClick={() => dispatch({ type: 'SET_PAGE', payload: 'shop' })}
            className="bg-white/50 backdrop-blur-sm border border-white/30 text-[#162a42] px-8 py-3 rounded-xl font-semibold hover:bg-white/80 transition-all duration-300"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
}