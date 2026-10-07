'use client';

import React, { useState } from 'react';
import { AGENCY_INFO } from '@/data/agencyInfo';
import { Home, Key, Building, FileCheck2, Landmark, Globe2, ArrowRight, CheckCircle2 } from 'lucide-react';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';

interface ServiceItem {
  id: string;
  number: string;
  title: string;
  category: string;
  icon: React.ElementType;
  description: string;
  deliverables: string[];
  idealFor: string;
}

const SERVICES: ServiceItem[] = [
  {
    id: 'residential-buy-sell',
    number: '01',
    title: 'Residential Buying & Resale Consulting',
    category: 'Home Ownership',
    icon: Home,
    description: 'Personalized advisory to find, inspect, and acquire the finest apartments, penthouses, and row houses across Seawoods West, Palm Beach Road, and Nerul.',
    deliverables: [
      'Comprehensive on-ground market valuation',
      'Independent 30-year title & chain of deeds verification',
      'Direct owner negotiation with zero inflated rates',
      'End-to-end registration & possession handover'
    ],
    idealFor: 'Families seeking genuine homes & investors looking for capital appreciation.'
  },
  {
    id: 'rental-lease',
    number: '02',
    title: 'Rental & Society Lease Management',
    category: 'Tenancy Solutions',
    icon: Key,
    description: 'Hassle-free landlord and tenant matchmaking backed by legally registered agreements and comprehensive police verification.',
    deliverables: [
      'Pre-screened, verified family and corporate tenants',
      'Government-registered biometric lease agreements',
      'Local police verification & society intimation',
      'Security deposit escrow & move-in condition audits'
    ],
    idealFor: 'Flat owners seeking consistent rental yields & tenants wanting transparent agreements.'
  },
  {
    id: 'commercial-spaces',
    number: '03',
    title: 'Commercial Retail & Office Spaces',
    category: 'Commercial Assets',
    icon: Building,
    description: 'Strategic commercial property acquisition in high-footfall corridors near Seawoods Railway Station, Grand Central Mall, and Sector 42.',
    deliverables: [
      'Footfall & visibility demographic assessment',
      'Clear zoning and shop & establishment licensing check',
      'High rental yield commercial showroom acquisitions',
      'Corporate office lease agreements'
    ],
    idealFor: 'Business owners, doctors, chartered accountants, and retail franchise brands.'
  },
  {
    id: 'legal-cidco',
    number: '04',
    title: 'Legal Title Verification & CIDCO Clearance',
    category: 'Legal & Compliance',
    icon: FileCheck2,
    description: 'Specialized legal navigation through Navi Mumbai’s CIDCO leasehold framework, 12A transfer charges, and cooperative housing society records.',
    deliverables: [
      'CIDCO transfer paperwork & fee optimization',
      'Society NOC & Share Certificate endorsement',
      'Encumbrance certificate and search report by senior advocates',
      'Stamping, sub-registrar scheduling & physical deed collection'
    ],
    idealFor: 'Buyers desiring 100% legal immunity against fraud or title defects.'
  },
  {
    id: 'home-loan',
    number: '05',
    title: 'Home Loan & Banking Assistance',
    category: 'Financial Advisory',
    icon: Landmark,
    description: 'Pre-approved banking tie-ups with leading financial institutions to ensure rapid sanction and lowest prevailing interest rates.',
    deliverables: [
      'Direct liaison with SBI, HDFC Bank, ICICI Bank, and BoB',
      'Up to 85% - 90% loan eligibility structuring',
      'Quick technical & legal property clearance by bank panels',
      'Zero processing fee surprises or broker commission markups'
    ],
    idealFor: 'First-time home buyers and self-employed professionals needing loan structuring.'
  },
  {
    id: 'nri-consulting',
    number: '06',
    title: 'NRI Property Management & Advisory',
    category: 'Global Indians',
    icon: Globe2,
    description: 'Dedicated concierge property care for non-resident Indians living in the GCC, US, UK, and Singapore with real-time video reports.',
    deliverables: [
      'Power of Attorney (PoA) guidance & legal validation',
      'High-definition video walkthroughs and live inspections',
      'Rental collection, society maintenance payments & tax support',
      'Capital gains advisory for property resale'
    ],
    idealFor: 'NRIs owning flats in Navi Mumbai needing trusted local stewardship.'
  }
];

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState<ServiceItem>(SERVICES[0]);

  return (
    <section id="services" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-800">
            Comprehensive Real Estate Services
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0B192C] font-heading mt-2">
            Structured Guidance for Every Property Milestone
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
            With 16+ years in Seawoods West, Mukul M Naik delivers an ethical, end-to-end framework where every document is audited and every transaction is crystal clear.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            const isSelected = selectedService.id === service.id;

            return (
              <div
                key={service.id}
                onClick={() => setSelectedService(service)}
                className={`group relative p-6 sm:p-7 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-slate-50 border-amber-500 shadow-md ring-1 ring-amber-500/20'
                    : 'bg-white border-slate-200 hover:border-slate-300 hover:shadow-sm'
                }`}
              >
                <div>
                  {/* Top Bar: Human Editorial Number & Category */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold font-heading text-slate-300 group-hover:text-amber-500 transition-colors">
                      {service.number}
                    </span>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                      {service.category}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="w-11 h-11 rounded-xl bg-[#0B192C] text-amber-400 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#0B192C] transition-colors mb-2 font-heading">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Key Deliverables */}
                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    {service.deliverables.slice(0, 3).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Trigger */}
                <div className="pt-6 mt-4 flex items-center justify-between border-t border-slate-100">
                  <span className="text-xs font-semibold text-amber-800 group-hover:text-amber-900 flex items-center gap-1">
                    <span>Consult on this</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </span>

                  <a
                    href={`https://wa.me/919821479985?text=Hello%20Mukul%20ji,%20I%20would%20like%20to%20consult%20regarding%20"${encodeURIComponent(
                      service.title
                    )}".`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="p-1.5 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-600 hover:text-white transition-colors"
                    title={`WhatsApp regarding ${service.title}`}
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Highlighted Banner for Personal Consultation */}
        <div className="mt-12 rounded-2xl bg-[#0B192C] text-white p-6 sm:p-8 lg:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 max-w-xl text-center md:text-left">
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
              Personal Guarantee by Mukul M Naik
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-heading">
              Need a 100% legal opinion before making a token payment?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Bring any agreement, 7/12 extract, or CIDCO letter to our office at Shop No.2A, Mayur CHS Ltd, Sector 42, Seawoods West for a frank and impartial review.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full sm:w-auto">
            <a
              href={AGENCY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-xl transition-colors flex items-center justify-center gap-2 shadow-sm"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>Discuss on WhatsApp</span>
            </a>
            <a
              href={`tel:${AGENCY_INFO.phoneRaw}`}
              className="px-5 py-3 bg-white text-[#0B192C] hover:bg-slate-100 text-xs font-bold rounded-xl transition-colors flex items-center justify-center gap-2"
            >
              <span>Call: {AGENCY_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
