"use client";

import { useState } from "react";
import SipCalculator from "@/components/SipCalculator";
import LumpsumCalculator from "@/components/LumpsumCalculator";
import { TrendingUp, Landmark, HelpCircle, CheckCircle2, Info } from "lucide-react";
import Link from "next/link";

export default function CalculatorsPage() {
  const [activeTab, setActiveTab] = useState<"sip" | "lumpsum">("sip");

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-16">
      {/* Header Banner */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300 bg-emerald-50 px-3.5 py-1 text-xs font-semibold text-emerald-800">
          <TrendingUp className="h-3.5 w-3.5" /> Compounding Intelligence
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-navy-900 tracking-tight">
          Financial Growth & Wealth Calculators
        </h1>
        <p className="text-base text-slate-600 leading-relaxed">
          Simulate disciplined recurring systematic investment plans (SIPs), model annual salary step-ups, or project one-time lumpsum compounding with inflation adjustments.
        </p>
      </div>

      {/* Switcher Tab Buttons */}
      <div className="flex gap-3 border-b border-slate-200 pb-4">
        <button
          onClick={() => setActiveTab("sip")}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition ${
            activeTab === "sip"
              ? "bg-navy-900 text-white shadow"
              : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
          }`}
        >
          <TrendingUp className="w-4 h-4 text-emerald-400" /> SIP & Step-Up Engine
        </button>
        <button
          onClick={() => setActiveTab("lumpsum")}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition ${
            activeTab === "lumpsum"
              ? "bg-navy-900 text-white shadow"
              : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
          }`}
        >
          <Landmark className="w-4 h-4 text-blue-400" /> Lumpsum & Inflation Engine
        </button>
      </div>

      {/* Dynamic Active Calculator */}
      <section>
        {activeTab === "sip" ? <SipCalculator /> : <LumpsumCalculator />}
      </section>

      {/* Structured AEO/SEO FAQs */}
      <section className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 space-y-10">
        <div>
          <h2 className="text-2xl font-bold text-navy-900">Understanding Wealth Compounding</h2>
          <p className="text-xs text-slate-500 mt-1">Direct answers to key asset allocation and compounding principles.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
            <h3 className="text-base font-bold text-navy-900 flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-emerald-600 shrink-0" />
              What is the key difference between SIP and Lumpsum?
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              A Systematic Investment Plan (SIP) invests a fixed sum every month, averaging out market volatility through Rupee Cost Averaging. A Lumpsum investment deploys capital all at once, maximizing compounding time when funds are already available.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
            <h3 className="text-base font-bold text-navy-900 flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-emerald-600 shrink-0" />
              Why adjust returns for inflation?
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Inflation diminishes the future purchasing power of your money. A corpus of ₹1 Crore in 20 years will not buy the same lifestyle as ₹1 Crore today. Factoring in a 6% historical inflation rate provides a realistic picture of your future financial freedom.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
            <h3 className="text-base font-bold text-navy-900 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              Does Sarkar Capital charge any fee for using calculators?
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              No. All calculators and planning utilities are completely free for all investors as part of our financial literacy and disciplined distribution mission.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
            <h3 className="text-base font-bold text-navy-900 flex items-center gap-2">
              <Info className="w-4 h-4 text-emerald-600 shrink-0" />
              Are projected returns guaranteed?
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              No market-linked investment provides guaranteed returns. Projections shown are mathematical compounding models. Mutual fund investments are subject to market risks, and scheme performance depends on underlying asset values.
            </p>
          </div>
        </div>
      </section>

      {/* Advisory Action Banner */}
      <section className="bg-navy-900 rounded-3xl p-8 sm:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg">
        <div className="space-y-1 text-center md:text-left">
          <h3 className="text-xl sm:text-2xl font-bold">Ready to turn calculations into execution?</h3>
          <p className="text-xs text-slate-400 max-w-xl">
            Book a complimentary portfolio review with certified NISM wealth specialists to pick funds matching your risk appetite.
          </p>
        </div>
        <Link
          href="/#consultation"
          className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold rounded-xl transition shrink-0"
        >
          Book Portfolio Call
        </Link>
      </section>
    </div>
  );
}
