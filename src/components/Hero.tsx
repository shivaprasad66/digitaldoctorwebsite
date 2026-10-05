import React from 'react';
import { 
  ShieldCheck, 
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
  Sparkles
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
    <section className="relative overflow-hidden pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-slate-900">
      
      {/* Subtle top radial lighting (not oversaturated) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[400px] bg-[radial-gradient(ellipse_at_top,rgba(14,165,233,0.08),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Editorial Value Proposition & Actions (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Makcliff-style Eyebrow */}
            <div className="flex items-center gap-3">
              <span className="eyebrow">
                <span className="inline-block h-px w-8 bg-cyan-400/60" aria-hidden="true"></span>
                Ocean County — Certified Tech Lab
              </span>
              <span className="text-slate-600 hidden sm:inline">•</span>
              <span className="text-xs font-mono text-slate-400 hidden sm:flex items-center gap-1">
                <MapPin className="w-3 h-3 text-cyan-400" />
                1636 Route 72 W, Manahawkin NJ
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-heading leading-[1.08]">
              We bring your device{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-cyan-200">
                back to life.
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
              Fast, dependable electronics triage for <strong className="text-white">smartphones, iPads, laptops, and gaming consoles</strong>. 
              Most repairs are completed within <strong className="text-cyan-400">45 minutes</strong> with our signature 
              <span className="text-white font-semibold"> 60-Day Limited Warranty</span>. Walk in to our Manahawkin storefront, book our mobile tech van to your driveway, or mail it in nationwide.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#estimator"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm text-slate-950 bg-cyan-400 hover:bg-cyan-300 shadow-md shadow-cyan-500/20 transition-all cursor-pointer"
              >
                <Wrench className="w-4 h-4 text-slate-950" />
                <span>Instant Price Quote</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenMobileVan}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-xs sm:text-sm text-white surface-card hover:bg-slate-850 border border-slate-700/80 transition-all cursor-pointer"
              >
                <Truck className="w-4 h-4 text-cyan-400" />
                <span>Book Mobile Van</span>
              </button>

              <button
                onClick={onOpenTracking}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-3.5 rounded-xl font-mono text-xs text-slate-400 hover:text-cyan-300 transition-colors cursor-pointer"
              >
                <span>Track Repair Ticket ⌘K</span>
              </button>
            </div>

            {/* Fast Device Selector Pills */}
            <div className="pt-2">
              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-2 font-semibold">
                Quick Device Selection:
              </span>
              <div className="flex flex-wrap gap-2">
                {[
                  { id: 'phones', label: 'iPhone & Android', icon: Smartphone },
                  { id: 'tablets', label: 'iPad & Tablets', icon: Tablet },
                  { id: 'laptops', label: 'Mac & Laptops', icon: Laptop },
                  { id: 'consoles', label: 'PS5 & Xbox Consoles', icon: Gamepad2 }
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.id}
                      href="#estimator"
                      onClick={() => onSelectCategory(item.id)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-900 hover:bg-slate-850 border border-slate-800 text-slate-300 hover:text-cyan-300 transition-all cursor-pointer"
                    >
                      <Icon className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{item.label}</span>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Clean Trust Metrics Row (Makcliff Numbered Style) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-800/80">
              <div className="space-y-0.5">
                <div className="text-lg font-black text-white font-heading">45-60 min</div>
                <div className="text-[11px] text-slate-400 font-mono">Average Turnaround</div>
              </div>

              <div className="space-y-0.5">
                <div className="text-lg font-black text-emerald-400 font-heading">60 Days</div>
                <div className="text-[11px] text-slate-400 font-mono">Shop Warranty</div>
              </div>

              <div className="space-y-0.5">
                <div className="text-lg font-black text-cyan-400 font-heading">Mobile Van</div>
                <div className="text-[11px] text-slate-400 font-mono">We Drive To You</div>
              </div>

              <div className="space-y-0.5">
                <div className="text-lg font-black text-amber-400 font-heading flex items-center gap-1">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <span>4.9 / 5.0</span>
                </div>
                <div className="text-[11px] text-slate-400 font-mono">500+ Verified Reviews</div>
              </div>
            </div>

          </div>

          {/* Right Column: Authentic Photography Showcase (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-2xl surface-card border border-slate-800 shadow-xl overflow-hidden space-y-4">
              
              {/* Technician Photo Banner */}
              <div className="relative h-60 sm:h-72 overflow-hidden bg-slate-950">
                <img
                  src="/images/technician.jpg"
                  alt="Digital Doctor Master Technician Repairing Device on ESD Bench"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>

                {/* Floating status tag */}
                <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-950/85 backdrop-blur-md border border-slate-700 text-xs font-mono font-semibold text-white">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>Bench Active • Manahawkin Lab</span>
                </div>

                <div className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-950/85 backdrop-blur-md border border-slate-700 text-[11px] font-mono text-cyan-300">
                  <Truck className="w-3.5 h-3.5" />
                  <span>Mobile Van Available</span>
                </div>
              </div>

              {/* Assurances checklist */}
              <div className="p-5 pt-0 space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-slate-800/80">
                  <span className="text-xs font-mono uppercase text-slate-400 font-bold">Lab Protocol</span>
                  <span className="text-[11px] font-mono text-emerald-400">100% Bench Tested</span>
                </div>

                <div className="space-y-2 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>Upfront transparent pricing before any work starts</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>Data safety prioritized — no device wipes without consent</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>Full 60-Day Limited Warranty on parts and labor</span>
                  </div>
                </div>

                <div className="pt-2 text-xs flex items-center justify-between text-slate-400">
                  <span>As featured in <strong className="text-white">The Sandpaper</strong></span>
                  <a href="#press" className="text-cyan-400 hover:text-cyan-300 font-semibold font-mono text-[11px]">
                    Read Press Story &rarr;
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
