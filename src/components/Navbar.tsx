"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ShieldCheck,
  ChevronDown,
  Menu,
  X,
  TrendingUp,
  LineChart,
  Landmark,
  ShieldAlert,
  Calculator,
  Lock,
  PhoneCall,
  FileText,
  Building2,
  Layers,
} from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);
  const [governanceOpen, setGovernanceOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      {/* 1. Top Regulatory & Utility Ribbon */}
      <div className="bg-navy-900 text-slate-300 text-[11px] py-1.5 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1 text-emerald-400 font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" /> AMFI Registered Mutual Fund Distributor
            </span>
            <span className="hidden md:inline text-slate-600">|</span>
            <span className="hidden md:inline text-slate-400">
              NIC 66120 &amp; 66220 • 100% Non-Custodial Clearing
            </span>
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <Link href="/compliance" className="hover:text-emerald-400 transition">
              Investor Charter &amp; SCORES
            </Link>
            <span className="text-slate-600">•</span>
            <Link href="/admin" className="hover:text-emerald-400 transition flex items-center gap-1">
              <Lock className="w-3 h-3 text-slate-400" /> Admin Studio
            </Link>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Bar */}
      <div className="max-w-7xl mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="bg-navy-900 p-2 rounded-xl text-white shadow-xs group-hover:bg-slate-800 transition">
            <ShieldCheck className="h-5 w-5 text-emerald-400" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-black tracking-tight text-navy-900 leading-none">
              SARKAR <span className="text-emerald-600">CAPITAL</span>
            </span>
            <span className="text-[9px] font-bold tracking-widest uppercase text-slate-400 mt-0.5">
              Institutional Distribution Desk
            </span>
          </div>
        </Link>

        {/* Desktop Menu: Home -> About Us -> Products -> Calculators -> Contact Us */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-700">
          <Link href="/" className="hover:text-emerald-600 transition py-2">
            Home
          </Link>

          <Link href="/about" className="hover:text-emerald-600 transition py-2">
            About Us
          </Link>

          {/* Products Mega-Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <Link
              href="/services"
              className="flex items-center gap-1 hover:text-emerald-600 transition py-2"
            >
              Products <ChevronDown className="w-4 h-4 text-slate-400" />
            </Link>
            {productsOpen && (
              <div className="absolute top-full left-0 w-80 bg-white rounded-2xl shadow-xl border border-slate-200 p-3 grid gap-1">
                <Link
                  href="/services/mutual-funds"
                  className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition"
                >
                  <div className="p-2 bg-emerald-50 text-emerald-700 rounded-lg shrink-0">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-navy-900">Mutual Funds &amp; SIPs</div>
                    <div className="text-[11px] text-slate-500 font-normal">
                      40+ AMCs • Equity, Hybrid, Debt &amp; ELSS
                    </div>
                  </div>
                </Link>

                <Link
                  href="/services/equities"
                  className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition"
                >
                  <div className="p-2 bg-blue-50 text-blue-700 rounded-lg shrink-0">
                    <LineChart className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-navy-900">Equities &amp; Demat Desk</div>
                    <div className="text-[11px] text-slate-500 font-normal">
                      Authorised Desk: HDFC Securities &amp; IIFL
                    </div>
                  </div>
                </Link>

                <Link
                  href="/services/fixed-income"
                  className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition"
                >
                  <div className="p-2 bg-purple-50 text-purple-700 rounded-lg shrink-0">
                    <Landmark className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-navy-900">Fixed Income &amp; Bonds</div>
                    <div className="text-[11px] text-slate-500 font-normal">
                      SGBs, AAA Corporate FDs &amp; 54EC Bonds
                    </div>
                  </div>
                </Link>

                <Link
                  href="/services/insurance"
                  className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition"
                >
                  <div className="p-2 bg-rose-50 text-rose-700 rounded-lg shrink-0">
                    <ShieldAlert className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-navy-900">Insurance &amp; Risk Cover</div>
                    <div className="text-[11px] text-slate-500 font-normal">
                      Unbundled Pure Term &amp; Health Floaters
                    </div>
                  </div>
                </Link>

                <div className="border-t border-slate-100 mt-1 pt-1">
                  <Link
                    href="/services"
                    className="flex items-center justify-between px-3 py-2 rounded-xl bg-slate-50 hover:bg-emerald-50 text-xs font-bold text-navy-900 hover:text-emerald-800 transition"
                  >
                    <span className="flex items-center gap-2">
                      <Layers className="w-3.5 h-3.5 text-emerald-600" /> View Full Product Matrix &amp; PMS
                    </span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Calculators Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setToolsOpen(true)}
            onMouseLeave={() => setToolsOpen(false)}
          >
            <Link
              href="/calculators"
              className="flex items-center gap-1 hover:text-emerald-600 transition py-2"
            >
              Calculators <ChevronDown className="w-4 h-4 text-slate-400" />
            </Link>
            {toolsOpen && (
              <div className="absolute top-full left-0 w-72 bg-white rounded-2xl shadow-xl border border-slate-200 p-3 grid gap-1">
                <Link
                  href="/calculators"
                  className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition"
                >
                  <div className="p-2 bg-emerald-50 text-emerald-700 rounded-lg shrink-0">
                    <Calculator className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-navy-900">SIP &amp; Step-Up Engine</div>
                    <div className="text-[11px] text-slate-500 font-normal">
                      Monthly compounding with annual top-ups
                    </div>
                  </div>
                </Link>

                <Link
                  href="/calculators"
                  className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition"
                >
                  <div className="p-2 bg-blue-50 text-blue-700 rounded-lg shrink-0">
                    <Landmark className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-navy-900">Lumpsum &amp; Inflation Tool</div>
                    <div className="text-[11px] text-slate-500 font-normal">
                      One-time deployment in real purchasing power
                    </div>
                  </div>
                </Link>
              </div>
            )}
          </div>

          {/* Contact Us */}
          <Link href="/contact" className="hover:text-emerald-600 transition py-2">
            Contact Us
          </Link>
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <Link
            href="/#consultation"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-xl bg-navy-900 px-4 py-2.5 text-xs font-bold text-white shadow-xs hover:bg-slate-800 transition"
          >
            <PhoneCall className="w-3.5 h-3.5 text-emerald-400" /> Consult Desk
          </Link>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition"
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* 3. Mobile Slideout Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-4 shadow-xl">
          <div className="space-y-1">
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2 text-xs font-bold text-navy-900 hover:bg-slate-50 rounded-lg"
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2 text-xs font-bold text-navy-900 hover:bg-slate-50 rounded-lg"
            >
              About Us
            </Link>

            <div className="pt-2 pb-1 px-3 text-[10px] font-bold uppercase tracking-wider text-slate-400">
              Products
            </div>
            <Link
              href="/services"
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-2.5 px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 rounded-lg"
            >
              <Layers className="w-4 h-4 text-emerald-600" /> All Products &amp; Asset Matrix
            </Link>
            <Link
              href="/services/mutual-funds"
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-2.5 px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-emerald-50 rounded-lg"
            >
              <TrendingUp className="w-4 h-4 text-emerald-600" /> Mutual Funds &amp; SIPs
            </Link>
            <Link
              href="/services/equities"
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-2.5 px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-blue-50 rounded-lg"
            >
              <LineChart className="w-4 h-4 text-blue-600" /> Equities &amp; Demat (HDFC/IIFL)
            </Link>
            <Link
              href="/services/fixed-income"
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-2.5 px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-purple-50 rounded-lg"
            >
              <Landmark className="w-4 h-4 text-purple-600" /> Fixed Income &amp; SGBs
            </Link>
            <Link
              href="/services/insurance"
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-2.5 px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-rose-50 rounded-lg"
            >
              <ShieldAlert className="w-4 h-4 text-rose-600" /> Term &amp; Health Insurance
            </Link>

            <div className="pt-3 pb-1 px-3 text-[10px] font-bold uppercase tracking-wider text-slate-400">
              Calculators
            </div>
            <Link
              href="/calculators"
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-2.5 px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 rounded-lg"
            >
              <Calculator className="w-4 h-4 text-emerald-600" /> SIP, Step-Up &amp; Lumpsum Calculators
            </Link>

            <div className="pt-3 pb-1 px-3 text-[10px] font-bold uppercase tracking-wider text-slate-400">
              Connect
            </div>
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-2.5 px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 rounded-lg"
            >
              <PhoneCall className="w-4 h-4 text-slate-500" /> Contact Us
            </Link>
          </div>

          <div className="pt-2">
            <Link
              href="/#consultation"
              onClick={() => setMobileOpen(false)}
              className="block w-full py-2.5 bg-navy-900 text-white text-center font-bold text-xs rounded-xl shadow-md"
            >
              Request Portfolio Review
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
