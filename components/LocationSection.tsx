'use client';

import React, { useState, useEffect } from 'react';
import { AGENCY_INFO } from '@/data/agencyInfo';
import { MapPin, Navigation, Clock, Phone, Share2, Bookmark, CheckCircle2, Train, Car, Building } from 'lucide-react';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';

export default function LocationSection() {
  const [isOpenNow, setIsOpenNow] = useState(() => {
    if (typeof window === 'undefined') return true;
    const hours = new Date().getHours();
    return hours >= AGENCY_INFO.openingTime && hours < AGENCY_INFO.closingTime;
  });
  const [copiedShare, setCopiedShare] = useState(false);
  const [savedBookmarked, setSavedBookmarked] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const hours = new Date().getHours();
      setIsOpenNow(hours >= AGENCY_INFO.openingTime && hours < AGENCY_INFO.closingTime);
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  const handleShare = async () => {
    const shareData = {
      title: 'Mukul M Naik - Real Estate Agency',
      text: `${AGENCY_INFO.name} - Shop No.2A, Mayur CHS Ltd, Sector 42, Seawoods West, Navi Mumbai. Phone: ${AGENCY_INFO.phoneDisplay}`,
      url: window.location.href,
    };
    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch {
        // Fallback to copy
      }
    } else {
      await navigator.clipboard.writeText(`${AGENCY_INFO.addressFull} | Phone: ${AGENCY_INFO.phoneDisplay}`);
      setCopiedShare(true);
      setTimeout(() => setCopiedShare(false), 2500);
    }
  };

  const handleSave = () => {
    setSavedBookmarked(!savedBookmarked);
  };

  return (
    <section id="location" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-800">
            Office Headquarters & Directions
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B192C] font-heading mt-1 tracking-tight">
            Visit Our Office in Seawoods West
          </h2>
          <p className="text-slate-700 text-sm sm:text-base font-semibold mt-2 leading-relaxed">
            Conveniently located at Mayur CHS Ltd, Sector 42. Walk in anytime between 11:00 AM and 8:00 PM for a warm cup of tea and genuine property advice.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Business Card & Quick Action Panel (5 cols) */}
          <div className="lg:col-span-5 bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-sm space-y-6">
            {/* Header Lockup mirroring reference Google profile */}
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                  Verified Physical Office
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-extrabold bg-amber-100 text-amber-950">
                  <span>★ 5.0 Rating</span>
                  <span className="text-slate-600 font-semibold">({AGENCY_INFO.reviewCount} Reviews)</span>
                </span>
              </div>
              <h3 className="text-2xl font-extrabold text-[#0B192C] font-heading mt-2">
                {AGENCY_INFO.name}
              </h3>
              <p className="text-xs text-slate-600 font-bold mt-0.5">
                {AGENCY_INFO.marathiName} · Real Estate Agent
              </p>
            </div>

            {/* Quick Action Pill Buttons (Matching Reference Screenshot: Call, Directions, WhatsApp, Share, Save) */}
            <div className="grid grid-cols-5 gap-2 pt-2">
              <a
                href={`tel:${AGENCY_INFO.phoneRaw}`}
                className="flex flex-col items-center justify-center p-2 rounded-xl bg-white border border-slate-200 hover:border-amber-400 hover:bg-amber-50/50 transition-all text-center group"
                title="Call Mukul Naik"
              >
                <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Phone className="w-4 h-4 font-bold" />
                </div>
                <span className="text-[11px] font-bold text-slate-800 mt-1.5">Call</span>
              </a>

              <a
                href={AGENCY_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-2 rounded-xl bg-white border border-slate-200 hover:border-amber-400 hover:bg-amber-50/50 transition-all text-center group"
                title="Get Directions on Google Maps"
              >
                <div className="w-8 h-8 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center group-hover:bg-amber-700 group-hover:text-white transition-colors">
                  <Navigation className="w-4 h-4 font-bold" />
                </div>
                <span className="text-[11px] font-bold text-slate-800 mt-1.5">Directions</span>
              </a>

              <a
                href={AGENCY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-2 rounded-xl bg-white border border-slate-200 hover:border-amber-400 hover:bg-amber-50/50 transition-all text-center group"
                title="WhatsApp Mukul Naik"
              >
                <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <WhatsAppIcon className="w-4 h-4" />
                </div>
                <span className="text-[11px] font-bold text-slate-800 mt-1.5">WhatsApp</span>
              </a>

              <button
                onClick={handleShare}
                className="flex flex-col items-center justify-center p-2 rounded-xl bg-white border border-slate-200 hover:border-amber-400 hover:bg-amber-50/50 transition-all text-center group"
                title="Share Contact Details"
              >
                <div className="w-8 h-8 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center group-hover:bg-slate-800 group-hover:text-white transition-colors">
                  <Share2 className="w-4 h-4 font-bold" />
                </div>
                <span className="text-[11px] font-bold text-slate-800 mt-1.5">
                  {copiedShare ? 'Copied' : 'Share'}
                </span>
              </button>

              <button
                onClick={handleSave}
                className="flex flex-col items-center justify-center p-2 rounded-xl bg-white border border-slate-200 hover:border-amber-400 hover:bg-amber-50/50 transition-all text-center group"
                title="Save Agency Contact"
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                    savedBookmarked
                      ? 'bg-amber-500 text-white'
                      : 'bg-slate-100 text-slate-700 group-hover:bg-amber-100 group-hover:text-amber-800'
                  }`}
                >
                  <Bookmark className={`w-4 h-4 ${savedBookmarked ? 'fill-current' : ''}`} />
                </div>
                <span className="text-[11px] font-bold text-slate-800 mt-1.5">
                  {savedBookmarked ? 'Saved' : 'Save'}
                </span>
              </button>
            </div>

            {/* Operating Hours Status */}
            <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1.5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-amber-700 font-bold" />
                  <span className="text-xs font-extrabold text-slate-900">Visiting Hours</span>
                </div>
                {isOpenNow ? (
                  <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-md flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Open Now · Closes 8 PM
                  </span>
                ) : (
                  <span className="text-xs font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md">
                    Closed · Opens 11 AM
                  </span>
                )}
              </div>
              <p className="text-xs text-slate-800 font-bold pl-6">
                {AGENCY_INFO.hours} (7 days a week)
              </p>
            </div>

            {/* Exact Full Address Breakdown */}
            <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-2">
              <div className="flex items-center gap-2 text-xs font-extrabold text-slate-900">
                <MapPin className="w-4 h-4 text-amber-700 shrink-0 font-bold" />
                <span>Full Official Address</span>
              </div>
              <p className="text-xs text-slate-900 leading-relaxed font-bold pl-6">
                {AGENCY_INFO.addressFull}
              </p>

              <div className="pt-2 pl-6 grid grid-cols-2 gap-2 text-[11px] text-slate-500 border-t border-slate-100">
                <div>Shop: <strong>{AGENCY_INFO.shopNumber}</strong></div>
                <div>Society: <strong>{AGENCY_INFO.building}</strong></div>
                <div>Sector: <strong>{AGENCY_INFO.sector}</strong></div>
                <div>Pincode: <strong>{AGENCY_INFO.pincode}</strong></div>
              </div>
            </div>

            {/* Landmark Connectivity */}
            <div className="space-y-2 text-xs text-slate-600">
              <div className="font-semibold text-slate-800">Proximity & Transit:</div>
              <div className="flex items-center gap-2">
                <Train className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                <span>Seawoods - Darave Railway Station: <strong>4 mins away</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <Building className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                <span>Seawoods Grand Central Mall: <strong>5 mins away</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <Car className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Palm Beach Road Highway: <strong>2 mins away</strong></span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Map & Live Navigation (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm flex flex-col justify-between">
            {/* Embedded Google Maps View centered on Seawoods Sector 42 Mayur CHS */}
            <div className="relative h-80 sm:h-96 w-full bg-slate-100">
              <iframe
                title="Mukul M Naik Office Map - Seawoods West Sector 42"
                src="https://maps.google.com/maps?q=Shop+No+2A+Sector+42+Mayur+CHS+Ltd+Plot+24+Seawoods+West+Navi+Mumbai+400706&t=&z=16&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Overlay Marker Card */}
              <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md p-3 rounded-xl border border-slate-200 shadow-md max-w-xs text-xs text-slate-800 pointer-events-none">
                <div className="font-bold text-[#0B192C] flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-red-600 animate-ping" />
                  <span>Mukul M Naik Office</span>
                </div>
                <div className="text-[11px] text-slate-600 mt-0.5">
                  Shop 2A, Mayur CHS, Sector 42, Seawoods West
                </div>
              </div>
            </div>

            {/* Bottom Navigation CTA Banner */}
            <div className="p-5 sm:p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-600 space-y-0.5 text-center sm:text-left">
                <div className="font-bold text-slate-900">
                  Driving or arriving via Local Train?
                </div>
                <div>Ample customer parking available directly outside Mayur CHS Ltd.</div>
              </div>

              <div className="flex items-center gap-2.5 shrink-0 w-full sm:w-auto">
                <a
                  href={AGENCY_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-4 py-2.5 bg-amber-500 hover:bg-amber-400 text-[#0B192C] text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Start GPS Navigation</span>
                </a>

                <a
                  href={`tel:${AGENCY_INFO.phoneRaw}`}
                  className="w-full sm:w-auto px-3.5 py-2.5 bg-white hover:bg-slate-100 text-[#0B192C] border border-slate-300 text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-700" />
                  <span>Call Office</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
