"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import {
  CheckCircle2,
  AlertCircle,
  Loader2,
  ShieldCheck,
  Sparkles,
  Lock,
  ArrowRight,
} from "lucide-react";

export default function ConsultationForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    service: "Mutual Funds & Goal SIPs",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { error: dbError } = await supabase.from("inquiries").insert([
      {
        full_name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        service: formData.service,
        message: formData.message,
      },
    ]);

    setLoading(false);

    if (dbError) {
      setError("Unable to submit right now. Please verify your details or chat with us on WhatsApp.");
    } else {
      setSuccess(true);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        service: "Mutual Funds & Goal SIPs",
        message: "",
      });
    }
  };

  return (
    <div
      className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-2xl relative overflow-hidden"
      id="consultation"
    >
      {/* Top Accent Strip */}
      <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-[11px] font-bold text-emerald-800 mb-3">
        <Sparkles className="w-3.5 h-3.5 text-emerald-600" /> Complimentary 30-Min Wealth Session
      </div>

      <h3 className="text-2xl font-extrabold text-navy-900 leading-snug">
        Get Your Free 1-on-1 Portfolio X-Ray
      </h3>
      <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
        Whether you&apos;re starting your first ₹10,000 SIP or managing a ₹1 Crore+ family corpus, get an unbiased review from NISM-certified specialists.
      </p>

      {/* Value Checklist */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 my-4 p-3 bg-slate-50 rounded-2xl border border-slate-100 text-[11px] font-semibold text-slate-700">
        <div className="flex items-center gap-1.5">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
          <span>Spot Fund Overlap</span>
        </div>
        <div className="flex items-center gap-1.5">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
          <span>LTCG Tax Check</span>
        </div>
        <div className="flex items-center gap-1.5">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
          <span>₹0 Upfront Fee</span>
        </div>
      </div>

      {success ? (
        <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-3 my-4">
          <CheckCircle2 className="h-12 w-12 text-emerald-600 mx-auto" />
          <h4 className="text-emerald-950 font-bold text-lg">Your Portfolio X-Ray Request is Confirmed!</h4>
          <p className="text-xs text-emerald-800 leading-relaxed max-w-sm mx-auto">
            Our NISM-certified wealth desk will reach out within 24 business hours via phone/WhatsApp to schedule your slot.
          </p>
          <button
            onClick={() => setSuccess(false)}
            className="text-xs font-bold text-emerald-700 underline pt-2"
          >
            Submit another inquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl flex items-center gap-2">
              <AlertCircle className="h-4 w-4 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <div>
            <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
              Your Full Name *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Subhajit Chatterjee"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              className="w-full px-4 py-2.5 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div>
              <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                WhatsApp / Mobile *
              </label>
              <input
                type="tel"
                required
                placeholder="+91 98765 43210"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-2.5 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <div>
              <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                Email Address *
              </label>
              <input
                type="email"
                required
                placeholder="you@domain.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2.5 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
              What Would You Like To Plan?
            </label>
            <select
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              className="w-full px-4 py-2.5 border border-slate-300 rounded-xl text-sm bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 font-medium text-slate-800"
            >
              <option>Mutual Funds &amp; Goal SIPs (Retirement / Child Education)</option>
              <option>Existing Portfolio Review &amp; Consolidation</option>
              <option>Equities &amp; Demat Account (HDFC Securities / IIFL)</option>
              <option>Fixed Income (AAA Corporate FDs / SGBs / 54EC Tax Bonds)</option>
              <option>Pure Term Life &amp; Family Health Insurance Audit</option>
              <option>HNI Wealth Desk (₹50L+ PMS / AIF Mandates)</option>
            </select>
          </div>

          <div>
            <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
              Current Portfolio Size or Monthly Goal (Optional)
            </label>
            <textarea
              rows={2}
              placeholder="e.g. Want to start ₹25k/mo SIP, or review my existing ₹15L mutual fund portfolio..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-2 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-sm transition flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20 cursor-pointer"
          >
            {loading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" /> Scheduling Your Session...
              </>
            ) : (
              <>
                Book My Free Portfolio X-Ray <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>

          <div className="flex items-center justify-center gap-4 pt-1 text-[11px] text-slate-500">
            <span className="flex items-center gap-1">
              <Lock className="w-3 h-3 text-emerald-600" /> 100% Confidential
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> No Spam Guarantee
            </span>
          </div>
        </form>
      )}
    </div>
  );
}
