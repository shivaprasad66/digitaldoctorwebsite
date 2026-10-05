import React from 'react';
import { 
  Phone, 
  MapPin, 
  Mail, 
  Clock, 
  ShieldCheck, 
  Heart
} from 'lucide-react';
import { YoutubeIcon, InstagramIcon, FacebookIcon } from './SocialIcons';

interface FooterProps {
  onOpenTracking: () => void;
  onOpenMailIn: () => void;
  onOpenQuote: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenTracking,
  onOpenMailIn,
  onOpenQuote
}) => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 text-slate-400 text-xs">
      
      {/* Top Footer Banner */}
      <div className="border-b border-slate-900 py-8 bg-slate-950/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-white text-sm">45-Minute Repairs</div>
                <div className="text-slate-400 text-[11px]">Same-day turnaround on most devices</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-white text-sm">60-Day Warranty</div>
                <div className="text-slate-400 text-[11px]">On all certified parts and labor</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-white text-sm">Mobile Tech Van</div>
                <div className="text-slate-400 text-[11px]">We come to your home or dock</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-white text-sm">Call (609) 994-3235</div>
                <div className="text-slate-400 text-[11px]">Direct technician hotline</div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Info (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="Digital Doctor Repairs Logo"
                className="w-10 h-10 object-contain rounded-xl bg-slate-900 p-1 border border-slate-800"
              />
              <div>
                <span className="text-base font-black text-white tracking-tight font-heading">
                  DIGITAL DOCTOR REPAIRS
                </span>
                <span className="text-[10px] text-cyan-400 font-bold block uppercase tracking-widest">
                  We Bring Your Device Back To Life
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Ocean County’s premier certified electronics triage and micro-soldering facility. Serving Manahawkin, Stafford Township, Long Beach Island, Barnegat, and mail-in clients nationwide.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.youtube.com/channel/UCta8FWxM474irDMPABq2o4Q"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-red-950/60 border border-slate-800 hover:border-red-600/50 flex items-center justify-center text-slate-400 hover:text-red-400 transition-colors"
                title="YouTube Channel"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-pink-950/60 border border-slate-800 hover:border-pink-600/50 flex items-center justify-center text-slate-400 hover:text-pink-400 transition-colors"
                title="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-blue-950/60 border border-slate-800 hover:border-blue-600/50 flex items-center justify-center text-slate-400 hover:text-blue-400 transition-colors"
                title="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Services */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4 font-heading">
              Repair Services
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#estimator" className="hover:text-cyan-400 transition-colors">iPhone Screen Replacement</a></li>
              <li><a href="#estimator" className="hover:text-cyan-400 transition-colors">Samsung Galaxy Display Fix</a></li>
              <li><a href="#estimator" className="hover:text-cyan-400 transition-colors">iPad Digitizer & Glass Repair</a></li>
              <li><a href="#estimator" className="hover:text-cyan-400 transition-colors">PS5 & Xbox HDMI Soldering</a></li>
              <li><a href="#estimator" className="hover:text-cyan-400 transition-colors">MacBook Battery & Retina Display</a></li>
              <li><a href="#estimator" className="hover:text-cyan-400 transition-colors">Liquid Damage Ultrasonic Bath</a></li>
              <li><a href="#mobile-unit" className="text-cyan-400 hover:underline">Mobile Repair Van Unit</a></li>
            </ul>
          </div>

          {/* Customer Portal */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4 font-heading">
              Customer Portal
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={onOpenQuote} className="hover:text-cyan-400 transition-colors text-left cursor-pointer">
                  Request Instant Quote
                </button>
              </li>
              <li>
                <button onClick={onOpenTracking} className="hover:text-cyan-400 transition-colors text-left cursor-pointer">
                  Track Existing Repair Ticket
                </button>
              </li>
              <li>
                <button onClick={onOpenMailIn} className="hover:text-cyan-400 transition-colors text-left cursor-pointer">
                  Mail-In Packing Slip Wizard
                </button>
              </li>
              <li><a href="#shop" className="hover:text-cyan-400 transition-colors">Certified Device Store</a></li>
              <li><a href="#warranty" className="hover:text-cyan-400 transition-colors">60-Day Limited Warranty</a></li>
              <li><a href="#warranty" className="hover:text-cyan-400 transition-colors">Service Policies & Disclosures</a></li>
              <li><a href="#faq" className="hover:text-cyan-400 transition-colors">Help Center & FAQ</a></li>
            </ul>
          </div>

          {/* Location & Hours */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4 font-heading">
              Store Information
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>1636 Route 72 W<br />Manahawkin, NJ 08050</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <a href="tel:6099943235" className="hover:text-white font-bold">(609) 994-3235</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <span className="truncate">info@digitaldocrepairs.com</span>
              </div>
              <div className="pt-2 text-[11px] text-slate-400 border-t border-slate-900">
                <strong className="text-slate-300">Store Hours:</strong><br />
                Mon - Fri: 9:00 AM - 7:00 PM<br />
                Saturday: 10:00 AM - 6:00 PM<br />
                Sunday: 10:00 AM - 4:00 PM
              </div>
            </div>
          </div>

        </div>

        {/* Accepted Payment Methods Row */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <span>Accepted Payment Methods:</span>
            <div className="flex flex-wrap items-center gap-2 text-[10px] font-bold text-slate-300">
              <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800">Visa</span>
              <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800">Mastercard</span>
              <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800">American Express</span>
              <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800">Discover</span>
              <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800">Apple Pay</span>
              <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800">PayPal</span>
              <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800">Cash / Debit</span>
            </div>
          </div>

          <div className="text-[11px] text-slate-500">
            © {new Date().getFullYear()} Digital Doctor Repairs. All rights reserved.
          </div>
        </div>

      </div>
    </footer>
  );
};
