"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ShieldAlert,
  ArrowRight,
  CheckCircle2,
  Lock,
  HelpCircle,
  Sparkles,
  AlertTriangle,
  HeartPulse,
  ShieldCheck,
} from "lucide-react";
import { supabase } from "@/lib/supabase";

export default function InsurancePage() {
  const [content, setContent] = useState<Record<string, string>>({
    ins_hero_title: "Protect Your Family's Lifestyle & Savings From Life's Worst Days.",
    ins_hero_subtitle:
      "One major medical emergency or untimely tragedy shouldn't wipe out 10 years of mutual fund SIPs. We strictly advocate unbundled Pure Term Life Insurance and Comprehensive Health Floaters—never low-return ULIPs or endowment schemes—backed by certified IRDAI PoSP frameworks under NIC 66220.",
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
        "name": "Why does Sarkar Capital strictly recommend unbundled term insurance?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Traditional endowment and ULIP plans mix insurance with low-yield investments, delivering sub-inflation 4%–5% returns while keeping you drastically under-insured. Pure term insurance provides a ₹1Cr–₹5Cr life cover for a fraction of the cost, allowing you to invest your remaining surplus in high-growth equity mutual funds."
        }
      },
      {
        "@type": "Question",
        "name": "Is corporate group health insurance enough for my family?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Employer-provided health insurance (typically ₹3L to ₹5L) terminates the day you switch jobs, retire, or face a startup layoff. Furthermore, corporate policies often include room-rent sub-limits and disease-wise capping. A personal family health floater with a super top-up is essential."
        }
      },
      {
        "@type": "Question",
        "name": "How are insurance premiums paid when facilitated through Sarkar Capital?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In strict compliance with IRDAI regulations, Sarkar Capital never collects insurance premiums in its corporate name. All premium remittances are paid directly online or via cheque to the respective licensed underwriting insurance company."
        }
      }
    ]
  };

  const insurancePillars = [
    {
      badge: "INCOME REPLACEMENT • 15x–20x ANNUAL INCOME",
      title: "Pure Term Life Insurance",
      focus: "Family Financial Independence",
      sumAssured: "₹1 Crore to ₹5 Crore Cover",
      features: [
        "Unbundled pure risk protection without low-return investment mixing",
        "Critical illness & accidental total permanent disability riders",
        "Claim settlement assistance backed by top-tier private insurers",
        "Tax deductions under Section 80C as per prevailing tax rules",
      ],
      desc: "Replaces your future earning capacity so your family can pay off mortgages, fund children's university education, and maintain their lifestyle without financial distress.",
    },
    {
      badge: "MEDICAL INFLATION SHIELD • ZERO SUB-LIMITS",
      title: "Comprehensive Family Health Floaters",
      focus: "Hospitalization & Critical Care",
      sumAssured: "₹10 Lakh to ₹1 Crore Base + Super Top-Up",
      features: [
        "Zero room-rent capping and absolute zero copayment clauses",
        "Restoration and refill benefits for unrelated medical claims",
        "Daycare procedures, AYUSH treatment, and annual health checkups",
        "Tax deductions up to ₹25,000–₹50,000 under Section 80D",
      ],
      desc: "Shields your hard-earned savings from runaway medical inflation. We help you select and audit policies with pristine hospital network coverage and high claim settlement ratios.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* 1. HERO SECTION + VISUAL POLICY AUDIT CHECKLIST CARD */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 space-y-5">
          <div className="inline-flex items-center gap-2 rounded-full border border-rose-300 bg-rose-50 px-3.5 py-1.5 text-xs font-bold text-rose-900">
            <ShieldAlert className="h-4 w-4 text-rose-600" /> Licensed Facilitation Desk • NIC 66220 (IRDAI PoSP)
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-navy-900 tracking-tight leading-[1.1]">
            {content.ins_hero_title}
          </h1>
          <p className="text-base text-slate-600 leading-relaxed">
            {content.ins_hero_subtitle}
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="/#consultation"
              className="px-6 py-3.5 bg-rose-600 hover:bg-rose-700 text-white text-xs sm:text-sm font-bold rounded-xl transition inline-flex items-center gap-2 shadow-lg shadow-rose-600/20"
            >
              Request Free Family Policy Audit <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="px-5 py-3.5 bg-white hover:bg-slate-100 text-navy-900 border border-slate-300 text-xs sm:text-sm font-bold rounded-xl transition inline-flex items-center gap-2"
            >
              Calculate Required Term Cover (HLV)
            </Link>
          </div>
        </div>

        {/* Right Visual Card: The 5-Point Health Policy Audit */}
        <div className="lg:col-span-5 bg-navy-900 text-white rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-2xl space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-rose-400 block">
                Hidden Fine Print Traps We Uncover
              </span>
              <h3 className="text-base sm:text-lg font-bold text-white mt-0.5">
                The 5-Point Health Policy Audit
              </h3>
            </div>
            <HeartPulse className="w-6 h-6 text-rose-400 shrink-0" />
          </div>

          <div className="space-y-3 text-xs">
            <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 flex items-start gap-3">
              <span className="text-rose-400 font-bold">01.</span>
              <span className="text-slate-300 leading-relaxed">
                <strong>Room-Rent Capping:</strong> Does your policy slash doctor fees if you take a private room? We eliminate sub-limits.
              </span>
            </div>
            <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 flex items-start gap-3">
              <span className="text-rose-400 font-bold">02.</span>
              <span className="text-slate-300 leading-relaxed">
                <strong>Co-Payment Clauses:</strong> Are you forced to pay 20% of every hospital bill out of pocket?
              </span>
            </div>
            <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 flex items-start gap-3">
              <span className="text-rose-400 font-bold">03.</span>
              <span className="text-slate-300 leading-relaxed">
                <strong>Super Top-Up Integration:</strong> Expanding ₹5L cover to ₹50L at 70% lower premium.
              </span>
            </div>
          </div>

          <div className="pt-2 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
            <span>Direct Insurer Premium Payment</span>
            <span className="text-rose-400 font-semibold">100% IRDAI Compliant</span>
          </div>
        </div>
      </section>

      {/* 2. INSURANCE PILLARS */}
      <section className="space-y-8">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-rose-700">
            Unbundled Risk Protection
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-navy-900">
            The Two Insurance Policies Every Family Actually Needs
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {insurancePillars.map((item, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xs space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex justify-between items-start gap-2">
                  <span className="text-[10px] font-black uppercase tracking-wider bg-rose-50 text-rose-700 px-2.5 py-1 rounded-md">
                    {item.badge}
                  </span>
                  <span className="text-[11px] font-bold bg-slate-100 text-slate-800 px-3 py-1 rounded-full">
                    {item.sumAssured}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-navy-900">{item.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
              </div>

              <div className="space-y-2 pt-4 border-t border-slate-100">
                <span className="text-[11px] font-bold text-slate-700 uppercase tracking-wider block">
                  Key Coverage Highlights:
                </span>
                <ul className="space-y-1.5 text-xs text-slate-600">
                  {item.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. PHILOSOPHY COMPARISON */}
      <section className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 space-y-6 shadow-xs">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-rose-700">
            The Sarkar Capital Rule
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 mt-1">
            Why We Never Mix Insurance With Investment
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs text-slate-700">
          <div className="p-6 rounded-2xl bg-emerald-50/60 border border-emerald-200 space-y-3">
            <h4 className="text-sm font-bold text-navy-900 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" /> Pure Term Life + Equity SIP (Recommended)
            </h4>
            <p className="leading-relaxed text-slate-600">
              By keeping protection and investing separate, you get a massive ₹1 Crore to ₹2 Crore life cover for a tiny annual premium, while investing your savings into high-growth equity mutual funds that historically compound at 12%–14% p.a. with full liquidity.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
            <h4 className="text-sm font-bold text-navy-900 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-rose-600" /> Traditional Endowment &amp; ULIP Plans
            </h4>
            <p className="leading-relaxed text-slate-600">
              Traditional insurance plans lock your money for 15–20 years while delivering sub-inflation 4.5% returns, and provide inadequate life cover (often only 10x your annual premium). We help clients restructure or avoid these high-cost legacy products.
            </p>
          </div>
        </div>
      </section>

      {/* 4. MANDATORY IRDAI NOTICE */}
      <section className="bg-slate-50 border border-slate-300 rounded-3xl p-6 space-y-2 text-xs leading-relaxed text-slate-600">
        <h4 className="font-bold text-slate-900 flex items-center gap-2 uppercase tracking-wider text-[11px]">
          <Lock className="w-4 h-4 text-slate-700" /> Mandatory Regulatory Notice (IRDAI Framework)
        </h4>
        <p>
          Insurance is the subject matter of solicitation. Sarkar Capital functions as an intermediary and facilitator through licensed Point of Sales Person (PoSP) and corporate agency alignments with IRDAI-registered insurance underwriting companies. Sarkar Capital never collects insurance premiums in its corporate name; all premium payments are remitted directly online or via instrument to the underwriting insurance carrier.
        </p>
      </section>

      {/* 5. CTA BANNER */}
      <section className="bg-navy-900 text-white rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="space-y-2 text-center md:text-left">
          <div className="inline-flex items-center gap-1.5 text-xs text-rose-400 font-semibold uppercase tracking-wider">
            <Sparkles className="w-4 h-4" /> Free Family Risk Audit
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold">
            Want to Check If Your Family Has Enough Life &amp; Health Cover?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
            Book a complimentary session with our insurance desk. We will calculate your exact Human Life Value (HLV) and audit your family floater for hidden gaps.
          </p>
        </div>
        <Link
          href="/#consultation"
          className="px-6 py-3.5 bg-rose-600 hover:bg-rose-700 text-white text-xs sm:text-sm font-bold rounded-xl transition flex items-center gap-2 shrink-0 shadow-lg"
        >
          Request Policy Audit <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </div>
  );
}
