import React, { useState } from 'react';
import { CartItem } from '../types';
import { 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  ShoppingBag, 
  ArrowRight, 
  ShieldCheck, 
  Truck, 
  Store,
  CheckCircle2
} from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, delta: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart
}) => {
  const [fulfillmentType, setFulfillmentType] = useState<'pickup' | 'shipping'>('pickup');
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  if (!isOpen) return null;

  const subtotal = items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const shippingFee = fulfillmentType === 'pickup' || subtotal >= 99 ? 0 : 9.99;
  const estimatedTax = subtotal * 0.06625; // NJ 6.625% sales tax
  const total = subtotal + shippingFee + estimatedTax;

  const handleCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      setOrderComplete(true);
      onClearCart();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/40 backdrop-blur-sm animate-fadeIn">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white border-l border-[#e8eaee] shadow-2xl flex flex-col justify-between p-6">
          
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-[#e8eaee]">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#1382e8]" />
              <h2 className="text-lg font-bold text-[#0c0d10] font-heading">Your Cart ({items.length})</h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-[#f6f7f8] text-[#5a5e69] hover:text-[#0c0d10] border border-[#e8eaee] cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Cart Contents */}
          <div className="flex-1 overflow-y-auto py-4 space-y-3">
            {orderComplete ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-[#0c0d10] font-heading">Order Placed Successfully!</h3>
                <p className="text-xs text-[#5a5e69] max-w-xs mx-auto">
                  Order #DDR-{Math.floor(100000 + Math.random() * 900000)} is confirmed. 
                  Our team is preparing your certified device. You will receive an SMS alert shortly!
                </p>
                <div className="p-4 rounded-xl bg-[#f6f7f8] border border-[#e8eaee] text-left text-xs text-[#5a5e69] space-y-1.5">
                  <div className="font-bold text-[#0c0d10]">Pickup Location:</div>
                  <div>1636 Route 72 W, Manahawkin NJ 08050</div>
                  <div className="text-[#1382e8] font-medium">Phone: (609) 994-3235</div>
                </div>
                <button
                  onClick={() => {
                    setOrderComplete(false);
                    onClose();
                  }}
                  className="px-6 py-2.5 rounded-xl bg-[#0c0d10] text-white font-semibold text-xs cursor-pointer"
                >
                  Continue Browsing
                </button>
              </div>
            ) : items.length === 0 ? (
              <div className="text-center py-16 text-[#8a8f98] space-y-3">
                <ShoppingBag className="w-12 h-12 mx-auto text-slate-300" />
                <p className="text-sm font-semibold text-[#0c0d10]">Your cart is empty</p>
                <p className="text-xs text-[#5a5e69]">Browse our certified pre-owned tech inventory.</p>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item.product.id}
                  className="flex items-center gap-3 p-3 rounded-xl bg-[#f6f7f8] border border-[#e8eaee]"
                >
                  <div className="w-14 h-14 rounded-lg bg-white p-1 shrink-0 flex items-center justify-center border border-[#e8eaee]">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs font-bold text-[#0c0d10] truncate">{item.product.name}</h4>
                    <span className="text-xs text-[#1382e8] font-bold block mt-0.5">
                      ${item.product.price.toFixed(2)}
                    </span>
                    
                    {/* Quantity Selector */}
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, -1)}
                        className="w-5 h-5 rounded bg-white hover:bg-slate-100 text-[#0c0d10] border border-[#e8eaee] flex items-center justify-center text-xs cursor-pointer"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-xs font-bold text-[#0c0d10] px-1">{item.quantity}</span>
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, 1)}
                        className="w-5 h-5 rounded bg-white hover:bg-slate-100 text-[#0c0d10] border border-[#e8eaee] flex items-center justify-center text-xs cursor-pointer"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={() => onRemoveItem(item.product.id)}
                    className="p-2 text-[#8a8f98] hover:text-red-500 transition-colors cursor-pointer"
                    title="Remove item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Footer Summary & Checkout */}
          {items.length > 0 && !orderComplete && (
            <div className="border-t border-[#e8eaee] pt-4 space-y-3.5">
              
              {/* Pickup vs Shipping Selector */}
              <div className="grid grid-cols-2 gap-1.5 bg-[#f6f7f8] p-1 rounded-xl border border-[#e8eaee] text-xs">
                <button
                  type="button"
                  onClick={() => setFulfillmentType('pickup')}
                  className={`py-1.5 px-3 rounded-lg font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                    fulfillmentType === 'pickup'
                      ? 'bg-white text-[#0c0d10] shadow-sm'
                      : 'text-[#5a5e69] hover:text-[#0c0d10]'
                  }`}
                >
                  <Store className="w-3.5 h-3.5" />
                  <span>Free Pickup</span>
                </button>
                <button
                  type="button"
                  onClick={() => setFulfillmentType('shipping')}
                  className={`py-1.5 px-3 rounded-lg font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                    fulfillmentType === 'shipping'
                      ? 'bg-white text-[#0c0d10] shadow-sm'
                      : 'text-[#5a5e69] hover:text-[#0c0d10]'
                  }`}
                >
                  <Truck className="w-3.5 h-3.5" />
                  <span>US Shipping</span>
                </button>
              </div>

              {/* Price Breakdown */}
              <div className="space-y-1.5 text-xs text-[#5a5e69]">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span className="font-semibold text-[#0c0d10]">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Fulfillment ({fulfillmentType === 'pickup' ? 'Manahawkin' : 'Insured Post'}):</span>
                  <span className="font-semibold text-emerald-600">
                    {shippingFee === 0 ? 'FREE' : `$${shippingFee.toFixed(2)}`}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Est. Sales Tax (NJ 6.625%):</span>
                  <span className="font-semibold text-[#0c0d10]">${estimatedTax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm font-bold text-[#0c0d10] pt-2 border-t border-[#e8eaee]">
                  <span>Total:</span>
                  <span className="text-[#0c0d10] font-heading text-base">${total.toFixed(2)}</span>
                </div>
              </div>

              {/* Checkout Button */}
              <button
                onClick={handleCheckout}
                disabled={isCheckingOut}
                className="w-full py-3 rounded-xl font-bold text-xs text-white bg-[#0c0d10] hover:bg-black shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {isCheckingOut ? (
                  <span>Processing Order...</span>
                ) : (
                  <>
                    <span>Proceed to Fast Checkout</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-[#5a5e69]">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Backed by 60-Day Limited Shop Warranty</span>
              </div>

            </div>
          )}

        </div>
      </div>
    </div>
  );
};
