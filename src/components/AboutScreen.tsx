import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, Award, ShieldCheck, Sparkles } from 'lucide-react';

interface AboutScreenProps {
  onNavigate: (screen: 'experience' | 'menu' | 'reservations' | 'about') => void;
}

export default function AboutScreen({ onNavigate }: AboutScreenProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="space-y-24 pb-20 relative overflow-hidden"
      id="about-screen-root"
    >
      {/* Decorative background element */}
      <div className="absolute top-[35%] -right-16 text-[350px] font-bold text-white/[0.012] select-none pointer-events-none font-serif leading-none">
        A
      </div>

      {/* Hero Section */}
      <section className="relative h-[65vh] flex items-center justify-center overflow-hidden" id="about-hero">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=1600"
            alt="Tableware Luxury Highlight"
            className="w-full h-full object-cover brightness-[0.16] scale-[1.02]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-[#0A0A0A]" />
        </div>

        <div className="relative z-10 text-center max-w-4xl px-6 space-y-8" id="about-hero-content">
          <div className="inline-block p-1 border border-white/5 bg-black/40">
            <span className="px-3 py-1 border border-[#F27D26]/60 text-[#F27D26] font-mono text-[9px] tracking-[0.35em] uppercase block">
              THE ARTISANAL NARRATIVE
            </span>
          </div>
          <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter text-white leading-none">
            Refining the Art of<br />
            <span className="text-gold-400 italic font-serif lowercase" style={{ fontFamily: 'Georgia, serif' }}>abundance</span>
          </h1>
          <p className="text-white/60 text-xs md:text-sm max-w-xl mx-auto font-light leading-relaxed tracking-wide">
            An look inside the philosophy and architecture that transforms a physical meal into a continuous sensory gallery.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="max-w-6xl mx-auto px-6" id="about-story">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3">
              <div className="h-px w-6 bg-[#F27D26]" />
              <span className="text-[#F27D26] font-mono text-[9px] tracking-[0.25em] uppercase">OUR ORIGIN</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter leading-none">
              A Vision of <br />
              <span className="italic text-white/30 font-serif lowercase" style={{ fontFamily: 'Georgia, serif' }}>transcendence</span>
            </h2>

            <div className="space-y-4 text-white/60 font-light text-xs md:text-sm leading-relaxed tracking-wide">
              <p>
                LUMIÈRE was founded on a simple, provocative premise: that a table should never sacrifice artisanal intent for variety. We completely dismantled the standard layout of banquets. In its place, we established interactive ateliers led by celebrated masters.
              </p>
              <p>
                Each dawn, our hearths are sparked with organic cherrywood blocks and cedar bark. We receive boutique sea catches and rare botanical greens selected just hours before. The traditional buffet is elevated into an exquisite, responsive exhibition.
              </p>
              <p>
                It is a place where every element is carefully composed, and attendees dictate the path, engaging directly with the creators of each dynamic masterpiece.
              </p>
            </div>
          </div>
          <div className="lg:col-span-5 relative" id="about-origin-img-container">
            <div className="absolute -inset-3 border border-[#F27D26]/20 -z-10 translate-x-3 translate-y-3 pointer-events-none" />
            <div className="editorial-notch-tl" />
            <img
              src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80&w=800"
              alt="Chef trimming microgreens micro-greens delicately"
              className="object-cover w-full h-[440px] brightness-75 border border-white/15 grayscale hover:grayscale-0 transition-all duration-700 block"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Executive Chef Section */}
      <section className="bg-black/40 py-20 border-t border-b border-white/5" id="executive-chef-section">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            <div className="lg:col-span-5 relative" id="chef-image-container">
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
              <img
                src="https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&q=80&w=800"
                alt="Executive Chef Julian Vance"
                className="object-cover w-full h-[520px] filter brightness-75 border border-white/10 grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-6 left-6 right-6 z-20 bg-black/95 border border-white/10 p-5">
                <span className="font-mono text-[9px] text-[#F27D26] tracking-[0.2em] block uppercase">EXECUTIVE CHEF</span>
                <span className="text-xl text-white font-serif font-light tracking-tight">Julian Vance</span>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-8">
              <div className="flex items-center gap-3">
                <div className="h-px w-6 bg-[#F27D26]" />
                <span className="text-[#F27D26] font-mono text-[9px] tracking-[0.25em] uppercase">THE MAESTRO</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter leading-none">
                Architect of <br />
                <span className="italic text-white/30 font-serif lowercase" style={{ fontFamily: 'Georgia, serif' }}>flavor odyssey</span>
              </h2>
              <p className="text-white/60 font-light text-xs md:text-sm leading-relaxed tracking-wide">
                Chef Julian Vance has spent two decades pioneering sustainable luxurious cuisine in triple-Michelin-starred kitchens in Lyon, San Francisco, and Tokyo. At LUMIÈRE, he translates his masterly fine-dining rigor into a continuous, theatrical culinary exhibition.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2" id="chef-pedigree-grid">
                <div className="border border-white/5 p-6 bg-[#111111]/90 hover:border-[#F27D26]/45 transition-all">
                  <div className="flex items-center gap-3 mb-3 text-[#F27D26]">
                    <Award className="w-4 h-4" />
                    <span className="font-mono text-white text-xs uppercase tracking-widest">PEDIGREE TECHNIQUE</span>
                  </div>
                  <p className="text-xs text-white/40 leading-relaxed font-light">
                    Applying absolute precision, meticulous plating, and intense flavor profiling gained from world-leading kitchens.
                  </p>
                </div>

                <div className="border border-white/5 p-6 bg-[#111111]/90 hover:border-[#F27D26]/45 transition-all">
                  <div className="flex items-center gap-3 mb-3 text-[#F27D26]">
                    <ShieldCheck className="w-4 h-4" />
                    <span className="font-mono text-white text-xs uppercase tracking-widest">TRACEABLE FARMING</span>
                  </div>
                  <p className="text-xs text-white/40 leading-relaxed font-light">
                    Every element is traceable. Vance collaborates with regenerative fisherman and boutique botanists for unparalleled freshness.
                  </p>
                </div>
              </div>

              <div className="pt-4 text-[11px] italic text-[#F27D26] font-light flex items-center gap-3 bg-white/[0.02] p-4 border border-white/5">
                <Sparkles className="w-4 h-4 text-[#F27D26] flex-shrink-0" />
                <span>"We don't cook for survival; we assemble elements to stimulate memory and wonder." &mdash; J. Vance</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Atmosphere Section */}
      <section className="max-w-6xl mx-auto px-6 space-y-12" id="about-atmosphere">
        <div className="text-center space-y-4 max-w-2xl mx-auto flex flex-col items-center">
          <span className="px-3 py-1 border border-white/10 text-white/40 text-[9px] font-bold uppercase tracking-[0.3em]">THE VISUAL SYMPHONY</span>
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter leading-none text-center">
            Atmosphere: A Sanctuary of <br />
            <span className="text-[#F27D26] italic font-serif lowercase" style={{ fontFamily: 'Georgia, serif' }}>light & shadow</span>
          </h2>
          <p className="text-white/50 font-light text-xs leading-relaxed max-w-lg">
            Designed on the principles of Chiaroscuro, our environment uses targeted optical projection beams and deep rich shadow to guide your culinary attention.
          </p>
          <div className="w-px h-12 bg-white/10 mt-2"></div>
        </div>

        {/* 3-Image Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4" id="atmosphere-gallery">
          <div className="relative group overflow-hidden aspect-[3/4] border border-white/10 bg-black" id="atmosphere-img-1">
            <img
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800"
              alt="Elegant secluded booth seating"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02] brightness-50"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />
            <div className="absolute bottom-6 left-6 right-6 text-left space-y-1">
              <span className="font-mono text-[8px] text-[#F27D26] tracking-widest block uppercase">THE SPACE</span>
              <span className="text-base text-white font-serif font-light">The Whispering Salon</span>
            </div>
          </div>

          <div className="relative group overflow-hidden aspect-[3/4] border border-white/10 bg-black md:mt-8" id="atmosphere-img-2">
            <img
              src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800"
              alt="Gourmet open kitchen actions and flame details"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02] brightness-50"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />
            <div className="absolute bottom-6 left-6 right-6 text-left space-y-1">
              <span className="font-mono text-[8px] text-[#F27D26] tracking-widest block uppercase">THE PERFORMANCE</span>
              <span className="text-base text-white font-serif font-light">The Master Hearth</span>
            </div>
          </div>

          <div className="relative group overflow-hidden aspect-[3/4] border border-white/10 bg-black" id="atmosphere-img-3">
            <img
              src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&q=80&w=800"
              alt="Bespoke glassware and gold table settings"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02] brightness-50"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />
            <div className="absolute bottom-6 left-6 right-6 text-left space-y-1">
              <span className="font-mono text-[8px] text-[#F27D26] tracking-widest block uppercase">THE AMBIANCE</span>
              <span className="text-base text-white font-serif font-light">Golden Shadow Tables</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Bottom Section */}
      <section className="max-w-4xl mx-auto px-6 text-center pt-8" id="about-cta">
        <div className="border border-white/10 p-12 bg-[#0F0F0F] relative overflow-hidden">
          <div className="editorial-notch-tl" />
          <div className="absolute top-0 right-0 w-24 h-24 bg-[#F27D26]/5 blur-3xl rounded-full" />
          
          <h3 className="text-3xl font-black uppercase tracking-tighter text-white mb-4 leading-none">
            Are You Ready to Experience the Unseen?
          </h3>
          <p className="text-white/50 text-xs max-w-lg mx-auto mb-8 font-light leading-relaxed tracking-wider">
            Seating is highly limited. Each session accommodates only forty guests to guarantee absolutely pristine preparation and service.
          </p>

          <button
            onClick={() => onNavigate('reservations')}
            className="inline-flex items-center gap-2 px-10 py-4 bg-[#F27D26] text-black font-semibold font-mono text-[10px] uppercase tracking-[0.25em] hover:bg-[#D66210] transition-all duration-300 rounded-none cursor-pointer group"
          >
            <span>EXPERIENCE THE UNSEEN</span>
            <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
          </button>
        </div>
      </section>
    </motion.div>
  );
}
