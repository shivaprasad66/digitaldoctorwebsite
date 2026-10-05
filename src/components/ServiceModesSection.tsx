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
    <section id="mobile-unit" className="py-20 lg:py-28 relative overflow-hidden bg-[#fdfdfd] border-b border-[#e8eaee]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f6f7f8] border border-[#e8eaee] text-xs font-mono text-[#41454e] mb-3">
            <span className="w-2 h-2 rounded-full bg-[#1382e8]"></span>
            <span>Three Service Modalities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0c0d10] font-heading tracking-tight leading-tight">
            How we get your tech fixed
          </h2>
          <p className="text-[#41454e] text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
            Visit our Manahawkin shop, have our custom Mobile Repair Van roll up to your doorstep, or ship it nationwide.
          </p>
        </div>

        {/* 3 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          
          {/* Card 1: In-Store Walk-In */}
          <div className="rote-card p-7 sm:p-8 flex flex-col justify-between bg-white border border-[#e8eaee] space-y-6">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-[#f6f7f8] border border-[#e8eaee] flex items-center justify-center text-[#1382e8]">
                  <Store className="w-6 h-6" />
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#e9f7f0] text-[#0d9963] border border-[#bfe8d3]">
                  Walk-Ins Welcome
                </span>
              </div>

              <h3 className="text-xl font-bold text-[#0c0d10] font-heading mb-2">In-Store Walk-In</h3>
              <p className="text-xs sm:text-sm text-[#6b7079] leading-relaxed mb-6">
                Visit our storefront at 1636 Route 72 W in Manahawkin. Sit back in our lounge while our technician services your device.
              </p>

              <div className="space-y-2.5 text-xs text-[#41454e] border-t border-[#f6f7f8] pt-4">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#1382e8] shrink-0" />
                  <span><strong>45-60 min</strong> average fix time</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#1382e8] shrink-0" />
                  <span>Convenient parking on Route 72 West</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#0d9963] shrink-0" />
                  <span>60-day shop warranty certificate</span>
                </div>
              </div>
            </div>

            <a
              href="#estimator"
              onClick={() => onSelectMode('in-store')}
              className="w-full py-3 rounded-xl font-semibold text-xs text-[#0c0d10] bg-[#f6f7f8] hover:bg-[#ebeef2] border border-[#e8eaee] text-center transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Walk-In Quote</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#6b7079]" />
            </a>
          </div>

          {/* Card 2: Mobile Repair Van (Featured) */}
          <div className="rote-card p-7 sm:p-8 flex flex-col justify-between bg-white border-2 border-[#1382e8] shadow-md space-y-6 relative">
            <span className="absolute -top-3 left-6 px-3 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#1382e8] text-white">
              The Doctor's On The Way
            </span>

            <div>
              <div className="flex items-center justify-between mb-5 mt-1">
                <div className="w-12 h-12 rounded-xl bg-[#e7f2fd] border border-[#bedcf8] flex items-center justify-center text-[#1382e8]">
                  <Truck className="w-6 h-6" />
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#e7f2fd] text-[#1382e8] border border-[#bedcf8]">
                  Ocean County
                </span>
              </div>

              <h3 className="text-xl font-bold text-[#0c0d10] font-heading mb-2">Mobile Van Unit</h3>
              <p className="text-xs sm:text-sm text-[#6b7079] leading-relaxed mb-4">
                Our custom mobile lab drives straight to your house, dock, job site, or office across Ocean County and surrounding areas.
              </p>

              {/* Mobile Van Photo */}
              <div className="rounded-xl overflow-hidden mb-5 border border-[#e8eaee] h-32 relative">
                <img
                  src="/images/mobile_unit.jpg"
                  alt="Digital Doctor Mobile Repair Van Unit"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              <div className="space-y-2 text-xs text-[#41454e] border-t border-[#f6f7f8] pt-3">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#1382e8] shrink-0" />
                  <span>Repairs completed in our mobile cleanroom van</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#1382e8] shrink-0" />
                  <span>Same 60-day shop warranty included</span>
                </div>
              </div>
            </div>

            <a
              href="#estimator"
              onClick={() => onSelectMode('mobile-van')}
              className="w-full py-3 rounded-xl font-semibold text-xs text-white bg-[#0c0d10] hover:bg-[#23262f] text-center transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
            >
              <span>Book Mobile Van</span>
              <ArrowRight className="w-3.5 h-3.5 text-white/80" />
            </a>
          </div>

          {/* Card 3: Mail-In Service */}
          <div className="rote-card p-7 sm:p-8 flex flex-col justify-between bg-white border border-[#e8eaee] space-y-6">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-[#f6f7f8] border border-[#e8eaee] flex items-center justify-center text-[#1382e8]">
                  <Mail className="w-6 h-6" />
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#f6f7f8] text-[#41454e] border border-[#e8eaee]">
                  Nationwide
                </span>
              </div>

              <h3 className="text-xl font-bold text-[#0c0d10] font-heading mb-2">Mail-In Service</h3>
              <p className="text-xs sm:text-sm text-[#6b7079] leading-relaxed mb-6">
                Can't drop by? Ship your device from anywhere in the US. Generate a packing slip online and track every step.
              </p>

              <div className="space-y-2.5 text-xs text-[#41454e] border-t border-[#f6f7f8] pt-4">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#1382e8] shrink-0" />
                  <span>Instant printable packing slip with barcode</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#1382e8] shrink-0" />
                  <span>Insured return shipping with tracking number</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#1382e8] shrink-0" />
                  <span>Pay securely online only when repair is complete</span>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={onOpenMailInModal}
              className="w-full py-3 rounded-xl font-semibold text-xs text-[#0c0d10] bg-[#f6f7f8] hover:bg-[#ebeef2] border border-[#e8eaee] text-center transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Start Mail-In Form</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#6b7079]" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
