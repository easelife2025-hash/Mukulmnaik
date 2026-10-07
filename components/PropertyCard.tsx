'use client';

import React from 'react';
import { Property } from '@/data/properties';
import { AGENCY_INFO } from '@/data/agencyInfo';
import { Bed, Bath, Square, MapPin, Phone, ArrowUpRight, ShieldCheck, Check } from 'lucide-react';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';

interface PropertyCardProps {
  property: Property;
  onSelect: (property: Property) => void;
}

export default function PropertyCard({ property, onSelect }: PropertyCardProps) {
  const whatsappPropertyUrl = `https://wa.me/919821479985?text=Hello%20Mukul%20ji,%20I%20am%20interested%20in%20"${encodeURIComponent(
    property.title
  )}"%20listed%20for%20${encodeURIComponent(property.price)}.%20Please%20share%20details.`;

  return (
    <div className="group bg-white rounded-xl border border-slate-200/90 hover:border-amber-400/60 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col overflow-hidden">
      {/* Image Container with Badges */}
      <div className="relative h-60 w-full overflow-hidden bg-slate-100">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={property.image}
          alt={property.title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

        {/* Intent & Type Badges */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5">
          <span className="px-2.5 py-1 bg-[#0B192C]/90 text-white text-[11px] font-bold rounded-md uppercase tracking-wider backdrop-blur-sm">
            {property.intent === 'Buy' ? 'For Sale' : 'For Rent'}
          </span>
          <span className="px-2.5 py-1 bg-amber-500 text-[#0B192C] text-[11px] font-bold rounded-md">
            {property.type}
          </span>
        </div>

        {/* Status Badge */}
        <div className="absolute top-3 right-3">
          <span className="px-2.5 py-1 bg-white/95 text-slate-900 text-[11px] font-bold rounded-md backdrop-blur-sm flex items-center gap-1 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            {property.status}
          </span>
        </div>

        {/* Price Tag Overlay */}
        <div className="absolute bottom-3 left-3 right-3 flex items-baseline justify-between text-white">
          <div>
            <div className="text-xl sm:text-2xl font-extrabold font-heading drop-shadow-sm text-amber-300">
              {property.price}
            </div>
            {property.pricePerSqFt && (
              <div className="text-[11px] text-slate-100 font-bold">
                {property.pricePerSqFt}
              </div>
            )}
          </div>
          <span className="text-xs bg-black/60 font-bold px-2.5 py-0.5 rounded text-white">
            {property.localityTag}
          </span>
        </div>
      </div>

      {/* Content Body */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div className="space-y-2.5">
          {/* Title */}
          <h3
            onClick={() => onSelect(property)}
            className="text-base font-bold text-slate-900 group-hover:text-amber-700 transition-colors cursor-pointer line-clamp-1"
            title={property.title}
          >
            {property.title}
          </h3>

          {/* Location / Landmark */}
          <div className="flex items-start gap-1.5 text-xs text-slate-600 font-semibold">
            <MapPin className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
            <span className="line-clamp-1">{property.landmark}</span>
          </div>

          {/* Key Specifications Grid */}
          <div className="grid grid-cols-3 gap-2 py-3 border-y border-slate-100 text-slate-800 text-xs font-bold">
            {property.bedrooms > 0 ? (
              <div className="flex items-center gap-1.5">
                <Bed className="w-3.5 h-3.5 text-slate-500" />
                <span>{property.bedrooms} Beds</span>
              </div>
            ) : (
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-slate-500" />
                <span>Commercial</span>
              </div>
            )}

            <div className="flex items-center gap-1.5">
              <Bath className="w-3.5 h-3.5 text-slate-500" />
              <span>{property.bathrooms} Baths</span>
            </div>

            <div className="flex items-center gap-1.5">
              <Square className="w-3.5 h-3.5 text-slate-500" />
              <span>{property.carpetArea}</span>
            </div>
          </div>

          {/* Quick highlight feature */}
          <div className="text-[11px] text-slate-800 font-semibold flex items-center gap-1.5">
            <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 font-bold" />
            <span className="truncate">{property.features[0] || 'Clear Title & Society NOC Ready'}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 mt-3 border-t border-slate-100 flex items-center gap-2">
          <button
            onClick={() => onSelect(property)}
            className="flex-1 py-2 px-3 text-xs font-bold text-[#0B192C] bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors flex items-center justify-center gap-1"
          >
            <span>View Details</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          <a
            href={whatsappPropertyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors flex items-center justify-center"
            title="Chat on WhatsApp"
            aria-label="Chat on WhatsApp regarding this property"
          >
            <WhatsAppIcon className="w-4 h-4" />
          </a>

          <a
            href={`tel:${AGENCY_INFO.phoneRaw}`}
            className="p-2 text-[#0B192C] bg-amber-100 hover:bg-amber-200 rounded-lg transition-colors flex items-center justify-center"
            title="Call Mukul M Naik"
            aria-label="Call Mukul M Naik regarding this property"
          >
            <Phone className="w-4 h-4 text-amber-800" />
          </a>
        </div>
      </div>
    </div>
  );
}
