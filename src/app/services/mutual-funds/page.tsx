"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { TrendingUp, ArrowRight, Calculator, CheckCircle2, ShieldCheck, HelpCircle } from "lucide-react";
import { supabase } from "@/lib/supabase";

export default function MutualFundsPage() {
  const [content, setContent] = useState<Record<string, string>>({
    mf_hero_title: "Systematic Mutual Fund Distribution Across 40+ AMCs",
    mf_hero_subtitle:
      "Goal-linked SIP frameworks, tax-saving ELSS, and corporate treasury liquid funds distributed under AMFI Corporate ARN norms with 100% direct clearing.",
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
        "name": "What is the difference between Direct and Regular mutual funds through Sarkar Capital?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sarkar Capital acts as an AMFI-registered distributor facilitating regular mutual fund plans bundled with active portfolio review, goal tracking, and dedicated advisory desks at zero upfront cost to investors."
        }
      },
      {
        "@type": "Question",
        "name": "How does SIP rupee-cost averaging work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A Systematic Investment Plan (SIP) automatically invests a fixed sum at regular intervals, purchasing more units when markets are low and fewer when markets are high, thus smoothing out volatility."
        }
      }
    ]
  };

  const categories = [
    {
      title: "Equity Growth Funds",
      horizon: "5–7+ Years",
      risk: "Very High",
      description: "Large-cap, mid-cap, small-cap, and flexi-cap opportunities targeting long-term inflation-beating capital appreciation.",
      tags: ["Flexi Cap", "Small Cap", "Large & Mid Cap", "ELSS Tax Saver"],
    },
    {
      title: "Hybrid & Balanced Allocation",
      horizon: "3–5 Years",
      risk: "Moderate to High",
      description: "Balanced Advantage and dynamic asset allocation strategies combining equity upside with debt downside protection.",
      tags: ["Balanced Advantage", "Multi Asset Allocation", "Aggressive Hybrid"],
    },
    {
      title: "Debt & Treasury Liquid Funds",
      horizon: "1 Month – 3 Years",
      risk: "Low to Moderate",
      description: "Liquid, overnight, and corporate bond funds aimed at capital preservation and short-term business surplus deployment.",
      tags: ["Liquid Funds", "Banking & PSU Debt", "Corporate Bond"],
    },
    {
      title: "Passive Index Strategies",
      horizon: "5+ Years",
      risk: "High",
      description: "Low-cost index tracking mirroring Nifty 50, BSE Sensex, and thematic indices with strict benchmark adherence.",
      tags: ["Nifty 50 Index", "Nifty Next 50", "Midcap 150 Index"],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300 bg-emerald-50 px-3.5 py-1 text-xs font-semibold text-emerald-800">
          <TrendingUp className="h-4 w-4" /> AMFI Registered Mutual Fund Desk
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-navy-900 tracking-tight">
          {content.mf_hero_title}
        </h1>
        <p className="text-base text-slate-600 leading-relaxed">
          {content.mf_hero_subtitle}
        </p>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {categories.map((cat, i) => (
          <div key={i} className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xs space-y-4">
            <div className="flex justify-between items-start">
              <h3 className="text-xl font-bold text-navy-900">{cat.title}</h3>
              <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 bg-slate-100 text-slate-700 rounded-md">
                Horizon: {cat.horizon}
              </span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">{cat.description}</p>
            <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100">
              {cat.tags.map((t, idx) => (
                <span key={idx} className="text-[11px] bg-emerald-50 text-emerald-800 px-2.5 py-1 rounded-md font-medium">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* FY 2026-27 Taxation Table */}
      <section className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 space-y-6 shadow-xs">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">Tax Compliance</span>
          <h2 className="text-2xl font-bold text-navy-900 mt-1">FY 2026-27 Mutual Fund Taxation Norms</h2>
          <p className="text-xs text-slate-500 mt-1">Current statutory tax rates applied upon redemption.</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-700 border-collapse">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50 text-navy-900 font-bold uppercase tracking-wider">
                <th className="py-3 px-4">Fund Category</th>
                <th className="py-3 px-4">Holding Period (LTCG)</th>
                <th className="py-3 px-4">LTCG Tax Rate</th>
                <th className="py-3 px-4">STCG Tax Rate</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr>
                <td className="py-3 px-4 font-semibold text-slate-900">Equity-Oriented Funds (&gt;65% Equity)</td>
                <td className="py-3 px-4">&gt; 12 Months</td>
                <td className="py-3 px-4 text-emerald-700 font-bold">12.5% (Above ₹1.25 Lakh exemption)</td>
                <td className="py-3 px-4">20%</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-semibold text-slate-900">Debt &amp; Non-Equity Funds</td>
                <td className="py-3 px-4">Any Period (As per Finance Act)</td>
                <td className="py-3 px-4 text-slate-600 font-medium" colSpan={2}>Taxed at applicable individual income tax slab rates</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Distribution Comparison Table */}
      <section className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 space-y-6 shadow-xs">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">Transparency &amp; Framework</span>
          <h2 className="text-2xl font-bold text-navy-900 mt-1">Understanding The Regular Distribution Model</h2>
          <p className="text-xs text-slate-500 mt-1">Clear facts on distribution, servicing, and commission structures.</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-700 border-collapse">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50 text-navy-900 font-bold uppercase tracking-wider">
                <th className="py-3 px-4">Feature</th>
                <th className="py-3 px-4">Sarkar Capital (Distributor Model)</th>
                <th className="py-3 px-4">Unassisted Direct Platforms</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr>
                <td className="py-3 px-4 font-semibold text-slate-900">Portfolio Advisory Review</td>
                <td className="py-3 px-4 text-emerald-700 font-medium">Included (Dedicated specialist guidance)</td>
                <td className="py-3 px-4 text-slate-500">Self-directed / No advisory support</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-semibold text-slate-900">Capital Custody</td>
                <td className="py-3 px-4 text-slate-700">100% Direct to AMC (Zero Broker Custody)</td>
                <td className="py-3 px-4 text-slate-700">100% Direct to AMC</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-semibold text-slate-900">Investor Fee</td>
                <td className="py-3 px-4 text-emerald-700 font-medium">₹0 Upfront Fee (AMC commissions apply)</td>
                <td className="py-3 px-4 text-slate-700">Platform subscription or DIY tracking</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Calculator Bridge */}
      <section className="bg-navy-900 text-white rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg">
        <div className="space-y-2 text-center md:text-left">
          <div className="inline-flex items-center gap-1.5 text-xs text-emerald-400 font-semibold uppercase tracking-wider">
            <Calculator className="w-4 h-4" /> Goal Simulation
          </div>
          <h3 className="text-xl sm:text-2xl font-bold">Calculate Your Monthly Wealth Trajectory</h3>
          <p className="text-xs text-slate-400 max-w-xl">
            Test different compounding durations and simulate 5–15% annual salary step-ups using our interactive calculator.
          </p>
        </div>
        <Link
          href="/calculators"
          className="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-semibold rounded-xl transition flex items-center gap-2 shrink-0 shadow-md"
        >
          Launch SIP Calculator <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </div>
  );
}
