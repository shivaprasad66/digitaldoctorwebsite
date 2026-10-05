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
  Phone
} from 'lucide-react';

interface RepairEstimatorSectionProps {
  initialCategoryId?: string;
  onBookQuote?: (quote: RepairQuote) => void;
}

export const RepairEstimatorSection: React.FC<RepairEstimatorSectionProps> = ({
  initialCategoryId = 'phones',
  onBookQuote
}) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategoryId);
  const [selectedBrand, setSelectedBrand] = useState<string>('All');
  const [modelSearch, setModelSearch] = useState<string>('');
  const [selectedModelId, setSelectedModelId] = useState<string>('ip-15p');
  const [selectedIssueId, setSelectedIssueId] = useState<string>('screen-replacement');
  const [serviceMode, setServiceMode] = useState<'in-store' | 'mobile-van' | 'mail-in'>('in-store');
  const [isDataImportant, setIsDataImportant] = useState<boolean>(true);

  // Booking contact inputs
  const [customerName, setCustomerName] = useState<string>('');
  const [customerPhone, setCustomerPhone] = useState<string>('');
  const [customerEmail, setCustomerEmail] = useState<string>('');
  const [preferredDate, setPreferredDate] = useState<string>('');
  const [preferredTime, setPreferredTime] = useState<string>('Morning (10 AM - 1 PM)');
  const [streetAddress, setStreetAddress] = useState<string>('');
  const [confirmedTicketId, setConfirmedTicketId] = useState<string>('');

  const categoryIcons: Record<string, React.ReactNode> = {
    phones: <Smartphone className="w-5 h-5 text-[#1382e8]" />,
    tablets: <Tablet className="w-5 h-5 text-[#1382e8]" />,
    laptops: <Laptop className="w-5 h-5 text-[#1382e8]" />,
    consoles: <Gamepad2 className="w-5 h-5 text-[#1382e8]" />,
    microsoldering: <Cpu className="w-5 h-5 text-[#1382e8]" />,
    smartwatches: <Watch className="w-5 h-5 text-[#1382e8]" />
  };

  const currentCategoryObj = REPAIR_CATEGORIES.find(c => c.id === selectedCategory) || REPAIR_CATEGORIES[0];
  const allModelsForCat = REPAIR_MODELS[selectedCategory] || [];
  
  const availableBrands = useMemo(() => {
    const brands = Array.from(new Set(allModelsForCat.map(m => m.brand)));
    return ['All', ...brands];
  }, [allModelsForCat]);

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

  const handleSelectCategory = (catId: string) => {
    setSelectedCategory(catId);
    setSelectedBrand('All');
    setModelSearch('');
    const newModels = REPAIR_MODELS[catId] || [];
    if (newModels.length > 0) {
      setSelectedModelId(newModels[0].id);
    }
    setCurrentStep(2);
  };

  const handleSelectModel = (modelId: string) => {
    setSelectedModelId(modelId);
    setCurrentStep(3);
  };

  const handleSelectIssue = (issueId: string) => {
    setSelectedIssueId(issueId);
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
        address: streetAddress
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
    { num: 4, label: 'Service', summary: serviceMode === 'in-store' ? 'Walk-In' : serviceMode === 'mobile-van' ? 'Mobile' : 'Mail-In' }
  ];

  return (
    <section id="estimator" className="py-20 lg:py-28 relative overflow-hidden bg-[#f6f7f8] border-b border-[#e8eaee]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#e8eaee] text-xs font-mono text-[#41454e] mb-3">
            <span className="w-2 h-2 rounded-full bg-[#1382e8]"></span>
            <span>Upfront Price Calculator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0c0d10] font-heading tracking-tight leading-tight">
            Configure your repair in seconds
          </h2>
          <p className="text-[#41454e] text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
            Choose your device and symptom. Live price estimate, 45-minute turnaround, and full 60-day warranty with zero upfront payment.
          </p>
        </div>

        {/* Step Navigation Progress Bar */}
        <div className="mb-8 border-b border-[#e8eaee] pb-4">
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
                      ? 'border-b-2 border-[#1382e8] text-[#0c0d10]'
                      : isPast
                      ? 'border-b-2 border-[#0d9963] text-[#41454e] hover:text-[#0c0d10] cursor-pointer'
                      : 'border-b-2 border-transparent text-[#6b7079] cursor-not-allowed'
                  }`}
                >
                  <div className="flex items-center gap-1.5 text-xs font-mono">
                    <span className={`tabular font-bold ${isActive ? 'text-[#1382e8]' : isPast ? 'text-[#0d9963]' : 'text-[#6b7079]'}`}>
                      {isPast ? '✓' : `0${s.num}`}
                    </span>
                    <span className="font-semibold hidden sm:inline">{s.label}</span>
                  </div>
                  <span className="text-[11px] text-[#6b7079] truncate mt-0.5">
                    {s.summary}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Two-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Summary Card (4 cols - Sticky) */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-4">
            <div className="rote-card p-6 bg-white space-y-5 border border-[#e8eaee]">
              
              <div className="flex items-center justify-between pb-3 border-b border-[#e8eaee]">
                <span className="text-xs font-mono uppercase tracking-wider text-[#6b7079] font-semibold">
                  Live Quote
                </span>
                <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-[#e9f7f0] text-[#0d9963] border border-[#bfe8d3]">
                  60-Day Warranty
                </span>
              </div>

              {/* Selections */}
              <div className="space-y-2 text-xs">
                <div className="flex justify-between py-1 border-b border-[#f6f7f8]">
                  <span className="text-[#6b7079]">Category:</span>
                  <span className="font-semibold text-[#0c0d10]">{currentCategoryObj.name}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#f6f7f8]">
                  <span className="text-[#6b7079]">Model:</span>
                  <span className="font-bold text-[#0c0d10] text-right truncate max-w-[170px]">{currentModel?.name}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#f6f7f8]">
                  <span className="text-[#6b7079]">Repair:</span>
                  <span className="font-bold text-[#1382e8] text-right truncate max-w-[170px]">{currentIssue?.name}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#f6f7f8]">
                  <span className="text-[#6b7079]">Delivery:</span>
                  <span className="font-semibold text-[#0c0d10]">
                    {serviceMode === 'in-store' ? 'Walk-In Store' : serviceMode === 'mobile-van' ? 'Mobile Van Unit' : 'Mail-In'}
                  </span>
                </div>
              </div>

              {/* Price Calculation Box */}
              <div className="bg-[#f6f7f8] p-4 rounded-xl border border-[#e8eaee] text-center">
                <span className="text-[11px] text-[#6b7079] uppercase tracking-wider font-mono block mb-1">
                  Estimated Total
                </span>
                <div className="text-3xl sm:text-4xl font-black text-[#0c0d10] font-heading tabular">
                  ${estimatedPrice}
                  <span className="text-xs text-[#6b7079] font-normal"> / est.</span>
                </div>
                <div className="flex items-center justify-center gap-1.5 text-xs text-[#1382e8] mt-2 font-semibold">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{estimatedTime}</span>
                </div>
              </div>

              {/* What Happens Next Checklist */}
              <div className="pt-2 border-t border-[#e8eaee] space-y-2 text-xs text-[#41454e]">
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#0d9963] shrink-0 mt-0.5" />
                  <span><strong>Zero upfront charge:</strong> Pay only after testing your repaired device.</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#0d9963] shrink-0 mt-0.5" />
                  <span><strong>OEM-grade parts:</strong> Quality verified before installation.</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#0d9963] shrink-0 mt-0.5" />
                  <span><strong>60-day shop warranty:</strong> Full coverage on parts & labor.</span>
                </div>
              </div>

              {/* Technician phone */}
              <div className="pt-3 border-t border-[#e8eaee] text-xs flex items-center justify-between text-[#6b7079]">
                <span>Questions? Call the shop:</span>
                <a href="tel:6099943235" className="text-[#1382e8] hover:text-[#0e6fcc] font-semibold">
                  (609) 994-3235
                </a>
              </div>

            </div>
          </div>

          {/* Right Column: Active Step Pane (8 cols) */}
          <div className="lg:col-span-8">
            <div className="rote-card p-6 sm:p-8 bg-white border border-[#e8eaee] min-h-[460px] flex flex-col justify-between">
              
              {/* PANE 1: Category */}
              {currentStep === 1 && (
                <div className="space-y-6 animate-fadeIn">
                  <div className="flex items-center justify-between pb-4 border-b border-[#e8eaee]">
                    <div>
                      <span className="text-xs font-mono text-[#1382e8] uppercase tracking-wider block font-bold">
                        Step 01 / 04
                      </span>
                      <h3 className="text-xl font-bold text-[#0c0d10] font-heading mt-0.5">
                        Select device category
                      </h3>
                    </div>
                    <span className="text-xs text-[#6b7079]">Click to choose</span>
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
                              ? 'bg-[#e7f2fd]/50 border-[#1382e8] shadow-sm'
                              : 'bg-white border-[#e8eaee] hover:border-[#1382e8]/40 hover:bg-[#f6f7f8]'
                          }`}
                        >
                          <div className={`p-2.5 rounded-lg mb-3 ${
                            isSelected ? 'bg-[#1382e8] text-white' : 'bg-[#f6f7f8]'
                          }`}>
                            {categoryIcons[cat.id] || <Wrench className="w-5 h-5 text-[#1382e8]" />}
                          </div>
                          <span className="text-sm font-bold text-[#0c0d10] block">{cat.name}</span>
                          <span className="text-xs text-[#6b7079] mt-1 line-clamp-2">
                            {cat.description}
                          </span>
                          <div className="mt-3 flex items-center gap-1 text-xs text-[#1382e8] font-semibold group-hover:translate-x-1 transition-transform">
                            <span>Select Model</span>
                            <ArrowRight className="w-3 h-3" />
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* PANE 2: Model */}
              {currentStep === 2 && (
                <div className="space-y-6 animate-fadeIn">
                  <div className="flex items-center justify-between pb-4 border-b border-[#e8eaee]">
                    <div>
                      <span className="text-xs font-mono text-[#1382e8] uppercase tracking-wider block font-bold">
                        Step 02 / 04
                      </span>
                      <h3 className="text-xl font-bold text-[#0c0d10] font-heading mt-0.5">
                        Which model do you have?
                      </h3>
                    </div>
                    <button
                      onClick={() => setCurrentStep(1)}
                      className="text-xs text-[#6b7079] hover:text-[#0c0d10] flex items-center gap-1 cursor-pointer"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>Back</span>
                    </button>
                  </div>

                  {/* Brand Filter & Search */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
                      {availableBrands.map((b) => (
                        <button
                          key={b}
                          type="button"
                          onClick={() => setSelectedBrand(b)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                            selectedBrand === b
                              ? 'bg-[#0c0d10] text-white'
                              : 'bg-[#f6f7f8] text-[#41454e] hover:bg-[#e8eaee] border border-[#e8eaee]'
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>

                    <div className="relative">
                      <Search className="w-4 h-4 text-[#6b7079] absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        value={modelSearch}
                        onChange={(e) => setModelSearch(e.target.value)}
                        placeholder={`Search ${currentCategoryObj.name} models...`}
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#f6f7f8] border border-[#e8eaee] text-xs sm:text-sm text-[#0c0d10] placeholder-[#6b7079] focus:outline-none focus:border-[#1382e8] focus:bg-white"
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
                                ? 'bg-[#e7f2fd]/60 border-[#1382e8] text-[#0c0d10]'
                                : 'bg-white border-[#e8eaee] text-[#41454e] hover:border-[#1382e8]/40 hover:bg-[#f6f7f8]'
                            }`}
                          >
                            <div>
                              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#f6f7f8] text-[#6b7079] uppercase mr-2 border border-[#e8eaee]">
                                {m.brand}
                              </span>
                              <span className="text-xs sm:text-sm font-semibold text-[#0c0d10]">
                                {m.name}
                              </span>
                            </div>
                            <span className="text-xs text-[#1382e8] font-semibold">Select &rarr;</span>
                          </button>
                        );
                      })
                    ) : (
                      <div className="col-span-2 text-center py-8 text-[#6b7079] text-xs">
                        No models found matching "{modelSearch}". You can write it in at step 4.
                      </div>
                    )}
                  </div>

                  {/* Bottom Navigation */}
                  <div className="pt-4 border-t border-[#e8eaee] flex justify-between items-center">
                    <button
                      type="button"
                      onClick={() => setCurrentStep(1)}
                      className="px-4 py-2 rounded-xl text-xs font-semibold text-[#41454e] hover:text-[#0c0d10] bg-[#f6f7f8] border border-[#e8eaee] cursor-pointer"
                    >
                      &larr; Back
                    </button>
                    <button
                      type="button"
                      onClick={() => setCurrentStep(3)}
                      className="px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-[#0c0d10] hover:bg-[#23262f] cursor-pointer"
                    >
                      Next: Choose Issue &rarr;
                    </button>
                  </div>
                </div>
              )}

              {/* PANE 3: Issue */}
              {currentStep === 3 && (
                <div className="space-y-6 animate-fadeIn">
                  <div className="flex items-center justify-between pb-4 border-b border-[#e8eaee]">
                    <div>
                      <span className="text-xs font-mono text-[#1382e8] uppercase tracking-wider block font-bold">
                        Step 03 / 04
                      </span>
                      <h3 className="text-xl font-bold text-[#0c0d10] font-heading mt-0.5">
                        What problem is occurring?
                      </h3>
                    </div>
                    <button
                      onClick={() => setCurrentStep(2)}
                      className="text-xs text-[#6b7079] hover:text-[#0c0d10] flex items-center gap-1 cursor-pointer"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>Back</span>
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
                              ? 'bg-[#e7f2fd]/60 border-[#1382e8] text-[#0c0d10]'
                              : 'bg-white border-[#e8eaee] text-[#41454e] hover:border-[#1382e8]/40 hover:bg-[#f6f7f8]'
                          }`}
                        >
                          <div className="flex items-start justify-between gap-2 mb-1">
                            <span className="text-xs sm:text-sm font-bold text-[#0c0d10] leading-snug">{issue.name}</span>
                            <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#f6f7f8] text-[#1382e8] border border-[#e8eaee] shrink-0">
                              ~{issue.estimatedMinutes}m
                            </span>
                          </div>
                          <p className="text-xs text-[#6b7079] leading-relaxed mb-2 line-clamp-2">
                            {issue.description}
                          </p>
                          <div className="flex items-center justify-between text-xs">
                            <span className="text-[#41454e] font-semibold">From ${issue.basePrice}</span>
                            <span className="text-[#1382e8] font-semibold">Select &rarr;</span>
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  {/* Data Priority Toggle */}
                  <div className="p-3.5 rounded-xl bg-[#f6f7f8] border border-[#e8eaee] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                    <div>
                      <span className="font-bold text-[#0c0d10] block">Data Preservation Priority:</span>
                      <span className="text-[#6b7079]">Photos, contacts, messages, work documents</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setIsDataImportant(true)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                          isDataImportant ? 'bg-[#0d9963] text-white' : 'bg-white text-[#41454e] border border-[#e8eaee]'
                        }`}
                      >
                        Protect Data
                      </button>
                      <button
                        type="button"
                        onClick={() => setIsDataImportant(false)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                          !isDataImportant ? 'bg-[#0c0d10] text-white' : 'bg-white text-[#41454e] border border-[#e8eaee]'
                        }`}
                      >
                        Wipe is OK
                      </button>
                    </div>
                  </div>

                  {/* Bottom Navigation */}
                  <div className="pt-4 border-t border-[#e8eaee] flex justify-between items-center">
                    <button
                      type="button"
                      onClick={() => setCurrentStep(2)}
                      className="px-4 py-2 rounded-xl text-xs font-semibold text-[#41454e] hover:text-[#0c0d10] bg-[#f6f7f8] border border-[#e8eaee] cursor-pointer"
                    >
                      &larr; Back
                    </button>
                    <button
                      type="button"
                      onClick={() => setCurrentStep(4)}
                      className="px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-[#0c0d10] hover:bg-[#23262f] cursor-pointer"
                    >
                      Next: Choose Service &rarr;
                    </button>
                  </div>
                </div>
              )}

              {/* PANE 4: Service Delivery & Scheduling */}
              {currentStep === 4 && (
                <form onSubmit={handleConfirmReservation} className="space-y-6 animate-fadeIn">
                  <div className="flex items-center justify-between pb-4 border-b border-[#e8eaee]">
                    <div>
                      <span className="text-xs font-mono text-[#1382e8] uppercase tracking-wider block font-bold">
                        Step 04 / 04
                      </span>
                      <h3 className="text-xl font-bold text-[#0c0d10] font-heading mt-0.5">
                        Delivery option & schedule
                      </h3>
                    </div>
                    <button
                      type="button"
                      onClick={() => setCurrentStep(3)}
                      className="text-xs text-[#6b7079] hover:text-[#0c0d10] flex items-center gap-1 cursor-pointer"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>Back</span>
                    </button>
                  </div>

                  {/* 3 Choices */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <button
                      type="button"
                      onClick={() => setServiceMode('in-store')}
                      className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                        serviceMode === 'in-store'
                          ? 'bg-[#e7f2fd]/60 border-[#1382e8] text-[#0c0d10]'
                          : 'bg-white border-[#e8eaee] text-[#41454e]'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <Store className="w-4 h-4 text-[#1382e8]" />
                        <span className="text-[10px] font-mono text-[#0d9963] font-bold">45 min</span>
                      </div>
                      <div className="text-xs font-bold text-[#0c0d10]">In-Store Walk-In</div>
                      <div className="text-[11px] text-[#6b7079] mt-0.5">1636 Route 72 W, Manahawkin</div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setServiceMode('mobile-van')}
                      className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer relative ${
                        serviceMode === 'mobile-van'
                          ? 'bg-[#e7f2fd]/60 border-[#1382e8] text-[#0c0d10]'
                          : 'bg-white border-[#e8eaee] text-[#41454e]'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <Truck className="w-4 h-4 text-[#1382e8]" />
                        <span className="text-[10px] font-mono text-[#1382e8] font-bold">Mobile</span>
                      </div>
                      <div className="text-xs font-bold text-[#0c0d10]">Mobile Van Unit</div>
                      <div className="text-[11px] text-[#6b7079] mt-0.5">We drive to your driveway</div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setServiceMode('mail-in')}
                      className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                        serviceMode === 'mail-in'
                          ? 'bg-[#e7f2fd]/60 border-[#1382e8] text-[#0c0d10]'
                          : 'bg-white border-[#e8eaee] text-[#41454e]'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <Mail className="w-4 h-4 text-[#1382e8]" />
                        <span className="text-[10px] font-mono text-[#41454e] font-bold">US Mail</span>
                      </div>
                      <div className="text-xs font-bold text-[#0c0d10]">Mail-In Service</div>
                      <div className="text-[11px] text-[#6b7079] mt-0.5">Print packing slip & ship</div>
                    </button>
                  </div>

                  {/* Contact Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div>
                      <label className="block text-[#41454e] font-semibold mb-1">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        placeholder="John Miller"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#f6f7f8] border border-[#e8eaee] text-[#0c0d10] placeholder-[#6b7079] focus:outline-none focus:border-[#1382e8] focus:bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-[#41454e] font-semibold mb-1">Phone Number (For SMS updates) *</label>
                      <input
                        type="tel"
                        required
                        value={customerPhone}
                        onChange={(e) => setCustomerPhone(e.target.value)}
                        placeholder="(609) 000-0000"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#f6f7f8] border border-[#e8eaee] text-[#0c0d10] placeholder-[#6b7079] focus:outline-none focus:border-[#1382e8] focus:bg-white"
                      />
                    </div>
                  </div>

                  {serviceMode === 'mobile-van' && (
                    <div className="text-xs">
                      <label className="block text-[#41454e] font-semibold mb-1">Service Address (Home, Office, or Dock) *</label>
                      <input
                        type="text"
                        required
                        value={streetAddress}
                        onChange={(e) => setStreetAddress(e.target.value)}
                        placeholder="123 Bayview Ave, Manahawkin / LBI / Stafford"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#f6f7f8] border border-[#e8eaee] text-[#0c0d10] placeholder-[#6b7079] focus:outline-none focus:border-[#1382e8] focus:bg-white"
                      />
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div>
                      <label className="block text-[#41454e] font-semibold mb-1">Preferred Date</label>
                      <input
                        type="date"
                        value={preferredDate}
                        onChange={(e) => setPreferredDate(e.target.value)}
                        className="w-full px-3.5 py-2 rounded-xl bg-[#f6f7f8] border border-[#e8eaee] text-[#0c0d10] focus:outline-none focus:border-[#1382e8] focus:bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-[#41454e] font-semibold mb-1">Preferred Time</label>
                      <select
                        value={preferredTime}
                        onChange={(e) => setPreferredTime(e.target.value)}
                        className="w-full px-3.5 py-2 rounded-xl bg-[#f6f7f8] border border-[#e8eaee] text-[#0c0d10] focus:outline-none focus:border-[#1382e8] focus:bg-white cursor-pointer"
                      >
                        <option value="Morning (10 AM - 1 PM)">Morning (10 AM - 1 PM)</option>
                        <option value="Afternoon (1 PM - 4 PM)">Afternoon (1 PM - 4 PM)</option>
                        <option value="Late Afternoon (4 PM - 7 PM)">Late Afternoon (4 PM - 7 PM)</option>
                      </select>
                    </div>
                  </div>

                  {/* Submission */}
                  <div className="pt-2 space-y-3">
                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-[#0c0d10] hover:bg-[#23262f] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                    >
                      <CheckCircle2 className="w-4 h-4 text-white" />
                      <span>Lock In ${estimatedPrice} Quote & Reserve Parts</span>
                    </button>
                    <div className="flex items-center justify-center gap-2 text-[11px] text-[#6b7079]">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#0d9963]" />
                      <span>Zero upfront fee. Pay only after full bench test and approval.</span>
                    </div>
                  </div>
                </form>
              )}

              {/* PANE 5: Confirmed */}
              {currentStep === 5 && (
                <div className="text-center py-8 space-y-5 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-[#e9f7f0] border border-[#bfe8d3] text-[#0d9963] mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div>
                    <span className="text-xs font-mono text-[#0d9963] uppercase tracking-widest block font-bold">
                      Reservation Confirmed
                    </span>
                    <h3 className="text-2xl font-black text-[#0c0d10] font-heading mt-1">
                      Your Repair Ticket is Active
                    </h3>
                    <p className="text-xs text-[#6b7079] mt-1 max-w-sm mx-auto">
                      Our Manahawkin technician team has received your ticket and reserved OEM-grade parts.
                    </p>
                  </div>

                  <div className="inline-block p-4 px-8 rounded-2xl bg-[#f6f7f8] border border-[#e8eaee]">
                    <span className="text-[11px] font-mono text-[#6b7079] uppercase tracking-wider block">
                      Ticket Reference Code
                    </span>
                    <span className="font-mono text-2xl font-black text-[#1382e8] tracking-wider">
                      #{confirmedTicketId}
                    </span>
                  </div>

                  <div className="p-4 rounded-xl bg-[#f6f7f8] border border-[#e8eaee] text-left text-xs text-[#41454e] space-y-1.5 max-w-md mx-auto">
                    <div><strong>Customer:</strong> {customerName || 'Customer'} ({customerPhone || 'N/A'})</div>
                    <div><strong>Device:</strong> {currentModel?.name}</div>
                    <div><strong>Service:</strong> {currentIssue?.name} (${estimatedPrice})</div>
                    <div><strong>Delivery:</strong> {serviceMode === 'mobile-van' ? `Mobile Van: ${streetAddress}` : 'In-Store Walk In: 1636 Route 72 W'}</div>
                    <div className="text-[#0d9963] font-semibold"><strong>Warranty:</strong> 60-Day Limited Guarantee Included</div>
                  </div>

                  <div className="flex flex-wrap gap-2 justify-center pt-2">
                    <a
                      href="tel:6099943235"
                      className="px-4 py-2.5 rounded-xl bg-white border border-[#e8eaee] text-xs font-semibold text-[#1382e8] flex items-center gap-1.5 shadow-sm"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Call Shop: (609) 994-3235</span>
                    </a>
                    <button
                      type="button"
                      onClick={resetEstimator}
                      className="px-6 py-2.5 rounded-xl bg-[#0c0d10] hover:bg-[#23262f] text-white font-semibold text-xs"
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
