'use client';

import React, { useState, useMemo } from 'react';
import { Calculator, Phone, Landmark, ShieldCheck } from 'lucide-react';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';
import { AGENCY_INFO } from '@/data/agencyInfo';

export default function EmiCalculator() {
  const [loanAmount, setLoanAmount] = useState<number>(15000000); // 1.5 Cr
  const [interestRate, setInterestRate] = useState<number>(8.5); // 8.5%
  const [tenureYears, setTenureYears] = useState<number>(20); // 20 years

  const calculation = useMemo(() => {
    const P = loanAmount;
    const r = interestRate / 12 / 100;
    const n = tenureYears * 12;

    if (P <= 0 || r <= 0 || n <= 0) {
      return { monthlyEmi: 0, totalPayment: 0, totalInterest: 0 };
    }

    const emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const totalPayment = emi * n;
    const totalInterest = totalPayment - P;

    return {
      monthlyEmi: Math.round(emi),
      totalPayment: Math.round(totalPayment),
      totalInterest: Math.round(totalInterest),
    };
  }, [loanAmount, interestRate, tenureYears]);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  const whatsappLoanUrl = `https://wa.me/919821479985?text=Hello%20Mukul%20ji,%20I%20calculated%20an%20EMI%20for%20loan%20amount%20${encodeURIComponent(
    formatCurrency(loanAmount)
  )}%20at%20${interestRate}%25%20for%20${tenureYears}%20years.%20Monthly%20EMI%20is%20${encodeURIComponent(
    formatCurrency(calculation.monthlyEmi)
  )}.%20Please%20guide%20me%20on%20bank%20home%20loan%20options.`;

  return (
    <section id="calculator" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-800">
            Financial Planning Tools
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0B192C] font-heading mt-1">
            Real Estate EMI & Affordability Calculator
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2 leading-relaxed">
            Estimate your monthly repayment schedule for apartments in Seawoods, Nerul, and Palm Beach Road. Mukul M Naik assists with hassle-free loan sanctions from SBI, HDFC Bank, ICICI Bank, and Bank of Baroda.
          </p>
        </div>

        <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8 lg:p-10 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Sliders Input Area (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Slider 1: Loan Amount */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs sm:text-sm">
                <span className="font-semibold text-slate-800">Loan Amount</span>
                <span className="font-bold text-[#0B192C] font-mono text-base">
                  {formatCurrency(loanAmount)}
                </span>
              </div>
              <input
                type="range"
                min={1000000}
                max={50000000}
                step={500000}
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-amber-500"
              />
              <div className="flex justify-between text-[11px] text-slate-400">
                <span>₹ 10 Lakhs</span>
                <span>₹ 2.5 Crores</span>
                <span>₹ 5 Crores</span>
              </div>
            </div>

            {/* Slider 2: Interest Rate */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs sm:text-sm">
                <span className="font-semibold text-slate-800">Annual Interest Rate</span>
                <span className="font-bold text-[#0B192C] font-mono text-base">
                  {interestRate}% p.a.
                </span>
              </div>
              <input
                type="range"
                min={7.0}
                max={12.0}
                step={0.1}
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-amber-500"
              />
              <div className="flex justify-between text-[11px] text-slate-400">
                <span>7.0% (Prime)</span>
                <span>8.5% (Standard)</span>
                <span>12.0%</span>
              </div>
            </div>

            {/* Slider 3: Loan Tenure */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs sm:text-sm">
                <span className="font-semibold text-slate-800">Loan Tenure</span>
                <span className="font-bold text-[#0B192C] font-mono text-base">
                  {tenureYears} Years ({tenureYears * 12} Months)
                </span>
              </div>
              <input
                type="range"
                min={5}
                max={30}
                step={1}
                value={tenureYears}
                onChange={(e) => setTenureYears(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-amber-500"
              />
              <div className="flex justify-between text-[11px] text-slate-400">
                <span>5 Years</span>
                <span>15 Years</span>
                <span>30 Years</span>
              </div>
            </div>

            {/* Banking Partnerships */}
            <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center gap-4 text-xs text-slate-700">
              <span className="font-extrabold text-slate-900 flex items-center gap-1">
                <Landmark className="w-3.5 h-3.5 text-amber-700 font-bold" />
                Pre-Approved Bank Channels:
              </span>
              <span className="bg-white px-2.5 py-1 rounded border border-slate-200 font-bold text-slate-900">State Bank of India</span>
              <span className="bg-white px-2.5 py-1 rounded border border-slate-200 font-bold text-slate-900">HDFC Bank</span>
              <span className="bg-white px-2.5 py-1 rounded border border-slate-200 font-bold text-slate-900">ICICI Bank</span>
              <span className="bg-white px-2.5 py-1 rounded border border-slate-200 font-bold text-slate-900">Bank of Baroda</span>
            </div>
          </div>

          {/* Results Summary Box (5 cols) */}
          <div className="lg:col-span-5 bg-[#0B192C] text-white p-6 sm:p-8 rounded-2xl shadow-xl space-y-6">
            <div>
              <span className="text-xs text-amber-400 uppercase tracking-widest font-extrabold">
                Estimated Monthly Outflow
              </span>
              <div className="text-3xl sm:text-4xl font-extrabold font-heading text-white mt-1">
                {formatCurrency(calculation.monthlyEmi)}
                <span className="text-sm font-bold text-slate-300 ml-1">/ month</span>
              </div>
            </div>

            <div className="space-y-3 pt-3 border-t border-slate-800 text-xs sm:text-sm">
              <div className="flex items-center justify-between text-slate-200 font-bold">
                <span>Principal Amount:</span>
                <span className="font-mono font-bold text-white">{formatCurrency(loanAmount)}</span>
              </div>
              <div className="flex items-center justify-between text-slate-200 font-bold">
                <span>Total Interest Payable:</span>
                <span className="font-mono font-bold text-amber-300">{formatCurrency(calculation.totalInterest)}</span>
              </div>
              <div className="flex items-center justify-between text-slate-200 pt-2 border-t border-slate-800 font-extrabold">
                <span className="text-white">Total Repayment:</span>
                <span className="font-mono text-emerald-400">{formatCurrency(calculation.totalPayment)}</span>
              </div>
            </div>

            <div className="pt-2 space-y-2">
              <a
                href={whatsappLoanUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-extrabold rounded-xl transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>Check Eligibility with Mukul Naik</span>
              </a>

              <p className="text-[10px] text-slate-400 text-center">
                *Subject to applicant credit score, KYC verification, and bank terms. Mukul M Naik assists with documentation free of commission markups.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
