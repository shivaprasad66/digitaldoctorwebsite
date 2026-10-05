import React, { useState, useEffect } from 'react';
import { 
  Wrench, 
  Truck, 
  Mail, 
  ShoppingBag, 
  ShieldCheck, 
  HelpCircle, 
  Search, 
  Menu, 
  X, 
  ArrowRight,
  Phone
} from 'lucide-react';

interface NavbarProps {
  onOpenTracking: () => void;
  onOpenMailIn: () => void;
  onOpenCart: () => void;
  onOpenQuote: () => void;
  cartCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenTracking,
  onOpenMailIn,
  onOpenCart,
  onOpenQuote,
  cartCount
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Repairs & Pricing', href: '#estimator', icon: Wrench },
    { name: 'Mobile Van Unit', href: '#mobile-unit', icon: Truck },
    { name: 'Mail-In Service', href: '#mail-in', action: onOpenMailIn, icon: Mail },
    { name: 'Certified Store', href: '#shop', icon: ShoppingBag },
    { name: '60-Day Warranty', href: '#warranty', icon: ShieldCheck },
    { name: 'Help & FAQ', href: '#faq', icon: HelpCircle },
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/95 backdrop-blur-md border-b border-slate-800 shadow-xl shadow-black/40 py-2.5'
          : 'bg-slate-950/80 backdrop-blur-sm border-b border-slate-900 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-600 to-blue-600 p-0.5 shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-shadow">
                <img
                  src="/logo.png"
                  alt="Digital Doctor Repairs Logo"
                  className="w-full h-full object-contain rounded-[10px] bg-slate-950 p-1"
                  onError={(e) => {
                    // Fallback to text icon if logo fails
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
              </div>
              <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-slate-950" title="Store Open"></span>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-black tracking-tight text-white group-hover:text-cyan-400 transition-colors leading-tight font-heading">
                DIGITAL DOCTOR
              </span>
              <span className="text-[10px] font-bold tracking-widest text-cyan-400/90 uppercase">
                Repairs & Tech • Manahawkin
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return link.action ? (
                <button
                  key={link.name}
                  onClick={link.action}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-900/80 transition-all cursor-pointer"
                >
                  <Icon className="w-4 h-4 text-cyan-400" />
                  {link.name}
                </button>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-900/80 transition-all"
                >
                  <Icon className="w-4 h-4 text-slate-400" />
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-2.5">
            {/* Track Repair Button */}
            <button
              onClick={onOpenTracking}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700/80 hover:border-cyan-500/50 transition-all cursor-pointer shadow-sm"
              title="Track existing repair status"
            >
              <Search className="w-3.5 h-3.5 text-cyan-400" />
              <span>Track Repair</span>
            </button>

            {/* Shopping Cart Button */}
            <button
              onClick={onOpenCart}
              className="relative p-2 rounded-lg text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 transition-colors cursor-pointer"
              title="View Cart"
            >
              <ShoppingBag className="w-4 h-4 text-slate-300" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-cyan-500 text-slate-950 font-bold text-[10px] flex items-center justify-center animate-bounce">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Instant Quote Primary CTA */}
            <button
              onClick={onOpenQuote}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-md shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 transition-all cursor-pointer"
            >
              <span>Get Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-lg text-slate-300 hover:text-white bg-slate-900 border border-slate-800"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden mt-3 pt-3 border-t border-slate-800/80 pb-3 space-y-1.5 animate-fadeIn">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return link.action ? (
                <button
                  key={link.name}
                  onClick={() => {
                    link.action!();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-200 hover:bg-slate-900 text-left"
                >
                  <Icon className="w-4 h-4 text-cyan-400" />
                  {link.name}
                </button>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-200 hover:bg-slate-900"
                >
                  <Icon className="w-4 h-4 text-cyan-400" />
                  {link.name}
                </a>
              );
            })}

            <div className="pt-2 border-t border-slate-800/80 grid grid-cols-2 gap-2">
              <button
                onClick={() => {
                  onOpenTracking();
                  setMobileMenuOpen(false);
                }}
                className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-lg text-xs font-semibold text-slate-200 bg-slate-900 border border-slate-700"
              >
                <Search className="w-3.5 h-3.5 text-cyan-400" />
                Track Repair
              </button>
              <a
                href="tel:6099943235"
                className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-lg text-xs font-semibold text-cyan-400 bg-cyan-950/40 border border-cyan-800/50"
              >
                <Phone className="w-3.5 h-3.5" />
                Call Shop
              </a>
            </div>

            <button
              onClick={() => {
                onOpenQuote();
                setMobileMenuOpen(false);
              }}
              className="w-full mt-2 py-3 rounded-xl text-center text-sm font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-600 shadow-md shadow-cyan-500/25"
            >
              Get Free Instant Quote
            </button>
          </div>
        )}
      </div>
    </header>
  );
};
