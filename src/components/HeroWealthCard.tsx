"use client";

import { ShieldCheck, TrendingUp, Lock, CheckCircle2, ArrowUpRight, Landmark } from "lucide-react";

export default function HeroWealthCard() {
  return (
    <div className="bg-navy-900 text-white rounded-3xl p-6 sm:p-7 border border-slate-800 shadow-2xl space-y-6 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute -top-20 -right-20 w-56 h-56 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header Row */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-4">
        <div className="flex items-center gap-2.5">
          <div className="p-2 bg-emerald-500/20 text-emerald-400 rounded-xl">
            <TrendingUp className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 block">
              Sample Family Wealth Architecture
            </span>
            <h4 className="text-sm sm:text-base font-bold text-white">
              Goal-Engineered 15-Year Blueprint
            </h4>
          </div>
        </div>
        <span className="inline-flex items-center gap-1 text-[11px] bg-slate-800 text-emerald-300 px-3 py-1 rounded-full font-semibold border border-slate-700">
          <Lock className="w-3 h-3" /> 100% Direct-to-AMC Custody
        </span>
      </div>

      {/* Main Corpus Projection Visual */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center bg-slate-900/90 p-4 rounded-2xl border border-slate-800">
        <div>
          <span className="text-[11px] text-slate-400 font-medium block">
            ₹25,000/mo SIP + 10% Annual Step-Up
          </span>
          <div className="text-2xl sm:text-3xl font-black text-white mt-1 flex items-baseline gap-2">
            ₹2.16 Cr
            <span className="text-xs font-bold text-emerald-400 inline-flex items-center">
              <ArrowUpRight className="w-3.5 h-3.5" /> @ 12.5% CAGR
            </span>
          </div>
          <span className="text-[11px] text-slate-400 mt-1 block">
            vs. ₹1.26 Cr without annual step-up (+₹90L extra wealth)
          </span>
        </div>

        {/* Mini SVG Growth Sparkline */}
        <div className="flex flex-col items-end justify-center">
          <svg viewBox="0 0 200 60" className="w-full h-14 overflow-visible">
            <defs>
              <linearGradient id="wealthGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#10b981" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#10b981" stopOpacity="0.0" />
              </linearGradient>
            </defs>
            {/* Baseline regular SIP curve */}
            <path
              d="M 5 55 Q 90 48, 195 30"
              fill="none"
              stroke="#64748b"
              strokeWidth="2"
              strokeDasharray="4 4"
            />
            {/* Step-up SIP curve */}
            <path
              d="M 5 55 Q 95 42, 195 6 L 195 58 L 5 58 Z"
              fill="url(#wealthGrad)"
            />
            <path
              d="M 5 55 Q 95 42, 195 6"
              fill="none"
              stroke="#10b981"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <circle cx="195" cy="6" r="4" className="fill-emerald-400" />
          </svg>
          <div className="flex items-center gap-4 text-[10px] text-slate-400 mt-1">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" /> Step-Up SIP
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-0.5 bg-slate-400 inline-block" /> Flat SIP
            </span>
          </div>
        </div>
      </div>

      {/* 3-Bucket Allocation Bar */}
      <div className="space-y-2">
        <div className="flex justify-between text-[11px] font-semibold text-slate-300">
          <span>Core Asset Allocation Mix</span>
          <span className="text-emerald-400">Rebalanced Annually</span>
        </div>
        <div className="h-2.5 w-full rounded-full overflow-hidden flex bg-slate-800">
          <div className="bg-emerald-500 h-full w-[60%]" title="Equity Growth (60%)" />
          <div className="bg-blue-500 h-full w-[25%]" title="Fixed Income & Gold (25%)" />
          <div className="bg-purple-500 h-full w-[15%]" title="Liquid Emergency Reserve (15%)" />
        </div>
        <div className="grid grid-cols-3 gap-2 pt-1 text-[10px] text-slate-300">
          <div className="bg-slate-800/70 p-2 rounded-lg border border-slate-700/60">
            <span className="text-emerald-400 font-bold block">60% Equity SIPs</span>
            <span className="text-slate-400">Flexi, Mid &amp; Index</span>
          </div>
          <div className="bg-slate-800/70 p-2 rounded-lg border border-slate-700/60">
            <span className="text-blue-400 font-bold block">25% Debt &amp; SGB</span>
            <span className="text-slate-400">AAA FDs &amp; Gold</span>
          </div>
          <div className="bg-slate-800/70 p-2 rounded-lg border border-slate-700/60">
            <span className="text-purple-400 font-bold block">15% Protection</span>
            <span className="text-slate-400">Liquid + Term Cover</span>
          </div>
        </div>
      </div>

      {/* Zero-Custody Clearing Pipeline */}
      <div className="pt-3 border-t border-slate-800 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-300">
        <span className="flex items-center gap-1.5 font-semibold text-white">
          <ShieldCheck className="w-4 h-4 text-emerald-400" /> How Your Money Moves:
        </span>
        <div className="flex items-center gap-1.5 text-[10px] font-medium">
          <span className="bg-slate-800 px-2 py-1 rounded border border-slate-700">Your Bank</span>
          <span className="text-emerald-400">→</span>
          <span className="bg-slate-800 px-2 py-1 rounded border border-slate-700">ICCL / NSE Clearing</span>
          <span className="text-emerald-400">→</span>
          <span className="bg-emerald-950 text-emerald-300 px-2 py-1 rounded border border-emerald-700/60 font-bold">
            Your Folio / Demat
          </span>
        </div>
      </div>
    </div>
  );
}
