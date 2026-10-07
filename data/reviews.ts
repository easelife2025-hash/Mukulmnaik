export interface Review {
  id: string;
  name: string;
  rating: number;
  timeAgo: string;
  transactionType: string;
  location: string;
  verified: boolean;
  comment: string;
  avatarColor: string;
}

export const REVIEWS_DATA: {
  averageRating: number;
  totalReviews: number;
  fiveStarPercentage: number;
  reviews: Review[];
} = {
  averageRating: 5.0,
  totalReviews: 245,
  fiveStarPercentage: 98,
  reviews: [
    {
      id: "rev-1",
      name: "Rajeshwar Patil",
      rating: 5,
      timeAgo: "2 weeks ago",
      transactionType: "Bought 3 BHK Apartment",
      location: "Sector 42, Seawoods West",
      verified: true,
      comment: "Mukul ji is an epitome of honesty in real estate. Buying a flat in Seawoods Sector 42 was completely seamless because Mukul Naik verified all CIDCO and Society documents beforehand. No hidden charges, no false promises. He walked us through the bank loan and registration personally.",
      avatarColor: "bg-blue-600"
    },
    {
      id: "rev-2",
      name: "Dr. Ananya Deshmukh",
      rating: 5,
      timeAgo: "1 month ago",
      transactionType: "Sold 2 BHK Resale Property",
      location: "Mayur CHS Ltd, Seawoods West",
      verified: true,
      comment: "We sold our ancestral apartment in Mayur CHS through Mukul M Naik. Having his office right at Shop No.2A gave tremendous peace of mind. He found a genuine family buyer within 12 days and handled all Society NOC paperwork with extreme professionalism.",
      avatarColor: "bg-amber-600"
    },
    {
      id: "rev-3",
      name: "Vikram Singhania (NRI - Dubai)",
      rating: 5,
      timeAgo: "2 months ago",
      transactionType: "Luxury Palm Beach Waterfront Investment",
      location: "Palm Beach Road, Nerul",
      verified: true,
      comment: "Being based in Dubai, purchasing a sea-facing property in Navi Mumbai was intimidating. Mukul Naik sent detailed video walk-throughs, handled legal title search with his advocate, and facilitated smooth remote registration. A genuine 5-star consultant!",
      avatarColor: "bg-emerald-600"
    },
    {
      id: "rev-4",
      name: "Suresh G. Kadam",
      rating: 5,
      timeAgo: "3 months ago",
      transactionType: "Commercial Retail Shop Purchase",
      location: "Near Seawoods Grand Central Mall",
      verified: true,
      comment: "Mukul Naik understands commercial real estate footfalls better than anyone in Navi Mumbai. Helped me secure a ground-floor commercial unit at a very fair rate. His local roots in Seawoods are unmatched.",
      avatarColor: "bg-indigo-600"
    },
    {
      id: "rev-5",
      name: "Pooja & Amit Mehta",
      rating: 5,
      timeAgo: "4 months ago",
      transactionType: "Rental Lease Agreement",
      location: "Sector 44, Seawoods West",
      verified: true,
      comment: "Moved from Pune to Navi Mumbai for work. Mukul ji showed us 3 clean, furnished flats in Seawoods on a Sunday afternoon, finalized the agreement, and got police verification completed in 48 hours. Super responsive on WhatsApp!",
      avatarColor: "bg-rose-600"
    },
    {
      id: "rev-6",
      name: "Kishore B. Mhatre",
      rating: 5,
      timeAgo: "5 months ago",
      transactionType: "CIDCO Transfer & Title Clear Advisory",
      location: "Sector 42, Navi Mumbai",
      verified: true,
      comment: "In Navi Mumbai, real estate agents often overpromise, but Mukul Naik tells you the ground truth. He gave us crystal clear guidance on CIDCO transfer charges and prevented us from making a costly documentation error.",
      avatarColor: "bg-teal-600"
    },
    {
      id: "rev-7",
      name: "Sanjay & Neha Kulkarni",
      rating: 5,
      timeAgo: "6 months ago",
      transactionType: "Bought 2.5 BHK in Nerul East",
      location: "Sector 19A, Nerul",
      verified: true,
      comment: "Finding a vastu-compliant home with clear paperwork in Navi Mumbai felt impossible until we met Mukul ji at his Sector 42 office. He negotiated directly with the owner, arranged quick home loan approval with SBI, and got keys handed over on an auspicious muhurat. Highly recommended!",
      avatarColor: "bg-purple-600"
    }
  ]
};
