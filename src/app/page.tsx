"use client";

import { useEffect, useState } from "react";
import ConsultationForm from "@/components/ConsultationForm";
import SipCalculator from "@/components/SipCalculator";
import PartnerRail from "@/components/PartnerRail";
import {
  TrendingUp,
  ShieldCheck,
  LineChart,
  Landmark,
  ShieldAlert,
  ArrowRight,
  Calculator,
  Award,
} from "lucide-react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

export default function Home() {
  const [content, setContent] = useState<Record<string, string>>({
    hero_badge: "AMFI Registered • Institutional Credibility Tool",
    hero_title: "Disciplined Wealth Distribution for India's Investors",
    hero_subtitle:
      "Sarkar Capital provides a modern credibility tool for older investors and professionals. Access mutual funds, equities, sovereign gold bonds, and family risk covers under one transparent roof.",
  });

  useEffect(() => {
    async function loadDynamicContent() {
      const { data } = await supabase.from("site_content").select("*");
      if (data && data.length > 0) {
        const mapped: Record<string, string> = {};
        data.forEach((row: { key: string; value: string }) => {
          mapped[row.key] = row.value;
        });
        setContent((prev) => ({ ...prev, ...mapped }));
      }
    }
    loadDynamicContent();
  }, []);

  return (
    <div className="space-y-16 py-8">
      {/* 1. Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300 bg-emerald-50 px-3.5 py-1 text-xs font-semibold text-emerald-800">
              <ShieldCheck className="h-4 w-4" /> {content.hero_badge}
            </div>
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-navy-900 leading-[1.1]">
              {content.hero_title}
            </h1>
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
              {content.hero_subtitle}
            </p>

            {/* Large Highlighted Metrics: ₹10 Cr+ AUM & 40+ AMCs */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-6 border-t border-slate-200">
              <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs">
                <div className="text-3xl sm:text-4xl font-black text-navy-900">₹10 Cr+</div>
                <div className="text-xs font-medium text-slate-500 mt-0.5">Target Managed AUM</div>
              </div>
              <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs">
                <div className="text-3xl sm:text-4xl font-black text-emerald-600">40+</div>
                <div className="text-xs font-medium text-slate-500 mt-0.5">Empaneled AMCs</div>
              </div>
              <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs col-span-2 sm:col-span-1">
                <div className="text-3xl sm:text-4xl font-black text-navy-900">₹0</div>
                <div className="text-xs font-medium text-slate-500 mt-0.5">Direct Client Custody</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <ConsultationForm />
          </div>
        </div>
      </section>

      {/* 2. Institutional Ecosystem Partner Logo Grid */}
      <PartnerRail />

      {/* 3. SIP Compounding Calculator (Shifted to 2nd Fold) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-700 mb-1">
              <Calculator className="w-4 h-4" /> Interactive Growth Simulator
            </div>
            <h2 className="text-3xl font-extrabold text-navy-900">Project Your Investment Compounding</h2>
            <p className="text-sm text-slate-600 mt-1 max-w-xl">
              Model real-time wealth milestones with optional annual step-up adjustments matching your salary growth.
            </p>
          </div>
          <Link
            href="/calculators"
            className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 hover:text-emerald-800 border-b border-emerald-600 pb-0.5"
          >
            Open Full Calculator Hub <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <SipCalculator />
      </section>

      {/* 4. Core Product Verticals */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">Distribution Capabilities</span>
          <h2 className="text-3xl font-extrabold text-navy-900 mt-1">Regulated Wealth Verticals</h2>
          <p className="mt-2 text-slate-600 text-sm">Strategic distribution backed by leading regulatory custodians and clearing houses.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-md transition flex flex-col justify-between space-y-4">
            <div>
              <div className="p-3 bg-emerald-50 text-emerald-700 w-fit rounded-xl mb-4">
                <TrendingUp className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-navy-900 mb-2">Mutual Funds &amp; SIPs</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Equity, hybrid, index, and debt funds structured around major life milestones with 100% direct AMC execution.
              </p>
            </div>
            <Link
              href="/services/mutual-funds"
              className="text-xs font-bold text-emerald-700 hover:text-emerald-800 inline-flex items-center gap-1 pt-3 border-t border-slate-100"
            >
              Explore Funds Desk <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-md transition flex flex-col justify-between space-y-4">
            <div>
              <div className="p-3 bg-blue-50 text-blue-700 w-fit rounded-xl mb-4">
                <LineChart className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-navy-900 mb-2">Equities &amp; Demat</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Direct secondary market access powered by corporate Authorised Person alignments with HDFC Securities &amp; IIFL.
              </p>
            </div>
            <Link
              href="/services/equities"
              className="text-xs font-bold text-blue-700 hover:text-blue-800 inline-flex items-center gap-1 pt-3 border-t border-slate-100"
            >
              Explore Trading Desk <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-md transition flex flex-col justify-between space-y-4">
            <div>
              <div className="p-3 bg-purple-50 text-purple-700 w-fit rounded-xl mb-4">
                <Landmark className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-navy-900 mb-2">Fixed Income &amp; Bonds</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Sovereign Gold Bonds (SGBs), AAA Corporate Fixed Deposits, and 54EC Capital Gains tax exemption bonds.
              </p>
            </div>
            <Link
              href="/services/fixed-income"
              className="text-xs font-bold text-purple-700 hover:text-purple-800 inline-flex items-center gap-1 pt-3 border-t border-slate-100"
            >
              Explore Bond Desk <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-md transition flex flex-col justify-between space-y-4">
            <div>
              <div className="p-3 bg-rose-50 text-rose-700 w-fit rounded-xl mb-4">
                <ShieldAlert className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-navy-900 mb-2">Insurance &amp; Protection</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Risk-hedging pure term life policies and comprehensive family floater health covers through certified PoSP frameworks.
              </p>
            </div>
            <Link
              href="/services/insurance"
              className="text-xs font-bold text-rose-700 hover:text-rose-800 inline-flex items-center gap-1 pt-3 border-t border-slate-100"
            >
              Explore Protection <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
