import Link from "next/link";
import { ShieldCheck, MapPin, Lock, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-navy-900 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand & Corporate Overview */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="bg-slate-800 p-2 rounded-xl text-white">
                <ShieldCheck className="h-5 w-5 text-emerald-400" />
              </div>
              <span className="text-lg font-black tracking-tight text-white">
                SARKAR <span className="text-emerald-400">CAPITAL</span>
              </span>
            </Link>
            <p className="text-xs leading-relaxed text-slate-400 max-w-sm">
              Sarkar Capital Private Limited is an AMFI-registered mutual fund distributor and institutional financial intermediary operating under NIC codes 66120 &amp; 66220. Built on a 100% non-custodial clearing architecture.
            </p>
            <div className="pt-2 text-[11px] text-slate-400 space-y-1">
              <p>CIN: <span className="text-slate-200">U66120WB2026PTCXXXXXX (Incorporation In Process)</span></p>
              <p>AMFI Registration: <span className="text-slate-200">Corporate ARN Desk (NISM-Series-V-A Certified)</span></p>
              <p className="flex items-center gap-1.5 pt-1 text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                Khardaha, North 24 Parganas, Kolkata, West Bengal – 700117
              </p>
            </div>
          </div>

          {/* 1. Regulated Products */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">Products</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/services" className="hover:text-emerald-400 transition font-medium text-slate-300">
                  All Offerings &amp; Asset Matrix
                </Link>
              </li>
              <li>
                <Link href="/services/mutual-funds" className="hover:text-emerald-400 transition">
                  Mutual Funds &amp; SIPs
                </Link>
              </li>
              <li>
                <Link href="/services/equities" className="hover:text-emerald-400 transition">
                  Equities &amp; Demat Desk
                </Link>
              </li>
              <li>
                <Link href="/services/fixed-income" className="hover:text-emerald-400 transition">
                  Fixed Income &amp; SGBs
                </Link>
              </li>
              <li>
                <Link href="/services/insurance" className="hover:text-emerald-400 transition">
                  Term &amp; Health Insurance
                </Link>
              </li>
            </ul>
          </div>

          {/* 2. Tools & Ecosystem */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">Tools &amp; Custody</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link href="/calculators" className="hover:text-emerald-400 transition text-slate-300 font-medium">
                  SIP &amp; Step-Up Calculator
                </Link>
              </li>
              <li>
                <Link href="/calculators" className="hover:text-emerald-400 transition">
                  Lumpsum &amp; Inflation Simulator
                </Link>
              </li>
              <li className="pt-1 text-slate-500">HDFC Securities (AP Desk)</li>
              <li className="text-slate-500">IIFL Securities (Sub-Broker)</li>
              <li className="text-slate-500">ICCL / NSE Clearing / NSDL / CDSL</li>
            </ul>
          </div>

          {/* 3. Governance & Redressal */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">Governance</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/about" className="hover:text-emerald-400 transition">
                  About Corporate &amp; MOA
                </Link>
              </li>
              <li>
                <Link href="/compliance" className="hover:text-emerald-400 transition">
                  Investor Charter &amp; Grievance
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-emerald-400 transition">
                  Contact &amp; Branch Desk
                </Link>
              </li>
              <li>
                <a
                  href="https://scores.sebi.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition inline-flex items-center gap-1"
                >
                  SEBI SCORES Portal <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <Link href="/admin" className="hover:text-emerald-400 transition inline-flex items-center gap-1 text-slate-500">
                  <Lock className="w-3 h-3" /> Admin Studio
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Statutory Disclaimers */}
        <div className="border-t border-slate-800 pt-8 space-y-3 text-[11px] leading-relaxed text-slate-400">
          <p>
            <strong className="text-slate-200">Mandatory Non-Custodial Notice:</strong> Sarkar Capital Private Limited operates strictly as an AMFI-registered mutual fund distributor and financial intermediary under NIC 66120 and 66220. We do not offer SEBI-registered Investment Advisory (RIA) or discretionary Portfolio Management Services (PMS), nor do we accept client deposits into corporate accounts. 100% of investor funds settle directly with the respective AMCs, stock exchange clearing corporations (ICCL / NSE Clearing), or IRDAI-licensed insurers.
          </p>
          <p>
            <strong className="text-slate-200">Standard Market Risk Warning:</strong> Mutual fund investments and secondary market securities are subject to market risks. Read all scheme information documents (SID), key information memorandums (KIM), and risk disclosure documents carefully before investing. Past performance does not guarantee future results.
          </p>
          <p>
            <strong className="text-slate-200">Insurance Solicitation Notice:</strong> Insurance is the subject matter of solicitation. Pure risk policies are facilitated through certified Point of Sales Person (PoSP) and corporate agency frameworks.
          </p>

          <div className="flex flex-col sm:flex-row justify-between items-center pt-4 border-t border-slate-800 text-[11px] text-slate-400 gap-2">
            <p>© {new Date().getFullYear()} Sarkar Capital Private Limited. All rights reserved.</p>
            <p>Institutional-grade distribution • Zero client custody.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
