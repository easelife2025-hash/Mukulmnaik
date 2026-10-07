'use client';

import React, { useState, useEffect } from 'react';
import { AGENCY_INFO } from '@/data/agencyInfo';
import { Phone, Menu, X, MapPin, Clock, Star } from 'lucide-react';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isOpenNow, setIsOpenNow] = useState(() => {
    if (typeof window === 'undefined') return true;
    const hours = new Date().getHours();
    return hours >= AGENCY_INFO.openingTime && hours < AGENCY_INFO.closingTime;
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Periodic check if agency is currently open (11 AM to 8 PM)
  useEffect(() => {
    const timer = setInterval(() => {
      const hours = new Date().getHours();
      setIsOpenNow(hours >= AGENCY_INFO.openingTime && hours < AGENCY_INFO.closingTime);
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* Top Utility Bar */}
      <div className="bg-[#0B192C] text-slate-300 text-xs py-2 px-4 border-b border-slate-800 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-amber-400 font-bold">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>5.0 Google Rating</span>
              <span className="text-slate-300 font-semibold">({AGENCY_INFO.reviewCount} Verified Reviews)</span>
            </span>
            <span className="text-slate-600">|</span>
            <span className="flex items-center gap-1.5 text-slate-200 font-semibold">
              <MapPin className="w-3.5 h-3.5 text-amber-400/80" />
              <span>Shop No.2A, Mayur CHS, Sector 42, Seawoods West</span>
            </span>
            <span className="text-slate-600">|</span>
            <span className="flex items-center gap-1.5 text-slate-200 font-semibold">
              <Clock className="w-3.5 h-3.5 text-amber-400/80" />
              <span>Every day 11 AM – 8 PM</span>
              {isOpenNow ? (
                <span className="text-[11px] text-emerald-400 font-bold">· Open Now</span>
              ) : (
                <span className="text-[11px] text-slate-300 font-bold">· Opens 11 AM</span>
              )}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`tel:${AGENCY_INFO.phoneRaw}`}
              className="hover:text-amber-400 transition-colors flex items-center gap-1.5 font-bold"
            >
              <Phone className="w-3 h-3 text-amber-400" />
              <span className="font-bold tracking-wide">{AGENCY_INFO.phoneDisplay}</span>
            </a>
            <a
              href={AGENCY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-1.5 font-bold"
            >
              <WhatsAppIcon className="w-3.5 h-3.5" />
              <span>WhatsApp Direct</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation (3-Zone Top Bar Contract) */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-slate-100'
            : 'bg-white py-4 border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Zone 1: Brand Wordmark (Single clean text element) */}
          <a href="/" className="flex flex-col group">
            <span className="text-xl sm:text-2xl font-bold tracking-tight text-[#0B192C] font-heading group-hover:text-amber-700 transition-colors">
              Mukul M Naik
            </span>
            <span className="text-[10px] tracking-widest uppercase text-slate-600 font-semibold">
              मुकुल म. नाईक · Seawoods West
            </span>
          </a>

          {/* Zone 2: Navigation Links (Text with subtle hover underlines) */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-bold text-slate-900">
            <a href="/#properties" className="hover:text-amber-700 transition-colors py-1">
              Properties
            </a>
            <a href="/#about" className="hover:text-amber-700 transition-colors py-1">
              About Mukul Naik
            </a>
            <a href="/#reviews" className="hover:text-amber-700 transition-colors py-1">
              Reviews (5.0★)
            </a>
            <a href="/#gallery" className="hover:text-amber-700 transition-colors py-1">
              Gallery
            </a>
            <a href="/#calculator" className="hover:text-amber-700 transition-colors py-1">
              EMI Calculator
            </a>
            <a href="/#location" className="hover:text-amber-700 transition-colors py-1">
              Office Location
            </a>
          </nav>

          {/* Zone 3: Primary Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${AGENCY_INFO.phoneRaw}`}
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-bold text-[#0B192C] bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 text-amber-600" />
              <span>{AGENCY_INFO.phoneDisplay}</span>
            </a>
            <a
              href={AGENCY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors shadow-sm whitespace-nowrap"
            >
              <WhatsAppIcon className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={`tel:${AGENCY_INFO.phoneRaw}`}
              className="p-2 rounded-lg bg-slate-100 text-[#0B192C]"
              aria-label="Call Mukul Naik"
            >
              <Phone className="w-4 h-4 text-amber-700" />
            </a>
            <a
              href={AGENCY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-emerald-600 text-white"
              aria-label="WhatsApp Mukul Naik"
            >
              <WhatsAppIcon className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 text-xs text-slate-700">
              <span className="flex items-center gap-1 font-bold text-amber-700">
                <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                5.0 Google Rating ({AGENCY_INFO.reviewCount} Reviews)
              </span>
              <span className="font-bold">Shop 2A, Mayur CHS</span>
            </div>

            <nav className="flex flex-col space-y-2 text-sm font-bold text-slate-900">
              <a
                href="/#properties"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-2 hover:bg-slate-50 rounded-lg"
              >
                Featured Properties
              </a>
              <a
                href="/#about"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-2 hover:bg-slate-50 rounded-lg"
              >
                About Mukul M Naik
              </a>
              <a
                href="/#reviews"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-2 hover:bg-slate-50 rounded-lg"
              >
                Google Reviews (245)
              </a>
              <a
                href="/#gallery"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-2 hover:bg-slate-50 rounded-lg"
              >
                Photo Gallery
              </a>
              <a
                href="/#calculator"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-2 hover:bg-slate-50 rounded-lg"
              >
                EMI Calculator
              </a>
              <a
                href="/#location"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-2 hover:bg-slate-50 rounded-lg"
              >
                Office Location & Map
              </a>
            </nav>

            <div className="pt-2 grid grid-cols-2 gap-2">
              <a
                href={`tel:${AGENCY_INFO.phoneRaw}`}
                className="flex items-center justify-center gap-2 py-2.5 px-3 bg-[#0B192C] text-white text-xs font-semibold rounded-lg"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                Call Agent
              </a>
              <a
                href={AGENCY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 px-3 bg-emerald-600 text-white text-xs font-semibold rounded-lg"
              >
                <WhatsAppIcon className="w-3.5 h-3.5" />
                WhatsApp
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
