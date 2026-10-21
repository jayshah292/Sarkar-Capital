"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Landmark, ShieldCheck, ArrowRight, CheckCircle2, Percent, Coins, Lock, HelpCircle } from "lucide-react";
import { supabase } from "@/lib/supabase";

export default function FixedIncomePage() {
  const [content, setContent] = useState<Record<string, string>>({
    fi_hero_title: "Fixed Income & Capital Safety Desk",
    fi_hero_subtitle:
      "Capital preservation avenues structured for predictable cash flows. Sovereign Gold Bonds, AAA Corporate Fixed Deposits, and 54EC Capital Gains tax-saving bonds.",
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

  const instruments = [
    {
      title: "Sovereign Gold Bonds (SGBs)",
      issuer: "Reserve Bank of India (Govt of India)",
      tenure: "8 Years (Exit option after 5th year)",
      returns: "2.50% p.a. regular interest + gold appreciation",
      tax: "100% Tax-free capital gains on redemption at maturity",
      desc: "The safest way to hold gold without storage costs or making charges. Direct sovereign guarantee from the Government of India.",
    },
    {
      title: "AAA Corporate Fixed Deposits",
      issuer: "Premier NBFCs & HFCs (Bajaj, Mahindra, HDFC)",
      tenure: "12 to 60 Months",
      returns: "Up to 7.80% – 8.60% p.a. (Senior citizen premium)",
      tax: "Taxable as per individual income tax slab",
      desc: "Higher yield alternatives to traditional commercial bank deposits, with safety ratings validated by CRISIL and ICRA.",
    },
    {
      title: "Section 54EC Capital Gains Bonds",
      issuer: "PFC, REC, IRFC & NHAI",
      tenure: "5 Years lock-in",
      returns: "5.25% p.a. fixed coupon",
      tax: "Up to ₹50 Lakh long-term capital gains tax exemption on real estate sale",
      desc: "Mandatory instrument for property sellers seeking legal long-term capital gains tax exemptions under Section 54EC of the IT Act.",
    },
    {
      title: "RBI Retail Direct (G-Secs & T-Bills)",
      issuer: "Government of India / State Governments",
      tenure: "91 Days to 40 Years",
      returns: "Sovereign coupon yields",
      tax: "Taxable as per individual income slab",
      desc: "Direct lending to the central and state governments. Zero credit default risk with periodic semi-annual coupon payouts.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-16">
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 rounded-full border border-purple-300 bg-purple-50 px-3 py-1 text-xs font-semibold text-purple-800">
          <Landmark className="h-3.5 w-3.5" /> Capital Preservation & Cash Flow
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-navy-900 tracking-tight">
          {content.fi_hero_title}
        </h1>
        <p className="text-base text-slate-600 leading-relaxed">
          {content.fi_hero_subtitle}
        </p>
      </div>

      {/* Instruments Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {instruments.map((item, idx) => (
          <div key={idx} className="bg-white rounded-2xl p-8 border border-slate-200 shadow-xs space-y-4">
            <div className="flex justify-between items-start gap-4">
              <h3 className="text-xl font-bold text-navy-900">{item.title}</h3>
              <span className="text-[10px] font-bold uppercase tracking-wider bg-purple-50 text-purple-700 px-2.5 py-1 rounded-md shrink-0">
                {item.issuer}
              </span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
            <div className="space-y-2 pt-3 border-t border-slate-100 text-xs">
              <div className="flex justify-between">
                <span className="text-slate-500 font-medium">Tenure Horizon:</span>
                <span className="font-semibold text-slate-900">{item.tenure}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500 font-medium">Coupon / Return:</span>
                <span className="font-bold text-emerald-700">{item.returns}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500 font-medium">Tax Treatment:</span>
                <span className="font-medium text-slate-700 text-right max-w-xs">{item.tax}</span>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Comparison Table */}
      <section className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 space-y-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-purple-700">Yield & Risk Spectrum</span>
          <h2 className="text-2xl font-bold text-navy-900 mt-1">Fixed Income Comparison Matrix</h2>
          <p className="text-xs text-slate-500 mt-1">Evaluate avenues based on credit rating, lock-in, and post-tax returns.</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-700 border-collapse">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50 text-navy-900 font-bold uppercase tracking-wider">
                <th className="py-3 px-4">Vehicle</th>
                <th className="py-3 px-4">Credit Safety</th>
                <th className="py-3 px-4">Indicative Annual Return</th>
                <th className="py-3 px-4">Liquidity</th>
                <th className="py-3 px-4">Ideal Investor Profile</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr>
                <td className="py-3 px-4 font-semibold text-slate-900">Sovereign Gold Bonds</td>
                <td className="py-3 px-4 text-emerald-700 font-semibold">Sovereign (Govt of India)</td>
                <td className="py-3 px-4 font-bold text-navy-900">2.50% + Gold Price Movement</td>
                <td className="py-3 px-4 text-slate-600">Traded on NSE/BSE secondary markets</td>
                <td className="py-3 px-4 text-slate-600">Long-term gold asset allocators</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-semibold text-slate-900">AAA Corporate FDs</td>
                <td className="py-3 px-4 text-slate-700">CRISIL AAA / ICRA AAA</td>
                <td className="py-3 px-4 font-bold text-navy-900">7.75% – 8.60%</td>
                <td className="py-3 px-4 text-slate-600">Premature exit permitted (minor penalty)</td>
                <td className="py-3 px-4 text-slate-600">Retirees seeking monthly/quarterly payouts</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-semibold text-slate-900">54EC Capital Gain Bonds</td>
                <td className="py-3 px-4 text-emerald-700 font-semibold">Govt Undertakings (AAA)</td>
                <td className="py-3 px-4 font-bold text-navy-900">5.25% (Annual)</td>
                <td className="py-3 px-4 text-slate-600">5-year non-negotiable lock-in</td>
                <td className="py-3 px-4 text-slate-600">Real estate sellers saving 20% LTCG tax</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-semibold text-slate-900">Traditional Bank FDs</td>
                <td className="py-3 px-4 text-slate-700">DICGC insured up to ₹5 Lakh</td>
                <td className="py-3 px-4 font-bold text-navy-900">6.50% – 7.25%</td>
                <td className="py-3 px-4 text-slate-600">Instant breakable via Net Banking</td>
                <td className="py-3 px-4 text-slate-600">Emergency reserve deployment</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Mandatory Regulatory Non-Custodial Note */}
      <section className="bg-slate-50 border border-slate-300 rounded-2xl p-6 space-y-2 text-xs leading-relaxed text-slate-600">
        <h4 className="font-bold text-slate-900 flex items-center gap-2 uppercase tracking-wider text-[11px]">
          <Lock className="w-4 h-4 text-slate-700" /> Mandatory Non-Custodial Disclosure (Fixed Income)
        </h4>
        <p>
          Sarkar Capital does not pool, deposit, or hold investor funds under any circumstances[cite: 3]. Fixed Deposit cheques, RTGS, or NEFT transfers are drawn strictly in favor of the respective regulated issuing institution (e.g., &ldquo;Bajaj Finance Ltd - Deposit Account&rdquo; or Reserve Bank of India)[cite: 3]. Fixed deposit receipts (FDRs) and bond certificates are dispatched directly by the issuing corporation to the investor&apos;s registered address.
        </p>
      </section>

      {/* CTA Banner */}
      <section className="bg-navy-900 text-white rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg">
        <div className="space-y-1 text-center md:text-left">
          <h3 className="text-xl sm:text-2xl font-bold">Lock in High-Yield Capital Protection</h3>
          <p className="text-xs text-slate-400 max-w-xl">
            Review currently active corporate FD tranches, SGB sovereign subscription windows, and 54EC bond options with our desk.
          </p>
        </div>
        <Link
          href="/#consultation"
          className="px-6 py-3.5 bg-purple-600 hover:bg-purple-700 text-white text-xs sm:text-sm font-semibold rounded-xl transition flex items-center gap-2 shrink-0 shadow-lg"
        >
          Inquire Fixed Income <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </div>
  );
}
