"use client";

import { useEffect, useState } from "react";
import { Award, Building2, CheckCircle2 } from "lucide-react";
import { supabase } from "@/lib/supabase";

export default function AboutPage() {
  const [content, setContent] = useState<Record<string, string>>({
    about_hero_title: "About Sarkar Capital",
    about_hero_subtitle:
      "Sarkar Capital is established to provide disciplined, institutional-grade financial product distribution to Indian retail investors, salaried professionals, and HNIs.",
    about_moa_quote:
      "To carry on the business of distribution, marketing, sub-broking, referral, and intermediary facilitation of a wide spectrum of financial, investment, and wealth management products... strictly without engaging in direct banking, non-banking financial lending, chit fund operations, or accepting public deposits.",
  });

  useEffect(() => {
    async function loadAboutContent() {
      const { data } = await supabase.from("site_content").select("*");
      if (data && data.length > 0) {
        const mapped: Record<string, string> = {};
        data.forEach((row: { key: string; value: string }) => {
          mapped[row.key] = row.value;
        });
        setContent((prev) => ({ ...prev, ...mapped }));
      }
    }
    loadAboutContent();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-3 py-1 text-xs font-semibold text-slate-700 mb-4">
          Corporate Background
        </div>
        <h1 className="text-4xl font-extrabold text-navy-900 tracking-tight">
          {content.about_hero_title}
        </h1>
        <p className="mt-4 text-base text-slate-600 leading-relaxed">
          {content.about_hero_subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-2xl border border-slate-200">
          <div className="p-3 bg-emerald-100 text-emerald-700 w-fit rounded-xl mb-4">
            <Building2 className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-bold text-navy-900 mb-3">Statutory Framework</h3>
          <p className="text-sm text-slate-600 mb-4 leading-relaxed">
            Incorporated as a private limited entity with specialized National Industrial Classifications:
          </p>
          <ul className="text-xs space-y-2 text-slate-700">
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

        <div className="bg-white p-8 rounded-2xl border border-slate-200">
          <div className="p-3 bg-blue-100 text-blue-700 w-fit rounded-xl mb-4">
            <Award className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-bold text-navy-900 mb-3">Accreditation & Certification</h3>
          <p className="text-sm text-slate-600 mb-4 leading-relaxed">
            All advisory recommendations and distribution setups operate under mandatory certification standards:
          </p>
          <ul className="text-xs space-y-2 text-slate-700">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
              <span>NISM-Series-V-A Mutual Fund Distributors Certification</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
              <span>AMFI Corporate ARN backed by individual EUIN holders</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
              <span>Sub-broking desk affiliations with HDFC Securities & IIFL</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-slate-100 border border-slate-200 rounded-2xl p-8">
        <h3 className="text-lg font-bold text-navy-900 mb-2">Official Memorandum of Association (MOA) Extract</h3>
        <blockquote className="text-xs italic text-slate-700 border-l-2 border-emerald-600 pl-4 py-1 leading-relaxed">
          &ldquo;{content.about_moa_quote}&rdquo;
        </blockquote>
      </div>
    </div>
  );
}
