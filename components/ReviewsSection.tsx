'use client';

import React from 'react';
import { REVIEWS_DATA } from '@/data/reviews';
import { AGENCY_INFO } from '@/data/agencyInfo';
import { Star, CheckCircle2, ExternalLink, ThumbsUp } from 'lucide-react';

export default function ReviewsSection() {
  // 7 authentic verified reviews duplicated for seamless continuous train loop
  const trainReviews = [...REVIEWS_DATA.reviews, ...REVIEWS_DATA.reviews];

  return (
    <section id="reviews" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        {/* Header Block with Google Rating Scorecard */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-extrabold uppercase tracking-wider text-amber-800">
              Verified Client Feedback
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B192C] font-heading tracking-tight">
              Rated 5.0 Stars Across 245+ Google Reviews
            </h2>
            <p className="text-slate-900 text-sm sm:text-base font-bold leading-relaxed">
              Real families, NRI investors, and commercial owners share their honest experience working with Mukul M Naik in Seawoods West.
            </p>
          </div>

          {/* Google Profile Score Summary */}
          <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4 shrink-0">
            <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center font-extrabold text-blue-600 text-xl font-heading shadow-inner">
              G
            </div>

            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-2xl font-extrabold font-heading text-slate-900">
                  {REVIEWS_DATA.averageRating.toFixed(1)}
                </span>
                <div className="flex items-center text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
              <p className="text-xs text-slate-800 font-bold">
                Based on <span className="text-slate-950 font-extrabold">{REVIEWS_DATA.totalReviews} verified Google reviews</span>
              </p>
            </div>

            <a
              href={AGENCY_INFO.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
              title="View Google Maps profile"
              aria-label="View on Google Maps"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Train-like Moving Reviews Carousel (Infinite Horizontal Track) */}
      <div className="relative w-full overflow-hidden py-3">
        {/* Soft Left & Right Fade Edges for Train Track Effect */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-slate-50 via-slate-50/80 to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-slate-50 via-slate-50/80 to-transparent z-10" />

        {/* Moving Train Track Container */}
        <div className="animate-marquee-train flex gap-5 sm:gap-6 items-stretch px-4">
          {trainReviews.map((review, index) => (
            <div
              key={`${review.id}-${index}`}
              className="w-[300px] sm:w-[380px] shrink-0 bg-white p-6 rounded-2xl border border-slate-200/90 hover:border-amber-400/80 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                {/* Header: Avatar, Name & 5-Star Rating */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-full ${review.avatarColor} text-white font-bold flex items-center justify-center text-sm shadow-sm shrink-0`}
                    >
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                        <span className="truncate max-w-[160px] sm:max-w-[190px]">{review.name}</span>
                        {review.verified && (
                          <span title="Verified Client">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          </span>
                        )}
                      </div>
                      <div className="text-[11px] text-slate-400 truncate max-w-[180px]">
                        {review.timeAgo} · {review.location}
                      </div>
                    </div>
                  </div>

                  {/* Stars */}
                  <div className="flex items-center text-amber-400 shrink-0">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Transaction Tag */}
                <div className="inline-block px-2.5 py-1 rounded bg-slate-100 text-slate-900 text-[11px] font-extrabold">
                  {review.transactionType}
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-slate-900 font-bold leading-relaxed italic line-clamp-4">
                  &ldquo;{review.comment}&rdquo;
                </p>
              </div>

              {/* Bottom Card Footer */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-700 font-bold">
                <span className="flex items-center gap-1 text-emerald-900 font-extrabold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 font-bold" />
                  Verified Google Customer
                </span>
                <span className="flex items-center gap-1 font-bold">
                  <ThumbsUp className="w-3.5 h-3.5 text-slate-600" />
                  Helpful
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Option: View More Reviews on Google */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 text-center">
        <a
          href={AGENCY_INFO.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 px-8 py-4 bg-white hover:bg-slate-100 text-slate-950 text-xs sm:text-sm font-extrabold rounded-xl border border-slate-300 shadow-md hover:shadow-lg transition-all group"
        >
          <div className="w-5 h-5 rounded-full bg-blue-50 text-blue-600 font-bold text-xs flex items-center justify-center">
            G
          </div>
          <span>View more reviews on Google</span>
          <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-slate-800 transition-colors" />
        </a>
        <p className="text-xs text-slate-600 font-semibold mt-2.5">
          Read all 245+ unfiltered 5.0-star client reviews on Mukul M Naik&apos;s verified Google Business profile.
        </p>
      </div>
    </section>
  );
}
