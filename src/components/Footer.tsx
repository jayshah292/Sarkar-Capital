import Link from "next/link";
import { ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-slate-300 border-t border-slate-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-white">
              <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white font-black text-sm flex items-center justify-center">
                SC
              </div>
              <span className="font-extrabold text-base tracking-tight">SARKAR CAPITAL</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Institutional-grade financial product distribution engineered on radical transparency, non-custodial execution, and multi-asset wealth architecture.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">Quick Navigation</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/" className="hover:text-emerald-400 transition">Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-emerald-400 transition">About Us</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-emerald-400 transition">Products &amp; Offerings</Link>
              </li>
              <li>
                <Link href="/calculators" className="hover:text-emerald-400 transition">Wealth Calculators</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-emerald-400 transition">Contact Us</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">Core Products</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/services/mutual-funds" className="hover:text-emerald-400 transition">Mutual Funds</Link>
              </li>
              <li>
                <Link href="/services/equities" className="hover:text-emerald-400 transition">Equities &amp; Demat</Link>
              </li>
              <li>
                <Link href="/services/fixed-income" className="hover:text-emerald-400 transition">Corporate FDs &amp; Bonds</Link>
              </li>
              <li>
                <Link href="/services/insurance" className="hover:text-emerald-400 transition">Family Life &amp; Health Cover</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">Regulatory &amp; Compliance</h4>
            <p className="text-xs text-slate-400 mb-3">
              AMFI Registered Mutual Fund Distributor. Non-custodial operations with zero client funds held directly.
            </p>
            <Link
              href="/compliance"
              className="inline-flex items-center gap-1.5 text-xs text-emerald-400 hover:text-emerald-300 font-semibold"
            >
              <ShieldCheck className="w-3.5 h-3.5" /> View Compliance Disclosures
            </Link>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            © {new Date().getFullYear()} Sarkar Capital Private Limited. All rights reserved.
          </div>
          <div>
            Locations: Mumbai • Kolkata • Pan-India
          </div>
        </div>
      </div>
    </footer>
  );
}
