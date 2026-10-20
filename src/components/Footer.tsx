import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-900 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <span className="text-xl font-bold tracking-tight text-white">
              SARKAR <span className="text-emerald-400">CAPITAL</span>
            </span>
            <p className="mt-3 text-xs leading-relaxed text-slate-400 max-w-md">
              A premier wealth management and financial product distribution company. Empowering salaried individuals, retail investors, and HNIs through regulated institutional partners.
            </p>
            <div className="mt-4 text-xs space-y-1">
              <p>CIN: <span className="text-slate-300">U66120WB2026PTCXXXXXX (In Process)</span></p>
              <p>AMFI Corporate ARN: <span className="text-slate-300">ARN-XXXXXX</span> | EUIN: <span className="text-slate-300">E-XXXXXX</span></p>
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold text-xs uppercase tracking-wider mb-3">Offerings</h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/services" className="hover:text-emerald-400">Mutual Funds & SIPs</Link></li>
              <li><Link href="/services" className="hover:text-emerald-400">Demat / Equity Broking</Link></li>
              <li><Link href="/services" className="hover:text-emerald-400">Fixed Income & SGBs</Link></li>
              <li><Link href="/services" className="hover:text-emerald-400">HNI PMS / AIF Solutions</Link></li>
              <li><Link href="/services" className="hover:text-emerald-400">Term & Health Insurance</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold text-xs uppercase tracking-wider mb-3">Institutional Partners</h4>
            <ul className="space-y-2 text-xs">
              <li>HDFC Securities (Authorised Person)</li>
              <li>IIFL Securities (Sub-broker Desk)</li>
              <li>Empaneled AMCs across India</li>
            </ul>
          </div>
        </div>

        {/* Regulatory Disclaimers */}
        <div className="border-t border-slate-800 pt-8 space-y-3 text-[11px] leading-relaxed text-slate-400">
          <p>
            <strong className="text-slate-300">Operating Clarification:</strong> Sarkar Capital functions strictly as a distributor/intermediary of financial products and is not an Asset Management Company (AMC), Portfolio Manager, or Non-Banking Financial Company (NBFC). Sarkar Capital never solicits or accepts deposits or client funds directly into its corporate accounts. All investment payments are made directly to the respective AMCs, stock broker clearing corporations, or insurance providers.
          </p>
          <p>
            <strong className="text-slate-300">Mutual Fund Disclaimer:</strong> Mutual Fund investments are subject to market risks. Please read all scheme-related documents carefully before investing. Past performance is not indicative of future returns.
          </p>
          <p>
            <strong className="text-slate-300">Insurance Disclaimer:</strong> Insurance is the subject matter of solicitation. Sarkar Capital acts as a facilitator through licensed Point of Sales Person (PoSP) / Corporate Agency frameworks.
          </p>
          <div className="flex flex-col sm:flex-row justify-between pt-4 border-t border-slate-800/60 text-xs">
            <p>© {new Date().getFullYear()} Sarkar Capital. All rights reserved.</p>
            <p>Built for disciplined wealth creation.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
