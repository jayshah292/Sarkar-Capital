import Link from "next/link";
import { ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Col 1: Brand & Metrics */}
          <div className="lg:col-span-2 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-emerald-500 text-navy-950 font-black flex items-center justify-center text-sm">
                SC
              </div>
              <span className="text-lg font-black text-white tracking-tight">
                SARKAR CAPITAL
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              A Unified Multi-Product Financial Distribution Platform led by Founder &amp; Chief Wealth Planner{" "}
              <strong className="text-white">Abhijit Sarkar</strong>. Serving families, retirees, and HNIs across Mumbai, Kolkata &amp; Pan-India.
            </p>
            <div className="flex flex-wrap gap-2 pt-1 text-[11px] font-bold text-emerald-300">
              <span className="bg-slate-800/90 px-2.5 py-1 rounded-md border border-slate-700">
                ₹10 Cr+ AUM
              </span>
              <span className="bg-slate-800/90 px-2.5 py-1 rounded-md border border-slate-700">
                25+ Yrs Experience
              </span>
              <span className="bg-slate-800/90 px-2.5 py-1 rounded-md border border-slate-700">
                40+ AMCs
              </span>
              <span className="bg-slate-800/90 px-2.5 py-1 rounded-md border border-slate-700">
                2,500+ Lives Protected
              </span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li><Link href="/about" className="hover:text-white">About Us</Link></li>
              <li><Link href="/services" className="hover:text-white">All 12 Financial Products</Link></li>
              <li><Link href="/calculators" className="hover:text-white">SIP &amp; Lumpsum Calculators</Link></li>
              <li><Link href="/suitability" className="hover:text-white">Portfolio Suitability Guide</Link></li>
              <li><Link href="/compliance" className="hover:text-white">Compliance &amp; Charter</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact Us</Link></li>
            </ul>
          </div>

          {/* Col 3: Wealth & Alternates */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-white">
              Wealth &amp; Alternates
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><Link href="/services/mutual-funds" className="hover:text-white">Mutual Funds &amp; SIPs</Link></li>
              <li><Link href="/services/equities" className="hover:text-white">Demat Account &amp; Broking</Link></li>
              <li><Link href="/services" className="hover:text-white">PMS &amp; AIF (Stallion / Carnelian)</Link></li>
              <li><Link href="/services" className="hover:text-white">Market Linked Debentures (MLD)</Link></li>
              <li><Link href="/services" className="hover:text-white">Smallcase &amp; Passive ETFs</Link></li>
              <li><Link href="/services" className="hover:text-white">GIFT City &amp; NRI Products</Link></li>
            </ul>
          </div>

          {/* Col 4: Debt, Loans & Insurance */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-white">
              Fixed Income &amp; Protection
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><Link href="/services/fixed-income" className="hover:text-white">AAA Corporate Fixed Deposits</Link></li>
              <li><Link href="/services/fixed-income" className="hover:text-white">Primary, RBI &amp; 54EC Bonds</Link></li>
              <li><Link href="/services" className="hover:text-white">Home Loan, LAP &amp; SME Loans</Link></li>
              <li><Link href="/services/insurance" className="hover:text-white">Life Insurance (Term / ULIP / Trad)</Link></li>
              <li><Link href="/services/insurance" className="hover:text-white">Health, Motor, Fire &amp; Marine</Link></li>
            </ul>
          </div>
        </div>

        {/* Statutory Regulatory Disclaimer Box */}
        <div className="pt-8 border-t border-slate-800 text-[11px] text-slate-400 space-y-2 leading-relaxed">
          <div className="flex items-center gap-1.5 text-emerald-400 font-bold">
            <ShieldCheck className="w-4 h-4" /> Mandatory Regulatory &amp; Non-Custodial Disclosures
          </div>
          <p>
            <strong>Mutual Fund &amp; Capital Market Risk:</strong> Mutual Fund investments and securities market investments are subject to market risks. Please read all scheme and offer-related documents carefully before investing.
          </p>
          <p>
            <strong>Insurance Solicitation:</strong> Insurance is the subject matter of solicitation. Life and General Insurance products are distributed through regulated IRDAI tie-ups.
          </p>
          <p>
            <strong>Zero Client Custody:</strong> Sarkar Capital operates strictly as an authorized financial distributor and intermediary (NIC 66120 &amp; 66220) and never accepts or pools client money into its own bank accounts.
          </p>
          <div className="pt-3 flex flex-wrap justify-between items-center gap-2 text-slate-500">
            <span>© {new Date().getFullYear()} Sarkar Capital. All rights reserved.</span>
            <span>Presence: Mumbai • Kolkata • Pan-India Digital Desk</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
