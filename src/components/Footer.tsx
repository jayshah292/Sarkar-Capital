import Link from "next/link";
import { ShieldCheck, Mail, Phone, MapPin, Lock, FileText, Building2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-slate-300 border-t border-slate-800">
      {/* Main Footer Links & Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Column 1 & 2: Brand & Overview */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="bg-emerald-600 p-2 rounded-xl text-white">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <span className="text-xl font-black tracking-tight text-white">
                SARKAR <span className="text-emerald-400">CAPITAL</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Modern wealth management and financial product distribution partner. Operating across Mumbai, Kolkata, and Pan-India under AMFI Corporate ARN and NIC codes 66120 &amp; 66220.
            </p>
            <div className="space-y-1.5 text-xs text-slate-400 pt-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Mumbai | Kolkata | Pan-India Digital Desk</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>desk@sarkarcapital.in</span>
              </div>
            </div>
          </div>

          {/* Column 3: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Navigation</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><Link href="/" className="hover:text-emerald-400 transition">Home</Link></li>
              <li><Link href="/about" className="hover:text-emerald-400 transition">About Us</Link></li>
              <li><Link href="/services" className="hover:text-emerald-400 transition">Products &amp; Services</Link></li>
              <li><Link href="/calculators" className="hover:text-emerald-400 transition">Calculators Hub</Link></li>
              <li><Link href="/suitability" className="hover:text-emerald-400 transition">Investor Suitability</Link></li>
              <li><Link href="/contact" className="hover:text-emerald-400 transition">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 4: Product Desks */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Wealth Desks</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><Link href="/services/mutual-funds" className="hover:text-emerald-400 transition">Mutual Funds &amp; SIPs</Link></li>
              <li><Link href="/services/equities" className="hover:text-emerald-400 transition">Equities &amp; Demat (HDFC/IIFL)</Link></li>
              <li><Link href="/services/fixed-income" className="hover:text-emerald-400 transition">Fixed Income &amp; SGBs</Link></li>
              <li><Link href="/services/insurance" className="hover:text-emerald-400 transition">Term &amp; Health Insurance</Link></li>
            </ul>
          </div>

          {/* Column 5: Governance & Admin */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Governance</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><Link href="/compliance" className="hover:text-emerald-400 transition">Investor Charter &amp; SCORES</Link></li>
              <li><Link href="/compliance" className="hover:text-emerald-400 transition">Grievance Escalation Matrix</Link></li>
              <li><Link href="/admin" className="hover:text-emerald-400 transition flex items-center gap-1 text-emerald-400 font-semibold"><Lock className="w-3 h-3" /> Admin Studio</Link></li>
            </ul>
          </div>

        </div>

        {/* Regulatory Disclaimers Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 space-y-4 text-[11px] text-slate-500 leading-relaxed">
          <p>
            <strong className="text-slate-400">AMFI &amp; SEBI Disclaimer:</strong> Mutual fund investments are subject to market risks; read all scheme-related documents carefully before investing. Sarkar Capital Private Limited acts as an AMFI-registered mutual fund distributor and financial intermediary. We do not collect client funds directly into corporate accounts; all transactions route through regulated clearing corporations (ICCL / NSE Clearing) or AMCs.
          </p>
          <p>
            <strong className="text-slate-400">IRDAI Disclaimer:</strong> Insurance is the subject matter of solicitation. Sarkar Capital facilitates life and health insurance distribution under IRDAI-regulated PoSP / Corporate Agency frameworks.
          </p>
          <div className="flex flex-wrap justify-between items-center pt-4 border-t border-slate-800/60 text-slate-400 text-xs">
            <span>&copy; {new Date().getFullYear()} Sarkar Capital Private Limited. All rights reserved.</span>
            <span>NIC 66120 &amp; 66220 • Designed for Institutional Credibility</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
