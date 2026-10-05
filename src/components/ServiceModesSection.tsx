import React from 'react';
import { Store, Truck, Mail, Check, ArrowRight, ShieldCheck, Clock, MapPin, Sparkles } from 'lucide-react';

interface ServiceModesSectionProps {
  onSelectMode: (mode: 'in-store' | 'mobile-van' | 'mail-in') => void;
  onOpenMailInModal: () => void;
}

export const ServiceModesSection: React.FC<ServiceModesSectionProps> = ({
  onSelectMode,
  onOpenMailInModal
}) => {
  return (
    <section id="mobile-unit" className="py-16 lg:py-24 relative overflow-hidden bg-slate-900/60 border-t border-slate-800">
      
      {/* Background radial glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-cyan-500/10 blur-[130px] pointer-events-none rounded-full" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-bold border border-cyan-500/20 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>FLEXIBLE REPAIR OPTIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-heading tracking-tight">
            3 Convenient Ways to Get Your Tech Fixed
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            Whether you want to visit our Manahawkin shop, have our Mobile Tech Van roll up to your doorstep, or ship it from across the country — we've got you covered.
          </p>
        </div>

        {/* 3 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          
          {/* Card 1: In-Store Walk-In */}
          <div className="flex flex-col justify-between rounded-2xl bg-slate-950/80 border border-slate-800 p-7 hover:border-slate-700 transition-all shadow-xl group">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                  <Store className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Walk-Ins Welcome
                </span>
              </div>

              <h3 className="text-xl font-bold text-white font-heading mb-2">In-Store Express Walk-In</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                Visit our storefront at 1636 Route 72 W in Manahawkin. Sit back in our customer lounge with complimentary Wi-Fi while our master technician fixes your device.
              </p>

              <div className="space-y-2.5 text-xs text-slate-300 mb-6 border-t border-slate-800/80 pt-4">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span><strong>45-60 min average</strong> repair turnaround</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Convenient parking on Route 72 West</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>60-day warranty certificate on hand-off</span>
                </div>
              </div>
            </div>

            <a
              href="#estimator"
              onClick={() => onSelectMode('in-store')}
              className="w-full py-3 rounded-xl font-bold text-xs text-white bg-slate-900 hover:bg-slate-800 border border-slate-700 text-center transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Walk-In Quote</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Card 2: Mobile Repair Unit (FEATURED) */}
          <div className="flex flex-col justify-between rounded-2xl bg-gradient-to-b from-cyan-950/40 via-slate-900 to-slate-950 border-2 border-cyan-500/60 p-7 shadow-2xl shadow-cyan-500/15 relative group">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 shadow-md">
              THE DOCTOR ON THE WAY
            </span>

            <div>
              <div className="flex items-center justify-between mb-5 mt-2">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-300 group-hover:scale-110 transition-transform">
                  <Truck className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/40">
                  Featured in Press
                </span>
              </div>

              <h3 className="text-xl font-bold text-white font-heading mb-2">On-Site Mobile Van Unit</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                Our custom-built mobile cleanroom laboratory drives straight to your house, dock, job site, or office across Ocean County and neighboring communities!
              </p>

              {/* Photo of mobile van */}
              <div className="rounded-xl overflow-hidden mb-5 border border-cyan-500/30 h-32 relative">
                <img
                  src="/images/mobile_unit.jpg"
                  alt="Digital Doctor Mobile Repair Van Unit"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
                <span className="absolute bottom-2 left-2 text-[10px] font-bold text-white bg-slate-950/80 px-2 py-0.5 rounded">
                  Official Mobile Repair Van
                </span>
              </div>

              <div className="space-y-2.5 text-xs text-slate-300 mb-6 border-t border-cyan-900/40 pt-4">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Never leave your home or interrupt your day</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Fully equipped with precision ESD tools & parts</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Same 60-day warranty coverage</span>
                </div>
              </div>
            </div>

            <a
              href="#estimator"
              onClick={() => onSelectMode('mobile-van')}
              className="w-full py-3.5 rounded-xl font-black text-xs text-slate-950 bg-gradient-to-r from-cyan-400 to-cyan-300 hover:from-cyan-300 hover:to-white shadow-lg shadow-cyan-500/25 text-center transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Book Mobile Van</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Card 3: Mail-In Service */}
          <div className="flex flex-col justify-between rounded-2xl bg-slate-950/80 border border-slate-800 p-7 hover:border-slate-700 transition-all shadow-xl group">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  Nationwide
                </span>
              </div>

              <h3 className="text-xl font-bold text-white font-heading mb-2">Nationwide Mail-In Service</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                Can't drop by? No problem. Ship your device directly to our lab from anywhere in the United States. Generate a packing slip in 60 seconds.
              </p>

              <div className="space-y-2.5 text-xs text-slate-300 mb-6 border-t border-slate-800/80 pt-4">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Print packing slip with tracking barcode</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Insured return shipping with tracking number</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Pay securely online only when repair is complete</span>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={onOpenMailInModal}
              className="w-full py-3 rounded-xl font-bold text-xs text-white bg-slate-900 hover:bg-slate-800 border border-slate-700 text-center transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Start Mail-In Form</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
