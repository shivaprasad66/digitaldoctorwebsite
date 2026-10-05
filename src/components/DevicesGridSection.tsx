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
      tagline: 'OLED screen, battery swap & charging ports',
      icon: Smartphone,
      popular: ['iPhone 16 / 15 / 14 / 13 / 11 / SE', 'Samsung S24 Ultra & Z Fold', 'Google Pixel 8 & 9 Pro', 'Moto Razr+'],
      repairs: ['Cracked OLED Display', 'Dead Battery Swap', 'Charging Port Rebuild', 'Rear Glass Housing']
    },
    {
      id: 'tablets',
      name: 'iPads & Tablets',
      tagline: 'Digitizer glass, LCDs & frame bending fix',
      icon: Tablet,
      popular: ['iPad Pro 12.9" & 11"', 'iPad Air 4th & 5th Gen', 'iPad 10th & 9th Gen', 'Galaxy Tab S9 & A11+'],
      repairs: ['Glass Digitizer / Touch Failure', 'Bent Aluminum Frame Press', 'USB-C Port Replacement', 'Pencil Sensor Triage']
    },
    {
      id: 'consoles',
      name: 'Gaming Consoles',
      tagline: 'PS5 & Xbox HDMI micro-soldering & triage',
      icon: Gamepad2,
      popular: ['PlayStation 5 (Disc / Digital / Slim)', 'Xbox Series X & Series S', 'Nintendo Switch OLED', 'PS5 Portal'],
      repairs: ['HDMI Port Micro-Soldering', 'No Video White Light Fix', 'Overheating & Liquid Metal', 'Disc Drive Laser Alignment']
    },
    {
      id: 'laptops',
      name: 'Laptops & MacBooks',
      tagline: 'Retina screens, keyboards, batteries & SSDs',
      icon: Laptop,
      popular: ['MacBook Pro & Air (M1/M2/M3)', 'HP Spectre x360 & Envy', 'Dell XPS 13 & 15', 'MSI & Asus Gaming'],
      repairs: ['Retina Display Replacement', 'Liquid Damage Diagnostic', 'Keyboard & Trackpad Repair', 'SSD Upgrade & Data Transfer']
    },
    {
      id: 'microsoldering',
      name: 'Micro-Soldering & Logic Boards',
      tagline: 'Component-level triage under 40x microscope',
      icon: Cpu,
      popular: ['Dead Motherboards', 'Burnt Power ICs & Chokes', 'Short Circuited VDD Rails', 'Chip-Off Data Recovery'],
      repairs: ['SMD Component Soldering', 'Ultrasonic Chemical Wash', 'Power Rail Jumpers Rebuild', 'Emergency Data Extraction']
    },
    {
      id: 'smartwatches',
      name: 'Smartwatches',
      tagline: 'Apple Watch & Galaxy Watch displays & seals',
      icon: Watch,
      popular: ['Apple Watch Ultra 1 & 2', 'Apple Watch Series 9 / 8 / 7', 'Galaxy Watch 6 & 5 Pro'],
      repairs: ['Sapphire Glass / OLED Replacement', 'Swollen Battery Swap', 'Waterproof Gasket Reseal', 'Digital Crown Sensor']
    }
  ];

  return (
    <section className="py-20 lg:py-28 relative overflow-hidden bg-[#f6f7f8] border-b border-[#e8eaee]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section title */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#e8eaee] text-xs font-mono text-[#41454e] mb-3">
            <span className="w-2 h-2 rounded-full bg-[#1382e8]"></span>
            <span>Hardware Coverage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0c0d10] font-heading tracking-tight leading-tight">
            Expert repairs for all leading brands
          </h2>
          <p className="text-[#41454e] text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
            From cracked screens and failing batteries to micro-soldering console motherboards, our technicians have serviced over 10,000+ devices.
          </p>
        </div>

        {/* Grid of cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {devices.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="rote-card p-6 flex flex-col justify-between bg-white border border-[#e8eaee] hover:border-[#1382e8]/50 transition-all duration-200"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-[#e7f2fd] border border-[#bedcf8] flex items-center justify-center text-[#1382e8]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-[#f6f7f8] text-[#41454e] border border-[#e8eaee] flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3 text-[#0d9963]" />
                      60-Day Warranty
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#0c0d10] font-heading mb-1">{item.name}</h3>
                  <p className="text-xs text-[#6b7079] mb-4">{item.tagline}</p>

                  {/* Common repairs list */}
                  <div className="space-y-1.5 mb-5 border-t border-[#f6f7f8] pt-3 text-xs text-[#41454e]">
                    {item.repairs.map((rep, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#1382e8] shrink-0" />
                        <span>{rep}</span>
                      </div>
                    ))}
                  </div>

                  {/* Popular tags */}
                  <div className="pt-2 border-t border-[#f6f7f8] mb-5">
                    <div className="flex flex-wrap gap-1">
                      {item.popular.slice(0, 3).map((model, idx) => (
                        <span key={idx} className="text-[10px] px-2 py-0.5 rounded bg-[#f6f7f8] text-[#6b7079] border border-[#e8eaee]">
                          {model}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <a
                  href="#estimator"
                  onClick={() => onSelectCategory(item.id)}
                  className="w-full py-2.5 rounded-xl font-semibold text-xs text-[#0c0d10] bg-[#f6f7f8] hover:bg-[#ebeef2] border border-[#e8eaee] hover:border-[#1382e8]/40 text-center transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Estimate {item.name.split(' ')[0]} Repair</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#6b7079]" />
                </a>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
