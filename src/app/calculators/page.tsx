import type { Metadata } from "next";
import SipCalculator from "@/components/SipCalculator";
import { ShieldCheck, HelpCircle, CheckCircle2, TrendingUp, Info } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SIP & Wealth Growth Calculators | Sarkar Capital",
  description: "Institutional-grade SIP, Step-Up SIP, and compounding calculators. Project your mutual fund returns with realistic market assumptions.",
};

export default function CalculatorsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Sarkar Capital SIP & Wealth Calculator",
    "operatingSystem": "All",
    "applicationCategory": "FinanceApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "INR"
    },
    "description": "Calculates monthly compounding and annual step-up projections for mutual fund systematic investment plans."
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header Banner */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800">
          <TrendingUp className="h-3.5 w-3.5" /> Compounding Intelligence
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-navy-900 tracking-tight">
          Financial Growth & Wealth Calculators
        </h1>
        <p className="text-base text-slate-600 leading-relaxed">
          Plan disciplined milestone investments. Simulate standard systematic investment plans (SIPs) or factor in annual career salary hikes using our step-up engine.
        </p>
      </div>

      {/* Interactive Calculator Component */}
      <section>
        <SipCalculator />
      </section>

      {/* Structured Answer Engine Optimization (AEO / SEO FAQ) */}
      <section className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 space-y-10">
        <div>
          <h2 className="text-2xl font-bold text-navy-900">Understanding SIP & Compounding Math</h2>
          <p className="text-xs text-slate-500 mt-1">Direct answers to key wealth accumulation concepts.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
            <h3 className="text-base font-bold text-navy-900 flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-emerald-600 shrink-0" />
              What is a Step-Up SIP and why is it superior?
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              A Step-Up (or Top-Up) SIP automatically increases your monthly investment contribution by a fixed percentage (e.g. 10%) every year. Because salaried incomes typically rise annually, stepping up your SIP substantially shortens the time required to build milestone wealth compared to a flat monthly SIP.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
            <h3 className="text-base font-bold text-navy-900 flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-emerald-600 shrink-0" />
              How are mutual fund returns calculated?
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Calculators use standard monthly compounding formulas based on annualized expected CAGR (Compound Annual Growth Rate). While actual mutual fund market returns fluctuate day-to-day, a 10-15 year equity index baseline typically averages 11-13% annualized over historical cycles in India.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
            <h3 className="text-base font-bold text-navy-900 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              Does Sarkar Capital charge a fee for SIP setup?
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              No. As an AMFI-registered mutual fund distributor, Sarkar Capital charges ₹0 advisory fee to retail investors. All transaction channels route directly from your verified bank account to the respective Asset Management Company (AMC).
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
            <h3 className="text-base font-bold text-navy-900 flex items-center gap-2">
              <Info className="w-4 h-4 text-emerald-600 shrink-0" />
              Are returns guaranteed by Sarkar Capital?
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              No market-linked investment provides guaranteed returns. Projections shown are illustrative mathematical estimations. Mutual fund investments remain subject to market risks, and scheme performance depends on underlying asset valuation.
            </p>
          </div>
        </div>
      </section>

      {/* Advisory Action Banner */}
      <section className="bg-navy-900 rounded-3xl p-8 sm:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center md:text-left">
          <h3 className="text-xl sm:text-2xl font-bold">Ready to turn calculations into execution?</h3>
          <p className="text-xs text-slate-400 max-w-xl">
            Book a complimentary portfolio review with certified NISM wealth specialists to pick funds matching your risk appetite.
          </p>
        </div>
        <Link
          href="/#consultation"
          className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold rounded-xl transition shrink-0"
        >
          Book Portfolio Call
        </Link>
      </section>
    </div>
  );
}
