"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Landmark, ShieldCheck, ArrowRight, CheckCircle2, Lock, HelpCircle, Sparkles, AlertTriangle } from "lucide-react";
import { supabase } from "@/lib/supabase";

export default function FixedIncomePage() {
  const [content, setContent] = useState<Record<string, string>>({
    fi_hero_title: "Earn 7.8% to 8.6% Fixed Returns—Without Stock Market Volatility.",
    fi_hero_subtitle:
      "Whether you are a retiree seeking predictable monthly cash flow or a property seller wanting to save up to ₹10 Lakh in capital gains tax, our fixed income desk secures your capital with CRISIL/ICRA AAA-rated corporate FDs, Sovereign Gold Bonds, and 54EC tax-exemption bonds.",
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
        "name": "Are AAA corporate fixed deposits safe through Sarkar Capital?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sarkar Capital distributes strictly CRISIL and ICRA AAA-rated corporate fixed deposits from premier issuing institutions like Bajaj Finance, Mahindra, and HDFC. Your payment is drawn directly in favor of the issuing institution, ensuring zero intermediary custody risk."
        }
      },
      {
        "@type": "Question",
        "name": "How does a Section 54EC bond save capital gains tax on property sale?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Under Section 54EC of the Income Tax Act, if you sell residential or commercial property and earn Long-Term Capital Gains (LTCG), you can invest up to ₹50 Lakh within 6 months into 54EC bonds issued by REC, PFC, NHAI, or IRFC to claim 100% tax exemption on those gains."
        }
      },
      {
        "@type": "Question",
        "name": "Do Sovereign Gold Bonds (SGBs) pay regular interest?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. SGBs issued by the Reserve Bank of India pay a fixed 2.50% p.a. interest semiannually, in addition to matching the market price of physical gold upon maturity after 8 years, with 100% tax-free capital gains."
        }
      }
    ]
  };

  const fixedIncomeDesks = [
    {
      badge: "SOVEREIGN BACKED • 2.5% P.A. EXTRA PAYOUT",
      title: "Sovereign Gold Bonds (SGBs)",
      issuer: "Reserve Bank of India (Govt of India)",
      tenure: "8 Years (Flexible exit after 5th year)",
      yield: "2.50% regular interest + physical gold appreciation",
      taxRule: "100% Tax-Free capital gains on maturity redemption",
      desc: "The absolute safest way to hold gold. Zero making charges, zero storage locker risk, guaranteed government backing, and regular semiannual interest credited to your bank.",
    },
    {
      badge: "CRISIL / ICRA AAA RATED • UP TO 8.60%",
      title: "AAA Corporate Fixed Deposits",
      issuer: "Premier NBFCs & HFCs (Bajaj Finance, Mahindra, HDFC)",
      tenure: "12 to 60 Months",
      yield: "Up to 7.80% – 8.60% p.a. (Senior citizens get extra yield)",
      taxRule: "Taxable as per individual income tax slab",
      desc: "Stop earning 6% in commercial bank FDs. Lock in superior yields with India's highest-rated corporate issuers, offering monthly, quarterly, or cumulative payout options.",
    },
    {
      badge: "SECTION 54EC • SAVE UP TO ₹10L+ TAX",
      title: "Capital Gains Tax-Exemption Bonds",
      issuer: "REC, PFC, NHAI & IRFC (Govt Undertakings)",
      tenure: "5 Years mandatory lock-in",
      yield: "5.25% p.a. fixed coupon",
      taxRule: "Saves up to ₹50 Lakh long-term capital gains tax on property sale",
      desc: "Essential for anyone who recently sold land, a house, or commercial real estate and wants a 100% legally secure route to avoid paying 20% LTCG tax.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* 1. HERO SECTION + VISUAL CASH-FLOW LADDER CARD */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 space-y-5">
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-300 bg-purple-50 px-3.5 py-1.5 text-xs font-bold text-purple-900">
            <Landmark className="h-4 w-4 text-purple-600" /> Capital Preservation &amp; Cash Flow Desk
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-navy-900 tracking-tight leading-[1.1]">
            {content.fi_hero_title}
          </h1>
          <p className="text-base text-slate-600 leading-relaxed">
            {content.fi_hero_subtitle}
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="/#consultation"
              className="px-6 py-3.5 bg-purple-600 hover:bg-purple-700 text-white text-xs sm:text-sm font-bold rounded-xl transition inline-flex items-center gap-2 shadow-lg shadow-purple-600/20"
            >
              Inquire Current FD &amp; Bond Rates <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="px-5 py-3.5 bg-white hover:bg-slate-100 text-navy-900 border border-slate-300 text-xs sm:text-sm font-bold rounded-xl transition inline-flex items-center gap-2"
            >
              Talk to Fixed Income Specialist
            </Link>
          </div>
        </div>

        {/* Right Visual Card: The Idle Cash Wake-Up Call */}
        <div className="lg:col-span-5 bg-navy-900 text-white rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-2xl space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-purple-400 block">
                The Idle Cash Comparison (₹25 Lakh Corpus)
              </span>
              <h3 className="text-base sm:text-lg font-bold text-white mt-0.5">
                Savings A/C vs. AAA Corporate FD
              </h3>
            </div>
            <Sparkles className="w-6 h-6 text-purple-400 shrink-0" />
          </div>

          <div className="space-y-4">
            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-1">
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-400 font-semibold">Standard Bank Savings (3% p.a.)</span>
                <span className="text-rose-400 font-bold">₹75,000 / year</span>
              </div>
              <p className="text-[11px] text-slate-400">
                Loses real purchasing power every year against 6.7% inflation.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-purple-950/50 border border-purple-500/40 space-y-1">
              <div className="flex justify-between items-center text-xs">
                <span className="text-purple-300 font-bold">AAA Corporate FD (8.4% p.a.)</span>
                <span className="text-emerald-400 font-black text-sm">₹2,10,000 / year</span>
              </div>
              <p className="text-[11px] text-purple-200 font-medium">
                Gain: <strong className="text-white">+₹1,35,000 Extra Annual Income</strong> with top-tier credit ratings.
              </p>
            </div>
          </div>

          <div className="pt-2 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
            <span>Direct Issuer Cheque / RTGS</span>
            <span className="text-purple-400 font-semibold">Zero Intermediary Pooling</span>
          </div>
        </div>
      </section>

      {/* 2. FIXED INCOME DESK INSTRUMENTS */}
      <section className="space-y-8">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-purple-700">
            Curated Yield Avenues
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-navy-900">
            Avenues Designed for Capital Preservation &amp; Cash Flow
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {fixedIncomeDesks.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-7 border border-slate-200 shadow-xs hover:shadow-md transition flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <span className="text-[10px] font-black uppercase tracking-wider bg-purple-50 text-purple-700 px-2.5 py-1 rounded-md inline-block">
                  {item.badge}
                </span>
                <h3 className="text-xl font-bold text-navy-900">{item.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
              </div>

              <div className="space-y-2 pt-4 border-t border-slate-100 text-xs text-slate-700">
                <div className="flex justify-between">
                  <span className="text-slate-500 font-medium">Issuer:</span>
                  <span className="font-semibold text-slate-900">{item.issuer}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500 font-medium">Tenure:</span>
                  <span className="font-semibold text-slate-900">{item.tenure}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500 font-medium">Indicative Yield:</span>
                  <span className="font-bold text-purple-700">{item.yield}</span>
                </div>
                <div className="flex justify-between pt-1 border-t border-slate-100">
                  <span className="text-slate-500 font-medium">Tax Status:</span>
                  <span className="font-semibold text-emerald-700">{item.taxRule}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. AEO COMPARISON MATRIX */}
      <section className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 space-y-6 shadow-xs">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-purple-700">
            Yield &amp; Safety Comparison
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 mt-1">
            Fixed Income Options at a Glance
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-700 border-collapse">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50 text-navy-900 font-bold uppercase tracking-wider">
                <th className="py-3.5 px-4">Instrument</th>
                <th className="py-3.5 px-4">Credit / Sovereign Safety</th>
                <th className="py-3.5 px-4">Yield / Coupon</th>
                <th className="py-3.5 px-4">Lock-in / Tenure</th>
                <th className="py-3.5 px-4">Primary Investor Goal</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr>
                <td className="py-3.5 px-4 font-bold text-navy-900">Sovereign Gold Bonds (SGB)</td>
                <td className="py-3.5 px-4 text-emerald-700 font-semibold">Sovereign (Government of India)</td>
                <td className="py-3.5 px-4 font-bold text-navy-900">2.5% p.a. + Gold Appreciation</td>
                <td className="py-3.5 px-4">8 Years (Exit Yr 5)</td>
                <td className="py-3.5 px-4 text-slate-600">Tax-free gold holding &amp; steady cash flow</td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 font-bold text-navy-900">AAA Corporate FDs</td>
                <td className="py-3.5 px-4 text-purple-800 font-semibold">CRISIL AAA / ICRA AAA Rated</td>
                <td className="py-3.5 px-4 font-bold text-navy-900">7.80% – 8.60% p.a.</td>
                <td className="py-3.5 px-4">12 to 60 Months</td>
                <td className="py-3.5 px-4 text-slate-600">Retirees needing monthly / quarterly income</td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 font-bold text-navy-900">54EC Capital Gain Bonds</td>
                <td className="py-3.5 px-4 text-emerald-700 font-semibold">Govt Undertakings (REC/NHAI)</td>
                <td className="py-3.5 px-4 font-bold text-navy-900">5.25% p.a.</td>
                <td className="py-3.5 px-4">5 Years mandatory</td>
                <td className="py-3.5 px-4 text-slate-600">Property sellers saving 20% LTCG tax</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 4. MANDATORY NON-CUSTODIAL NOTICE */}
      <section className="bg-slate-50 border border-slate-300 rounded-3xl p-6 space-y-2 text-xs leading-relaxed text-slate-600">
        <h4 className="font-bold text-slate-900 flex items-center gap-2 uppercase tracking-wider text-[11px]">
          <Lock className="w-4 h-4 text-slate-700" /> Mandatory Non-Custodial Disclosure (Fixed Income)
        </h4>
        <p>
          Sarkar Capital does not pool, deposit, or hold investor funds under any circumstances. Fixed Deposit cheques, RTGS, or online payments are drawn strictly in favor of the respective regulated issuing financial institution (e.g., Bajaj Finance Ltd, Mahindra &amp; Mahindra Financial Services, or RBI). Fixed deposit certificates and bond allotment confirmations are dispatched directly by the issuer to the investor&apos;s registered address.
        </p>
      </section>

      {/* 5. CTA BANNER */}
      <section className="bg-navy-900 text-white rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="space-y-2 text-center md:text-left">
          <div className="inline-flex items-center gap-1.5 text-xs text-purple-400 font-semibold uppercase tracking-wider">
            <Sparkles className="w-4 h-4" /> Lock In Current High Yields
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold">
            Want to Review Current Corporate FD &amp; SGB Tranches?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
            Speak with our fixed income desk to compare active interest rates across AAA issuers and map out your capital preservation ladder.
          </p>
        </div>
        <Link
          href="/#consultation"
          className="px-6 py-3.5 bg-purple-600 hover:bg-purple-700 text-white text-xs sm:text-sm font-bold rounded-xl transition flex items-center gap-2 shrink-0 shadow-lg"
        >
          Inquire Fixed Income Desk <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </div>
  );
}
