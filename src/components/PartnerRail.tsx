"use client";

import { useEffect, useState } from "react";
import { ShieldCheck } from "lucide-react";
import { supabase } from "@/lib/supabase";

export default function PartnerRail() {
  const [content, setContent] = useState<Record<string, string>>({});

  useEffect(() => {
    async function loadLogos() {
      const { data } = await supabase.from("site_content").select("*");
      if (data) {
        const map: Record<string, string> = {};
        data.forEach((row: { key: string; value: string }) => {
          map[row.key] = row.value;
        });
        setContent(map);
      }
    }
    loadLogos();
  }, []);

  const partners = [
    { key: "logo_nuvama", name: "Nuvama", role: "Partnered Institution", logo: "https://logo.clearbit.com/nuvama.com" },
    { key: "logo_axis", name: "Axis Securities", role: "Partnered Institution", logo: "https://logo.clearbit.com/axisdirect.in" },
    { key: "logo_iifl", name: "IIFL Capital", role: "Partnered Institution", logo: "https://logo.clearbit.com/iifl.com" },
    { key: "logo_creso", name: "Creso", role: "Partnered Institution", logo: "" },
    { key: "logo_prudent", name: "Prudent", role: "Partnered Institution", logo: "https://logo.clearbit.com/prudentcorporate.com" },
    { key: "logo_sbi", name: "SBI AMC", role: "Empaneled AMC", logo: "https://logo.clearbit.com/sbimf.com" },
    { key: "logo_hdfc", name: "HDFC AMC", role: "Empaneled AMC", logo: "https://logo.clearbit.com/hdfcfund.com" },
    { key: "logo_icici", name: "ICICI AMC", role: "Empaneled AMC", logo: "https://logo.clearbit.com/icicipruamc.com" },
    { key: "logo_stallion", name: "Stallion", role: "Partnered Institution", logo: "" },
    { key: "logo_carlenion", name: "Carlenion", role: "Partnered Institution", logo: "" },
    { key: "logo_parag", name: "Parag Parikh AMC", role: "Empaneled AMC", logo: "https://logo.clearbit.com/amc.ppfas.com" },
    { key: "logo_nippon", name: "Nippon India AMC", role: "Empaneled AMC", logo: "https://logo.clearbit.com/nipponindiaim.com" },
    { key: "logo_quant", name: "Quant AMC", role: "Empaneled AMC", logo: "https://logo.clearbit.com/quantmutual.com" },
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

        {/* Partner Logo & Badge Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 pt-2">
          {partners.map((partner, idx) => {
            const activeLogo = content[partner.key] || partner.logo;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-4 border border-slate-200/90 shadow-2xs flex flex-col justify-center items-center text-center hover:border-emerald-500/60 transition min-h-[110px]"
              >
                <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                  {partner.role}
                </span>
                {activeLogo ? (
                  <div className="h-10 w-28 flex items-center justify-center my-1">
                    <img
                      src={activeLogo}
                      alt={partner.name}
                      className="max-h-9 max-w-28 object-contain"
                      onError={(e) => {
                        // Fallback to text if network logo fails
                        (e.target as HTMLElement).style.display = "none";
                      }}
                    />
                  </div>
                ) : null}
                <span className={`text-xs font-black text-navy-900 leading-snug ${activeLogo ? "text-[11px] mt-1 text-slate-700" : "my-1"}`}>
                  {partner.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
