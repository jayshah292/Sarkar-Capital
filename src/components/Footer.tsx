import Link from "next/link";
import { ShieldCheck, MapPin, Mail, Phone, Lock } from "lucide-react";

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
              Sarkar Capital Private Limited is an institutional financial distribution company facilitating mutual funds, secondary market equities, fixed income securities, and risk protection under NIC codes 66120 &amp; 66220.
            </p>
            <div className="pt-2 text-[11px] text-slate-400 space-y-1">
              <p>CIN: <span className="text-slate-200">U66120WB2026PTCXXXXXX (In Process)</span></p>
              <p>AMFI Corporate Desk: <span className="text-slate-200">ARN-Registered Intermediary</span></p>
              <p className="flex items-center gap-1.5 pt-1 text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                Khardaha, North 24 Parganas, Kolkata, West Bengal – 700117
              </p>
            </div>
          </div>

          {/* Regulated Product Desks */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">Product Desks</h4>
            <ul className="space-y-2 text-xs">
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
              <li>
                <Link href="/calculators" className="hover:text-emerald-400 transition">
                  SIP &amp; Wealth Calculators
                </Link>
              </li>
            </ul>
          </div>

          {/* Institutional Backing */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">Platform Partners</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>HDFC Securities (Authorised Person)</li>
              <li>IIFL Securities (Sub-Broker Desk)</li>
              <li>40+ Empaneled AMCs across India</li>
              <li>Direct Depository Routing (NSDL/CDSL)</li>
            </ul>
          </div>

          {/* Governance & Redressal */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">Governance</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/about" className="hover:text-emerald-400 transition">
                  About Corporate Bio
                </Link>
              </li>
              <li>
                <Link href="/compliance" className="hover:text-emerald-400 transition">
                  Investor Redressal Charter
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-emerald-400 transition">
                  Branch &amp; Desk Directory
                </Link>
              </li>
              <li>
                <Link href="/admin" className="hover:text-emerald-400 transition inline-flex items-center gap-1 text-slate-400">
                  <Lock className="w-3 h-3" /> Admin Studio
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Regulatory Disclaimers & Non-Custodial Notice */}
        <div className="border-t border-slate-800 pt-8 space-y-3 text-[11px] leading-relaxed text-slate-400">
          <p>
            <strong className="text-slate-200">Non-Custodial Architecture:</strong> Sarkar Capital Private Limited functions strictly as a financial product distributor and licensed intermediary under NIC 66120 and 66220. Sarkar Capital never solicits, accepts, or holds client deposits or funds in corporate accounts. 100% of investor capital routes directly to the respective Asset Management Companies (AMCs), clearing corporations (ICCL/NSE Clearing), or insurance underwriting companies.
          </p>
          <p>
            <strong className="text-slate-200">Market Risk Disclosure:</strong> Mutual fund investments and securities trading are subject to market risks. Read all scheme-related documents, offer circulars, and risk disclosure documents carefully before investing. Past performance is not indicative of future returns.
          </p>
          <p>
            <strong className="text-slate-200">Insurance Notice:</strong> Insurance is the subject matter of solicitation. Facilitated under licensed Point of Sales Person (PoSP) and corporate agency alignments.
          </p>

          <div className="flex flex-col sm:flex-row justify-between items-center pt-4 border-t border-slate-800 text-[11px] text-slate-400 gap-2">
            <p>© {new Date().getFullYear()} Sarkar Capital Private Limited. All rights reserved.</p>
            <p>Designed for disciplined, non-custodial wealth distribution.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
