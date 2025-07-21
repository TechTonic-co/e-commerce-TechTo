import React from 'react';
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';
import { useApp } from '../../contexts/AppContext';

export default function CartPage() {
  const { state, dispatch } = useApp();

  const updateQuantity = (productId: string, newQuantity: number) => {
    if (newQuantity === 0) {
      dispatch({ type: 'REMOVE_FROM_CART', payload: productId });
    } else {
      dispatch({ type: 'UPDATE_CART_QUANTITY', payload: { id: productId, quantity: newQuantity } });
    }
  };

  const removeItem = (productId: string) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: productId });
  };

  const subtotal = state.cart.reduce((total, item) => total + (item.product.price * item.quantity), 0);
  const shipping = subtotal > 100 ? 0 : 15;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  const handleCheckout = () => {
    dispatch({ type: 'SET_PAGE', payload: 'checkout' });
  };

  if (state.cart.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#162a42]/5 to-[#870134]/5 pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="bg-white/60 backdrop-blur-sm border border-white/40 rounded-2xl p-12">
              <ShoppingBag className="w-16 h-16 text-[#9b8879] mx-auto mb-6" />
              <h2 className="text-2xl font-bold text-[#162a42] mb-4">Your cart is empty</h2>
              <p className="text-[#9b8879] mb-8">Discover our amazing AI-powered devices and start shopping!</p>
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
        <h1 className="text-3xl font-bold text-[#162a42] mb-8">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {state.cart.map((item) => (
              <div key={item.product.id} className="bg-white/60 backdrop-blur-sm border border-white/40 rounded-2xl p-6">
                <div className="flex items-center space-x-4">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-20 h-20 object-cover rounded-xl"
                  />
                  
                  <div className="flex-1">
                    <h3 className="font-semibold text-[#162a42] mb-1">{item.product.name}</h3>
                    <p className="text-[#9b8879] text-sm mb-2">{item.product.brand}</p>
                    <p className="text-[#870134] font-bold">${item.product.price}</p>
                  </div>

                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                      className="w-8 h-8 bg-white/50 border border-white/30 rounded-lg flex items-center justify-center hover:bg-white/80 transition-colors"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-8 text-center font-medium">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                      disabled={item.quantity >= item.product.stock}
                      className="w-8 h-8 bg-white/50 border border-white/30 rounded-lg flex items-center justify-center hover:bg-white/80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="text-right">
                    <p className="font-bold text-[#162a42]">
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </p>
                    <button
                      onClick={() => removeItem(item.product.id)}
                      className="text-red-500 hover:text-red-700 transition-colors mt-2"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white/60 backdrop-blur-sm border border-white/40 rounded-2xl p-6 sticky top-24">
              <h2 className="text-xl font-semibold text-[#162a42] mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-[#9b8879]">Subtotal</span>
                  <span className="font-medium text-[#162a42]">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#9b8879]">Shipping</span>
                  <span className="font-medium text-[#162a42]">
                    {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#9b8879]">Tax</span>
                  <span className="font-medium text-[#162a42]">${tax.toFixed(2)}</span>
                </div>
                <div className="border-t border-white/30 pt-4">
                  <div className="flex justify-between">
                    <span className="text-lg font-semibold text-[#162a42]">Total</span>
                    <span className="text-lg font-bold text-[#162a42]">${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              {shipping > 0 && (
                <div className="bg-[#c67734]/10 border border-[#c67734]/20 rounded-lg p-3 mb-6">
                  <p className="text-sm text-[#c67734]">
                    Add ${(100 - subtotal).toFixed(2)} more for free shipping!
                  </p>
                </div>
              )}

              <button
                onClick={handleCheckout}
                className="w-full bg-gradient-to-r from-[#162a42] to-[#870134] text-white py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => dispatch({ type: 'SET_PAGE', payload: 'shop' })}
                className="w-full mt-4 bg-white/50 border border-white/30 text-[#162a42] py-3 rounded-xl font-medium hover:bg-white/80 transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}