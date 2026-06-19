import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, Users, ChevronRight, Sparkles, Flame, Eye, Landmark } from 'lucide-react';
import { EXPERIENCE_HIGHLIGHTS } from '../data';

interface ExperienceScreenProps {
  onNavigate: (screen: 'experience' | 'menu' | 'reservations' | 'about') => void;
  onSetPrefill: (date: string, guests: number) => void;
}

export default function ExperienceScreen({ onNavigate, onSetPrefill }: ExperienceScreenProps) {
  const [miniDate, setMiniDate] = useState<string>('');
  const [miniGuests, setMiniGuests] = useState<number>(2);

  const handleMiniCheckAvailability = (e: React.FormEvent) => {
    e.preventDefault();
    onSetPrefill(miniDate, miniGuests);
    onNavigate('reservations');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="space-y-24 pb-20 relative overflow-hidden"
      id="experience-screen-root"
    >
      {/* Decorative Giant Letter watermark */}
      <div className="absolute top-[25%] -left-12 text-[320px] font-bold text-white/[0.015] leading-none select-none pointer-events-none font-serif">
        L
      </div>
      <div className="absolute top-[65%] -right-12 text-[320px] font-bold text-white/[0.015] leading-none select-none pointer-events-none font-serif">
        M
      </div>

      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden" id="experience-hero">
        {/* Editorial Coordinates / Specs Header overlays */}
        <div className="absolute top-12 left-12 text-[9px] uppercase tracking-[0.3em] text-white/30 hidden md:block z-20 text-left">
          ATELIER POSITION / COORDINATES <br />
          <span className="font-mono text-white/50 tracking-normal block mt-1">40.6273° N, 14.6027° E</span>
        </div>
        <div className="absolute top-12 right-12 text-[9px] uppercase tracking-[0.3em] text-white/30 hidden md:block z-20 text-right">
          CHRONICLE CATALOGUE / SPEC <br />
          <span className="font-mono text-white/50 tracking-normal block mt-1">ARCHIVE — VOL. 2026</span>
        </div>

        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=1600"
            alt="Gold-toned Ribeye Steak"
            className="w-full h-full object-cover brightness-[0.20] scale-[1.02]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-[#0A0A0A]" />
        </div>

        <div className="relative z-10 text-center max-w-4xl px-6 space-y-10" id="experience-hero-content">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="space-y-6"
          >
            <div className="inline-block p-1 border border-gold-400/20 rounded">
              <span className="px-3 py-1 border border-gold-400 text-gold-400 text-[9px] font-bold uppercase tracking-[0.3em] block">
                LUMIÈRE ARTISANAL EXPERIENCES
              </span>
            </div>
            
            <h1 className="text-5xl md:text-8xl font-black leading-[0.85] tracking-tighter uppercase text-white">
              The Art of the<br />
              <span className="text-white/20 italic font-serif lowercase" style={{ fontFamily: 'Georgia, serif' }}>infinite table</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-white/60 text-xs md:text-sm max-w-xl mx-auto font-light leading-relaxed tracking-wide"
          >
            An exploration of geometric culinary precision carved into traditional gastronomy. Where centuries-old French restraint meets high-modernist fire and deep marine pureness.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
            id="experience-action-buttons"
          >
            <button
              onClick={() => onNavigate('reservations')}
              className="w-full sm:w-auto px-8 py-4 bg-gold-400 hover:bg-gold-500 text-noir-900 uppercase font-mono text-xs tracking-widest font-semibold transition-all duration-300 rounded cursor-pointer shadow-lg hover:shadow-gold-500/25"
            >
              BOOK A TABLE
            </button>
            <button
              onClick={() => onNavigate('menu')}
              className="w-full sm:w-auto px-8 py-4 border border-white/20 bg-transparent text-white/85 hover:bg-white hover:text-black hover:border-white uppercase font-mono text-xs tracking-widest transition-all duration-300 rounded cursor-pointer"
            >
              VIEW THE STATIONS
            </button>
          </motion.div>
        </div>

        <div className="absolute bottom-8 left-12 flex items-center gap-4 text-[9px] uppercase tracking-[0.2em] text-white/30">
          <div className="h-0.5 w-6 bg-gold-400"></div>
          <span>Exhibition Scene 01—04</span>
        </div>
      </section>

      {/* The Experience Definition Sections */}
      <section className="max-w-6xl mx-auto px-6 space-y-16" id="the-experience-core">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="mb-2">
            <span className="px-3 py-1 border border-white/10 text-white/40 text-[9px] font-bold uppercase tracking-[0.3em]">THE SPECIFICATIONS</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white leading-none">
            Crafting the <br/>
            <span className="text-gold-400 italic font-serif lowercase" style={{ fontFamily: 'Georgia, serif' }}>transcendent</span>
          </h2>
          <div className="w-px h-16 bg-gold-400/50 mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8" id="experience-highlights-grid">
          {EXPERIENCE_HIGHLIGHTS.map((item, idx) => (
            <div
              key={idx}
              className="group editorial-grid-cell p-8 bg-[#111111]/80 hover:bg-[#151515] hover:border-white/10 transition-all duration-500 flex flex-col justify-between"
              id={`highlight-card-${idx}`}
            >
              <div className="editorial-notch-tl" />
              <div className="space-y-6">
                <div className="overflow-hidden h-[180px] border border-white/5 relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 brightness-75 saturate-[0.80]"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent opacity-60"></div>
                  <div className="absolute top-4 right-4 bg-black/80 px-2 py-1 text-[9px] font-mono tracking-widest text-[#F27D26] uppercase">
                    No. 0{idx + 1}
                  </div>
                </div>
                <div className="space-y-3 text-left">
                  <span className="text-[#F27D26] font-mono text-[9px] tracking-widest uppercase block">
                    {item.subtitle}
                  </span>
                  <h3 className="text-lg font-serif font-light text-white tracking-tight">{item.title}</h3>
                  <p className="text-white/55 font-light text-xs leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Stations Section */}
      <section className="bg-[#0F0F0F] py-20 border-t border-white/5 relative overflow-hidden" id="featured-stations-section">
        {/* Absolute geometry lines */}
        <div className="absolute left-1/4 top-0 bottom-0 w-px bg-white/[0.03] hidden lg:block" />
        <div className="absolute left-2/4 top-0 bottom-0 w-px bg-white/[0.03] hidden lg:block" />
        <div className="absolute left-3/4 top-0 bottom-0 w-px bg-white/[0.03] hidden lg:block" />

        <div className="max-w-6xl mx-auto px-6 space-y-16 relative z-10">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-white/10 pb-8">
            <div className="space-y-3">
              <span className="text-[#F27D26] font-mono text-[9px] tracking-[0.3em] uppercase block">
                CURATED EXPEDITIONS
              </span>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white">
                Featured Stations of <span className="italic text-white/30 font-serif lowercase" style={{ fontFamily: 'Georgia, serif' }}>the exhibition</span>
              </h2>
            </div>
            <button
              onClick={() => onNavigate('menu')}
              className="text-[10px] text-white/60 font-mono tracking-widest uppercase hover:text-[#F27D26] transition-colors flex items-center gap-1.5 group cursor-pointer border-b border-white/10 pb-1"
            >
              DISCOVER ALL STATIONS <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" id="featured-stations-grid">
            {/* The Sea */}
            <div className="group relative h-[420px] overflow-hidden border border-white/10 bg-black" id="station-featured-sea">
              <div className="absolute top-4 left-4 z-20 bg-black/80 px-2 py-1 text-[8px] font-mono tracking-widest text-[#F27D26] uppercase">
                STATION A
              </div>
              <img
                src="https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&q=80&w=800"
                alt="Ocean Bounty oysters"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02] brightness-[0.5] grayscale group-hover:grayscale-0 group-hover:brightness-[0.35]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 space-y-4">
                <span className="font-mono text-[9px] text-[#F27D26] tracking-[0.25em] block uppercase">
                  OCEAN BOUNTY
                </span>
                <h3 className="text-2xl font-serif font-light text-white tracking-tight">The Sea</h3>
                <p className="text-xs text-white/50 font-light leading-relaxed line-clamp-2">
                  Delicately chilled bivalves, fresh lobster medallions tableside, and customized caviar presentation.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => onNavigate('menu')}
                    className="text-[10px] font-mono tracking-widest text-white/60 hover:text-white transition-colors uppercase flex items-center gap-2"
                  >
                    DISCOVER STAGE <span className="text-[#F27D26]">&rarr;</span>
                  </button>
                </div>
              </div>
            </div>

            {/* The Grill */}
            <div className="group relative h-[420px] overflow-hidden border border-white/10 bg-black" id="station-featured-grill">
              <div className="absolute top-4 left-4 z-20 bg-black/80 px-2 py-1 text-[8px] font-mono tracking-widest text-[#F27D26] uppercase">
                STATION B
              </div>
              <img
                src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800"
                alt="Grill steak smoking"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02] brightness-[0.5] grayscale group-hover:grayscale-0 group-hover:brightness-[0.35]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 space-y-4">
                <span className="font-mono text-[9px] text-[#F27D26] tracking-[0.25em] block uppercase">
                  LA FLAMME DE L'ARTISAN
                </span>
                <h3 className="text-2xl font-serif font-light text-white tracking-tight">The Grill</h3>
                <p className="text-xs text-white/50 font-light leading-relaxed line-clamp-2">
                  45-day dry-aged premium ribeye cuts, smoked rosemary tenderloin, and tableside wood-fire performance.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => onNavigate('menu')}
                    className="text-[10px] font-mono tracking-widest text-white/60 hover:text-white transition-colors uppercase flex items-center gap-2"
                  >
                    DISCOVER STAGE <span className="text-[#F27D26]">&rarr;</span>
                  </button>
                </div>
              </div>
            </div>

            {/* The Patisserie */}
            <div className="group relative h-[420px] overflow-hidden border border-white/10 bg-black" id="station-featured-patisserie">
              <div className="absolute top-4 left-4 z-20 bg-black/80 px-2 py-1 text-[8px] font-mono tracking-widest text-[#F27D26] uppercase">
                STATION C
              </div>
              <img
                src="https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&q=80&w=800"
                alt="Grand Finale Pastrys"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02] brightness-[0.5] grayscale group-hover:grayscale-0 group-hover:brightness-[0.35]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 space-y-4">
                <span className="font-mono text-[9px] text-[#F27D26] tracking-[0.25em] block uppercase">
                  L'APOTHÉOSE SUCRÉE
                </span>
                <h3 className="text-2xl font-serif font-light text-white tracking-tight">The Patisserie</h3>
                <p className="text-xs text-white/50 font-light leading-relaxed line-clamp-2">
                  Toasted hot caramel eclipses, grand Marnier soufflés, and custom-spun fine sugar creations.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => onNavigate('menu')}
                    className="text-[10px] font-mono tracking-widest text-white/60 hover:text-white transition-colors uppercase flex items-center gap-2"
                  >
                    DISCOVER STAGE <span className="text-[#F27D26]">&rarr;</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Secure Your Place widget section */}
      <section className="max-w-4xl mx-auto px-6" id="mini-reservation-wrapper">
        <div className="border border-white/10 p-10 bg-black/60 relative overflow-hidden" id="mini-reservation-card">
          <div className="absolute top-0 right-0 p-4 opacity-[0.02] pointer-events-none">
            <Landmark className="w-56 h-56 text-[#F27D26]" />
          </div>
          <div className="editorial-notch-tl" />

          <div className="space-y-8 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-b border-white/5 pb-6">
              <div className="space-y-3">
                <span className="text-[#F27D26] font-mono text-[9px] pr-2 tracking-[0.3em] uppercase block">
                  BESPOKE BOOKING PORTAL
                </span>
                <h3 className="text-3xl font-black uppercase tracking-tight text-white">
                  Secure Your Place <span className="italic text-white/30 font-serif lowercase" style={{ fontFamily: 'Georgia, serif' }}>at the table</span>
                </h3>
              </div>
              <div className="text-left md:text-right">
                <span className="text-[10px] font-mono text-[#F27D26] tracking-widest block uppercase">CRITICAL ADVISORY</span>
                <span className="text-xs text-white/40 font-light">Strictly limited to forty covers each session.</span>
              </div>
            </div>

            <form onSubmit={handleMiniCheckAvailability} className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              <div className="space-y-2 text-left" id="mini-date-input-field">
                <label className="text-[9px] font-mono uppercase text-white/40 tracking-[0.2em] flex items-center gap-1.5">
                  <Calendar className="w-3 h-3 text-[#F27D26]" /> Select date of interest
                </label>
                <input
                  type="date"
                  required
                  min={new Date().toISOString().split('T')[0]}
                  value={miniDate}
                  onChange={(e) => setMiniDate(e.target.value)}
                  className="w-full bg-[#111] border border-white/10 focus:border-[#F27D26] rounded-none px-4 py-3.5 text-xs text-white tracking-widest focus:outline-none focus:ring-0 transition-all font-mono"
                />
              </div>

              <div className="space-y-2 text-left" id="mini-guests-input-field">
                <label className="text-[9px] font-mono uppercase text-white/40 tracking-[0.2em] flex items-center gap-1.5">
                  <Users className="w-3 h-3 text-[#F27D26]" /> Count of attendees
                </label>
                <select
                  value={miniGuests}
                  onChange={(e) => setMiniGuests(parseInt(e.target.value))}
                  className="w-full bg-[#111] border border-white/10 focus:border-[#F27D26] rounded-none px-4 py-3.5 text-xs text-white tracking-widest focus:outline-none transition-all font-mono"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                    <option key={num} value={num} className="bg-black text-white py-1">
                      {num} {num === 1 ? 'ATTENDEE' : 'ATTENDEES'}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex items-end" id="mini-submit-button-field">
                <button
                  type="submit"
                  className="w-full py-4 bg-[#F27D26] hover:bg-[#D66210] text-black font-semibold font-mono text-[10px] uppercase tracking-[0.25em] rounded-none cursor-pointer transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" /> CHECK COVERS
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
