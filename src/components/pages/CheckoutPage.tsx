import React, { useState } from 'react';
import { CreditCard, Lock, ArrowLeft, Check } from 'lucide-react';
import { useApp } from '../../contexts/AppContext';
import { Order } from '../../types';

export default function CheckoutPage() {
  const { state, dispatch } = useApp();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'United States',
    paymentMethod: 'card',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    nameOnCard: '',
  });

  const subtotal = state.cart.reduce((total, item) => total + (item.product.price * item.quantity), 0);
  const shipping = subtotal > 100 ? 0 : 15;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create order
    const order: Order = {
      id: `ORD-${Date.now()}`,
      userId: state.user?.id || 'guest',
      items: state.cart,
      total,
      status: 'pending',
      shippingAddress: {
        id: '1',
        type: 'home',
        name: `${formData.firstName} ${formData.lastName}`,
        street: formData.address,
        city: formData.city,
        state: formData.state,
        zipCode: formData.zipCode,
        country: formData.country,
        isDefault: true,
      },
      billingAddress: {
        id: '1',
        type: 'home',
        name: `${formData.firstName} ${formData.lastName}`,
        street: formData.address,
        city: formData.city,
        state: formData.state,
        zipCode: formData.zipCode,
        country: formData.country,
        isDefault: true,
      },
      paymentMethod: formData.paymentMethod,
      createdAt: new Date().toISOString(),
      estimatedDelivery: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
    };

    dispatch({ type: 'ADD_ORDER', payload: order });
    dispatch({ type: 'CLEAR_CART' });
    setStep(4);
  };

  if (state.cart.length === 0 && step < 4) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#162a42]/5 to-[#870134]/5 pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-[#162a42] mb-4">Your cart is empty</h2>
            <button
              onClick={() => dispatch({ type: 'SET_PAGE', payload: 'shop' })}
              className="bg-gradient-to-r from-[#162a42] to-[#870134] text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
            >
              Start Shopping
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (step === 4) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#162a42]/5 to-[#870134]/5 pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="bg-white/60 backdrop-blur-sm border border-white/40 rounded-2xl p-12">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-[#162a42] mb-4">Order Confirmed!</h2>
              <p className="text-[#9b8879] mb-8">
                Thank you for your purchase. Your order has been confirmed and will be shipped soon.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => dispatch({ type: 'SET_PAGE', payload: 'account' })}
                  className="bg-gradient-to-r from-[#162a42] to-[#870134] text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
                >
                  View Orders
                </button>
                <button
                  onClick={() => dispatch({ type: 'SET_PAGE', payload: 'shop' })}
                  className="bg-white/50 border border-white/30 text-[#162a42] px-8 py-3 rounded-xl font-semibold hover:bg-white/80 transition-colors"
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#162a42]/5 to-[#870134]/5 pt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button
          onClick={() => dispatch({ type: 'SET_PAGE', payload: 'cart' })}
          className="flex items-center space-x-2 text-[#162a42] hover:text-[#870134] transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Cart</span>
        </button>

        <h1 className="text-3xl font-bold text-[#162a42] mb-8">Checkout</h1>

        {/* Progress Steps */}
        <div className="flex items-center justify-center mb-12">
          <div className="flex items-center space-x-4">
            {[1, 2, 3].map((stepNumber) => (
              <React.Fragment key={stepNumber}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                  step >= stepNumber 
                    ? 'bg-[#870134] text-white' 
                    : 'bg-white/50 text-[#9b8879]'
                }`}>
                  {stepNumber}
                </div>
                {stepNumber < 3 && (
                  <div className={`w-16 h-1 ${
                    step > stepNumber ? 'bg-[#870134]' : 'bg-white/30'
                  }`}></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Contact Information */}
              <div className="bg-white/60 backdrop-blur-sm border border-white/40 rounded-2xl p-6">
                <h2 className="text-xl font-semibold text-[#162a42] mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email address"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/50 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#870134]/50"
                  />
                </div>
              </div>

              {/* Shipping Address */}
              <div className="bg-white/60 backdrop-blur-sm border border-white/40 rounded-2xl p-6">
                <h2 className="text-xl font-semibold text-[#162a42] mb-6">Shipping Address</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="px-4 py-3 bg-white/50 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#870134]/50"
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="px-4 py-3 bg-white/50 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#870134]/50"
                  />
                  <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    className="md:col-span-2 px-4 py-3 bg-white/50 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#870134]/50"
                  />
                  <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                    className="px-4 py-3 bg-white/50 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#870134]/50"
                  />
                  <input
                    type="text"
                    name="state"
                    placeholder="State"
                    value={formData.state}
                    onChange={handleInputChange}
                    required
                    className="px-4 py-3 bg-white/50 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#870134]/50"
                  />
                  <input
                    type="text"
                    name="zipCode"
                    placeholder="ZIP code"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                    required
                    className="px-4 py-3 bg-white/50 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#870134]/50"
                  />
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    className="px-4 py-3 bg-white/50 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#870134]/50"
                  >
                    <option value="United States">United States</option>
                    <option value="Canada">Canada</option>
                    <option value="United Kingdom">United Kingdom</option>
                  </select>
                </div>
              </div>

              {/* Payment Information */}
              <div className="bg-white/60 backdrop-blur-sm border border-white/40 rounded-2xl p-6">
                <h2 className="text-xl font-semibold text-[#162a42] mb-6">Payment Information</h2>
                
                <div className="space-y-4">
                  <div className="flex space-x-4">
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="card"
                        checked={formData.paymentMethod === 'card'}
                        onChange={handleInputChange}
                        className="text-[#870134]"
                      />
                      <span>Credit Card</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="paypal"
                        checked={formData.paymentMethod === 'paypal'}
                        onChange={handleInputChange}
                        className="text-[#870134]"
                      />
                      <span>PayPal</span>
                    </label>
                  </div>

                  {formData.paymentMethod === 'card' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input
                        type="text"
                        name="cardNumber"
                        placeholder="Card number"
                        value={formData.cardNumber}
                        onChange={handleInputChange}
                        required
                        className="md:col-span-2 px-4 py-3 bg-white/50 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#870134]/50"
                      />
                      <input
                        type="text"
                        name="expiryDate"
                        placeholder="MM/YY"
                        value={formData.expiryDate}
                        onChange={handleInputChange}
                        required
                        className="px-4 py-3 bg-white/50 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#870134]/50"
                      />
                      <input
                        type="text"
                        name="cvv"
                        placeholder="CVV"
                        value={formData.cvv}
                        onChange={handleInputChange}
                        required
                        className="px-4 py-3 bg-white/50 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#870134]/50"
                      />
                      <input
                        type="text"
                        name="nameOnCard"
                        placeholder="Name on card"
                        value={formData.nameOnCard}
                        onChange={handleInputChange}
                        required
                        className="md:col-span-2 px-4 py-3 bg-white/50 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#870134]/50"
                      />
                    </div>
                  )}
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#162a42] to-[#870134] text-white py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Lock className="w-5 h-5" />
                <span>Complete Order</span>
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white/60 backdrop-blur-sm border border-white/40 rounded-2xl p-6 sticky top-24">
              <h2 className="text-xl font-semibold text-[#162a42] mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                {state.cart.map((item) => (
                  <div key={item.product.id} className="flex items-center space-x-3">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-12 h-12 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <p className="font-medium text-[#162a42] text-sm">{item.product.name}</p>
                      <p className="text-[#9b8879] text-xs">Qty: {item.quantity}</p>
                    </div>
                    <p className="font-medium text-[#162a42]">
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>

              <div className="space-y-3 border-t border-white/30 pt-4">
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
                <div className="flex justify-between text-lg font-semibold text-[#162a42] border-t border-white/30 pt-3">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}