'use client';

import React, { useState } from 'react';
import { Property } from '@/data/properties';
import { AGENCY_INFO } from '@/data/agencyInfo';
import { X, Bed, Bath, Square, MapPin, Phone, ShieldCheck, CheckCircle2, Calendar, Compass, Car } from 'lucide-react';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';

interface PropertyModalProps {
  property: Property | null;
  onClose: () => void;
}

export default function PropertyModal({ property, onClose }: PropertyModalProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [visitDate, setVisitDate] = useState('');
  const [visitorName, setVisitorName] = useState('');
  const [visitorPhone, setVisitorPhone] = useState('');
  const [scheduledSuccess, setScheduledSuccess] = useState(false);

  if (!property) return null;

  const currentImages = property.gallery && property.gallery.length > 0 ? property.gallery : [property.image];

  const handleScheduleVisit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!visitorName || !visitorPhone) return;

    // Dispatch or pre-fill WhatsApp message
    const msg = `Hello Mukul ji, I would like to schedule a site visit for "${property.title}" (${property.price}). My name is ${visitorName}, phone ${visitorPhone}${visitDate ? `, preferred date: ${visitDate}` : ''}.`;
    const targetUrl = `https://wa.me/919821479985?text=${encodeURIComponent(msg)}`;
    window.open(targetUrl, '_blank');
    setScheduledSuccess(true);
  };

  const whatsappPropertyUrl = `https://wa.me/919821479985?text=Hello%20Mukul%20ji,%20I%20am%20interested%20in%20"${encodeURIComponent(
    property.title
  )}"%20priced%20at%20${encodeURIComponent(property.price)}.%20Please%20share%20all%20details%20and%20floor%20plan.`;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden my-6 border border-slate-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-black/60 hover:bg-black/80 text-white rounded-full transition-colors"
          aria-label="Close property details"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 max-h-[85vh] overflow-y-auto">
          {/* Left Column: Visual Showcase & Specs (7 cols) */}
          <div className="lg:col-span-7 bg-slate-50 p-4 sm:p-6 flex flex-col justify-between">
            <div>
              {/* Main Image */}
              <div className="relative h-64 sm:h-80 w-full rounded-xl overflow-hidden bg-slate-900 mb-3 shadow-inner">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={currentImages[activeImageIndex] || property.image}
                  alt={property.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="px-2.5 py-1 bg-[#0B192C] text-white text-xs font-semibold rounded-md">
                    {property.intent === 'Buy' ? 'For Sale' : 'For Rent'}
                  </span>
                  <span className="px-2.5 py-1 bg-amber-500 text-[#0B192C] text-xs font-bold rounded-md">
                    {property.type}
                  </span>
                </div>
                <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2.5 py-1 rounded-md">
                  {activeImageIndex + 1} / {currentImages.length}
                </div>
              </div>

              {/* Thumbnails */}
              {currentImages.length > 1 && (
                <div className="flex items-center gap-2 mb-4 overflow-x-auto pb-1">
                  {currentImages.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`relative w-16 h-12 rounded-lg overflow-hidden shrink-0 border-2 transition-all ${
                        activeImageIndex === idx ? 'border-amber-500 scale-105' : 'border-transparent opacity-70 hover:opacity-100'
                      }`}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={img}
                        alt={`Thumbnail ${idx + 1}`}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}

              {/* Quick Spec Highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 py-3 bg-white rounded-xl p-3 border border-slate-200 text-xs">
                {property.bedrooms > 0 && (
                  <div className="flex items-center gap-2 text-slate-700">
                    <Bed className="w-4 h-4 text-amber-600" />
                    <div>
                      <div className="font-semibold">{property.bedrooms} Beds</div>
                      <div className="text-[10px] text-slate-400">Bedrooms</div>
                    </div>
                  </div>
                )}
                <div className="flex items-center gap-2 text-slate-700">
                  <Bath className="w-4 h-4 text-amber-600" />
                  <div>
                    <div className="font-semibold">{property.bathrooms} Baths</div>
                    <div className="text-[10px] text-slate-400">Bathrooms</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <Square className="w-4 h-4 text-amber-600" />
                  <div>
                    <div className="font-semibold">{property.carpetArea}</div>
                    <div className="text-[10px] text-slate-400">Carpet Area</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <Car className="w-4 h-4 text-amber-600" />
                  <div>
                    <div className="font-semibold">{property.parking}</div>
                    <div className="text-[10px] text-slate-400">Parking</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Parameters */}
            <div className="mt-4 pt-3 border-t border-slate-200 grid grid-cols-2 gap-2 text-xs text-slate-600">
              <div className="flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-slate-400" />
                <span>Facing: <strong>{property.facing}</strong></span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Floor: <strong>{property.floor}</strong></span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-slate-400" />
                <span>Furnishing: <strong>{property.furnishing}</strong></span>
              </div>
              {property.reraNumber && (
                <div className="flex items-center gap-1.5">
                  <span className="font-bold text-slate-800">RERA:</span>
                  <span className="font-mono text-[11px] text-slate-700 font-bold">{property.reraNumber}</span>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Pricing, Verified Features & Lead Form (5 cols) */}
          <div className="lg:col-span-5 p-5 sm:p-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div>
                <div className="flex items-baseline justify-between">
                  <span className="text-2xl sm:text-3xl font-extrabold font-heading text-[#0B192C]">
                    {property.price}
                  </span>
                  {property.pricePerSqFt && (
                    <span className="text-xs font-bold text-amber-800 bg-amber-50 px-2 py-0.5 rounded">
                      {property.pricePerSqFt}
                    </span>
                  )}
                </div>
                <h2 className="text-lg font-bold text-slate-900 mt-1 font-heading">
                  {property.title}
                </h2>
                <div className="flex items-start gap-1.5 text-xs text-slate-500 mt-1">
                  <MapPin className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                  <span>{property.location} ({property.landmark})</span>
                </div>
              </div>

              {/* Description */}
              <div className="text-xs text-slate-600 leading-relaxed bg-slate-50 p-3 rounded-lg border border-slate-100">
                {property.description}
              </div>

              {/* Key Amenities & Verification */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
                  Verified Inclusions & Documents
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-700">
                  {property.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quick Schedule Site Visit */}
              <div className="border border-amber-200/80 bg-amber-50/50 p-3.5 rounded-xl">
                <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900 mb-2">
                  <Calendar className="w-4 h-4 text-amber-600" />
                  <span>Book Site Inspection with Mukul Naik</span>
                </div>

                {scheduledSuccess ? (
                  <div className="text-xs text-emerald-800 bg-emerald-100/80 p-2.5 rounded-lg flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600" />
                    <span>Inquiry sent to Mukul ji! He will connect with you promptly.</span>
                  </div>
                ) : (
                  <form onSubmit={handleScheduleVisit} className="space-y-2">
                    <div className="grid grid-cols-2 gap-2">
                      <input
                        type="text"
                        placeholder="Your Name"
                        value={visitorName}
                        onChange={(e) => setVisitorName(e.target.value)}
                        required
                        className="text-xs px-2.5 py-1.5 border border-slate-200 rounded-lg bg-white focus:outline-none focus:ring-1 focus:ring-amber-500"
                      />
                      <input
                        type="tel"
                        placeholder="Phone / WhatsApp"
                        value={visitorPhone}
                        onChange={(e) => setVisitorPhone(e.target.value)}
                        required
                        className="text-xs px-2.5 py-1.5 border border-slate-200 rounded-lg bg-white focus:outline-none focus:ring-1 focus:ring-amber-500"
                      />
                    </div>
                    <input
                      type="date"
                      value={visitDate}
                      onChange={(e) => setVisitDate(e.target.value)}
                      className="w-full text-xs px-2.5 py-1.5 border border-slate-200 rounded-lg bg-white text-slate-600 focus:outline-none focus:ring-1 focus:ring-amber-500"
                    />
                    <button
                      type="submit"
                      className="w-full py-2 px-3 bg-[#0B192C] hover:bg-slate-800 text-white text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-1.5"
                    >
                      <WhatsAppIcon className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Confirm Visit via WhatsApp</span>
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="mt-5 pt-3 border-t border-slate-200 grid grid-cols-2 gap-2">
              <a
                href={whatsappPropertyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-3 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-1.5 shadow-sm"
              >
                <WhatsAppIcon className="w-3.5 h-3.5" />
                <span>WhatsApp Now</span>
              </a>
              <a
                href={`tel:${AGENCY_INFO.phoneRaw}`}
                className="py-2.5 px-3 bg-amber-500 hover:bg-amber-400 text-[#0B192C] text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-1.5 shadow-sm"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call {AGENCY_INFO.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
