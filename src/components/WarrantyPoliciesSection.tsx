import React, { useState } from 'react';
import { SERVICE_POLICIES } from '../data/faqs';
import { 
  ShieldCheck, 
  AlertTriangle, 
  FileText, 
  CheckCircle, 
  ChevronDown, 
  ChevronUp,
  HelpCircle,
  Clock
} from 'lucide-react';

export const WarrantyPoliciesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'warranty' | 'risks' | 'estimates' | 'exclusions'>('warranty');

  const policies = [
    {
      id: 'warranty',
      title: '60-Day Shop Warranty',
      icon: ShieldCheck,
      badge: 'Guaranteed',
      content: SERVICE_POLICIES.warranty
    },
    {
      id: 'estimates',
      title: 'Estimates & Approvals',
      icon: CheckCircle,
      badge: 'Zero Surprises',
      content: SERVICE_POLICIES.estimates
    },
    {
      id: 'risks',
      title: 'Repair Disclosures',
      icon: AlertTriangle,
      badge: 'Transparency',
      content: SERVICE_POLICIES.repairRisks
    },
    {
      id: 'exclusions',
      title: 'Warranty Exclusions',
      icon: FileText,
      badge: 'Fair Policy',
      content: SERVICE_POLICIES.exclusions
    }
  ];

  const currentPolicy = policies.find(p => p.id === activeTab) || policies[0];

  return (
    <section id="warranty" className="py-16 lg:py-24 relative overflow-hidden bg-slate-900/40 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold border border-emerald-500/20 mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>TRANSPARENCY & PEACE OF MIND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-heading tracking-tight">
            Our 60-Day Warranty & Service Policies
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            We stand behind every repair and every component we install. Here is our straightforward, honest service commitment to you.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-8">
          {policies.map((p) => {
            const Icon = p.icon;
            const isActive = activeTab === p.id;
            return (
              <button
                key={p.id}
                onClick={() => setActiveTab(p.id as any)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs transition-all cursor-pointer ${
                  isActive
                    ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/20 scale-105'
                    : 'bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{p.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Policy Card */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-slate-950 border border-slate-800 p-6 sm:p-10 shadow-2xl relative">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-slate-800 mb-6">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-400">
                {currentPolicy.badge}
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white font-heading mt-0.5">
                {currentPolicy.content.title}
              </h3>
            </div>
            <div className="inline-flex items-center gap-2 text-xs text-slate-400 bg-slate-900 px-3 py-1.5 rounded-xl border border-slate-800">
              <Clock className="w-3.5 h-3.5 text-cyan-400" />
              <span>Effective Date: 2026 Policy</span>
            </div>
          </div>

          <p className="text-sm font-semibold text-slate-200 mb-6 bg-slate-900/60 p-4 rounded-xl border border-slate-800">
            {currentPolicy.content.summary}
          </p>

          <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
            {currentPolicy.content.details.map((point, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 flex items-center justify-center shrink-0 mt-0.5 font-bold text-[10px]">
                  {idx + 1}
                </div>
                <span>{point}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
            <span>Have questions regarding your specific device or warranty status?</span>
            <a
              href="tel:6099943235"
              className="text-cyan-400 hover:text-cyan-300 font-bold"
            >
              Speak with a Technician: (609) 994-3235 &rarr;
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
