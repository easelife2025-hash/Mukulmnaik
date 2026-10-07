'use client';

import React, { useState } from 'react';
import { AGENCY_INFO } from '@/data/agencyInfo';
import { Send, Phone, CheckCircle2, ShieldCheck, Clock, User, Mail, Building } from 'lucide-react';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    requirement: 'Buy Apartment',
    locality: 'Seawoods West',
    budget: '₹ 1 Cr - ₹ 2.5 Cr',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);

      // Pre-fill WhatsApp message
      const text = `Hello Mukul ji, my name is ${formData.name} (${formData.phone}). Requirement: ${formData.requirement} in ${formData.locality}, Budget: ${formData.budget}.${formData.message ? ` Notes: ${formData.message}` : ''}`;
      const url = `https://wa.me/919821479985?text=${encodeURIComponent(text)}`;
      window.open(url, '_blank');
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      phone: '',
      email: '',
      requirement: 'Buy Apartment',
      locality: 'Seawoods West',
      budget: '₹ 1 Cr - ₹ 2.5 Cr',
      message: '',
    });
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12">
            {/* Left Column: Direct Callout & Guarantees (5 cols) */}
            <div className="md:col-span-5 bg-[#0B192C] text-white p-8 sm:p-10 flex flex-col justify-between">
              <div className="space-y-6">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
                    Get in Touch
                  </span>
                  <h3 className="text-2xl font-bold font-heading mt-1 text-white">
                    Schedule a Consultation
                  </h3>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                    Looking to buy, sell, or rent? Share your exact requirements and Mukul M Naik will personally curate verified properties for you.
                  </p>
                </div>

                <div className="space-y-4 pt-2">
                  <div className="flex items-start gap-3 text-xs text-slate-200">
                    <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5 font-bold" />
                    <div>
                      <div className="font-extrabold text-white">Fast Response Guaranteed</div>
                      <div className="font-semibold text-slate-200">Callback within 30 minutes during working hours (11 AM - 8 PM).</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 text-xs text-slate-200">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5 font-bold" />
                    <div>
                      <div className="font-extrabold text-white">100% Privacy & Zero Spam</div>
                      <div className="font-semibold text-slate-200">Your contact details will never be sold to call centres or aggregators.</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 text-xs text-slate-200">
                    <Building className="w-4 h-4 text-amber-400 shrink-0 mt-0.5 font-bold" />
                    <div>
                      <div className="font-extrabold text-white">Shop No.2A, Mayur CHS Ltd</div>
                      <div className="font-semibold text-slate-200">Sector 42, Seawoods West, Navi Mumbai 400706.</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct Quick Dial */}
              <div className="pt-8 border-t border-slate-800 space-y-2">
                <div className="text-[11px] text-slate-400">Prefer direct voice conversation?</div>
                <a
                  href={`tel:${AGENCY_INFO.phoneRaw}`}
                  className="flex items-center gap-2 text-sm font-bold text-amber-300 hover:text-amber-200 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call: {AGENCY_INFO.phoneDisplay}</span>
                </a>
              </div>
            </div>

            {/* Right Column: Active Interactive Form (7 cols) */}
            <div className="md:col-span-7 p-8 sm:p-10 flex flex-col justify-center">
              {submitted ? (
                <div className="text-center py-8 space-y-4">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold font-heading text-slate-900">
                    Inquiry Received Successfully!
                  </h3>
                  <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
                    Thank you, {formData.name}. Mukul M Naik has received your requirement. If your WhatsApp window opened, click send to deliver your brief instantly.
                  </p>
                  <div className="pt-4 flex flex-col sm:flex-row gap-2 justify-center">
                    <button
                      onClick={handleReset}
                      className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold rounded-lg transition-colors"
                    >
                      Submit Another Requirement
                    </button>
                    <a
                      href={AGENCY_INFO.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-1.5"
                    >
                      <WhatsAppIcon className="w-3.5 h-3.5" />
                      <span>Chat on WhatsApp</span>
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {/* Full Name */}
                    <div>
                      <label className="block text-[11px] font-extrabold uppercase tracking-wider text-slate-800 mb-1">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          required
                          placeholder="e.g. Anand Sharma"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full pl-9 pr-3 py-2 text-xs font-bold text-slate-900 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 placeholder:text-slate-400 placeholder:font-semibold"
                        />
                      </div>
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label className="block text-[11px] font-extrabold uppercase tracking-wider text-slate-800 mb-1">
                        Phone / WhatsApp *
                      </label>
                      <div className="relative">
                        <Phone className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          type="tel"
                          required
                          placeholder="e.g. 098214 79985"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full pl-9 pr-3 py-2 text-xs font-bold text-slate-900 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 placeholder:text-slate-400 placeholder:font-semibold"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Email & Requirement */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-[11px] font-extrabold uppercase tracking-wider text-slate-800 mb-1">
                        Email Address (Optional)
                      </label>
                      <div className="relative">
                        <Mail className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          type="email"
                          placeholder="e.g. anand@gmail.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full pl-9 pr-3 py-2 text-xs font-bold text-slate-900 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 placeholder:text-slate-400 placeholder:font-semibold"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-extrabold uppercase tracking-wider text-slate-800 mb-1">
                        Requirement Type
                      </label>
                      <select
                        value={formData.requirement}
                        onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                        className="w-full px-3 py-2 text-xs font-bold text-slate-900 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:outline-none focus:border-amber-500"
                      >
                        <option value="Buy Apartment">Buy Residential Apartment</option>
                        <option value="Sell Property">Sell My Property in Navi Mumbai</option>
                        <option value="Rent Flat">Rent a Flat / Home</option>
                        <option value="Commercial Space">Commercial Shop / Office</option>
                        <option value="Legal Title Verification">Legal Title & CIDCO Clearance</option>
                        <option value="Home Loan Assistance">Home Loan Support</option>
                      </select>
                    </div>
                  </div>

                  {/* Locality & Budget */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-[11px] font-extrabold uppercase tracking-wider text-slate-800 mb-1">
                        Preferred Locality
                      </label>
                      <select
                        value={formData.locality}
                        onChange={(e) => setFormData({ ...formData, locality: e.target.value })}
                        className="w-full px-3 py-2 text-xs font-bold text-slate-900 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:outline-none focus:border-amber-500"
                      >
                        <option value="Seawoods West (Sector 42 / 44 / 46)">Seawoods West (Sector 42/44/46)</option>
                        <option value="Palm Beach Road">Palm Beach Road (Waterfront)</option>
                        <option value="Nerul">Nerul (East & West)</option>
                        <option value="Kharghar">Kharghar</option>
                        <option value="Ulwe">Ulwe (Near Airport / Atal Setu)</option>
                        <option value="CBD Belapur">CBD Belapur</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-extrabold uppercase tracking-wider text-slate-800 mb-1">
                        Estimated Budget
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-3 py-2 text-xs font-bold text-slate-900 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:outline-none focus:border-amber-500"
                      >
                        <option value="Under ₹ 1 Crore">Under ₹ 1 Crore</option>
                        <option value="₹ 1 Cr - ₹ 2.5 Cr">₹ 1 Cr - ₹ 2.5 Cr</option>
                        <option value="₹ 2.5 Cr - ₹ 4 Cr">₹ 2.5 Cr - ₹ 4 Cr</option>
                        <option value="₹ 4 Cr+ (Luxury / Penthouse)">₹ 4 Cr+ (Luxury / Penthouse)</option>
                        <option value="Rent: ₹ 35k - ₹ 75k / month">Rent: ₹ 35k - ₹ 75k / month</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-[11px] font-extrabold uppercase tracking-wider text-slate-800 mb-1">
                      Specific Requirements / Questions
                    </label>
                    <textarea
                      rows={3}
                      placeholder="e.g. Looking for an east-facing 3 BHK near Seawoods Station with 2 parking spaces, ready for immediate possession..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3 py-2 text-xs font-bold text-slate-900 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 placeholder:text-slate-400 placeholder:font-semibold"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full py-3.5 px-4 bg-[#0B192C] hover:bg-slate-800 text-white text-xs font-extrabold rounded-xl transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg disabled:opacity-70"
                    >
                      {submitting ? (
                        <span>Submitting...</span>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5 text-amber-400" />
                          <span>Send Inquiry to Mukul M Naik</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
