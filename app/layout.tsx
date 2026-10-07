import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Mukul M Naik | Real Estate Agent & Property Consultant | Seawoods, Navi Mumbai',
  description: 'Mukul M Naik (मुकुल म. नाईक) is a premier real estate agent in Seawoods West, Navi Mumbai. 5.0 Star rated (245+ Google reviews). Specializing in luxury apartments, residential resale, rentals, and commercial spaces across Seawoods, Palm Beach Road & Nerul.',
  keywords: [
    'Mukul M Naik',
    'Real estate agent Seawoods',
    'Property consultant Navi Mumbai',
    'Flats for sale Seawoods West',
    'Palm Beach Road luxury apartments',
    'Mayur CHS Sector 42',
    'Nerul real estate broker',
    'Navi Mumbai property dealer',
  ],
  authors: [{ name: 'Mukul M Naik' }],
  openGraph: {
    title: 'Mukul M Naik | Real Estate Agency Navi Mumbai',
    description: 'Trusted Real Estate Agent in Seawoods West, Navi Mumbai. 5.0 Star Rated with 245+ Google Reviews. Discover verified homes, apartments, and commercial spaces.',
    type: 'website',
    locale: 'en_IN',
    url: 'https://mukulmnaik.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mukul M Naik | Real Estate Agency Navi Mumbai',
    description: 'Trusted Real Estate Agent in Seawoods West, Navi Mumbai. 5.0 Star Rated with 245+ Google Reviews.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: 'Mukul M Naik',
    alternateName: 'मुकुल म. नाईक',
    image: '/images/hero_navi_mumbai_luxury_tower_1791369168324.jpg',
    telephone: '+919821479985',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Shop No.2A, Sector No.42, Mayur CHS Ltd, Plot No.24, Seawoods West, Sector 42',
      addressLocality: 'Navi Mumbai',
      addressRegion: 'Maharashtra',
      postalCode: '400706',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '19.0185',
      longitude: '73.0182',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '11:00',
        closes: '20:00',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '245',
      bestRating: '5',
      worstRating: '1',
    },
    priceRange: '₹₹ - ₹₹₹₹',
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@700;800;900&family=Plus+Jakarta+Sans:wght@500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased text-slate-800 bg-white font-sans selection:bg-amber-100 selection:text-amber-900" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

