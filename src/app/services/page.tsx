"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  TrendingUp,
  LineChart,
  Landmark,
  ShieldAlert,
  Gem,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  HelpCircle,
  Sparkles,
  Layers,
  Calculator,
} from "lucide-react";
import { supabase } from "@/lib/supabase";

export default function ServicesHubPage() {
  const [content, setContent] = useState<Record<string, string>>({
    services_hero_title: "Every Regulated Wealth & Protection Product—Under One Roof.",
    services_hero_subtitle:
      "You don't need 5 different apps or pushy bank relationship managers to build family wealth. From monthly Step-Up SIPs and HDFC/IIFL Demat accounts to 8.5% AAA Corporate FDs and Pure Term Insurance, we help you choose, execute, and track the right asset for every life milestone.",
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
        "name": "How do I know whether to invest in Mutual Funds, Direct Stocks, or Corporate FDs?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Your asset choice depends on your timeline: money needed within 1–3 years belongs in Liquid Funds or CRISIL AAA Corporate FDs (7.8%–8.6% yield). Goals 5–15+ years away (like retirement or child education) belong in diversified Equity Mutual Fund SIPs or direct equities."
        }
      },
      {
        "@type": "Question",
        "name": "Can I manage my entire family's investments and insurance through Sarkar Capital?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Sarkar Capital operates under NIC 66120 and 66220, enabling you to consolidate Mutual Funds (40+ AMCs), Equity Demat accounts (HDFC Securities & IIFL), Fixed Income bonds, and Pure Term & Health Insurance under one dedicated family desk."
        }
      }
    ]
  };

  const desks = [
    {
      title: "Mutual Funds & Goal-Linked SIPs",
      subtitle: "Best for: Retirement, Child Education & Long-Term Compounding",
      icon: TrendingUp,
      route: "/services/mutual-funds",
      badge: "AMFI Registered • 40+ AMCs",
      idealHorizon: "3 to 15+ Years",
      targetMetric: "11% – 14%+ Historical Equity CAGR",
      desc: "Stop buying random schemes that overlap. We build focused Core & Satellite mutual fund portfolios across Flexi-Cap, Mid/Small-Cap, Nifty Index, Hybrid, and ELSS tax-saver funds—rebalanced annually.",
      highlights: [
        "Step-Up SIP blueprints that grow with your annual salary hike",
        "Annual LTCG tax-harvesting (save tax on up to ₹1.25L gains/yr)",
        "100% direct clearing to AMC folios via BSE StarMF / NSE",
      ],
      cta: "Explore Mutual Fund Blueprints",
    },
    {
      title: "Equities, ETFs & Demat Desk",
      subtitle: "Best for: Direct Stock Investors, IPOs & Active Traders",
      icon: LineChart,
      route: "/services/equities",
      badge: "NIC 66120 • HDFC & IIFL Partner",
      idealHorizon: "Short to Long Term",
      targetMetric: "Direct NSE / BSE Execution",
      desc: "Get the best of both worlds: top-tier institutional research and trading terminals from HDFC Securities and IIFL Securities, backed by a dedicated human dealer and relationship desk at Sarkar Capital.",
      highlights: [
        "10-minute paperless NSDL / CDSL Demat & Trading setup",
        "Fundamental stock model portfolios, ETFs & IPO ASBA bidding",
        "Zero broker custody risk—direct ICCL / NSE Clearing settlement",
      ],
      cta: "Compare HDFC vs. IIFL Demat",
    },
    {
      title: "Fixed Income, SGBs & Tax Bonds",
      subtitle: "Best for: Retirees, Conservative Savers & Property Sellers",
      icon: Landmark,
      route: "/services/fixed-income",
      badge: "7.80% – 8.60% AAA Yields",
      idealHorizon: "1 to 8 Years",
      targetMetric: "Predictable Fixed Cash-Flow",
      desc: "Why settle for 3.5% in a savings account or 6.5% in a regular bank FD? Lock in higher, predictable yields with CRISIL/ICRA AAA-rated Corporate Fixed Deposits, Sovereign Gold Bonds, and 54EC Tax Bonds.",
      highlights: [
        "AAA Corporate FDs (Bajaj Finance, Mahindra, HDFC) up to 8.60% p.a.",
        "Section 54EC Bonds (REC, PFC, NHAI) to save up to ₹10L property LTCG tax",
        "Monthly, quarterly, or cumulative payout ladders for retirees",
      ],
      cta: "View Fixed Income Yield Table",
    },
    {
      title: "Pure Term Life & Family Health Cover",
      subtitle: "Best for: Protecting Family Income & Hospitalization Reserves",
      icon: ShieldAlert,
      route: "/services/insurance",
      badge: "NIC 66220 • IRDAI PoSP Desk",
      idealHorizon: "Lifelong Protection",
      targetMetric: "₹1Cr–5Cr Life • ₹10L–1Cr Health",
      desc: "One major hospitalization or unforeseen tragedy shouldn't wipe out 10 years of SIPs. We strictly recommend unbundled Pure Term Life and Zero-Sublimit Health Floaters—never low-return ULIPs or endowments.",
      highlights: [
        "5-Point Health Policy Audit (No room-rent caps or hidden co-pays)",
        "Super Top-Up health covers (expand ₹5L corporate cover to ₹50L cheaply)",
        "End-to-end family claim documentation & settlement assistance",
      ],
      cta: "Audit Your Family Insurance",
    },
    {
      title: "HNI Wealth Desk (PMS & AIF Mandates)",
      subtitle: "Best for: Qualified Investors, Business Owners & NRIs (₹50L+)",
      icon: Gem,
      route: "/contact",
      badge: "SEBI Regulated ₹50L+ / ₹1Cr+ Mandates",
      idealHorizon: "5+ Years",
      targetMetric: "High-Conviction Alpha",
      desc: "For portfolios above ₹50 Lakh, standard retail products aren't enough. Access curated Portfolio Management Services (PMS) and Category II/III Alternative Investment Funds (AIFs) from India's marquee institutional managers.",
      highlights: [
        "Concentrated 15–25 stock high-conviction institutional portfolios",
        "Corporate treasury management for idle business cash",
        "Direct quarterly reviews and consolidated family wealth reporting",
      ],
      cta: "Connect With HNI Desk",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* 1. HERO SECTION + VISUAL IDEAL FAMILY PORTFOLIO BREAKDOWN */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 space-y-5">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300 bg-emerald-50 px-3.5 py-1.5 text-xs font-bold text-emerald-900">
            <ShieldCheck className="h-4 w-4 text-emerald-600" /> SEBI • AMFI • RBI • IRDAI Regulated Ecosystem
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-navy-900 tracking-tight leading-[1.1]">
            {content.services_hero_title}
          </h1>
          <p className="text-base text-slate-600 leading-relaxed">
            {content.services_hero_subtitle}
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="/#consultation"
              className="px-6 py-3 bg-navy-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-bold rounded-xl transition inline-flex items-center gap-2 shadow-md"
            >
              Get a Custom Asset Allocation Plan <ArrowRight className="w-4 h-4 text-emerald-400" />
            </Link>
            <Link
              href="/calculators"
              className="px-5 py-3 bg-white hover:bg-slate-100 text-navy-900 border border-slate-300 text-xs sm:text-sm font-bold rounded-xl transition inline-flex items-center gap-2"
            >
              <Calculator className="w-4 h-4 text-emerald-600" /> Try SIP &amp; Lumpsum Calculators
            </Link>
          </div>
        </div>

        {/* Visual Right Card: The "3-Pillar Family Balance Sheet" */}
        <div className="lg:col-span-5 bg-navy-900 text-white rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-xl space-y-5">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 block">
                The Golden Rule of Wealth
              </span>
              <h3 className="text-base sm:text-lg font-bold text-white mt-0.5">
                How a Complete Family Portfolio Looks
              </h3>
            </div>
            <Layers className="w-6 h-6 text-emerald-400 shrink-0" />
          </div>

          <div className="space-y-3 text-xs">
            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-1">
              <div className="flex justify-between font-bold text-emerald-400">
                <span>1. WEALTH ACCELERATION (50% – 70%)</span>
                <span>12%+ Target</span>
              </div>
              <p className="text-slate-300 text-[11px] leading-relaxed">
                Equity Mutual Fund SIPs, Direct Stocks (HDFC/IIFL Demat) &amp; PMS to beat inflation over 5–15 years.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-1">
              <div className="flex justify-between font-bold text-blue-400">
                <span>2. CAPITAL ANCHOR &amp; INCOME (20% – 40%)</span>
                <span>7.8% – 8.6% Yield</span>
              </div>
              <p className="text-slate-300 text-[11px] leading-relaxed">
                AAA Corporate FDs, Sovereign Gold Bonds (SGBs), Liquid Funds &amp; 54EC Tax-Saving Bonds for stability.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-1">
              <div className="flex justify-between font-bold text-rose-400">
                <span>3. FAMILY SHIELD (FOUNDATION)</span>
                <span>15x–20x Income</span>
              </div>
              <p className="text-slate-300 text-[11px] leading-relaxed">
                Pure Term Life Cover + Zero-Sublimit Family Health Floater so medical emergencies never break your SIPs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PRODUCT DESK DEEP-DIVE CARDS */}
      <section className="space-y-8">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
            5 Specialized Distribution Desks
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-navy-900 mt-1">
            Choose the Right Desk for Your Goal
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {desks.map((d, i) => {
            const Icon = d.icon;
            return (
              <div
                key={i}
                className={`bg-white rounded-3xl p-8 border border-slate-200 shadow-xs hover:shadow-lg transition flex flex-col justify-between space-y-6 ${
                  i === 4 ? "lg:col-span-2 bg-gradient-to-r from-white to-slate-50" : ""
                }`}
              >
                <div className="space-y-4">
                  <div className="flex flex-wrap justify-between items-start gap-2">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-navy-900 text-emerald-400 rounded-2xl">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 block">
                          {d.badge}
                        </span>
                        <h3 className="text-xl font-extrabold text-navy-900">{d.title}</h3>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-[11px] font-bold bg-slate-100 text-navy-900 px-3 py-1 rounded-full inline-block">
                        {d.targetMetric}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs font-bold text-slate-800 bg-slate-50 px-3.5 py-2 rounded-xl border border-slate-100">
                    {d.subtitle} • <span className="text-emerald-700">Ideal Horizon: {d.idealHorizon}</span>
                  </p>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{d.desc}</p>

                  <ul className="space-y-2 pt-2 border-t border-slate-100 text-xs text-slate-700">
                    {d.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={d.route}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-navy-900 hover:text-emerald-700 transition"
                  >
                    {d.cta} <ArrowRight className="w-4 h-4 text-emerald-600" />
                  </Link>
                  <Link
                    href="/#consultation"
                    className="text-xs font-semibold text-slate-500 hover:text-navy-900 underline"
                  >
                    Book Free Review
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. AEO / SEO MASTER COMPARISON MATRIX: WHICH ASSET FITS YOUR TIMELINE? */}
      <section className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 space-y-6 shadow-xs">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
            Side-by-Side Comparison Matrix
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 mt-1">
            Compare Risk, Returns, Liquidity &amp; FY 2026-27 Taxation
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Use this institutional cheat-sheet to match your money with the right holding period.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-700 border-collapse">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50 text-navy-900 font-bold uppercase tracking-wider">
                <th className="py-3.5 px-4">Product Vertical</th>
                <th className="py-3.5 px-4">Ideal Time Horizon</th>
                <th className="py-3.5 px-4">Expected Return / Yield</th>
                <th className="py-3.5 px-4">Liquidity</th>
                <th className="py-3.5 px-4">FY 2026-27 Tax Rule</th>
                <th className="py-3.5 px-4">Custodian / Safety</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr>
                <td className="py-3.5 px-4 font-bold text-navy-900">Equity Mutual Funds</td>
                <td className="py-3.5 px-4">5 – 15+ Years</td>
                <td className="py-3.5 px-4 font-bold text-emerald-700">11% – 14%+ CAGR (Market-Linked)</td>
                <td className="py-3.5 px-4">High (T+1 / T+2 Redemption)</td>
                <td className="py-3.5 px-4">12.5% LTCG (&gt;₹1.25L/yr exempt)</td>
                <td className="py-3.5 px-4">40+ SEBI Regulated AMCs</td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 font-bold text-navy-900">Direct Equities &amp; ETFs</td>
                <td className="py-3.5 px-4">3 – 10+ Years</td>
                <td className="py-3.5 px-4 font-bold text-blue-700">Market-Linked Alpha</td>
                <td className="py-3.5 px-4">Instant (T+1 Exchange Settlement)</td>
                <td className="py-3.5 px-4">12.5% LTCG / 20% STCG</td>
                <td className="py-3.5 px-4">NSDL / CDSL Depository</td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 font-bold text-navy-900">AAA Corporate FDs</td>
                <td className="py-3.5 px-4">1 – 5 Years</td>
                <td className="py-3.5 px-4 font-bold text-purple-700">7.80% – 8.60% p.a. (Fixed)</td>
                <td className="py-3.5 px-4">Premature withdrawal after 3 mos</td>
                <td className="py-3.5 px-4">As per Income Tax Slab</td>
                <td className="py-3.5 px-4">CRISIL / ICRA AAA Issuers</td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 font-bold text-navy-900">54EC Capital Gain Bonds</td>
                <td className="py-3.5 px-4">5 Years (Lock-in)</td>
                <td className="py-3.5 px-4 font-bold text-purple-700">5.25% p.a. + 100% LTCG Tax Save</td>
                <td className="py-3.5 px-4">Locked for 5 Years</td>
                <td className="py-3.5 px-4">Saves up to ₹10L LTCG on Property</td>
                <td className="py-3.5 px-4">REC / PFC / NHAI / IRFC</td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 font-bold text-navy-900">Pure Term &amp; Health Cover</td>
                <td className="py-3.5 px-4">Lifelong Shield</td>
                <td className="py-3.5 px-4 font-bold text-rose-700">15x–20x Income Replacement</td>
                <td className="py-3.5 px-4">Cashless Claim / Lump-Sum Payout</td>
                <td className="py-3.5 px-4">Sec 80C &amp; 80D Deductions</td>
                <td className="py-3.5 px-4">IRDAI Licensed Insurers</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 4. CTA BANNER */}
      <section className="bg-navy-900 rounded-3xl p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="space-y-2 text-center md:text-left">
          <div className="inline-flex items-center gap-1.5 text-xs text-emerald-400 font-semibold uppercase tracking-wider">
            <Sparkles className="w-4 h-4" /> Not Sure Where to Start?
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold">
            Let Us Build Your Custom Family Wealth Roadmap
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
            Tell us your monthly investable surplus and target goals. We will show you the exact mix of Mutual Funds, Fixed Income, and Risk Protection—with ₹0 upfront consultation fees.
          </p>
        </div>
        <Link
          href="/#consultation"
          className="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold rounded-xl transition shrink-0 shadow-lg"
        >
          Book Free 1-on-1 Consultation →
        </Link>
      </section>
    </div>
  );
}
