import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  Navigation,
  MessageSquare,
  ShieldCheck,
  Wrench
} from 'lucide-react';

export const AboutContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    topic: 'Device Repair Inquiry',
    message: ''
  });
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSent(true);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative overflow-hidden bg-slate-950 border-t border-slate-900">
      
      {/* Background ambient texture */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-600/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial Eyebrow & Title (Makcliff Style) */}
        <div className="max-w-3xl mb-16">
          <span className="eyebrow mb-3">
            <span className="inline-block h-px w-8 bg-cyan-400/60" aria-hidden="true"></span>
            Contact & Lab — Manahawkin, NJ
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading tracking-tight leading-tight">
            Let's talk about your repair
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-2.5 max-w-2xl leading-relaxed">
            Whether you have a cracked iPhone screen, an Xbox with damaged HDMI pins, or need our Mobile Repair Unit dispatched to your driveway — we'd like to hear from you.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: What Happens Next & Store Details (5 cols - Sticky) */}
          <div className="lg:col-span-5 space-y-10 lg:sticky lg:top-28">
            
            {/* What Happens Next Timeline (Direct Makcliff Pattern) */}
            <div className="space-y-6">
              <h3 className="text-xs font-mono uppercase tracking-widest text-slate-400 border-b border-slate-800 pb-2.5 font-bold">
                What happens next
              </h3>

              <ol className="relative space-y-7 pl-6 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-px before:bg-slate-800">
                
                <li className="relative flex gap-4">
                  <span className="absolute -left-6 top-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-cyan-500/40 bg-slate-900 text-cyan-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                  </span>
                  <div className="space-y-0.5">
                    <div className="text-xs font-semibold text-white flex items-baseline gap-2">
                      <span className="font-mono text-[11px] text-cyan-400 tabular font-bold">01</span>
                      <span>Upfront Diagnostic & Quote</span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      A real technician inspects your device. No hidden fees — you approve all pricing first.
                    </p>
                  </div>
                </li>

                <li className="relative flex gap-4">
                  <span className="absolute -left-6 top-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-cyan-500/40 bg-slate-900 text-cyan-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                  </span>
                  <div className="space-y-0.5">
                    <div className="text-xs font-semibold text-white flex items-baseline gap-2">
                      <span className="font-mono text-[11px] text-cyan-400 tabular font-bold">02</span>
                      <span>Same-Day Precision Triage</span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Most standard screen and battery repairs are finished in 45 to 60 minutes while you relax in our lounge.
                    </p>
                  </div>
                </li>

                <li className="relative flex gap-4">
                  <span className="absolute -left-6 top-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-cyan-500/40 bg-slate-900 text-cyan-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                  </span>
                  <div className="space-y-0.5">
                    <div className="text-xs font-semibold text-white flex items-baseline gap-2">
                      <span className="font-mono text-[11px] text-cyan-400 tabular font-bold">03</span>
                      <span>60-Day Limited Warranty</span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Every repair is bench-tested and backed by our comprehensive 60-day parts & labor guarantee.
                    </p>
                  </div>
                </li>

              </ol>
            </div>

            {/* Storefront & Hours Card */}
            <div className="p-6 rounded-2xl surface-card border border-slate-800 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <span className="text-xs font-mono text-cyan-400 uppercase font-bold">
                  Store Location
                </span>
                <span className="text-[11px] text-emerald-400 font-semibold flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  Open Today
                </span>
              </div>

              <div className="space-y-3 text-xs text-slate-300">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Digital Doctor Repairs</strong><br />
                    1636 Route 72 W (NJ-72)<br />
                    Manahawkin, NJ 08050
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                  <a href="tel:6099943235" className="hover:text-cyan-400 font-bold text-white transition-colors">
                    (609) 994-3235
                  </a>
                </div>

                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span className="text-slate-400">info@digitaldocrepairs.com</span>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800/80 text-[11px] text-slate-400 space-y-1">
                <div className="font-semibold text-slate-200">Operating Hours:</div>
                <div className="flex justify-between"><span>Mon - Fri:</span><span className="text-white">9:00 AM - 7:00 PM</span></div>
                <div className="flex justify-between"><span>Saturday:</span><span className="text-white">10:00 AM - 6:00 PM</span></div>
                <div className="flex justify-between"><span>Sunday:</span><span className="text-white">10:00 AM - 4:00 PM</span></div>
              </div>

              <a
                href="https://maps.google.com/?q=1636+Route+72+W+Manahawkin+NJ+08050"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full mt-2 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-semibold text-cyan-400 text-center flex items-center justify-center gap-1.5 transition-colors"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Open in Google Maps &rarr;</span>
              </a>
            </div>

          </div>

          {/* Right Column: Clean Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl surface-card p-6 sm:p-10 border border-slate-800 shadow-xl space-y-6">
              
              <div className="pb-4 border-b border-slate-800">
                <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 block font-bold">
                  Direct Inquiries
                </span>
                <h3 className="text-xl font-bold text-white font-heading mt-0.5">
                  Send a message to our technician desk
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  A technician reads every submission — no bots, no automated ticket queues.
                </p>
              </div>

              {isSent ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="text-xl font-bold text-white font-heading">Message Received</h4>
                  <p className="text-xs text-slate-300 max-w-sm mx-auto leading-relaxed">
                    Thank you, {formData.name || 'there'}! Dave or Ryan will review your notes and respond by phone or email within 1–2 business hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setIsSent(false);
                      setFormData({ name: '', email: '', phone: '', topic: 'Device Repair Inquiry', message: '' });
                    }}
                    className="px-5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs text-cyan-400 font-semibold hover:bg-slate-800 cursor-pointer"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  
                  <div>
                    <label className="block text-slate-300 font-semibold mb-1.5">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Marcus Miller"
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-slate-300 font-semibold mb-1.5">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="marcus@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-300 font-semibold mb-1.5">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(609) 000-0000"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-300 font-semibold mb-1.5">Inquiry Topic</label>
                    <select
                      value={formData.topic}
                      onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-white focus:outline-none focus:border-cyan-500 cursor-pointer"
                    >
                      <option value="Device Repair Inquiry">Device Repair Inquiry (Phone, Tablet, Laptop, Console)</option>
                      <option value="Mobile Van Booking">Book Mobile Van Unit to Your Location</option>
                      <option value="Mail-In Service Question">Mail-In Repair Question / Status</option>
                      <option value="Micro-Soldering / Board Level">Micro-Soldering & HDMI Port Triage</option>
                      <option value="Store Pre-Owned Item">Store Pre-Owned Inventory Question</option>
                      <option value="Careers at Digital Doctor">Technician Career Application</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-slate-300 font-semibold mb-1.5">Device Model & Problem Description *</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your device, symptoms (e.g. no video on PS5, screen black after drop), and any timeline preferences..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl font-bold text-xs sm:text-sm text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-cyan-500/20"
                    >
                      <Send className="w-4 h-4 text-slate-950" />
                      <span>Send Direct Message to Technicians</span>
                    </button>
                    <p className="text-[11px] text-slate-500 text-center mt-2.5">
                      We respect your privacy. No spam, ever.
                    </p>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
