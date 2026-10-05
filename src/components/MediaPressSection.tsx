import React from 'react';
import { TESTIMONIALS, PRESS_FEATURE } from '../data/testimonials';
import { 
  Star, 
  ExternalLink, 
  CheckCircle2, 
  Newspaper, 
  Tv, 
  Award, 
  Sparkles 
} from 'lucide-react';
import { YoutubeIcon } from './SocialIcons';

export const MediaPressSection: React.FC = () => {
  return (
    <section id="press" className="py-16 lg:py-24 relative overflow-hidden bg-slate-950 border-t border-slate-900">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-600/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Press Feature Spotlight Card */}
        <div className="rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900 to-cyan-950/40 border border-slate-800 p-8 sm:p-10 mb-16 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-bold border border-cyan-500/20">
                <Newspaper className="w-3.5 h-3.5" />
                <span>LOCAL PRESS SPOTLIGHT • THE SANDPAPER</span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-heading leading-tight">
                "{PRESS_FEATURE.headline}"
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed">
                {PRESS_FEATURE.excerpt}
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href={PRESS_FEATURE.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors shadow-md shadow-cyan-500/20"
                >
                  <span>Read Article on The Sandpaper</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href="https://www.youtube.com/channel/UCta8FWxM474irDMPABq2o4Q"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-xs text-red-400 bg-red-950/30 hover:bg-red-950/50 border border-red-800/40 transition-colors"
                >
                  <YoutubeIcon className="w-4 h-4 text-red-500" />
                  <span>Subscribe to our YouTube</span>
                </a>
              </div>
            </div>

            {/* Right Photo */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl relative aspect-video sm:aspect-4/3">
                <img
                  src="/images/mobile_unit.jpg"
                  alt="Digital Doctor Mobile Repair Van - The Doctor's on the Way"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-3 text-xs font-bold text-white bg-slate-950/80 px-2.5 py-1 rounded-lg backdrop-blur-sm border border-slate-700">
                  🚐 Mobile Van in Action across Ocean County, NJ
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Customer Testimonials Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-bold border border-amber-500/20 mb-2">
            <Star className="w-3.5 h-3.5 fill-amber-400" />
            <span>VERIFIED REVIEWS</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-white font-heading">
            What Our Customers Are Saying
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            Over 500+ satisfied clients across Manahawkin, LBI, Barnegat, and mail-in customers nationwide.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl bg-slate-900/80 border border-slate-800 p-5 flex flex-col justify-between hover:border-slate-700 transition-all shadow-lg"
            >
              <div>
                {/* Rating stars & verified */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex gap-0.5 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  {item.verified && (
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-400">
                      <CheckCircle2 className="w-3 h-3" />
                      Verified
                    </span>
                  )}
                </div>

                <p className="text-xs text-slate-300 leading-relaxed italic mb-4">
                  "{item.review}"
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800/80">
                <div className="font-bold text-xs text-white">{item.name}</div>
                <div className="text-[11px] text-slate-400">{item.location} • <span className="text-cyan-400">{item.device}</span></div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
