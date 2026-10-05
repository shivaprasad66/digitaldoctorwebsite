import React, { useState, useMemo } from 'react';
import { PRODUCTS } from '../data/products';
import { Product } from '../types';
import { 
  ShoppingBag, 
  Search, 
  SlidersHorizontal, 
  Check, 
  Star, 
  ShieldCheck, 
  Eye, 
  Plus, 
  Sparkles,
  AlertCircle
} from 'lucide-react';

interface ShopSectionProps {
  onQuickView: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

export const ShopSection: React.FC<ShopSectionProps> = ({ onQuickView, onAddToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [onlyInStock, setOnlyInStock] = useState<boolean>(false);
  const [sortBy, setSortBy] = useState<'recommended' | 'price-asc' | 'price-desc'>('recommended');

  const categories = [
    'All',
    'Gaming Consoles',
    'iPads & Tablets',
    'Phones',
    'Computers & Laptops',
    'Accessories & Gadgets'
  ];

  // Filtering and sorting logic
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      // Category filter
      if (selectedCategory !== 'All') {
        if (selectedCategory === 'Accessories & Gadgets') {
          if (item.category !== 'Accessories' && item.category !== 'Electronics & Gadgets') {
            return false;
          }
        } else if (item.category !== selectedCategory) {
          // Check for subcategory match
          if (selectedCategory === 'Phones' && !item.name.toLowerCase().includes('iphone') && !item.name.toLowerCase().includes('moto') && !item.name.toLowerCase().includes('galaxy') && !item.name.toLowerCase().includes('s10')) {
            return false;
          }
          if (selectedCategory === 'iPads & Tablets' && !item.name.toLowerCase().includes('ipad') && !item.name.toLowerCase().includes('tab')) {
            return false;
          }
          if (selectedCategory === 'Gaming Consoles' && !item.name.toLowerCase().includes('ps5') && !item.name.toLowerCase().includes('xbox') && !item.name.toLowerCase().includes('switch')) {
            return false;
          }
        }
      }

      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(q);
        const matchesDesc = item.description.toLowerCase().includes(q);
        if (!matchesName && !matchesDesc) return false;
      }

      // In stock only
      if (onlyInStock && !item.inStock) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      return 0; // recommended
    });
  }, [selectedCategory, searchQuery, onlyInStock, sortBy]);

  return (
    <section id="shop" className="py-16 lg:py-24 relative overflow-hidden bg-slate-900/50 border-t border-slate-800">
      
      {/* Background ambient light */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-cyan-600/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-bold border border-cyan-500/20 mb-3">
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>CERTIFIED PRE-OWNED INVENTORY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-heading tracking-tight">
              Pre-Owned Devices & Tech Shop
            </h2>
            <p className="mt-2 text-slate-300 text-sm max-w-2xl">
              100% bench-tested by our technicians, thoroughly cleaned, battery tested, and backed by Digital Doctor's 60-day shop warranty.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 flex items-center gap-2 text-xs text-slate-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>60-Day Warranty Included</span>
            </div>
          </div>
        </div>

        {/* Filters and Search Bar Row */}
        <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4 mb-8 space-y-4">
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
            
            {/* Search Box */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search PS5, iPad, iPhone, Spectre..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
              />
            </div>

            {/* Filter controls */}
            <div className="flex flex-wrap items-center gap-3">
              
              {/* In stock toggle */}
              <label className="flex items-center gap-2 text-xs font-semibold text-slate-300 cursor-pointer select-none bg-slate-900 px-3 py-2 rounded-xl border border-slate-800 hover:border-slate-700">
                <input
                  type="checkbox"
                  checked={onlyInStock}
                  onChange={(e) => setOnlyInStock(e.target.checked)}
                  className="rounded text-cyan-500 focus:ring-0 bg-slate-800 border-slate-700 w-4 h-4"
                />
                <span>In Stock Only</span>
              </label>

              {/* Sort By Select */}
              <div className="flex items-center gap-2 bg-slate-900 px-3 py-1.5 rounded-xl border border-slate-800">
                <SlidersHorizontal className="w-3.5 h-3.5 text-slate-400" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="bg-transparent text-xs font-semibold text-slate-200 focus:outline-none cursor-pointer"
                >
                  <option value="recommended" className="bg-slate-900 text-white">Sort: Recommended</option>
                  <option value="price-asc" className="bg-slate-900 text-white">Price: Low to High</option>
                  <option value="price-desc" className="bg-slate-900 text-white">Price: High to Low</option>
                </select>
              </div>

            </div>

          </div>

          {/* Category Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                    : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => {
              return (
                <div
                  key={product.id}
                  className="group rounded-2xl bg-slate-950/70 border border-slate-800 hover:border-slate-700 p-4 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/5 relative"
                >
                  {/* Stock status & condition badges */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-800 text-slate-300 uppercase tracking-wider">
                      {product.condition}
                    </span>
                    {product.inStock ? (
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                        In Stock
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-800 text-slate-400">
                        Special Order
                      </span>
                    )}
                  </div>

                  {/* Image container */}
                  <div 
                    onClick={() => onQuickView(product)}
                    className="relative h-48 w-full rounded-xl bg-slate-900/90 overflow-hidden flex items-center justify-center p-3 mb-4 cursor-pointer group-hover:bg-slate-900 transition-colors"
                  >
                    {product.image ? (
                      <img
                        src={product.image}
                        alt={product.name}
                        className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          (e.target as HTMLElement).style.display = 'none';
                        }}
                      />
                    ) : (
                      <ShoppingBag className="w-12 h-12 text-slate-700" />
                    )}

                    {/* Quick view overlay button */}
                    <div className="absolute inset-0 bg-slate-950/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 text-xs font-bold text-white border border-slate-700 shadow-lg">
                        <Eye className="w-3.5 h-3.5 text-cyan-400" />
                        Quick View
                      </span>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-1 text-amber-400 text-xs">
                      <Star className="w-3 h-3 fill-amber-400" />
                      <span className="font-bold">{product.rating}</span>
                      <span className="text-slate-500 text-[11px]">({product.reviewsCount})</span>
                      <span className="text-slate-600">•</span>
                      <span className="text-slate-400 text-[11px]">60-Day Warranty</span>
                    </div>

                    <h3 
                      onClick={() => onQuickView(product)}
                      className="text-sm font-bold text-white group-hover:text-cyan-400 transition-colors cursor-pointer line-clamp-2 min-h-[40px]"
                    >
                      {product.name}
                    </h3>

                    {/* Price and CTA */}
                    <div className="flex items-baseline justify-between pt-2 border-t border-slate-800/80">
                      <div>
                        <span className="text-lg font-black text-white font-heading">
                          ${product.price.toFixed(2)}
                        </span>
                        {product.comparePrice && (
                          <span className="text-xs text-slate-500 line-through ml-2">
                            ${product.comparePrice.toFixed(2)}
                          </span>
                        )}
                      </div>

                      <button
                        onClick={() => onAddToCart(product)}
                        disabled={!product.inStock}
                        className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                          product.inStock
                            ? 'bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-md shadow-cyan-500/20'
                            : 'bg-slate-800 text-slate-500 cursor-not-allowed'
                        }`}
                        title={product.inStock ? 'Add to cart' : 'Out of stock'}
                      >
                        <Plus className="w-3.5 h-3.5" />
                        <span>{product.inStock ? 'Add' : 'Hold'}</span>
                      </button>
                    </div>

                  </div>

                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-16 bg-slate-950/60 rounded-2xl border border-slate-800">
            <AlertCircle className="w-10 h-10 text-slate-500 mx-auto mb-3" />
            <h3 className="text-base font-bold text-white">No products found</h3>
            <p className="text-xs text-slate-400 mt-1 max-w-sm mx-auto">
              We couldn't find any products matching "{searchQuery}". Try clearing your filters or search keywords.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
                setOnlyInStock(false);
              }}
              className="mt-4 px-4 py-2 rounded-xl text-xs font-bold text-cyan-400 bg-slate-900 border border-slate-700 hover:bg-slate-800"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
