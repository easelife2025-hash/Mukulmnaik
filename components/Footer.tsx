'use client';

import React from 'react';
import { AGENCY_INFO } from '@/data/agencyInfo';
import { Phone, MapPin, Clock, Star, ArrowUp, ShieldCheck } from 'lucide-react';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B192C] text-slate-300 border-t border-slate-800">
      {/* Upper Footer: Core Information & Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Brand & Narrative (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div>
              <span className="text-2xl font-extrabold font-heading text-white tracking-tight">
                Mukul M Naik
              </span>
              <p className="text-xs text-amber-400 font-bold mt-0.5">
                मुकुल म. नाईक · Seawoods West, Navi Mumbai
              </p>
            </div>

            <p className="text-xs text-slate-300 font-bold leading-relaxed max-w-sm">
              Navi Mumbai’s trusted property consultant with 16+ years of ethical advisory. Specializing in luxury residences, CIDCO clear-title resale homes, registered leasing, and commercial spaces across Seawoods, Palm Beach Road, and Nerul.
            </p>

            <div className="flex items-center gap-2 pt-1 text-xs">
              <div className="flex items-center text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="font-extrabold text-white">5.0 / 5.0</span>
              <span className="text-slate-400 font-bold">({AGENCY_INFO.reviewCount} Google Reviews)</span>
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-300 font-bold">
              <li>
                <a href="/#properties" className="hover:text-amber-400 transition-colors">
                  Featured Properties
                </a>
              </li>
              <li>
                <a href="/#about" className="hover:text-amber-400 transition-colors">
                  About Mukul Naik
                </a>
              </li>
              <li>
                <a href="/#reviews" className="hover:text-amber-400 transition-colors">
                  Verified Reviews
                </a>
              </li>
              <li>
                <a href="/#gallery" className="hover:text-amber-400 transition-colors">
                  Property Gallery
                </a>
              </li>
              <li>
                <a href="/#calculator" className="hover:text-amber-400 transition-colors">
                  EMI Calculator
                </a>
              </li>
              <li>
                <a href="/#location" className="hover:text-amber-400 transition-colors">
                  Office & Directions
                </a>
              </li>
            </ul>
          </div>

          {/* Key Localities (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-white">
              Navi Mumbai Localities
            </h4>
            <ul className="space-y-2 text-xs text-slate-300 font-bold">
              <li>Seawoods West (Sector 42, 44, 46, 48)</li>
              <li>Palm Beach Road (Waterfront Enclaves)</li>
              <li>Nerul East & West (Sector 19A, 21, 28)</li>
              <li>Kharghar (Sector 20, Central Park, Metro)</li>
              <li>Ulwe (Near Atal Setu & Airport Corridor)</li>
              <li>CBD Belapur & Sanpada Commercial</li>
            </ul>
          </div>

          {/* Contact & Office Address (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-white">
              Office & Direct Contact
            </h4>

            <div className="space-y-2.5 text-xs text-slate-300 font-bold">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  {AGENCY_INFO.addressFull}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a
                  href={`tel:${AGENCY_INFO.phoneRaw}`}
                  className="hover:text-white font-bold transition-colors"
                >
                  {AGENCY_INFO.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <WhatsAppIcon className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={AGENCY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 font-bold transition-colors"
                >
                  WhatsApp: +91 98214 79985
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{AGENCY_INFO.hours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Regulatory Disclosure */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[11px] text-slate-500">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
            <span>
              Real Estate Consultancy adhering to Maharashtra Real Estate Regulatory Authority (MahaRERA) standards and CIDCO legal guidelines.
            </span>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors text-xs"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Bottom Quiet Bar */}
      <div className="bg-[#07111E] py-4 px-4 text-center text-xs text-slate-500 border-t border-slate-800/50">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div>
            © {new Date().getFullYear()} Mukul M Naik. All Rights Reserved. Mayur CHS Ltd, Seawoods West, Navi Mumbai.
          </div>
          <div className="text-[11px] text-slate-500">
            Designed for Trust, Transparency & Exceptional Real Estate Consulting.
          </div>
        </div>
      </div>
    </footer>
  );
}
