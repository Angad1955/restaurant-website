import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Users, Mail, Phone, User, MessageSquare, ShieldCheck, Ticket, Landmark, AlertCircle, Sparkles, CheckCircle2, ChevronRight, MapPin, X, Trash2 } from 'lucide-react';
import { Reservation } from '../types';
import { DRESS_CODE_POLICY, RESERVATION_POLICY } from '../data';

interface ReservationsScreenProps {
  prefilledDate?: string;
  prefilledGuests?: number;
  onClearPrefills: () => void;
}

export default function ReservationsScreen({ prefilledDate, prefilledGuests, onClearPrefills }: ReservationsScreenProps) {
  // Booking Form Fields
  const [date, setDate] = useState<string>('');
  const [time, setTime] = useState<string>('18:00');
  const [guests, setGuests] = useState<number>(2);
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [specialRequests, setSpecialRequests] = useState<string>('');

  // Interactive Flow States
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStep, setSubmitStep] = useState<string>('');
  const [recentlyCreatedReservation, setRecentlyCreatedReservation] = useState<Reservation | null>(null);
  const [myReservations, setMyReservations] = useState<Reservation[]>([]);
  const [showManageTab, setShowManageTab] = useState<boolean>(false);

  // Sync Prefills
  useEffect(() => {
    if (prefilledDate) {
      setDate(prefilledDate);
    } else {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      setDate(tomorrow.toISOString().split('T')[0]);
    }
    if (prefilledGuests) {
      setGuests(prefilledGuests);
    }
  }, [prefilledDate, prefilledGuests]);

  // Load reservations from localStorage
  useEffect(() => {
    const stored = localStorage.getItem('lumiere_reservations');
    if (stored) {
      try {
        setMyReservations(JSON.parse(stored));
      } catch (e) {
        console.error('Failed to parse previous reservations', e);
      }
    }
  }, []);

  // Submit flow
  const handleConfirmReservation = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Luxury simulation steps
    setSubmitStep('Evaluating available culinary salons...');
    
    setTimeout(() => {
      setSubmitStep('Allocating high-tier tableside artist team...');
    }, 1200);

    setTimeout(() => {
      setSubmitStep('Generating secure VIP credentials...');
    }, 2400);

    setTimeout(() => {
      const code = 'LUM-' + Math.floor(100000 + Math.random() * 900000);
      const newBooking: Reservation = {
        id: Math.random().toString(36).substring(2, 9),
        date,
        time,
        guests,
        name,
        email,
        phone,
        specialRequests,
        code,
        createdAt: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
      };

      const updatedList = [newBooking, ...myReservations];
      setMyReservations(updatedList);
      localStorage.setItem('lumiere_reservations', JSON.stringify(updatedList));

      setRecentlyCreatedReservation(newBooking);
      setIsSubmitting(false);
      setSubmitStep('');
      onClearPrefills();
      
      // Clear inputs
      setName('');
      setEmail('');
      setPhone('');
      setSpecialRequests('');
    }, 3800);
  };

  const handleDeleteBooking = (id: string) => {
    const filtered = myReservations.filter((b) => b.id !== id);
    setMyReservations(filtered);
    localStorage.setItem('lumiere_reservations', JSON.stringify(filtered));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="space-y-16 pb-20 relative overflow-hidden"
      id="reservations-screen-root"
    >
      {/* Absolute high-restraint running watermark background */}
      <div className="absolute top-[40%] -left-12 text-[280px] font-bold text-white/[0.015] leading-none select-none pointer-events-none font-serif">
        R
      </div>

      {/* Background Hero Accent */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden" id="reservations-hero">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=1600"
            alt="Bokeh fine dining table setting background"
            className="w-full h-full object-cover brightness-[0.15]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-[#0A0A0A]" />
        </div>

        <div className="relative z-10 text-center max-w-4xl px-6 space-y-6" id="reservations-hero-content">
          <div className="inline-block p-1 border border-white/5 bg-black/40">
            <span className="px-3 py-1 border border-[#F27D26]/60 text-[#F27D26] font-mono text-[9px] tracking-[0.35em] uppercase block">
              BESPOKE REGISTRATION SYSTEM
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white leading-none">
            Reserve Your<br />
            <span className="text-gold-400 italic font-serif lowercase" style={{ fontFamily: 'Georgia, serif' }}>experience</span>
          </h1>
          <p className="text-white/50 text-xs max-w-lg mx-auto font-light leading-relaxed tracking-wider">
            Align your itinerary with the theatre of Lumière. Our seating allocation follows highly strict limit codes.
          </p>
        </div>
      </section>

      {/* Main Reservation Space */}
      <section className="max-w-6xl mx-auto px-6" id="reservations-workspace">
        
        {/* Toggle between Booking Form and Managing active Bookings */}
        <div className="flex justify-center gap-2 mb-10" id="booking-nav-tabs">
          <button
            onClick={() => {
              setShowManageTab(false);
              setRecentlyCreatedReservation(null);
            }}
            className={`cursor-pointer px-6 py-3 font-mono text-[9px] tracking-[0.25em] uppercase transition-all duration-300 rounded-none ${
              !showManageTab
                ? 'bg-[#F27D26] text-black font-semibold'
                : 'text-white/40 border border-white/10 hover:text-white hover:border-white/30 bg-[#111]'
            }`}
          >
            Create New Booking
          </button>
          <button
            onClick={() => setShowManageTab(true)}
            className={`cursor-pointer px-6 py-3 font-mono text-[9px] tracking-[0.25em] uppercase transition-all duration-300 flex items-center gap-2 rounded-none ${
              showManageTab
                ? 'bg-[#F27D26] text-black font-semibold'
                : 'text-white/40 border border-white/10 hover:text-white hover:border-white/30 bg-[#111]'
            }`}
          >
            My Invitations ({myReservations.length})
          </button>
        </div>

        {/* Loading Overlay */}
        <AnimatePresence>
          {isSubmitting && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/98 z-50 flex flex-col items-center justify-center p-6 backdrop-blur-md"
              id="submitting-loader-modal"
            >
              <div className="space-y-8 text-center max-w-sm">
                <div className="relative w-16 h-16 mx-auto">
                  <div className="absolute inset-0 border border-white/10" />
                  <div className="absolute inset-0 border-t border-r border-[#F27D26] animate-spin" />
                  <Sparkles className="w-4 h-4 text-[#F27D26] absolute inset-0 m-auto animate-pulse" />
                </div>
                
                <div className="space-y-3">
                  <span className="font-mono text-[9px] text-[#F27D26] tracking-[0.3em] uppercase block animate-pulse">
                    SECURE INGRESS SYSTEM
                  </span>
                  <p className="text-white font-serif text-base tracking-wide italic">{submitStep}</p>
                  <p className="text-white/30 text-[10px] font-mono tracking-widest uppercase">VERIFYING LIVE CREDENTIALS</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Golden Invitation Result Tab */}
        <AnimatePresence>
          {recentlyCreatedReservation && !showManageTab && (
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="max-w-2xl mx-auto space-y-6 mb-12"
              id="ticket-generation-success-zone"
            >
              {/* Succession Header */}
              <div className="text-center space-y-3">
                <div className="inline-flex p-3 bg-white/5 border border-white/10 mb-2">
                  <CheckCircle2 className="w-5 h-5 text-[#F27D26]" />
                </div>
                <h2 className="text-2xl font-serif text-white tracking-tight font-light">Your Seating has been Verified</h2>
                <p className="text-xs text-white/50 max-w-sm mx-auto">Present your digital invitation card on physical entry to bypass security checkmarks.</p>
              </div>

              {/* Physical Golden Card Element */}
              <div className="border border-white/10 bg-black rounded-none overflow-hidden shadow-2xl relative" id="gold-invitation-ticket">
                {/* Visual Stamp Accent */}
                <div className="absolute top-0 right-0 p-8 text-white/[0.02] rotate-6 pointer-events-none uppercase font-mono text-7xl select-none font-black tracking-tighter">
                  LUMIÈRE
                </div>

                {/* Editorial vermilion strip bar */}
                <div className="h-1.5 bg-[#F27D26]" />
                <div className="editorial-notch-tl" />

                <div className="p-8 md:p-10 space-y-8">
                  {/* Card Main Title Header */}
                  <div className="flex flex-col sm:flex-row justify-between items-start gap-4 border-b border-white/10 pb-6">
                    <div className="space-y-1.5">
                      <span className="text-[9px] font-mono text-[#F27D26] tracking-[0.3em] block uppercase">VIP ENTRY INVITATION</span>
                      <h3 className="text-lg font-serif text-white tracking-tight font-light">LUMIÈRE Artisanal Buffet</h3>
                    </div>
                    <div className="bg-white/5 border border-white/10 px-3 py-1.5 font-mono text-[9px] text-[#F27D26] tracking-widest uppercase">
                      CODE: {recentlyCreatedReservation.code}
                    </div>
                  </div>

                  {/* Grid fields */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-left" id="ticket-properties-grid">
                    <div className="space-y-1">
                      <span className="text-[9px] font-mono text-white/40 uppercase tracking-widest block">GUEST OF HONOR</span>
                      <span className="text-sm font-light text-white truncate block">{recentlyCreatedReservation.name}</span>
                    </div>
                    <div className="space-y-1">
                      <span className="text-[9px] font-mono text-white/40 uppercase tracking-widest block">RESERVATION DATE</span>
                      <span className="text-sm font-mono text-white block">{recentlyCreatedReservation.date}</span>
                    </div>
                    <div className="space-y-1">
                      <span className="text-[9px] font-mono text-white/40 uppercase tracking-widest block">BLOCK TIME</span>
                      <span className="text-sm font-mono text-white block">{recentlyCreatedReservation.time}</span>
                    </div>
                    <div className="space-y-1">
                      <span className="text-[9px] font-mono text-white/40 uppercase tracking-widest block font-light">GUESTS AT LE TABLE</span>
                      <span className="text-sm font-light text-white block">{recentlyCreatedReservation.guests} Seated</span>
                    </div>
                  </div>

                  {/* Contact Checkmarks */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-[#111]/85 p-5 border border-white/10 text-left text-xs font-mono">
                    <div className="flex items-center gap-2 text-white/60">
                      <Mail className="w-3.5 h-3.5 text-[#F27D26] shrink-0" />
                      <span className="truncate">{recentlyCreatedReservation.email}</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/60">
                      <Phone className="w-3.5 h-3.5 text-[#F27D26] shrink-0" />
                      <span>{recentlyCreatedReservation.phone}</span>
                    </div>
                  </div>

                  {recentlyCreatedReservation.specialRequests && (
                    <div className="space-y-2 text-left bg-[#111]/45 p-5 border border-white/5">
                      <span className="text-[8px] font-mono text-white/40 tracking-widest block uppercase">SPECIAL REQUEST ALIGNMENT</span>
                      <p className="text-xs text-white/60 font-light leading-relaxed">{recentlyCreatedReservation.specialRequests}</p>
                    </div>
                  )}

                  {/* Ticket footer policies */}
                  <div className="border-t border-dashed border-white/15 pt-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-left">
                    <div className="space-y-1">
                      <span className="text-[8px] font-mono text-[#F27D26] tracking-widest uppercase block">SALON ENTRY CRITERIA</span>
                      <p className="text-[9px] font-mono text-white/40 max-w-sm leading-relaxed uppercase">{DRESS_CODE_POLICY}</p>
                    </div>
                    <div className="flex items-center gap-2 text-white/40 font-mono text-[9px] uppercase tracking-widest">
                      <ShieldCheck className="w-4 h-4 text-[#F27D26]" />
                      <span>Verified Seat Ticket</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Post ticket actions */}
              <div className="flex flex-col sm:flex-row justify-center gap-2">
                <button
                  onClick={() => {
                    setRecentlyCreatedReservation(null);
                  }}
                  className="px-6 py-4 bg-transparent border border-white/10 text-white/80 uppercase font-mono text-[9px] tracking-widest hover:border-white transition-all duration-300 rounded-none cursor-pointer"
                >
                  Create Another Reservation
                </button>
                <button
                  onClick={() => setShowManageTab(true)}
                  className="px-6 py-4 bg-[#F27D26] text-black font-semibold uppercase font-mono text-[9px] tracking-widest hover:bg-[#D66210] rounded-none cursor-pointer transition-all duration-300"
                >
                  View Active Bookings Page
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Form Container Side & Booking Policies Grid */}
        {!recentlyCreatedReservation && !showManageTab && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12" id="new-booking-flow-interface">
            <div className="lg:col-span-8 space-y-6">
              <div className="border border-white/10 bg-black/45 p-6 md:p-8 rounded-none backdrop-blur-md relative" id="booking-form-box">
                <div className="editorial-notch-tl" />
                
                <h2 className="text-lg font-serif font-light text-white mb-6 border-b border-white/5 pb-4 flex items-center gap-2">
                  <Ticket className="w-4 h-4 text-[#F27D26]" /> Dining Logistics
                </h2>
 
                <form onSubmit={handleConfirmReservation} className="space-y-6" id="reservation-form">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Date */}
                    <div className="space-y-2">
                      <label className="text-[9px] font-mono uppercase text-white/50 tracking-widest flex items-center gap-1.5" htmlFor="field-date">
                        <Calendar className="w-3.5 h-3.5 text-[#F27D26]" /> Dining Date <span className="text-[#F27D26]">*</span>
                      </label>
                      <input
                        id="field-date"
                        type="date"
                        required
                        min={new Date().toISOString().split('T')[0]}
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full bg-[#111] border border-white/10 focus:border-[#F27D26] rounded-none px-4 py-3 text-xs text-white tracking-widest focus:outline-none focus:ring-0 transition-all font-mono"
                      />
                    </div>
 
                    {/* Guest count */}
                    <div className="space-y-2">
                      <label className="text-[9px] font-mono uppercase text-white/50 tracking-widest flex items-center gap-1.5" htmlFor="field-guests">
                        <Users className="w-3.5 h-3.5 text-[#F27D26]" /> Salon Attendees <span className="text-[#F27D26]">*</span>
                      </label>
                      <select
                        id="field-guests"
                        value={guests}
                        onChange={(e) => setGuests(parseInt(e.target.value))}
                        className="w-full bg-[#111] border border-white/10 focus:border-[#F27D26] rounded-none px-4 py-3 text-xs text-white tracking-widest focus:outline-none transition-all font-mono"
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                          <option key={num} value={num} className="bg-black text-white">
                            {num} {num === 1 ? 'Guest' : 'Guests'}
                          </option>
                        ))}
                      </select>
                    </div>
 
                    {/* Preferred Time block selection */}
                    <div className="space-y-2">
                      <label className="text-[9px] font-mono uppercase text-white/50 tracking-widest flex items-center gap-1.5" htmlFor="field-time">
                        <Landmark className="w-3.5 h-3.5 text-[#F27D26]" /> Preferred Time Block <span className="text-[#F27D26]">*</span>
                      </label>
                      <select
                        id="field-time"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        className="w-full bg-[#111] border border-white/10 focus:border-[#F27D26] rounded-none px-4 py-3 text-xs text-white tracking-widest focus:outline-none transition-all font-mono"
                      >
                        <option value="17:30" className="bg-black">17:30 - Early Twilight Seating</option>
                        <option value="18:00" className="bg-black">18:00 - Early Twilight Seating</option>
                        <option value="18:30" className="bg-black">18:30 - Autumn Candle Seating</option>
                        <option value="19:00" className="bg-black">19:00 - High Exhibition Session (Peak)</option>
                        <option value="19:30" className="bg-black">19:30 - High Exhibition Session (Peak)</option>
                        <option value="20:00" className="bg-black">20:00 - High-Contrast Midnight Session</option>
                        <option value="20:30" className="bg-black">20:30 - High-Contrast Midnight Session</option>
                        <option value="21:00" className="bg-black">21:00 - Late Moonlight Epilogue</option>
                      </select>
                    </div>
 
                    {/* Patron Name */}
                    <div className="space-y-2">
                      <label className="text-[9px] font-mono uppercase text-[#F27D26] tracking-widest flex items-center gap-1.5" htmlFor="field-name">
                        <User className="w-3.5 h-3.5 text-[#F27D26]" /> Contact Patron <span className="text-[#F27D26]">*</span>
                      </label>
                      <input
                        id="field-name"
                        type="text"
                        required
                        placeholder="Alexis Harrington"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-[#111] border border-white/10 focus:border-[#F27D26] rounded-none px-4 py-3 text-xs text-white placeholder-white/10 focus:outline-none focus:ring-0 transition-all font-mono"
                      />
                    </div>
 
                    {/* Email */}
                    <div className="space-y-2">
                      <label className="text-[9px] font-mono uppercase text-white/50 tracking-widest flex items-center gap-1.5" htmlFor="field-email">
                        <Mail className="w-3.5 h-3.5 text-[#F27D26]" /> Electronic Mail <span className="text-[#F27D26]">*</span>
                      </label>
                      <input
                        id="field-email"
                        type="email"
                        required
                        placeholder="alexis@maisonharrington.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-[#111] border border-white/10 focus:border-[#F27D26] rounded-none px-4 py-3 text-xs text-white placeholder-white/10 focus:outline-none focus:ring-0 transition-all font-mono"
                      />
                    </div>
 
                    {/* Phone */}
                    <div className="space-y-2">
                      <label className="text-[9px] font-mono uppercase text-white/50 tracking-widest flex items-center gap-1.5" htmlFor="field-phone">
                        <Phone className="w-3.5 h-3.5 text-[#F27D26]" /> Secure Telephone Line <span className="text-[#F27D26]">*</span>
                      </label>
                      <input
                        id="field-phone"
                        type="tel"
                        required
                        placeholder="+1 (555) 895-4320"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-[#111] border border-white/10 focus:border-[#F27D26] rounded-none px-4 py-3 text-xs text-white placeholder-white/10 focus:outline-none focus:ring-0 transition-all font-mono"
                      />
                    </div>
                  </div>
 
                  {/* Special preferences */}
                  <div className="space-y-2">
                    <label className="text-[9px] font-mono uppercase text-white/50 tracking-widest flex items-center gap-1.5" htmlFor="field-requests">
                      <MessageSquare className="w-3.5 h-3.5 text-[#F27D26]" /> Special Directives (Allergies, Seating Spot, Celebrations)
                    </label>
                    <textarea
                      id="field-requests"
                      rows={3}
                      placeholder="e.g. Celebrating our Wood anniversary. Prefer a Chiaroscuro high-shadow booth next to the Patisserie if possible."
                      value={specialRequests}
                      onChange={(e) => setSpecialRequests(e.target.value)}
                      className="w-full bg-[#111] border border-white/10 focus:border-[#F27D26] rounded-none px-4 py-3 text-xs text-white placeholder-white/10 focus:outline-none focus:ring-0 transition-all font-mono"
                    />
                  </div>
 
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-[18px] bg-[#F27D26] hover:bg-[#D66210] text-black font-semibold font-mono text-[10px] uppercase tracking-[0.25em] rounded-none cursor-pointer transition-all duration-300"
                    >
                      CONFIRM RESERVATION EXPERIMENT &rarr;
                    </button>
                  </div>
                </form>
              </div>
            </div>
 
            {/* Sidebar with Booking Policies & Gold leaf accent */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* Gold leaf Accent Quote card */}
              <div className="border border-white/10 overflow-hidden relative group rounded-none" id="reservations-quote-banner">
                <div className="absolute inset-0 z-0">
                  <img
                    src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=600"
                    alt="Gold-leaf plate detail"
                    className="w-full h-full object-cover brightness-[0.16] group-hover:scale-[1.02] transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                </div>
                
                <div className="relative z-10 p-6 space-y-4 text-left">
                  <div className="editorial-notch-tl" />
                  <span className="text-[8px] font-mono text-[#F27D26] tracking-[0.25em] block uppercase">PLATINUM LEVEL</span>
                  <p className="text-white font-serif text-base leading-relaxed italic">
                    "A gallery of flavors awaits. Your custom tableside exhibition is curated with pristine respect to your culinary desires."
                  </p>
                  <span className="text-[9px] text-white/40 font-mono tracking-widest block uppercase">- Lumière Host Atelier</span>
                </div>
              </div>
 
              {/* Policies Sidebar Details Container */}
              <div className="border border-white/10 bg-[#111]/85 p-6 rounded-none space-y-6 text-left relative" id="reservations-sidebar-policies">
                <div className="editorial-notch-tl" />
                <h3 className="font-mono text-[9px] tracking-[0.25em] text-[#F27D26] uppercase border-b border-white/5 pb-3 flex items-center gap-2">
                  <Landmark className="w-4 h-4 text-[#F27D26]" /> Dining Protocols
                </h3>
 
                {/* Policy Item 1: DRESS CODE */}
                <div className="space-y-1.5">
                  <span className="text-[9px] font-mono text-white/50 tracking-widest uppercase block">Dress Code Criterion</span>
                  <p className="text-[10px] text-white/40 leading-relaxed font-light uppercase font-mono">{DRESS_CODE_POLICY}</p>
                </div>
 
                {/* Policy Item 2: CANCELLATIONS & GRACE */}
                <div className="space-y-1.5">
                  <span className="text-[9px] font-mono text-white/50 tracking-widest uppercase block">Cancellations & Seating Period</span>
                  <p className="text-[10px] text-white/40 leading-relaxed font-light uppercase font-mono">{RESERVATION_POLICY}</p>
                </div>
 
                {/* Policy Item 3: PRIVATE EVENTS */}
                <div className="space-y-1.5 pt-4 border-t border-white/5">
                  <span className="text-[9px] font-mono text-white/50 tracking-widest uppercase block">Bespoke Private Galas</span>
                  <p className="text-[10px] text-white/40 leading-relaxed font-light font-mono uppercase">
                    For customized banquets surpassing twelve seats, contact our concierge director at <strong className="text-white">galas@lumierebuffet.com</strong> at least forty days ahead.
                  </p>
                </div>
              </div>
 
            </div>
          </div>
        )}
 
        {/* Manage Invitations Tab */}
        {showManageTab && (
          <div className="max-w-3xl mx-auto space-y-6 animate-fadeIn" id="manage-bookings-panel">
            <div className="flex justify-between items-center border-b border-white/10 pb-4">
              <h2 className="text-lg font-serif font-light text-white flex items-center gap-2">
                <Ticket className="w-4 h-4 text-[#F27D26]" /> Active Invitations Register
              </h2>
              {myReservations.length > 0 && (
                <button
                  onClick={() => {
                    if (window.confirm('Are you sure you want to clear your local reservations history?')) {
                      setMyReservations([]);
                      localStorage.removeItem('lumiere_reservations');
                    }
                  }}
                  className="text-[10px] text-red-400 font-mono tracking-widest uppercase transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <Trash2 className="w-3.5 h-3.5" /> Clear All
                </button>
              )}
            </div>
 
            {myReservations.length === 0 ? (
              <div className="text-center h-48 flex flex-col justify-center items-center p-8 bg-[#111]/90 rounded-none border border-white/10 space-y-4 relative">
                <div className="editorial-notch-tl" />
                <AlertCircle className="w-6 h-6 text-white/20" />
                <div className="space-y-1">
                  <p className="text-xs text-white/55">No active dining invitations discovered locally.</p>
                  <p className="text-[10px] text-white/30 uppercase font-mono mt-1">Register your seat to establish presence</p>
                </div>
                <button
                  onClick={() => setShowManageTab(false)}
                  className="px-6 py-3 bg-[#F27D26] text-black font-semibold font-mono text-[9px] uppercase tracking-widest rounded-none hover:bg-[#D66210] transition-colors"
                >
                  Book A Table Now
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                {myReservations.map((booking) => (
                  <div
                    key={booking.id}
                    className="border border-white/10 bg-[#111]/80 rounded-none p-6 relative overflow-hidden text-left"
                    id={`active-booking-item-${booking.id}`}
                  >
                    <div className="editorial-notch-tl" />
                    <button
                      onClick={() => handleDeleteBooking(booking.id)}
                      className="absolute top-4 right-4 text-white/20 hover:text-red-400 bg-black/40 hover:bg-black p-1.5 transition-colors cursor-pointer"
                      title="Decline Invitation"
                    >
                      <X className="w-4 h-4" />
                    </button>
 
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                      <div className="md:col-span-8 space-y-3">
                        <div className="flex items-center gap-3">
                          <span className="font-mono text-[8px] text-[#F27D26] bg-[#F27D26]/10 px-2.5 py-1 border border-[#F27D26]/20">
                            {booking.code}
                          </span>
                          <span className="text-[9px] text-white/30 font-mono">ISSUED ON {booking.createdAt.toUpperCase()}</span>
                        </div>
                        <h4 className="text-lg font-serif font-light text-white">Patron &mdash; {booking.name}</h4>
                        <div className="flex flex-wrap gap-x-4 gap-y-1 text-[10px] font-mono text-white/50">
                          <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5 text-[#F27D26]" /> {booking.date}</span>
                          <span className="flex items-center gap-1"><Landmark className="w-3.5 h-3.5 text-[#F27D26]" /> {booking.time}</span>
                          <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5 text-[#F27D26]" /> {booking.guests} ATTENDEES</span>
                        </div>
                      </div>
 
                      <div className="md:col-span-4 text-left md:text-right pt-4 md:pt-0 border-t md:border-t-0 md:border-l border-white/5 pl-0 md:pl-6">
                        <span className="text-[8px] font-mono text-[#F27D26] tracking-widest block uppercase mb-1.5">Status Confirmed</span>
                        <span className="text-[9px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1.5 font-mono inline-flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> SEAT SECURED
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </section>
    </motion.div>
  );
}
