import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Landmark, Compass, Utensils, CalendarDays, BookOpen, MapPin, Phone, Clock, Mail, ChefHat, Sparkles } from 'lucide-react';
import { ActiveScreen } from './types';

// Components
import AboutScreen from './components/AboutScreen';
import ExperienceScreen from './components/ExperienceScreen';
import MenuScreen from './components/MenuScreen';
import ReservationsScreen from './components/ReservationsScreen';

export default function App() {
  const [activeScreen, setActiveScreen] = useState<ActiveScreen>('experience');
  
  // Prefill state for the reservation flow
  const [prefilledDate, setPrefilledDate] = useState<string>('');
  const [prefilledGuests, setPrefilledGuests] = useState<number>(2);

  const handleSetPrefill = (date: string, guests: number) => {
    setPrefilledDate(date);
    setPrefilledGuests(guests);
  };

  const handleClearPrefills = () => {
    setPrefilledDate('');
    setPrefilledGuests(2);
  };

  // Scroll to top on screen change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [activeScreen]);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white/70 selection:bg-[#F27D26] selection:text-black flex flex-col justify-between" id="lumiere-app-canvas">
      
      {/* Exquisite Luxury Top Navigation Bar */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#0A0A0A]/90 border-b border-white/5" id="lumiere-header">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          
          {/* Logo Brand Title */}
          <div 
            onClick={() => setActiveScreen('experience')}
            className="flex items-center gap-2.5 cursor-pointer group"
            id="brand-logo"
          >
            <ChefHat className="w-5 h-5 text-[#F27D26] group-hover:rotate-12 transition-transform duration-300" />
            <div className="text-left">
              <span className="font-serif text-xl font-light text-white tracking-widest block uppercase">
                LUMIÈRIAN
              </span>
              <span className="font-mono text-[8px] text-[#F27D26] tracking-[0.3em] block uppercase -mt-1.5">
                Artisanal Buffet
              </span>
            </div>
          </div>

          {/* Core Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 font-mono text-[10px]" id="primary-navigation-menu">
            {[
              { id: 'experience', label: 'Experience' },
              { id: 'menu', label: 'Menu' },
              { id: 'reservations', label: 'Reservations' },
              { id: 'about', label: 'About' }
            ].map((link) => {
              const isActive = activeScreen === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => setActiveScreen(link.id as ActiveScreen)}
                  className={`cursor-pointer font-mono tracking-[0.2em] uppercase py-2 transition-all relative ${
                    isActive ? 'text-white font-semibold' : 'text-white/40 hover:text-white'
                  }`}
                  id={`nav-link-${link.id}`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="active-indicator"
                      className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#F27D26]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Book A Table Prompt Button */}
          <div className="flex items-center gap-4" id="navigation-actions">
            <button
              onClick={() => setActiveScreen('reservations')}
              className="px-6 py-3 bg-[#F27D26] hover:bg-[#D66210] text-black font-semibold font-mono text-[9px] uppercase tracking-[0.2em] rounded-none cursor-pointer transition-all duration-300"
              id="header-book-table-btn"
            >
              BOOK A TABLE
            </button>
          </div>
        </div>

        {/* Mobile Navigation Strip */}
        <div className="md:hidden border-t border-white/5 flex justify-around py-3.5 bg-[#0A0A0A]/95 text-[9px]" id="mobile-nav-bar">
          {[
            { id: 'experience', label: 'Experience' },
            { id: 'menu', label: 'Menu' },
            { id: 'reservations', label: 'Reservations' },
            { id: 'about', label: 'About' }
          ].map((link) => {
            const isActive = activeScreen === link.id;
            return (
              <button
                key={link.id}
                onClick={() => setActiveScreen(link.id as ActiveScreen)}
                className={`cursor-pointer font-mono tracking-[0.22em] uppercase py-1 ${
                  isActive ? 'text-[#F27D26] font-semibold' : 'text-white/30'
                }`}
                id={`mobile-nav-link-${link.id}`}
              >
                {link.label}
              </button>
            );
          })}
        </div>
      </header>

      {/* Screen Render Container */}
      <main className="flex-grow" id="lumiere-screen-mount">
        <AnimatePresence mode="wait">
          {activeScreen === 'experience' && (
            <div key="screen-experience">
              <ExperienceScreen 
                onNavigate={setActiveScreen} 
                onSetPrefill={handleSetPrefill}
              />
            </div>
          )}
          {activeScreen === 'menu' && (
            <div key="screen-menu">
              <MenuScreen 
                onNavigate={setActiveScreen} 
              />
            </div>
          )}
          {activeScreen === 'reservations' && (
            <div key="screen-reservations">
              <ReservationsScreen 
                prefilledDate={prefilledDate}
                prefilledGuests={prefilledGuests}
                onClearPrefills={handleClearPrefills}
              />
            </div>
          )}
          {activeScreen === 'about' && (
            <div key="screen-about">
              <AboutScreen 
                onNavigate={setActiveScreen} 
              />
            </div>
          )}
        </AnimatePresence>
      </main>

      {/* Exquisite Premium Footer */}
      <footer className="bg-black border-t border-white/5 pt-16 pb-8 text-xs font-light" id="lumiere-footer">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-left" id="footer-layout-grid">
            {/* Branding column */}
            <div className="space-y-4 md:col-span-1">
              <div className="flex items-center gap-2">
                <ChefHat className="w-5 h-5 text-[#F27D26]" />
                <span className="font-serif text-lg tracking-widest text-white uppercase">LUMIÈRIAN</span>
              </div>
              <p className="text-white/40 text-[11px] leading-relaxed max-w-xs">
                An exhibition of culinary perfection, dry-aged textures, and marine treasures. We hold space for sensory exploration of light and shade.
              </p>
            </div>

            {/* Quick links & stations column */}
            <div className="space-y-4">
              <h4 className="font-mono text-[9px] tracking-[0.25em] text-[#F27D26] uppercase">THE PORTALS</h4>
              <ul className="space-y-2 font-mono text-[9px] tracking-wider">
                <li>
                  <button onClick={() => setActiveScreen('experience')} className="text-white/40 hover:text-[#F27D26] transition-colors uppercase block cursor-pointer">
                    &raquo; Experience Definition
                  </button>
                </li>
                <li>
                  <button onClick={() => setActiveScreen('menu')} className="text-white/40 hover:text-[#F27D26] transition-colors uppercase block cursor-pointer">
                    &raquo; Station Galleries
                  </button>
                </li>
                <li>
                  <button onClick={() => setActiveScreen('reservations')} className="text-white/40 hover:text-[#F27D26] transition-colors uppercase block cursor-pointer">
                    &raquo; Tableside Bookings
                  </button>
                </li>
                <li>
                  <button onClick={() => setActiveScreen('about')} className="text-white/40 hover:text-[#F27D26] transition-colors uppercase block cursor-pointer">
                    &raquo; Our Founding Legend
                  </button>
                </li>
              </ul>
            </div>

            {/* General Logistical details column */}
            <div className="space-y-4">
              <h4 className="font-mono text-[9px] tracking-[0.25em] text-[#F27D26] uppercase">LOGISTICAL HOURS</h4>
              <ul className="space-y-2 text-[10px] text-white/40 text-left font-mono uppercase tracking-wider">
                <li className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-[#F27D26] shrink-0" />
                  <span>SUN - THU: 17:30 - 22:30</span>
                </li>
                <li className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-[#F27D26] shrink-0" />
                  <span>FRI - SAT: 17:00 - 23:30</span>
                </li>
                <li className="flex items-center gap-2 font-sans lowercase tracking-wide first-letter:uppercase">
                  <MapPin className="w-3.5 h-3.5 text-[#F27D26] shrink-0" />
                  <span>884 Chiaroscuro Boulevard, Golden Hills</span>
                </li>
              </ul>
            </div>

            {/* Direct contact line Column */}
            <div className="space-y-4">
              <h4 className="font-mono text-[9px] tracking-[0.25em] text-[#F27D26] uppercase">HOT ATELIER LINES</h4>
              <ul className="space-y-2 text-[10px] text-white/40 text-left font-mono uppercase tracking-wider">
                <li className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#F27D26] shrink-0" />
                  <span>ATELIER: +1 (555) 895-4300</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#F27D26] shrink-0" />
                  <span className="truncate lowercase">concierge@lumierebuffet.com</span>
                </li>
                <li className="flex items-center gap-1.5 text-[8px] border border-white/5 p-2 rounded-none bg-white/[0.02]">
                  <Sparkles className="w-4 h-4 text-[#F27D26] shrink-0" />
                  <span>MICHELIN KITCHEN EXHIBITION</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Footer copyright stamp section */}
          <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[9px] text-white/35 font-mono tracking-widest" id="footer-bottom-bar">
            <span>&copy; {new Date().getFullYear()} LUMIÈRE ARTISANAL BUFFET. ALL RIGHTS RESERVED.</span>
            <div className="flex gap-4">
              <span className="hover:text-white cursor-pointer transition-colors">PRIVACY BLUEPRINT</span>
              <span>&bull;</span>
              <span className="hover:text-white cursor-pointer transition-colors">TERMS OF PATRONAGE</span>
            </div>
          </div>

        </div>
      </footer>
    </div>
  );
}
