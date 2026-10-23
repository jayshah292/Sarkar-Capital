"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, TrendingUp, ShieldCheck } from "lucide-react";
import ConsultationForm from "@/components/ConsultationForm";
import PartnerRail from "@/components/PartnerRail";
import SipCalculator from "@/components/SipCalculator";
import LumpsumCalculator from "@/components/LumpsumCalculator";
import { supabase } from "@/lib/supabase";

export default function HomePage() {
  const [content, setContent] = useState<Record<string, string>>({
    hero_badge: "AMFI Registered • Corporate ARN Desk",
    hero_title: "Disciplined Wealth Distribution for India's Investors",
    hero_subtitle:
      "We bridge the gap between retail investors and premier financial institutions. Access mutual funds, equities, sovereign gold bonds, and corporate fixed income under one transparent roof.",
    stat_aum_val: "₹10 Cr+",
    stat_years_val: "25+ Yrs",
    stat_partners_val: "40+",
    stat_lives_val: "2,500+",
  });

  useEffect(() => {
    async function loadContent() {
      const { data } = await supabase.from("site_content").select("*");
      if (data && data.length > 0) {
        const mapped: Record<string, string> = {};
        data.forEach((row: { key: string; value: string }) => {
          mapped[row.key] = row.value;
        });
        setContent((prev) => ({ ...prev, ...mapped }));
      }
    }
    loadContent();
  }, []);

  return (
    <div className="space-y-16 py-8">
      {/* 1. Hero Fold */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300 bg-emerald-50 px-3.5 py-1 text-xs font-semibold text-emerald-900">
            <ShieldCheck className="h-4 w-4 text-emerald-600" />
            {content.hero_badge}
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-navy-900 tracking-tight leading-tight">
            {content.hero_title}
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed whitespace-pre-line">
            {content.hero_subtitle}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
            <div className="bg-white border border-slate-200 p-4 rounded-2xl shadow-2xs">
              <span className="block text-2xl font-black text-navy-900">{content.stat_aum_val}</span>
              <span className="text-[11px] font-bold text-slate-500 uppercase">Target AUM</span>
            </div>
            <div className="bg-white border border-slate-200 p-4 rounded-2xl shadow-2xs">
              <span className="block text-2xl font-black text-navy-900">{content.stat_years_val}</span>
              <span className="text-[11px] font-bold text-slate-500 uppercase">Experience</span>
            </div>
            <div className="bg-white border border-slate-200 p-4 rounded-2xl shadow-2xs">
              <span className="block text-2xl font-black text-emerald-700">{content.stat_partners_val}</span>
              <span className="text-[11px] font-bold text-slate-500 uppercase">Empaneled AMCs</span>
            </div>
            <div className="bg-white border border-slate-200 p-4 rounded-2xl shadow-2xs">
              <span className="block text-2xl font-black text-navy-900">{content.stat_lives_val}</span>
              <span className="text-[11px] font-bold text-slate-500 uppercase">Lives Protected</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Lead Generation Section */}
      <section id="consultation" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-10">
          <div className="text-center max-w-xl mx-auto mb-8 space-y-2">
            <h2 className="text-2xl font-black text-navy-900">Book Portfolio Consultation</h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Speak directly with our wealth planning desk for customized asset allocation.
            </p>
          </div>
          <ConsultationForm />
        </div>
      </section>

      {/* 3. Partner Rail (Shifted up directly after Lead Gen) */}
      <PartnerRail />

      {/* 4. SIP & Wealth Calculators (Placed after Partner Rail) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            Interactive Calculators
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-navy-900">
            Plan Your Long-Term Compounding
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Estimate the potential future corpus of your disciplined monthly SIP and lump-sum investments.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-2xs">
            <SipCalculator />
          </div>
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-2xs">
            <LumpsumCalculator />
          </div>
        </div>
      </section>
    </div>
  );
}
