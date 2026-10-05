import React, { useState } from 'react';
import { DEMO_TRACKING_TICKETS } from '../data/repairData';
import { TrackingTicket } from '../types';
import { 
  X, 
  Search, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  Phone
} from 'lucide-react';

interface TrackingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTicketId?: string;
}

export const TrackingModal: React.FC<TrackingModalProps> = ({
  isOpen,
  onClose,
  initialTicketId = 'DDR-8429'
}) => {
  const [ticketInput, setTicketInput] = useState(initialTicketId);
  const [searchedTicket, setSearchedTicket] = useState<TrackingTicket | null>(
    DEMO_TRACKING_TICKETS[initialTicketId] || DEMO_TRACKING_TICKETS['DDR-8429']
  );

  if (!isOpen) return null;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanId = ticketInput.trim().toUpperCase();
    if (DEMO_TRACKING_TICKETS[cleanId]) {
      setSearchedTicket(DEMO_TRACKING_TICKETS[cleanId]);
    } else {
      setSearchedTicket({
        ticketId: cleanId,
        customerName: 'Valued Customer',
        device: 'Customer Registered Device',
        issue: 'Diagnostics & Component Restoration',
        serviceType: 'In-Store Express',
        currentStep: 3,
        status: 'In Progress • Bench Testing',
        statusDate: 'Updated 20 mins ago',
        estimatedCompletion: 'Ready Today by 5:30 PM',
        technician: 'Lead Specialist Dave',
        steps: [
          { title: 'Device Checked In & Disinfected', description: 'Intake inspection logged, physical condition recorded.', completed: true, current: false, timestamp: '11:00 AM' },
          { title: 'Diagnostic Bench Inspection', description: 'Voltage rails tested, component fault isolated.', completed: true, current: false, timestamp: '11:45 AM' },
          { title: 'OEM Parts Allocated & Staged', description: 'Certified components matched & pre-tested.', completed: true, current: true, timestamp: '1:15 PM' },
          { title: 'Hardware Repair in Progress', description: 'Precision installation and seal renewal underway.', completed: false, current: false },
          { title: '18-Point Quality Control & Bench Test', description: 'Full hardware validation, display calibration, stress test.', completed: false, current: false },
          { title: 'Ready for Customer Pickup / Shipped', description: 'Protected in ESD sleeve with 60-day warranty card.', completed: false, current: false }
        ],
        notes: 'Device is progressing through our standard quality assurance protocol.',
        warrantyEnds: '60 Days from completion'
      });
    }
  };

  const loadPreset = (id: string) => {
    setTicketInput(id);
    setSearchedTicket(DEMO_TRACKING_TICKETS[id]);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/40 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl rounded-2xl bg-white border border-[#e8eaee] shadow-2xl p-6 sm:p-8 max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-[#f6f7f8] text-[#5a5e69] hover:text-[#0c0d10] border border-[#e8eaee] transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="text-center max-w-md mx-auto mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1382e8]/10 text-[#1382e8] text-xs font-bold border border-[#1382e8]/20 mb-2">
            <Search className="w-3.5 h-3.5" />
            <span>REAL-TIME REPAIR TRACKER</span>
          </div>
          <h2 className="text-2xl font-bold text-[#0c0d10] font-heading">
            Track Device Status
          </h2>
          <p className="text-xs text-[#5a5e69] mt-1">
            Enter your Ticket ID (e.g. DDR-8429) to see live technician bench progress.
          </p>
        </div>

        {/* Search input & Demo Pills */}
        <form onSubmit={handleSearch} className="mb-6">
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-[#8a8f98] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={ticketInput}
                onChange={(e) => setTicketInput(e.target.value)}
                placeholder="Enter Ticket ID (e.g. DDR-8429)"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#f6f7f8] border border-[#e8eaee] text-sm text-[#0c0d10] placeholder-[#8a8f98] focus:outline-none focus:border-[#1382e8] font-mono font-bold"
              />
            </div>
            <button
              type="submit"
              className="px-5 py-2.5 rounded-xl font-bold text-xs text-white bg-[#0c0d10] hover:bg-black transition-all cursor-pointer"
            >
              Track
            </button>
          </div>

          {/* Quick Demo Sample Tickets */}
          <div className="flex flex-wrap items-center gap-2 mt-3 text-xs text-[#5a5e69]">
            <span className="text-[11px]">Quick Samples:</span>
            <button
              type="button"
              onClick={() => loadPreset('DDR-8429')}
              className="px-2.5 py-1 rounded-lg bg-[#f6f7f8] hover:bg-slate-100 border border-[#e8eaee] text-[11px] text-[#0c0d10] font-mono cursor-pointer"
            >
              DDR-8429 (iPhone)
            </button>
            <button
              type="button"
              onClick={() => loadPreset('DDR-9104')}
              className="px-2.5 py-1 rounded-lg bg-[#f6f7f8] hover:bg-slate-100 border border-[#e8eaee] text-[11px] text-[#0c0d10] font-mono cursor-pointer"
            >
              DDR-9104 (PS5)
            </button>
            <button
              type="button"
              onClick={() => loadPreset('DDR-7321')}
              className="px-2.5 py-1 rounded-lg bg-[#f6f7f8] hover:bg-slate-100 border border-[#e8eaee] text-[11px] text-[#0c0d10] font-mono cursor-pointer"
            >
              DDR-7321 (iPad)
            </button>
          </div>
        </form>

        {/* Live Ticket Card */}
        {searchedTicket && (
          <div className="space-y-6">
            
            {/* Top Ticket Status Header */}
            <div className="p-4 rounded-xl bg-[#f6f7f8] border border-[#e8eaee] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-sm font-bold text-[#1382e8]">
                    #{searchedTicket.ticketId}
                  </span>
                  <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-white border border-[#e8eaee] text-[#0c0d10]">
                    {searchedTicket.serviceType}
                  </span>
                </div>
                <h4 className="text-base font-bold text-[#0c0d10] mt-1">{searchedTicket.device}</h4>
                <div className="text-xs text-[#5a5e69] mt-0.5">{searchedTicket.issue}</div>
              </div>

              <div className="sm:text-right">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#1382e8]/10 text-[#1382e8] border border-[#1382e8]/20">
                  <span className="w-2 h-2 rounded-full bg-[#1382e8] animate-ping"></span>
                  {searchedTicket.status}
                </span>
                <div className="text-[11px] text-[#5a5e69] mt-1.5 flex items-center sm:justify-end gap-1">
                  <Clock className="w-3 h-3 text-[#1382e8]" />
                  <span>Est: {searchedTicket.estimatedCompletion}</span>
                </div>
              </div>
            </div>

            {/* Stepper Timeline */}
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#5a5e69] block">
                Bench Progress Timeline
              </span>

              <div className="relative pl-6 space-y-4 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-[#e8eaee]">
                {searchedTicket.steps.map((st, idx) => (
                  <div key={idx} className="relative group">
                    {/* Circle icon on timeline */}
                    <div className={`absolute -left-6 top-0.5 w-4 h-4 rounded-full flex items-center justify-center border ${
                      st.completed
                        ? 'bg-emerald-600 border-emerald-600 text-white'
                        : st.current
                        ? 'bg-[#1382e8] border-[#1382e8] animate-pulse'
                        : 'bg-[#f6f7f8] border-[#e8eaee]'
                    }`}>
                      {st.completed && <CheckCircle2 className="w-3 h-3 text-white" />}
                    </div>

                    <div className="text-xs">
                      <div className="flex items-center justify-between">
                        <span className={`font-bold ${st.completed ? 'text-[#0c0d10]' : st.current ? 'text-[#1382e8]' : 'text-[#8a8f98]'}`}>
                          {st.title}
                        </span>
                        {st.timestamp && (
                          <span className="text-[10px] text-[#8a8f98] font-mono">{st.timestamp}</span>
                        )}
                      </div>
                      <p className={`text-[11px] mt-0.5 ${st.completed || st.current ? 'text-[#5a5e69]' : 'text-[#8a8f98]'}`}>
                        {st.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technician notes & Contact */}
            <div className="p-4 rounded-xl bg-[#f6f7f8] border border-[#e8eaee] space-y-2 text-xs">
              <div className="flex items-center justify-between text-[#5a5e69]">
                <span>Assigned Technician: <strong className="text-[#0c0d10]">{searchedTicket.technician}</strong></span>
                <span className="flex items-center gap-1 text-emerald-600 font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  60-Day Warranty Active
                </span>
              </div>
              {searchedTicket.notes && (
                <p className="text-[11px] text-[#0c0d10] bg-white p-2.5 rounded-lg border border-[#e8eaee]">
                  <strong className="text-[#1382e8]">Tech Notes:</strong> {searchedTicket.notes}
                </p>
              )}
            </div>

            {/* Action button */}
            <div className="pt-2 flex items-center justify-between gap-3">
              <a
                href="tel:6099943235"
                className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white hover:bg-[#f6f7f8] border border-[#e8eaee] text-xs font-semibold text-[#0c0d10]"
              >
                <Phone className="w-3.5 h-3.5 text-[#1382e8]" />
                <span>Call Technician: (609) 994-3235</span>
              </a>

              <button
                type="button"
                onClick={onClose}
                className="px-6 py-2.5 rounded-xl font-bold text-xs text-white bg-[#0c0d10] hover:bg-black cursor-pointer"
              >
                Close Tracker
              </button>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
