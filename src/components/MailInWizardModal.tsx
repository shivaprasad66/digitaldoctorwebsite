import React, { useState } from 'react';
import { 
  X, 
  Mail, 
  Printer, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Package, 
  AlertTriangle,
  Smartphone,
  Copy,
  Check
} from 'lucide-react';

interface MailInWizardModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MailInWizardModal: React.FC<MailInWizardModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [copied, setCopied] = useState(false);

  // Form State
  const [deviceModel, setDeviceModel] = useState('');
  const [serialOrImei, setSerialOrImei] = useState('');
  const [passcode, setPasscode] = useState('');
  const [symptoms, setSymptoms] = useState('');
  const [serviceSpeed, setServiceSpeed] = useState<'standard' | 'expedited'>('standard');
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [shippingAddress, setShippingAddress] = useState('');
  const [generatedTicketId, setGeneratedTicketId] = useState('');

  if (!isOpen) return null;

  const handleSubmitStep2 = (e: React.FormEvent) => {
    e.preventDefault();
    const newId = `DDR-MAIL-${Math.floor(1000 + Math.random() * 9000)}`;
    setGeneratedTicketId(newId);
    setStep(3);
  };

  const handlePrint = () => {
    window.print();
  };

  const copyAddress = () => {
    navigator.clipboard.writeText('Digital Doctor Repairs\n1636 Route 72 W\nManahawkin, NJ 08050\nAttn: Mail-In Service Dept');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/85 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl rounded-2xl bg-slate-900 border border-slate-700 shadow-2xl p-6 sm:p-8 max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="no-print absolute top-4 right-4 p-2 rounded-full bg-slate-950/80 text-slate-400 hover:text-white border border-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="no-print text-center max-w-md mx-auto mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-bold border border-cyan-500/20 mb-2">
            <Mail className="w-3.5 h-3.5" />
            <span>NATIONWIDE MAIL-IN SERVICE PORTAL</span>
          </div>
          <h2 className="text-2xl font-black text-white font-heading">
            Ship Your Device for Expert Triage
          </h2>
          <p className="text-xs text-slate-300 mt-1">
            Follow our 3-step workflow. Print your packing slip, mail securely, and pay only once your device is repaired.
          </p>

          {/* Stepper indicator */}
          <div className="flex items-center justify-center gap-2 mt-4">
            <span className={`w-8 h-1.5 rounded-full ${step >= 1 ? 'bg-cyan-500' : 'bg-slate-800'}`}></span>
            <span className={`w-8 h-1.5 rounded-full ${step >= 2 ? 'bg-cyan-500' : 'bg-slate-800'}`}></span>
            <span className={`w-8 h-1.5 rounded-full ${step >= 3 ? 'bg-cyan-500' : 'bg-slate-800'}`}></span>
          </div>
        </div>

        {/* STEP 1: Device Information */}
        {step === 1 && (
          <div className="space-y-4">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-cyan-500 text-slate-950 font-black text-xs flex items-center justify-center">1</span>
              <span>Device Information & Symptoms</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div>
                <label className="block text-slate-300 font-semibold mb-1">Device Make & Model *</label>
                <input
                  type="text"
                  required
                  value={deviceModel}
                  onChange={(e) => setDeviceModel(e.target.value)}
                  placeholder="e.g. iPad Air 4th Gen, iPhone 14 Pro, PS5"
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Serial Number or IMEI (Optional)</label>
                <input
                  type="text"
                  value={serialOrImei}
                  onChange={(e) => setSerialOrImei(e.target.value)}
                  placeholder="Found on SIM tray or back casing"
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                />
              </div>
            </div>

            <div className="text-xs">
              <label className="block text-slate-300 font-semibold mb-1">Screen Passcode / Pattern (For post-repair testing)</label>
              <input
                type="text"
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                placeholder="e.g. 1234 or None / Wiped"
                className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
              />
              <span className="text-[10px] text-slate-400 mt-1 block">
                Required so our technicians can run the 18-point touch, speaker, and camera bench test.
              </span>
            </div>

            <div className="text-xs">
              <label className="block text-slate-300 font-semibold mb-1">Detailed Symptoms / Problem *</label>
              <textarea
                required
                rows={3}
                value={symptoms}
                onChange={(e) => setSymptoms(e.target.value)}
                placeholder="Describe what happened: e.g. Dropped, no display but vibrates, bent HDMI pins, water exposure..."
                className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
              />
            </div>

            {/* Turnaround speed selector */}
            <div className="text-xs space-y-2">
              <label className="block text-slate-300 font-semibold">Service Turnaround Preference</label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setServiceSpeed('standard')}
                  className={`p-3 rounded-xl border text-left cursor-pointer transition-all ${
                    serviceSpeed === 'standard'
                      ? 'bg-cyan-950/70 border-cyan-500 text-white'
                      : 'bg-slate-950 border-slate-800 text-slate-300'
                  }`}
                >
                  <div className="font-bold">Standard Service</div>
                  <div className="text-[11px] text-slate-400">Regular queue (2-5 business days upon arrival)</div>
                </button>
                <button
                  type="button"
                  onClick={() => setServiceSpeed('expedited')}
                  className={`p-3 rounded-xl border text-left cursor-pointer transition-all ${
                    serviceSpeed === 'expedited'
                      ? 'bg-cyan-950/70 border-cyan-500 text-white'
                      : 'bg-slate-950 border-slate-800 text-slate-300'
                  }`}
                >
                  <div className="font-bold text-cyan-400">Expedited VIP Triage</div>
                  <div className="text-[11px] text-slate-400">Jump-the-line triage (1-2 business days)</div>
                </button>
              </div>
            </div>

            <button
              type="button"
              disabled={!deviceModel.trim() || !symptoms.trim()}
              onClick={() => setStep(2)}
              className="w-full mt-4 py-3 rounded-xl font-bold text-xs text-slate-950 bg-gradient-to-r from-cyan-400 to-cyan-300 hover:from-cyan-300 hover:to-white shadow-md shadow-cyan-500/20 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Next: Customer & Return Shipping Info</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* STEP 2: Customer Contact & Address */}
        {step === 2 && (
          <form onSubmit={handleSubmitStep2} className="space-y-4">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-cyan-500 text-slate-950 font-black text-xs flex items-center justify-center">2</span>
              <span>Contact & Return Shipping Address</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div>
                <label className="block text-slate-300 font-semibold mb-1">Full Name *</label>
                <input
                  type="text"
                  required
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="e.g. John Miller"
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Phone Number (For SMS updates) *</label>
                <input
                  type="tel"
                  required
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  placeholder="(555) 000-0000"
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                />
              </div>
            </div>

            <div className="text-xs">
              <label className="block text-slate-300 font-semibold mb-1">Email Address *</label>
              <input
                type="email"
                required
                value={customerEmail}
                onChange={(e) => setCustomerEmail(e.target.value)}
                placeholder="john@example.com"
                className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
              />
            </div>

            <div className="text-xs">
              <label className="block text-slate-300 font-semibold mb-1">Return Shipping Address *</label>
              <textarea
                required
                rows={2}
                value={shippingAddress}
                onChange={(e) => setShippingAddress(e.target.value)}
                placeholder="Street address, Apt/Suite, City, State, ZIP"
                className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
              />
            </div>

            {/* Diagnostic Fee Disclaimer Notice from digitaldocrepairs.com */}
            <div className="p-3.5 rounded-xl bg-amber-950/30 border border-amber-500/30 text-xs text-amber-200 space-y-1">
              <div className="flex items-center gap-1.5 font-bold text-amber-400">
                <AlertTriangle className="w-4 h-4 shrink-0" />
                <span>Diagnostic & Pricing Policy</span>
              </div>
              <p className="text-[11px] text-amber-200/90 leading-relaxed">
                We provide a comprehensive quote upon receipt. A $100 diagnosis fee applies <strong>only</strong> if you decide not to proceed with the repair after full bench inspection. If you approve the repair, the diagnostic fee is completely waived!
              </p>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="px-4 py-2.5 rounded-xl font-bold text-xs text-slate-400 hover:text-white bg-slate-950 border border-slate-800"
              >
                Back
              </button>
              <button
                type="submit"
                className="flex-1 py-3 rounded-xl font-bold text-xs text-slate-950 bg-gradient-to-r from-cyan-400 to-cyan-300 hover:from-cyan-300 hover:to-white shadow-md shadow-cyan-500/20 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Generate Printable Packing Slip</span>
                <CheckCircle2 className="w-4 h-4 text-slate-950" />
              </button>
            </div>
          </form>
        )}

        {/* STEP 3: Generated Printable Packing Slip */}
        {step === 3 && (
          <div className="space-y-5">
            <div className="no-print p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div className="text-xs">
                <span className="font-bold text-emerald-400 block">Mail-In Packing Slip Created!</span>
                <span className="text-slate-300">
                  Please print this slip (or write down your Ticket ID #{generatedTicketId}) and place it inside the shipping box with your device.
                </span>
              </div>
            </div>

            {/* Printable Document Box */}
            <div className="print-area bg-white text-slate-950 p-6 rounded-xl border border-slate-300 shadow-md font-sans">
              <div className="flex justify-between items-start border-b pb-4 mb-4">
                <div>
                  <h4 className="text-xl font-black tracking-tight">DIGITAL DOCTOR REPAIRS</h4>
                  <p className="text-xs text-slate-600">1636 Route 72 W, Manahawkin NJ 08050 • (609) 994-3235</p>
                  <p className="text-xs text-slate-600">info@digitaldocrepairs.com • www.digitaldocrepairs.com</p>
                </div>
                <div className="text-right">
                  <span className="inline-block px-3 py-1 bg-slate-100 rounded text-xs font-mono font-bold text-slate-800 border">
                    {generatedTicketId}
                  </span>
                  <div className="text-[10px] text-slate-500 mt-1">Date: {new Date().toLocaleDateString()}</div>
                </div>
              </div>

              {/* Grid of details */}
              <div className="grid grid-cols-2 gap-4 text-xs mb-4">
                <div className="bg-slate-50 p-3 rounded border border-slate-200">
                  <span className="font-bold text-slate-700 block mb-1">Sender Information:</span>
                  <div><strong>Name:</strong> {customerName || 'Customer'}</div>
                  <div><strong>Phone:</strong> {customerPhone || 'N/A'}</div>
                  <div><strong>Email:</strong> {customerEmail || 'N/A'}</div>
                  <div className="text-[11px] text-slate-600 mt-1"><strong>Ship Back To:</strong> {shippingAddress || 'N/A'}</div>
                </div>

                <div className="bg-slate-50 p-3 rounded border border-slate-200">
                  <span className="font-bold text-slate-700 block mb-1">Device Details:</span>
                  <div><strong>Model:</strong> {deviceModel}</div>
                  <div><strong>Passcode:</strong> {passcode || 'None'}</div>
                  <div><strong>Serial/IMEI:</strong> {serialOrImei || 'Not Provided'}</div>
                  <div><strong>Speed:</strong> {serviceSpeed.toUpperCase()}</div>
                </div>
              </div>

              {/* Reported Issues */}
              <div className="text-xs bg-slate-50 p-3 rounded border border-slate-200 mb-4">
                <span className="font-bold text-slate-700 block mb-1">Reported Symptoms:</span>
                <p className="text-slate-800">{symptoms}</p>
              </div>

              {/* Destination address box with barcode simulation */}
              <div className="p-3 bg-slate-100 rounded border-2 border-dashed border-slate-400 text-xs">
                <span className="font-bold text-slate-800 block mb-1">Ship Package To:</span>
                <div className="font-mono text-sm font-bold text-slate-950">
                  DIGITAL DOCTOR REPAIRS<br />
                  Attn: Mail-In Service Dept ({generatedTicketId})<br />
                  1636 Route 72 W<br />
                  Manahawkin, NJ 08050
                </div>
                <div className="text-[10px] text-slate-500 mt-2">
                  * Recommended: Ship via USPS Priority, UPS, or FedEx with tracking & insurance.
                </div>
              </div>

              {/* Simulated barcode */}
              <div className="mt-4 pt-3 border-t flex flex-col items-center">
                <div className="font-mono tracking-widest text-lg font-bold">
                  ||| | ||||| |||| || |||||| | |||| |||
                </div>
                <div className="text-[9px] text-slate-500 tracking-wider">*{generatedTicketId}*</div>
              </div>
            </div>

            {/* Actions: Print and Copy Address */}
            <div className="no-print flex flex-col sm:flex-row gap-3 pt-2">
              <button
                type="button"
                onClick={handlePrint}
                className="flex-1 py-3 rounded-xl font-bold text-xs text-white bg-slate-800 hover:bg-slate-700 border border-slate-600 flex items-center justify-center gap-2 cursor-pointer shadow"
              >
                <Printer className="w-4 h-4 text-cyan-400" />
                <span>Print Packing Slip (PDF)</span>
              </button>

              <button
                type="button"
                onClick={copyAddress}
                className="py-3 px-5 rounded-xl font-bold text-xs text-slate-300 bg-slate-950 hover:bg-slate-900 border border-slate-800 flex items-center justify-center gap-2 cursor-pointer"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-cyan-400" />}
                <span>{copied ? 'Address Copied!' : 'Copy Shipping Address'}</span>
              </button>

              <button
                type="button"
                onClick={onClose}
                className="py-3 px-6 rounded-xl font-black text-xs text-slate-950 bg-cyan-400 hover:bg-cyan-300 cursor-pointer"
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
