"use client";

import { useEffect, useState } from "react";
import ConsultationForm from "@/components/ConsultationForm";
import SipCalculator from "@/components/SipCalculator";
import PartnerRail from "@/components/PartnerRail";
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
  Lock,
  CheckCircle2,
  HelpCircle,
} from "lucide-react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

export default function Home() {
  const [content, setContent] = useState<Record<string, string>>({
    hero_badge: "AMFI Registered Mutual Fund Distributor • NIC 66120 & 66220",
    hero_title: "Institutional-Grade Wealth Distribution. Zero Client Custody.",
    hero_subtitle:
      "Transparent financial product distribution for salaried professionals, families, and HNIs across Kolkata, West Bengal, and pan-India. Access 40+ Mutual Fund AMCs, HDFC & IIFL Equity Desks, Sovereign Gold Bonds, and unbundled Risk Protection under one roof.",
    stat_custody_val: "₹0",
    stat_custody_label: "Client Fund Custody (100% Direct to AMC/Clearing)",
    stat_partners_val: "40+",
    stat_partners_label: "Empaneled Asset Management Companies",
    stat_execution_val: "100%",
    stat_execution_label: "Paperless Digital Execution",
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
        "name": "Who is Sarkar Capital and how is it regulated?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sarkar Capital Private Limited is an AMFI-registered mutual fund distributor and institutional financial intermediary operating under NIC codes 66120 and 66220, backed by NISM-certified leadership."
        }
      },
      {
        "@type": "Question",
        "name": "How is my money protected with a non-custodial model?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sarkar Capital never holds or pools client capital in corporate accounts. 100% of investor funds route directly from verified bank accounts to SEBI-regulated clearing corporations (ICCL / NSE Clearing), respective AMCs, or IRDAI-governed insurers."
        }
      },
      {
        "@type": "Question",
        "name": "What is the fee for investing through Sarkar Capital?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "As an AMFI-registered mutual fund distributor, Sarkar Capital charges zero upfront advisory fees to retail investors. Standard AMC distribution commissions apply as per regulatory guidelines."
        }
      }
    ]
  };

  return (
    <div className="space-y-16 py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* 1. Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300 bg-emerald-50 px-3.5 py-1 text-xs font-semibold text-emerald-800">
              <ShieldCheck className="h-4 w-4" /> {content.hero_badge}
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-navy-900 leading-[1.1]">
              {content.hero_title}
            </h1>
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
              {content.hero_subtitle}
            </p>

            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-slate-200">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-navy-900">{content.stat_custody_val}</div>
                <div className="text-xs text-slate-500 mt-0.5">{content.stat_custody_label}</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-navy-900">{content.stat_partners_val}</div>
                <div className="text-xs text-slate-500 mt-0.5">{content.stat_partners_label}</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-navy-900">{content.stat_execution_val}</div>
                <div className="text-xs text-slate-500 mt-0.5">{content.stat_execution_label}</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <ConsultationForm />
          </div>
        </div>
      </section>

      {/* 2. Institutional Ecosystem Rail */}
      <PartnerRail />

      {/* 3. Core Product Verticals */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">Distribution Capabilities</span>
          <h2 className="text-3xl font-extrabold text-navy-900 mt-1">Regulated Wealth Verticals</h2>
          <p className="mt-2 text-slate-600 text-sm">Strategic distribution backed by leading regulatory custodians and clearing houses.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-md transition flex flex-col justify-between space-y-4">
            <div>
              <div className="p-3 bg-emerald-50 text-emerald-700 w-fit rounded-xl mb-4">
                <TrendingUp className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-navy-900 mb-2">Mutual Funds & SIPs</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Equity, hybrid, index, and debt funds structured around major life milestones with 100% direct AMC execution.
              </p>
            </div>
            <Link
              href="/services/mutual-funds"
              className="text-xs font-bold text-emerald-700 hover:text-emerald-800 inline-flex items-center gap-1 pt-3 border-t border-slate-100"
            >
              Explore Funds Desk <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-md transition flex flex-col justify-between space-y-4">
            <div>
              <div className="p-3 bg-blue-50 text-blue-700 w-fit rounded-xl mb-4">
                <LineChart className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-navy-900 mb-2">Equities & Demat</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Direct secondary market access powered by corporate Authorised Person alignments with HDFC Securities & IIFL.
              </p>
            </div>
            <Link
              href="/services/equities"
              className="text-xs font-bold text-blue-700 hover:text-blue-800 inline-flex items-center gap-1 pt-3 border-t border-slate-100"
            >
              Explore Trading Desk <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-md transition flex flex-col justify-between space-y-4">
            <div>
              <div className="p-3 bg-purple-50 text-purple-700 w-fit rounded-xl mb-4">
                <Landmark className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-navy-900 mb-2">Fixed Income & Bonds</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Sovereign Gold Bonds (SGBs), AAA Corporate Fixed Deposits, and 54EC Capital Gains tax exemption bonds.
              </p>
            </div>
            <Link
              href="/services/fixed-income"
              className="text-xs font-bold text-purple-700 hover:text-purple-800 inline-flex items-center gap-1 pt-3 border-t border-slate-100"
            >
              Explore Bond Desk <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-md transition flex flex-col justify-between space-y-4">
            <div>
              <div className="p-3 bg-rose-50 text-rose-700 w-fit rounded-xl mb-4">
                <ShieldAlert className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-navy-900 mb-2">Insurance & Protection</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Risk-hedging pure term life policies and comprehensive family health covers through certified PoSP frameworks.
              </p>
            </div>
            <Link
              href="/services/insurance"
              className="text-xs font-bold text-rose-700 hover:text-rose-800 inline-flex items-center gap-1 pt-3 border-t border-slate-100"
            >
              Explore Protection <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. The "Sarkar Capital Clearing Standard" (Zerodha-Style Transparency) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 space-y-8">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">Radical Transparency</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 mt-1">The Sarkar Capital Clearing Standard</h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              How we ensure absolute capital safety through direct non-custodial routing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
              <span className="text-xs font-black text-emerald-600 bg-emerald-100 px-2.5 py-1 rounded-md">STEP 01</span>
              <h4 className="text-base font-bold text-navy-900 pt-2">Direct Digital Mandate</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                You authorize transactions securely via BSE StarMF, NSE NMF II, or partner broker terminal gateways.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
              <span className="text-xs font-black text-emerald-600 bg-emerald-100 px-2.5 py-1 rounded-md">STEP 02</span>
              <h4 className="text-base font-bold text-navy-900 pt-2">Institutional Clearing</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Capital moves directly from your verified bank account to ICCL / NSE Clearing or the respective AMC / Insurer.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
              <span className="text-xs font-black text-emerald-600 bg-emerald-100 px-2.5 py-1 rounded-md">STEP 03</span>
              <h4 className="text-base font-bold text-navy-900 pt-2">Personal Depository Credit</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Units and securities credit straight into your personal Folio or NSDL/CDSL Demat account with zero intermediary pooling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Interactive Calculator Showcase */}
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

      {/* 6. AEO FAQ Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 space-y-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">Answer Engine Optimization (AEO)</span>
            <h2 className="text-2xl font-bold text-navy-900 mt-1">Frequently Asked Questions</h2>
            <p className="text-xs text-slate-500 mt-1">Direct answers regarding regulatory compliance and fund routing.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
              <h3 className="text-sm font-bold text-navy-900 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                Who is Sarkar Capital?
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Sarkar Capital Private Limited is an AMFI-registered mutual fund distributor and institutional financial intermediary operating under NIC codes 66120 and 66220.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
              <h3 className="text-sm font-bold text-navy-900 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                How is my money protected?
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We maintain a 100% non-custodial architecture. All funds route directly from your bank account to SEBI-regulated clearing corporations and AMCs.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
              <h3 className="text-sm font-bold text-navy-900 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                What are the distributor fees?
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Retail investors pay ₹0 upfront advisory fees. Standard AMC distribution commissions apply as per regulatory guidelines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Institutional Safeguards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="rounded-3xl bg-navy-900 text-white p-8 md:p-12 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div className="flex gap-4 items-start">
              <div className="p-2.5 bg-slate-800 rounded-xl text-emerald-400 shrink-0">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-bold text-base mb-1">Direct Capital Routing</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  We never hold client money. All funds route directly from your verified bank account to AMCs or clearing corporations.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="p-2.5 bg-slate-800 rounded-xl text-emerald-400 shrink-0">
                <Layers className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-bold text-base mb-1">Institutional Platforms</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Operating through certified partner desks with HDFC Securities, IIFL, and over 40+ empaneled AMCs across India.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="p-2.5 bg-slate-800 rounded-xl text-emerald-400 shrink-0">
                <Award className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-bold text-base mb-1">Certified Governance</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Led by NISM-Series-V-A certified professionals strictly complying with AMFI, SEBI, and IRDAI codes of conduct.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
