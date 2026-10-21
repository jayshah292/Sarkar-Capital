"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ShieldAlert,
  ShieldCheck,
  HeartPulse,
  ArrowRight,
  CheckCircle2,
  Lock,
  HelpCircle,
  Activity,
  FileCheck2,
} from "lucide-react";
import { supabase } from "@/lib/supabase";

export default function InsurancePage() {
  const [content, setContent] = useState<Record<string, string>>({
    ins_hero_title: "Insurance & Risk Hedging Desk",
    ins_hero_subtitle:
      "Capital preservation begins with unbundled risk transfer. Pure term life covers and comprehensive family health floaters facilitated through certified PoSP frameworks under NIC 66220.",
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

  const solutions = [
    {
      title: "Pure Term Life Insurance",
      focus: "Income Replacement & Debt Coverage",
      idealSum: "15x – 20x Annual Income",
      features: [
        "Unbundled pure protection without low-return investment mixing",
        "Critical illness & accidental total permanent disability riders",
        "Claim settlement assistance backed by top-tier private insurers",
        "Tax benefits under Section 80C (as per prevailing tax regime)",
      ],
      desc: "Financial security for your family in the event of untimely demise. Designed to replace future earning power and retire outstanding liabilities like home loans.",
    },
    {
      title: "Comprehensive Health Floaters",
      focus: "Medical Inflation Hedge & Hospitalization",
      idealSum: "₹10 Lakh to ₹1 Crore Base + Super Top-Up",
      features: [
        "Zero room rent sub-limits and no copayment clauses",
        "Restoration / refill benefits for unrelated illnesses",
        "Daycare procedure coverage and annual preventive health checks",
        "Tax deductions up to ₹25,000–₹50,000 under Section 80D",
      ],
      desc: "Protects family wealth from medical inflation. We facilitate pure health indemnities with extensive cashless hospital networks across India.",
    },
    {
      title: "Super Top-Up Health Covers",
      focus: "Catastrophic Medical Reserve",
      idealSum: "₹25 Lakh to ₹90 Lakh with defined deductible",
      features: [
        "Cost-effective enhancement of corporate employer policies",
        "High aggregate medical coverage for a fraction of base premium",
        "Seamless claim triggering once deductible threshold is passed",
      ],
      desc: "A smart, budget-conscious way to expand total health cover into high seven figures without paying exorbitant base premiums.",
    },
    {
      title: "Personal Accident & Disability Covers",
      focus: "Living Risk & Temporary Disablement",
      idealSum: "10x Annual Income",
      features: [
        "Weekly income payout during temporary total disability",
        "Lump-sum compensation for permanent partial/total disablement",
        "Coverage worldwide 24 hours a day",
      ],
      desc: "Addresses the living risk that traditional term insurance excludes: loss of active earning potential due to an unforeseen physical accident.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-16">
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 rounded-full border border-rose-300 bg-rose-50 px-3 py-1 text-xs font-semibold text-rose-800">
          <ShieldAlert className="h-3.5 w-3.5" /> Licensed Facilitation Desk • NIC 66220
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-navy-900 tracking-tight">
          {content.ins_hero_title}
        </h1>
        <p className="text-base text-slate-600 leading-relaxed">
          {content.ins_hero_subtitle}
        </p>
      </div>

      {/* Solutions Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {solutions.map((item, idx) => (
          <div key={idx} className="bg-white rounded-2xl p-8 border border-slate-200 shadow-xs space-y-4">
            <div className="flex justify-between items-start gap-3">
              <h3 className="text-xl font-bold text-navy-900">{item.title}</h3>
              <span className="text-[10px] font-bold uppercase tracking-wider bg-rose-50 text-rose-700 px-2.5 py-1 rounded-md shrink-0">
                {item.focus}
              </span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
            <div className="space-y-2 pt-3 border-t border-slate-100">
              <span className="text-[11px] font-bold text-slate-700 uppercase tracking-wider block">
                Key Parameters ({item.idealSum}):
              </span>
              <ul className="space-y-1.5 text-xs text-slate-600">
                {item.features.map((feat, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>

      {/* Philosophy Callout: Unbundled Protection vs ULIPs / Traditional Endowments */}
      <section className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 space-y-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-rose-700">Distribution Philosophy</span>
          <h2 className="text-2xl font-bold text-navy-900 mt-1">Why We Advocate Unbundled Protection</h2>
          <p className="text-xs text-slate-500 mt-1">Never mix investment growth with life protection.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs text-slate-700">
          <div className="p-6 rounded-2xl bg-emerald-50/50 border border-emerald-200 space-y-3">
            <h4 className="text-sm font-bold text-navy-900 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Pure Term + Mutual Fund SIP (Recommended)
            </h4>
            <p className="leading-relaxed text-slate-600">
              Buy a high-sum pure term life cover (₹1–2 Crore) for an economical annual premium and invest the remainder in disciplined equity mutual fund SIPs. This maximizes both risk protection and wealth compounding with complete liquidity and transparency.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
            <h4 className="text-sm font-bold text-navy-900 flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-slate-500" /> Traditional Endowment & ULIP Plans
            </h4>
            <p className="leading-relaxed text-slate-600">
              Traditional insurance plans combine modest insurance covers with sub-inflation 4–5% returns and multi-year surrender penalties. Sarkar Capital prioritizes transparent, pure-risk insurance products over bundled high-cost endowment contracts.
            </p>
          </div>
        </div>
      </section>

      {/* Statutory IRDAI Solicitation Notice */}
      <section className="bg-slate-50 border border-slate-300 rounded-2xl p-6 space-y-2 text-xs leading-relaxed text-slate-600">
        <h4 className="font-bold text-slate-900 flex items-center gap-2 uppercase tracking-wider text-[11px]">
          <Lock className="w-4 h-4 text-slate-700" /> Mandatory Regulatory Notice (IRDAI Framework)
        </h4>
        <p>
          Insurance is the subject matter of solicitation[cite: 3]. Sarkar Capital functions as an intermediary / facilitator through licensed Point of Sales Person (PoSP) and corporate agency tie-ups with IRDAI-registered insurance companies[cite: 3]. Sarkar Capital never collects insurance premiums in its corporate name[cite: 3]; all premium checks and electronic payments are remitted directly to the respective underwriting insurance company[cite: 3].
        </p>
      </section>

      {/* Consultation Action */}
      <section className="bg-navy-900 text-white rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg">
        <div className="space-y-1 text-center md:text-left">
          <h3 className="text-xl sm:text-2xl font-bold">Review Your Family&apos;s Risk Covers</h3>
          <p className="text-xs text-slate-400 max-w-xl">
            Book an institutional portfolio review to identify policy gaps, calculate exact Human Life Value (HLV), or analyze employer health limits.
          </p>
        </div>
        <Link
          href="/#consultation"
          className="px-6 py-3.5 bg-rose-600 hover:bg-rose-700 text-white text-xs sm:text-sm font-semibold rounded-xl transition flex items-center gap-2 shrink-0 shadow-lg"
        >
          Request Policy Review <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </div>
  );
}
