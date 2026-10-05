import React, { useState, useMemo } from 'react';
import { PRODUCTS } from '../data/products';
import { Product } from '../types';
import { 
  ShoppingBag, 
  Search, 
  SlidersHorizontal, 
  Star, 
  ShieldCheck, 
  Eye, 
  Plus, 
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

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      if (selectedCategory !== 'All') {
        if (selectedCategory === 'Accessories & Gadgets') {
          if (item.category !== 'Accessories' && item.category !== 'Electronics & Gadgets') {
            return false;
          }
        } else if (item.category !== selectedCategory) {
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

      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(q);
        const matchesDesc = item.description.toLowerCase().includes(q);
        if (!matchesName && !matchesDesc) return false;
      }

      if (onlyInStock && !item.inStock) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      return 0;
    });
  }, [selectedCategory, searchQuery, onlyInStock, sortBy]);

  return (
    <section id="shop" className="py-20 lg:py-28 relative overflow-hidden bg-[#fdfdfd] border-b border-[#e8eaee]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f6f7f8] border border-[#e8eaee] text-xs font-mono text-[#41454e] mb-3">
              <span className="w-2 h-2 rounded-full bg-[#1382e8]"></span>
              <span>Certified Pre-Owned Inventory</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0c0d10] font-heading tracking-tight leading-tight">
              Pre-owned devices & tech shop
            </h2>
            <p className="mt-2 text-[#41454e] text-sm sm:text-base leading-relaxed">
              100% bench-tested by our technicians, sanitized, battery tested, and backed by Digital Doctor's 60-day shop warranty.
            </p>
          </div>

          <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-[#e8eaee] text-xs text-[#41454e] shadow-sm shrink-0">
            <ShieldCheck className="w-4 h-4 text-[#0d9963]" />
            <span>60-Day Warranty Included</span>
          </div>
        </div>

        {/* Filter controls row */}
        <div className="bg-white border border-[#e8eaee] rounded-2xl p-4 mb-8 space-y-4 shadow-sm">
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
            
            {/* Search Box */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-[#6b7079] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search PS5, iPad, iPhone, Spectre..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#f6f7f8] border border-[#e8eaee] text-xs sm:text-sm text-[#0c0d10] placeholder-[#6b7079] focus:outline-none focus:border-[#1382e8] focus:bg-white"
              />
            </div>

            {/* Filter controls */}
            <div className="flex flex-wrap items-center gap-3">
              <label className="flex items-center gap-2 text-xs font-semibold text-[#41454e] cursor-pointer select-none bg-[#f6f7f8] px-3 py-2 rounded-xl border border-[#e8eaee] hover:bg-[#ebeef2]">
                <input
                  type="checkbox"
                  checked={onlyInStock}
                  onChange={(e) => setOnlyInStock(e.target.checked)}
                  className="rounded text-[#1382e8] focus:ring-0 border-gray-300 w-4 h-4"
                />
                <span>In Stock Only</span>
              </label>

              <div className="flex items-center gap-2 bg-[#f6f7f8] px-3 py-1.5 rounded-xl border border-[#e8eaee]">
                <SlidersHorizontal className="w-3.5 h-3.5 text-[#6b7079]" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="bg-transparent text-xs font-semibold text-[#41454e] focus:outline-none cursor-pointer"
                >
                  <option value="recommended">Sort: Recommended</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
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
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#0c0d10] text-white shadow-sm'
                    : 'bg-[#f6f7f8] text-[#41454e] hover:bg-[#ebeef2] border border-[#e8eaee]'
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
                  className="rote-card p-4 flex flex-col justify-between bg-white border border-[#e8eaee] hover:border-[#1382e8]/40 transition-all duration-200 group"
                >
                  {/* Stock status & condition badges */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#f6f7f8] text-[#6b7079] uppercase border border-[#e8eaee]">
                      {product.condition}
                    </span>
                    {product.inStock ? (
                      <span className="inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#e9f7f0] text-[#0d9963] border border-[#bfe8d3]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0d9963]"></span>
                        In Stock
                      </span>
                    ) : (
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#f6f7f8] text-[#6b7079] border border-[#e8eaee]">
                        Special Order
                      </span>
                    )}
                  </div>

                  {/* Image container */}
                  <div 
                    onClick={() => onQuickView(product)}
                    className="relative h-44 w-full rounded-xl bg-[#f6f7f8] overflow-hidden flex items-center justify-center p-3 mb-4 cursor-pointer group-hover:bg-[#ebeef2] transition-colors"
                  >
                    {product.image ? (
                      <img
                        src={product.image}
                        alt={product.name}
                        className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <ShoppingBag className="w-10 h-10 text-slate-400" />
                    )}

                    <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white text-xs font-semibold text-[#0c0d10] border border-[#e8eaee] shadow-sm">
                        <Eye className="w-3.5 h-3.5 text-[#1382e8]" />
                        Quick View
                      </span>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-1 text-xs">
                      <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                      <span className="font-bold text-[#0c0d10]">{product.rating}</span>
                      <span className="text-[#6b7079] text-[11px]">({product.reviewsCount})</span>
                      <span className="text-[#e8eaee]">•</span>
                      <span className="text-[#0d9963] text-[11px] font-medium">60-Day Warranty</span>
                    </div>

                    <h3 
                      onClick={() => onQuickView(product)}
                      className="text-sm font-bold text-[#0c0d10] group-hover:text-[#1382e8] transition-colors cursor-pointer line-clamp-2 min-h-[38px]"
                    >
                      {product.name}
                    </h3>

                    {/* Price and CTA */}
                    <div className="flex items-baseline justify-between pt-2 border-t border-[#f6f7f8]">
                      <div>
                        <span className="text-lg font-black text-[#0c0d10] font-heading tabular">
                          ${product.price.toFixed(2)}
                        </span>
                        {product.comparePrice && (
                          <span className="text-xs text-[#6b7079] line-through ml-2">
                            ${product.comparePrice.toFixed(2)}
                          </span>
                        )}
                      </div>

                      <button
                        onClick={() => onAddToCart(product)}
                        disabled={!product.inStock}
                        className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                          product.inStock
                            ? 'bg-[#0c0d10] hover:bg-[#23262f] text-white shadow-sm'
                            : 'bg-[#f6f7f8] text-[#6b7079] cursor-not-allowed border border-[#e8eaee]'
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
          <div className="text-center py-16 bg-white rounded-2xl border border-[#e8eaee]">
            <AlertCircle className="w-10 h-10 text-[#6b7079] mx-auto mb-3" />
            <h3 className="text-base font-bold text-[#0c0d10]">No products found</h3>
            <p className="text-xs text-[#6b7079] mt-1 max-w-sm mx-auto">
              We couldn't find any products matching "{searchQuery}".
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
                setOnlyInStock(false);
              }}
              className="mt-4 px-4 py-2 rounded-xl text-xs font-semibold text-[#1382e8] bg-[#f6f7f8] border border-[#e8eaee] hover:bg-[#ebeef2]"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
