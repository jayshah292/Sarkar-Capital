"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

export default function ConsultationForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    service: "Mutual Funds & SIPs",
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
      setError("Unable to submit. Please verify details or try again later.");
    } else {
      setSuccess(true);
      setFormData({ fullName: "", email: "", phone: "", service: "Mutual Funds & SIPs", message: "" });
    }
  };

  return (
    <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-xl" id="consultation">
      <h3 className="text-2xl font-bold text-navy-900 mb-2">Schedule a Portfolio Consultation</h3>
      <p className="text-sm text-slate-600 mb-6">Connect with certified wealth managers for an institutional review.</p>

      {success ? (
        <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-xl text-center">
          <CheckCircle2 className="h-10 w-10 text-emerald-600 mx-auto mb-2" />
          <h4 className="text-emerald-900 font-semibold">Request Received</h4>
          <p className="text-sm text-emerald-700 mt-1">Our advisory desk will get in touch with you shortly.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg flex items-center gap-2">
              <AlertCircle className="h-4 w-4 shrink-0" />
              <span>{error}</span>
            </div>
          )}
          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Full Name</label>
            <input
              type="text"
              required
              placeholder="e.g. Rahul Sharma"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Email Address</label>
              <input
                type="email"
                required
                placeholder="name@domain.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Mobile Number</label>
              <input
                type="tel"
                required
                placeholder="+91 98765 43210"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Primary Area of Interest</label>
            <select
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <option>Mutual Funds & SIPs</option>
              <option>Demat & Equity Broking</option>
              <option>Fixed Income, Bonds & SGBs</option>
              <option>PMS / AIF (HNI Desk)</option>
              <option>Term & Health Insurance</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Portfolio Notes (Optional)</label>
            <textarea
              rows={3}
              placeholder="Tell us about your current asset size or target horizon..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-lg text-sm transition flex items-center justify-center gap-2"
          >
            {loading && <Loader2 className="h-4 w-4 animate-spin" />}
            {loading ? "Submitting..." : "Request Call Back"}
          </button>
        </form>
      )}
    </div>
  );
}
