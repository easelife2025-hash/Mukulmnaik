'use client';

import React, { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';
import { AGENCY_INFO } from '@/data/agencyInfo';

interface GalleryItem {
  id: string;
  title: string;
  category: 'Residential' | 'Interiors' | 'Commercial' | 'Advisory';
  image: string;
  location: string;
  description: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g-1',
    title: 'Modern High-Rise Living in Seawoods',
    category: 'Residential',
    image: '/images/hero_navi_mumbai_luxury_tower_1791369168324.jpg',
    location: 'Sector 42, Seawoods West',
    description: 'Landmark residential tower with expansive balconies and podium landscape.',
  },
  {
    id: 'g-2',
    title: 'Italian Marble Designer Living Hall',
    category: 'Interiors',
    image: '/images/hero_luxury_apartment_interior_1791369305903.jpg',
    location: 'Palm Beach Road Waterfront',
    description: 'Floor-to-ceiling glass fenestrations overlooking the creek horizon.',
  },
  {
    id: 'g-3',
    title: 'Tranquil Gated Community Boulevard',
    category: 'Residential',
    image: '/images/hero_modern_gated_community_1791369337178.jpg',
    location: 'Sector 40 / 42 Link, Navi Mumbai',
    description: 'Illuminated evening gateway, water feature, and security surveillance.',
  },
  {
    id: 'g-4',
    title: 'Mukul M Naik Client Advisory & Desk',
    category: 'Advisory',
    image: '/images/hero_property_consultation_lounge_1791369354099.jpg',
    location: 'Shop No.2A, Mayur CHS Ltd, Sector 42',
    description: 'Where transparent conversations, legal checks, and fair deals happen daily.',
  },
  {
    id: 'g-5',
    title: 'Upscale Sector 42 Residential Society',
    category: 'Residential',
    image: '/images/property_modern_seawoods_residence_1791369370062.jpg',
    location: 'Mayur CHS Vicinity, Seawoods West',
    description: 'Well-maintained cooperative housing society with clean titles.',
  },
  {
    id: 'g-6',
    title: 'Palm Beach Sunset Balcony Vista',
    category: 'Interiors',
    image: '/images/property_palm_beach_view_1791369439826.jpg',
    location: 'Palm Beach Road, Nerul',
    description: 'Unobstructed twilight view over mangroves and Navi Mumbai skyline.',
  },
  {
    id: 'g-7',
    title: 'Prime Commercial Retail Frontage',
    category: 'Commercial',
    image: '/images/property_seawoods_commercial_1791369454198.jpg',
    location: 'Near Seawoods Grand Central Station',
    description: 'High-footfall retail storefronts and corporate professional suites.',
  },
  {
    id: 'g-8',
    title: 'Private Rooftop Terrace Penthouse',
    category: 'Residential',
    image: '/images/property_nerul_penthouse_1791369475809.jpg',
    location: 'Sector 19A, Nerul',
    description: 'Exclusive sky villa terrace with teak pergola and panoramic views.',
  },
];

export default function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  const categories = ['All', 'Residential', 'Interiors', 'Commercial', 'Advisory'];

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (selectedCategory === 'All') return true;
    return item.category === selectedCategory;
  });

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-800">
              Visual Portfolio
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B192C] font-heading">
              Properties & Advisory Gallery
            </h2>
            <p className="text-slate-800 text-sm sm:text-base font-bold leading-relaxed">
              Explore authentic glimpses of residential high-rises, palm-lined enclaves, verified commercial spaces, and our Seawoods West consultation office.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-colors whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-[#0B192C] text-white shadow-sm'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setLightboxItem(item)}
              className="group relative h-64 rounded-xl overflow-hidden cursor-pointer bg-slate-900 border border-slate-200 shadow-sm"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.image}
                alt={item.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              {/* Category tag */}
              <div className="absolute top-3 left-3">
                <span className="px-2 py-0.5 bg-black/60 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-wider rounded">
                  {item.category}
                </span>
              </div>

              {/* Zoom Icon indicator */}
              <div className="absolute top-3 right-3 p-1.5 rounded-full bg-white/20 backdrop-blur-sm text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="w-4 h-4" />
              </div>

              {/* Title & Location details */}
              <div className="absolute bottom-3 left-3 right-3 text-white space-y-1">
                <h3 className="text-sm font-bold font-heading line-clamp-1 group-hover:text-amber-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-[11px] text-slate-300 line-clamp-1">
                  {item.location}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {lightboxItem && (
          <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
            <div className="relative max-w-4xl w-full bg-[#0B192C] rounded-2xl overflow-hidden shadow-2xl border border-slate-700">
              <button
                onClick={() => setLightboxItem(null)}
                className="absolute top-4 right-4 z-20 p-2 bg-black/70 hover:bg-black/90 text-white rounded-full transition-colors"
                aria-label="Close image preview"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative h-80 sm:h-[460px] w-full bg-black">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={lightboxItem.image}
                  alt={lightboxItem.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="p-5 sm:p-6 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-slate-800">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 bg-amber-500 text-[#0B192C] text-[10px] font-bold uppercase rounded">
                      {lightboxItem.category}
                    </span>
                    <span className="text-xs text-slate-400">{lightboxItem.location}</span>
                  </div>
                  <h3 className="text-lg font-bold font-heading text-white">
                    {lightboxItem.title}
                  </h3>
                  <p className="text-xs text-slate-300">{lightboxItem.description}</p>
                </div>

                <a
                  href={`https://wa.me/919821479985?text=Hello%20Mukul%20ji,%20I%20saw%20the%20photo%20"${encodeURIComponent(
                    lightboxItem.title
                  )}"%20in%20your%20gallery.%20Can%20you%20share%20similar%20options?`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-lg transition-colors flex items-center gap-2 shrink-0 shadow-sm"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>Inquire via WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
