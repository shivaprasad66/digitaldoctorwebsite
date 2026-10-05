import React from 'react';
import { Product } from '../types';
import { 
  X, 
  Check, 
  ShieldCheck, 
  Star, 
  ShoppingBag, 
  Truck, 
  RotateCcw, 
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl rounded-2xl bg-slate-900 border border-slate-700 shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-950/80 text-slate-400 hover:text-white border border-slate-800 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left: Product Image */}
        <div className="md:w-1/2 bg-slate-950 p-6 flex flex-col items-center justify-center relative border-b md:border-b-0 md:border-r border-slate-800">
          <div className="relative w-full h-56 sm:h-72 flex items-center justify-center">
            {product.image ? (
              <img
                src={product.image}
                alt={product.name}
                className="max-h-full max-w-full object-contain drop-shadow-xl"
              />
            ) : (
              <ShoppingBag className="w-16 h-16 text-slate-700" />
            )}
          </div>
          <span className="text-[11px] font-bold text-slate-400 mt-3 flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            100% Inspected & Sanitized Hardware
          </span>
        </div>

        {/* Right: Product Details */}
        <div className="md:w-1/2 p-6 flex flex-col justify-between space-y-5">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 uppercase">
                {product.condition}
              </span>
              <div className="flex items-center text-amber-400 text-xs">
                <Star className="w-3.5 h-3.5 fill-amber-400" />
                <span className="font-bold ml-1">{product.rating}</span>
                <span className="text-slate-500 text-[11px] ml-1">({product.reviewsCount} reviews)</span>
              </div>
            </div>

            <h3 className="text-xl font-bold text-white font-heading leading-tight mb-2">
              {product.name}
            </h3>

            {/* Price tag */}
            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-2xl font-black text-white font-heading">
                ${product.price.toFixed(2)}
              </span>
              {product.comparePrice && (
                <span className="text-sm text-slate-500 line-through">
                  ${product.comparePrice.toFixed(2)}
                </span>
              )}
              <span className="text-xs text-emerald-400 font-semibold ml-2">
                Save ${( (product.comparePrice || product.price * 1.3) - product.price ).toFixed(0)} vs New
              </span>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed mb-4">
              {product.description}
            </p>

            {/* Quality Checklist */}
            <div className="space-y-2 text-xs text-slate-300 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800">
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>60-Day Limited Shop Warranty included</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>85%+ or Brand New Battery Health Verified</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Clean IMEI, Unlocked & Factory Reset</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Available for In-Store Pickup or Fast US Shipping</span>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="space-y-2.5 pt-2">
            <button
              onClick={() => {
                onAddToCart(product);
                onClose();
              }}
              disabled={!product.inStock}
              className={`w-full py-3.5 rounded-xl font-black text-xs transition-all flex items-center justify-center gap-2 cursor-pointer ${
                product.inStock
                  ? 'bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-lg shadow-cyan-500/25'
                  : 'bg-slate-800 text-slate-500 cursor-not-allowed'
              }`}
            >
              <ShoppingBag className="w-4 h-4" />
              <span>{product.inStock ? 'Add to Cart / Buy Now' : 'Currently Out of Stock'}</span>
            </button>

            <a
              href="tel:6099943235"
              className="w-full py-2.5 rounded-xl font-bold text-xs text-slate-300 bg-slate-950 hover:bg-slate-800 border border-slate-800 text-center transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-cyan-400" />
              <span>Call Shop to Hold Item: (609) 994-3235</span>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};
