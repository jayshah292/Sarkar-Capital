"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { LineChart, ShieldCheck, ArrowRight, Building, Lock, CheckCircle2, HelpCircle } from "lucide-react";
import { supabase } from "@/lib/supabase";

export default function EquitiesPage() {
  const [content, setContent] = useState<Record<string, string>>({
    eq_hero_title: "Institutional Equity & Derivative Onboarding Desk",
    eq_hero_subtitle:
      "Direct secondary market access across NSE and BSE powered by corporate Authorised Person (AP) alignments with HDFC Securities and IIFL Securities under NIC 66120.",
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

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the role of Sarkar Capital in equity broking?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sarkar Capital functions as an institutional Authorised Person (AP) and sub-brokering desk aligned with HDFC Securities and IIFL Securities, facilitating secure demat account opening and order execution under NIC 66120."
        }
      },
      {
        "@type": "Question",
        "name": "How are trading margins and funds safeguarded?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In compliance with SEBI circulars, all trading margins and client funds are transferred directly from your bank account to Indian Clearing Corporation Limited (ICCL) or NSE Clearing with zero intermediary holding."
        }
      }
    ]
  };

  const steps = [
    {
      step: "01",
      title: "Digital KYC Verification",
      desc: "Aadhaar and PAN e-KYC linked with Digilocker for instant, paperless account generation.",
    },
    {
      step: "02",
      title: "Institutional Depository Linking",
      desc: "Direct custodian allocation with National Securities Depository Limited (NSDL) or Central Depository Services (CDSL).",
    },
    {
      step: "03",
      title: "Desk Activation & Execution",
      desc: "Full access to research terminals, algorithmic baskets, and direct market access across NSE and BSE.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 rounded-full border border-blue-300 bg-blue-50 px-3.5 py-1 text-xs font-semibold text-blue-800">
          <LineChart className="h-4 w-4" /> Institutional Equity &amp; Demat Desk • NIC 66120
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-navy-900 tracking-tight">
          {content.eq_hero_title}
        </h1>
        <p className="text-base text-slate-600 leading-relaxed">
          {content.eq_hero_subtitle}
        </p>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xs space-y-4">
          <div className="p-3 bg-blue-100 text-blue-700 w-fit rounded-2xl">
            <Building className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-navy-900">Partner Brokerage Platforms</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Sarkar Capital functions as an Authorised Person (AP) and institutional sub-broker. Client demat and trading accounts are housed directly with national clearing custodians.
          </p>
          <ul className="space-y-2 text-xs text-slate-700 pt-3 border-t border-slate-100">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span><strong>HDFC Securities:</strong> Institutional execution, 3-in-1 banking integration, and high-tier research desks.</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span><strong>IIFL Securities:</strong> Low-latency platforms, comprehensive API trading capabilities, and derivatives analytics.</span>
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xs space-y-4">
          <div className="p-3 bg-emerald-100 text-emerald-700 w-fit rounded-2xl">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-navy-900">Zero-Custody Capital Safeguard</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            In compliance with SEBI circulars, all margins and client funds are transferred directly from your primary bank account to Indian Clearing Corporation Limited (ICCL) or NSE Clearing.
          </p>
          <ul className="space-y-2 text-xs text-slate-700 pt-3 border-t border-slate-100">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Zero client deposit collection into Sarkar Capital corporate accounts.</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Direct depository credits strictly to investor personal Demat accounts.</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 space-y-8 shadow-xs">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-blue-700">Account Architecture</span>
          <h2 className="text-2xl font-bold text-navy-900 mt-1">Paperless Onboarding Workflow</h2>
          <p className="text-xs text-slate-500 mt-1">Seamless 10-minute digital initiation supported by our desk.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((s, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
              <span className="text-xs font-black text-blue-600 bg-blue-100 px-2.5 py-1 rounded-md">{s.step}</span>
              <h4 className="text-base font-bold text-navy-900 pt-2">{s.title}</h4>
              <p className="text-xs text-slate-600 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 border border-slate-300 rounded-3xl p-6 space-y-2 text-xs leading-relaxed text-slate-600">
        <h4 className="font-bold text-slate-900 flex items-center gap-2 uppercase tracking-wider text-[11px]">
          <Lock className="w-4 h-4 text-slate-700" /> Mandatory SEBI Regulatory Notice (Secondary Markets)
        </h4>
        <p>
          Securities investments and derivatives trading are subject to market risks. Please note that 9 out of 10 individual traders in equity futures and options incur net losses according to SEBI study findings. Sarkar Capital does not offer portfolio guarantees, direct execution discretion, or PMS services without SEBI registration. All orders are client-authorized on partner broker terminals.
        </p>
      </section>

      <section className="bg-navy-900 text-white rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg">
        <div className="space-y-1 text-center md:text-left">
          <h3 className="text-xl sm:text-2xl font-bold">Open Institutional Demat &amp; Trading Desk</h3>
          <p className="text-xs text-slate-400 max-w-xl">
            Connect with our onboarding team to set up HDFC Securities or IIFL broking accounts with privileged institutional brokerage tiers.
          </p>
        </div>
        <Link
          href="/#consultation"
          className="px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-semibold rounded-xl transition flex items-center gap-2 shrink-0 shadow-lg"
        >
          Initiate Demat Setup <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </div>
  );
}
