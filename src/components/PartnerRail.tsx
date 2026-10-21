import { ShieldCheck, ArrowUpRight } from "lucide-react";

export default function PartnerRail() {
  const partners = [
    { name: "HDFC Securities", role: "Authorised Person Desk", segment: "BSE / NSE Capital Markets" },
    { name: "IIFL Securities", role: "Institutional Sub-broker", segment: "Equities & Derivatives" },
    { name: "SBI Mutual Fund", role: "Empaneled AMC", segment: "Equity & Hybrid Schemes" },
    { name: "ICICI Prudential AMC", role: "Empaneled AMC", segment: "Systematic Plans & ETFs" },
    { name: "HDFC Mutual Fund", role: "Empaneled AMC", segment: "Index & Debt Portfolios" },
    { name: "Nippon India MF", role: "Empaneled AMC", segment: "Equity & Gold Funds" },
  ];

  const custodians = ["NSE Clearing", "ICCL", "NSDL", "CDSL", "AMFI", "SEBI Regulated"];

  return (
    <section className="bg-slate-100/70 border-y border-slate-200 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row justify-between sm:items-end gap-2">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-emerald-800">
              <ShieldCheck className="w-3.5 h-3.5" /> Institutional Network
            </div>
            <h3 className="text-xl font-bold text-navy-900 mt-1">
              Distribution & Clearing Ecosystem
            </h3>
          </div>
          <p className="text-xs text-slate-500 max-w-md">
            Sarkar Capital routes 100% of investor capital directly into licensed asset management companies and primary depositories.
          </p>
        </div>

        {/* Core Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {partners.map((partner, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-3.5 border border-slate-200/80 shadow-xs flex flex-col justify-between hover:border-emerald-500/50 hover:shadow-sm transition"
            >
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                  {partner.role}
                </span>
                <span className="text-xs font-black text-navy-900 leading-snug block">
                  {partner.name}
                </span>
              </div>
              <span className="text-[10px] text-slate-500 font-medium mt-3 block pt-2 border-t border-slate-100">
                {partner.segment}
              </span>
            </div>
          ))}
        </div>

        {/* Custodian & Settlement Trust Ribbon */}
        <div className="pt-2 flex flex-wrap items-center justify-between gap-3 text-[11px] text-slate-500 border-t border-slate-200/60">
          <span className="font-semibold text-slate-700">Settlement & Custody Infrastructure:</span>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {custodians.map((c, i) => (
              <span
                key={i}
                className="bg-white px-2.5 py-1 rounded-md border border-slate-200 text-slate-700 font-semibold text-[10px]"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
