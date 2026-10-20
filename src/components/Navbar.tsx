import Link from "next/link";
import { ShieldCheck } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <div className="bg-navy-900 p-2 rounded-lg text-white">
            <ShieldCheck className="h-5 w-5 text-emerald-400" />
          </div>
          <span className="text-xl font-bold tracking-tight text-navy-900">
            SARKAR <span className="text-emerald-600">CAPITAL</span>
          </span>
        </Link>
        <nav className="hidden md:flex gap-8 text-sm font-medium text-slate-700">
          <Link href="/" className="hover:text-emerald-600 transition">Home</Link>
          <Link href="/services" className="hover:text-emerald-600 transition">Offerings</Link>
          <Link href="/about" className="hover:text-emerald-600 transition">About Us</Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link
            href="/#consultation"
            className="rounded-lg bg-navy-900 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-slate-800 transition"
          >
            Book Consultation
          </Link>
        </div>
      </div>
    </header>
  );
}
