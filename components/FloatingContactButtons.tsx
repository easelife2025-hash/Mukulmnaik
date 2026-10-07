'use client';

import React from 'react';
import { AGENCY_INFO } from '@/data/agencyInfo';
import { Phone } from 'lucide-react';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';

export default function FloatingContactButtons() {
  return (
    <div
      className="fixed bottom-5 right-4 sm:right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto"
      aria-label="Quick Contact Floating Actions"
    >
      {/* Call Floating Action Button */}
      <a
        href={`tel:${AGENCY_INFO.phoneRaw}`}
        className="group relative flex items-center justify-center w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-[#0B192C] text-white shadow-xl hover:bg-slate-800 hover:scale-105 active:scale-95 transition-all duration-200 border-2 border-white/20"
        title={`Call Mukul M Naik: ${AGENCY_INFO.phoneDisplay}`}
        aria-label="Direct Phone Call to Mukul M Naik"
      >
        <Phone className="w-5 h-5 text-amber-400 group-hover:rotate-12 transition-transform" />

        {/* Hover label on desktop */}
        <span className="hidden md:block absolute right-14 whitespace-nowrap bg-[#0B192C] text-white text-xs font-extrabold py-1.5 px-3 rounded-lg shadow-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity border border-slate-700">
          Call: {AGENCY_INFO.phoneDisplay}
        </span>
      </a>

      {/* WhatsApp Floating Action Button */}
      <a
        href={AGENCY_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-emerald-600 text-white shadow-2xl hover:bg-emerald-500 hover:scale-105 active:scale-95 transition-all duration-200 border-2 border-white"
        title="WhatsApp Mukul M Naik directly"
        aria-label="Chat on WhatsApp with Mukul M Naik"
      >
        {/* Subtle ping indicator ring */}
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-white" />
        </span>

        <WhatsAppIcon className="w-7 h-7" />

        {/* Hover label on desktop */}
        <span className="hidden md:block absolute right-16 whitespace-nowrap bg-slate-900 text-white text-xs font-extrabold py-1.5 px-3 rounded-lg shadow-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity border border-slate-700">
          WhatsApp Mukul Naik (5.0★ Agent)
        </span>
      </a>
    </div>
  );
}
