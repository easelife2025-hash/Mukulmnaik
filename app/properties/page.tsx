import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import PropertyFilter from '@/components/PropertyFilter';
import Footer from '@/components/Footer';
import FloatingContactButtons from '@/components/FloatingContactButtons';
import { Home, ChevronRight, Building, ShieldCheck, MapPin, Phone } from 'lucide-react';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';
import { AGENCY_INFO } from '@/data/agencyInfo';

export const metadata: Metadata = {
  title: 'All Properties For Sale & Rent | Mukul M Naik | Seawoods, Navi Mumbai',
  description: 'Explore the complete verified real estate catalog by Mukul M Naik (मुकुल म. नाईक). Luxury apartments, resale flats, 1/2/3/4 BHKs, and commercial properties in Seawoods West, Palm Beach Road, and Nerul.',
};

export default function PropertiesPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white text-slate-800">
      {/* Navbar */}
      <Navbar />

      {/* Header & Breadcrumb Banner */}
      <div className="bg-[#0B192C] text-white py-10 sm:py-14 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-slate-300 font-bold mb-4" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-amber-400 transition-colors flex items-center gap-1 font-bold">
              <Home className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
            <span className="text-amber-400 font-extrabold">All Properties</span>
          </nav>

          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-amber-500/20 text-amber-300 text-xs font-extrabold uppercase tracking-wider border border-amber-400/30">
              <Building className="w-3.5 h-3.5" />
              <span>Full Real Estate Catalogue</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight">
              Navi Mumbai Properties Portfolio
            </h1>

            <p className="text-sm sm:text-base text-slate-200 font-bold leading-relaxed max-w-2xl">
              Browse our complete inventory of 100% verified residential apartments, sea-facing waterfront residences on Palm Beach Road, and high-footfall commercial spaces in Seawoods West.
            </p>

            {/* Quick trust badges */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-slate-200 font-bold">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>CIDCO Title Verified</span>
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-amber-400" />
                <span>Sector 42, Seawoods Headquarters</span>
              </span>
              <span className="flex items-center gap-1.5">
                <WhatsAppIcon className="w-3.5 h-3.5 text-emerald-400" />
                <span>Direct Brokerage Transparency</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Full Property Catalog with complete filters (No limit, no view more button) */}
      <PropertyFilter limit={undefined} showViewMoreButton={false} isStandalonePage={true} />

      {/* Bottom Consultation Banner */}
      <section className="bg-slate-100 py-12 border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-[#0B192C] font-heading">
            Need an Off-Market Property or Custom Search?
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
            Mukul M Naik has direct relationships with over 80+ cooperative societies in Seawoods West, Nerul, and Belapur with private owner listings available upon request.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <a
              href={AGENCY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl shadow-md transition-colors"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>Discuss Specific Requirement on WhatsApp</span>
            </a>
            <a
              href={`tel:${AGENCY_INFO.phoneRaw}`}
              className="inline-flex items-center gap-2 px-5 py-3 bg-[#0B192C] hover:bg-slate-800 text-white text-xs font-bold rounded-xl transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>Call: {AGENCY_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Floating Buttons & Footer */}
      <FloatingContactButtons />
      <Footer />
    </main>
  );
}
