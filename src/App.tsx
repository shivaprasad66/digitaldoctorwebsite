import React, { useState } from 'react';
import { TopBar } from './components/TopBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { RepairEstimatorSection } from './components/RepairEstimatorSection';
import { ServiceModesSection } from './components/ServiceModesSection';
import { DevicesGridSection } from './components/DevicesGridSection';
import { ShopSection } from './components/ShopSection';
import { ProductDetailModal } from './components/ProductDetailModal';
import { CartDrawer } from './components/CartDrawer';
import { MailInWizardModal } from './components/MailInWizardModal';
import { TrackingModal } from './components/TrackingModal';
import { InstantQuoteModal } from './components/InstantQuoteModal';
import { MediaPressSection } from './components/MediaPressSection';
import { WarrantyPoliciesSection } from './components/WarrantyPoliciesSection';
import { HelpCenterSection } from './components/HelpCenterSection';
import { AboutContactSection } from './components/AboutContactSection';
import { Footer } from './components/Footer';
import { Product, CartItem, RepairQuote } from './types';

export const App: React.FC = () => {
  // Modal states
  const [isTrackingOpen, setIsTrackingOpen] = useState(false);
  const [isMailInOpen, setIsMailInOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [activeQuote, setActiveQuote] = useState<RepairQuote | null>(null);

  // Selected product for modal inspection
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Cart state
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Category selection passed from Hero/Devices to Estimator
  const [activeEstimatorCategory, setActiveEstimatorCategory] = useState<string>('phones');

  // Cart handlers
  const handleAddToCart = (product: Product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (productId: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveFromCart = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  // Quote handlers
  const handleBookQuote = (quote: RepairQuote) => {
    setActiveQuote(quote);
    setIsQuoteModalOpen(true);
  };

  const handleOpenGeneralQuote = () => {
    setActiveQuote(null);
    setIsQuoteModalOpen(true);
  };

  const handleOpenMobileVan = () => {
    setActiveQuote({
      categoryId: 'phones',
      categoryName: 'Smartphones',
      brand: 'Apple',
      model: 'iPhone 15 Pro',
      issueId: 'screen-replacement',
      issueName: 'Screen Replacement',
      serviceMode: 'mobile-van',
      estimatedCost: 114,
      estimatedTime: 'Same-Day at your location (45-60 mins)',
      isDataImportant: true
    });
    setIsQuoteModalOpen(true);
  };

  const handleSelectCategory = (catId: string) => {
    setActiveEstimatorCategory(catId);
    const elem = document.getElementById('estimator');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-cyan-500 selection:text-white">
      {/* 1. Top Announcement Bar */}
      <TopBar />

      {/* 2. Sticky Navbar */}
      <Navbar
        onOpenTracking={() => setIsTrackingOpen(true)}
        onOpenMailIn={() => setIsMailInOpen(true)}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenQuote={handleOpenGeneralQuote}
        cartCount={totalCartCount}
      />

      {/* Main Page Sections */}
      <main className="flex-1">
        {/* 3. Hero Section */}
        <Hero
          onOpenQuote={handleOpenGeneralQuote}
          onOpenMobileVan={handleOpenMobileVan}
          onOpenTracking={() => setIsTrackingOpen(true)}
          onSelectCategory={handleSelectCategory}
        />

        {/* 4. Interactive Repair Price Estimator */}
        <RepairEstimatorSection
          initialCategoryId={activeEstimatorCategory}
          onBookQuote={handleBookQuote}
        />

        {/* 5. 3 Ways We Fix (Walk-in, Mobile Van, Mail-in) */}
        <ServiceModesSection
          onSelectMode={(mode) => {
            const elem = document.getElementById('estimator');
            if (elem) elem.scrollIntoView({ behavior: 'smooth' });
          }}
          onOpenMailInModal={() => setIsMailInOpen(true)}
        />

        {/* 6. Devices Repaired Grid */}
        <DevicesGridSection onSelectCategory={handleSelectCategory} />

        {/* 7. Shop Certified Inventory */}
        <ShopSection
          onQuickView={(product) => setSelectedProduct(product)}
          onAddToCart={handleAddToCart}
        />

        {/* 8. Media & Press Spotlight (The Sandpaper) + Reviews */}
        <MediaPressSection />

        {/* 9. 60-Day Limited Warranty & Policies */}
        <WarrantyPoliciesSection />

        {/* 10. Help Center & Searchable FAQ */}
        <HelpCenterSection />

        {/* 11. About Us & Storefront Location */}
        <AboutContactSection />
      </main>

      {/* 12. Footer */}
      <Footer
        onOpenTracking={() => setIsTrackingOpen(true)}
        onOpenMailIn={() => setIsMailInOpen(true)}
        onOpenQuote={handleOpenGeneralQuote}
      />

      {/* Modals & Overlays */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveFromCart}
        onClearCart={handleClearCart}
      />

      <MailInWizardModal
        isOpen={isMailInOpen}
        onClose={() => setIsMailInOpen(false)}
      />

      <TrackingModal
        isOpen={isTrackingOpen}
        onClose={() => setIsTrackingOpen(false)}
      />

      <InstantQuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        quote={activeQuote}
      />
    </div>
  );
};

export default App;
