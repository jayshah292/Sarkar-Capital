"use client";

import { useState } from "react";
import SipCalculator from "@/components/SipCalculator";
import LumpsumCalculator from "@/components/LumpsumCalculator";
import { TrendingUp, Landmark, HelpCircle, CheckCircle2, Info, ArrowRight, Calculator } from "lucide-react";
import Link from "next/link";

export default function CalculatorsPage() {
  const [activeTab, setActiveTab] = useState<"sip" | "lumpsum">("sip");

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Header Banner */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300 bg-emerald-50 px-3.5 py-1.5 text-xs font-semibold text-emerald-900">
          <Calculator className="h-4 w-4 text-emerald-600" /> Interactive Wealth Simulator
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-navy-900 tracking-tight">
          Financial Compounding &amp; Inflation Calculators
        </h1>
        <p className="text-base text-slate-600 leading-relaxed">
          Numbers don&apos;t lie. Test how disciplined monthly SIPs, annual salary step-ups, and lumpsum deployments compound over time—with optional inflation adjustments to see your true future purchasing power.
        </p>
      </div>

      {/* Switcher Tab Buttons */}
      <div className="flex gap-3 border-b border-slate-200 pb-4">
        <button
          onClick={() => setActiveTab("sip")}
          className={`flex items-center gap-2 px-6 py-3 rounded-2xl text-xs sm:text-sm font-bold transition cursor-pointer ${
            activeTab === "sip"
              ? "bg-navy-900 text-white shadow-lg"
              : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
          }`}
        >
          <TrendingUp className="w-4 h-4 text-emerald-400" /> SIP &amp; Step-Up Engine
        </button>
        <button
          onClick={() => setActiveTab("lumpsum")}
          className={`flex items-center gap-2 px-6 py-3 rounded-2xl text-xs sm:text-sm font-bold transition cursor-pointer ${
            activeTab === "lumpsum"
              ? "bg-navy-900 text-white shadow-lg"
              : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
          }`}
        >
          <Landmark className="w-4 h-4 text-blue-400" /> Lumpsum &amp; Inflation Simulator
        </button>
      </div>

      {/* Dynamic Active Calculator */}
      <section>
        {activeTab === "sip" ? <SipCalculator /> : <LumpsumCalculator />}
      </section>

      {/* Structured AEO/SEO FAQs */}
      <section className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 space-y-10 shadow-xs">
        <div>
          <h2 className="text-2xl font-extrabold text-navy-900">Understanding Wealth Compounding &amp; Inflation</h2>
          <p className="text-xs text-slate-500 mt-1">Direct answers to key asset allocation and compounding principles.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
            <h3 className="text-sm font-bold text-navy-900 flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-emerald-600 shrink-0" />
              What is a Step-Up SIP and why is it powerful?
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              A Step-Up SIP automatically increases your monthly investment amount by a fixed percentage (e.g., 10%) every year in tandem with your annual salary increments. This dramatically accelerates your corpus without feeling any monthly pinch.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
            <h3 className="text-sm font-bold text-navy-900 flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-emerald-600 shrink-0" />
              Why adjust returns for inflation in lumpsum calculations?
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Inflation diminishes the future purchasing power of money. A corpus of ₹1 Crore in 20 years will not buy the same lifestyle as ₹1 Crore today. Factoring in a 6% historical inflation rate reveals your true real-terms purchasing power.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
            <h3 className="text-sm font-bold text-navy-900 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              Does Sarkar Capital charge any fee for using calculators?
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              No. All calculators and planning utilities are completely free for all retail and HNI investors as part of our financial literacy and disciplined distribution mission.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
            <h3 className="text-sm font-bold text-navy-900 flex items-center gap-2">
              <Info className="w-4 h-4 text-emerald-600 shrink-0" />
              Are projected returns guaranteed?
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              No market-linked investment provides guaranteed returns. Projections shown are mathematical compounding models based on user-defined CAGRs. Mutual fund investments are subject to market risks.
            </p>
          </div>
        </div>
      </section>

      {/* Advisory Action Banner */}
      <section className="bg-navy-900 rounded-3xl p-8 sm:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="space-y-1 text-center md:text-left">
          <h3 className="text-xl sm:text-2xl font-bold">Ready to turn calculations into execution?</h3>
          <p className="text-xs text-slate-300 max-w-xl">
            Book a complimentary portfolio review with certified NISM wealth specialists to pick funds matching your risk appetite.
          </p>
        </div>
        <Link
          href="/#consultation"
          className="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold rounded-xl transition flex items-center gap-2 shrink-0 shadow-lg"
        >
          Book Portfolio Call <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </div>
  );
}
