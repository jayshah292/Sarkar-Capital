"use client";

import { useEffect, useState } from "react";
import { ShieldCheck, FileText, ExternalLink, Clock, CheckCircle2 } from "lucide-react";
import { supabase } from "@/lib/supabase";

export default function CompliancePage() {
  const [content, setContent] = useState<Record<string, string>>({
    compliance_hero_title: "Regulatory Disclosures & Investor Charter",
    compliance_hero_subtitle:
      "Operating transparently under AMFI, SEBI, and IRDAI codes of conduct. Zero-custody asset routing with a clearly defined investor protection framework.",
    compliance_grievance_email: "grievance@sarkarcapital.in",
    compliance_officer_email: "compliance@sarkarcapital.in",
  });

  useEffect(() => {
    async function loadComplianceContent() {
      const { data } = await supabase.from("site_content").select("*");
      if (data && data.length > 0) {
        const mapped: Record<string, string> = {};
        data.forEach((row: { key: string; value: string }) => {
          mapped[row.key] = row.value;
        });
        setContent((prev) => ({ ...prev, ...mapped }));
      }
    }
    loadComplianceContent();
  }, []);

  const escalationTiers = [
    {
      level: "Level 1: Internal Grievance Desk",
      target: "Sarkar Capital Investor Redressal Cell",
      tat: "Resolution within 48 to 72 business hours",
      contact: content.compliance_grievance_email,
      desc: "For any queries regarding transaction delays, service discrepancies, or statement issues. Investors receive a formal acknowledgment ticket within 24 hours.",
    },
    {
      level: "Level 2: Principal / Compliance Officer",
      target: "Designated Head of Compliance",
      tat: "Resolution within 7 working days",
      contact: content.compliance_officer_email,
      desc: "If the resolution provided at Level 1 does not meet your expectations or is not resolved within 72 hours, the matter escalates directly to the designated compliance director.",
    },
    {
      level: "Level 3: Regulatory Redressal Portals",
      target: "SEBI SCORES & SMART ODR Framework",
      tat: "Regulated statutory timeline",
      contact: "scores.sebi.gov.in / smartodr.in",
      desc: "If a dispute remains unresolved through internal channels, investors may directly approach the SEBI Complaints Redress System (SCORES) or initiate dispute resolution via the Securities Market Approach for Resolution Through ODR Portal (SMART ODR).",
      links: [
        { name: "SEBI SCORES Portal", url: "https://scores.sebi.gov.in" },
        { name: "SMART Online Dispute Resolution", url: "https://smartodr.in" },
      ],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-14">
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800">
          <ShieldCheck className="h-3.5 w-3.5" /> Governance & Statutory Standards
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-navy-900 tracking-tight">
          {content.compliance_hero_title}
        </h1>
        <p className="text-base text-slate-600 leading-relaxed">
          {content.compliance_hero_subtitle}
        </p>
      </div>

      <section className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-sm space-y-6">
        <div>
          <h2 className="text-xl font-bold text-navy-900">Corporate & Licensing Metadata</h2>
          <p className="text-xs text-slate-500 mt-1">Formal incorporation identifiers and business activities.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-slate-700">
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 space-y-2">
            <span className="font-bold text-navy-900 uppercase tracking-wider text-[11px] block">Corporate Entity</span>
            <p><strong>Entity Name:</strong> Sarkar Capital Private Limited (Incorporation In Process)</p>
            <p><strong>Primary NIC (66120):</strong> Security and commodity contracts brokerage</p>
            <p><strong>Secondary NIC (66220):</strong> Activities of insurance agents and brokers</p>
          </div>

          <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 space-y-2">
            <span className="font-bold text-navy-900 uppercase tracking-wider text-[11px] block">Intermediary Licensing</span>
            <p><strong>AMFI Registration:</strong> Corporate ARN Desk (Backed by certified EUIN)</p>
            <p><strong>Equity Broking:</strong> Authorised Person / Sub-broker with HDFC Securities & IIFL</p>
            <p><strong>Insurance:</strong> Point of Sales Person (PoSP) / Corporate Agency tie-ups</p>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">Investor Protection Mechanism</span>
          <h2 className="text-2xl font-bold text-navy-900 mt-1">Grievance Redressal Escalation Matrix</h2>
          <p className="text-xs text-slate-500 mt-1">Sequential escalation process for rapid and fair dispute resolution.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {escalationTiers.map((tier, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between space-y-4 shadow-sm">
              <div className="space-y-2">
                <span className="text-[11px] font-bold text-emerald-700 uppercase bg-emerald-50 px-2 py-0.5 rounded">
                  {tier.level}
                </span>
                <h3 className="text-base font-bold text-navy-900 pt-1">{tier.target}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{tier.desc}</p>
              </div>

              <div className="space-y-2 pt-3 border-t border-slate-100 text-xs">
                <div className="flex items-center gap-1.5 text-slate-500 text-[11px]">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  <span>{tier.tat}</span>
                </div>
                <div className="font-semibold text-navy-900">{tier.contact}</div>

                {tier.links && (
                  <div className="flex flex-col gap-1.5 pt-2">
                    {tier.links.map((link, lIdx) => (
                      <a
                        key={lIdx}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-emerald-600 hover:text-emerald-700 font-semibold"
                      >
                        {link.name} <ExternalLink className="w-3 h-3" />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 border border-slate-200 rounded-3xl p-8 sm:p-10 space-y-4">
        <h3 className="text-lg font-bold text-navy-900 flex items-center gap-2">
          <FileText className="w-5 h-5 text-emerald-600" /> Statutory Code of Conduct (AMFI & SEBI)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-600 leading-relaxed">
          <div className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span><strong>No Guaranteed Returns:</strong> Sarkar Capital does not provide or advertise assured returns on market-linked financial products.</span>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span><strong>Non-Custodial Integrity:</strong> All investments are remitted strictly from the client&apos;s registered bank accounts directly to the respective AMCs or clearing houses.</span>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span><strong>Appropriateness Testing:</strong> Investment distribution recommendations are mapped to client risk profiles and stated milestones.</span>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span><strong>Privacy & Non-Disclosure:</strong> Client financial information is strictly confidential and protected from unauthorized third-party sharing.</span>
          </div>
        </div>
      </section>
    </div>
  );
}
