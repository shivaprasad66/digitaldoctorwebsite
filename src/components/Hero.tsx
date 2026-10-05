import React from 'react';
import { 
  ShieldCheck, 
  Clock, 
  Truck, 
  Star, 
  ArrowRight, 
  Wrench, 
  CheckCircle2, 
  Sparkles,
  Smartphone,
  Laptop,
  Gamepad2,
  Tablet,
  MapPin
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
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Background ambient lighting gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-gradient-to-tr from-cyan-600/15 via-blue-600/20 to-purple-600/10 blur-[130px] -z-10 pointer-events-none rounded-full" />
      <div className="absolute -top-24 right-0 w-[400px] h-[400px] bg-cyan-500/10 blur-[120px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 text-xs font-semibold text-slate-300 shadow-inner">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span className="text-cyan-400 font-bold">Ocean County's #1 Rated Tech Lab</span>
              <span className="text-slate-600">•</span>
              <span className="text-slate-300 flex items-center gap-1">
                <MapPin className="w-3 h-3 text-red-400" />
                1636 Route 72 W, Manahawkin NJ
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-heading leading-[1.08]">
              We Bring Your Device{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">
                Back To Life.
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              Fast, precision electronics triage for <strong className="text-white">smartphones, iPads, laptops, and gaming consoles</strong>. 
              Most repairs are completed within <strong className="text-cyan-400">45 minutes</strong> with our signature 
              <span className="text-white font-medium"> 60-Day Limited Warranty</span>. Walk in, book our mobile repair van to your driveway, or mail it in nationwide.
            </p>

            {/* Quick Action CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#estimator"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-slate-950 bg-gradient-to-r from-cyan-400 to-cyan-300 hover:from-cyan-300 hover:to-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-400/40 hover:-translate-y-0.5 transition-all cursor-pointer"
              >
                <Wrench className="w-4 h-4 text-slate-950" />
                <span>Instant Price Quote</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenMobileVan}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-cyan-500/50 shadow-md transition-all cursor-pointer"
              >
                <Truck className="w-4 h-4 text-cyan-400" />
                <span>Book Mobile Van</span>
              </button>

              <button
                onClick={onOpenTracking}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-3.5 rounded-xl font-medium text-xs text-slate-400 hover:text-cyan-300 hover:bg-slate-900/50 transition-colors cursor-pointer"
              >
                <span>Track Existing Ticket</span>
              </button>
            </div>

            {/* Quick Device Jump Pills */}
            <div className="pt-2">
              <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold block mb-2">
                Select your device to get fixed:
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
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-900/80 hover:bg-cyan-950/60 border border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-cyan-300 transition-all cursor-pointer"
                    >
                      <Icon className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{item.label}</span>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Trust Badges Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-slate-800/80">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4 text-cyan-400" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">45-60 Mins</div>
                  <div className="text-[11px] text-slate-400">Same-Day Fix</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">60-Day</div>
                  <div className="text-[11px] text-slate-400">Shop Warranty</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                  <Truck className="w-4 h-4 text-blue-400" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">Mobile Van</div>
                  <div className="text-[11px] text-slate-400">We Come To You</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
                  <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">4.9 / 5.0</div>
                  <div className="text-[11px] text-slate-400">500+ Local Reviews</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Showcase Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative glow */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-500/30 to-blue-600/30 blur-xl opacity-70"></div>

              {/* Main Container Card */}
              <div className="relative rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden">
                
                {/* Visual Header Image Banner */}
                <div className="relative h-64 sm:h-72 overflow-hidden bg-slate-950">
                  <img
                    src="/images/technician.jpg"
                    alt="Digital Doctor Master Technician Repairing Device"
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                    onError={(e) => {
                      // Fallback if image fails
                      (e.target as HTMLImageElement).src = '/images/shop_storefront.jpg';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>

                  {/* Floating live badge on image */}
                  <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-slate-700/80 text-xs font-semibold text-white">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span>Live Workbench • Manahawkin Shop</span>
                  </div>

                  {/* Mobile Van badge on image */}
                  <div className="absolute bottom-4 right-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-cyan-950/80 backdrop-blur-md border border-cyan-500/40 text-xs font-bold text-cyan-300">
                    <Truck className="w-3.5 h-3.5" />
                    <span>Mobile Van Dispatched</span>
                  </div>
                </div>

                {/* Card Content & Features list */}
                <div className="p-5 space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-base font-bold text-white">Express Diagnostic Guarantee</h2>
                      <p className="text-xs text-slate-400">Zero hidden fees • Genuine & OEM Grade Components</p>
                    </div>
                    <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      100% Tested
                    </span>
                  </div>

                  {/* Checklist of assurances */}
                  <div className="space-y-2 text-xs text-slate-300">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>Free diagnostic consultation & upfront price quote before work begins</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>Data privacy protected — we never wipe devices without consent</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>Full 60-Day Limited Shop Warranty on all parts and labor</span>
                    </div>
                  </div>

                  {/* Real-time mini ticker */}
                  <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1.5 text-slate-400">
                      <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                      <span>Featured in <strong className="text-slate-200">The Sandpaper</strong></span>
                    </div>
                    <a
                      href="#press"
                      className="text-cyan-400 hover:text-cyan-300 font-semibold"
                    >
                      Read Story &rarr;
                    </a>
                  </div>

                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
