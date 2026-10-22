import { ShieldCheck, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Investor Suitability & Portfolio Guidelines | Sarkar Capital",
  description: "Review portfolio structuring principles, asset allocation frameworks, and suitability guidelines for disciplined investors.",
};

export default function SuitabilityPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300 bg-emerald-50 px-3.5 py-1 text-xs font-semibold text-emerald-800">
          <ShieldCheck className="h-4 w-4" /> Regulatory &amp; Advisory Guidelines
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-navy-900 tracking-tight">
          Investor Suitability &amp; Portfolio Framework
        </h1>
        <p className="text-base text-slate-600 leading-relaxed">
          Understanding asset allocation, risk horizons, and disciplined execution parameters for retail investors and HNIs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xs space-y-4">
          <h3 className="text-xl font-bold text-navy-900">Core Asset Allocation Principles</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Every portfolio distributed through Sarkar Capital is mapped to explicit time horizons rather than speculative market timing:
          </p>
          <ul className="text-xs space-y-2.5 text-slate-700 pt-2 border-t border-slate-100">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Short Term (0–3 Years):</strong> Deployed strictly in liquid, overnight, or AAA corporate debt instruments.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Medium to Long Term (5–15+ Years):</strong> Channelled into diversified equity mutual fund SIPs and index strategies.</span>
            </li>
          </ul>
        </div>

        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xs space-y-4">
          <h3 className="text-xl font-bold text-navy-900">Risk Mitigation &amp; Unbundled Protection</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            We advocate strict separation between growth assets and risk-hedging instruments:
          </p>
          <ul className="text-xs space-y-2.5 text-slate-700 pt-2 border-t border-slate-100">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>Never mixing high-cost endowment insurance with investment growth.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>Maintaining adequate emergency reserves before equity accumulation.</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-navy-900 text-white rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center md:text-left">
          <h3 className="text-xl sm:text-2xl font-bold">Want a personalized suitability review?</h3>
          <p className="text-xs text-slate-400 max-w-xl">
            Schedule a free 30-minute portfolio consultation with Abhijit Sarkar and our advisory desk.
          </p>
        </div>
        <Link
          href="/#consultation"
          className="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold rounded-xl transition flex items-center gap-2 shrink-0 shadow-md"
        >
          Book Consultation <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
