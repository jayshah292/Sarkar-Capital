import type { Metadata } from "next";
import Link from "next/link";
import { LineChart, ShieldCheck, ArrowRight, Layers, Building, Lock, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Equity Broking & Demat Desk | Sarkar Capital",
  description: "Institutional demat and trading account onboarding via HDFC Securities and IIFL. Secondary market equities, ETFs, and sovereign gold bonds under NIC 66120.",
};

export default function EquitiesPage() {
  const steps = [
    {
      step: "01",
      title: "Digital KYC Verification",
      desc: "Aadhaar and PAN e-KYC linked with Digilocker for instant, paperless account generation.",
    },
    {
      step: "02",
      title: "Institutional Depository Linking",
      desc: "Direct custodian allocation with National Securities Depository Limited (NSDL) or Central Depository Services (CDSL).",
    },
    {
      step: "03",
      title: "Desk Activation & Execution",
      desc: "Full access to research terminals, algorithmic baskets, and direct market access across NSE and BSE.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-16">
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 rounded-full border border-blue-300 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-800">
          <LineChart className="h-3.5 w-3.5" /> Institutional Equity & Demat Desk
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-navy-900 tracking-tight">
          Direct Secondary Market Access
        </h1>
        <p className="text-base text-slate-600 leading-relaxed">
          Integrated equity and derivative execution powered by corporate distribution alignments with HDFC Securities and IIFL. Registered under NIC 66120 with zero non-discretionary pooling.
        </p>
      </div>

      {/* Institutional Architecture */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm space-y-4">
          <div className="p-3 bg-blue-100 text-blue-700 w-fit rounded-xl">
            <Building className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-navy-900">Partner Brokerage Platforms</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Sarkar Capital functions as an Authorised Person (AP) / institutional sub-broker. Client demat and trading accounts are housed directly with national clearing custodians.
          </p>
          <ul className="space-y-2 text-xs text-slate-700 pt-3 border-t border-slate-100">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span><strong>HDFC Securities:</strong> Institutional execution, 3-in-1 banking integration, and high-tier research desks.</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span><strong>IIFL Securities:</strong> Low-latency platforms, comprehensive API trading capabilities, and derivatives analytics.</span>
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm space-y-4">
          <div className="p-3 bg-emerald-100 text-emerald-700 w-fit rounded-xl">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-navy-900">Zero-Custody Capital Safeguard</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            In compliance with SEBI circulars, all margins and client funds are transferred directly from your primary bank account to Indian Clearing Corporation Limited (ICCL) or NSE Clearing.
          </p>
          <ul className="space-y-2 text-xs text-slate-700 pt-3 border-t border-slate-100">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Zero client deposit collection into Sarkar Capital corporate accounts.</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Direct depository credits strictly to investor personal Demat accounts.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Onboarding Steps */}
      <section className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 space-y-8">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-blue-700">Account Architecture</span>
          <h2 className="text-2xl font-bold text-navy-900 mt-1">Paperless Onboarding Workflow</h2>
          <p className="text-xs text-slate-500 mt-1">Seamless 10-minute digital initiation supported by our desk.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((s, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
              <span className="text-xs font-black text-blue-600 bg-blue-100 px-2.5 py-1 rounded-md">{s.step}</span>
              <h4 className="text-base font-bold text-navy-900 pt-2">{s.title}</h4>
              <p className="text-xs text-slate-600 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Regulatory SEBI Risk Disclosure Notice */}
      <section className="bg-slate-50 border border-slate-300 rounded-2xl p-6 space-y-2 text-xs leading-relaxed text-slate-600">
        <h4 className="font-bold text-slate-900 flex items-center gap-2 uppercase tracking-wider text-[11px]">
          <Lock className="w-4 h-4 text-slate-700" /> Mandatory SEBI Regulatory Notice (Secondary Markets)
        </h4>
        <p>
          Securities investments and derivatives trading are subject to market risks. Please note that 9 out of 10 individual traders in equity futures and options incur net losses according to SEBI study findings. Sarkar Capital does not offer portfolio guarantees, direct execution discretion, or PMS services without SEBI registration. All orders are client-authorized on partner broker terminals.
        </p>
      </section>

      {/* Desk Initiation Action Banner */}
      <section className="bg-navy-900 text-white rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center md:text-left">
          <h3 className="text-xl sm:text-2xl font-bold">Open Institutional Demat & Trading Desk</h3>
          <p className="text-xs text-slate-400 max-w-xl">
            Connect with our onboarding team to set up HDFC Securities or IIFL broking accounts with privileged institutional brokerage tiers.
          </p>
        </div>
        <Link
          href="/#consultation"
          className="px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-semibold rounded-xl transition flex items-center gap-2 shrink-0 shadow-lg"
        >
          Initiate Demat Setup <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </div>
  );
}
