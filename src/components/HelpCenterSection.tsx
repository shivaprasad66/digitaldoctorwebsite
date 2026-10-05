import React, { useState, useMemo } from 'react';
import { FAQS } from '../data/faqs';
import { 
  HelpCircle, 
  Search, 
  Plus, 
  Minus, 
  Phone, 
  ShieldCheck, 
  Clock, 
  Wrench, 
  FileText 
} from 'lucide-react';

export const HelpCenterSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');

  const categories = [
    { id: 'all', label: 'All Topics' },
    { id: 'general', label: 'General & Devices' },
    { id: 'turnaround', label: 'Turnaround Times' },
    { id: 'pricing', label: 'Pricing & Estimates' },
    { id: 'mail-in', label: 'Mail-In Service' },
    { id: 'warranty', label: '60-Day Warranty' }
  ];

  const filteredFaqs = useMemo(() => {
    return FAQS.filter((faq) => {
      if (activeCategory !== 'all' && faq.category !== activeCategory) {
        return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        return faq.question.toLowerCase().includes(q) || faq.answer.toLowerCase().includes(q);
      }
      return true;
    });
  }, [activeCategory, searchQuery]);

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 relative overflow-hidden bg-slate-950/80 border-t border-slate-900">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial Eyebrow & Header */}
        <div className="max-w-3xl mb-14">
          <span className="eyebrow mb-3">
            <span className="inline-block h-px w-8 bg-cyan-400/60" aria-hidden="true"></span>
            Knowledge & Guarantees — FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading tracking-tight leading-tight">
            Frequently asked questions
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-2.5 max-w-2xl leading-relaxed">
            Transparent answers regarding our 45-minute turnaround, 60-day warranty coverage, mail-in workflow, and diagnostic procedures.
          </p>
        </div>

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Search & Topic Filter Pills (4 cols - Sticky) */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
            
            {/* Search Input */}
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search topics (e.g. warranty, water, turnaround)..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
              />
            </div>

            {/* Category Navigation List */}
            <div className="rounded-2xl surface-card p-4 border border-slate-800 space-y-1.5">
              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block px-3 py-1 font-semibold">
                Categories
              </span>
              {categories.map((c) => {
                const isActive = activeCategory === c.id;
                return (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => setActiveCategory(c.id)}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                      isActive
                        ? 'bg-slate-800 text-cyan-400 border border-slate-700'
                        : 'text-slate-400 hover:text-white hover:bg-slate-900'
                    }`}
                  >
                    <span>{c.label}</span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>}
                  </button>
                );
              })}
            </div>

            {/* Direct Technician Help Box */}
            <div className="rounded-2xl surface-card p-5 border border-slate-800 space-y-3">
              <div className="flex items-center gap-2 text-cyan-400 font-bold text-xs uppercase font-mono">
                <Phone className="w-4 h-4" />
                <span>Need immediate triage?</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                If your device won't turn on or experienced water exposure, speak directly to our technician bench.
              </p>
              <a
                href="tel:6099943235"
                className="inline-flex items-center gap-2 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 border border-slate-700 px-4 py-2 rounded-xl transition-colors"
              >
                <span>Call (609) 994-3235</span>
              </a>
            </div>

          </div>

          {/* Right Column: Clean Accordion Q&A (8 cols) */}
          <div className="lg:col-span-8 space-y-3">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, index) => {
                const isOpen = openFaqId === faq.id;
                return (
                  <div
                    key={faq.id}
                    className={`rounded-2xl border transition-all duration-200 ${
                      isOpen
                        ? 'bg-slate-900/90 border-cyan-500/40 shadow-lg'
                        : 'surface-card border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 cursor-pointer"
                    >
                      <div className="flex items-baseline gap-3">
                        <span className="font-mono text-xs text-cyan-400/90 font-bold tabular shrink-0">
                          {index < 9 ? `0${index + 1}` : index + 1}
                        </span>
                        <span className="text-sm sm:text-base font-bold text-white font-heading leading-snug">
                          {faq.question}
                        </span>
                      </div>
                      <div className="p-1 rounded-lg bg-slate-800/80 text-slate-300 shrink-0 mt-0.5">
                        {isOpen ? <Minus className="w-3.5 h-3.5 text-cyan-400" /> : <Plus className="w-3.5 h-3.5" />}
                      </div>
                    </button>

                    {isOpen && (
                      <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 animate-fadeIn">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })
            ) : (
              <div className="text-center py-12 surface-card rounded-2xl border border-slate-800 text-xs text-slate-400">
                No questions found matching "{searchQuery}".
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
