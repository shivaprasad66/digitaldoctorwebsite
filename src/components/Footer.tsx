import React from 'react';
import { 
  Phone, 
  MapPin, 
  Mail, 
  Clock, 
  ShieldCheck,
  CheckCircle2
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
    <footer className="bg-[#f6f7f8] border-t border-[#e8eaee] text-[#5a5e69] text-xs">
      
      {/* Top Value Banner */}
      <div className="border-b border-[#e8eaee] py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-center">
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#1382e8]/10 border border-[#1382e8]/20 flex items-center justify-center text-[#1382e8] shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-[#0c0d10] text-sm">45-Minute Repairs</div>
                <div className="text-[#5a5e69] text-[11px]">Same-day turnaround on most devices</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600 shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-[#0c0d10] text-sm">60-Day Warranty</div>
                <div className="text-[#5a5e69] text-[11px]">Certified parts & labor included</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#1382e8]/10 border border-[#1382e8]/20 flex items-center justify-center text-[#1382e8] shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-[#0c0d10] text-sm">Mobile Van Service</div>
                <div className="text-[#5a5e69] text-[11px]">We come directly to your home or office</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#0c0d10]/5 border border-[#e8eaee] flex items-center justify-center text-[#0c0d10] shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-[#0c0d10] text-sm">Direct Tech Line</div>
                <a href="tel:6099943235" className="text-[#1382e8] hover:underline text-[11px] font-semibold">(609) 994-3235</a>
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
                className="w-10 h-10 object-contain rounded-xl bg-white p-1 border border-[#e8eaee]"
              />
              <div>
                <span className="text-base font-bold text-[#0c0d10] tracking-tight font-heading">
                  DIGITAL DOCTOR REPAIRS
                </span>
                <span className="text-[10px] text-[#1382e8] font-bold block uppercase tracking-widest">
                  We Bring Your Device Back To Life
                </span>
              </div>
            </div>

            <p className="text-[#5a5e69] text-xs leading-relaxed max-w-sm">
              Ocean County’s premier certified electronics triage and micro-soldering facility. Serving Manahawkin, Stafford Township, Long Beach Island, Barnegat, and mail-in clients nationwide.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-2.5 pt-1">
              <a
                href="https://www.youtube.com/channel/UCta8FWxM474irDMPABq2o4Q"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white hover:bg-[#f6f7f8] border border-[#e8eaee] hover:border-[#0c0d10] flex items-center justify-center text-[#5a5e69] hover:text-[#0c0d10] transition-colors"
                title="YouTube Channel"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white hover:bg-[#f6f7f8] border border-[#e8eaee] hover:border-[#0c0d10] flex items-center justify-center text-[#5a5e69] hover:text-[#0c0d10] transition-colors"
                title="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white hover:bg-[#f6f7f8] border border-[#e8eaee] hover:border-[#0c0d10] flex items-center justify-center text-[#5a5e69] hover:text-[#0c0d10] transition-colors"
                title="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Services */}
          <div>
            <h4 className="text-[#0c0d10] font-bold text-xs uppercase tracking-wider mb-4 font-heading">
              Repair Services
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#estimator" className="hover:text-[#0c0d10] transition-colors">iPhone Screen Replacement</a></li>
              <li><a href="#estimator" className="hover:text-[#0c0d10] transition-colors">Samsung Galaxy Display Fix</a></li>
              <li><a href="#estimator" className="hover:text-[#0c0d10] transition-colors">iPad Digitizer & Glass Repair</a></li>
              <li><a href="#estimator" className="hover:text-[#0c0d10] transition-colors">PS5 & Xbox HDMI Soldering</a></li>
              <li><a href="#estimator" className="hover:text-[#0c0d10] transition-colors">MacBook Battery & Screen</a></li>
              <li><a href="#estimator" className="hover:text-[#0c0d10] transition-colors">Liquid Damage Cleaning</a></li>
              <li><a href="#mobile-unit" className="text-[#1382e8] hover:underline font-medium">Mobile Repair Van Unit &rarr;</a></li>
            </ul>
          </div>

          {/* Customer Portal */}
          <div>
            <h4 className="text-[#0c0d10] font-bold text-xs uppercase tracking-wider mb-4 font-heading">
              Customer Portal
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button onClick={onOpenQuote} className="hover:text-[#0c0d10] transition-colors text-left cursor-pointer">
                  Request Instant Quote
                </button>
              </li>
              <li>
                <button onClick={onOpenTracking} className="hover:text-[#0c0d10] transition-colors text-left cursor-pointer">
                  Track Existing Ticket
                </button>
              </li>
              <li>
                <button onClick={onOpenMailIn} className="hover:text-[#0c0d10] transition-colors text-left cursor-pointer">
                  Mail-In Packing Slip Wizard
                </button>
              </li>
              <li><a href="#shop" className="hover:text-[#0c0d10] transition-colors">Certified Device Store</a></li>
              <li><a href="#warranty" className="hover:text-[#0c0d10] transition-colors">60-Day Limited Warranty</a></li>
              <li><a href="#warranty" className="hover:text-[#0c0d10] transition-colors">Service Policies & Disclosures</a></li>
              <li><a href="#faq" className="hover:text-[#0c0d10] transition-colors">Help Center & FAQ</a></li>
            </ul>
          </div>

          {/* Location & Hours */}
          <div>
            <h4 className="text-[#0c0d10] font-bold text-xs uppercase tracking-wider mb-4 font-heading">
              Store Information
            </h4>
            <div className="space-y-3 text-xs text-[#5a5e69]">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#1382e8] shrink-0 mt-0.5" />
                <span className="text-[#0c0d10]">1636 Route 72 W<br />Manahawkin, NJ 08050</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#1382e8] shrink-0" />
                <a href="tel:6099943235" className="hover:text-[#0c0d10] font-bold text-[#0c0d10]">(609) 994-3235</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#1382e8] shrink-0" />
                <span className="truncate">info@digitaldocrepairs.com</span>
              </div>
              <div className="pt-2 text-[11px] text-[#5a5e69] border-t border-[#e8eaee]">
                <strong className="text-[#0c0d10]">Store Hours:</strong><br />
                Mon - Fri: 9:00 AM - 7:00 PM<br />
                Saturday: 10:00 AM - 6:00 PM<br />
                Sunday: 10:00 AM - 4:00 PM
              </div>
            </div>
          </div>

        </div>

        {/* Accepted Payment Methods Row */}
        <div className="mt-12 pt-8 border-t border-[#e8eaee] flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2 text-xs text-[#5a5e69]">
            <span>Accepted Payments:</span>
            <div className="flex flex-wrap items-center gap-1.5 text-[10px] font-semibold text-[#0c0d10]">
              <span className="px-2 py-0.5 rounded bg-white border border-[#e8eaee]">Visa</span>
              <span className="px-2 py-0.5 rounded bg-white border border-[#e8eaee]">Mastercard</span>
              <span className="px-2 py-0.5 rounded bg-white border border-[#e8eaee]">American Express</span>
              <span className="px-2 py-0.5 rounded bg-white border border-[#e8eaee]">Discover</span>
              <span className="px-2 py-0.5 rounded bg-white border border-[#e8eaee]">Apple Pay</span>
              <span className="px-2 py-0.5 rounded bg-white border border-[#e8eaee]">PayPal</span>
              <span className="px-2 py-0.5 rounded bg-white border border-[#e8eaee]">Cash / Debit</span>
            </div>
          </div>

          <div className="text-[11px] text-[#8a8f98]">
            © {new Date().getFullYear()} Digital Doctor Repairs. All rights reserved.
          </div>
        </div>

      </div>
    </footer>
  );
};
