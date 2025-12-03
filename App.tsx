import React, { useState, useEffect } from 'react';
import { Layout } from './components/Layout';
import { Hero } from './components/Hero';
import { CategoryNav } from './components/CategoryNav';
import { ProductCard } from './components/ProductCard';
import { ProductModal } from './components/ProductModal';
import { CartModal } from './components/CartModal';
import { AboutModal } from './components/AboutModal';
import { LandingPage } from './components/LandingPage';
import { CATEGORIES, GET_PRODUCTS_BY_CATEGORY } from './constants';
import { Product, CartItem } from './types';
import { ShoppingBag } from 'lucide-react';

type ViewState = 'LANDING' | 'MENU';

function App() {
  const [currentView, setCurrentView] = useState<ViewState>('LANDING');
  
  // Menu States
  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0].id);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([]);

  // Open Product Details
  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setIsProductModalOpen(true);
  };

  // Add to Cart Logic
  const handleAddToCart = (item: CartItem) => {
    setCart([...cart, item]);
  };

  // Remove from Cart Logic
  const handleRemoveFromCart = (id: string) => {
    setCart(cart.filter(item => item.internalId !== id));
  };

  // Calculate Totals for Floating Bar
  const cartItemCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const cartTotal = cart.reduce((acc, item) => {
    const price = (item.product.promoPrice || item.product.price) + item.addons.reduce((sum, add) => sum + add.price, 0);
    return acc + (price * item.quantity);
  }, 0);

  // If showing Landing Page
  if (currentView === 'LANDING') {
    return <LandingPage onGoToMenu={() => setCurrentView('MENU')} />;
  }

  // If showing Menu
  return (
    <Layout 
      onOpenAbout={() => setIsAboutOpen(true)}
      onBackToHome={() => setCurrentView('LANDING')}
    >
      <div className="pt-4">
        <Hero />
      </div>
      
      <CategoryNav 
        categories={CATEGORIES} 
        activeCategory={activeCategory} 
        onSelectCategory={setActiveCategory} 
      />

      <div className="px-4 space-y-8 min-h-[60vh]">
        {CATEGORIES.map(category => {
          const products = GET_PRODUCTS_BY_CATEGORY(category.id);
          if (products.length === 0) return null;

          return (
            <section key={category.id} id={`category-${category.id}`} className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-4">
                <h2 className="text-xl font-bold text-text-main">
                  {category.name}
                </h2>
                <div className="h-px flex-1 bg-border"></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {products.map(product => (
                  <ProductCard 
                    key={product.id} 
                    product={product} 
                    onClick={() => handleProductClick(product)} 
                  />
                ))}
              </div>
            </section>
          );
        })}
      </div>

      {/* Floating Cart Button (Bottom Bar) */}
      {cartItemCount > 0 && (
        <div className="fixed bottom-8 left-0 right-0 z-50 pointer-events-none">
          {/* Centered container for desktop logic */}
          <div className="max-w-5xl mx-auto w-full flex justify-center md:justify-end px-4">
            <button 
              onClick={() => setIsCartOpen(true)}
              className="w-full md:w-auto md:min-w-[320px] pointer-events-auto bg-primary hover:bg-red-600 text-white shadow-2xl shadow-primary/30 rounded-xl h-16 px-4 flex items-center justify-between transition-all transform hover:scale-[1.02] active:scale-95 ring-1 ring-white/10 backdrop-blur-md"
            >
              <div className="flex items-center gap-3">
                <div className="bg-white text-primary w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shadow-sm">
                  {cartItemCount}
                </div>
                <div className="flex flex-col items-start">
                  <span className="text-xs text-white/80 font-medium uppercase tracking-wide">Total</span>
                  <span className="font-bold text-lg leading-none">R$ {cartTotal.toFixed(2)}</span>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-black/10 px-3 py-2 rounded-lg">
                <span className="font-semibold text-sm">Ver carrinho</span>
                <ShoppingBag size={18} />
              </div>
            </button>
          </div>
        </div>
      )}

      {/* Modals */}
      <ProductModal 
        isOpen={isProductModalOpen} 
        onClose={() => setIsProductModalOpen(false)} 
        product={selectedProduct}
        onAddToCart={handleAddToCart}
      />

      <CartModal 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onRemoveItem={handleRemoveFromCart}
      />

      <AboutModal
        isOpen={isAboutOpen}
        onClose={() => setIsAboutOpen(false)}
      />
    </Layout>
  );
}

export default App;