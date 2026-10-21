"use client";

import { useEffect, useState } from "react";
import { Award, Building2, CheckCircle2, ShieldCheck } from "lucide-react";
import { supabase } from "@/lib/supabase";

export default function AboutPage() {
  const [content, setContent] = useState<Record<string, string>>({
    about_hero_title: "Corporate Pedigree & Non-Custodial Governance",
    about_hero_subtitle:
      "Sarkar Capital Private Limited is an institutional financial product distribution company headquartered in West Bengal, engineered on radical transparency and zero client capital custody.",
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300 bg-emerald-50 px-3.5 py-1 text-xs font-semibold text-emerald-800">
          <ShieldCheck className="h-4 w-4" /> West Bengal Registered Intermediary
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-navy-900 tracking-tight">
          {content.about_hero_title}
        </h1>
        <p className="text-base text-slate-600 leading-relaxed">
          {content.about_hero_subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xs space-y-4">
          <div className="p-3 bg-emerald-100 text-emerald-700 w-fit rounded-2xl">
            <Building2 className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-bold text-navy-900">Statutory Framework &amp; NIC Mandate</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Incorporated as a private limited entity operating from Khardaha, North 24 Parganas, Kolkata, West Bengal with specialized National Industrial Classifications:
          </p>
          <ul className="text-xs space-y-2 text-slate-700 pt-2 border-t border-slate-100">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
              <span><strong>NIC 66120:</strong> Security and commodity contracts brokerage</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
              <span><strong>NIC 66220:</strong> Insurance agents and broking activities</span>
            </li>
          </ul>
        </div>

        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xs space-y-4">
          <div className="p-3 bg-blue-100 text-blue-700 w-fit rounded-2xl">
            <Award className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-bold text-navy-900">Accreditation &amp; Certification Standards</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            All distribution recommendations and brokerage desks operate under rigorous certification standards:
          </p>
          <ul className="text-xs space-y-2 text-slate-700 pt-2 border-t border-slate-100">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
              <span>NISM-Series-V-A Mutual Fund Distributors Certification</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
              <span>AMFI Corporate ARN backed by certified individual EUIN holders</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
              <span>Authorised Person alignments with HDFC Securities &amp; IIFL</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-slate-100 border border-slate-200 rounded-3xl p-8 space-y-2">
        <h3 className="text-base font-bold text-navy-900">Official Memorandum of Association (MOA) Extract</h3>
        <blockquote className="text-xs italic text-slate-700 border-l-2 border-emerald-600 pl-4 py-1 leading-relaxed">
          &ldquo;{content.about_moa_quote}&rdquo;
        </blockquote>
      </div>
    </div>
  );
}
