import React, { useState, useEffect } from 'react';
import { 
  ShoppingBag, 
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
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Pricing & Triage', href: '#estimator' },
    { name: 'Mobile Van Unit', href: '#mobile-unit' },
    { name: 'Mail-In Service', action: onOpenMailIn },
    { name: 'Certified Store', href: '#shop' },
    { name: '60-Day Warranty', href: '#warranty' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact & Store', href: '#contact' }
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-[#e8eaee] shadow-[0_2px_12px_-2px_rgba(12,13,16,0.06)] py-3'
          : 'bg-white border-b border-[#e8eaee] py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-[#f6f7f8] border border-[#e8eaee] p-1 flex items-center justify-center group-hover:border-[#1382e8] transition-colors">
                <img
                  src="/logo.png"
                  alt="Digital Doctor Repairs Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-[#0d9963] border-2 border-white" title="Store Open"></span>
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-extrabold tracking-tight text-[#0c0d10] leading-tight font-heading">
                Digital Doctor
              </span>
              <span className="text-[11px] font-mono text-[#6b7079] font-medium tracking-wide">
                Repairs & Tech • Manahawkin
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              return link.action ? (
                <button
                  key={link.name}
                  onClick={link.action}
                  className="px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium text-[#41454e] hover:text-[#0c0d10] hover:bg-[#f6f7f8] transition-all cursor-pointer"
                >
                  {link.name}
                </button>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium text-[#41454e] hover:text-[#0c0d10] hover:bg-[#f6f7f8] transition-all"
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action CTAs */}
          <div className="flex items-center gap-2.5">
            {/* Track Repair Quick Tool */}
            <button
              onClick={onOpenTracking}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium text-[#41454e] bg-[#f6f7f8] hover:bg-[#ebeef2] border border-[#e8eaee] transition-all cursor-pointer"
              title="Track existing repair status"
            >
              <Search className="w-3.5 h-3.5 text-[#1382e8]" />
              <span>Track Ticket</span>
              <span className="text-[10px] text-[#6b7079] font-mono">⌘K</span>
            </button>

            {/* Shopping Cart Button */}
            <button
              onClick={onOpenCart}
              className="relative p-2 rounded-lg text-[#41454e] hover:text-[#0c0d10] bg-[#f6f7f8] hover:bg-[#ebeef2] border border-[#e8eaee] transition-colors cursor-pointer"
              title="View Cart"
            >
              <ShoppingBag className="w-4 h-4" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#1382e8] text-white font-bold text-[9px] flex items-center justify-center font-mono">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Instant Quote Primary CTA (Rote Dark Button) */}
            <button
              onClick={onOpenQuote}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-[#0c0d10] hover:bg-[#23262f] shadow-sm transition-all cursor-pointer"
            >
              <span>Get Free Quote</span>
              <ArrowRight className="w-3.5 h-3.5 text-white/80" />
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-[#41454e] hover:text-[#0c0d10] bg-[#f6f7f8] border border-[#e8eaee]"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-[#e8eaee] pb-3 space-y-1 animate-fadeIn">
            {navLinks.map((link) => {
              return link.action ? (
                <button
                  key={link.name}
                  onClick={() => {
                    link.action!();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full px-3 py-2 rounded-lg text-xs font-semibold text-[#41454e] hover:bg-[#f6f7f8] text-left block"
                >
                  {link.name}
                </button>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg text-xs font-semibold text-[#41454e] hover:bg-[#f6f7f8] block"
                >
                  {link.name}
                </a>
              );
            })}

            <div className="pt-3 border-t border-[#e8eaee] grid grid-cols-2 gap-2">
              <button
                onClick={() => {
                  onOpenTracking();
                  setMobileMenuOpen(false);
                }}
                className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold text-[#41454e] bg-[#f6f7f8] border border-[#e8eaee]"
              >
                <Search className="w-3.5 h-3.5 text-[#1382e8]" />
                Track Ticket
              </button>
              <a
                href="tel:6099943235"
                className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold text-[#1382e8] bg-[#e7f2fd] border border-[#bedcf8]"
              >
                <Phone className="w-3.5 h-3.5" />
                Call (609) 994-3235
              </a>
            </div>

            <button
              onClick={() => {
                onOpenQuote();
                setMobileMenuOpen(false);
              }}
              className="w-full mt-2 py-2.5 rounded-xl text-center text-xs font-bold text-white bg-[#0c0d10]"
            >
              Get Free Instant Quote
            </button>
          </div>
        )}
      </div>
    </header>
  );
};
