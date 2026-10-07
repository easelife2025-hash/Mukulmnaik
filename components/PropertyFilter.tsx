'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { Property, PROPERTIES } from '@/data/properties';
import PropertyCard from './PropertyCard';
import PropertyModal from './PropertyModal';
import { Search, Filter, RotateCcw, Building2, ArrowRight } from 'lucide-react';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';
import { AGENCY_INFO } from '@/data/agencyInfo';

interface PropertyFilterProps {
  limit?: number;
  showViewMoreButton?: boolean;
  isStandalonePage?: boolean;
}

export default function PropertyFilter({
  limit = 5,
  showViewMoreButton = true,
  isStandalonePage = false,
}: PropertyFilterProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIntent, setSelectedIntent] = useState<'All' | 'Buy' | 'Rent'>('All');
  const [selectedType, setSelectedType] = useState<string>('All');
  const [selectedLocality, setSelectedLocality] = useState<string>('All');
  const [selectedBudget, setSelectedBudget] = useState<string>('All');
  const [activePropertyModal, setActivePropertyModal] = useState<Property | null>(null);

  const localities = ['All', 'Seawoods West', 'Palm Beach Road', 'Nerul', 'Kharghar', 'Ulwe'];
  const propertyTypes = ['All', '1 BHK', '2 BHK', '3 BHK', '4 BHK', 'Commercial'];
  const budgetOptions = [
    { label: 'All Budgets', value: 'All' },
    { label: 'Under ₹ 1 Crore', value: 'under1cr' },
    { label: '₹ 1 Cr - ₹ 2.5 Cr', value: '1to2.5cr' },
    { label: '₹ 2.5 Cr & Above', value: 'above2.5cr' },
  ];

  const filteredProperties = useMemo(() => {
    return PROPERTIES.filter((prop) => {
      // Search query filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesQuery =
          prop.title.toLowerCase().includes(q) ||
          prop.location.toLowerCase().includes(q) ||
          prop.landmark.toLowerCase().includes(q) ||
          prop.type.toLowerCase().includes(q) ||
          prop.description.toLowerCase().includes(q);
        if (!matchesQuery) return false;
      }

      // Intent filter
      if (selectedIntent !== 'All' && prop.intent !== selectedIntent) {
        return false;
      }

      // Type filter
      if (selectedType !== 'All' && prop.type !== selectedType) {
        return false;
      }

      // Locality filter
      if (selectedLocality !== 'All' && prop.localityTag !== selectedLocality) {
        return false;
      }

      // Budget filter
      if (selectedBudget === 'under1cr' && prop.priceNumeric > 10000000) {
        return false;
      }
      if (
        selectedBudget === '1to2.5cr' &&
        (prop.priceNumeric < 10000000 || prop.priceNumeric > 25000000)
      ) {
        return false;
      }
      if (selectedBudget === 'above2.5cr' && prop.priceNumeric < 25000000) {
        return false;
      }

      return true;
    });
  }, [searchQuery, selectedIntent, selectedType, selectedLocality, selectedBudget]);

  const displayedProperties = limit ? filteredProperties.slice(0, limit) : filteredProperties;

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedIntent('All');
    setSelectedType('All');
    setSelectedLocality('All');
    setSelectedBudget('All');
  };

  return (
    <section id="properties" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider">
            <Building2 className="w-3.5 h-3.5 text-amber-800" />
            <span>Exclusive Navi Mumbai Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B192C] font-heading tracking-tight">
            Verified Properties for Sale & Rent
          </h2>
          <p className="text-slate-900 text-sm sm:text-base font-bold leading-relaxed">
            Every listing in our portfolio undergoes strict legal verification, title search, and society clearance. Handled personally by Mukul M Naik.
          </p>
        </div>

        {/* Search & Filter Control Bar */}
        <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-slate-200 mb-8 space-y-4">
          {/* Row 1: Search Input & Buy/Rent Intent Switcher */}
          <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by building name, sector, landmark (e.g., Sector 42, Mayur CHS, Palm Beach)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 text-slate-900 font-bold transition-all placeholder:text-slate-500 placeholder:font-semibold"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-500 hover:text-slate-800"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Segmented Buy / Rent / All switch */}
            <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-xl shrink-0 self-start md:self-auto">
              {(['All', 'Buy', 'Rent'] as const).map((intent) => (
                <button
                  key={intent}
                  onClick={() => setSelectedIntent(intent)}
                  className={`px-4 py-2 text-xs font-bold rounded-lg transition-all ${
                    selectedIntent === intent
                      ? 'bg-[#0B192C] text-white shadow-sm'
                      : 'text-slate-700 hover:text-slate-950'
                  }`}
                >
                  {intent === 'All' ? 'All Listings' : intent === 'Buy' ? 'Buy Property' : 'Rent / Lease'}
                </button>
              ))}
            </div>
          </div>

          {/* Row 2: Secondary Quick Filter Selectors */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-slate-100">
            {/* Locality Selector */}
            <div>
              <label className="block text-[11px] font-extrabold uppercase tracking-wider text-slate-700 mb-1.5">
                Locality / Area
              </label>
              <select
                value={selectedLocality}
                onChange={(e) => setSelectedLocality(e.target.value)}
                aria-label="Select Locality / Area"
                className="w-full px-3 py-2 text-xs font-bold bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-amber-500"
              >
                {localities.map((loc) => (
                  <option key={loc} value={loc} className="font-bold">
                    {loc === 'All' ? 'All Localities in Navi Mumbai' : loc}
                  </option>
                ))}
              </select>
            </div>

            {/* Property Configuration */}
            <div>
              <label className="block text-[11px] font-extrabold uppercase tracking-wider text-slate-700 mb-1.5">
                Configuration
              </label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                aria-label="Select Property Configuration"
                className="w-full px-3 py-2 text-xs font-bold bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-amber-500"
              >
                {propertyTypes.map((type) => (
                  <option key={type} value={type} className="font-bold">
                    {type === 'All' ? 'All Configurations' : type}
                  </option>
                ))}
              </select>
            </div>

            {/* Budget Range */}
            <div>
              <label className="block text-[11px] font-extrabold uppercase tracking-wider text-slate-700 mb-1.5">
                Budget Range
              </label>
              <select
                value={selectedBudget}
                onChange={(e) => setSelectedBudget(e.target.value)}
                aria-label="Select Budget Range"
                className="w-full px-3 py-2 text-xs font-bold bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-amber-500"
              >
                {budgetOptions.map((opt) => (
                  <option key={opt.value} value={opt.value} className="font-bold">
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Active status & reset trigger */}
          <div className="flex items-center justify-between pt-2 text-xs text-slate-600">
            <span className="font-bold text-slate-900">
              Showing <span className="text-amber-800 font-extrabold">{displayedProperties.length}</span> of {PROPERTIES.length} verified listings
              {limit && filteredProperties.length > limit && (
                <span className="text-slate-500 ml-1">({filteredProperties.length - displayedProperties.length} more available)</span>
              )}
            </span>

            {(searchQuery || selectedIntent !== 'All' || selectedType !== 'All' || selectedLocality !== 'All' || selectedBudget !== 'All') && (
              <button
                onClick={handleResetFilters}
                className="inline-flex items-center gap-1 text-xs font-bold text-amber-800 hover:text-amber-950 transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset all filters</span>
              </button>
            )}
          </div>
        </div>

        {/* Property Cards Grid (Shows 5 properties on home section) */}
        {displayedProperties.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {displayedProperties.map((property) => (
                <PropertyCard
                  key={property.id}
                  property={property}
                  onSelect={(prop) => setActivePropertyModal(prop)}
                />
              ))}
            </div>

            {/* "View More Properties" Button redirecting to /properties */}
            {showViewMoreButton && (
              <div className="mt-12 text-center pt-2">
                <Link
                  href="/properties"
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#0B192C] hover:bg-slate-800 text-white text-sm font-extrabold rounded-xl shadow-md hover:shadow-lg transition-all duration-200 group"
                >
                  <span>View More Properties</span>
                  <ArrowRight className="w-4 h-4 text-amber-400 group-hover:translate-x-1 transition-transform font-bold" />
                </Link>
                <p className="text-xs text-slate-700 font-bold mt-2">
                  Browse our complete catalog of resale, rental and commercial properties in Navi Mumbai
                </p>
              </div>
            )}
          </>
        ) : (
          /* Empty state with direct WhatsApp fallback */
          <div className="bg-white rounded-2xl p-8 sm:p-12 text-center border border-slate-200 max-w-lg mx-auto space-y-4">
            <div className="w-12 h-12 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center mx-auto">
              <Filter className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-extrabold text-slate-900 font-heading">
              No exact match in online catalogue
            </h3>
            <p className="text-xs text-slate-800 font-semibold leading-relaxed">
              Mukul M Naik manages several off-market and upcoming direct-owner listings in Seawoods West and Nerul that are not published publicly for privacy.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row gap-2 justify-center">
              <button
                onClick={handleResetFilters}
                className="px-4 py-2.5 text-xs font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
              >
                Clear Filters
              </button>
              <a
                href={`https://wa.me/919821479985?text=Hello%20Mukul%20ji,%20I%20am%20looking%20for%20a%20property%20in%20Navi%20Mumbai%20matching:%20Locality:%20${encodeURIComponent(
                  selectedLocality
                )},%20Type:%20${encodeURIComponent(selectedType)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 text-xs font-extrabold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors inline-flex items-center justify-center gap-1.5"
              >
                <WhatsAppIcon className="w-3.5 h-3.5" />
                <span>Ask Mukul ji on WhatsApp</span>
              </a>
            </div>
          </div>
        )}

        {/* Property Details Modal */}
        <PropertyModal
          property={activePropertyModal}
          onClose={() => setActivePropertyModal(null)}
        />
      </div>
    </section>
  );
}
