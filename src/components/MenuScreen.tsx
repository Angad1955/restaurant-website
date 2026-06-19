import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { STATIONS } from '../data';
import { Coffee, Flame, Droplets, Leaf, Sparkles, AlertCircle } from 'lucide-react';

interface MenuScreenProps {
  onNavigate: (screen: 'experience' | 'menu' | 'reservations' | 'about') => void;
}

export default function MenuScreen({ onNavigate }: MenuScreenProps) {
  const [activeStationTab, setActiveStationTab] = useState<string>('all');

  const filteredStations = activeStationTab === 'all' 
    ? STATIONS 
    : STATIONS.filter(s => s.id === activeStationTab);

  const getStationIcon = (id: string) => {
    switch(id) {
      case 'cold-harvest': return <Leaf className="w-4 h-4 text-emerald-400" />;
      case 'ocean-bounty': return <Droplets className="w-4 h-4 text-blue-400" />;
      case 'fire-coal': return <Flame className="w-4 h-4 text-amber-500" />;
      case 'grand-finale': return <Coffee className="w-4 h-4 text-gold-400" />;
      default: return <Sparkles className="w-4 h-4 text-gold-400" />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="space-y-16 pb-20 relative overflow-hidden"
      id="menu-screen-root"
    >
      {/* Decorative vertical running coordinate */}
      <div className="absolute right-12 top-1/4 text-[9px] uppercase tracking-[0.4em] text-white/10 hidden xl:block z-0 select-none pointer-events-none" style={{ writingMode: 'vertical-rl' }}>
        GASTRONOMIQUE ARCHIVE // STAGE 01—04
      </div>

      {/* Hero Section */}
      <section className="relative h-[55vh] flex items-center justify-center overflow-hidden" id="menu-hero">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=1600"
            alt="Crystal glass and polished silverware background"
            className="w-full h-full object-cover brightness-[0.16] scale-[1.02]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-[#0A0A0A]" />
        </div>

        <div className="relative z-10 text-center max-w-4xl px-6 space-y-6" id="menu-hero-content">
          <div className="inline-block p-1 border border-white/5 bg-black/40">
            <span className="px-3 py-1 border border-[#F27D26]/60 text-[#F27D26] font-mono text-[9px] tracking-[0.35em] uppercase block">
              THE CHRONICLED STATIONS
            </span>
          </div>
          
          <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter text-white leading-none">
            The Gallery of<br />
            <span className="text-gold-400 italic font-serif lowercase" style={{ fontFamily: 'Georgia, serif' }}>flavors</span>
          </h1>
          
          <p className="text-white/60 text-xs md:text-sm max-w-xl mx-auto font-light leading-relaxed tracking-wide">
            Delve into curated culinary workspaces. Each represents an independent micro-kitchen, serving plates made of highly traced, sustainable proteins and botanical masterpieces.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="max-w-5xl mx-auto px-6 text-center" id="menu-navigation">
        <div className="flex flex-wrap justify-center gap-2 border-b border-white/5 pb-8">
          <button
            onClick={() => setActiveStationTab('all')}
            className={`cursor-pointer px-6 py-3 font-mono text-[9px] tracking-[0.25em] uppercase transition-all duration-300 rounded-none ${
              activeStationTab === 'all'
                ? 'bg-[#F27D26] text-black font-semibold'
                : 'text-white/40 border border-white/10 hover:text-white hover:border-white/30 bg-[#111]'
            }`}
          >
            All Stations
          </button>
          {STATIONS.map((station) => (
            <button
              key={station.id}
              onClick={() => setActiveStationTab(station.id)}
              className={`cursor-pointer px-6 py-3 font-mono text-[9px] tracking-[0.25em] uppercase transition-all duration-300 flex items-center gap-2 rounded-none ${
                activeStationTab === station.id
                  ? 'bg-[#F27D26] text-black font-semibold'
                  : 'text-white/40 border border-white/10 hover:text-white hover:border-white/30 bg-[#111]'
              }`}
            >
              {getStationIcon(station.id)}
              <span>{station.title}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Stations Exhibition Showcase List */}
      <section className="max-w-6xl mx-auto px-6 space-y-32" id="menu-stations-list">
        <AnimatePresence mode="wait">
          {filteredStations.map((station, sIdx) => {
            const isAlternate = sIdx % 2 === 1;
            return (
              <motion.div
                key={station.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-16 items-start`}
                id={`station-block-${station.id}`}
              >
                {/* Station Visual Side */}
                <div className={`col-span-1 lg:col-span-5 ${isAlternate ? 'lg:order-2' : ''}`} id={`station-visual-${station.id}`}>
                  <div className="sticky top-28 space-y-6">
                    <div className="relative group overflow-hidden border border-white/10 bg-black" id={`station-image-frame-${station.id}`}>
                      <div className="editorial-notch-tl" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent z-10" />
                      <img
                        src={station.image}
                        alt={station.title}
                        className="w-full h-[380px] object-cover group-hover:scale-[1.02] transition-transform duration-700 brightness-[0.45] grayscale group-hover:grayscale-0"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-4 right-4 z-20 bg-black/90 border border-white/10 px-3 py-1.5 rounded-none flex items-center gap-1.5 font-mono text-[8px] text-[#F27D26] uppercase tracking-widest">
                        {getStationIcon(station.id)}
                        <span>Active Station</span>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <span className="font-mono text-[9px] text-[#F27D26] tracking-[0.2em] block uppercase">
                        {station.subtitle}
                      </span>
                      <h2 className="text-3xl font-serif font-light text-white tracking-tight">
                        {station.title}
                      </h2>
                      <p className="text-white/50 text-xs font-light leading-relaxed">
                        {station.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Station Items List */}
                <div className={`col-span-1 lg:col-span-7 space-y-8 ${isAlternate ? 'lg:order-1' : ''}`} id={`station-items-${station.id}`}>
                  <div className="border border-white/5 bg-[#111]/85 p-8 md:p-10 rounded-none space-y-6 backdrop-blur-sm relative">
                    <div className="editorial-notch-tl" />
                    <h3 className="font-mono text-[9px] tracking-[0.25em] text-[#F27D26] uppercase border-b border-white/5 pb-4 block">
                      CURATED OFFERINGS
                    </h3>

                    <div className="space-y-8">
                      {station.items.map((item, iIdx) => (
                        <div
                          key={iIdx}
                          className="group space-y-3 border-b border-white/5 pb-6 last:border-0 last:pb-0"
                          id={`menu-item-${station.id}-${iIdx}`}
                        >
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                            <h4 className="text-lg font-serif font-light text-white group-hover:text-[#F27D26] transition-colors leading-tight">
                              {item.name}
                            </h4>
                            <div className="flex flex-wrap gap-1.5">
                              {item.tags.map((tag, tIdx) => (
                                <span
                                  key={tIdx}
                                  className="text-[8px] font-mono text-white/55 bg-white/5 border border-white/10 px-2.5 py-0.5 rounded-none uppercase tracking-widest"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                          <p className="text-xs text-white/40 leading-relaxed font-light">
                            {item.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </section>

      {/* Allergens Dietary Note */}
      <section className="max-w-4xl mx-auto px-6 text-center" id="menu-dietaries">
        <div className="inline-flex items-center gap-4 px-6 py-5 rounded-none bg-[#111]/90 border border-white/10 max-w-2xl text-left relative" id="dietaries-callout">
          <div className="editorial-notch-tl" />
          <AlertCircle className="w-5 h-5 text-[#F27D26] shrink-0" />
          <p className="text-[10px] text-white/50 leading-relaxed font-light">
            <strong>DIETARY REQUEST NOTICE:</strong> Many of our items can be modified to satisfy vegan, organic, or strict nut allergen preferences. Please converse directly with your station artist to align your plates with your specific biological profile.
          </p>
        </div>
      </section>

      {/* Bottom CTA to reservation */}
      <section className="max-w-4xl mx-auto px-6 text-center pt-8" id="menu-cta">
        <div className="space-y-5">
          <p className="text-[#F27D26] font-mono text-[9px] tracking-[0.3em] uppercase">TABLE RESERVATION INVITATION</p>
          <h3 className="text-3xl font-black uppercase tracking-tighter text-white">Are you ready to claim your bespoke tableside showcase?</h3>
          <p className="text-white/50 text-xs font-light max-w-md mx-auto leading-relaxed">Securing your seat online ensures instant integration with Julian Vance's daily product delivery flow.</p>
          <div className="pt-4">
            <button
              onClick={() => onNavigate('reservations')}
              className="px-10 py-4 bg-[#F27D26] text-black font-semibold font-mono text-[10px] uppercase tracking-[0.25em] hover:bg-[#D66210] rounded-none cursor-pointer transition-all duration-300"
            >
              SECURE SEATING NOW
            </button>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
