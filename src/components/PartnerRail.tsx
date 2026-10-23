"use client";

import { ShieldCheck } from "lucide-react";

export default function PartnerRail() {
  const partners = [
    // Wealth & Broking Desks
    { name: "Nuvama", role: "Wealth & Broking Partner", domain: "nuvama.com" },
    { name: "Axis Securities", role: "Broking & Demat Partner", domain: "simplehai.axisdirect.in" },
    { name: "IIFL Capital", role: "Institutional Broking", domain: "indiainfoline.com" },
    { name: "Creso", role: "Wealth Partner", domain: "cresowealth.com" },
    { name: "Prudent", role: "Distribution Partner", domain: "prudentcorporate.com" },
    // Empaneled AMCs
    { name: "SBI AMC", role: "Empaneled AMC", domain: "sbimf.com" },
    { name: "HDFC AMC", role: "Empaneled AMC", domain: "hdfcfund.com" },
    { name: "ICICI AMC", role: "Empaneled AMC", domain: "icicipruamc.com" },
    { name: "Parag Parikh AMC", role: "Empaneled AMC", domain: "amc.ppfas.com" },
    { name: "Nippon India AMC", role: "Empaneled AMC", domain: "nipponindiamf.com" },
    { name: "Quant AMC", role: "Empaneled AMC", domain: "quantmutual.com" },
    // PMS & Alternates
    { name: "Stallion", role: "PMS & Alternates", domain: "stallionasset.com" },
    { name: "Carnelian", role: "PMS & Alternates", domain: "carneliancapital.com" },
    // Life Insurance Partners
    { name: "HDFC Life", role: "Life Insurance Partner", domain: "hdfclife.com" },
    { name: "SBI Life", role: "Life Insurance Partner", domain: "sbilife.co.in" },
    { name: "LIC", role: "Life Insurance Partner", domain: "licindia.in" },
    { name: "Tata AIA", role: "Life Insurance Partner", domain: "tataaia.com" },
    { name: "ICICI Life", role: "Life Insurance Partner", domain: "iciciprulife.com" },
    // General & Health Insurance Partners
    { name: "HDFC Ergo", role: "General Insurance", domain: "hdfcergo.com" },
    { name: "SBI General", role: "General Insurance", domain: "sbigeneral.in" },
    { name: "Tata AIG", role: "General Insurance", domain: "tataaig.com" },
    { name: "ManipalCigna", role: "Health Insurance", domain: "manipalcigna.com" },
    { name: "ICICI Lombard", role: "General Insurance", domain: "icicilombard.com" },
  ];

  return (
    <section className="bg-slate-100/90 border-y border-slate-200 py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200">
            <ShieldCheck className="w-4 h-4" /> Partnered Institutional Ecosystem
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-navy-900 tracking-tight">
            Partnered With India&apos;s Leading Financial Institutions
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Direct distribution and execution tie-ups across 40+ AMCs, institutional stock brokers, PMS houses, and IRDAI-regulated insurers.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5 pt-2">
          {partners.map((partner, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-4 border border-slate-200/90 shadow-xs flex flex-col justify-between items-center text-center hover:border-emerald-500 hover:shadow-md transition-all duration-200 group"
            >
              <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400 group-hover:text-emerald-700 transition-colors block mb-2">
                {partner.role}
              </span>
              <div className="w-11 h-11 mb-2.5 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center p-2 overflow-hidden shadow-inner group-hover:border-emerald-200 transition">
                <img
                  src={`https://www.google.com/s2/favicons?domain=${partner.domain}&sz=128`}
                  alt={`${partner.name} logo`}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = "none";
                  }}
                />
              </div>
              <span className="text-xs sm:text-sm font-black text-navy-900 leading-snug">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
