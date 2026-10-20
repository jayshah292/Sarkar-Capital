import Link from "next/link";
import { TrendingUp, BarChart2, Shield, Gem } from "lucide-react";

export default function ServicesPage() {
  const verticals = [
    {
      title: "Mutual Funds & SIP Planning",
      icon: TrendingUp,
      desc: "Systematic investment plans across large, mid, small, multi-cap, and balanced advantage funds with milestone rebalancing.",
      items: ["Tax-saving ELSS portfolios", "Goal-based SIP roadmaps", "Direct transfer to AMCs"],
    },
    {
      title: "Equities & Secondary Market",
      icon: BarChart2,
      desc: "Fast trading and Demat account setups through institutional channels including HDFC Securities and IIFL.",
      items: ["Direct equity trading access", "Exchange-Traded Funds (ETFs)", "Real-time market execution"],
    },
    {
      title: "Fixed Income & Capital Safety",
      icon: Shield,
      desc: "Guaranteed and government-backed avenues structured for steady cash flows and preservation of capital.",
      items: ["Sovereign Gold Bonds (SGBs)", "Corporate Fixed Deposits (AAA rated)", "Government Securities & Bonds"],
    },
    {
      title: "HNI Solutions (PMS / AIF)",
      icon: Gem,
      desc: "Tailored strategies and concentrated mandates for qualified investors requiring customized asset deployment.",
      items: ["Portfolio Management Services", "Alternative Investment Funds (Cat II/III)", "Direct portfolio review"],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
      <div>
        <h1 className="text-4xl font-extrabold text-navy-900 tracking-tight">Financial Products & Solutions</h1>
        <p className="mt-3 text-slate-600 max-w-2xl text-sm leading-relaxed">
          Explore our complete range of regulated investment and protection products distributed via licensed institutions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {verticals.map((v, i) => {
          const Icon = v.icon;
          return (
            <div key={i} className="bg-white rounded-2xl p-8 border border-slate-200 space-y-4">
              <div className="p-3 bg-emerald-50 text-emerald-700 w-fit rounded-xl">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-navy-900">{v.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{v.desc}</p>
              <ul className="text-xs space-y-2 border-t border-slate-100 pt-4 text-slate-700">
                {v.items.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      <div className="p-8 bg-navy-900 rounded-2xl text-white flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-xl font-bold">Need a tailored financial review?</h3>
          <p className="text-xs text-slate-400 mt-1">Our certified specialists will evaluate your existing allocations.</p>
        </div>
        <Link
          href="/#consultation"
          className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-lg text-sm transition"
        >
          Book Your Call
        </Link>
      </div>
    </div>
  );
}
