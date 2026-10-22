"use client";

import { useEffect, useState } from "react";
import { Award, Building2, CheckCircle2, ShieldCheck, UserCheck } from "lucide-react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

export default function AboutPage() {
  const [content, setContent] = useState<Record<string, string>>({
    about_hero_title: "Institutional Credibility & Trusted Leadership",
    about_hero_subtitle:
      "Sarkar Capital Private Limited is an institutional financial distribution company engineered on radical transparency, modern digital tools, and zero client capital custody.",
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
          <ShieldCheck className="h-4 w-4 text-emerald-600" /> Mumbai, Kolkata &amp; Pan-India Presence
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-navy-900 tracking-tight">
          {content.about_hero_title}
        </h1>
        <p className="text-base text-slate-600 leading-relaxed">
          {content.about_hero_subtitle}
        </p>
      </div>

      {/* Founder & Chief Wealth Planner Profile Card */}
      <section className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-4 flex flex-col items-center text-center space-y-4">
          <div className="w-36 h-36 rounded-full bg-slate-900 text-emerald-400 flex items-center justify-center text-4xl font-black shadow-xl border-4 border-emerald-500/30">
            AS
          </div>
          <div>
            <h3 className="text-xl font-extrabold text-navy-900">Abhijit Sarkar</h3>
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full inline-block mt-1">
              Founder &amp; Chief Wealth Planner
            </span>
          </div>
        </div>

        <div className="lg:col-span-8 space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
          <h4 className="text-lg font-bold text-navy-900">Leading With Clarity &amp; Discipline</h4>
          <p>
            With extensive expertise in institutional wealth management and retail portfolio architecture, Abhijit Sarkar established Sarkar Capital to provide older investors, families, and busy professionals with a modern credibility tool and transparent guidance. 
          </p>
          <p>
            Operating across <strong>Mumbai, Kolkata, and Pan-India</strong>, our advisory desk ensures your investments are backed by NISM certifications, AMFI corporate standards, and zero proprietary fund pooling.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-3">
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-center">
              <span className="text-navy-900 font-extrabold block text-base">₹10 Cr+</span>
              <span className="text-[11px] text-slate-500">Target Managed AUM</span>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-center">
              <span className="text-emerald-700 font-extrabold block text-base">40+</span>
              <span className="text-[11px] text-slate-500">Empaneled AMCs</span>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-center col-span-2 sm:col-span-1">
              <span className="text-blue-700 font-extrabold block text-base">100%</span>
              <span className="text-[11px] text-slate-500">Direct Clearing</span>
            </div>
          </div>
        </div>
      </section>

      {/* Statutory & Regulatory Badges */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xs space-y-4">
          <div className="p-3 bg-emerald-100 text-emerald-700 w-fit rounded-2xl">
            <Building2 className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-bold text-navy-900">Statutory Framework &amp; NIC Mandate</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Incorporated entity operating under National Industrial Classifications:
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
          <h3 className="text-xl font-bold text-navy-900">Accreditation Standards</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Adhering to strict professional certification frameworks:
          </p>
          <ul className="text-xs space-y-2.5 text-slate-700 pt-2 border-t border-slate-100">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>NISM-Series-V-A Certified Mutual Fund Distributors</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>AMFI Corporate ARN Desk with verified EUIN holders</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>Authorised Person partnerships with HDFC Securities &amp; IIFL</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
