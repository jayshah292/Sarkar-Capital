import { ShieldCheck } from "lucide-react";

export default function PartnerRail() {
  const partners = [
    { name: "Nuvama", role: "Partnered Institution" },
    { name: "Axis Securities", role: "Partnered Institution" },
    { name: "IIFL Capital", role: "Partnered Institution" },
    { name: "Creso", role: "Partnered Institution" },
    { name: "Prudent", role: "Partnered Institution" },
    { name: "SBI AMC", role: "Empaneled AMC" },
    { name: "HDFC AMC", role: "Empaneled AMC" },
    { name: "ICICI AMC", role: "Empaneled AMC" },
    { name: "Stallion", role: "Partnered Institution" },
    { name: "Carlenion", role: "Partnered Institution" },
    { name: "Parag Parikh AMC", role: "Empaneled AMC" },
    { name: "Nippon India AMC", role: "Empaneled AMC" },
    { name: "Quant AMC", role: "Empaneled AMC" },
  ];

  return (
    <section className="bg-slate-100/80 border-y border-slate-200 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-1">
          <div className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            <ShieldCheck className="w-3.5 h-3.5" /> Institutional Network
          </div>
          <h3 className="text-2xl font-bold text-navy-900">
            Distribution &amp; Clearing Ecosystem
          </h3>
          <p className="text-xs text-slate-500">
            Partnered with India&apos;s leading financial institutions and asset management companies.
          </p>
        </div>

        {/* Clean Partner Logo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 pt-2">
          {partners.map((partner, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-4 border border-slate-200/90 shadow-2xs flex flex-col justify-center items-center text-center hover:border-emerald-500/60 transition"
            >
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-0.5">
                {partner.role}
              </span>
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
