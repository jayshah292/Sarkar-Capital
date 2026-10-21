"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { TrendingUp, LineChart, Landmark, ShieldAlert, Gem, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";
import { supabase } from "@/lib/supabase";

export default function ServicesHubPage() {
  const [content, setContent] = useState<Record<string, string>>({
    services_hero_title: "Regulated Financial Distribution Architecture",
    services_hero_subtitle:
      "Explore our complete catalogue of SEBI, AMFI, RBI, and IRDAI regulated wealth and protection products. Every transaction settles directly with primary clearing corporations and issuing institutions.",
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

  const desks = [
    {
      title: "Mutual Funds & SIP Planning",
      icon: TrendingUp,
      route: "/services/mutual-funds",
      badge: "AMFI Registered Desk",
      color: "emerald",
      desc: "Systematic investment plans across 40+ AMCs. Equity, hybrid, debt, and tax-saving ELSS portfolios structured around major life milestones with 100% direct AMC execution.",
      highlights: ["Zero client capital custody", "Rupee-cost averaging via SIPs", "Goal-aligned asset rebalancing"],
    },
    {
      title: "Equities & Demat Desk",
      icon: LineChart,
      route: "/services/equities",
      badge: "NIC 66120 • HDFC & IIFL Partner",
      color: "blue",
      desc: "Direct secondary market access powered by corporate Authorised Person alignments with HDFC Securities and IIFL Securities. Paperless onboarding and NSDL/CDSL depository linkage.",
      highlights: ["Institutional research terminals", "Direct ICCL / NSE Clearing settlement", "Low-latency API execution support"],
    },
    {
      title: "Fixed Income & Capital Safety",
      icon: Landmark,
      route: "/services/fixed-income",
      badge: "RBI & AAA Corporate Desks",
      color: "purple",
      desc: "Predictable cash-flow laddering and capital preservation. Sovereign Gold Bonds (SGBs), CRISIL/ICRA AAA-rated Corporate Fixed Deposits, and Section 54EC Capital Gains tax exemption bonds.",
      highlights: ["Sovereign gold appreciation + 2.5% p.a.", "High-yield AAA corporate deposits", "Legal LTCG tax exemption bonds"],
    },
    {
      title: "Insurance & Risk Protection",
      icon: ShieldAlert,
      route: "/services/insurance",
      badge: "NIC 66220 • IRDAI PoSP Framework",
      color: "rose",
      desc: "Unbundled pure risk transfer without high-cost endowment mixing. Protect Human Life Value (HLV) and family medical reserves through certified PoSP frameworks.",
      highlights: ["Pure term life income replacement", "Comprehensive family health floaters", "Zero commission endowment avoidance"],
    },
    {
      title: "HNI Solutions (PMS & AIF)",
      icon: Gem,
      route: "/contact",
      badge: "Qualified Investor Mandates",
      color: "amber",
      desc: "Tailored strategies and concentrated equity/debt mandates for qualified high-net-worth investors requiring bespoke institutional portfolio management.",
      highlights: ["Category II & III Alternative Investments", "Customized portfolio management", "Dedicated HNI advisory desk"],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-16">
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300 bg-emerald-50 px-3.5 py-1 text-xs font-semibold text-emerald-800">
          <ShieldCheck className="h-4 w-4" /> Institutional Product Catalogue
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-navy-900 tracking-tight">
          {content.services_hero_title}
        </h1>
        <p className="text-base text-slate-600 leading-relaxed">
          {content.services_hero_subtitle}
        </p>
      </div>

      {/* Desks Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {desks.map((d, i) => {
          const Icon = d.icon;
          return (
            <div
              key={i}
              className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xs hover:shadow-md transition flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div className="p-3 bg-slate-100 text-navy-900 rounded-2xl">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md">
                    {d.badge}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-navy-900">{d.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{d.desc}</p>
                <ul className="space-y-2 pt-2 border-t border-slate-100 text-xs text-slate-700">
                  {d.highlights.map((h, hIdx) => (
                    <li key={hIdx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href={d.route}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-navy-900 hover:text-emerald-700 transition pt-3 border-t border-slate-100"
              >
                Access Desk Details <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          );
        })}
      </section>

      {/* Non-Custodial Guarantee Banner */}
      <section className="bg-navy-900 rounded-3xl p-8 sm:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg">
        <div className="space-y-2 text-center md:text-left">
          <div className="inline-flex items-center gap-1.5 text-xs text-emerald-400 font-semibold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" /> Zero-Custody Architecture
          </div>
          <h3 className="text-xl sm:text-2xl font-bold">Absolute Security Through Direct Institutional Routing</h3>
          <p className="text-xs text-slate-400 max-w-2xl leading-relaxed">
            Sarkar Capital never pools client capital. All investment remittances flow straight from your registered bank account to SEBI-regulated clearing corporations, AMCs, or RBI.
          </p>
        </div>
        <Link
          href="/#consultation"
          className="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-semibold rounded-xl transition shrink-0 shadow-md"
        >
          Schedule Portfolio Review
        </Link>
      </section>
    </div>
  );
}
