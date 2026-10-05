import React, { useState } from 'react';
import { SERVICE_POLICIES } from '../data/faqs';
import { 
  ShieldCheck, 
  AlertTriangle, 
  FileText, 
  CheckCircle, 
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
    <section id="warranty" className="py-20 lg:py-28 relative overflow-hidden bg-[#f6f7f8] border-t border-[#e8eaee]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-700 text-xs font-bold border border-emerald-500/20 mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>TRANSPARENCY & PEACE OF MIND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0c0d10] font-heading tracking-tight">
            Our 60-Day Warranty & Policies
          </h2>
          <p className="mt-3 text-[#5a5e69] text-sm sm:text-base">
            Every repair and component is backed by our direct, straightforward service commitment.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {policies.map((p) => {
            const Icon = p.icon;
            const isActive = activeTab === p.id;
            return (
              <button
                key={p.id}
                onClick={() => setActiveTab(p.id as any)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-xs transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#0c0d10] text-white shadow-sm'
                    : 'bg-white text-[#41454e] hover:text-[#0c0d10] hover:bg-slate-50 border border-[#e8eaee]'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{p.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Policy Card */}
        <div className="max-w-3xl mx-auto rounded-2xl bg-white border border-[#e8eaee] p-6 sm:p-9 shadow-sm relative">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-[#e8eaee] mb-6">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#1382e8]">
                {currentPolicy.badge}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#0c0d10] font-heading mt-0.5">
                {currentPolicy.content.title}
              </h3>
            </div>
            <div className="inline-flex items-center gap-2 text-xs text-[#5a5e69] bg-[#f6f7f8] px-3 py-1.5 rounded-xl border border-[#e8eaee]">
              <Clock className="w-3.5 h-3.5 text-[#1382e8]" />
              <span>Effective Date: 2026 Policy</span>
            </div>
          </div>

          <p className="text-sm font-medium text-[#0c0d10] mb-6 bg-[#f6f7f8] p-4 rounded-xl border border-[#e8eaee]">
            {currentPolicy.content.summary}
          </p>

          <div className="space-y-3.5 text-xs sm:text-sm text-[#41454e] leading-relaxed">
            {currentPolicy.content.details.map((point, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#1382e8]/10 text-[#1382e8] border border-[#1382e8]/20 flex items-center justify-center shrink-0 mt-0.5 font-bold text-[10px]">
                  {idx + 1}
                </div>
                <span>{point}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-5 border-t border-[#e8eaee] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#5a5e69]">
            <span>Have questions regarding your specific device or warranty status?</span>
            <a
              href="tel:6099943235"
              className="text-[#1382e8] hover:underline font-bold"
            >
              Speak with a Technician: (609) 994-3235 &rarr;
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
