"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  LineChart,
  ShieldCheck,
  ArrowRight,
  Building2,
  Lock,
  CheckCircle2,
  HelpCircle,
  Sparkles,
  Layers,
  Zap,
  Award,
} from "lucide-react";
import { supabase } from "@/lib/supabase";

export default function EquitiesPage() {
  const [content, setContent] = useState<Record<string, string>>({
    eq_hero_title: "Invest in Indian Equities With Institutional Research & Human Desk Support.",
    eq_hero_subtitle:
      "Discount broker apps give you a login screen—and leave you alone when markets get volatile. Open your NSDL/CDSL Demat account through our Authorised Person desks with HDFC Securities & IIFL Securities to combine institutional equity research with a dedicated Kolkata & Pan-India relationship desk.",
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
        "name": "Should I choose HDFC Securities or IIFL Securities through Sarkar Capital?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Choose HDFC Securities if you prefer seamless 3-in-1 banking integration, deep fundamental stock research, and long-term delivery investing. Choose IIFL Securities if you want high-speed execution terminals, advanced charting, IPO/NCD bidding, and customized brokerage tiers."
        }
      },
      {
        "@type": "Question",
        "name": "Where are my shares and trading margins held?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "100% of your purchased shares are credited directly into your personal PAN-linked NSDL or CDSL Demat account. All trading margins settle directly with Indian Clearing Corporation Limited (ICCL) or NSE Clearing—Sarkar Capital never holds client funds or securities."
        }
      },
      {
        "@type": "Question",
        "name": "Can I transfer or link my existing Demat portfolio for review?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Our equity desk can review your existing direct stock holdings for sector over-concentration and quality checks, or help you seamlessly open a secondary institutional Demat account in under 10 minutes via DigiLocker e-KYC."
        }
      }
    ]
  };

  const investorProfiles = [
    {
      icon: Award,
      badge: "PROFILE 01 • LONG-TERM DELIVERY",
      title: "The Quality Stock Accumulator",
      desc: "You want to own 15–20 high-ROE Indian businesses for 5+ years without daily screen noise. Get access to institutional fundamental pick lists, quarterly earnings summaries, and dividend tracking.",
      highlights: ["Institutional Fundamental Research", "Model Stock Baskets", "T+1 Direct Demat Credit"],
    },
    {
      icon: Layers,
      badge: "PROFILE 02 • PASSIVE & PRIMARY MARKETS",
      title: "The ETF, Gold & IPO Investor",
      desc: "Build low-cost passive exposure using Nifty 50 / Nifty Next 50 ETFs, Gold & Silver ETFs, and apply seamlessly to mainboard IPOs, Rights Issues, and Sovereign/Corporate NCDs via UPI ASBA.",
      highlights: ["1-Click UPI ASBA IPO Bidding", "Nifty & Sectoral ETFs", "Secondary Market SGB Access"],
    },
    {
      icon: Zap,
      badge: "PROFILE 03 • ACTIVE & HNI EXECUTION",
      title: "The Active Trader & Pledge Desk",
      desc: "Need zero-lag order execution or want to pledge your existing mutual funds/shares for margin without selling them? Access dedicated dealer phone backup and high-speed trading terminals.",
      highlights: ["Dedicated Dealer Phone Support", "Instant CDSL/NSDL Share Pledging", "Privileged HNI Brokerage Tiers"],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* 1. HERO SECTION + VISUAL DEPOSITORY & CLEARING CARD */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 space-y-5">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-300 bg-blue-50 px-3.5 py-1.5 text-xs font-bold text-blue-900">
            <LineChart className="h-4 w-4 text-blue-600" /> Authorised Person Desk (NIC 66120) • HDFC &amp; IIFL Partner
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-navy-900 tracking-tight leading-[1.1]">
            {content.eq_hero_title}
          </h1>
          <p className="text-base text-slate-600 leading-relaxed">
            {content.eq_hero_subtitle}
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="/#consultation"
              className="px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-bold rounded-xl transition inline-flex items-center gap-2 shadow-lg shadow-blue-600/20"
            >
              Open Institutional Demat Account <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="px-5 py-3.5 bg-white hover:bg-slate-100 text-navy-900 border border-slate-300 text-xs sm:text-sm font-bold rounded-xl transition inline-flex items-center gap-2"
            >
              Request Stock Portfolio Review
            </Link>
          </div>
        </div>

        {/* Right Visual Card: Institutional Equity Custody Architecture */}
        <div className="lg:col-span-5 bg-navy-900 text-white rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-2xl space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-blue-400 block">
                Exchange-Grade Security
              </span>
              <h3 className="text-base sm:text-lg font-bold text-white mt-0.5">
                How Your Demat &amp; Margins Are Protected
              </h3>
            </div>
            <ShieldCheck className="w-6 h-6 text-emerald-400 shrink-0" />
          </div>

          <div className="space-y-3 text-xs">
            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex items-start gap-3">
              <span className="text-xs font-black text-blue-400 bg-blue-950 px-2 py-1 rounded border border-blue-800 shrink-0">
                01
              </span>
              <div>
                <span className="font-bold text-white block">NSDL &amp; CDSL Personal Depository</span>
                <span className="text-slate-400 text-[11px] leading-relaxed">
                  Every share or ETF you buy is held directly in your PAN-linked Central Depository account—never in a pooled broker account.
                </span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex items-start gap-3">
              <span className="text-xs font-black text-emerald-400 bg-emerald-950 px-2 py-1 rounded border border-emerald-800 shrink-0">
                02
              </span>
              <div>
                <span className="font-bold text-white block">ASBA-Style Clearing &amp; T+1 Settlement</span>
                <span className="text-slate-400 text-[11px] leading-relaxed">
                  Funds move straight from your bank to NSE Clearing / ICCL with instant T+1 settlement cycles.
                </span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex items-start gap-3">
              <span className="text-xs font-black text-purple-400 bg-purple-950 px-2 py-1 rounded border border-purple-800 shrink-0">
                03
              </span>
              <div>
                <span className="font-bold text-white block">Human Dealer + App Convenience</span>
                <span className="text-slate-400 text-[11px] leading-relaxed">
                  Trade via mobile/web apps anytime, with a dedicated Sarkar Capital specialist on call when you need execution help.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. HDFC SECURITIES VS IIFL SECURITIES COMPARISON MATRIX */}
      <section className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 space-y-6 shadow-xs">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-blue-700">
            Two Powerhouse Partners • One Dedicated Desk
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 mt-1">
            HDFC Securities vs. IIFL Securities: Which Demat Fits You?
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            We help you onboard onto the exact institutional platform that matches your investing style.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-700 border-collapse">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50 text-navy-900 font-bold uppercase tracking-wider">
                <th className="py-3.5 px-4">Feature / Capability</th>
                <th className="py-3.5 px-4">HDFC Securities (Authorised Person Desk)</th>
                <th className="py-3.5 px-4">IIFL Securities (Institutional Sub-Broker Desk)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr>
                <td className="py-3.5 px-4 font-bold text-navy-900">Best Suited For</td>
                <td className="py-3.5 px-4 text-blue-800 font-semibold">
                  Long-term equity investors, salaried families &amp; HDFC Bank customers
                </td>
                <td className="py-3.5 px-4 text-emerald-800 font-semibold">
                  Active equity/F&amp;O traders, HNI stock pickers &amp; multi-asset investors
                </td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 font-bold text-navy-900">Banking &amp; Margin Flow</td>
                <td className="py-3.5 px-4">
                  Seamless 3-in-1 integration (Bank + Trading + Demat) with zero manual fund transfer lag
                </td>
                <td className="py-3.5 px-4">
                  Instant UPI / NetBanking link with any Indian bank + instant share/MF margin pledging
                </td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 font-bold text-navy-900">Research &amp; Advisory Edge</td>
                <td className="py-3.5 px-4">
                  Institutional fundamental reports, model portfolios &amp; long-term blue-chip picks
                </td>
                <td className="py-3.5 px-4">
                  High-conviction mid-cap research, technical screeners, IPO &amp; NCD primary desk
                </td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 font-bold text-navy-900">Depository &amp; Custody</td>
                <td className="py-3.5 px-4 font-semibold text-slate-900">NSDL / CDSL Direct Investor Custody</td>
                <td className="py-3.5 px-4 font-semibold text-slate-900">NSDL / CDSL Direct Investor Custody</td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 font-bold text-navy-900">Sarkar Capital Desk Support</td>
                <td className="py-3.5 px-4 text-emerald-700 font-semibold" colSpan={2}>
                  Included with both: Paperless KYC setup, portfolio X-Ray, and direct human relationship support
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 3. THREE INVESTOR PERSONAS WE SERVE */}
      <section className="space-y-8">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-700">
            Tailored Secondary Market Access
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-navy-900 mt-1">
            Built for Serious Investors, Not Gamblers
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {investorProfiles.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-7 border border-slate-200 shadow-xs hover:shadow-md transition flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3 bg-blue-50 text-blue-700 rounded-2xl">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-wider bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md">
                      {p.badge}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-navy-900">{p.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{p.desc}</p>
                </div>

                <ul className="space-y-2 pt-4 border-t border-slate-100 text-xs text-slate-700">
                  {p.highlights.map((h, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span className="font-medium">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. AEO FAQs */}
      <section className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 space-y-8 shadow-xs">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-blue-700">
            Demat &amp; Broking FAQs
          </span>
          <h2 className="text-2xl font-extrabold text-navy-900 mt-1">
            Common Questions Before Opening an Equity Desk Account
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
            <h3 className="text-sm font-bold text-navy-900 flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-blue-600 shrink-0" />
              How long does paperless Demat account opening take?
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              With PAN, Aadhaar-linked mobile OTP, and DigiLocker verification, our onboarding desk completes your HDFC Securities or IIFL Demat setup in 10 minutes, with exchange activation typically within 24 working hours.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
            <h3 className="text-sm font-bold text-navy-900 flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-blue-600 shrink-0" />
              Do you offer guaranteed stock tips or assured returns?
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Never. In strict compliance with SEBI and NSE/BSE norms, Sarkar Capital never promises assured returns or executes unauthorized discretionary trades. Every trade is backed by regulated institutional research and explicitly authorized by you.
            </p>
          </div>
        </div>
      </section>

      {/* 5. MANDATORY SEBI RISK DISCLOSURE */}
      <section className="bg-slate-50 border border-slate-300 rounded-3xl p-6 space-y-2 text-xs leading-relaxed text-slate-600">
        <h4 className="font-bold text-slate-900 flex items-center gap-2 uppercase tracking-wider text-[11px]">
          <Lock className="w-4 h-4 text-slate-700" /> Mandatory SEBI Regulatory &amp; Risk Disclosure (NIC 66120)
        </h4>
        <p>
          Investments in the securities market are subject to market risks; read all related documents carefully before investing. As per SEBI study findings on equity Futures &amp; Options (F&amp;O), 9 out of 10 individual traders in the equity F&amp;O segment incurred net losses, and on average, loss-makers registered net trading losses close to ₹50,000 plus 28% more in transaction costs. Sarkar Capital strongly advocates long-term, research-backed delivery investing and asset allocation over speculative leverage.
        </p>
      </section>

      {/* 6. CTA BANNER */}
      <section className="bg-navy-900 text-white rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="space-y-2 text-center md:text-left">
          <div className="inline-flex items-center gap-1.5 text-xs text-blue-400 font-semibold uppercase tracking-wider">
            <Sparkles className="w-4 h-4" /> Assisted Paperless Onboarding
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold">
            Ready to Upgrade Your Equity &amp; Demat Experience?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
            Connect with our equity onboarding desk to set up your HDFC Securities or IIFL Demat account, or request a health check on your existing stock portfolio.
          </p>
        </div>
        <Link
          href="/#consultation"
          className="px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-bold rounded-xl transition flex items-center gap-2 shrink-0 shadow-lg"
        >
          Initiate Demat Setup <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </div>
  );
}
