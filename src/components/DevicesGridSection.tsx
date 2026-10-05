import React from 'react';
import { 
  Smartphone, 
  Tablet, 
  Laptop, 
  Gamepad2, 
  Cpu, 
  Watch, 
  ArrowRight,
  ShieldCheck,
  Zap,
  CheckCircle2
} from 'lucide-react';

interface DevicesGridSectionProps {
  onSelectCategory: (categoryId: string) => void;
}

export const DevicesGridSection: React.FC<DevicesGridSectionProps> = ({ onSelectCategory }) => {
  const devices = [
    {
      id: 'phones',
      name: 'Smartphones & iPhones',
      tagline: 'Same-day screen & battery restoration',
      icon: Smartphone,
      gradient: 'from-blue-500/20 to-cyan-500/20',
      accentColor: 'text-cyan-400',
      borderColor: 'group-hover:border-cyan-500/50',
      popular: ['iPhone 16 / 15 / 14 / 13 / 12 / 11 / SE', 'Samsung Galaxy S24 Ultra & Z Fold', 'Google Pixel 8 & 9 Pro', 'Motorola Razr+'],
      repairs: ['Cracked OLED Display', 'Dead Battery Swap', 'Charging Port Rebuild', 'Rear Glass Housing']
    },
    {
      id: 'tablets',
      name: 'iPads & Tablets',
      tagline: 'Digitizer glass, LCDs & charging ports',
      icon: Tablet,
      gradient: 'from-purple-500/20 to-blue-500/20',
      accentColor: 'text-purple-400',
      borderColor: 'group-hover:border-purple-500/50',
      popular: ['iPad Pro 12.9" & 11"', 'iPad Air 4th & 5th Gen', 'iPad 10th & 9th Gen', 'Samsung Galaxy Tab S9 & A11+'],
      repairs: ['Glass Digitizer / Touch Failure', 'Bent Aluminum Frame Straightening', 'USB-C Port Replacement', 'Pencil Sensor Triage']
    },
    {
      id: 'consoles',
      name: 'Gaming Consoles',
      tagline: 'PS5 & Xbox HDMI micro-soldering & triage',
      icon: Gamepad2,
      gradient: 'from-emerald-500/20 to-cyan-500/20',
      accentColor: 'text-emerald-400',
      borderColor: 'group-hover:border-emerald-500/50',
      popular: ['PlayStation 5 (Disc / Digital / Slim)', 'Xbox Series X & Series S', 'Nintendo Switch OLED', 'PS5 Portal'],
      repairs: ['HDMI Port Micro-Soldering', 'No Video White Light Issue', 'Overheating & Liquid Metal Repaste', 'Disc Drive Laser Alignment']
    },
    {
      id: 'laptops',
      name: 'Laptops & MacBooks',
      tagline: 'Screen, keyboard, battery & logic boards',
      icon: Laptop,
      gradient: 'from-amber-500/20 to-orange-500/20',
      accentColor: 'text-amber-400',
      borderColor: 'group-hover:border-amber-500/50',
      popular: ['Apple MacBook Pro & Air (M1/M2/M3)', 'HP Spectre x360 & Envy', 'Dell XPS 13 & 15', 'MSI & Asus Gaming Laptops'],
      repairs: ['Retina Display Replacement', 'Liquid Damage Diagnostic', 'Keyboard / Trackpad Repair', 'SSD Upgrade & Data Migration']
    },
    {
      id: 'microsoldering',
      name: 'Micro-Soldering & Logic Boards',
      tagline: 'Component-level triage under 40x microscope',
      icon: Cpu,
      gradient: 'from-rose-500/20 to-red-500/20',
      accentColor: 'text-rose-400',
      borderColor: 'group-hover:border-rose-500/50',
      popular: ['Dead Motherboards', 'Burnt Power ICs & Chokes', 'Short Circuited VDD Rails', 'Emergency Chip-Off Data Recovery'],
      repairs: ['SMD Component Soldering', 'Ultrasonic Chemical De-corrosion', 'Power Rail Jumpers & Trace Rebuild', 'Data Extraction']
    },
    {
      id: 'smartwatches',
      name: 'Smartwatches',
      tagline: 'Apple Watch & Galaxy Watch screens',
      icon: Watch,
      gradient: 'from-sky-500/20 to-indigo-500/20',
      accentColor: 'text-sky-400',
      borderColor: 'group-hover:border-sky-500/50',
      popular: ['Apple Watch Ultra 1 & 2', 'Apple Watch Series 9 / 8 / 7 / SE', 'Samsung Galaxy Watch 6 & 5 Pro'],
      repairs: ['Sapphire Glass / OLED Replacement', 'Swollen Battery Swap', 'Waterproof Pressure Gasket Reseal', 'Digital Crown Sensor']
    }
  ];

  return (
    <section className="py-16 lg:py-24 relative overflow-hidden bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-bold border border-cyan-500/20 mb-3">
            <Zap className="w-3.5 h-3.5" />
            <span>FULL SPECTRUM HARDWARE TRIAGE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-heading tracking-tight">
            Expert Repairs for All Leading Brands
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            From shattered glass and failing batteries to micro-soldering console motherboards, our technicians have serviced over 10,000+ devices.
          </p>
        </div>

        {/* Grid of cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {devices.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className={`group relative rounded-2xl bg-slate-900/70 border border-slate-800 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-500/10 ${item.borderColor}`}
              >
                <div>
                  {/* Icon & tag */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} border border-slate-700/60 flex items-center justify-center ${item.accentColor}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-800/80 text-slate-300 flex items-center gap-1 border border-slate-700/60">
                      <ShieldCheck className="w-3 h-3 text-emerald-400" />
                      60-Day Warranty
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white font-heading mb-1">{item.name}</h3>
                  <p className="text-xs text-slate-300 mb-4">{item.tagline}</p>

                  {/* Common repairs */}
                  <div className="space-y-1.5 mb-5 border-t border-slate-800/80 pt-3">
                    <span className="text-[11px] uppercase font-bold text-slate-400 tracking-wider block mb-1">
                      Common Services:
                    </span>
                    {item.repairs.map((rep, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span>{rep}</span>
                      </div>
                    ))}
                  </div>

                  {/* Supported models */}
                  <div className="pt-2 border-t border-slate-800/60 mb-5">
                    <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block mb-1.5">
                      Popular Devices:
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {item.popular.map((model, idx) => (
                        <span key={idx} className="text-[10px] px-2 py-0.5 rounded bg-slate-950 text-slate-400 border border-slate-800">
                          {model}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <a
                  href="#estimator"
                  onClick={() => onSelectCategory(item.id)}
                  className="w-full py-2.5 rounded-xl font-semibold text-xs text-slate-300 bg-slate-950 hover:bg-cyan-950/60 border border-slate-800 hover:border-cyan-500/50 hover:text-cyan-300 text-center transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Estimate {item.name}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
