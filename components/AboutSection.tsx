'use client';

import React from 'react';
import { AGENCY_INFO } from '@/data/agencyInfo';
import { Star, ShieldCheck, MapPin, Award, Clock, Users, FileText } from 'lucide-react';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';

export default function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Credibility Showcase (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden bg-[#0B192C] shadow-2xl border border-slate-200">
              {/* Office Consultation Visual */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/hero_property_consultation_lounge_1791369354099.jpg"
                alt="Mukul M Naik Office Consultation Lounge at Seawoods West"
                referrerPolicy="no-referrer"
                className="w-full h-80 sm:h-96 object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B192C] via-transparent to-transparent opacity-80" />

              {/* Office Details Card overlay */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 backdrop-blur-md shadow-lg border border-slate-100 text-slate-800">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-sm text-[#0B192C] font-heading">
                      Mukul M Naik (मुकुल म. नाईक)
                    </h4>
                    <p className="text-[11px] text-slate-500">
                      Chief Consultant & Founder
                    </p>
                  </div>
                  <div className="flex items-center gap-1 bg-amber-50 border border-amber-200 px-2 py-1 rounded-md text-amber-800 text-xs font-bold">
                    <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                    <span>5.0 (245)</span>
                  </div>
                </div>

                <div className="mt-2.5 pt-2 border-t border-slate-100 text-[11px] text-slate-600 flex items-start gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-amber-700 shrink-0 mt-0.5" />
                  <span>Shop No.2A, Mayur CHS Ltd, Sector 42, Seawoods West</span>
                </div>
              </div>
            </div>

            {/* Floating Experience Badge */}
            <div className="absolute -top-4 -right-4 bg-amber-500 text-[#0B192C] p-4 rounded-2xl shadow-xl border-2 border-white flex items-center gap-3">
              <Award className="w-8 h-8 text-[#0B192C]" />
              <div>
                <div className="text-xl font-bold font-heading">16+ Years</div>
                <div className="text-[10px] font-bold uppercase tracking-wider">Local Mastery</div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Values (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-800">
                The Face of Trust in Seawoods
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B192C] font-heading mt-1 leading-tight tracking-tight">
                Authentic Guidance. Zero Brokerage Games. Complete Legal Clarity.
              </h2>
            </div>

            <p className="text-sm sm:text-base text-slate-700 font-semibold leading-relaxed">
              In a crowded property market where buyers frequently encounter vague documentation and exaggerated claims, <strong className="font-extrabold text-slate-900">Mukul M Naik</strong> has spent over sixteen years cultivating a spotless reputation rooted in personal ethics, exact paperwork, and local neighbourhood intelligence.
            </p>

            <p className="text-xs sm:text-sm text-slate-700 font-semibold leading-relaxed">
              Operating directly from <strong className="font-extrabold text-slate-900">Shop No.2A, Sector 42, Mayur CHS Ltd</strong>, Mukul ji is not an impersonal aggregator. When you sit across his desk, you receive genuine, on-ground market rates, direct seller interactions, and rigorous legal vetting before a single rupee changes hands.
            </p>

            {/* Four Pillars of Trust */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                <div className="flex items-center gap-2 text-slate-950 font-extrabold text-xs sm:text-sm">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 font-bold" />
                  <span>Strict CIDCO & Society Auditing</span>
                </div>
                <p className="text-xs text-slate-800 font-bold leading-normal">
                  Every property is vetted for 12A transfer charges, non-agricultural sanctions, and clear cooperative society membership records.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                <div className="flex items-center gap-2 text-slate-950 font-extrabold text-xs sm:text-sm">
                  <Users className="w-4 h-4 text-amber-700 shrink-0 font-bold" />
                  <span>Direct Buyer-Seller Interface</span>
                </div>
                <p className="text-xs text-slate-800 font-bold leading-normal">
                  Zero fictitious markups. We facilitate transparent face-to-face negotiations so both parties arrive at a fair, market-aligned price.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                <div className="flex items-center gap-2 text-slate-950 font-extrabold text-xs sm:text-sm">
                  <FileText className="w-4 h-4 text-blue-600 shrink-0 font-bold" />
                  <span>Complete Paperwork Care</span>
                </div>
                <p className="text-xs text-slate-800 font-bold leading-normal">
                  Drafting registered sale agreements, bank home loan documentation, biometric stamping, and post-possession utility transfers.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                <div className="flex items-center gap-2 text-slate-950 font-extrabold text-xs sm:text-sm">
                  <Clock className="w-4 h-4 text-purple-600 shrink-0 font-bold" />
                  <span>Open 7 Days a Week</span>
                </div>
                <p className="text-xs text-slate-800 font-bold leading-normal">
                  Available every single day from 11:00 AM to 8:00 PM to accommodate working professionals and families inspecting homes on weekends.
                </p>
              </div>
            </div>

            {/* Quick Consultation CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={AGENCY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-extrabold rounded-xl transition-colors inline-flex items-center gap-2 shadow-sm"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>Connect with Mukul Naik on WhatsApp</span>
              </a>

              <a
                href="#location"
                className="px-6 py-3.5 bg-slate-100 hover:bg-slate-200 text-[#0B192C] text-xs font-extrabold rounded-xl transition-colors inline-flex items-center gap-2"
              >
                <MapPin className="w-3.5 h-3.5 text-amber-700" />
                <span>Visit Shop No.2A, Mayur CHS</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
