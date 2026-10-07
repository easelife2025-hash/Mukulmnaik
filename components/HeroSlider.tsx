'use client';

import React, { useState, useEffect, useRef } from 'react';
import { AGENCY_INFO } from '@/data/agencyInfo';
import { Phone, ArrowRight, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';

interface SlideItem {
  id: number;
  image: string;
  tag: string;
  headline: string;
  subheading: string;
  trustHighlight: string;
}

const SLIDES: SlideItem[] = [
  {
    id: 1,
    image: '/images/hero_navi_mumbai_luxury_tower_1791369168324.jpg',
    tag: 'Navi Mumbai Premier Real Estate',
    headline: 'Find Your Dream Home in Seawoods & Navi Mumbai',
    subheading: 'Verified luxury apartments, CIDCO-approved resale homes & clear-title properties personally audited by Mukul M Naik.',
    trustHighlight: '5.0 ★ Google Rating · 245 Verified Reviews',
  },
  {
    id: 2,
    image: '/images/hero_luxury_apartment_interior_1791369305903.jpg',
    tag: 'Palm Beach Road Waterfront Collection',
    headline: 'Waterfront Elegance & Sea-Facing Sanctuaries',
    subheading: 'Experience breathtaking panoramic flamingo bay vistas, Italian marble living spaces, and bespoke luxury finishes.',
    trustHighlight: 'Direct Sea-Facing Palm Beach Road Residencies',
  },
  {
    id: 3,
    image: '/images/hero_modern_gated_community_1791369337178.jpg',
    tag: 'Family Communities & Modern Amenities',
    headline: 'Tranquil Gated Enclaves Near Seawoods Grand Central',
    subheading: 'Spacious 2 & 3 BHK homes walking distance to Seawoods Station, premier schools, shopping avenues, and lush gardens.',
    trustHighlight: 'Zero Litigation · 100% Clear Title Verification',
  },
  {
    id: 4,
    image: '/images/hero_property_consultation_lounge_1791369354099.jpg',
    tag: '16+ Years Trusted Agency In Sector 42',
    headline: 'Honest Property Advisory With Zero Hidden Costs',
    subheading: 'End-to-end assistance: legal documentation, bank home loan approval, society NOC, and transparent registration.',
    trustHighlight: 'Mayur CHS Ltd, Sector 42 · Open Every Day 11 AM - 8 PM',
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
      }, 5500);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  return (
    <section
      className="relative w-full overflow-hidden bg-[#0B192C]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Featured Real Estate Showcase"
    >
      {/* Slides Container */}
      <div className="relative h-[620px] sm:h-[680px] lg:h-[720px] w-full">
        {SLIDES.map((slide, idx) => {
          const isActive = idx === currentSlide;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              {/* Background Image with Fallback and Measured Gradient Scrim */}
              <div className="absolute inset-0 bg-[#0B192C]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={slide.image}
                  alt={slide.headline}
                  referrerPolicy="no-referrer"
                  className={`w-full h-full object-cover object-center transform transition-transform duration-[6000ms] ease-out ${
                    isActive ? 'scale-105' : 'scale-100'
                  }`}
                />
                {/* Dual Gradient Scrim for WCAG AA readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#0B192C]/95 via-[#0B192C]/75 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B192C] via-[#0B192C]/40 to-black/30" />
              </div>

              {/* Slide Content */}
              <div className="relative z-20 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
                <div className="max-w-2xl text-white space-y-4 sm:space-y-6">
                  {/* Tag & Trust Marker */}
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-amber-500/25 border border-amber-400/40 text-amber-300 text-xs font-bold tracking-wider uppercase">
                    <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                    <span>{slide.tag}</span>
                  </div>

                  {/* Headline */}
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-white font-heading leading-tight drop-shadow-md">
                    {slide.headline}
                  </h1>

                  {/* Subheading */}
                  <p className="text-slate-100 text-sm sm:text-base lg:text-lg font-semibold leading-relaxed max-w-xl">
                    {slide.subheading}
                  </p>

                  {/* Trust highlight box */}
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200 bg-white/15 backdrop-blur-md px-4 py-2.5 rounded-lg border border-white/20 w-fit">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400 shrink-0" />
                    <span className="font-bold text-amber-300">{slide.trustHighlight}</span>
                  </div>

                  {/* CTAs */}
                  <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
                    <a
                      href="#properties"
                      className="inline-flex items-center gap-2 px-6 py-3.5 bg-amber-500 hover:bg-amber-400 text-[#0B192C] text-sm font-extrabold rounded-lg transition-colors shadow-lg shadow-amber-500/25"
                    >
                      <span>View Properties</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>

                    <a
                      href={AGENCY_INFO.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-bold rounded-lg transition-colors shadow-lg shadow-emerald-900/30"
                    >
                      <WhatsAppIcon className="w-4 h-4" />
                      <span>WhatsApp Mukul Naik</span>
                    </a>

                    <a
                      href={`tel:${AGENCY_INFO.phoneRaw}`}
                      className="inline-flex items-center gap-2 px-4 py-3.5 bg-white/20 hover:bg-white/30 text-white text-sm font-bold rounded-lg backdrop-blur-sm border border-white/30 transition-colors"
                    >
                      <Phone className="w-4 h-4 text-amber-300" />
                      <span>Call {AGENCY_INFO.phoneDisplay}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-black/40 hover:bg-black/70 text-white border border-white/20 transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-black/40 hover:bg-black/70 text-white border border-white/20 transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Slide Indicators & Auto-play controls */}
        <div className="absolute bottom-6 left-0 right-0 z-30 flex items-center justify-center gap-2 px-4">
          {SLIDES.map((slide, idx) => (
            <button
              key={slide.id}
              onClick={() => goToSlide(idx)}
              className={`h-2.5 transition-all duration-300 rounded-full ${
                idx === currentSlide
                  ? 'w-8 bg-amber-400'
                  : 'w-2.5 bg-white/40 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
