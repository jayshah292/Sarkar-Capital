import Link from "next/link";
import ConsultationForm from "@/components/ConsultationForm";
import SipCalculator from "@/components/SipCalculator";
import PartnerRail from "@/components/PartnerRail";
import { supabase } from "@/lib/supabase";
import {
  ShieldCheck,
  TrendingUp,
  Award,
  Building2,
  HeartHandshake,
  ArrowRight,
  Layers,
  Briefcase,
  Landmark,
  Globe2,
  Home as HomeIcon,
  CheckCircle2,
  Coins,
  FileSpreadsheet,
  PieChart,
  LineChart,
  Lock,
} from "lucide-react";

export const revalidate = 0;

async function getSiteContent() {
  try {
    const { data } = await supabase.from("site_content").select("key, value");
    const contentMap: Record<string, string> = {};
    if (data) {
      data.forEach((item: { key: string; value: string }) => {
        contentMap[item.key] = item.value;
      });
    }
    return contentMap;
  } catch {
    return {};
  }
}

export default async function Home() {
  const c = await getSiteContent();

  const highlightCircles = [
    {
      value: c.stat_aum_val || "₹10 Cr+",
      label: "AUM Managed & Guided",
      sub: "Disciplined Family Portfolios",
      icon: TrendingUp,
      ringColor: "border-emerald-500 bg-gradient-to-br from-emerald-50 via-white to-emerald-100/70",
      textColor: "text-emerald-950",
      badgeColor: "bg-emerald-600 text-white",
    },
    {
      value: c.stat_years_val || "25+ Yrs",
      label: "Years in Business",
      sub: "Trusted Market Experience",
      icon: Award,
      ringColor: "border-amber-500 bg-gradient-to-br from-amber-50 via-white to-amber-100/70",
      textColor: "text-navy-900",
      badgeColor: "bg-amber-500 text-navy-950",
    },
    {
      value: c.stat_partners_val || "40+",
      label: "AMCs Empaneled",
      sub: "Leading Mutual Fund Houses",
      icon: Building2,
      ringColor: "border-blue-500 bg-gradient-to-br from-blue-50 via-white to-blue-100/70",
      textColor: "text-navy-900",
      badgeColor: "bg-blue-600 text-white",
    },
    {
      value: c.stat_lives_val || "2,500+",
      label: "Lives Protected",
      sub: "Life & Health Policies Covered",
      icon: HeartHandshake,
      ringColor: "border-rose-500 bg-gradient-to-br from-rose-50 via-white to-rose-100/70",
      textColor: "text-navy-900",
      badgeColor: "bg-rose-600 text-white",
    },
  ];

  const twelveProducts = [
    {
      title: "Mutual Fund",
      tag: "SIP • Lumpsum • ELSS",
      desc: "Equity, Hybrid, Debt, Liquid & Tax-Saving funds across 40+ empaneled AMCs.",
      items: ["SBI, HDFC, ICICI, Nippon", "Parag Parikh & Quant AMC", "Goal-Linked SIP Portfolios"],
      icon: PieChart,
    },
    {
      title: "Demat Account",
      tag: "Equities • IPO • F&O",
      desc: "Seamless paperless Demat & trading onboarding with premier broking houses.",
      items: ["Nuvama & Axis Securities", "IIFL Capital Execution Desk", "100% Direct NSDL/CDSL Custody"],
      icon: LineChart,
    },
    {
      title: "PMS",
      tag: "Portfolio Management",
      desc: "Concentrated high-conviction equity portfolios tailored for HNI wealth creation.",
      items: ["Stallion & Carnelian PMS", "Nuvama &Prudent Access", "Direct Stock Ownership"],
      icon: Briefcase,
    },
    {
      title: "AIF",
      tag: "Alternative Investment Funds",
      desc: "Category II & III AIFs offering private credit, long-short, and structured growth.",
      items: ["Institutional HNI Mandates", "Unlisted & Structured Alpha", "Leading Asset Managers"],
      icon: Layers,
    },
    {
      title: "MLD",
      tag: "Market Linked Debentures",
      desc: "Principal-protected and structured payoff debentures linked to market indices.",
      items: ["Downside Capital Buffer", "Tax-Efficient Structuring", "Nuvama & Creso Desk"],
      icon: ShieldCheck,
    },
    {
      title: "Smallcase",
      tag: "Thematic Stock Baskets",
      desc: "Curated, rules-based portfolios of stocks & ETFs built around powerful market themes.",
      items: ["Zero Lock-In Period", "Direct Demat Credit", "Curated Rebalancing"],
      icon: FileSpreadsheet,
    },
    {
      title: "ETF",
      tag: "Exchange Traded Funds",
      desc: "Low-cost passive index, Gold, Silver, and sectoral ETFs traded directly on NSE/BSE.",
      items: ["Nifty 50 & Next 50 ETFs", "Gold & Silver Bullion ETFs", "Real-Time Liquidity"],
      icon: Coins,
    },
    {
      title: "FD",
      tag: "Corporate Fixed Deposits",
      desc: "High-yield AAA/AA+ rated Corporate & Housing Finance Fixed Deposits.",
      items: ["Bajaj, Shriram & Mahindra", "ICICI Home, LIC & PNB Housing", "Predictable Senior Citizen Payouts"],
      icon: Lock,
    },
    {
      title: "Bonds",
      tag: "Sovereign & Corporate Debt",
      desc: "Primary, Secondary, RBI Floating Rate, 54EC Capital Gain & Secured NCDs.",
      items: ["Primary | Secondary | RBI Bonds", "54EC Capital Gain Tax-Saver", "High-Yield Secured NCDs"],
      icon: Landmark,
    },
    {
      title: "GIFT City Products",
      tag: "IFSC Global Investing",
      desc: "USD-denominated inbound and outbound funds regulated by IFSCA at GIFT City.",
      items: ["Global Diversification in USD", "Tax-Neutral IFSC Structure", "For Resident & NRI Investors"],
      icon: Globe2,
    },
    {
      title: "Home Loan",
      tag: "Loans & Mortgage Desk",
      desc: "Competitive interest rates and fast sanctioning for property and business financing.",
      items: ["Home Loan & Loan Against Property", "Car, Personal & Business Loans", "SME & Lease Rental Discounting"],
      icon: HomeIcon,
    },
    {
      title: "NRI Products",
      tag: "Global Indian Wealth Desk",
      desc: "End-to-end NRE/NRO Mutual Funds, PIS/Non-PIS Demat, GIFT City & India Retirement Plans.",
      items: ["NRE / NRO Compliant Onboarding", "GIFT City USD Funds & PMS", "Dedicated Digital Relationship Desk"],
      icon: Globe2,
    },
  ];

  return (
    <div className="space-y-0">
      {/* 1. HERO SECTION + HIGHLIGHTED CIRCULAR TRUST METRICS */}
      <section className="relative bg-gradient-to-b from-slate-50 via-white to-slate-100/70 pt-10 pb-16 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Column: Core Proposition + Highlighted Circular Badges */}
            <div className="lg:col-span-7 space-y-8">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950 text-emerald-300 text-xs font-bold tracking-wide shadow-xs">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>
                  {c.hero_badge || "AMFI Registered Unified Wealth Platform • Mumbai, Kolkata & Pan-India"}
                </span>
              </div>

              <div className="space-y-4">
                <h1 className="text-3xl sm:text-5xl font-black text-navy-900 tracking-tight leading-[1.12]">
                  {c.hero_title || "One Unified Platform for Your Family’s Complete Wealth & Protection."}
                </h1>
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                  {c.hero_subtitle ||
                    "Backed by 25+ years of financial experience, Sarkar Capital brings Mutual Funds, Demat, PMS, AIF, Corporate FDs, Bonds, GIFT City, Loans, and Life/Health Insurance under one trusted roof—with 100% direct institutional custody."}
                </p>
              </div>

              {/* HIGHLIGHTED CIRCULAR BADGES (Tinny's Specific Requirement) */}
              <div className="pt-2">
                <p className="text-[11px] font-extrabold uppercase tracking-widest text-emerald-800 mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                  Institutional Scale &amp; Pedigree
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5">
                  {highlightCircles.map((item, idx) => {
                    const IconComponent = item.icon;
                    return (
                      <div
                        key={idx}
                        className="flex flex-col items-center text-center group"
                      >
                        {/* Outer Highlighted Circle */}
                        <div
                          className={`w-36 h-36 sm:w-40 sm:h-40 rounded-full border-4 ${item.ringColor} shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center p-4 relative group-hover:scale-105`}
                        >
                          <div
                            className={`w-8 h-8 rounded-full ${item.badgeColor} flex items-center justify-center shadow-xs mb-1.5`}
                          >
                            <IconComponent className="w-4 h-4" />
                          </div>
                          <span
                            className={`text-2xl sm:text-3xl font-black ${item.textColor} tracking-tight leading-none`}
                          >
                            {item.value}
                          </span>
                          <span className="text-[11px] font-extrabold text-slate-800 mt-1.5 leading-tight">
                            {item.label}
                          </span>
                          <span className="text-[9px] font-semibold text-slate-500 mt-0.5 leading-tight">
                            {item.sub}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Quick Trust Strip */}
              <div className="bg-navy-900 text-white rounded-2xl p-4 sm:p-5 flex flex-wrap items-center justify-between gap-4 shadow-md">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-300 font-black text-sm">
                    ₹0
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-extrabold text-white">
                      100% Non-Custodial Safety Guarantee
                    </div>
                    <div className="text-[11px] text-slate-300">
                      Every rupee routes directly to AMCs, Clearing Corporations (ICCL/NSDL), or Insurers.
                    </div>
                  </div>
                </div>
                <Link
                  href="/about"
                  className="text-xs font-bold text-emerald-300 hover:text-emerald-200 inline-flex items-center gap-1 underline underline-offset-4"
                >
                  Meet Founder Abhijit Sarkar <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Right Column: Lead Gen Form */}
            <div className="lg:col-span-5" id="consultation-form">
              <ConsultationForm />
            </div>
          </div>
        </div>
      </section>

      {/* 2. SECOND FOLD: SIP COMPOUNDING CALCULATOR */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                Interactive Wealth Planner
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-navy-900 mt-2">
                Calculate Your Family&apos;s Future Corpus
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                See how disciplined monthly SIPs and a 10% annual step-up build generational wealth.
              </p>
            </div>
            <Link
              href="/calculators"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 hover:text-emerald-950 bg-emerald-50 px-4 py-2.5 rounded-xl border border-emerald-200 transition"
            >
              Open Lumpsum &amp; Inflation Calculators <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <SipCalculator />
        </div>
      </section>

      {/* 3. UNIFIED MULTI-PRODUCT PLATFORM (KOTAK CONNECT PLUS INSPIRED) */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Red/Navy Unified Header Banner */}
          <div className="bg-gradient-to-r from-navy-900 via-navy-800 to-emerald-950 rounded-3xl p-6 sm:p-10 text-white shadow-xl flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <span className="inline-block text-[11px] font-extrabold uppercase tracking-widest bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 px-3 py-1 rounded-full">
                One-Stop Financial Distribution Platform
              </span>
              <h2 className="text-2xl sm:text-4xl font-black tracking-tight">
                Sarkar Capital — A Unified Multi-Product Platform
              </h2>
              <p className="text-slate-300 text-sm sm:text-base">
                12 regulated investment, credit, global, and protection verticals under one relationship desk.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/services"
                className="bg-emerald-500 hover:bg-emerald-400 text-navy-950 font-black text-xs sm:text-sm px-5 py-3 rounded-xl shadow-md transition inline-flex items-center gap-2"
              >
                Explore Detailed Product Matrix <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* 12 Core Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {twelveProducts.map((prod, idx) => {
              const Icon = prod.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-xs hover:shadow-md hover:border-emerald-500 transition flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-800">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                        {prod.tag}
                      </span>
                    </div>

                    <h3 className="text-lg font-black text-navy-900 border-b-2 border-emerald-600/80 pb-1.5 inline-block">
                      {prod.title}
                    </h3>

                    <p className="text-xs text-slate-600 mt-2.5 leading-relaxed">
                      {prod.desc}
                    </p>

                    <ul className="mt-3 space-y-1.5 border-t border-slate-100 pt-3">
                      {prod.items.map((subItem, sIdx) => (
                        <li
                          key={sIdx}
                          className="text-[11px] font-semibold text-slate-700 flex items-center gap-1.5"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0" />
                          {subItem}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      href="/services"
                      className="text-xs font-extrabold text-emerald-800 hover:text-emerald-950 inline-flex items-center gap-1"
                    >
                      View Details <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <a
                      href="#consultation-form"
                      className="text-[11px] font-bold text-slate-500 hover:text-navy-900"
                    >
                      Enquire →
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Comprehensive Insurance Protection Strip (Matching Screenshot 1) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="bg-white rounded-2xl p-6 border-l-4 border-l-emerald-600 border border-slate-200 shadow-xs">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-black text-navy-900 uppercase tracking-tight">
                  Life Insurance Desk
                </h3>
                <span className="text-[10px] font-bold bg-emerald-50 text-emerald-800 px-2.5 py-1 rounded-full border border-emerald-200">
                  HDFC Life • SBI Life • LIC • Tata AIA • ICICI Life
                </span>
              </div>
              <p className="text-xs text-slate-600 mb-3">
                Protecting 2,500+ lives with pure risk cover and guaranteed family income solutions:
              </p>
              <div className="flex flex-wrap gap-2">
                {["Term Plan", "Traditional Plan", "ULIP", "TULIP", "Retirement Annuity"].map(
                  (item, i) => (
                    <span
                      key={i}
                      className="text-xs font-bold bg-slate-100 text-navy-900 px-3 py-1.5 rounded-lg border border-slate-200 flex items-center gap-1.5"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> {item}
                    </span>
                  )
                )}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border-l-4 border-l-blue-600 border border-slate-200 shadow-xs">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-black text-navy-900 uppercase tracking-tight">
                  General &amp; Health Insurance Desk
                </h3>
                <span className="text-[10px] font-bold bg-blue-50 text-blue-800 px-2.5 py-1 rounded-full border border-blue-200">
                  HDFC Ergo • SBI Gen • Tata AIG • ManipalCigna • ICICI Lombard
                </span>
              </div>
              <p className="text-xs text-slate-600 mb-3">
                Comprehensive retail and commercial risk protection across top insurers:
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Health Insurance",
                  "Motor Insurance",
                  "Fire Insurance",
                  "Engineering Insurance",
                  "Marine Insurance",
                  "Miscellaneous Insurance",
                ].map((item, i) => (
                  <span
                    key={i}
                    className="text-xs font-bold bg-slate-100 text-navy-900 px-3 py-1.5 rounded-lg border border-slate-200 flex items-center gap-1.5"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" /> {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. 23-PARTNER ECOSYSTEM RAIL */}
      <PartnerRail />
    </div>
  );
}
