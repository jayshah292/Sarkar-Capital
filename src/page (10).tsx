import Link from "next/link";
import PartnerRail from "@/components/PartnerRail";
import {
  ShieldCheck,
  PieChart,
  LineChart,
  Briefcase,
  Layers,
  FileSpreadsheet,
  Coins,
  Lock,
  Landmark,
  Globe2,
  Home as HomeIcon,
  HeartHandshake,
  ArrowRight,
  CheckCircle2,
  PhoneCall,
} from "lucide-react";

export const metadata = {
  title: "All 12 Financial Products & Distribution Desks | Sarkar Capital",
  description:
    "Unified Multi-Product Platform offering Mutual Funds, Demat Account, PMS, AIF, MLD, Smallcase, ETF, Corporate FDs, Bonds, GIFT City Products, Home Loans, NRI Products, and Insurance.",
};

export default function ServicesPage() {
  const productCatalogue = [
    {
      number: "01",
      title: "Mutual Fund",
      subtitle: "40+ Empaneled AMCs",
      partners: "SBI AMC | HDFC AMC | ICICI AMC | Parag Parikh AMC | Nippon India AMC | Quant AMC & 35+ More",
      bullets: [
        "Equity, Flexi-Cap, Mid/Small-Cap & Index Funds",
        "Debt, Liquid, Overnight & Arbitrage Treasury Funds",
        "Hybrid, Multi-Asset & Dynamic Balanced Advantage Funds",
        "Tax-Saving ELSS & Goal-Based Step-Up SIPs",
      ],
      link: "/services/mutual-funds",
      icon: PieChart,
    },
    {
      number: "02",
      title: "Demat Account",
      subtitle: "Institutional Equity & Broking Desk",
      partners: "Nuvama | Axis Securities | IIFL Capital",
      bullets: [
        "100% Paperless NSDL / CDSL Demat & Trading Onboarding",
        "Direct Equity Delivery, IPO ASBA Bidding & F&O Execution",
        "Dedicated Relationship Manager & Research Reports",
        "Zero-Custody Direct Settlement via NSE Clearing / ICCL",
      ],
      link: "/services/equities",
      icon: LineChart,
    },
    {
      number: "03",
      title: "PMS (Portfolio Management Services)",
      subtitle: "Bespoke HNI Equity Portfolios (₹50L+ Mandate)",
      partners: "Stallion | Carnelian | Nuvama | ICICI | Motilal & More",
      bullets: [
        "High-conviction concentrated equity portfolios",
        "Direct stock ownership in your personal Demat account",
        "Transparent fee structures and quarterly fund manager reviews",
        "Curated multi-cap and thematic growth mandates",
      ],
      link: "/contact",
      icon: Briefcase,
    },
    {
      number: "04",
      title: "AIF (Alternative Investment Funds)",
      subtitle: "Institutional Private Credit & Long-Short Strategies (₹1Cr+)",
      partners: "Nuvama | Carnelian | Stallion | Leading Category II & III Houses",
      bullets: [
        "Category II Private Credit, Venture & Pre-IPO Funds",
        "Category III Long-Only and Market-Neutral Long-Short Funds",
        "Low correlation to standard public market volatility",
        "Tailored for Family Offices, Promoters & Ultra-HNIs",
      ],
      link: "/contact",
      icon: Layers,
    },
    {
      number: "05",
      title: "MLD (Market Linked Debentures)",
      subtitle: "Structured Payoffs with Principal Protection Options",
      partners: "Nuvama | Creso | IIFL Capital",
      bullets: [
        "Fixed-income safety combined with index-linked upside",
        "Principal-protected and yield-enhanced credit structures",
        "Issued by high-grade regulated NBFCs and corporate issuers",
        "Ideal for conservative HNIs seeking superior risk-adjusted yields",
      ],
      link: "/services/fixed-income",
      icon: ShieldCheck,
    },
    {
      number: "06",
      title: "Smallcase",
      subtitle: "Curated Thematic & Model Stock Baskets",
      partners: "Axis Securities | IIFL Capital | Nuvama",
      bullets: [
        "Invest in ready-made baskets of 10–25 researched stocks/ETFs",
        "Zero lock-in, zero exit load, and full dividend ownership",
        "Automated one-click quarterly rebalancing notifications",
        "Themes covering Manufacturing, Dividend Aristocrats, All-Weather & Momentum",
      ],
      link: "/services/equities",
      icon: FileSpreadsheet,
    },
    {
      number: "07",
      title: "ETF (Exchange Traded Funds)",
      subtitle: "Low-Cost Passive Index, Gold & Silver Investing",
      partners: "SBI AMC | Nippon India AMC | HDFC AMC | ICICI AMC",
      bullets: [
        "Nifty 50, Nifty Next 50, Bank Nifty & Factor ETFs",
        "Gold ETFs & Silver ETFs without locker or purity worries",
        "Ultra-low expense ratios with real-time NSE/BSE liquidity",
        "Ideal for core passive allocation and tactical satellite bets",
      ],
      link: "/services/equities",
      icon: Coins,
    },
    {
      number: "08",
      title: "FD (Corporate Fixed Deposits)",
      subtitle: "AAA / AA+ Rated High-Yield Corporate & HFC Deposits",
      partners: "Bajaj Finance | Shriram | ICICI Home Finance | LIC Housing Finance | Mahindra Finance | PNB Housing Finance",
      bullets: [
        "Earn higher guaranteed interest rates than traditional savings accounts",
        "Flexible Monthly, Quarterly, Annual & Cumulative payout options",
        "Extra senior citizen interest rate benefits (+0.25% to +0.50%)",
        "100% direct online investment into the issuing institution",
      ],
      link: "/services/fixed-income",
      icon: Lock,
    },
    {
      number: "09",
      title: "Bonds",
      subtitle: "Primary | Secondary | RBI | Capital Gain Bonds | NCDs",
      partners: "RBI Floating Rate | NHAI & REC 54EC | Creso | Prudent | Secondary Debt Desk",
      bullets: [
        "54EC Capital Gain Tax-Exemption Bonds (Save LTCG tax on property sale)",
        "RBI Floating Rate Savings Bonds & Sovereign Gold Bonds (SGBs)",
        "Primary & Secondary Market AAA/AA Rated Secured Corporate NCDs",
        "Predictable cash-flow laddering for retirees and family trusts",
      ],
      link: "/services/fixed-income",
      icon: Landmark,
    },
    {
      number: "10",
      title: "GIFT City Products",
      subtitle: "IFSCA-Regulated USD Global Inbound & Outbound Funds",
      partners: "Leading AMC & AIF GIFT City IFSC Desks",
      bullets: [
        "Invest in USD-denominated funds through India's International Financial Services Centre",
        "Seamless global diversification for Resident Indians (via LRS) and NRIs",
        "Tax-efficient offshore structuring without complex foreign bank setups",
        "Access global tech, US treasury, and inbound India feeder funds",
      ],
      link: "/contact",
      icon: Globe2,
    },
    {
      number: "11",
      title: "Home Loan & Credit Desk",
      subtitle: "Car | Home | LAP | Personal | Business | SME & Agri Loan",
      partners: "Leading Public & Private Sector Banks and Housing Finance Partners",
      bullets: [
        "Home Loans, Balance Transfers & Top-Up Mortgages at lowest rates",
        "Loan Against Property (LAP) & Loan Against Mutual Funds/Shares",
        "Business, Working Capital, SME & Commercial Vehicle Loans",
        "End-to-end documentation and fast doorstep sanction support",
      ],
      link: "/contact",
      icon: HomeIcon,
    },
    {
      number: "12",
      title: "NRI Products",
      subtitle: "Dedicated Wealth & Repatriation Desk for Global Indians",
      partners: "40+ AMCs | GIFT City IFSC | Nuvama | Axis | ICICI | HDFC",
      bullets: [
        "Paperless NRE / NRO Mutual Fund & SIP onboarding across major geographies",
        "GIFT City USD funds (tax-free capital gains for NRIs on select structures)",
        "PIS & Non-PIS Demat, PMS, and India Retirement / Property Return Planning",
        "Dedicated WhatsApp & Zoom portfolio review desk across time zones",
      ],
      link: "/contact",
      icon: Globe2,
    },
  ];

  return (
    <div className="space-y-0">
      {/* Top Poster-Style Banner (Inspired by Kotak Connect Plus Screenshot) */}
      <section className="bg-gradient-to-br from-navy-900 via-navy-800 to-emerald-950 text-white py-14 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" /> Unified Multi-Product Platform
              </div>
              <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
                One-Stop Solution for All Financial Products Distribution
              </h1>
              <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
                With <strong>25+ years in business</strong>, <strong>₹10 Cr+ AUM</strong>,{" "}
                <strong>40+ Empaneled AMCs</strong>, and <strong>2,500+ Lives Protected</strong>,
                Sarkar Capital gives your family institutional access to 12 core financial product verticals.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <Link
                href="/contact"
                className="bg-emerald-500 hover:bg-emerald-400 text-navy-950 font-black text-sm px-6 py-4 rounded-2xl text-center shadow-lg transition flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4" /> Contact Relationship Manager
              </Link>
              <Link
                href="/calculators"
                className="bg-white/10 hover:bg-white/15 text-white border border-white/20 font-bold text-xs px-6 py-3.5 rounded-2xl text-center transition"
              >
                Try SIP &amp; Lumpsum Calculators →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main 12-Product Detailed Matrix */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productCatalogue.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs hover:shadow-lg hover:border-emerald-500 transition flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-11 h-11 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-800">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-black text-slate-300">
                        PRODUCT #{item.number}
                      </span>
                    </div>

                    <div>
                      <h2 className="text-xl font-black text-navy-900 border-b-2 border-emerald-600 pb-1 inline-block">
                        {item.title}
                      </h2>
                      <p className="text-xs font-bold text-emerald-800 mt-1.5">
                        {item.subtitle}
                      </p>
                    </div>

                    <div className="bg-slate-50 rounded-xl p-3 border border-slate-200/70">
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 block mb-1">
                        Key Partners &amp; Issuers:
                      </span>
                      <p className="text-xs font-bold text-navy-900 leading-snug">
                        {item.partners}
                      </p>
                    </div>

                    <ul className="space-y-2 pt-1">
                      {item.bullets.map((b, bIdx) => (
                        <li
                          key={bIdx}
                          className="text-xs text-slate-600 flex items-start gap-2 leading-relaxed"
                        >
                          <span className="w-2 h-2 rounded-full bg-emerald-600 mt-1.5 shrink-0" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      href={item.link}
                      className="text-xs font-extrabold text-emerald-800 hover:text-emerald-950 inline-flex items-center gap-1"
                    >
                      Explore Desk <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <Link
                      href="/contact"
                      className="text-xs font-bold bg-navy-900 text-white px-3.5 py-1.5 rounded-lg hover:bg-navy-800 transition"
                    >
                      Get Quote
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Dedicated Life & General Insurance Breakdown (From Screenshot 1) */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-6">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-wider text-rose-700 bg-rose-50 px-3 py-1 rounded-full border border-rose-200">
                  2,500+ Lives Protected Across India
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-navy-900 mt-2">
                  Life, Health &amp; General Insurance Protection Desk
                </h2>
              </div>
              <Link
                href="/services/insurance"
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-5 py-3 rounded-xl transition"
              >
                Visit Dedicated Insurance Desk <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-center gap-2.5">
                  <HeartHandshake className="w-6 h-6 text-emerald-700" />
                  <h3 className="text-lg font-black text-navy-900 uppercase">
                    Life Insurance Solutions
                  </h3>
                </div>
                <p className="text-xs text-slate-600">
                  <strong>Partners:</strong> HDFC Life | SBI Life | LIC | Tata AIA | ICICI Prudential Life
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    "Term Plan (Pure Income Replacement)",
                    "Traditional Endowment & Guaranteed Plan",
                    "ULIP (Unit Linked Insurance Plan)",
                    "TULIP (Term with ULIP)",
                  ].map((plan, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-bold text-navy-900 flex items-center gap-2"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      {plan}
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="w-6 h-6 text-blue-700" />
                  <h3 className="text-lg font-black text-navy-900 uppercase">
                    General &amp; Health Insurance Solutions
                  </h3>
                </div>
                <p className="text-xs text-slate-600">
                  <strong>Partners:</strong> HDFC Ergo | SBI General | Tata AIG | ManipalCigna | ICICI Lombard
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {[
                    "Health Insurance",
                    "Motor Insurance",
                    "Fire Insurance",
                    "Engineering Insurance",
                    "Marine Insurance",
                    "Miscellaneous Insurance",
                  ].map((plan, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-bold text-navy-900 flex items-center gap-2"
                    >
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                      {plan}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PartnerRail />
    </div>
  );
}
