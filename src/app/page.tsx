"use client";

import { useEffect, useState } from "react";
import ConsultationForm from "@/components/ConsultationForm";
import SipCalculator from "@/components/SipCalculator";
import PartnerRail from "@/components/PartnerRail";
import HeroWealthCard from "@/components/HeroWealthCard";
import {
  TrendingUp,
  ShieldCheck,
  LineChart,
  Landmark,
  ShieldAlert,
  Layers,
  Award,
  ArrowRight,
  Calculator,
  AlertTriangle,
  CheckCircle2,
  HelpCircle,
  Sparkles,
  Users,
  Briefcase,
  GraduationCap,
} from "lucide-react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

export default function Home() {
  const [content, setContent] = useState<Record<string, string>>({
    hero_badge: "AMFI Registered Mutual Fund Distributor • Kolkata & Pan-India Desk",
    hero_title: "Turn Your Monthly Income Into Generational Wealth.",
    hero_subtitle:
      "Most investors lose 3–4% of their annual returns to random fund picking, bank relationship manager mis-selling, and inflation. We help salaried professionals, families, and HNIs build disciplined, goal-engineered portfolios—with 100% direct-to-AMC security.",
    stat_custody_val: "₹0",
    stat_custody_label: "Client Fund Custody (100% Direct to AMC/Clearing)",
    stat_partners_val: "40+",
    stat_partners_label: "Empaneled Mutual Fund AMCs",
    stat_execution_val: "100%",
    stat_execution_label: "Paperless Digital Onboarding",
  });

  useEffect(() => {
    async function loadDynamicContent() {
      const { data } = await supabase.from("site_content").select("*");
      if (data && data.length > 0) {
        const mapped: Record<string, string> = {};
        data.forEach((row: { key: string; value: string }) => {
          mapped[row.key] = row.value;
        });
        setContent((prev) => ({ ...prev, ...mapped }));
      }
    }
    loadDynamicContent();
  }, []);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Who is Sarkar Capital and how does it help Indian investors?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sarkar Capital Private Limited is an AMFI-registered mutual fund distributor and institutional financial intermediary headquartered in Khardaha, Kolkata (West Bengal) serving investors pan-India under NIC codes 66120 and 66220. We design goal-linked mutual fund SIPs, facilitate HDFC Securities & IIFL equity demat accounts, distribute AAA corporate bonds/SGBs, and structure pure term & health insurance."
        }
      },
      {
        "@type": "Question",
        "name": "Is my money safe? Does Sarkar Capital ever hold my funds?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Your money is 100% protected by our strict non-custodial clearing architecture. Sarkar Capital never accepts, pools, or holds client money in corporate accounts. Every rupee you invest moves directly from your verified bank account to SEBI-regulated clearing corporations (ICCL / NSE Clearing), the respective Mutual Fund AMC, or IRDAI-licensed insurers."
        }
      },
      {
        "@type": "Question",
        "name": "How much does Sarkar Capital charge for portfolio reviews and SIP planning?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Retail investors pay ₹0 upfront consultation or portfolio review fees. As an AMFI-registered mutual fund distributor, we are compensated via standard regulated trail commissions directly by the Asset Management Companies."
        }
      },
      {
        "@type": "Question",
        "name": "Can I review or consolidate my existing mutual funds bought on other apps?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. During our complimentary 30-minute Portfolio X-Ray, we analyze your existing mutual fund holdings for portfolio overlap, high expense ratios, underperforming schemes, and capital gains tax optimization without forcing unnecessary redemptions."
        }
      }
    ]
  };

  const wealthTraps = [
    {
      tag: "WEALTH TRAP #1",
      title: "The 'Random App' Fund Collector",
      problem:
        "Buying 10 to 15 trending mutual funds based on YouTube videos or star ratings leads to 70%+ stock overlap—giving you average index returns with double the risk.",
      solution:
        "We engineer a focused 4-to-6 fund core & satellite portfolio mapped to exact target dates, rebalanced annually.",
    },
    {
      tag: "WEALTH TRAP #2",
      title: "Idle Cash Losing to 7% Inflation",
      problem:
        "Leaving ₹5 Lakh to ₹25 Lakh sitting in a 3% savings account or low-yield bank FD quietly erodes your family's real purchasing power every single year.",
      solution:
        "We deploy idle reserves into Overnight/Arbitrage funds, Sovereign Gold Bonds, and 7.8%–8.6% CRISIL AAA Corporate FDs.",
    },
    {
      tag: "WEALTH TRAP #3",
      title: "Bank RM Endowment & ULIP Mis-Selling",
      problem:
        "Traditional insurance-cum-investment plans lock your hard-earned money for 15 years at sub-inflation 4.5% returns while leaving your family under-insured.",
      solution:
        "We strictly separate protection from growth: ₹1Cr–₹2Cr Pure Term Life + Comprehensive Health Floater + High-Growth Equity SIPs.",
    },
  ];

  const lifeStageBlueprints = [
    {
      icon: Briefcase,
      stage: "Salaried & Young Professionals (Age 24–35)",
      goal: "Aggressive Compounding & Tax Optimization",
      strategy: "75% Flexi/Mid-Cap Step-Up SIPs • 15% Nifty 50 Index • 10% Liquid Emergency Fund + Pure Term Cover",
      example: "A ₹15,000/mo SIP stepped up by 10% annually grows into ₹1.30 Crore in 15 years (@ 12.5% CAGR).",
      ctaText: "Start Your Step-Up Blueprint",
      link: "/calculators",
    },
    {
      icon: GraduationCap,
      stage: "Growing Families & Parents (Age 32–48)",
      goal: "Child Higher Education & Home Upgrade Corpus",
      strategy: "60% Core Equity Funds • 25% Balanced Advantage / SGBs • 15% AAA Corporate Bonds + ₹25L Family Health Cover",
      example: "Build a dedicated ₹65 Lakh global university fund over 12 years without touching your retirement savings.",
      ctaText: "Explore Mutual Fund Baskets",
      link: "/services/mutual-funds",
    },
    {
      icon: Users,
      stage: "Retirees, Business Owners & HNIs (Age 48+)",
      goal: "Capital Safety, Regular Cash-Flow & Tax-Free Gains",
      strategy: "50% AAA Corporate FDs & 54EC Tax-Saver Bonds • 30% Hybrid SWP Funds • 20% Direct Equity / PMS",
      example: "Generate predictable 7.8%–8.6% fixed payouts and save up to ₹10 Lakh in property LTCG taxes via 54EC bonds.",
      ctaText: "Explore Fixed Income Desk",
      link: "/services/fixed-income",
    },
  ];

  return (
    <div className="space-y-20 py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* 1. HERO SECTION: Human Story + Visual Wealth Card + Lead Magnet Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Super-Writer Pitch + Interactive Wealth Visual */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300 bg-emerald-50 px-3.5 py-1.5 text-xs font-bold text-emerald-900 shadow-2xs">
              <ShieldCheck className="h-4 w-4 text-emerald-600" /> {content.hero_badge}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-black tracking-tight text-navy-900 leading-[1.08]">
              {content.hero_title}
            </h1>

            <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
              {content.hero_subtitle}
            </p>

            {/* Quick Trust Metrics */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 py-4 px-5 bg-white rounded-2xl border border-slate-200/90 shadow-xs">
              <div>
                <div className="text-2xl sm:text-3xl font-black text-navy-900">{content.stat_custody_val}</div>
                <div className="text-[11px] font-medium text-slate-500 mt-0.5">{content.stat_custody_label}</div>
              </div>
              <div className="border-x border-slate-100 px-3 sm:px-5">
                <div className="text-2xl sm:text-3xl font-black text-emerald-600">{content.stat_partners_val}</div>
                <div className="text-[11px] font-medium text-slate-500 mt-0.5">{content.stat_partners_label}</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-navy-900">{content.stat_execution_val}</div>
                <div className="text-[11px] font-medium text-slate-500 mt-0.5">{content.stat_execution_label}</div>
              </div>
            </div>

            {/* Embedded Visual Hero Wealth Dashboard */}
            <HeroWealthCard />
          </div>

          {/* Right Column: High-Converting Portfolio X-Ray Lead Form */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <ConsultationForm />
          </div>
        </div>
      </section>

      {/* 2. INSTITUTIONAL ECOSYSTEM RAIL */}
      <PartnerRail />

      {/* 3. THE 3 SILENT WEALTH TRAPS WE SOLVE (Problem -> Solution Storytelling) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-rose-700 bg-rose-50 border border-rose-200 px-3 py-1 rounded-full">
            <AlertTriangle className="w-3.5 h-3.5" /> Why Most Retail Portfolios Underperform
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
            Stop Guessing With Your Hard-Earned Money.
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Having a Demat app or buying mutual funds is easy. Building a cohesive portfolio that survives market crashes and beats inflation requires institutional discipline.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {wealthTraps.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-7 border border-slate-200 shadow-xs hover:shadow-md transition flex flex-col justify-between space-y-6"
            >
              <div className="space-y-3">
                <span className="text-[10px] font-black uppercase tracking-widest text-rose-700 bg-rose-50 px-2.5 py-1 rounded-md inline-block">
                  {item.tag}
                </span>
                <h3 className="text-xl font-bold text-navy-900">{item.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                  <strong className="text-slate-900 block mb-1">The Mistake:</strong>
                  {item.problem}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200/80 space-y-1">
                <span className="text-[11px] font-bold text-emerald-900 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> The Sarkar Capital Fix:
                </span>
                <p className="text-xs text-emerald-950 leading-relaxed font-medium">
                  {item.solution}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. CORE PRODUCT DESKS (Customer Benefit + Regulated Execution) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between md:items-end mb-10 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
              One Roof • Four Regulated Desks
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 mt-1">
              Every Asset Class Your Family Needs
            </h2>
          </div>
          <Link
            href="/services"
            className="text-xs sm:text-sm font-bold text-navy-900 hover:text-emerald-700 inline-flex items-center gap-1.5"
          >
            Compare All Products &amp; Tax Rules <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Mutual Funds */}
          <div className="bg-white rounded-3xl p-7 border border-slate-200 shadow-xs hover:border-emerald-500/60 hover:shadow-lg transition flex flex-col justify-between space-y-5">
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <div className="p-3 bg-emerald-50 text-emerald-700 rounded-2xl">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <span className="text-[10px] font-bold uppercase bg-emerald-50 text-emerald-800 px-2.5 py-1 rounded-md">
                  40+ AMCs
                </span>
              </div>
              <h3 className="text-lg font-bold text-navy-900">Mutual Funds &amp; Step-Up SIPs</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Goal-mapped Equity, Flexi-Cap, Hybrid, Debt, and ELSS tax-saving portfolios. Zero overlap, annual rebalancing, and direct BSE StarMF / NSE clearing.
              </p>
            </div>
            <Link
              href="/services/mutual-funds"
              className="text-xs font-bold text-emerald-700 hover:text-emerald-800 inline-flex items-center gap-1 pt-3 border-t border-slate-100"
            >
              Explore Mutual Fund Desk <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Equities */}
          <div className="bg-white rounded-3xl p-7 border border-slate-200 shadow-xs hover:border-blue-500/60 hover:shadow-lg transition flex flex-col justify-between space-y-5">
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <div className="p-3 bg-blue-50 text-blue-700 rounded-2xl">
                  <LineChart className="h-6 w-6" />
                </div>
                <span className="text-[10px] font-bold uppercase bg-blue-50 text-blue-800 px-2.5 py-1 rounded-md">
                  HDFC &amp; IIFL
                </span>
              </div>
              <h3 className="text-lg font-bold text-navy-900">Equities &amp; Demat Desk</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Open paperless NSDL/CDSL Demat accounts backed by our Authorised Person desks with HDFC Securities &amp; IIFL. Fundamental research + dedicated dealer support.
              </p>
            </div>
            <Link
              href="/services/equities"
              className="text-xs font-bold text-blue-700 hover:text-blue-800 inline-flex items-center gap-1 pt-3 border-t border-slate-100"
            >
              Compare HDFC vs IIFL Desk <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Fixed Income */}
          <div className="bg-white rounded-3xl p-7 border border-slate-200 shadow-xs hover:border-purple-500/60 hover:shadow-lg transition flex flex-col justify-between space-y-5">
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <div className="p-3 bg-purple-50 text-purple-700 rounded-2xl">
                  <Landmark className="h-6 w-6" />
                </div>
                <span className="text-[10px] font-bold uppercase bg-purple-50 text-purple-800 px-2.5 py-1 rounded-md">
                  7.8% – 8.6% Yield
                </span>
              </div>
              <h3 className="text-lg font-bold text-navy-900">Fixed Income &amp; Tax Bonds</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Beat bank FD rates safely with CRISIL AAA Corporate FDs (Bajaj, Mahindra, HDFC), Sovereign Gold Bonds (SGBs), and 54EC Property Capital Gains Tax-Exemption Bonds.
              </p>
            </div>
            <Link
              href="/services/fixed-income"
              className="text-xs font-bold text-purple-700 hover:text-purple-800 inline-flex items-center gap-1 pt-3 border-t border-slate-100"
            >
              Explore Fixed Income Desk <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Insurance */}
          <div className="bg-white rounded-3xl p-7 border border-slate-200 shadow-xs hover:border-rose-500/60 hover:shadow-lg transition flex flex-col justify-between space-y-5">
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <div className="p-3 bg-rose-50 text-rose-700 rounded-2xl">
                  <ShieldAlert className="h-6 w-6" />
                </div>
                <span className="text-[10px] font-bold uppercase bg-rose-50 text-rose-800 px-2.5 py-1 rounded-md">
                  Zero ULIPs
                </span>
              </div>
              <h3 className="text-lg font-bold text-navy-900">Pure Term &amp; Health Cover</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Unbundled ₹1Cr+ Pure Term Life policies and Zero-Sublimit Family Health Floaters. We audit policy fine print so your family never faces claim rejection.
              </p>
            </div>
            <Link
              href="/services/insurance"
              className="text-xs font-bold text-rose-700 hover:text-rose-800 inline-flex items-center gap-1 pt-3 border-t border-slate-100"
            >
              Audit Your Family Cover <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. LIFE-STAGE WEALTH BLUEPRINTS (Relatable Customer Personas) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-navy-900 text-white rounded-3xl p-8 sm:p-12 space-y-10 shadow-xl">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
              Tailored To Your Life Stage
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold">
              How Investors Use Sarkar Capital
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Every rupee in your portfolio should have a name and a deadline. Here is how we structure wealth across three core investor journeys:
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {lifeStageBlueprints.map((bp, i) => {
              const Icon = bp.icon;
              return (
                <div
                  key={i}
                  className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between space-y-5 hover:border-emerald-500/50 transition"
                >
                  <div className="space-y-3">
                    <div className="p-2.5 bg-emerald-500/15 text-emerald-400 w-fit rounded-xl">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-white">{bp.stage}</h3>
                    <div className="text-xs font-semibold text-emerald-400">
                      Focus: {bp.goal}
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed pt-1 border-t border-slate-800">
                      <strong className="text-white block mb-1">Recommended Split:</strong>
                      {bp.strategy}
                    </p>
                    <p className="text-xs text-slate-400 italic bg-slate-950/60 p-3 rounded-xl border border-slate-800/80">
                      &ldquo;{bp.example}&rdquo;
                    </p>
                  </div>

                  <Link
                    href={bp.link}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 hover:text-emerald-300 pt-2"
                  >
                    {bp.ctaText} <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. THE SARKAR CAPITAL CLEARING STANDARD (Zerodha-Style Transparency) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 space-y-8 shadow-xs">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
              100% Non-Custodial Safety Architecture
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 mt-1">
              Why Your Money Is Always Safe With Us
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
              We never touch, pool, or hold your money in any Sarkar Capital bank account. You get the personal guidance of a dedicated family wealth specialist with the institutional security of direct exchange clearing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-2">
              <span className="text-xs font-black text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded-md">
                STEP 01 • YOU APPROVE
              </span>
              <h4 className="text-base font-bold text-navy-900 pt-2">
                1-Click Digital Mandate
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                We prepare your customized investment basket. You review and approve every order on your phone via UPI, Net Banking, or OTM mandate.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-2">
              <span className="text-xs font-black text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded-md">
                STEP 02 • DIRECT CLEARING
              </span>
              <h4 className="text-base font-bold text-navy-900 pt-2">
                Straight to AMC &amp; Exchange
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Your money routes directly from your bank account to Indian Clearing Corporation (ICCL), NSE Clearing, or the Mutual Fund AMC.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-2">
              <span className="text-xs font-black text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded-md">
                STEP 03 • YOUR PERSONAL FOLIO
              </span>
              <h4 className="text-base font-bold text-navy-900 pt-2">
                100% Ownership in Your Name
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Mutual fund units and shares credit directly into your personal PAN-linked Folio or NSDL/CDSL Demat account—verifiable anytime on MF Central.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. INTERACTIVE CALCULATOR SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-700 mb-1">
              <Calculator className="w-4 h-4" /> Test Your Own Numbers
            </div>
            <h2 className="text-3xl font-extrabold text-navy-900">
              See How Fast Your Monthly SIP Can Compound
            </h2>
            <p className="text-sm text-slate-600 mt-1 max-w-xl">
              Drag the sliders below and toggle the 10% Annual Step-Up switch to see how small annual increments transform your final retirement or education corpus.
            </p>
          </div>
          <Link
            href="/calculators"
            className="inline-flex items-center gap-2 text-sm font-bold text-emerald-700 hover:text-emerald-800 border-b-2 border-emerald-600 pb-0.5"
          >
            Try Lumpsum &amp; Inflation Calculator <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <SipCalculator />
      </section>

      {/* 8. AEO / GEO HIGH-INTENT INVESTOR FAQs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 space-y-8 shadow-xs">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
              Clear Answers • Zero Jargon
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 mt-1">
              Questions Investors Ask Before Booking a Call
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Transparent answers on safety, fees, existing portfolios, and how we work across Kolkata &amp; India.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
              <h3 className="text-sm font-bold text-navy-900 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                Who is Sarkar Capital and how are you regulated?
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Sarkar Capital Private Limited is an AMFI-registered mutual fund distributor and institutional financial intermediary headquartered in Khardaha, Kolkata (West Bengal) serving investors pan-India under NIC codes 66120 and 66220, led by NISM-Series-V-A certified specialists.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
              <h3 className="text-sm font-bold text-navy-900 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                Is my money safe? Do I ever transfer funds to Sarkar Capital?
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Never. We operate on a 100% non-custodial model. Every rupee you invest moves directly from your bank account to SEBI-regulated clearing corporations (ICCL / NSE Clearing), the Mutual Fund AMC, or RBI. Your investments sit in your own PAN-linked Folio or Demat account.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
              <h3 className="text-sm font-bold text-navy-900 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                How much do you charge for the 1-on-1 Portfolio X-Ray?
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Retail investors pay ₹0 upfront consultation or review fees. When you invest through our AMFI-registered regular distribution desk, we receive standard regulated trail commissions directly from the respective Asset Management Companies—with full disclosure.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
              <h3 className="text-sm font-bold text-navy-900 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                I already have mutual funds on Groww/Zerodha/Bank apps. Can you review them?
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Absolutely. Most investors come to us with 8–15 scattered funds. We run a complete overlap and performance X-Ray, show you which schemes to keep or consolidate, and help you structure a clean, tax-efficient roadmap.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
