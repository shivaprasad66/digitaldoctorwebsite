import React, { useState, useMemo } from 'react';
import { 
  REPAIR_CATEGORIES, 
  REPAIR_MODELS, 
  REPAIR_ISSUES 
} from '../data/repairData';
import { RepairQuote } from '../types';
import { 
  Smartphone, 
  Tablet, 
  Laptop, 
  Gamepad2, 
  Cpu, 
  Watch, 
  Wrench, 
  Check, 
  ArrowRight, 
  ArrowLeft, 
  ShieldCheck, 
  Clock, 
  Store, 
  Truck, 
  Mail, 
  Search, 
  CheckCircle2, 
  Phone, 
  Calendar,
  AlertCircle
} from 'lucide-react';

interface RepairEstimatorSectionProps {
  initialCategoryId?: string;
  onBookQuote?: (quote: RepairQuote) => void;
}

export const RepairEstimatorSection: React.FC<RepairEstimatorSectionProps> = ({
  initialCategoryId = 'phones',
  onBookQuote
}) => {
  // Active step: 1 = Category, 2 = Model, 3 = Issue, 4 = Service & Reservation, 5 = Confirmed
  const [currentStep, setCurrentStep] = useState<number>(1);

  // Form selections
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategoryId);
  const [selectedBrand, setSelectedBrand] = useState<string>('All');
  const [modelSearch, setModelSearch] = useState<string>('');
  const [selectedModelId, setSelectedModelId] = useState<string>('ip-15p');
  const [selectedIssueId, setSelectedIssueId] = useState<string>('screen-replacement');
  const [serviceMode, setServiceMode] = useState<'in-store' | 'mobile-van' | 'mail-in'>('in-store');
  const [isDataImportant, setIsDataImportant] = useState<boolean>(true);
  const [customerNotes, setCustomerNotes] = useState<string>('');

  // Booking contact inputs
  const [customerName, setCustomerName] = useState<string>('');
  const [customerPhone, setCustomerPhone] = useState<string>('');
  const [customerEmail, setCustomerEmail] = useState<string>('');
  const [preferredDate, setPreferredDate] = useState<string>('');
  const [preferredTime, setPreferredTime] = useState<string>('Morning (10 AM - 1 PM)');
  const [streetAddress, setStreetAddress] = useState<string>('');
  const [confirmedTicketId, setConfirmedTicketId] = useState<string>('');

  // Category icons mapping
  const categoryIcons: Record<string, React.ReactNode> = {
    phones: <Smartphone className="w-5 h-5" />,
    tablets: <Tablet className="w-5 h-5" />,
    laptops: <Laptop className="w-5 h-5" />,
    consoles: <Gamepad2 className="w-5 h-5" />,
    microsoldering: <Cpu className="w-5 h-5" />,
    smartwatches: <Watch className="w-5 h-5" />
  };

  // Current category object
  const currentCategoryObj = REPAIR_CATEGORIES.find(c => c.id === selectedCategory) || REPAIR_CATEGORIES[0];

  // Available models for active category
  const allModelsForCat = REPAIR_MODELS[selectedCategory] || [];
  
  // Available brands in this category
  const availableBrands = useMemo(() => {
    const brands = Array.from(new Set(allModelsForCat.map(m => m.brand)));
    return ['All', ...brands];
  }, [allModelsForCat]);

  // Filtered models by brand and search
  const filteredModels = useMemo(() => {
    return allModelsForCat.filter(m => {
      if (selectedBrand !== 'All' && m.brand !== selectedBrand) return false;
      if (modelSearch.trim()) {
        const q = modelSearch.toLowerCase();
        return m.name.toLowerCase().includes(q) || m.brand.toLowerCase().includes(q);
      }
      return true;
    });
  }, [allModelsForCat, selectedBrand, modelSearch]);

  const currentModel = allModelsForCat.find(m => m.id === selectedModelId) || allModelsForCat[0];
  const currentIssue = REPAIR_ISSUES.find(i => i.id === selectedIssueId) || REPAIR_ISSUES[0];

  // Dynamic price calculation
  const calculatePrice = () => {
    let price = currentIssue?.basePrice || 89;
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
    if (serviceMode === 'mobile-van') {
      price += 25;
    }
    return price;
  };

  const estimatedPrice = calculatePrice();
  const estimatedTime = serviceMode === 'mobile-van' 
    ? 'Same-Day at your door (45-60 mins)'
    : serviceMode === 'in-store'
    ? 'Same-Day Walk-In (30-60 mins)'
    : 'Mail-In (Expedited 1-3 days)';

  // Navigation handlers between panes
  const handleSelectCategory = (catId: string) => {
    setSelectedCategory(catId);
    setSelectedBrand('All');
    setModelSearch('');
    const newModels = REPAIR_MODELS[catId] || [];
    if (newModels.length > 0) {
      setSelectedModelId(newModels[0].id);
    }
    // Auto advance to next pane
    setCurrentStep(2);
  };

  const handleSelectModel = (modelId: string) => {
    setSelectedModelId(modelId);
    // Auto advance to next pane
    setCurrentStep(3);
  };

  const handleSelectIssue = (issueId: string) => {
    setSelectedIssueId(issueId);
    // Auto advance to next pane
    setCurrentStep(4);
  };

  const handleConfirmReservation = (e: React.FormEvent) => {
    e.preventDefault();
    const newTicket = `DDR-${Math.floor(1000 + Math.random() * 9000)}`;
    setConfirmedTicketId(newTicket);
    setCurrentStep(5);

    if (onBookQuote) {
      onBookQuote({
        categoryId: selectedCategory,
        categoryName: currentCategoryObj.name,
        brand: currentModel?.brand || 'Brand',
        model: currentModel?.name || 'Model',
        issueId: selectedIssueId,
        issueName: currentIssue?.name || 'Issue',
        serviceMode,
        estimatedCost: estimatedPrice,
        estimatedTime,
        isDataImportant,
        customerName,
        customerPhone,
        customerEmail,
        preferredDate,
        preferredTime,
        address: streetAddress,
        notes: customerNotes
      });
    }
  };

  const resetEstimator = () => {
    setCurrentStep(1);
    setSelectedCategory('phones');
    setSelectedModelId('ip-15p');
    setSelectedIssueId('screen-replacement');
    setServiceMode('in-store');
    setConfirmedTicketId('');
  };

  const stepsMeta = [
    { num: 1, label: 'Device', summary: currentCategoryObj.name.split(' ')[0] },
    { num: 2, label: 'Model', summary: currentModel?.name ? currentModel.name.split(' ').slice(0, 3).join(' ') : 'Model' },
    { num: 3, label: 'Issue', summary: currentIssue?.category || 'Display' },
    { num: 4, label: 'Service', summary: serviceMode === 'in-store' ? 'Walk-In' : serviceMode === 'mobile-van' ? 'Mobile Van' : 'Mail-In' }
  ];

  return (
    <section id="estimator" className="py-16 lg:py-24 relative overflow-hidden bg-slate-950/90 border-t border-slate-900">
      
      {/* Subtle radial ambient background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-[radial-gradient(ellipse_at_top,rgba(14,165,233,0.08),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial Eyebrow & Header (Makcliff Style) */}
        <div className="max-w-3xl mb-12">
          <span className="eyebrow mb-3">
            <span className="inline-block h-px w-8 bg-cyan-400/60" aria-hidden="true"></span>
            Diagnostic Engine — Upfront Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading tracking-tight leading-tight">
            Configure your repair in seconds
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-2.5 max-w-2xl leading-relaxed">
            Select your device and symptoms below. Instant price estimate, 45-minute turnaround, and full 60-day shop warranty with zero hidden fees.
          </p>
        </div>

        {/* Step Navigation Progress Track */}
        <div className="mb-8 border-b border-slate-800/80 pb-4">
          <div className="grid grid-cols-4 gap-2 sm:gap-4">
            {stepsMeta.map((s) => {
              const isActive = currentStep === s.num;
              const isPast = currentStep > s.num;
              return (
                <button
                  key={s.num}
                  type="button"
                  onClick={() => {
                    if (isPast || currentStep === 5) setCurrentStep(s.num);
                  }}
                  disabled={!isPast && currentStep !== 5 && !isActive}
                  className={`flex flex-col text-left py-2 px-1 transition-all ${
                    isActive
                      ? 'border-b-2 border-cyan-400 text-white'
                      : isPast
                      ? 'border-b-2 border-slate-700 text-slate-400 hover:text-white cursor-pointer'
                      : 'border-b-2 border-transparent text-slate-600 cursor-not-allowed'
                  }`}
                >
                  <div className="flex items-center gap-1.5 text-xs font-mono">
                    <span className={`tabular ${isActive ? 'text-cyan-400 font-bold' : isPast ? 'text-emerald-400' : 'text-slate-600'}`}>
                      {isPast ? '✓' : `0${s.num}`}
                    </span>
                    <span className="font-semibold hidden sm:inline">{s.label}</span>
                  </div>
                  <span className="text-[11px] text-slate-400 truncate mt-0.5">
                    {s.summary}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Two-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Sticky Summary & Assurances (4 cols) */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
            
            {/* Live Pricing Card */}
            <div className="rounded-2xl surface-card p-6 border border-slate-800/90 shadow-xl space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <span className="text-xs font-mono uppercase tracking-wider text-cyan-400">
                  Live Estimate
                </span>
                <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  60-Day Warranty
                </span>
              </div>

              {/* Selected Attributes */}
              <div className="space-y-2.5 text-xs">
                <div className="flex justify-between py-1 border-b border-slate-800/50">
                  <span className="text-slate-400">Category:</span>
                  <span className="font-semibold text-white">{currentCategoryObj.name}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800/50">
                  <span className="text-slate-400">Device:</span>
                  <span className="font-bold text-white text-right truncate max-w-[180px]">{currentModel?.name}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800/50">
                  <span className="text-slate-400">Issue:</span>
                  <span className="font-bold text-cyan-400 text-right truncate max-w-[180px]">{currentIssue?.name}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800/50">
                  <span className="text-slate-400">Service:</span>
                  <span className="font-semibold text-slate-200">
                    {serviceMode === 'in-store' ? '🏬 Walk-In (Manahawkin)' : serviceMode === 'mobile-van' ? '🚐 Mobile Van Unit' : '📦 Mail-In'}
                  </span>
                </div>
              </div>

              {/* Price Calculation Box */}
              <div className="bg-slate-950/80 p-4 rounded-xl border border-slate-800 text-center">
                <span className="text-[11px] text-slate-400 uppercase tracking-wider font-mono block mb-1">
                  Estimated Repair Cost
                </span>
                <div className="text-3xl sm:text-4xl font-black text-white font-heading">
                  ${estimatedPrice}
                  <span className="text-xs text-slate-400 font-normal"> / total</span>
                </div>
                <div className="flex items-center justify-center gap-1.5 text-xs text-cyan-400 mt-2 font-semibold">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{estimatedTime}</span>
                </div>
              </div>

              {/* What Happens Next (Makcliff Style) */}
              <div className="pt-2 border-t border-slate-800/80 space-y-3">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block font-semibold">
                  What Happens Next:
                </span>
                <div className="space-y-2 text-xs text-slate-300">
                  <div className="flex items-start gap-2.5">
                    <span className="font-mono text-cyan-400 font-bold text-[11px] tabular">01</span>
                    <span><strong>No payment upfront:</strong> Pay only after your repaired device is tested.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="font-mono text-cyan-400 font-bold text-[11px] tabular">02</span>
                    <span><strong>Parts held:</strong> Certified OEM-grade component reserved for you.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="font-mono text-cyan-400 font-bold text-[11px] tabular">03</span>
                    <span><strong>18-Point bench test:</strong> Full hardware check before hand-off.</span>
                  </div>
                </div>
              </div>

              {/* Technician contact */}
              <div className="pt-3 border-t border-slate-800/80 text-xs flex items-center justify-between text-slate-400">
                <span>Questions? Call the shop:</span>
                <a href="tel:6099943235" className="text-cyan-400 hover:text-cyan-300 font-bold">
                  (609) 994-3235
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Dynamic Step Pane (8 cols) */}
          <div className="lg:col-span-8">
            <div className="rounded-2xl surface-card p-6 sm:p-8 border border-slate-800/90 shadow-2xl min-h-[500px] flex flex-col justify-between">
              
              {/* PANE 1: Device Category Selection */}
              {currentStep === 1 && (
                <div className="space-y-6 animate-fadeIn">
                  <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                    <div>
                      <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block font-bold">
                        Step 01 / 04
                      </span>
                      <h3 className="text-xl font-bold text-white font-heading mt-0.5">
                        Select device category
                      </h3>
                    </div>
                    <span className="text-xs text-slate-400">Click to choose</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                    {REPAIR_CATEGORIES.map((cat) => {
                      const isSelected = selectedCategory === cat.id;
                      return (
                        <button
                          key={cat.id}
                          type="button"
                          onClick={() => handleSelectCategory(cat.id)}
                          className={`flex flex-col items-start p-4 rounded-xl border text-left transition-all cursor-pointer group ${
                            isSelected
                              ? 'bg-slate-900 border-cyan-500 text-white ring-1 ring-cyan-500 shadow-md'
                              : 'bg-slate-950/60 border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-slate-900'
                          }`}
                        >
                          <div className={`p-2.5 rounded-lg mb-3 transition-colors ${
                            isSelected ? 'bg-cyan-500 text-slate-950' : 'bg-slate-800 text-cyan-400 group-hover:bg-slate-750'
                          }`}>
                            {categoryIcons[cat.id] || <Wrench className="w-5 h-5" />}
                          </div>
                          <span className="text-sm font-bold text-white block">{cat.name}</span>
                          <span className="text-xs text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                            {cat.description}
                          </span>
                          <div className="mt-3 flex items-center gap-1 text-[11px] text-cyan-400 font-semibold group-hover:translate-x-1 transition-transform">
                            <span>Select & Choose Model</span>
                            <ArrowRight className="w-3 h-3" />
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* PANE 2: Exact Model Selection */}
              {currentStep === 2 && (
                <div className="space-y-6 animate-fadeIn">
                  <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                    <div>
                      <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block font-bold">
                        Step 02 / 04
                      </span>
                      <h3 className="text-xl font-bold text-white font-heading mt-0.5">
                        Which model do you have?
                      </h3>
                    </div>
                    <button
                      onClick={() => setCurrentStep(1)}
                      className="text-xs text-slate-400 hover:text-white flex items-center gap-1 cursor-pointer"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>Back to Categories</span>
                    </button>
                  </div>

                  {/* Filter Controls: Brand pills & Search */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
                      {availableBrands.map((b) => (
                        <button
                          key={b}
                          type="button"
                          onClick={() => setSelectedBrand(b)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                            selectedBrand === b
                              ? 'bg-cyan-500 text-slate-950 font-bold'
                              : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>

                    <div className="relative">
                      <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        value={modelSearch}
                        onChange={(e) => setModelSearch(e.target.value)}
                        placeholder={`Search ${currentCategoryObj.name} models (e.g. 15 Pro, S24, Air 4th)...`}
                        className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                      />
                    </div>
                  </div>

                  {/* Models Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-72 overflow-y-auto pr-1">
                    {filteredModels.length > 0 ? (
                      filteredModels.map((m) => {
                        const isSelected = selectedModelId === m.id;
                        return (
                          <button
                            key={m.id}
                            type="button"
                            onClick={() => handleSelectModel(m.id)}
                            className={`flex items-center justify-between p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                              isSelected
                                ? 'bg-slate-900 border-cyan-500 text-white ring-1 ring-cyan-500'
                                : 'bg-slate-950/60 border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-slate-900'
                            }`}
                          >
                            <div>
                              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400 uppercase mr-2">
                                {m.brand}
                              </span>
                              <span className="text-xs sm:text-sm font-semibold text-white">
                                {m.name}
                              </span>
                            </div>
                            <span className="text-xs text-cyan-400 font-mono">Select &rarr;</span>
                          </button>
                        );
                      })
                    ) : (
                      <div className="col-span-2 text-center py-8 text-slate-500 text-xs">
                        No models found matching "{modelSearch}". You can write it in at step 4.
                      </div>
                    )}
                  </div>

                  {/* Bottom Navigation */}
                  <div className="pt-4 border-t border-slate-800 flex justify-between items-center">
                    <button
                      type="button"
                      onClick={() => setCurrentStep(1)}
                      className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-white bg-slate-950 border border-slate-800 cursor-pointer"
                    >
                      &larr; Back
                    </button>
                    <button
                      type="button"
                      onClick={() => setCurrentStep(3)}
                      className="px-5 py-2.5 rounded-xl text-xs font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-all cursor-pointer"
                    >
                      Next: Choose Issue &rarr;
                    </button>
                  </div>
                </div>
              )}

              {/* PANE 3: Issue & Diagnostic Symptoms */}
              {currentStep === 3 && (
                <div className="space-y-6 animate-fadeIn">
                  <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                    <div>
                      <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block font-bold">
                        Step 03 / 04
                      </span>
                      <h3 className="text-xl font-bold text-white font-heading mt-0.5">
                        What problem is occurring?
                      </h3>
                    </div>
                    <button
                      onClick={() => setCurrentStep(2)}
                      className="text-xs text-slate-400 hover:text-white flex items-center gap-1 cursor-pointer"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>Back to Models</span>
                    </button>
                  </div>

                  {/* Issues Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-72 overflow-y-auto pr-1">
                    {REPAIR_ISSUES.map((issue) => {
                      const isSelected = selectedIssueId === issue.id;
                      return (
                        <button
                          key={issue.id}
                          type="button"
                          onClick={() => handleSelectIssue(issue.id)}
                          className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                            isSelected
                              ? 'bg-slate-900 border-cyan-500 text-white ring-1 ring-cyan-500 shadow-md'
                              : 'bg-slate-950/60 border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-slate-900'
                          }`}
                        >
                          <div className="flex items-start justify-between gap-2 mb-1.5">
                            <span className="text-xs sm:text-sm font-bold text-white leading-snug">{issue.name}</span>
                            <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 shrink-0">
                              ~{issue.estimatedMinutes}m
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-400 leading-relaxed mb-2 line-clamp-2">
                            {issue.description}
                          </p>
                          <div className="flex items-center justify-between text-[11px]">
                            <span className="text-slate-400 font-mono">From ${issue.basePrice}</span>
                            <span className="text-cyan-400 font-semibold">Select Issue &rarr;</span>
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  {/* Data Importance Toggle */}
                  <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                    <div>
                      <span className="font-bold text-white block">Data Preservation Priority:</span>
                      <span className="text-slate-400 text-[11px]">Photos, contacts, messages, work documents</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setIsDataImportant(true)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                          isDataImportant ? 'bg-emerald-500 text-slate-950' : 'bg-slate-800 text-slate-400'
                        }`}
                      >
                        Protect Data
                      </button>
                      <button
                        type="button"
                        onClick={() => setIsDataImportant(false)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                          !isDataImportant ? 'bg-slate-700 text-white' : 'bg-slate-800 text-slate-400'
                        }`}
                      >
                        Wipe is OK
                      </button>
                    </div>
                  </div>

                  {/* Bottom Navigation */}
                  <div className="pt-4 border-t border-slate-800 flex justify-between items-center">
                    <button
                      type="button"
                      onClick={() => setCurrentStep(2)}
                      className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-white bg-slate-950 border border-slate-800 cursor-pointer"
                    >
                      &larr; Back
                    </button>
                    <button
                      type="button"
                      onClick={() => setCurrentStep(4)}
                      className="px-5 py-2.5 rounded-xl text-xs font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-all cursor-pointer"
                    >
                      Next: Choose Service &rarr;
                    </button>
                  </div>
                </div>
              )}

              {/* PANE 4: Service Delivery & Fast Reservation Form */}
              {currentStep === 4 && (
                <form onSubmit={handleConfirmReservation} className="space-y-6 animate-fadeIn">
                  <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                    <div>
                      <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block font-bold">
                        Step 04 / 04
                      </span>
                      <h3 className="text-xl font-bold text-white font-heading mt-0.5">
                        Choose service option & schedule
                      </h3>
                    </div>
                    <button
                      type="button"
                      onClick={() => setCurrentStep(3)}
                      className="text-xs text-slate-400 hover:text-white flex items-center gap-1 cursor-pointer"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>Back to Issues</span>
                    </button>
                  </div>

                  {/* 3 Service Mode Choices */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <button
                      type="button"
                      onClick={() => setServiceMode('in-store')}
                      className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                        serviceMode === 'in-store'
                          ? 'bg-slate-900 border-cyan-500 text-white ring-1 ring-cyan-500'
                          : 'bg-slate-950/60 border-slate-800 text-slate-300'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <Store className="w-4 h-4 text-cyan-400" />
                        <span className="text-[10px] font-mono text-emerald-400 font-bold">45 min</span>
                      </div>
                      <div className="text-xs font-bold text-white">In-Store Walk-In</div>
                      <div className="text-[11px] text-slate-400 mt-0.5">1636 Route 72 W, Manahawkin</div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setServiceMode('mobile-van')}
                      className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer relative ${
                        serviceMode === 'mobile-van'
                          ? 'bg-slate-900 border-cyan-500 text-white ring-1 ring-cyan-500'
                          : 'bg-slate-950/60 border-slate-800 text-slate-300'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <Truck className="w-4 h-4 text-cyan-400" />
                        <span className="text-[10px] font-mono text-cyan-300 font-bold">Mobile</span>
                      </div>
                      <div className="text-xs font-bold text-white">Mobile Van Unit</div>
                      <div className="text-[11px] text-slate-400 mt-0.5">We drive to your driveway</div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setServiceMode('mail-in')}
                      className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                        serviceMode === 'mail-in'
                          ? 'bg-slate-900 border-cyan-500 text-white ring-1 ring-cyan-500'
                          : 'bg-slate-950/60 border-slate-800 text-slate-300'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <Mail className="w-4 h-4 text-cyan-400" />
                        <span className="text-[10px] font-mono text-blue-400 font-bold">US Mail</span>
                      </div>
                      <div className="text-xs font-bold text-white">Mail-In Service</div>
                      <div className="text-[11px] text-slate-400 mt-0.5">Print packing slip & ship</div>
                    </button>
                  </div>

                  {/* Customer Contact Details */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div>
                      <label className="block text-slate-300 font-semibold mb-1">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        placeholder="John Miller"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-300 font-semibold mb-1">Phone Number (For SMS update) *</label>
                      <input
                        type="tel"
                        required
                        value={customerPhone}
                        onChange={(e) => setCustomerPhone(e.target.value)}
                        placeholder="(609) 000-0000"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                      />
                    </div>
                  </div>

                  {serviceMode === 'mobile-van' && (
                    <div className="text-xs">
                      <label className="block text-slate-300 font-semibold mb-1">Service Address (Home, Office, or Dock) *</label>
                      <input
                        type="text"
                        required
                        value={streetAddress}
                        onChange={(e) => setStreetAddress(e.target.value)}
                        placeholder="123 Bayview Ave, Manahawkin / LBI / Stafford"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                      />
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div>
                      <label className="block text-slate-300 font-semibold mb-1">Preferred Date</label>
                      <input
                        type="date"
                        value={preferredDate}
                        onChange={(e) => setPreferredDate(e.target.value)}
                        className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-cyan-500"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-300 font-semibold mb-1">Preferred Time Window</label>
                      <select
                        value={preferredTime}
                        onChange={(e) => setPreferredTime(e.target.value)}
                        className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-cyan-500 cursor-pointer"
                      >
                        <option value="Morning (10 AM - 1 PM)">Morning (10 AM - 1 PM)</option>
                        <option value="Afternoon (1 PM - 4 PM)">Afternoon (1 PM - 4 PM)</option>
                        <option value="Late Afternoon (4 PM - 7 PM)">Late Afternoon (4 PM - 7 PM)</option>
                      </select>
                    </div>
                  </div>

                  {/* Submission and assurances */}
                  <div className="pt-2 space-y-3">
                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl font-bold text-xs sm:text-sm text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-cyan-500/20"
                    >
                      <CheckCircle2 className="w-4 h-4 text-slate-950" />
                      <span>Lock In ${estimatedPrice} Quote & Reserve Parts</span>
                    </button>
                    <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      <span>No charge right now. Pay in person or online only after full quality check.</span>
                    </div>
                  </div>
                </form>
              )}

              {/* PANE 5: Confirmed Reservation Receipt */}
              {currentStep === 5 && (
                <div className="text-center py-6 space-y-5 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500 text-emerald-400 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div>
                    <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest block font-bold">
                      Reservation Confirmed
                    </span>
                    <h3 className="text-2xl font-black text-white font-heading mt-1">
                      Your Repair Ticket is Active
                    </h3>
                    <p className="text-xs text-slate-400 mt-1 max-w-sm mx-auto">
                      Our Manahawkin technician team has received your ticket and reserved OEM-grade parts.
                    </p>
                  </div>

                  {/* Ticket Badge Box */}
                  <div className="inline-block p-4 px-8 rounded-2xl bg-slate-950 border border-cyan-500/40 shadow-inner">
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                      Ticket Reference Code
                    </span>
                    <span className="font-mono text-2xl font-black text-cyan-400 tracking-wider">
                      #{confirmedTicketId}
                    </span>
                  </div>

                  {/* Summary receipt box */}
                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-left text-xs text-slate-300 space-y-1.5 max-w-md mx-auto">
                    <div><strong>Customer:</strong> {customerName || 'Valued Customer'} ({customerPhone || 'N/A'})</div>
                    <div><strong>Device:</strong> {currentModel?.name}</div>
                    <div><strong>Service:</strong> {currentIssue?.name} (${estimatedPrice})</div>
                    <div><strong>Delivery:</strong> {serviceMode === 'mobile-van' ? `Mobile Van: ${streetAddress}` : 'In-Store Walk In: 1636 Route 72 W'}</div>
                    <div className="text-emerald-400 font-semibold"><strong>Warranty:</strong> 60-Day Limited Guarantee Included</div>
                  </div>

                  <div className="flex flex-wrap gap-2 justify-center pt-2">
                    <a
                      href="tel:6099943235"
                      className="px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs font-semibold text-cyan-400 flex items-center gap-1.5"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Call Shop: (609) 994-3235</span>
                    </a>
                    <button
                      type="button"
                      onClick={resetEstimator}
                      className="px-6 py-2.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-xs"
                    >
                      Start New Estimate
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
