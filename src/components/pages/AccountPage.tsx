import React, { useState } from 'react';
import { User, Package, MapPin, Heart, Settings, LogOut, Edit, Truck } from 'lucide-react';
import { useApp } from '../../contexts/AppContext';

export default function AccountPage() {
  const { state, dispatch } = useApp();
  const [activeTab, setActiveTab] = useState('orders');

  if (!state.user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#162a42]/5 to-[#870134]/5 pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-[#162a42] mb-4">Please sign in to view your account</h2>
            <button
              onClick={() => dispatch({ type: 'SET_PAGE', payload: 'login' })}
              className="bg-gradient-to-r from-[#162a42] to-[#870134] text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    );
  }

  const handleLogout = () => {
    dispatch({ type: 'SET_USER', payload: null });
    dispatch({ type: 'SET_PAGE', payload: 'home' });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'text-orange-600 bg-orange-100';
      case 'processing': return 'text-blue-600 bg-blue-100';
      case 'shipped': return 'text-purple-600 bg-purple-100';
      case 'delivered': return 'text-green-600 bg-green-100';
      case 'cancelled': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#162a42]/5 to-[#870134]/5 pt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white/60 backdrop-blur-sm border border-white/40 rounded-2xl p-6 sticky top-24">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-[#162a42] to-[#870134] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">
                    {state.user.name.charAt(0).toUpperCase()}
                  </span>
                </div>
                <h2 className="text-xl font-semibold text-[#162a42]">{state.user.name}</h2>
                <p className="text-[#9b8879]">{state.user.email}</p>
              </div>

              <nav className="space-y-2">
                <button
                  onClick={() => setActiveTab('orders')}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                    activeTab === 'orders' 
                      ? 'bg-[#870134] text-white' 
                      : 'text-[#162a42] hover:bg-[#870134]/10'
                  }`}
                >
                  <Package className="w-5 h-5" />
                  <span>Orders</span>
                </button>
                <button
                  onClick={() => setActiveTab('profile')}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                    activeTab === 'profile' 
                      ? 'bg-[#870134] text-white' 
                      : 'text-[#162a42] hover:bg-[#870134]/10'
                  }`}
                >
                  <User className="w-5 h-5" />
                  <span>Profile</span>
                </button>
                <button
                  onClick={() => setActiveTab('addresses')}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                    activeTab === 'addresses' 
                      ? 'bg-[#870134] text-white' 
                      : 'text-[#162a42] hover:bg-[#870134]/10'
                  }`}
                >
                  <MapPin className="w-5 h-5" />
                  <span>Addresses</span>
                </button>
                <button
                  onClick={() => dispatch({ type: 'SET_PAGE', payload: 'wishlist' })}
                  className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-[#162a42] hover:bg-[#870134]/10 transition-colors"
                >
                  <Heart className="w-5 h-5" />
                  <span>Wishlist</span>
                </button>
                <button
                  onClick={() => setActiveTab('settings')}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                    activeTab === 'settings' 
                      ? 'bg-[#870134] text-white' 
                      : 'text-[#162a42] hover:bg-[#870134]/10'
                  }`}
                >
                  <Settings className="w-5 h-5" />
                  <span>Settings</span>
                </button>
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 transition-colors"
                >
                  <LogOut className="w-5 h-5" />
                  <span>Logout</span>
                </button>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {activeTab === 'orders' && (
              <div className="space-y-6">
                <h1 className="text-3xl font-bold text-[#162a42]">Order History</h1>
                
                {state.orders.length === 0 ? (
                  <div className="bg-white/60 backdrop-blur-sm border border-white/40 rounded-2xl p-12 text-center">
                    <Package className="w-16 h-16 text-[#9b8879] mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-[#162a42] mb-2">No orders yet</h3>
                    <p className="text-[#9b8879] mb-6">Start shopping to see your orders here</p>
                    <button
                      onClick={() => dispatch({ type: 'SET_PAGE', payload: 'shop' })}
                      className="bg-gradient-to-r from-[#162a42] to-[#870134] text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                    >
                      Start Shopping
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {state.orders.map((order) => (
                      <div key={order.id} className="bg-white/60 backdrop-blur-sm border border-white/40 rounded-2xl p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <h3 className="font-semibold text-[#162a42]">Order #{order.id}</h3>
                            <p className="text-[#9b8879] text-sm">
                              Placed on {new Date(order.createdAt).toLocaleDateString()}
                            </p>
                          </div>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(order.status)}`}>
                            {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                          </span>
                        </div>

                        <div className="space-y-3 mb-4">
                          {order.items.map((item) => (
                            <div key={item.product.id} className="flex items-center space-x-4">
                              <img
                                src={item.product.image}
                                alt={item.product.name}
                                className="w-12 h-12 object-cover rounded-lg"
                              />
                              <div className="flex-1">
                                <p className="font-medium text-[#162a42]">{item.product.name}</p>
                                <p className="text-[#9b8879] text-sm">Qty: {item.quantity}</p>
                              </div>
                              <p className="font-medium text-[#162a42]">
                                ${(item.product.price * item.quantity).toFixed(2)}
                              </p>
                            </div>
                          ))}
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t border-white/30">
                          <div className="flex items-center space-x-4">
                            <Truck className="w-5 h-5 text-[#9b8879]" />
                            <span className="text-[#9b8879] text-sm">
                              {order.estimatedDelivery 
                                ? `Estimated delivery: ${new Date(order.estimatedDelivery).toLocaleDateString()}`
                                : 'Processing'
                              }
                            </span>
                          </div>
                          <p className="text-lg font-bold text-[#162a42]">
                            Total: ${order.total.toFixed(2)}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {activeTab === 'profile' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h1 className="text-3xl font-bold text-[#162a42]">Profile Information</h1>
                  <button className="flex items-center space-x-2 px-4 py-2 bg-[#870134] text-white rounded-lg hover:bg-[#870134]/90 transition-colors">
                    <Edit className="w-4 h-4" />
                    <span>Edit</span>
                  </button>
                </div>

                <div className="bg-white/60 backdrop-blur-sm border border-white/40 rounded-2xl p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-[#162a42] mb-2">Full Name</label>
                      <input
                        type="text"
                        value={state.user.name}
                        readOnly
                        className="w-full px-4 py-3 bg-white/50 border border-white/30 rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#162a42] mb-2">Email</label>
                      <input
                        type="email"
                        value={state.user.email}
                        readOnly
                        className="w-full px-4 py-3 bg-white/50 border border-white/30 rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#162a42] mb-2">Phone</label>
                      <input
                        type="tel"
                        placeholder="Add phone number"
                        className="w-full px-4 py-3 bg-white/50 border border-white/30 rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#162a42] mb-2">Date of Birth</label>
                      <input
                        type="date"
                        className="w-full px-4 py-3 bg-white/50 border border-white/30 rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'addresses' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h1 className="text-3xl font-bold text-[#162a42]">Saved Addresses</h1>
                  <button className="bg-[#870134] text-white px-4 py-2 rounded-lg hover:bg-[#870134]/90 transition-colors">
                    Add New Address
                  </button>
                </div>

                <div className="bg-white/60 backdrop-blur-sm border border-white/40 rounded-2xl p-12 text-center">
                  <MapPin className="w-16 h-16 text-[#9b8879] mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-[#162a42] mb-2">No saved addresses</h3>
                  <p className="text-[#9b8879] mb-6">Add an address to make checkout faster</p>
                  <button className="bg-[#870134] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#870134]/90 transition-colors">
                    Add Address
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'settings' && (
              <div className="space-y-6">
                <h1 className="text-3xl font-bold text-[#162a42]">Account Settings</h1>

                <div className="space-y-6">
                  <div className="bg-white/60 backdrop-blur-sm border border-white/40 rounded-2xl p-6">
                    <h3 className="text-lg font-semibold text-[#162a42] mb-4">Notifications</h3>
                    <div className="space-y-4">
                      <label className="flex items-center justify-between cursor-pointer">
                        <span className="text-[#162a42]">Email notifications</span>
                        <input type="checkbox" defaultChecked className="text-[#870134]" />
                      </label>
                      <label className="flex items-center justify-between cursor-pointer">
                        <span className="text-[#162a42]">SMS notifications</span>
                        <input type="checkbox" className="text-[#870134]" />
                      </label>
                      <label className="flex items-center justify-between cursor-pointer">
                        <span className="text-[#162a42]">Marketing emails</span>
                        <input type="checkbox" defaultChecked className="text-[#870134]" />
                      </label>
                    </div>
                  </div>

                  <div className="bg-white/60 backdrop-blur-sm border border-white/40 rounded-2xl p-6">
                    <h3 className="text-lg font-semibold text-[#162a42] mb-4">Privacy</h3>
                    <div className="space-y-4">
                      <label className="flex items-center justify-between cursor-pointer">
                        <span className="text-[#162a42]">AI recommendations</span>
                        <input type="checkbox" defaultChecked className="text-[#870134]" />
                      </label>
                      <label className="flex items-center justify-between cursor-pointer">
                        <span className="text-[#162a42]">Data analytics</span>
                        <input type="checkbox" defaultChecked className="text-[#870134]" />
                      </label>
                    </div>
                  </div>

                  <div className="bg-white/60 backdrop-blur-sm border border-white/40 rounded-2xl p-6">
                    <h3 className="text-lg font-semibold text-[#162a42] mb-4">Security</h3>
                    <div className="space-y-4">
                      <button className="w-full text-left px-4 py-3 bg-white/50 border border-white/30 rounded-lg hover:bg-white/80 transition-colors">
                        Change Password
                      </button>
                      <button className="w-full text-left px-4 py-3 bg-white/50 border border-white/30 rounded-lg hover:bg-white/80 transition-colors">
                        Two-Factor Authentication
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}