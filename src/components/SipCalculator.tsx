"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Calculator, ArrowRight, TrendingUp } from "lucide-react";

export default function SipCalculator() {
  const [monthlyInvestment, setMonthlyInvestment] = useState<number>(10000);
  const [expectedReturn, setExpectedReturn] = useState<number>(12);
  const [timePeriod, setTimePeriod] = useState<number>(10);
  const [stepUpPercent, setStepUpPercent] = useState<number>(0);
  const [enableStepUp, setEnableStepUp] = useState<boolean>(false);

  const { totalInvested, estimatedReturns, totalCorpus } = useMemo(() => {
    const monthlyRate = expectedReturn / 12 / 100;
    const totalMonths = timePeriod * 12;

    let invested = 0;
    let corpus = 0;
    let currentMonthly = monthlyInvestment;

    for (let month = 1; month <= totalMonths; month++) {
      if (enableStepUp && month > 1 && (month - 1) % 12 === 0) {
        currentMonthly += currentMonthly * (stepUpPercent / 100);
      }
      invested += currentMonthly;
      corpus = (corpus + currentMonthly) * (1 + monthlyRate);
    }

    const returns = corpus - invested;
    return {
      totalInvested: Math.round(invested),
      estimatedReturns: Math.round(returns),
      totalCorpus: Math.round(corpus),
    };
  }, [monthlyInvestment, expectedReturn, timePeriod, enableStepUp, stepUpPercent]);

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
          <div className="p-2.5 bg-emerald-500/20 text-emerald-400 rounded-xl">
            <Calculator className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold">SIP & Step-Up Wealth Engine</h3>
            <p className="text-xs text-slate-400">Institutional compounding calculator with annual salary step-up</p>
          </div>
        </div>
        <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 bg-slate-800 rounded-full text-[11px] text-emerald-400 font-semibold border border-slate-700">
          <TrendingUp className="w-3.5 h-3.5" /> Compounded Monthly
        </div>
      </div>

      <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Sliders Form */}
        <div className="lg:col-span-7 space-y-6">
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs font-bold text-slate-700 uppercase">Monthly SIP Contribution</label>
              <span className="text-base font-extrabold text-navy-900 bg-emerald-50 px-3 py-1 rounded-lg border border-emerald-200">
                {formatINR(monthlyInvestment)}
              </span>
            </div>
            <input
              type="range"
              min={1000}
              max={200000}
              step={1000}
              value={monthlyInvestment}
              onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
            />
            <div className="flex justify-between text-[11px] text-slate-600 font-medium mt-1">
              <span>₹1,000</span>
              <span>₹1,00,000</span>
              <span>₹2,00,000</span>
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs font-bold text-slate-700 uppercase">Expected Return Rate (p.a.)</label>
              <span className="text-base font-extrabold text-navy-900 bg-emerald-50 px-3 py-1 rounded-lg border border-emerald-200">
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
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
            />
            <div className="flex justify-between text-[11px] text-slate-600 font-medium mt-1">
              <span>4% (Conservative Debt)</span>
              <span>12% (Equity Index)</span>
              <span>24% (Alpha Aggressive)</span>
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs font-bold text-slate-700 uppercase">Investment Horizon</label>
              <span className="text-base font-extrabold text-navy-900 bg-emerald-50 px-3 py-1 rounded-lg border border-emerald-200">
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
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
            />
            <div className="flex justify-between text-[11px] text-slate-600 font-medium mt-1">
              <span>1 Year</span>
              <span>15 Years</span>
              <span>30 Years</span>
            </div>
          </div>

          {/* Step-Up Toggle Box */}
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-slate-900 uppercase block">Annual Step-Up (Top-Up)</span>
                <span className="text-[11px] text-slate-500">Automatically increment SIP along with annual salary appraisals</span>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={enableStepUp}
                  onChange={(e) => setEnableStepUp(e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-slate-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"></div>
              </label>
            </div>

            {enableStepUp && (
              <div className="pt-2 border-t border-slate-200">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs text-slate-700 font-semibold">Annual Hike Percentage:</span>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                    +{stepUpPercent}% yearly
                  </span>
                </div>
                <input
                  type="range"
                  min={5}
                  max={25}
                  step={5}
                  value={stepUpPercent}
                  onChange={(e) => setStepUpPercent(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                />
              </div>
            )}
          </div>
        </div>

        {/* Wealth Output Card */}
        <div className="lg:col-span-5 bg-slate-50 rounded-2xl p-6 border border-slate-200 space-y-6">
          <div>
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Projected Portfolio Corpus</span>
            <div className="text-3xl sm:text-4xl font-extrabold text-navy-900 mt-1">
              {formatINR(totalCorpus)}
            </div>
            <p className="text-xs text-slate-500 mt-1">
              Calculated over {timePeriod} years compounded monthly.
            </p>
          </div>

          {/* Visual Percentage Breakdown Bar */}
          <div className="space-y-1.5">
            <div className="h-3 w-full bg-slate-200 rounded-full overflow-hidden flex">
              <div
                style={{ width: `${investedPercentage}%` }}
                className="bg-slate-400 h-full transition-all duration-300"
                title={`Invested: ${investedPercentage}%`}
              />
              <div
                style={{ width: `${returnsPercentage}%` }}
                className="bg-emerald-500 h-full transition-all duration-300"
                title={`Returns: ${returnsPercentage}%`}
              />
            </div>
            <div className="flex justify-between text-[11px] text-slate-600 font-semibold">
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-400 inline-block" />
                Invested ({investedPercentage}%)
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" />
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
              <span className="text-slate-600">Estimated Gains</span>
              <span className="font-bold text-emerald-600">+{formatINR(estimatedReturns)}</span>
            </div>
          </div>

          <Link
            href="/#consultation"
            className="w-full py-3.5 bg-navy-900 hover:bg-slate-800 text-white font-semibold rounded-xl text-xs sm:text-sm transition flex items-center justify-center gap-2 shadow-md"
          >
            Deploy This Strategy with an Advisor <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
