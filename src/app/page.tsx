"use client";

import { useEffect, useState } from "react";
import ConsultationForm from "@/components/ConsultationForm";
import SipCalculator from "@/components/SipCalculator";
import { TrendingUp, ShieldCheck, LineChart, Landmark, Layers, Award, ArrowRight, Calculator } from "lucide-react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

export default function Home() {
  const [content, setContent] = useState<Record<string, string>>({
    hero_badge: "AMFI Registered • Corporate ARN Desk",
    hero_title: "Disciplined Wealth Distribution for India's Investors",
    hero_subtitle: "We bridge the gap between retail investors and premier financial institutions. Access mutual funds, equities, sovereign gold bonds, and family risk covers under one transparent roof.",
    stat_custody_val: "₹0",
    stat_custody_label: "Direct Client Account Custody",
    stat_partners_val: "40+",
    stat_partners_label: "Empaneled AMCs",
    stat_execution_val: "100%",
    stat_execution_label: "Paperless Execution",
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

  return (
    <div className="space-y-16 py-12">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800">
              <ShieldCheck className="h-4 w-4" /> {content.hero_badge}
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-navy-900 leading-[1.1]">
              {content.hero_title}
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
              {content.hero_subtitle}
            </p>
            <div className="grid grid-cols-3 gap-6 pt-4 border-t border-slate-200">
              <div>
                <div className="text-2xl font-bold text-navy-900">{content.stat_custody_val}</div>
                <div className="text-xs text-slate-500">{content.stat_custody_label}</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-navy-900">{content.stat_partners_val}</div>
                <div className="text-xs text-slate-500">{content.stat_partners_label}</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-navy-900">{content.stat_execution_val}</div>
                <div className="text-xs text-slate-500">{content.stat_execution_label}</div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5">
            <ConsultationForm />
          </div>
        </div>
      </section>

      {/* Corporate Governance Callout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">Governance & Institutional Backing</span>
            <h3 className="text-xl font-bold text-navy-900">Registered Intermediary Built on Zero-Custody</h3>
            <p className="text-sm text-slate-600 max-w-2xl">
              Licensed under NIC Codes 66120 & 66220 with NISM certified leadership. Learn about our statutory MOA and regulatory safeguards.
            </p>
          </div>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-navy-900 hover:bg-slate-800 text-white font-medium rounded-lg text-sm transition shrink-0"
          >
            Read Corporate Bio <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Core Verticals */}
      <section className="bg-white py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-navy-900">Integrated Wealth Verticals</h2>
            <p className="mt-2 text-slate-600 text-sm">Strategic distribution backed by leading regulatory custodians.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl border border-slate-200 bg-slate-50/50 hover:shadow-lg transition">
              <div className="p-3 bg-emerald-100 text-emerald-700 w-fit rounded-xl mb-4">
                <TrendingUp className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-2">Mutual Funds & SIPs</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Equity, hybrid, index, and liquid fund solutions designed around measurable milestones like retirement and education.
              </p>
              <Link href="/services/mutual-funds" className="text-xs font-semibold text-emerald-700 hover:text-emerald-800 inline-flex items-center gap-1">
                Explore funds & frameworks <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="p-8 rounded-2xl border border-slate-200 bg-slate-50/50 hover:shadow-lg transition">
              <div className="p-3 bg-blue-100 text-blue-700 w-fit rounded-xl mb-4">
                <LineChart className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-2">Equities & Secondary Market</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Direct demat setup powered by institutional partnerships with HDFC Securities and IIFL.
              </p>
              <Link href="/services/equities" className="text-xs font-semibold text-blue-700 hover:text-blue-800 inline-flex items-center gap-1">
                Explore trading desk <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="p-8 rounded-2xl border border-slate-200 bg-slate-50/50 hover:shadow-lg transition">
              <div className="p-3 bg-purple-100 text-purple-700 w-fit rounded-xl mb-4">
                <Landmark className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-2">Fixed Income & Protection</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Sovereign Gold Bonds, Corporate Fixed Deposits, pure term life covers, and comprehensive family health plans.
              </p>
              <Link href="/services" className="text-xs font-semibold text-purple-700 hover:text-purple-800 inline-flex items-center gap-1">
                Explore protection suite <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Calculator Teaser Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-700 mb-1">
              <Calculator className="w-4 h-4" /> Live Growth Simulator
            </div>
            <h2 className="text-3xl font-bold text-navy-900">Project Your Investment Compounding</h2>
            <p className="text-sm text-slate-600 mt-1 max-w-xl">
              Model real-time wealth milestones with optional annual step-up adjustments matching your salary growth.
            </p>
          </div>
          <Link
            href="/calculators"
            className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 hover:text-emerald-800 border-b border-emerald-600 pb-0.5"
          >
            Open Full Calculator Hub <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <SipCalculator />
      </section>

      {/* Institutional Safeguards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="rounded-2xl bg-navy-900 text-white p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div className="flex gap-4 items-start">
              <div className="p-2 bg-slate-800 rounded-lg text-emerald-400 shrink-0">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-bold text-base mb-1">Direct Capital Routing</h4>
                <p className="text-xs text-slate-400 leading-relaxed">We never hold client money. All funds move directly from your bank account to AMCs or clearing corporations.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="p-2 bg-slate-800 rounded-lg text-emerald-400 shrink-0">
                <Layers className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-bold text-base mb-1">Institutional Platforms</h4>
                <p className="text-xs text-slate-400 leading-relaxed">Built through licensed partnerships with HDFC Securities, IIFL, and major AMCs in India.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="p-2 bg-slate-800 rounded-lg text-emerald-400 shrink-0">
                <Award className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-bold text-base mb-1">Certified Governance</h4>
                <p className="text-xs text-slate-400 leading-relaxed">Led by NISM-Series-V-A certified professionals compliant with AMFI and IRDAI codes.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
