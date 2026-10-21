import type { Metadata } from "next";
import Link from "next/link";
import { TrendingUp, ShieldCheck, CheckCircle2, ArrowRight, BarChart3, Calculator, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Mutual Funds & SIP Distribution | Sarkar Capital",
  description: "AMFI-registered mutual fund distribution. Systematic investment planning (SIP), ELSS tax saving, and goal-based portfolio construction across 40+ AMCs.",
};

export default function MutualFundsPage() {
  const categories = [
    {
      title: "Equity Funds",
      horizon: "5+ Years",
      risk: "Very High",
      description: "Large-cap, mid-cap, flexi-cap, and sector opportunities targeting long-term inflation-beating capital appreciation.",
      tags: ["Large Cap", "Flexi Cap", "Small Cap", "ELSS Tax Saver"],
    },
    {
      title: "Hybrid & Dynamic Allocation",
      horizon: "3–5 Years",
      risk: "Moderate to High",
      description: "Balanced Advantage and multi-asset allocation strategies combining equity upside with debt safety nets.",
      tags: ["Balanced Advantage", "Aggressive Hybrid", "Multi-Asset"],
    },
    {
      title: "Fixed Income & Debt Funds",
      horizon: "3 Months – 3 Years",
      risk: "Low to Moderate",
      description: "Liquid, ultra-short, and corporate bond funds aimed at capital preservation and treasury surplus deployment.",
      tags: ["Liquid Funds", "Banking & PSU", "Corporate Bond"],
    },
    {
      title: "Passive & Index Strategies",
      horizon: "5+ Years",
      risk: "High",
      description: "Low-cost index tracking mirroring Nifty 50, Sensex, and Next 50 with strict benchmark adherence.",
      tags: ["Nifty 50 Index", "Nifty Next 50", "Target Maturity"],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-16">
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800">
          <TrendingUp className="h-3.5 w-3.5" /> AMFI Registered Mutual Fund Desk
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-navy-900 tracking-tight">
          Systematic Mutual Fund Distribution
        </h1>
        <p className="text-base text-slate-600 leading-relaxed">
          Access over 40+ empaneled Asset Management Companies (AMCs) across India. Disciplined SIP setups, goal-aligned asset allocations, and zero-custody transactions.
        </p>
      </div>

      {/* Product Categories */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {categories.map((cat, i) => (
          <div key={i} className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm space-y-4">
            <div className="flex justify-between items-start">
              <h3 className="text-xl font-bold text-navy-900">{cat.title}</h3>
              <span className="text-[11px] font-semibold px-2.5 py-1 bg-slate-100 text-slate-700 rounded-md">
                Horizon: {cat.horizon}
              </span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">{cat.description}</p>
            <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100">
              {cat.tags.map((t, idx) => (
                <span key={idx} className="text-[11px] bg-emerald-50 text-emerald-800 px-2.5 py-1 rounded-md font-medium">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* AEO Comparison Table: Direct vs Regular Distribution */}
      <section className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 space-y-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">Transparency & Framework</span>
          <h2 className="text-2xl font-bold text-navy-900 mt-1">Understanding The Regular Distribution Model</h2>
          <p className="text-xs text-slate-500 mt-1">Clear facts on distribution, servicing, and commission structures.</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-700 border-collapse">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50 text-navy-900 font-bold uppercase tracking-wider">
                <th className="py-3 px-4">Feature</th>
                <th className="py-3 px-4">Sarkar Capital (Distributor Model)</th>
                <th className="py-3 px-4">Unassisted Direct Platforms</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr>
                <td className="py-3 px-4 font-semibold text-slate-900">Portfolio Advisory Review</td>
                <td className="py-3 px-4 text-emerald-700 font-medium">Included (Dedicated specialist guidance)</td>
                <td className="py-3 px-4 text-slate-500">Self-directed / No advisory support</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-semibold text-slate-900">Capital Custody</td>
                <td className="py-3 px-4 text-slate-700">100% Direct to AMC (Zero Broker Custody)</td>
                <td className="py-3 px-4 text-slate-700">100% Direct to AMC</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-semibold text-slate-900">Transaction Execution</td>
                <td className="py-3 px-4 text-slate-700">Digital Paperless Links via AMCs / RTAs</td>
                <td className="py-3 px-4 text-slate-700">User DIY Execution</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-semibold text-slate-900">Investor Fee</td>
                <td className="py-3 px-4 text-emerald-700 font-medium">₹0 Upfront Fee (AMC commissions apply)</td>
                <td className="py-3 px-4 text-slate-700">Platform subscription or DIY tracking</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Interactive Tool Cross-Link */}
      <section className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <div className="inline-flex items-center gap-1.5 text-xs text-emerald-400 font-semibold uppercase tracking-wider">
            <Calculator className="w-4 h-4" /> Goal Simulation
          </div>
          <h3 className="text-xl sm:text-2xl font-bold">Calculate Your Monthly Wealth Trajectory</h3>
          <p className="text-xs text-slate-400 max-w-xl">
            Test different compounding durations and simulate 5–15% annual salary step-ups using our interactive calculator.
          </p>
        </div>
        <Link
          href="/calculators"
          className="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-semibold rounded-xl transition flex items-center gap-2 shrink-0 shadow-lg"
        >
          Launch SIP Calculator <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </div>
  );
}
