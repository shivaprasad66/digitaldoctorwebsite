import React from 'react';
import { Phone, MapPin, Clock, Truck, ShieldCheck, Sparkles } from 'lucide-react';

export const TopBar: React.FC = () => {
  return (
    <div className="bg-[#f6f7f8] text-xs text-[#41454e] border-b border-[#e8eaee]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex flex-col md:flex-row items-center justify-between gap-2">
          
          {/* Left: Announcement tag */}
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[#e7f2fd] text-[#1382e8] border border-[#bedcf8]">
              <Sparkles className="w-3 h-3 text-[#1382e8]" />
              MOBILE REPAIR UNIT
            </span>
            <span className="text-[#0c0d10] font-medium flex items-center gap-1.5">
              <Truck className="w-3.5 h-3.5 text-[#1382e8]" />
              On-Site Repairs & Nationwide Mail-In Service Available
            </span>
          </div>

          {/* Right: Hours & Contacts */}
          <div className="flex items-center gap-4 text-[#6b7079]">
            
            {/* Live Store status */}
            <div className="hidden lg:flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#0d9963]"></span>
              <span className="text-[#0d9963] font-semibold">Open Today</span>
              <span>• Mon–Fri: 9am–7pm</span>
            </div>

            <div className="hidden sm:flex items-center gap-1.5 text-[#41454e]">
              <MapPin className="w-3.5 h-3.5 text-[#6b7079]" />
              <span>1636 Route 72 W, Manahawkin NJ</span>
            </div>

            <a
              href="tel:6099943235"
              className="flex items-center gap-1.5 text-[#1382e8] hover:text-[#0e6fcc] font-semibold transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>(609) 994-3235</span>
            </a>

            <div className="hidden md:flex items-center gap-1 text-[#41454e] border-l border-[#e8eaee] pl-3">
              <ShieldCheck className="w-3.5 h-3.5 text-[#0d9963]" />
              <span>60-Day Warranty</span>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
