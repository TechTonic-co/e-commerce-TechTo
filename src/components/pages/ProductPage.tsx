import React, { useState } from 'react';
import { Star, ShoppingCart, Heart, ArrowLeft, Truck, Shield, RotateCcw, Zap, Plus, Minus } from 'lucide-react';
import { useApp } from '../../contexts/AppContext';
import { products } from '../../data/products';

export default function ProductPage() {
  const { state, dispatch } = useApp();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');

  const product = state.selectedProduct;

  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#162a42]/5 to-[#870134]/5 pt-20 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-[#162a42] mb-4">Product not found</h2>
          <button
            onClick={() => dispatch({ type: 'SET_PAGE', payload: 'shop' })}
            className="bg-[#162a42] text-white px-6 py-3 rounded-lg hover:bg-[#162a42]/90 transition-colors"
          >
            Back to Shop
          </button>
        </div>
      </div>
    );
  }

  const images = product.images || [product.image];
  const relatedProducts = products.filter(p => 
    p.category === product.category && p.id !== product.id
  ).slice(0, 4);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      dispatch({ type: 'ADD_TO_CART', payload: product });
    }
  };

  const handleAddToWishlist = () => {
    dispatch({ type: 'ADD_TO_WISHLIST', payload: product });
  };

  const isInWishlist = state.wishlist.find(item => item.id === product.id);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#162a42]/5 to-[#870134]/5 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <button
          onClick={() => dispatch({ type: 'SET_PAGE', payload: 'shop' })}
          className="flex items-center space-x-2 text-[#162a42] hover:text-[#870134] transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Shop</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="bg-white/60 backdrop-blur-sm border border-white/40 rounded-2xl p-4">
              <img
                src={images[selectedImage]}
                alt={product.name}
                className="w-full h-96 object-cover rounded-xl"
              />
            </div>
            {images.length > 1 && (
              <div className="flex space-x-4">
                {images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                      selectedImage === index 
                        ? 'border-[#870134]' 
                        : 'border-white/40 hover:border-[#870134]/50'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-[#9b8879] font-medium">{product.brand}</span>
                {product.isAIRecommended && (
                  <span className="bg-[#162a42] text-white text-xs px-2 py-1 rounded-full font-medium flex items-center space-x-1">
                    <Zap className="w-3 h-3" />
                    <span>AI Recommended</span>
                  </span>
                )}
              </div>
              <h1 className="text-3xl font-bold text-[#162a42] mb-4">{product.name}</h1>
              
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating) 
                          ? 'text-[#c67734] fill-current' 
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-[#9b8879]">
                  {product.rating} ({product.reviewCount} reviews)
                </span>
              </div>

              <div className="flex items-center space-x-4 mb-6">
                <span className="text-3xl font-bold text-[#162a42]">${product.price}</span>
                {product.originalPrice && (
                  <>
                    <span className="text-xl text-[#9b8879] line-through">${product.originalPrice}</span>
                    <span className="bg-[#870134] text-white px-3 py-1 rounded-full text-sm font-medium">
                      Save ${product.originalPrice - product.price}
                    </span>
                  </>
                )}
              </div>

              <p className="text-[#9b8879] leading-relaxed mb-6">{product.description}</p>
            </div>

            {/* Stock Status */}
            <div className="flex items-center space-x-2">
              <div className={`w-3 h-3 rounded-full ${
                product.stock > 10 
                  ? 'bg-green-500' 
                  : product.stock > 0 
                    ? 'bg-orange-500' 
                    : 'bg-red-500'
              }`}></div>
              <span className={`font-medium ${
                product.stock > 10 
                  ? 'text-green-600' 
                  : product.stock > 0 
                    ? 'text-orange-600' 
                    : 'text-red-600'
              }`}>
                {product.stock > 10 
                  ? 'In Stock' 
                  : product.stock > 0 
                    ? `Only ${product.stock} left in stock` 
                    : 'Out of Stock'
                }
              </span>
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center space-x-4">
              <span className="text-[#162a42] font-medium">Quantity:</span>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 bg-white/50 border border-white/30 rounded-lg flex items-center justify-center hover:bg-white/80 transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-12 text-center font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                  disabled={quantity >= product.stock}
                  className="w-10 h-10 bg-white/50 border border-white/30 rounded-lg flex items-center justify-center hover:bg-white/80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4">
              <button
                onClick={handleAddToCart}
                disabled={product.stock === 0}
                className="flex-1 bg-gradient-to-r from-[#162a42] to-[#870134] text-white py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ShoppingCart className="w-5 h-5" />
                <span>{product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}</span>
              </button>
              <button
                onClick={handleAddToWishlist}
                className={`px-6 py-4 rounded-xl border-2 transition-all duration-300 ${
                  isInWishlist
                    ? 'border-red-500 bg-red-50 text-red-500'
                    : 'border-[#870134] text-[#870134] hover:bg-[#870134] hover:text-white'
                }`}
              >
                <Heart className={`w-5 h-5 ${isInWishlist ? 'fill-current' : ''}`} />
              </button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center space-x-3 p-4 bg-white/50 backdrop-blur-sm border border-white/30 rounded-xl">
                <Truck className="w-6 h-6 text-[#c67734]" />
                <div>
                  <p className="font-medium text-[#162a42]">Free Shipping</p>
                  <p className="text-sm text-[#9b8879]">On orders over $100</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-white/50 backdrop-blur-sm border border-white/30 rounded-xl">
                <Shield className="w-6 h-6 text-[#c67734]" />
                <div>
                  <p className="font-medium text-[#162a42]">2 Year Warranty</p>
                  <p className="text-sm text-[#9b8879]">Full coverage</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-white/50 backdrop-blur-sm border border-white/30 rounded-xl">
                <RotateCcw className="w-6 h-6 text-[#c67734]" />
                <div>
                  <p className="font-medium text-[#162a42]">30-Day Returns</p>
                  <p className="text-sm text-[#9b8879]">Easy returns</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="bg-white/60 backdrop-blur-sm border border-white/40 rounded-2xl p-8 mb-16">
          <div className="flex space-x-8 border-b border-white/30 mb-8">
            {['description', 'features', 'reviews'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-4 font-medium capitalize transition-colors ${
                  activeTab === tab
                    ? 'text-[#870134] border-b-2 border-[#870134]'
                    : 'text-[#9b8879] hover:text-[#162a42]'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {activeTab === 'description' && (
            <div>
              <h3 className="text-xl font-semibold text-[#162a42] mb-4">Product Description</h3>
              <p className="text-[#9b8879] leading-relaxed">{product.description}</p>
            </div>
          )}

          {activeTab === 'features' && (
            <div>
              <h3 className="text-xl font-semibold text-[#162a42] mb-4">Key Features</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#870134] rounded-full"></div>
                    <span className="text-[#9b8879]">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {activeTab === 'reviews' && (
            <div>
              <h3 className="text-xl font-semibold text-[#162a42] mb-4">Customer Reviews</h3>
              <div className="space-y-6">
                {[1, 2, 3].map((review) => (
                  <div key={review} className="border-b border-white/30 pb-6 last:border-b-0">
                    <div className="flex items-center space-x-4 mb-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-[#162a42] to-[#870134] rounded-full flex items-center justify-center text-white font-semibold">
                        U{review}
                      </div>
                      <div>
                        <p className="font-medium text-[#162a42]">User {review}</p>
                        <div className="flex items-center space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-[#c67734] fill-current" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-[#9b8879]">
                      Great product! The AI features work exactly as described and the build quality is excellent.
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-[#162a42] mb-8">Related Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <div key={relatedProduct.id} className="group cursor-pointer">
                  <div 
                    className="bg-white/50 backdrop-blur-sm border border-white/30 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                    onClick={() => {
                      dispatch({ type: 'SET_SELECTED_PRODUCT', payload: relatedProduct });
                      setSelectedImage(0);
                      setQuantity(1);
                      setActiveTab('description');
                    }}
                  >
                    <img
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      className="w-full h-40 object-cover rounded-xl mb-4"
                    />
                    <h3 className="font-semibold text-[#162a42] mb-2">{relatedProduct.name}</h3>
                    <p className="text-[#870134] font-bold">${relatedProduct.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}