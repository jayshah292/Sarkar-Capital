"use client";

import ConsultationForm from "@/components/ConsultationForm";
import {
  Building2,
  Mail,
  Phone,
  Clock,
  ShieldCheck,
  MapPin,
  MessageCircle,
  FileText,
} from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  const contactPoints = [
    {
      title: "Retail Investor Advisory Desk",
      desc: "For inquiries regarding Systematic Investment Plans (SIP), KYC verification, and scheme rebalancing.",
      email: "advisory@sarkarcapital.in",
      phone: "+91 98765 43210",
    },
    {
      title: "HNI & Institutional Demat Desk",
      desc: "Direct access to our secondary market equity desks (HDFC Securities & IIFL) and bond tranches.",
      email: "institutional@sarkarcapital.in",
      phone: "+91 98765 43211",
    },
    {
      title: "Grievance & Redressal Officer",
      desc: "Official statutory escalation point operating under AMFI and SEBI dispute resolution norms.",
      email: "grievance@sarkarcapital.in",
      phone: "+91 98765 43212",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-16">
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300 bg-emerald-50 px-3.5 py-1 text-xs font-semibold text-emerald-800">
          <Building2 className="h-3.5 w-3.5" /> Direct Advisory & Corporate Desk
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-navy-900 tracking-tight">
          Connect With Sarkar Capital
        </h1>
        <p className="text-base text-slate-600 leading-relaxed">
          Schedule an in-person meeting at our West Bengal branch or request a digital portfolio consultation with certified NISM wealth specialists.
        </p>
      </div>

      {/* Main Grid: Form + Office Information */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left: Office Details & Direct Channels */}
        <div className="lg:col-span-6 space-y-8">
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xs space-y-6">
            <h2 className="text-xl font-bold text-navy-900 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-emerald-600" /> Registered Desk & Presence
            </h2>

            <div className="space-y-4 text-xs text-slate-600 leading-relaxed">
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-1">
                <span className="font-bold text-navy-900 block text-sm">Sarkar Capital Private Limited</span>
                <p>Khardaha, North 24 Parganas</p>
                <p>Kolkata, West Bengal – 700117, India</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
                  <div className="flex items-center gap-2 font-bold text-navy-900">
                    <Clock className="w-4 h-4 text-emerald-600" /> Operating Hours
                  </div>
                  <p className="text-[11px] text-slate-500">Monday to Friday: 9:30 AM – 6:30 PM</p>
                  <p className="text-[11px] text-slate-500">Saturday: 10:00 AM – 2:00 PM (By Appt)</p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
                  <div className="flex items-center gap-2 font-bold text-navy-900">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" /> Regulatory Scope
                  </div>
                  <p className="text-[11px] text-slate-500">AMFI Registered Mutual Fund Desk</p>
                  <p className="text-[11px] text-slate-500">NIC Codes: 66120 & 66220</p>
                </div>
              </div>
            </div>
          </div>

          {/* Department Directory */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500">
              Direct Communication Desks
            </h3>
            <div className="space-y-3">
              {contactPoints.map((pt, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs space-y-2 hover:border-emerald-500/50 transition"
                >
                  <h4 className="text-sm font-bold text-navy-900">{pt.title}</h4>
                  <p className="text-xs text-slate-500">{pt.desc}</p>
                  <div className="flex flex-wrap gap-4 pt-2 border-t border-slate-100 text-xs font-semibold text-slate-700">
                    <span className="flex items-center gap-1.5 text-emerald-700">
                      <Mail className="w-3.5 h-3.5 text-slate-400" /> {pt.email}
                    </span>
                    <span className="flex items-center gap-1.5 text-navy-900">
                      <Phone className="w-3.5 h-3.5 text-slate-400" /> {pt.phone}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Regulatory Link */}
          <div className="p-5 bg-emerald-50/70 border border-emerald-200 rounded-2xl flex items-center justify-between gap-4">
            <div className="space-y-0.5">
              <span className="text-xs font-bold text-emerald-900 block">Investor Charter & Grievance Redressal</span>
              <p className="text-[11px] text-emerald-700">Review our formal 3-tier escalation matrix and regulatory portals.</p>
            </div>
            <Link
              href="/compliance"
              className="text-xs font-bold bg-navy-900 hover:bg-slate-800 text-white px-3.5 py-2 rounded-xl shrink-0 transition"
            >
              View Matrix
            </Link>
          </div>
        </div>

        {/* Right: Lead Capture Consultation Form */}
        <div className="lg:col-span-6">
          <div className="sticky top-24">
            <ConsultationForm />
          </div>
        </div>
      </div>
    </div>
  );
}
