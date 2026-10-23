import Link from "next/link";
import PartnerRail from "@/components/PartnerRail";
import { supabase } from "@/lib/supabase";
import { ShieldCheck, Award, TrendingUp, Building2, HeartHandshake, ArrowRight } from "lucide-react";

export const revalidate = 0;

async function getSiteContent() {
  try {
    const { data } = await supabase.from("site_content").select("key, value");
    const map: Record<string, string> = {};
    if (data) {
      data.forEach((row: { key: string; value: string }) => {
        map[row.key] = row.value;
      });
    }
    return map;
  } catch {
    return {};
  }
}

export default async function AboutPage() {
  const c = await getSiteContent();
  const founderPhoto = c.founder_photo_url || "";

  const stats = [
    { value: "₹10 Cr+", label: "Managed AUM", icon: TrendingUp },
    { value: "25+ Yrs", label: "Years in Business", icon: Award },
    { value: "40+", label: "AMCs Empaneled", icon: Building2 },
    { value: "2,500+", label: "Lives Protected", icon: HeartHandshake },
  ];

  return (
    <div className="space-y-0">
      <section className="bg-slate-50 py-14 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200">
              <ShieldCheck className="w-4 h-4" /> Mumbai • Kolkata • Pan-India
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-navy-900 tracking-tight">
              25+ Years of Trusted Family Wealth &amp; Protection Guidance
            </h1>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Sarkar Capital is a unified multi-product financial distribution partner built on clarity, long-term relationship trust, and 100% direct-to-institution safety.
            </p>
          </div>

          {/* Highlighted Circular Stat Rings */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 max-w-4xl mx-auto">
            {stats.map((st, i) => {
              const Icon = st.icon;
              return (
                <div key={i} className="flex flex-col items-center">
                  <div className="w-36 h-36 rounded-full bg-white border-4 border-emerald-500 shadow-md flex flex-col items-center justify-center p-4 text-center">
                    <Icon className="w-5 h-5 text-emerald-700 mb-1" />
                    <span className="text-2xl font-black text-navy-900 leading-none">
                      {st.value}
                    </span>
                    <span className="text-[11px] font-bold text-slate-600 mt-1">
                      {st.label}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Founder Profile Card: Abhijit Sarkar */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-4 flex flex-col items-center text-center">
              <div className="w-44 h-44 sm:w-52 sm:h-52 rounded-full border-4 border-emerald-600 overflow-hidden bg-slate-100 shadow-lg flex items-center justify-center">
                {founderPhoto ? (
                  <img
                    src={founderPhoto}
                    alt="Abhijit Sarkar - Founder & Chief Wealth Planner"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="text-center p-4">
                    <span className="text-4xl font-black text-navy-900 block">AS</span>
                    <span className="text-[11px] font-bold text-slate-500 mt-1 block">
                      Abhijit Sarkar
                    </span>
                  </div>
                )}
              </div>
              <h2 className="text-xl font-black text-navy-900 mt-4">Abhijit Sarkar</h2>
              <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mt-0.5">
                Founder &amp; Chief Wealth Planner
              </p>
              <p className="text-[11px] text-slate-500 mt-1">
                AMFI / NISM Certified • 25+ Years Industry Experience
              </p>
            </div>

            <div className="md:col-span-8 space-y-4">
              <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                Leadership &amp; Vision
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-navy-900">
                Personal Relationship Support Meets Institutional Scale
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                With over <strong>25+ years in the financial services business</strong>,{" "}
                <strong>Abhijit Sarkar</strong> founded Sarkar Capital to give senior citizens, salaried families, business owners, and NRIs a single, dependable roof for every financial decision.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                Whether you are setting up a monthly Mutual Fund SIP, investing in Stallion or Carnelian PMS, locking in AAA Corporate FDs (Bajaj, Shriram, LIC Housing, ICICI Home), or securing your family with HDFC Life, LIC, Tata AIA, or HDFC Ergo insurance—every transaction is executed with 100% direct institutional clearing.
              </p>
              <div className="pt-2 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-extrabold px-5 py-3 rounded-xl transition inline-flex items-center gap-1.5"
                >
                  Schedule a Call With Abhijit Sarkar <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/services"
                  className="bg-slate-100 hover:bg-slate-200 text-navy-900 text-xs font-bold px-5 py-3 rounded-xl transition"
                >
                  Explore All 12 Products
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PartnerRail />
    </div>
  );
}
