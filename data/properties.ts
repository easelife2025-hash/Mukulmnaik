export interface Property {
  id: string;
  title: string;
  type: '1 BHK' | '2 BHK' | '3 BHK' | '4 BHK' | 'Commercial';
  intent: 'Buy' | 'Rent';
  price: string;
  priceNumeric: number; // in INR
  pricePerSqFt?: string;
  location: string;
  localityTag: 'Seawoods West' | 'Palm Beach Road' | 'Nerul' | 'Kharghar' | 'CBD Belapur' | 'Ulwe';
  landmark: string;
  carpetArea: string;
  bedrooms: number;
  bathrooms: number;
  balconies: number;
  parking: string;
  furnishing: 'Semi-Furnished' | 'Fully Furnished' | 'Unfurnished';
  facing: string;
  status: 'Ready to Move' | 'Immediate Possession' | 'New Launch';
  image: string;
  gallery: string[];
  description: string;
  features: string[];
  floor: string;
  reraNumber?: string;
}

export const PROPERTIES: Property[] = [
  {
    id: "prop-seawoods-42-3bhk",
    title: "Sector 42 Seawoods West Luxury 3 BHK Residence",
    type: "3 BHK",
    intent: "Buy",
    price: "₹ 2.45 Cr",
    priceNumeric: 24500000,
    pricePerSqFt: "₹ 16,800/sq.ft",
    location: "Sector 42, Seawoods West, Navi Mumbai",
    localityTag: "Seawoods West",
    landmark: "Walking distance to Mayur CHS & Seawoods Grand Central",
    carpetArea: "1,460 sq.ft",
    bedrooms: 3,
    bathrooms: 3,
    balconies: 2,
    parking: "2 Covered Stilt Parking",
    furnishing: "Semi-Furnished",
    facing: "East Facing (100% Vastu Compliant)",
    status: "Ready to Move",
    image: "/images/property_modern_seawoods_residence_1791369370062.jpg",
    gallery: [
      "/images/property_modern_seawoods_residence_1791369370062.jpg",
      "/images/hero_luxury_apartment_interior_1791369305903.jpg",
      "/images/hero_modern_gated_community_1791369337178.jpg"
    ],
    description: "An exceptional high-floor apartment located in the prime residential enclave of Sector 42, Seawoods West. Features cross-ventilation, expansive French windows, Italian marble finishes, premium sanitaryware, and clear CIDCO title with Society NOC ready.",
    features: [
      "CIDCO Cleared & Registered Society",
      "Vastu Compliant North-East Balcony",
      "High Speed Elevators with Power Backup",
      "24/7 Security with Video Door Phone",
      "5 Mins to Seawoods Railway Station"
    ],
    floor: "8th Floor of 14 Floors",
    reraNumber: "P51700028491"
  },
  {
    id: "prop-palm-beach-waterfront",
    title: "Palm Beach Waterfront Sea-View 3.5 BHK Palace",
    type: "3 BHK",
    intent: "Buy",
    price: "₹ 3.85 Cr",
    priceNumeric: 38500000,
    pricePerSqFt: "₹ 20,400/sq.ft",
    location: "Palm Beach Road, Seawoods / Nerul, Navi Mumbai",
    localityTag: "Palm Beach Road",
    landmark: "Direct panoramic flamingo sanctuary & bay vista",
    carpetArea: "1,885 sq.ft",
    bedrooms: 4,
    bathrooms: 4,
    balconies: 3,
    parking: "2 Basement Reserved Stalls",
    furnishing: "Fully Furnished",
    facing: "West Facing (Unobstructed Sunset & Creek View)",
    status: "Ready to Move",
    image: "/images/property_palm_beach_view_1791369439826.jpg",
    gallery: [
      "/images/property_palm_beach_view_1791369439826.jpg",
      "/images/hero_luxury_apartment_interior_1791369305903.jpg",
      "/images/hero_navi_mumbai_luxury_tower_1791369168324.jpg"
    ],
    description: "The crown jewel of Navi Mumbai residential addresses. Ultra-spacious living hall with panoramic deck gazing onto Palm Beach Road and the creek waters. Fully air-conditioned, designer false ceiling, modular German kitchen with built-in appliances.",
    features: [
      "Panoramic Waterfront Horizon",
      "Clubhouse with Infinity Pool & Gym",
      "Banquet Hall & Squash Court",
      "Clear Title with Full Bank Loan Approval",
      "Instant Key Handover by Mukul M Naik"
    ],
    floor: "16th Floor of 28 Floors",
    reraNumber: "P51700019942"
  },
  {
    id: "prop-seawoods-grand-commercial",
    title: "Prime Commercial Retail Shop & Corporate Suite",
    type: "Commercial",
    intent: "Buy",
    price: "₹ 1.65 Cr",
    priceNumeric: 16500000,
    pricePerSqFt: "₹ 23,500/sq.ft",
    location: "Sector 40 / 42 Link, Near Seawoods Grand Central",
    localityTag: "Seawoods West",
    landmark: "Direct main road frontage with heavy daily footfall",
    carpetArea: "700 sq.ft (Ground + Mezzanine)",
    bedrooms: 0,
    bathrooms: 1,
    balconies: 0,
    parking: "Front Customer Parking",
    furnishing: "Semi-Furnished",
    facing: "North Facing Main Road Entrance",
    status: "Immediate Possession",
    image: "/images/property_seawoods_commercial_1791369454198.jpg",
    gallery: [
      "/images/property_seawoods_commercial_1791369454198.jpg",
      "/images/hero_property_consultation_lounge_1791369354099.jpg"
    ],
    description: "Exceptional commercial opportunity in the bustling heart of Seawoods West. Suitable for clinics, high-end boutiques, corporate branch offices, chartered accountants, or retail franchises. Generates estimated rental yield of 6.8% per annum.",
    features: [
      "Ground Level Glass Glazed Showroom",
      "Approved Mezzanine Level with Height",
      "3-Phase Power & Dedicated Water Supply",
      "High Street Frontage with Glass Facade",
      "Zero Brokerage Hassle & Clean Legal Title"
    ],
    floor: "Ground Floor + Mezzanine",
    reraNumber: "P51700031120"
  },
  {
    id: "prop-nerul-penthouse",
    title: "Nerul East Duplex Penthouse with Private Terrace",
    type: "4 BHK",
    intent: "Buy",
    price: "₹ 4.10 Cr",
    priceNumeric: 41000000,
    pricePerSqFt: "₹ 17,800/sq.ft",
    location: "Sector 19A, Nerul, Navi Mumbai",
    localityTag: "Nerul",
    landmark: "Overlooking Parsik Hill & DY Patil Stadium Greenery",
    carpetArea: "2,300 sq.ft + 750 sq.ft Private Deck",
    bedrooms: 4,
    bathrooms: 5,
    balconies: 3,
    parking: "3 Covered Podiums",
    furnishing: "Fully Furnished",
    facing: "East-North Dual Facing",
    status: "Ready to Move",
    image: "/images/property_nerul_penthouse_1791369475809.jpg",
    gallery: [
      "/images/property_nerul_penthouse_1791369475809.jpg",
      "/images/hero_navi_mumbai_luxury_tower_1791369168324.jpg",
      "/images/hero_luxury_apartment_interior_1791369305903.jpg"
    ],
    description: "Custom designed duplex penthouse crafted for discerning families who value utmost privacy. Private rooftop deck with teakwood pergola, custom barbecue island, and jacuzzi niche. Double-height living room with grand internal marble staircase.",
    features: [
      "Exclusive Private Terrace Deck",
      "Double-Height Ceiling Living Room",
      "Private Key-Card Elevator Access",
      "Vastu Certified Architecture",
      "Prestigious Society with Gated Security"
    ],
    floor: "19th & 20th Duplex Floors",
    reraNumber: "P51700015509"
  },
  {
    id: "prop-seawoods-2bhk-rental",
    title: "Furnished 2 BHK Apartment for Family / Corporate",
    type: "2 BHK",
    intent: "Rent",
    price: "₹ 48,000 / mo",
    priceNumeric: 48000,
    location: "Sector 44, Seawoods West, Navi Mumbai",
    localityTag: "Seawoods West",
    landmark: "Near Podar International School & Railway Station",
    carpetArea: "950 sq.ft",
    bedrooms: 2,
    bathrooms: 2,
    balconies: 2,
    parking: "1 Reserved Open Parking",
    furnishing: "Fully Furnished",
    facing: "North-East Facing",
    status: "Immediate Possession",
    image: "/images/hero_luxury_apartment_interior_1791369305903.jpg",
    gallery: [
      "/images/hero_luxury_apartment_interior_1791369305903.jpg",
      "/images/property_modern_seawoods_residence_1791369370062.jpg"
    ],
    description: "Immaculately maintained 2 BHK flat available for immediate rent. Equipped with branded air conditioners, modular kitchen, piped gas connection, smart TV, wardrobes, and cozy sofas. Registered lease agreement & police verification arranged seamlessly by Mukul M Naik.",
    features: [
      "Registered 11-Month or 22-Month Lease",
      "Piped Mahanagar Gas Connection (MGL)",
      "High-speed Fiber Broadband Ready",
      "Close to D-Mart, Schools, & Station",
      "Family Friendly Gated Society"
    ],
    floor: "5th Floor of 7 Floors"
  },
  {
    id: "prop-kharghar-2bhk-resale",
    title: "Spacious 2 BHK High-Rise in Gated Enclave",
    type: "2 BHK",
    intent: "Buy",
    price: "₹ 1.25 Cr",
    priceNumeric: 12500000,
    pricePerSqFt: "₹ 12,250/sq.ft",
    location: "Sector 20, Kharghar, Navi Mumbai",
    localityTag: "Kharghar",
    landmark: "Opposite Valley Park, 3 Mins from Metro Station",
    carpetArea: "1,020 sq.ft",
    bedrooms: 2,
    bathrooms: 2,
    balconies: 2,
    parking: "1 Covered Car Parking",
    furnishing: "Semi-Furnished",
    facing: "East Facing (Garden View)",
    status: "Ready to Move",
    image: "/images/hero_modern_gated_community_1791369337178.jpg",
    gallery: [
      "/images/hero_modern_gated_community_1791369337178.jpg",
      "/images/hero_navi_mumbai_luxury_tower_1791369168324.jpg"
    ],
    description: "An unbeatable value proposition in Kharghar with immediate connectivity to the newly operating Navi Mumbai Metro. Gated township with Olympic size swimming pool, badminton court, landscape garden, and 24x7 security.",
    features: [
      "Navi Mumbai Metro 300m away",
      "CIDCO Cleared & Freehold Land",
      "SBI / HDFC Pre-Approved Project",
      "Dedicated Children's Play Arena",
      "No Hidden Brokerage Surprises"
    ],
    floor: "11th Floor of 22 Floors",
    reraNumber: "P51700022814"
  },
  {
    id: "prop-mayur-chs-sector42-2bhk",
    title: "Sector 42 Mayur CHS Vicinity Premium 2 BHK",
    type: "2 BHK",
    intent: "Buy",
    price: "₹ 1.48 Cr",
    priceNumeric: 14800000,
    pricePerSqFt: "₹ 14,800/sq.ft",
    location: "Plot No. 24, Sector 42, Seawoods West, Navi Mumbai",
    localityTag: "Seawoods West",
    landmark: "Directly opposite Mukul M Naik Property Office",
    carpetArea: "1,000 sq.ft",
    bedrooms: 2,
    bathrooms: 2,
    balconies: 2,
    parking: "1 Stilt Covered Space",
    furnishing: "Semi-Furnished",
    facing: "North-East Facing",
    status: "Ready to Move",
    image: "/images/property_modern_seawoods_residence_1791369370062.jpg",
    gallery: [
      "/images/property_modern_seawoods_residence_1791369370062.jpg",
      "/images/hero_property_consultation_lounge_1791369354099.jpg"
    ],
    description: "Situated in the tranquil, tree-lined residential neighbourhood of Sector 42 Seawoods West. Well-managed cooperative housing society with low maintenance charges, round-the-clock water supply, and verified title documents on Mukul ji's desk.",
    features: [
      "Low Society Maintenance & Strong Reserve Fund",
      "24-Hour Municipal Water Supply",
      "Clear CIDCO Allotment Records",
      "Walking Access to Seawoods West Market",
      "Direct Inspection within 10 Minutes"
    ],
    floor: "3rd Floor of 7 Floors"
  },
  {
    id: "prop-ulwe-1bhk-metro",
    title: "Ulwe Sector 19 Smart 1 BHK near Bamandongri",
    type: "1 BHK",
    intent: "Buy",
    price: "₹ 48.5 Lakhs",
    priceNumeric: 4850000,
    pricePerSqFt: "₹ 7,460/sq.ft",
    location: "Sector 19, Ulwe, Navi Mumbai",
    localityTag: "Ulwe",
    landmark: "5 Mins from Bamandongri Station & Atal Setu Exit",
    carpetArea: "650 sq.ft",
    bedrooms: 1,
    bathrooms: 2,
    balconies: 1,
    parking: "Bike & Common Car Parking",
    furnishing: "Unfurnished",
    facing: "East Facing",
    status: "Ready to Move",
    image: "/images/hero_navi_mumbai_luxury_tower_1791369168324.jpg",
    gallery: [
      "/images/hero_navi_mumbai_luxury_tower_1791369168324.jpg",
      "/images/hero_modern_gated_community_1791369337178.jpg"
    ],
    description: "High investment appreciation corridor in Ulwe. Rapid access to the Mumbai Trans Harbour Link (Atal Setu) and the upcoming Navi Mumbai International Airport. High rental demand from airline personnel and corporate staff.",
    features: [
      "Rapid Atal Setu (MTHL) Connectivity to South Mumbai",
      "Close to Navi Mumbai International Airport",
      "Eligible for PMAY Subsidy Scheme",
      "Ready Possession with OC in Hand",
      "Verified by Mukul M Naik"
    ],
    floor: "4th Floor of 12 Floors"
  }
];
