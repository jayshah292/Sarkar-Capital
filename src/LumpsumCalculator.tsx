"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Landmark, ArrowRight, ShieldCheck } from "lucide-react";

export default function LumpsumCalculator() {
  const [initialInvestment, setInitialInvestment] = useState<number>(500000);
  const [expectedReturn, setExpectedReturn] = useState<number>(12);
  const [timePeriod, setTimePeriod] = useState<number>(10);
  const [inflationRate, setInflationRate] = useState<number>(6);
  const [adjustInflation, setAdjustInflation] = useState<boolean>(false);

  const { totalInvested, estimatedReturns, totalCorpus, realPurchasingPower } = useMemo(() => {
    const rate = expectedReturn / 100;
    const nominalCorpus = initialInvestment * Math.pow(1 + rate, timePeriod);
    const nominalReturns = nominalCorpus - initialInvestment;

    const realRate = adjustInflation ? (1 + rate) / (1 + inflationRate / 100) - 1 : rate;
    const realCorpus = initialInvestment * Math.pow(1 + realRate, timePeriod);

    return {
      totalInvested: Math.round(initialInvestment),
      estimatedReturns: Math.round(nominalReturns),
      totalCorpus: Math.round(nominalCorpus),
      realPurchasingPower: Math.round(realCorpus),
    };
  }, [initialInvestment, expectedReturn, timePeriod, adjustInflation, inflationRate]);

  const formatINR = (value: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(value);
  };

  const investedPercentage = Math.round((totalInvested / totalCorpus) * 100) || 0;
  const returnsPercentage = 100 - investedPercentage;

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
      <div className="bg-navy-900 text-white p-6 sm:p-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-blue-500/20 text-blue-400 rounded-xl">
            <Landmark className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold">Lumpsum & Purchasing Power Simulator</h3>
            <p className="text-xs text-slate-400">Institutional compounding engine with real-terms inflation adjustments</p>
          </div>
        </div>
        <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 bg-slate-800 rounded-full text-[11px] text-blue-400 font-semibold border border-slate-700">
          <ShieldCheck className="w-3.5 h-3.5" /> Annual Compounding
        </div>
      </div>

      <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Sliders Form */}
        <div className="lg:col-span-7 space-y-6">
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs font-bold text-slate-700 uppercase">One-Time Lumpsum Capital</label>
              <span className="text-base font-extrabold text-navy-900 bg-blue-50 px-3 py-1 rounded-lg border border-blue-200">
                {formatINR(initialInvestment)}
              </span>
            </div>
            <input
              type="range"
              min={25000}
              max={10000000}
              step={25000}
              value={initialInvestment}
              onChange={(e) => setInitialInvestment(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
            <div className="flex justify-between text-[11px] text-slate-500 font-medium mt-1">
              <span>₹25,000</span>
              <span>₹50,00,000</span>
              <span>₹1,00,00,000</span>
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs font-bold text-slate-700 uppercase">Expected Return Rate (p.a.)</label>
              <span className="text-base font-extrabold text-navy-900 bg-blue-50 px-3 py-1 rounded-lg border border-blue-200">
                {expectedReturn}%
              </span>
            </div>
            <input
              type="range"
              min={4}
              max={24}
              step={0.5}
              value={expectedReturn}
              onChange={(e) => setExpectedReturn(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
            <div className="flex justify-between text-[11px] text-slate-500 font-medium mt-1">
              <span>4% (Conservative Debt)</span>
              <span>12% (Equity Index)</span>
              <span>24% (Alpha Aggressive)</span>
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs font-bold text-slate-700 uppercase">Investment Horizon</label>
              <span className="text-base font-extrabold text-navy-900 bg-blue-50 px-3 py-1 rounded-lg border border-blue-200">
                {timePeriod} Years
              </span>
            </div>
            <input
              type="range"
              min={1}
              max={30}
              step={1}
              value={timePeriod}
              onChange={(e) => setTimePeriod(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
            <div className="flex justify-between text-[11px] text-slate-500 font-medium mt-1">
              <span>1 Year</span>
              <span>15 Years</span>
              <span>30 Years</span>
            </div>
          </div>

          {/* Inflation Toggle */}
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-slate-900 uppercase block">Adjust for Real Inflation</span>
                <span className="text-[11px] text-slate-500">Calculate actual purchasing power in today&apos;s money</span>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={adjustInflation}
                  onChange={(e) => setAdjustInflation(e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-slate-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>

            {adjustInflation && (
              <div className="pt-2 border-t border-slate-200">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs text-slate-700 font-semibold">Assumed Annual Inflation:</span>
                  <span className="text-xs font-bold text-blue-700 bg-blue-100 px-2 py-0.5 rounded">
                    {inflationRate}% p.a.
                  </span>
                </div>
                <input
                  type="range"
                  min={4}
                  max={10}
                  step={0.5}
                  value={inflationRate}
                  onChange={(e) => setInflationRate(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
              </div>
            )}
          </div>
        </div>

        {/* Wealth Output Card */}
        <div className="lg:col-span-5 bg-slate-50 rounded-2xl p-6 border border-slate-200 space-y-6">
          <div>
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              {adjustInflation ? "Real Value (Today's Purchasing Power)" : "Estimated Maturity Corpus"}
            </span>
            <div className="text-3xl sm:text-4xl font-extrabold text-navy-900 mt-1">
              {formatINR(adjustInflation ? realPurchasingPower : totalCorpus)}
            </div>
            {adjustInflation && (
              <p className="text-xs text-slate-500 mt-1">
                Nominal maturity value: <strong className="text-slate-800">{formatINR(totalCorpus)}</strong>
              </p>
            )}
          </div>

          <div className="space-y-1.5">
            <div className="h-3 w-full bg-slate-200 rounded-full overflow-hidden flex">
              <div
                style={{ width: `${investedPercentage}%` }}
                className="bg-slate-400 h-full transition-all duration-300"
              />
              <div
                style={{ width: `${returnsPercentage}%` }}
                className="bg-blue-600 h-full transition-all duration-300"
              />
            </div>
            <div className="flex justify-between text-[11px] text-slate-600 font-semibold">
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-400 inline-block" />
                Capital ({investedPercentage}%)
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-600 inline-block" />
                Wealth Gain ({returnsPercentage}%)
              </span>
            </div>
          </div>

          <div className="space-y-3 pt-4 border-t border-slate-200 text-sm">
            <div className="flex justify-between items-center">
              <span className="text-slate-600">Total Capital Invested</span>
              <span className="font-bold text-slate-900">{formatINR(totalInvested)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-600">Total Gains</span>
              <span className="font-bold text-blue-600">+{formatINR(estimatedReturns)}</span>
            </div>
          </div>

          <Link
            href="/#consultation"
            className="w-full py-3.5 bg-navy-900 hover:bg-slate-800 text-white font-semibold rounded-xl text-xs sm:text-sm transition flex items-center justify-center gap-2 shadow-md"
          >
            Deploy Lumpsum Allocation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
