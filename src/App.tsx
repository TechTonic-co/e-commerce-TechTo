import React from 'react';

// Context
import { AppProvider, useApp } from './contexts/AppContext';

// Layout Components
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedProducts from './components/FeaturedProducts';
import Categories from './components/Categories';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

// Pages
import ShopPage from './components/pages/ShopPage';
import ProductPage from './components/pages/ProductPage';
import CartPage from './components/pages/CartPage';
import CheckoutPage from './components/pages/CheckoutPage';
import LoginPage from './components/pages/LoginPage';
import AccountPage from './components/pages/AccountPage';
import WishlistPage from './components/pages/WishlistPage';
import AboutPage from './components/pages/AboutPage';
import ContactPage from './components/pages/ContactPage';
import BlogPage from './components/pages/BlogPage';
import PrivacyPolicyPage from './components/pages/PrivacyPolicyPage';
import TermsPage from './components/pages/TermsPage';
import ReturnsPage from './components/pages/ReturnsPage';
import TrackOrderPage from './components/pages/TrackOrderPage';
import WarrantyPage from './components/pages/WarrantyPage';

// ✅ Import TechtonicPage
import TechtonicPage from './components/pages/TechtonicPage';

function AppContent() {
  const { state } = useApp();

  const renderPage = () => {
    switch (state.currentPage) {
      case 'shop':
        return <ShopPage />;
      case 'product':
        return <ProductPage />;
      case 'cart':
        return <CartPage />;
      case 'checkout':
        return <CheckoutPage />;
      case 'login':
      case 'register':
        return <LoginPage />;
      case 'account':
        return <AccountPage />;
      case 'wishlist':
        return <WishlistPage />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      case 'blog':
        return <BlogPage />;
      case 'privacy':
        return <PrivacyPolicyPage />;
      case 'terms':
        return <TermsPage />;
      case 'returns':
        return <ReturnsPage />;
      case 'track':
        return <TrackOrderPage />;
      case 'warranty':
        return <WarrantyPage />;

      // ✅ New case for Techtonic page
      case 'techtonic':
        return <TechtonicPage />;

      case 'home':
      default:
        return (
          <>
            <Hero />
            <FeaturedProducts />
            <Categories />
            <HowItWorks />
            <Testimonials />
            <Blog />
            <Newsletter />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen pt-16">
      <Header />
      <main>{renderPage()}</main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}

export default App;
