import React, { useState } from 'react';
import { 
  REPAIR_CATEGORIES, 
  REPAIR_MODELS, 
  REPAIR_ISSUES 
} from '../data/repairData';
import { RepairQuote } from '../types';
import { 
  Wrench, 
  Smartphone, 
  Tablet, 
  Laptop, 
  Gamepad2, 
  Cpu, 
  Watch, 
  CheckCircle, 
  ShieldCheck, 
  Clock, 
  Truck, 
  Store, 
  Mail, 
  Check,
  AlertCircle
} from 'lucide-react';

interface RepairEstimatorSectionProps {
  initialCategoryId?: string;
  onBookQuote: (quote: RepairQuote) => void;
}

export const RepairEstimatorSection: React.FC<RepairEstimatorSectionProps> = ({
  initialCategoryId = 'phones',
  onBookQuote
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategoryId);
  const [selectedModelId, setSelectedModelId] = useState<string>('ip-15p');
  const [selectedIssueId, setSelectedIssueId] = useState<string>('screen-replacement');
  const [serviceMode, setServiceMode] = useState<'in-store' | 'mobile-van' | 'mail-in'>('in-store');
  const [isDataImportant, setIsDataImportant] = useState<boolean>(true);
  const [customerNotes, setCustomerNotes] = useState<string>('');

  // Icon mapping
  const categoryIcons: Record<string, React.ReactNode> = {
    phones: <Smartphone className="w-5 h-5" />,
    tablets: <Tablet className="w-5 h-5" />,
    laptops: <Laptop className="w-5 h-5" />,
    consoles: <Gamepad2 className="w-5 h-5" />,
    microsoldering: <Cpu className="w-5 h-5" />,
    smartwatches: <Watch className="w-5 h-5" />
  };

  // Available models for selected category
  const availableModels = REPAIR_MODELS[selectedCategory] || [];
  const currentModel = availableModels.find(m => m.id === selectedModelId) || availableModels[0];
  const currentIssue = REPAIR_ISSUES.find(i => i.id === selectedIssueId) || REPAIR_ISSUES[0];

  // Dynamic price calculation
  const calculatePrice = () => {
    let price = currentIssue?.basePrice || 89;
    
    // Model tier adjustment
    if (currentModel) {
      if (currentModel.name.includes('Pro Max') || currentModel.name.includes('Ultra')) {
        price += 40;
      } else if (currentModel.name.includes('Pro') || currentModel.name.includes('Plus')) {
        price += 25;
      } else if (currentModel.name.includes('PS5') || currentModel.name.includes('Xbox Series X')) {
        price += 20;
      } else if (currentModel.name.includes('MacBook') || currentModel.name.includes('Spectre')) {
        price += 50;
      }
    }

    // Service mode surcharge
    if (serviceMode === 'mobile-van') {
      price += 25; // Mobile van convenience dispatch fee
    }

    return price;
  };

  const estimatedPrice = calculatePrice();
  const estimatedTime = serviceMode === 'mobile-van' 
    ? 'Same-Day at your location (45-60 mins)'
    : serviceMode === 'in-store'
    ? 'Same-Day Walk-In (30-60 mins)'
    : 'Mail-In (Expedited 1-3 days / Standard 2-5 days)';

  const handleCategoryChange = (catId: string) => {
    setSelectedCategory(catId);
    const newModels = REPAIR_MODELS[catId] || [];
    if (newModels.length > 0) {
      setSelectedModelId(newModels[0].id);
    }
  };

  const handleProceedToBooking = () => {
    const currentCat = REPAIR_CATEGORIES.find(c => c.id === selectedCategory);
    const quote: RepairQuote = {
      categoryId: selectedCategory,
      categoryName: currentCat?.name || selectedCategory,
      brand: currentModel?.brand || 'Brand',
      model: currentModel?.name || 'Selected Model',
      issueId: selectedIssueId,
      issueName: currentIssue?.name || 'Repair Issue',
      serviceMode,
      estimatedCost: estimatedPrice,
      estimatedTime,
      isDataImportant,
      notes: customerNotes
    };
    onBookQuote(quote);
  };

  return (
    <section id="estimator" className="py-16 lg:py-24 relative overflow-hidden bg-slate-950/70 border-t border-slate-900">
      
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-600/10 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-blue-600/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-bold border border-cyan-500/20 mb-3">
            <Wrench className="w-3.5 h-3.5" />
            <span>TRANSPARENT REPAIR ESTIMATOR</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-heading tracking-tight">
            Get an Instant Price Quote in Seconds
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            No guessing games. Select your device and problem to calculate an upfront estimate with our 60-day shop warranty included.
          </p>
        </div>

        {/* Wizard Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Selectors (8 cols) */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Step 1: Device Category */}
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">Step 1</span>
                <span className="text-xs text-slate-400">Select Category</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-4">What type of device needs triage?</h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {REPAIR_CATEGORIES.map((cat) => {
                  const isSelected = selectedCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => handleCategoryChange(cat.id)}
                      className={`flex flex-col items-start p-4 rounded-xl border text-left transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-gradient-to-b from-cyan-950/60 to-slate-900 border-cyan-500 text-white shadow-lg shadow-cyan-500/10 ring-1 ring-cyan-500/50'
                          : 'bg-slate-950/60 border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-slate-900'
                      }`}
                    >
                      <div className={`p-2 rounded-lg mb-2.5 ${
                        isSelected ? 'bg-cyan-500 text-slate-950' : 'bg-slate-800 text-cyan-400'
                      }`}>
                        {categoryIcons[cat.id] || <Wrench className="w-5 h-5" />}
                      </div>
                      <span className="text-sm font-bold block">{cat.name}</span>
                      <span className="text-[11px] text-slate-400 mt-1 line-clamp-1">{cat.popularBrands.join(', ')}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Device Model */}
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">Step 2</span>
                <span className="text-xs text-slate-400">Choose Specific Model</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-4">Which exact model do you own?</h3>

              {availableModels.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-64 overflow-y-auto pr-1">
                  {availableModels.map((model) => {
                    const isSelected = selectedModelId === model.id;
                    return (
                      <button
                        key={model.id}
                        onClick={() => setSelectedModelId(model.id)}
                        className={`flex items-center justify-between p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-cyan-950/60 border-cyan-500 text-white shadow-md'
                            : 'bg-slate-950/50 border-slate-800/80 text-slate-300 hover:border-slate-700 hover:bg-slate-900'
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-800 text-slate-300 uppercase">
                            {model.brand}
                          </span>
                          <span className="text-xs sm:text-sm font-semibold text-slate-100">{model.name}</span>
                        </div>
                        {isSelected && <Check className="w-4 h-4 text-cyan-400 shrink-0" />}
                      </button>
                    );
                  })}
                </div>
              ) : (
                <p className="text-xs text-slate-400">No preset models found. You can write in your model during booking.</p>
              )}
            </div>

            {/* Step 3: Issue / Symptom */}
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">Step 3</span>
                <span className="text-xs text-slate-400">Select Issue</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-4">What symptom or damage is occurring?</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {REPAIR_ISSUES.map((issue) => {
                  const isSelected = selectedIssueId === issue.id;
                  return (
                    <button
                      key={issue.id}
                      onClick={() => setSelectedIssueId(issue.id)}
                      className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-gradient-to-br from-cyan-950/70 to-slate-900 border-cyan-500 text-white shadow-md'
                          : 'bg-slate-950/50 border-slate-800/80 text-slate-300 hover:border-slate-700 hover:bg-slate-900'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2 mb-1.5">
                        <span className="text-sm font-bold text-slate-100 leading-snug">{issue.name}</span>
                        <span className="text-xs font-bold px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 shrink-0">
                          ~{issue.estimatedMinutes}m
                        </span>
                      </div>
                      <p className="text-[12px] text-slate-400 leading-relaxed mb-2">{issue.description}</p>
                      <div className="flex flex-wrap gap-1">
                        {issue.commonSymptoms.slice(0, 2).map((sym, idx) => (
                          <span key={idx} className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                            • {sym}
                          </span>
                        ))}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Data Importance Toggle */}
              <div className="mt-6 pt-5 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-slate-950/60 p-4 rounded-xl border">
                <div>
                  <span className="text-sm font-bold text-white block">Is the stored data on this device critical?</span>
                  <span className="text-xs text-slate-400">Photos, contacts, business files, notes, messages</span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setIsDataImportant(true)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      isDataImportant
                        ? 'bg-emerald-500 text-slate-950 shadow'
                        : 'bg-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    Yes, protect data
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsDataImportant(false)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      !isDataImportant
                        ? 'bg-slate-700 text-white'
                        : 'bg-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    No, wipe is ok
                  </button>
                </div>
              </div>
            </div>

            {/* Step 4: Service Delivery Mode */}
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">Step 4</span>
                <span className="text-xs text-slate-400">Choose Service Option</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-4">How would you like your repair serviced?</h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {/* In-Store */}
                <button
                  type="button"
                  onClick={() => setServiceMode('in-store')}
                  className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                    serviceMode === 'in-store'
                      ? 'bg-cyan-950/70 border-cyan-500 text-white ring-1 ring-cyan-500'
                      : 'bg-slate-950/50 border-slate-800 text-slate-300 hover:bg-slate-900'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <Store className="w-5 h-5 text-cyan-400" />
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400">
                      Express
                    </span>
                  </div>
                  <div className="text-sm font-bold text-white">In-Store Walk In</div>
                  <div className="text-xs text-slate-400 mt-1">1636 Route 72 W, Manahawkin NJ</div>
                  <div className="text-[11px] text-cyan-400 font-semibold mt-2">Ready in 45-60 min</div>
                </button>

                {/* Mobile Van */}
                <button
                  type="button"
                  onClick={() => setServiceMode('mobile-van')}
                  className={`p-4 rounded-xl border text-left transition-all cursor-pointer relative ${
                    serviceMode === 'mobile-van'
                      ? 'bg-cyan-950/70 border-cyan-500 text-white ring-1 ring-cyan-500'
                      : 'bg-slate-950/50 border-slate-800 text-slate-300 hover:bg-slate-900'
                  }`}
                >
                  <span className="absolute -top-2 right-3 text-[9px] font-extrabold px-2 py-0.5 rounded-full bg-cyan-500 text-slate-950">
                    FEATURED
                  </span>
                  <div className="flex items-center justify-between mb-2">
                    <Truck className="w-5 h-5 text-cyan-400" />
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300">
                      Mobile Unit
                    </span>
                  </div>
                  <div className="text-sm font-bold text-white">Mobile Van Service</div>
                  <div className="text-xs text-slate-400 mt-1">We come to your home or office</div>
                  <div className="text-[11px] text-cyan-400 font-semibold mt-2">Ocean County & Beyond</div>
                </button>

                {/* Mail-In */}
                <button
                  type="button"
                  onClick={() => setServiceMode('mail-in')}
                  className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                    serviceMode === 'mail-in'
                      ? 'bg-cyan-950/70 border-cyan-500 text-white ring-1 ring-cyan-500'
                      : 'bg-slate-950/50 border-slate-800 text-slate-300 hover:bg-slate-900'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <Mail className="w-5 h-5 text-cyan-400" />
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-500/20 text-blue-300">
                      Nationwide
                    </span>
                  </div>
                  <div className="text-sm font-bold text-white">Mail-In Service</div>
                  <div className="text-xs text-slate-400 mt-1">Ship via UPS, FedEx, or USPS</div>
                  <div className="text-[11px] text-cyan-400 font-semibold mt-2">Print packing slip online</div>
                </button>
              </div>

              {/* Extra notes */}
              <div className="mt-4">
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Additional problem symptoms or passcodes (optional):
                </label>
                <input
                  type="text"
                  value={customerNotes}
                  onChange={(e) => setCustomerNotes(e.target.value)}
                  placeholder="e.g. screen flickers when pressed on top right, pass code 1234..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                />
              </div>
            </div>

          </div>

          {/* Right Column: Live Estimate Summary Card (Sticky) */}
          <div className="lg:col-span-4 sticky top-24">
            <div className="bg-gradient-to-b from-slate-900 to-slate-950 border-2 border-cyan-500/40 rounded-2xl p-6 shadow-2xl shadow-cyan-500/10 space-y-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">Quote Summary</span>
                  <h4 className="text-lg font-black text-white font-heading">Digital Doctor Triage</h4>
                </div>
                <div className="w-9 h-9 rounded-xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-cyan-400" />
                </div>
              </div>

              {/* Selected Specs */}
              <div className="space-y-3 text-xs">
                <div className="flex items-center justify-between py-1 border-b border-slate-800/60">
                  <span className="text-slate-400">Device:</span>
                  <span className="font-bold text-white text-right">{currentModel?.name || 'Selected Model'}</span>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-slate-800/60">
                  <span className="text-slate-400">Repair Service:</span>
                  <span className="font-bold text-cyan-400 text-right">{currentIssue?.name}</span>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-slate-800/60">
                  <span className="text-slate-400">Service Mode:</span>
                  <span className="font-semibold text-white capitalize text-right">
                    {serviceMode === 'in-store' ? '🏬 In-Store Walk-In' : serviceMode === 'mobile-van' ? '🚐 Mobile Van Unit' : '📦 Mail-In Repair'}
                  </span>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-slate-800/60">
                  <span className="text-slate-400">Data Preservation:</span>
                  <span className="font-semibold text-emerald-400 text-right">
                    {isDataImportant ? 'Priority Safe' : 'Standard'}
                  </span>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-slate-800/60">
                  <span className="text-slate-400">Warranty Coverage:</span>
                  <span className="font-bold text-emerald-400 text-right">60-Day Shop Warranty</span>
                </div>
              </div>

              {/* Estimated Turnaround */}
              <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center gap-3">
                <Clock className="w-5 h-5 text-cyan-400 shrink-0" />
                <div>
                  <div className="text-[11px] text-slate-400">Estimated Turnaround Time</div>
                  <div className="text-xs font-bold text-white">{estimatedTime}</div>
                </div>
              </div>

              {/* Total Price Tag */}
              <div className="bg-slate-950 p-4 rounded-xl border border-cyan-500/20 text-center">
                <span className="text-xs text-slate-400 block mb-1">Estimated Upfront Cost</span>
                <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-white font-heading">
                  ${estimatedPrice}
                  <span className="text-xs text-slate-400 font-normal"> / est.</span>
                </div>
                <span className="text-[11px] text-slate-400 mt-1 block">
                  Includes OEM-Grade part, labor & 60-day guarantee
                </span>
              </div>

              {/* CTA Button */}
              <button
                type="button"
                onClick={handleProceedToBooking}
                className="w-full py-4 rounded-xl font-black text-sm text-slate-950 bg-gradient-to-r from-cyan-400 to-cyan-300 hover:from-cyan-300 hover:to-white shadow-xl shadow-cyan-500/25 hover:shadow-cyan-400/40 hover:-translate-y-0.5 transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <CheckCircle className="w-4 h-4 text-slate-950" />
                <span>Lock In Quote & Schedule</span>
              </button>

              <div className="space-y-1.5 text-[11px] text-slate-400">
                <div className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>No payment required until repair is completed</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Changes always approved by you before service</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
