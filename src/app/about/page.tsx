"use client";

import { useEffect, useState } from "react";
import { Award, Building2, CheckCircle2, ShieldCheck, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

export default function AboutPage() {
  const [content, setContent] = useState<Record<string, string>>({
    about_hero_title: "Built on Radical Transparency & Zero Client Custody.",
    about_hero_subtitle:
      "Headquartered in Khardaha, North 24 Parganas (Kolkata Metropolitan Area, West Bengal), Sarkar Capital Private Limited was founded with a singular mission: to provide institutional-grade, unbiased financial product distribution to Indian families, salaried professionals, and HNIs without hidden commissions or product pushing.",
    about_moa_quote:
      "To carry on the business of distribution, marketing, sub-broking, referral, and intermediary facilitation of a wide spectrum of financial, investment, and wealth management products... strictly without engaging in direct banking, non-banking financial lending, chit fund operations, or accepting public deposits.",
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300 bg-emerald-50 px-3.5 py-1 text-xs font-semibold text-emerald-900">
          <ShieldCheck className="h-4 w-4 text-emerald-600" /> West Bengal Registered Intermediary • Pan-India Reach
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-navy-900 tracking-tight">
          {content.about_hero_title}
        </h1>
        <p className="text-base text-slate-600 leading-relaxed">
          {content.about_hero_subtitle}
        </p>
      </div>

      {/* Two Pillar Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xs space-y-4">
          <div className="p-3 bg-emerald-100 text-emerald-700 w-fit rounded-2xl">
            <Building2 className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-bold text-navy-900">Statutory Framework &amp; NIC Mandate</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Operating strictly within authorized corporate guidelines under National Industrial Classifications:
          </p>
          <ul className="text-xs space-y-2.5 text-slate-700 pt-2 border-t border-slate-100">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>NIC 66120:</strong> Security and commodity contracts brokerage facilitation</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>NIC 66220:</strong> Activities of insurance agents and broking services</span>
            </li>
          </ul>
        </div>

        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xs space-y-4">
          <div className="p-3 bg-blue-100 text-blue-700 w-fit rounded-2xl">
            <Award className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-bold text-navy-900">Accreditation &amp; Governance Standards</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Every wealth specialist at Sarkar Capital adheres to rigorous professional certifications:
          </p>
          <ul className="text-xs space-y-2.5 text-slate-700 pt-2 border-t border-slate-100">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>NISM-Series-V-A Certified Mutual Fund Distributors</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>AMFI Corporate ARN Desk backed by verified EUIN holders</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>Authorised Person partnerships with HDFC Securities &amp; IIFL</span>
            </li>
          </ul>
        </div>
      </div>

      {/* MOA Quote Box */}
      <div className="bg-slate-100 border border-slate-200 rounded-3xl p-8 space-y-3">
        <h3 className="text-sm font-bold text-navy-900 uppercase tracking-wider">
          Official Memorandum of Association (MOA) Extract
        </h3>
        <blockquote className="text-xs italic text-slate-700 border-l-2 border-emerald-600 pl-4 py-1 leading-relaxed">
          &ldquo;{content.about_moa_quote}&rdquo;
        </blockquote>
      </div>

      {/* CTA */}
      <div className="bg-navy-900 rounded-3xl p-8 sm:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="space-y-1 text-center md:text-left">
          <h3 className="text-xl sm:text-2xl font-bold">Ready to experience transparent wealth distribution?</h3>
          <p className="text-xs text-slate-300 max-w-xl">
            Schedule a complimentary 30-minute portfolio X-Ray with our West Bengal or digital advisory desks.
          </p>
        </div>
        <Link
          href="/#consultation"
          className="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold rounded-xl transition flex items-center gap-2 shrink-0 shadow-lg"
        >
          Book Free Portfolio Review <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
