"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  TrendingUp,
  ArrowRight,
  Calculator,
  CheckCircle2,
  ShieldCheck,
  HelpCircle,
  Sparkles,
  AlertTriangle,
  Layers,
  GraduationCap,
  Briefcase,
  Landmark,
} from "lucide-react";
import { supabase } from "@/lib/supabase";

export default function MutualFundsPage() {
  const [content, setContent] = useState<Record<string, string>>({
    mf_hero_title: "Stop Collecting Random Funds. Build a Goal-Engineered Portfolio.",
    mf_hero_subtitle:
      "Owning 12 trending mutual funds on a mobile app isn't a strategy—it's stock overlap in disguise. We help salaried professionals, families, and HNIs across Kolkata & India build focused 4-to-6 fund portfolios across 40+ AMCs, backed by annual rebalancing and 100% direct clearing.",
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
        "name": "How many mutual funds should an ideal portfolio have?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "An optimal mutual fund portfolio requires only 4 to 6 well-diversified schemes across distinct categories (such as Flexi-Cap, Nifty 50 Index, Mid-Cap, and Balanced Advantage/Liquid). Holding more than 7–8 funds creates 60%+ stock overlap and dilutes long-term compounding."
        }
      },
      {
        "@type": "Question",
        "name": "What is the difference between investing via Sarkar Capital vs. DIY Direct Apps?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "While DIY apps leave fund selection, panic-selling prevention, and tax-harvesting entirely to you, Sarkar Capital provides NISM-certified portfolio architecture, annual rebalancing, and behavioral discipline through AMFI-registered regular plans at ₹0 upfront advisory fee."
        }
      },
      {
        "@type": "Question",
        "name": "How are mutual fund gains taxed in India for FY 2026-27?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For equity-oriented mutual funds (>65% equity), Long-Term Capital Gains (held over 12 months) are taxed at 12.5% on gains exceeding ₹1.25 Lakh per financial year. Short-Term Capital Gains (held under 12 months) are taxed at 20%. Debt mutual funds are taxed at your applicable income tax slab rate."
        }
      },
      {
        "@type": "Question",
        "name": "Where are my mutual fund units held when I invest through Sarkar Capital?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "100% of your money goes directly from your bank account to BSE StarMF / NSE Clearing and the respective AMC. Your units are held in your personal PAN-linked AMC Folio or Demat account, verifiable anytime on MF Central or CAMS/KFintech."
        }
      }
    ]
  };

  const goalBaskets = [
    {
      icon: Landmark,
      badge: "BASKET 01 • HORIZON: 1 MONTH TO 3 YEARS",
      title: "Emergency Reserve & Smart Corporate Treasury",
      target: "6.8% – 7.4% Annualized Yield • High Liquidity",
      problem: "Keeping ₹5 Lakh–₹20 Lakh idle in a 3% bank savings account loses money every day to inflation.",
      strategy:
        "We park your emergency buffer and short-term home down-payment funds in low-volatility Overnight, Liquid, Ultra-Short Duration, and tax-efficient Arbitrage Funds.",
      tags: ["Overnight & Liquid Funds", "Tax-Efficient Arbitrage", "T+1 Instant Redemption"],
    },
    {
      icon: GraduationCap,
      badge: "BASKET 02 • HORIZON: 5 TO 10 YEARS",
      title: "Child Higher Education & Lifestyle Milestones",
      target: "11% – 13% Target CAGR • Moderate-High Risk",
      problem: "College tuition in India and abroad is inflating at 8–10% a year. Traditional child endowment policies only return 4.5%.",
      strategy:
        "We combine core Flexi-Cap, Large & Mid-Cap, and Dynamic Balanced Advantage funds—automatically shifting gains into safe debt 24 months before your child's college admission.",
      tags: ["Flexi-Cap Core", "Balanced Advantage", "Automated Goal Glide-Path"],
    },
    {
      icon: Briefcase,
      badge: "BASKET 03 • HORIZON: 10 TO 25+ YEARS",
      title: "Financial Freedom, Retirement & SWP Pension",
      target: "12% – 15%+ Historical Equity CAGR • Wealth Multiplier",
      problem: "A ₹1 Lakh/month lifestyle today will cost ₹2.65 Lakh/month in 15 years at 6.7% inflation.",
      strategy:
        "We deploy Step-Up SIPs across high-conviction Mid-Cap, Small-Cap, Multi-Asset, and Nifty 50 Index funds during your earning years, transitioning into a tax-efficient Systematic Withdrawal Plan (SWP) at retirement.",
      tags: ["10% Annual Step-Up SIP", "Mid & Small-Cap Alpha", "Tax-Smart Retirement SWP"],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* 1. HERO SECTION + VISUAL STEP-UP SIP MULTIPLIER CARD */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 space-y-5">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300 bg-emerald-50 px-3.5 py-1.5 text-xs font-bold text-emerald-900">
            <TrendingUp className="h-4 w-4 text-emerald-600" /> AMFI Registered Mutual Fund Desk • 40+ AMCs
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-navy-900 tracking-tight leading-[1.1]">
            {content.mf_hero_title}
          </h1>
          <p className="text-base text-slate-600 leading-relaxed">
            {content.mf_hero_subtitle}
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="/#consultation"
              className="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold rounded-xl transition inline-flex items-center gap-2 shadow-lg shadow-emerald-600/20"
            >
              Get a Free Mutual Fund Overlap X-Ray <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/calculators"
              className="px-5 py-3.5 bg-white hover:bg-slate-100 text-navy-900 border border-slate-300 text-xs sm:text-sm font-bold rounded-xl transition inline-flex items-center gap-2"
            >
              <Calculator className="w-4 h-4 text-emerald-600" /> Open Step-Up SIP Simulator
            </Link>
          </div>
        </div>

        {/* Right Visual Card: The Power of 10% Annual Step-Up */}
        <div className="lg:col-span-5 bg-navy-900 text-white rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-2xl space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 block">
                Real Compounding Math (15 Years @ 12.5% p.a.)
              </span>
              <h3 className="text-base sm:text-lg font-bold text-white mt-0.5">
                Flat ₹20k SIP vs. 10% Annual Step-Up
              </h3>
            </div>
            <Sparkles className="w-6 h-6 text-emerald-400 shrink-0" />
          </div>

          <div className="space-y-4">
            {/* Option A: Flat SIP */}
            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-400 font-semibold">Option A: Flat ₹20,000/mo for 15 Yrs</span>
                <span className="text-slate-300 font-bold">₹1.01 Crore</span>
              </div>
              <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden">
                <div className="bg-slate-500 h-full w-[58%]" />
              </div>
              <p className="text-[11px] text-slate-400">
                Total Invested: ₹36 Lakh • Wealth Gained: ₹65 Lakh
              </p>
            </div>

            {/* Option B: 10% Step-Up SIP */}
            <div className="p-4 rounded-2xl bg-emerald-950/50 border border-emerald-500/40 space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="text-emerald-300 font-bold">Option B: ₹20,000/mo + 10% Yearly Hike</span>
                <span className="text-emerald-400 font-black text-base">₹1.73 Crore</span>
              </div>
              <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden">
                <div className="bg-emerald-500 h-full w-full" />
              </div>
              <p className="text-[11px] text-emerald-200 font-medium">
                Result: <strong className="text-white">+₹72 Lakh Extra Wealth</strong> just by matching your annual salary increment!
              </p>
            </div>
          </div>

          <div className="pt-2 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
            <span>Direct AMC Folio Custody</span>
            <span className="text-emerald-400 font-semibold">BSE StarMF / NSE NMF II</span>
          </div>
        </div>
      </section>

      {/* 2. THE 3 CORE LIFE BASKETS (Human-Centric Goal Architecture) */}
      <section className="space-y-8">
        <div className="max-w-3xl space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
            Goal-Linked Architecture
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-navy-900">
            We Don&apos;t Sell &ldquo;Trending Funds.&rdquo; We Build 3 Life Baskets.
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Every rupee in your mutual fund portfolio is assigned a specific job, a target return, and a clear withdrawal timeline.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {goalBaskets.map((basket, i) => {
            const Icon = basket.icon;
            return (
              <div
                key={i}
                className="bg-white rounded-3xl p-7 border border-slate-200 shadow-xs hover:shadow-md transition flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3 bg-emerald-50 text-emerald-700 rounded-2xl">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-wider bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md">
                      {basket.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-navy-900">{basket.title}</h3>
                  <div className="text-xs font-bold text-emerald-700 bg-emerald-50/70 px-3 py-1.5 rounded-lg border border-emerald-200/60 inline-block">
                    {basket.target}
                  </div>

                  <p className="text-xs text-slate-600 bg-slate-50 p-3.5 rounded-xl border border-slate-100 leading-relaxed">
                    <strong className="text-slate-900 block mb-0.5">Why Investors Need This:</strong>
                    {basket.problem}
                  </p>

                  <p className="text-xs text-slate-700 leading-relaxed">
                    <strong className="text-navy-900 block mb-0.5">Our Execution Blueprint:</strong>
                    {basket.strategy}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-100">
                  {basket.tags.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] bg-slate-100 text-navy-900 px-2.5 py-1 rounded-md font-semibold"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. GUIDED DISTRIBUTION VS DIY APPS (Why Investors Switch to Sarkar Capital) */}
      <section className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 space-y-6 shadow-xs">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
            The Real Value of Discipline
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 mt-1">
            Sarkar Capital Guided Desk vs. Unassisted DIY Apps
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            AMFI &amp; DALBAR studies prove that investor behavior—not fund expense ratio—determines 80% of real-world wealth creation.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-700 border-collapse">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50 text-navy-900 font-bold uppercase tracking-wider">
                <th className="py-3.5 px-4">Portfolio Pillar</th>
                <th className="py-3.5 px-4">Sarkar Capital (AMFI Registered Desk)</th>
                <th className="py-3.5 px-4">Unassisted DIY Mobile Apps</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr>
                <td className="py-3.5 px-4 font-bold text-navy-900">Scheme Selection &amp; Overlap Check</td>
                <td className="py-3.5 px-4 text-emerald-700 font-semibold">
                  Curated 4–6 funds with &lt;15% stock overlap
                </td>
                <td className="py-3.5 px-4 text-slate-500">
                  Investors often buy 10–15 overlapping star-rated funds
                </td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 font-bold text-navy-900">Market Crash Behavior Coaching</td>
                <td className="py-3.5 px-4 text-emerald-700 font-semibold">
                  Proactive human specialist calls to prevent panic selling
                </td>
                <td className="py-3.5 px-4 text-slate-500">
                  48% of DIY investors pause SIPs during market corrections
                </td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 font-bold text-navy-900">Annual Tax-Harvesting &amp; Rebalancing</td>
                <td className="py-3.5 px-4 text-emerald-700 font-semibold">
                  Guided utilization of ₹1.25L/yr tax-free LTCG exemption
                </td>
                <td className="py-3.5 px-4 text-slate-500">
                  Manual tracking; often results in avoidable LTCG tax bills
                </td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 font-bold text-navy-900">Family Transmission &amp; KYC Service</td>
                <td className="py-3.5 px-4 text-emerald-700 font-semibold">
                  Dedicated desk for nominee updates, transmission &amp; KRA KYC
                </td>
                <td className="py-3.5 px-4 text-slate-500">
                  Automated chatbots &amp; ticketing queues
                </td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 font-bold text-navy-900">Capital Custody &amp; Upfront Fees</td>
                <td className="py-3.5 px-4 font-bold text-navy-900">
                  100% Direct to AMC • ₹0 Upfront Fee (Regulated AMC trail)
                </td>
                <td className="py-3.5 px-4 text-slate-600">
                  100% Direct to AMC • Self-managed execution
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 4. FY 2026-27 MUTUAL FUND TAXATION CHEAT SHEET */}
      <section className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 space-y-6 shadow-xs">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
            Statutory Tax Guide
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 mt-1">
            FY 2026-27 Mutual Fund Taxation Norms in India
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Keep more of what you earn by structuring redemptions around holding periods.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-700 border-collapse">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50 text-navy-900 font-bold uppercase tracking-wider">
                <th className="py-3.5 px-4">Fund Category</th>
                <th className="py-3.5 px-4">Long-Term Holding Period</th>
                <th className="py-3.5 px-4">LTCG Tax Rate</th>
                <th className="py-3.5 px-4">STCG Tax Rate</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr>
                <td className="py-3.5 px-4 font-bold text-navy-900">
                  Equity-Oriented Funds (&gt;65% Indian Equity &amp; Arbitrage)
                </td>
                <td className="py-3.5 px-4">&gt; 12 Months</td>
                <td className="py-3.5 px-4 text-emerald-700 font-bold">
                  12.5% (Gains up to ₹1.25 Lakh/yr are 100% Tax-Free)
                </td>
                <td className="py-3.5 px-4 font-semibold">20% (&lt; 12 Months)</td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 font-bold text-navy-900">
                  Hybrid / Multi-Asset Funds (35% – 65% Domestic Equity)
                </td>
                <td className="py-3.5 px-4">&gt; 24 Months</td>
                <td className="py-3.5 px-4 text-emerald-700 font-bold">12.5%</td>
                <td className="py-3.5 px-4">As per Individual Tax Slab</td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 font-bold text-navy-900">
                  Debt, Liquid &amp; Overnight Funds (&lt;35% Equity)
                </td>
                <td className="py-3.5 px-4">Any Holding Period</td>
                <td className="py-3.5 px-4 text-slate-600 font-medium" colSpan={2}>
                  Taxed at applicable individual income tax slab rate (Only upon actual redemption, not annually like bank FDs)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 5. AEO / SEO INVESTOR FAQ SECTION */}
      <section className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 space-y-8 shadow-xs">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
            Mutual Fund FAQs
          </span>
          <h2 className="text-2xl font-extrabold text-navy-900 mt-1">
            Common Questions About SIPs &amp; Portfolio Reviews
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
            <h3 className="text-sm font-bold text-navy-900 flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-emerald-600 shrink-0" />
              How many mutual funds should I ideally own?
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Just 4 to 6 well-chosen funds across Flexi-Cap, Index, Mid-Cap, and Hybrid/Liquid categories are enough to cover the entire Indian market. Owning 12+ funds creates heavy stock overlap and makes rebalancing impossible.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
            <h3 className="text-sm font-bold text-navy-900 flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-emerald-600 shrink-0" />
              Can I pause, increase, or withdraw my SIP anytime?
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Yes! Open-ended mutual funds (except ELSS 80C tax-savers which have a 3-year lock-in) have zero lock-in. You can pause your SIP, step it up annually, or redeem funds to your bank account within 1–2 working days.
            </p>
          </div>
        </div>
      </section>

      {/* 6. CTA BRIDGE */}
      <section className="bg-navy-900 text-white rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="space-y-2 text-center md:text-left">
          <div className="inline-flex items-center gap-1.5 text-xs text-emerald-400 font-semibold uppercase tracking-wider">
            <Calculator className="w-4 h-4" /> Ready to Build Your SIP Roadmap?
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold">
            Book Your Free 30-Minute Mutual Fund Portfolio X-Ray
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
            Bring your existing portfolio or your monthly savings target. We will eliminate overlapping schemes and map a clear path to your family&apos;s financial goals.
          </p>
        </div>
        <Link
          href="/#consultation"
          className="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold rounded-xl transition flex items-center gap-2 shrink-0 shadow-lg"
        >
          Schedule My Free Portfolio X-Ray <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </div>
  );
}
