export interface AgencyInfo {
  name: string;
  marathiName: string;
  tagline: string;
  rating: number;
  reviewCount: number;
  phoneDisplay: string;
  phoneRaw: string;
  phoneInternational: string;
  whatsappUrl: string;
  addressShort: string;
  addressFull: string;
  shopNumber: string;
  sector: string;
  building: string;
  plotNumber: string;
  locality: string;
  city: string;
  pincode: string;
  state: string;
  hours: string;
  openingTime: number; // 11 (11 AM)
  closingTime: number; // 20 (8 PM)
  mapsUrl: string;
  experienceYears: number;
  experienceTransactions: number;
}

export const AGENCY_INFO: AgencyInfo = {
  name: "Mukul M Naik",
  marathiName: "मुकुल म. नाईक",
  tagline: "Trusted Real Estate Agent & Luxury Property Consultant",
  rating: 5.0,
  reviewCount: 245,
  phoneDisplay: "098214 79985",
  phoneRaw: "09821479985",
  phoneInternational: "+91 98214 79985",
  whatsappUrl: "https://wa.me/919821479985?text=Hello%20Mukul%20ji,%20I%20would%20like%20to%20consult%20with%20you%20regarding%20property%20in%20Navi%20Mumbai.",
  addressShort: "Shop No.2A, Mayur CHS Ltd, Sector 42, Seawoods West, Navi Mumbai",
  addressFull: "Shop No.2A, Sector No.42, Mayur CHS Ltd, Plot No.24, Seawoods West, Sector 42, Navi Mumbai, Maharashtra 400706",
  shopNumber: "Shop No.2A",
  sector: "Sector No.42",
  building: "Mayur CHS Ltd",
  plotNumber: "Plot No.24",
  locality: "Seawoods West",
  city: "Navi Mumbai",
  pincode: "400706",
  state: "Maharashtra",
  hours: "Every day 11:00 AM – 8:00 PM",
  openingTime: 11,
  closingTime: 20,
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Shop+No+2A+Sector+42+Mayur+CHS+Ltd+Plot+24+Seawoods+West+Navi+Mumbai+400706",
  experienceYears: 16,
  experienceTransactions: 850,
};
