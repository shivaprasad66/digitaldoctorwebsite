import React from 'react';
import { 
  Clock, 
  Truck, 
  Star, 
  ArrowRight, 
  Wrench, 
  CheckCircle2, 
  Smartphone,
  Laptop,
  Gamepad2,
  Tablet,
  MapPin,
  ShieldCheck
} from 'lucide-react';

interface HeroProps {
  onOpenQuote: () => void;
  onOpenMobileVan: () => void;
  onOpenTracking: () => void;
  onSelectCategory: (categoryId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenQuote,
  onOpenMobileVan,
  onOpenTracking,
  onSelectCategory
}) => {
  return (
    <section className="relative overflow-hidden pt-12 pb-16 lg:pt-20 lg:pb-28 bg-[#fdfdfd] border-b border-[#e8eaee]">
      
      {/* Subtle top ambient radial lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-80 bg-[radial-gradient(ellipse_at_top,rgba(19,130,232,0.06),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Concise & High-Impact Copy (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f6f7f8] border border-[#e8eaee] text-xs font-mono text-[#41454e]">
              <span className="w-2 h-2 rounded-full bg-[#0d9963]"></span>
              <span className="font-semibold text-[#0c0d10]">Ocean County Tech Lab</span>
              <span className="text-[#6b7079]">•</span>
              <span className="text-[#6b7079] flex items-center gap-1">
                <MapPin className="w-3 h-3 text-[#1382e8]" />
                1636 Route 72 W, Manahawkin
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#0c0d10] font-heading leading-[1.08]">
              We bring your device{' '}
              <span className="text-[#1382e8]">
                back to life.
              </span>
            </h1>

            {/* Concise Subtitle (Stripped of text clutter) */}
            <p className="text-base sm:text-lg text-[#41454e] max-w-2xl leading-relaxed">
              Phones, iPads, laptops, and game consoles repaired in <strong className="text-[#0c0d10]">45 minutes</strong>. 
              Backed by our 60-day warranty. Visit our Manahawkin shop, call our mobile repair van to your driveway, or mail it in.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#estimator"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-xs sm:text-sm text-white bg-[#0c0d10] hover:bg-[#23262f] shadow-sm transition-all cursor-pointer"
              >
                <Wrench className="w-4 h-4 text-white" />
                <span>Instant Price Quote</span>
                <ArrowRight className="w-4 h-4 text-white/80" />
              </a>

              <button
                onClick={onOpenMobileVan}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-xs sm:text-sm text-[#0c0d10] bg-white hover:bg-[#f6f7f8] border border-[#e8eaee] shadow-sm transition-all cursor-pointer"
              >
                <Truck className="w-4 h-4 text-[#1382e8]" />
                <span>Book Mobile Van</span>
              </button>

              <button
                onClick={onOpenTracking}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-3.5 rounded-xl font-mono text-xs text-[#6b7079] hover:text-[#0c0d10] transition-colors cursor-pointer"
              >
                <span>Track Ticket ⌘K</span>
              </button>
            </div>

            {/* Quick Device Pills */}
            <div className="pt-2">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#6b7079] block mb-2 font-semibold">
                Select your device to get started:
              </span>
              <div className="flex flex-wrap gap-2">
                {[
                  { id: 'phones', label: 'iPhone & Android', icon: Smartphone },
                  { id: 'tablets', label: 'iPad & Tablets', icon: Tablet },
                  { id: 'laptops', label: 'Mac & Laptops', icon: Laptop },
                  { id: 'consoles', label: 'PS5 & Xbox', icon: Gamepad2 }
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.id}
                      href="#estimator"
                      onClick={() => onSelectCategory(item.id)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-white hover:bg-[#f6f7f8] border border-[#e8eaee] text-[#41454e] hover:text-[#0c0d10] transition-all cursor-pointer"
                    >
                      <Icon className="w-3.5 h-3.5 text-[#1382e8]" />
                      <span>{item.label}</span>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Clean Stats Grid (Tryrote Style) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-[#e8eaee]">
              <div className="space-y-0.5">
                <div className="text-xl font-bold text-[#0c0d10] font-heading tabular">45-60 min</div>
                <div className="text-xs text-[#6b7079]">Average fix time</div>
              </div>

              <div className="space-y-0.5">
                <div className="text-xl font-bold text-[#0d9963] font-heading tabular">60 Days</div>
                <div className="text-xs text-[#6b7079]">Shop warranty</div>
              </div>

              <div className="space-y-0.5">
                <div className="text-xl font-bold text-[#1382e8] font-heading">Mobile Van</div>
                <div className="text-xs text-[#6b7079]">To your driveway</div>
              </div>

              <div className="space-y-0.5">
                <div className="text-xl font-bold text-[#0c0d10] font-heading flex items-center gap-1 tabular">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <span>4.9 / 5.0</span>
                </div>
                <div className="text-xs text-[#6b7079]">500+ reviews</div>
              </div>
            </div>

          </div>

          {/* Right Column: Clean White Frame Photo (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="rote-card border border-[#e8eaee] overflow-hidden p-2 bg-white">
              
              <div className="relative h-64 sm:h-80 overflow-hidden rounded-[10px] bg-[#f6f7f8]">
                <img
                  src="/images/technician.jpg"
                  alt="Digital Doctor Master Technician Repairing Device on ESD Bench"
                  className="w-full h-full object-cover object-top hover:scale-102 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

                {/* Floating status tag */}
                <div className="absolute top-3 left-3 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-[#e8eaee] text-xs font-mono font-medium text-[#0c0d10] shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-[#0d9963] animate-pulse"></span>
                  <span>Bench Active • Manahawkin Shop</span>
                </div>

                <div className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/95 backdrop-blur-md border border-[#e8eaee] text-xs font-medium text-[#1382e8] shadow-sm">
                  <Truck className="w-3.5 h-3.5" />
                  <span>Mobile Van Dispatched</span>
                </div>
              </div>

              <div className="p-4 space-y-2">
                <div className="flex items-center justify-between text-xs text-[#41454e]">
                  <span className="font-semibold text-[#0c0d10]">Official Tech Facility</span>
                  <span className="text-[#0d9963] font-medium flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    OEM Quality Parts
                  </span>
                </div>
                <p className="text-xs text-[#6b7079]">
                  As featured in <strong className="text-[#0c0d10]">The Sandpaper</strong>: "The Doctor's on the Way: Digital Doctor Repairs Takes Services on the Road."
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
