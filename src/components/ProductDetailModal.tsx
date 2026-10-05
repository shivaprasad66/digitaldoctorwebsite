import React from 'react';
import { Product } from '../types';
import { 
  X, 
  Check, 
  ShieldCheck, 
  Star, 
  ShoppingBag, 
  Phone
} from 'lucide-react';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onAddToCart
}) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/40 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl rounded-2xl bg-white border border-[#e8eaee] shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/90 text-[#5a5e69] hover:text-[#0c0d10] border border-[#e8eaee] hover:bg-[#f6f7f8] transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Left: Product Image */}
        <div className="md:w-1/2 bg-[#f6f7f8] p-6 flex flex-col items-center justify-center relative border-b md:border-b-0 md:border-r border-[#e8eaee]">
          <div className="relative w-full h-52 sm:h-64 flex items-center justify-center">
            {product.image ? (
              <img
                src={product.image}
                alt={product.name}
                className="max-h-full max-w-full object-contain drop-shadow-md"
              />
            ) : (
              <ShoppingBag className="w-16 h-16 text-slate-300" />
            )}
          </div>
          <span className="text-[11px] font-semibold text-[#5a5e69] mt-3 flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            100% Inspected & Certified Hardware
          </span>
        </div>

        {/* Right: Product Details */}
        <div className="md:w-1/2 p-6 flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#1382e8]/10 text-[#1382e8] border border-[#1382e8]/20 uppercase">
                {product.condition}
              </span>
              <div className="flex items-center text-amber-500 text-xs">
                <Star className="w-3.5 h-3.5 fill-amber-500" />
                <span className="font-bold ml-1 text-[#0c0d10]">{product.rating}</span>
                <span className="text-[#8a8f98] text-[11px] ml-1">({product.reviewsCount})</span>
              </div>
            </div>

            <h3 className="text-xl font-bold text-[#0c0d10] font-heading leading-tight mb-2">
              {product.name}
            </h3>

            {/* Price tag */}
            <div className="flex items-baseline gap-2 mb-3">
              <span className="text-2xl font-black text-[#0c0d10] font-heading">
                ${product.price.toFixed(2)}
              </span>
              {product.comparePrice && (
                <span className="text-sm text-[#8a8f98] line-through">
                  ${product.comparePrice.toFixed(2)}
                </span>
              )}
              <span className="text-xs text-emerald-600 font-semibold ml-1">
                Save ${( (product.comparePrice || product.price * 1.3) - product.price ).toFixed(0)} vs New
              </span>
            </div>

            <p className="text-xs text-[#5a5e69] leading-relaxed mb-4">
              {product.description}
            </p>

            {/* Quality Checklist */}
            <div className="space-y-2 text-xs text-[#41454e] bg-[#f6f7f8] p-3.5 rounded-xl border border-[#e8eaee]">
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>60-Day Limited Shop Warranty included</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>85%+ or New Battery Health Verified</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Clean IMEI, Unlocked & Factory Reset</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Pickup in Manahawkin or Fast US Shipping</span>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="space-y-2 pt-2">
            <button
              onClick={() => {
                onAddToCart(product);
                onClose();
              }}
              disabled={!product.inStock}
              className={`w-full py-3 rounded-xl font-bold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer ${
                product.inStock
                  ? 'bg-[#0c0d10] hover:bg-black text-white shadow-sm'
                  : 'bg-slate-100 text-slate-400 cursor-not-allowed'
              }`}
            >
              <ShoppingBag className="w-4 h-4" />
              <span>{product.inStock ? 'Add to Cart' : 'Currently Out of Stock'}</span>
            </button>

            <a
              href="tel:6099943235"
              className="w-full py-2.5 rounded-xl font-semibold text-xs text-[#0c0d10] bg-white hover:bg-[#f6f7f8] border border-[#e8eaee] text-center transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-[#1382e8]" />
              <span>Hold Item: (609) 994-3235</span>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};
