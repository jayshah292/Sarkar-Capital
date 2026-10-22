"use client";

import { useEffect, useState } from "react";
import { Award, Building2, CheckCircle2, ShieldCheck, User } from "lucide-react";
import Image from "next/image";
import { supabase } from "@/lib/supabase";

export default function AboutPage() {
  const [content, setContent] = useState<Record<string, string>>({
    about_hero_title: "Institutional Credibility & Trusted Leadership",
    about_hero_subtitle:
      "Sarkar Capital Private Limited is an institutional financial distribution company engineered on radical transparency, modern digital tools, and zero client capital custody.",
    abhijit_photo_url: "",
  });

  useEffect(() => {
    async function loadContent() {
      const { data } = await supabase.from("site_content").select("*");
      if (data && data.length > 0) {
        const mapped: Record<string, string> = {};
        data.forEach((row: { key: string; value: string }) => {
          mapped[row.key] = row.value;
        });
        setContent((prev) => ({ ...prev, ...mapped }));
      }
    }
    loadContent();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300 bg-emerald-50 px-3.5 py-1 text-xs font-semibold text-emerald-900">
          <ShieldCheck className="h-4 w-4 text-emerald-600" /> Kolkata, Mumbai &amp; Pan-India Presence
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-navy-900 tracking-tight">
          {content.about_hero_title}
        </h1>
        <p className="text-base text-slate-600 leading-relaxed">
          {content.about_hero_subtitle}
        </p>
      </div>

      {/* Founder Profile Card */}
      <section className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-4 flex flex-col items-center text-center space-y-4">
          <div className="relative w-36 h-36 rounded-full overflow-hidden bg-slate-900 text-emerald-400 flex items-center justify-center shadow-xl border-4 border-emerald-500/30">
            {content.abhijit_photo_url ? (
              <img
                src={content.abhijit_photo_url}
                alt="Abhijit Sarkar - Founder & Chief Wealth Planner"
                className="w-full h-full object-cover"
              />
            ) : (
              <User className="w-16 h-16 text-emerald-400/80 absolute" />
            )}
          </div>
          <div>
            <h3 className="text-xl font-extrabold text-navy-900">Abhijit Sarkar</h3>
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full inline-block mt-1">
              Founder &amp; Chief Wealth Planner
            </span>
          </div>
        </div>

        <div className="lg:col-span-8 space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
          <h4 className="text-lg font-bold text-navy-900">Leading With Clarity &amp; Discipline</h4>
          <p>
            With extensive expertise in institutional wealth management and retail portfolio architecture, Abhijit Sarkar established Sarkar Capital to provide older investors, families, and busy professionals with a modern credibility tool and transparent guidance. 
          </p>
          <p>
            Operating across <strong>Kolkata, Mumbai, and Pan-India</strong>, our advisory desk ensures your investments are backed by NISM certifications, AMFI corporate standards, and zero proprietary fund pooling.
          </p>
        </div>
      </section>
    </div>
  );
}
