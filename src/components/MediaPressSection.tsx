import React from 'react';
import { TESTIMONIALS, PRESS_FEATURE } from '../data/testimonials';
import { 
  Star, 
  ExternalLink, 
  CheckCircle2, 
  Newspaper
} from 'lucide-react';
import { YoutubeIcon } from './SocialIcons';

export const MediaPressSection: React.FC = () => {
  return (
    <section id="press" className="py-20 lg:py-28 relative overflow-hidden bg-[#f6f7f8] border-b border-[#e8eaee]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Press Feature Spotlight Card */}
        <div className="rote-card bg-white border border-[#e8eaee] p-8 sm:p-10 mb-16 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f6f7f8] border border-[#e8eaee] text-xs font-mono text-[#41454e]">
                <Newspaper className="w-3.5 h-3.5 text-[#1382e8]" />
                <span>LOCAL PRESS FEATURE • THE SANDPAPER</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0c0d10] font-heading leading-tight">
                "{PRESS_FEATURE.headline}"
              </h3>

              <p className="text-sm text-[#41454e] leading-relaxed">
                {PRESS_FEATURE.excerpt}
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={PRESS_FEATURE.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs text-white bg-[#0c0d10] hover:bg-[#23262f] transition-colors shadow-sm"
                >
                  <span>Read Article on The Sandpaper</span>
                  <ExternalLink className="w-3.5 h-3.5 text-white/80" />
                </a>

                <a
                  href="https://www.youtube.com/channel/UCta8FWxM474irDMPABq2o4Q"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-xs text-[#0c0d10] bg-[#f6f7f8] hover:bg-[#ebeef2] border border-[#e8eaee] transition-colors"
                >
                  <YoutubeIcon className="w-4 h-4 text-red-500" />
                  <span>Subscribe on YouTube</span>
                </a>
              </div>
            </div>

            {/* Right Photo */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-xl overflow-hidden border border-[#e8eaee] shadow-sm relative aspect-video sm:aspect-4/3 bg-[#f6f7f8]">
                <img
                  src="/images/mobile_unit.jpg"
                  alt="Digital Doctor Mobile Repair Van - The Doctor's on the Way"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute bottom-3 left-3 text-xs font-semibold text-[#0c0d10] bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-lg border border-[#e8eaee] shadow-sm">
                  🚐 Mobile Van across Ocean County, NJ
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Customer Testimonials Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#e8eaee] text-xs font-mono text-[#41454e] mb-3">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span>Verified Customer Reviews</span>
          </div>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-[#0c0d10] font-heading tracking-tight leading-tight">
            What our clients are saying
          </h3>
          <p className="text-xs sm:text-sm text-[#41454e] mt-2">
            Over 500+ satisfied clients across Manahawkin, Long Beach Island, Barnegat, and mail-in customers nationwide.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="rote-card p-6 flex flex-col justify-between bg-white border border-[#e8eaee] space-y-4"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex gap-0.5 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  {item.verified && (
                    <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-[#0d9963]">
                      <CheckCircle2 className="w-3 h-3" />
                      Verified
                    </span>
                  )}
                </div>

                <p className="text-xs text-[#41454e] leading-relaxed italic mb-4">
                  "{item.review}"
                </p>
              </div>

              <div className="pt-3 border-t border-[#f6f7f8]">
                <div className="font-bold text-xs text-[#0c0d10]">{item.name}</div>
                <div className="text-[11px] text-[#6b7079]">{item.location} • <span className="text-[#1382e8]">{item.device}</span></div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
