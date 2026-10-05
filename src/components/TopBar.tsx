import React from 'react';
import { Phone, MapPin, Clock, Truck, ShieldCheck, Sparkles } from 'lucide-react';

export const TopBar: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-xs text-slate-300 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex flex-col md:flex-row items-center justify-between gap-2">
          {/* Left: Announcement pill */}
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              <Sparkles className="w-3 h-3 animate-pulse text-cyan-400" />
              NEW
            </span>
            <span className="text-slate-300 font-medium flex items-center gap-1.5">
              <Truck className="w-3.5 h-3.5 text-cyan-400" />
              On-Site Mobile Van Repairs & Nationwide Mail-In Service Available!
            </span>
          </div>

          {/* Right: Quick Contacts & Hours */}
          <div className="flex items-center gap-4 text-slate-400">
            {/* Live Store status */}
            <div className="hidden lg:flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span className="w-2 h-2 rounded-full bg-emerald-500 -ml-3.5"></span>
              <span className="text-emerald-400 font-semibold">Open Today</span>
              <span className="text-slate-500">•</span>
              <span>Mon-Fri: 9am-7pm</span>
            </div>

            <div className="hidden sm:flex items-center gap-1.5 hover:text-slate-200 transition-colors">
              <MapPin className="w-3.5 h-3.5 text-slate-400" />
              <span>1636 Route 72 W, Manahawkin NJ</span>
            </div>

            <a
              href="tel:6099943235"
              className="flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>(609) 994-3235</span>
            </a>

            <div className="hidden md:flex items-center gap-1 text-slate-400 border-l border-slate-800 pl-3">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>60-Day Warranty</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
