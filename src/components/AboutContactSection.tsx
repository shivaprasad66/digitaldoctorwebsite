import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  Briefcase, 
  Navigation,
  Sparkles
} from 'lucide-react';

export const AboutContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: 'Repair Inquiry',
    message: ''
  });
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSent(true);
  };

  return (
    <section id="contact" className="py-16 lg:py-24 relative overflow-hidden bg-slate-900/50 border-t border-slate-800">
      
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-blue-600/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-bold border border-cyan-500/20 mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>VISIT OUR MANAHAWKIN TECH LAB</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-heading tracking-tight">
            About & Store Location
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            Digital Doctor Repairs is Ocean County’s leading tech triage facility. Conveniently located on Route 72 West in Manahawkin, NJ.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Store Details & Story (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Story Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-950 border border-slate-800 shadow-xl space-y-4">
              <h3 className="text-xl font-bold text-white font-heading">
                Bringing Your Tech Back To Life
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Founded with a mission to eliminate electronic waste and provide rapid, honest repair services, 
                <strong className="text-white"> Digital Doctor Repairs</strong> has grown into New Jersey’s premier destination for smartphone, computer, and gaming console triage.
              </p>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                From walk-in screen replacements completed in 45 minutes to our custom <span className="text-cyan-400 font-semibold">Mobile Repair Unit</span> traveling across Ocean County, our certified technicians treat every device with master craftsmanship.
              </p>

              {/* Storefront Image */}
              <div className="rounded-2xl overflow-hidden border border-slate-800 h-48 relative">
                <img
                  src="/images/shop_storefront.jpg"
                  alt="Digital Doctor Storefront in Manahawkin NJ"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                <div className="absolute bottom-3 left-3 text-xs font-bold text-white bg-slate-900/90 px-3 py-1 rounded-lg border border-slate-700">
                  📍 1636 Route 72 W, Manahawkin NJ
                </div>
              </div>
            </div>

            {/* Hours & Contacts Card */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Hours */}
              <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                <div className="flex items-center gap-2 text-cyan-400 font-bold text-xs uppercase tracking-wider">
                  <Clock className="w-4 h-4" />
                  <span>Operating Hours</span>
                </div>
                <div className="space-y-1.5 text-xs text-slate-300">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Monday - Friday:</span>
                    <span className="font-bold text-white">9:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Saturday:</span>
                    <span className="font-bold text-white">10:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Sunday:</span>
                    <span className="font-bold text-white">10:00 AM - 4:00 PM</span>
                  </div>
                </div>
              </div>

              {/* Direct Contacts */}
              <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                <div className="flex items-center gap-2 text-cyan-400 font-bold text-xs uppercase tracking-wider">
                  <Phone className="w-4 h-4" />
                  <span>Direct Contact</span>
                </div>
                <div className="space-y-2 text-xs">
                  <a
                    href="tel:6099943235"
                    className="flex items-center gap-2 text-white hover:text-cyan-400 font-bold transition-colors"
                  >
                    <span>(609) 994-3235</span>
                  </a>
                  <a
                    href="mailto:info@digitaldocrepairs.com"
                    className="flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition-colors truncate block"
                  >
                    <span>info@digitaldocrepairs.com</span>
                  </a>
                  <a
                    href="https://maps.google.com/?q=1636+Route+72+W+Manahawkin+NJ+08050"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 font-semibold"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Get Driving Directions &rarr;</span>
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Contact Message Form (6 cols) */}
          <div className="lg:col-span-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-950 border border-slate-800 shadow-xl space-y-5">
              <div>
                <h3 className="text-xl font-bold text-white font-heading">
                  Send a Direct Message
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Have a question, need a custom micro-soldering quote, or interested in tech career opportunities?
                </p>
              </div>

              {isSent ? (
                <div className="text-center py-10 space-y-3">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="text-lg font-bold text-white font-heading">Message Dispatched!</h4>
                  <p className="text-xs text-slate-300 max-w-xs mx-auto">
                    Thank you! Our Manahawkin team will reply by email or call you within 1 business hour.
                  </p>
                  <button
                    onClick={() => {
                      setIsSent(false);
                      setFormData({ firstName: '', lastName: '', email: '', phone: '', subject: 'Repair Inquiry', message: '' });
                    }}
                    className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs text-cyan-400 font-semibold"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-slate-300 font-semibold mb-1">First Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        placeholder="John"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-300 font-semibold mb-1">Last Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        placeholder="Doe"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-slate-300 font-semibold mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-300 font-semibold mb-1">Phone Number</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(609) 000-0000"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-300 font-semibold mb-1">Subject</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-cyan-500 cursor-pointer"
                    >
                      <option value="Repair Inquiry">Repair Inquiry / Quote Question</option>
                      <option value="Mobile Van Booking">Mobile Repair Van Appointment</option>
                      <option value="Mail-In Question">Mail-In Service Assistance</option>
                      <option value="Careers Application">Careers & Technician Job Application</option>
                      <option value="Store Purchase">Store Item Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-slate-300 font-semibold mb-1">Write Your Message *</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your device issue, timeline, or job background..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl font-bold text-xs text-slate-950 bg-gradient-to-r from-cyan-400 to-cyan-300 hover:from-cyan-300 hover:to-white shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2 cursor-pointer transition-all"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message to Digital Doctor</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
