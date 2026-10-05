import React, { useState } from 'react';
import { RepairQuote } from '../types';
import { 
  X, 
  CheckCircle2, 
  Calendar, 
  Clock, 
  ShieldCheck, 
  Store, 
  Truck, 
  Mail, 
  ArrowRight,
  Phone,
  User,
  MapPin
} from 'lucide-react';

interface InstantQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  quote: RepairQuote | null;
}

export const InstantQuoteModal: React.FC<InstantQuoteModalProps> = ({
  isOpen,
  onClose,
  quote
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('Morning (10 AM - 1 PM)');
  const [streetAddress, setStreetAddress] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newId = `DDR-${Math.floor(1000 + Math.random() * 9000)}`;
    setTicketId(newId);
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-xl rounded-2xl bg-slate-900 border border-slate-700 shadow-2xl p-6 sm:p-8 max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-950 text-slate-400 hover:text-white border border-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="text-center max-w-md mx-auto mb-6">
              <span className="inline-block px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-bold border border-cyan-500/20 mb-2">
                RESERVATION CONFIRMATION
              </span>
              <h3 className="text-2xl font-black text-white font-heading">
                Lock In Your Upfront Quote
              </h3>
              <p className="text-xs text-slate-300 mt-1">
                Zero payment required right now. Parts reserved for your appointment.
              </p>
            </div>

            {/* Quote details box */}
            {quote && (
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2 mb-6 text-xs">
                <div className="flex justify-between items-center text-slate-400">
                  <span>Device & Issue:</span>
                  <span className="font-bold text-white text-right">{quote.model} • {quote.issueName}</span>
                </div>
                <div className="flex justify-between items-center text-slate-400">
                  <span>Service Option:</span>
                  <span className="font-semibold text-cyan-400 capitalize">
                    {quote.serviceMode === 'in-store' ? '🏬 In-Store Walk-In' : quote.serviceMode === 'mobile-van' ? '🚐 Mobile Van Unit' : '📦 Mail-In Service'}
                  </span>
                </div>
                <div className="flex justify-between items-center text-slate-400">
                  <span>Estimated Total:</span>
                  <span className="text-base font-black text-cyan-400 font-heading">${quote.estimatedCost}</span>
                </div>
              </div>
            )}

            {/* Booking Form */}
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Alex Johnson"
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Cell Phone (For confirmation) *</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(609) 000-0000"
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="alex@example.com"
                  className="w-full px-3 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                />
              </div>

              {quote?.serviceMode === 'mobile-van' && (
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Service Street Address (For Mobile Van) *</label>
                  <input
                    type="text"
                    required
                    value={streetAddress}
                    onChange={(e) => setStreetAddress(e.target.value)}
                    placeholder="123 Ocean Blvd, Manahawkin NJ / LBI / Stafford"
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                  />
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Preferred Date *</label>
                  <input
                    type="date"
                    required
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-cyan-500"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Preferred Time Window *</label>
                  <select
                    value={preferredTime}
                    onChange={(e) => setPreferredTime(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-cyan-500 cursor-pointer"
                  >
                    <option value="Morning (10 AM - 1 PM)">Morning (10 AM - 1 PM)</option>
                    <option value="Afternoon (1 PM - 4 PM)">Afternoon (1 PM - 4 PM)</option>
                    <option value="Late Afternoon (4 PM - 7 PM)">Late Afternoon (4 PM - 7 PM)</option>
                  </select>
                </div>
              </div>

              <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800 text-[11px] text-slate-400 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>No cancellation fees. Pay only when your device is fixed and fully tested.</span>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl font-bold text-xs text-slate-950 bg-gradient-to-r from-cyan-400 to-cyan-300 hover:from-cyan-300 hover:to-white shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Confirm Reservation & Hold Parts</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500 text-emerald-400 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-black text-white font-heading">
              Repair Booked Successfully!
            </h3>

            <p className="text-xs text-slate-300 max-w-sm mx-auto">
              Your appointment is locked in with reference ticket ID:
            </p>

            <div className="inline-block p-3 px-6 rounded-xl bg-slate-950 border border-cyan-500/40">
              <span className="text-xs text-slate-400 block">Ticket Reservation Number</span>
              <span className="font-mono text-xl font-black text-cyan-400 tracking-wider">#{ticketId}</span>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-left text-xs text-slate-300 space-y-2 max-w-md mx-auto">
              <div><strong>Customer:</strong> {name} ({phone})</div>
              <div><strong>Device:</strong> {quote?.model}</div>
              <div><strong>Scheduled For:</strong> {preferredDate || 'Earliest Available'} ({preferredTime})</div>
              <div><strong>Location:</strong> {quote?.serviceMode === 'mobile-van' ? streetAddress || 'Your Address' : '1636 Route 72 W, Manahawkin NJ'}</div>
              <div className="text-emerald-400"><strong>Warranty:</strong> 60-Day Shop Guarantee Included</div>
            </div>

            <div className="flex gap-2 justify-center pt-2">
              <a
                href="tel:6099943235"
                className="px-4 py-2 rounded-xl bg-slate-950 border border-slate-700 text-xs text-cyan-400 font-semibold flex items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5" />
                Call (609) 994-3235
              </a>
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-2 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-xs"
              >
                Done
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
