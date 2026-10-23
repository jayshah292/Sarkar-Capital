"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, ShieldCheck, PhoneCall } from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const productLinks = [
    { name: "Mutual Funds (40+ AMCs)", href: "/services/mutual-funds" },
    { name: "Demat Account & Equities", href: "/services/equities" },
    { name: "PMS & AIF (HNI Alternates)", href: "/services" },
    { name: "MLD, Smallcase & ETFs", href: "/services" },
    { name: "Corporate FDs & Bonds", href: "/services/fixed-income" },
    { name: "GIFT City & NRI Products", href: "/services" },
    { name: "Home Loans & Insurance Desk", href: "/services/insurance" },
    { name: "View All 12 Products →", href: "/services" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-2xs">
      {/* Top Credibility Bar */}
      <div className="bg-navy-900 text-slate-300 text-[11px] py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 font-semibold text-emerald-300">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>25+ Years in Business • ₹10 Cr+ AUM • 40+ AMCs • 2,500+ Lives Protected</span>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-[11px]">
            <span>Mumbai • Kolkata • Pan-India</span>
            <Link href="/compliance" className="hover:text-white underline underline-offset-2">
              Regulatory Disclosures
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation Row: Home ➔ About Us ➔ Products ➔ Calculators ➔ Contact Us */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-navy-900 text-emerald-400 font-black text-lg flex items-center justify-center shadow-xs">
            SC
          </div>
          <div>
            <span className="text-lg font-black text-navy-900 tracking-tight block leading-none">
              SARKAR CAPITAL
            </span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-700 block mt-0.5">
              Unified Wealth Platform
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-bold text-slate-700">
          <Link href="/" className="hover:text-emerald-700 transition">
            Home
          </Link>
          <Link href="/about" className="hover:text-emerald-700 transition">
            About Us
          </Link>

          {/* Products Dropdown */}
          <div className="relative group">
            <Link
              href="/services"
              className="inline-flex items-center gap-1 hover:text-emerald-700 transition py-2"
            >
              <span>Products</span>
              <ChevronDown className="w-4 h-4 text-slate-400 group-hover:rotate-180 transition-transform" />
            </Link>
            <div className="absolute left-0 top-full pt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 z-50">
              <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-2 space-y-1">
                {productLinks.map((item, i) => (
                  <Link
                    key={i}
                    href={item.href}
                    className="block px-3.5 py-2 rounded-xl text-xs font-bold text-slate-700 hover:bg-emerald-50 hover:text-emerald-800 transition"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link href="/calculators" className="hover:text-emerald-700 transition">
            Calculators
          </Link>
          <Link href="/contact" className="hover:text-emerald-700 transition">
            Contact Us
          </Link>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/contact"
            className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-extrabold px-4 py-2.5 rounded-xl shadow-xs transition inline-flex items-center gap-1.5"
          >
            <PhoneCall className="w-3.5 h-3.5" /> Book Consultation
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 rounded-lg text-navy-900 hover:bg-slate-100"
          aria-label="Toggle Menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3">
          <Link
            href="/"
            onClick={() => setMobileOpen(false)}
            className="block py-2 text-sm font-bold text-navy-900 border-b border-slate-100"
          >
            Home
          </Link>
          <Link
            href="/about"
            onClick={() => setMobileOpen(false)}
            className="block py-2 text-sm font-bold text-navy-900 border-b border-slate-100"
          >
            About Us
          </Link>
          <div className="py-2 border-b border-slate-100 space-y-2">
            <Link
              href="/services"
              onClick={() => setMobileOpen(false)}
              className="block text-sm font-black text-emerald-800"
            >
              All 12 Financial Products →
            </Link>
            <div className="grid grid-cols-2 gap-1.5 pl-2">
              {productLinks.slice(0, 6).map((item, i) => (
                <Link
                  key={i}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-xs font-semibold text-slate-600 py-1"
                >
                  • {item.name}
                </Link>
              ))}
            </div>
          </div>
          <Link
            href="/calculators"
            onClick={() => setMobileOpen(false)}
            className="block py-2 text-sm font-bold text-navy-900 border-b border-slate-100"
          >
            SIP &amp; Wealth Calculators
          </Link>
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="block py-2 text-sm font-bold text-navy-900"
          >
            Contact Us
          </Link>
        </div>
      )}
    </header>
  );
}
