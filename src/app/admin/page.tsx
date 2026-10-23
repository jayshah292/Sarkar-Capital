"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { Lock, Save, LogOut, Upload, User, CheckCircle2, FileText, Users } from "lucide-react";

interface Lead {
  id: string;
  full_name: string;
  email: string;
  phone: string;
  investment_horizon: string;
  message: string;
  status: string;
  created_at: string;
}

export default function AdminPage() {
  const [session, setSession] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  const [activeTab, setActiveTab] = useState<"content" | "leads">("content");
  const [saveStatus, setSaveStatus] = useState("");
  const [uploading, setUploading] = useState(false);
  const [leads, setLeads] = useState<Lead[]>([]);

  const [content, setContent] = useState<Record<string, string>>({
    // Homepage
    hero_badge: "AMFI Registered • Corporate ARN Desk",
    hero_title: "Disciplined Wealth Distribution for India's Investors",
    hero_subtitle: "We bridge the gap between retail investors and premier financial institutions. Access mutual funds, equities, sovereign gold bonds, and corporate fixed income under one transparent roof.",
    stat_aum_val: "₹10 Cr+",
    stat_years_val: "25+ Yrs",
    stat_partners_val: "40+",
    stat_lives_val: "2,500+",
    // About Us Page
    about_hero_title: "Institutional Credibility & Disciplined Wealth Planning",
    about_hero_subtitle: "Sarkar Capital Private Limited is an institutional financial distribution firm engineered on radical transparency, modern digital architecture, and non-custodial capital safety.",
    founder_name: "Abhijit Sarkar",
    founder_title: "Founder & Chief Wealth Planner",
    founder_photo_url: "",
    founder_bio_p1: "With over two decades of financial markets experience, Abhijit Sarkar founded Sarkar Capital to bridge the gap between premier institutional asset managers and retail, salaried, and HNI investors.",
    founder_bio_p2: "Operating across Mumbai, Kolkata, and Pan-India, our desk adheres to strict professional code of conduct, zero proprietary fund pooling, and transparent execution across 40+ empaneled AMCs and insurers.",
    about_mission_title: "Our Operational Mission",
    about_mission_text: "To eliminate commission bias and capital custody risk by providing direct platform routing, regular portfolio rebalancing, and transparent guidance.",
  });

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      if (session) {
        fetchContent();
        fetchLeads();
      }
      setLoading(false);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      if (session) {
        fetchContent();
        fetchLeads();
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  async function fetchContent() {
    const { data } = await supabase.from("site_content").select("*");
    if (data && data.length > 0) {
      const map: Record<string, string> = {};
      data.forEach((row: { key: string; value: string }) => {
        map[row.key] = row.value;
      });
      setContent((prev) => ({ ...prev, ...map }));
    }
  }

  async function fetchLeads() {
    const { data } = await supabase
      .from("consultation_leads")
      .select("*")
      .order("created_at", { ascending: false });
    if (data) setLeads(data);
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError("");
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) setLoginError(error.message);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  const handleSaveAll = async () => {
    setSaveStatus("Saving changes...");
    try {
      const rows = Object.entries(content).map(([key, value]) => ({ key, value }));
      const { error } = await supabase.from("site_content").upsert(rows, { onConflict: "key" });
      if (error) throw error;
      setSaveStatus("All website changes published live!");
      setTimeout(() => setSaveStatus(""), 3000);
    } catch (err: any) {
      alert("Error saving content: " + err.message);
      setSaveStatus("");
    }
  };

  const handlePhotoUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      setUploading(true);
      const file = e.target.files?.[0];
      if (!file) return;

      const ext = file.name.split(".").pop() || "jpg";
      const filePath = `founder/abhijit-sarkar-${Date.now()}.${ext}`;

      const { error: uploadErr } = await supabase.storage
        .from("public-assets")
        .upload(filePath, file, { upsert: true });

      if (uploadErr) throw uploadErr;

      const { data: pubData } = supabase.storage.from("public-assets").getPublicUrl(filePath);
      const url = pubData.publicUrl;

      setContent((prev) => ({ ...prev, founder_photo_url: url }));
      await supabase.from("site_content").upsert({ key: "founder_photo_url", value: url });
      setSaveStatus("Photo updated live!");
      setTimeout(() => setSaveStatus(""), 3000);
    } catch (err: any) {
      alert("Upload error: " + (err.message || "Ensure 'public-assets' storage bucket exists in Supabase."));
    } finally {
      setUploading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center bg-slate-50">
        <p className="text-sm font-semibold text-slate-500">Loading Admin Studio...</p>
      </div>
    );
  }

  if (!session) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center px-4 py-12 bg-slate-50">
        <form
          onSubmit={handleLogin}
          className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xl max-w-md w-full space-y-5"
        >
          <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-2xl flex items-center justify-center mx-auto mb-2">
            <Lock className="w-6 h-6" />
          </div>
          <h1 className="text-2xl font-black text-center text-navy-900">Admin Sign In</h1>
          {loginError && (
            <div className="p-3 bg-rose-50 text-rose-700 text-xs rounded-xl font-semibold">
              {loginError}
            </div>
          )}
          <div>
            <label className="text-xs font-bold text-slate-700 block mb-1">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm"
            />
          </div>
          <div>
            <label className="text-xs font-bold text-slate-700 block mb-1">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-navy-900 hover:bg-navy-800 text-white font-bold text-sm py-3 rounded-xl transition"
          >
            Access Dashboard
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Top Banner */}
      <div className="flex flex-wrap items-center justify-between gap-4 bg-navy-900 text-white p-6 rounded-3xl shadow-md">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-widest text-emerald-400">
            Sarkar Capital CMS
          </span>
          <h1 className="text-2xl font-black">Content Management Studio</h1>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setActiveTab("content")}
            className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition ${
              activeTab === "content" ? "bg-emerald-500 text-navy-950" : "bg-slate-800 text-slate-300 hover:bg-slate-700"
            }`}
          >
            <FileText className="w-4 h-4" /> Edit Website Content
          </button>
          <button
            onClick={() => setActiveTab("leads")}
            className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition ${
              activeTab === "leads" ? "bg-emerald-500 text-navy-950" : "bg-slate-800 text-slate-300 hover:bg-slate-700"
            }`}
          >
            <Users className="w-4 h-4" /> Consultation Leads ({leads.length})
          </button>
          <button
            onClick={handleLogout}
            className="px-3.5 py-2 rounded-xl bg-rose-600/20 text-rose-300 hover:bg-rose-600/30 text-xs font-bold flex items-center gap-1"
          >
            <LogOut className="w-3.5 h-3.5" /> Sign Out
          </button>
        </div>
      </div>

      {activeTab === "content" ? (
        <div className="space-y-8">
          <div className="flex items-center justify-between bg-emerald-50 border border-emerald-200 p-4 rounded-2xl">
            <span className="text-xs font-bold text-emerald-950 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              {saveStatus || "Modify text or rich text paragraphs below and click Publish All Changes."}
            </span>
            <button
              onClick={handleSaveAll}
              className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-extrabold px-5 py-2.5 rounded-xl shadow-xs transition flex items-center gap-1.5"
            >
              <Save className="w-4 h-4" /> Publish All Changes
            </button>
          </div>

          {/* Section 1: Homepage Copy & Highlight Metrics */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
            <h2 className="text-lg font-black text-navy-900 border-b pb-3">Homepage Content &amp; Badges</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-2 space-y-1">
                <label className="text-xs font-extrabold text-slate-700">Top Credibility Badge</label>
                <input
                  type="text"
                  value={content.hero_badge || ""}
                  onChange={(e) => setContent({ ...content, hero_badge: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-sm"
                />
              </div>
              <div className="md:col-span-2 space-y-1">
                <label className="text-xs font-extrabold text-slate-700">Main Headline</label>
                <input
                  type="text"
                  value={content.hero_title || ""}
                  onChange={(e) => setContent({ ...content, hero_title: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-sm font-bold"
                />
              </div>
              <div className="md:col-span-2 space-y-1">
                <label className="text-xs font-extrabold text-slate-700">Homepage Subtitle / Overview (Rich Text)</label>
                <textarea
                  rows={3}
                  value={content.hero_subtitle || ""}
                  onChange={(e) => setContent({ ...content, hero_subtitle: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm"
                />
              </div>
              <div>
                <label className="text-xs font-extrabold text-slate-700">Stat: Target AUM</label>
                <input
                  type="text"
                  value={content.stat_aum_val || ""}
                  onChange={(e) => setContent({ ...content, stat_aum_val: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-sm font-bold"
                />
              </div>
              <div>
                <label className="text-xs font-extrabold text-slate-700">Stat: Experience</label>
                <input
                  type="text"
                  value={content.stat_years_val || ""}
                  onChange={(e) => setContent({ ...content, stat_years_val: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-sm font-bold"
                />
              </div>
              <div>
                <label className="text-xs font-extrabold text-slate-700">Stat: Empaneled AMCs</label>
                <input
                  type="text"
                  value={content.stat_partners_val || ""}
                  onChange={(e) => setContent({ ...content, stat_partners_val: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-sm font-bold"
                />
              </div>
              <div>
                <label className="text-xs font-extrabold text-slate-700">Stat: Lives Protected</label>
                <input
                  type="text"
                  value={content.stat_lives_val || ""}
                  onChange={(e) => setContent({ ...content, stat_lives_val: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-sm font-bold"
                />
              </div>
            </div>
          </div>

          {/* Section 2: About Us & Founder Profile */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
            <h2 className="text-lg font-black text-navy-900 border-b pb-3">About Us Page &amp; Founder Content</h2>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center bg-slate-50 p-6 rounded-2xl border border-slate-200">
              <div className="md:col-span-4 flex flex-col items-center">
                <div className="w-32 h-32 rounded-full overflow-hidden bg-slate-900 border-2 border-emerald-500 shadow-md mb-2 flex items-center justify-center">
                  {content.founder_photo_url ? (
                    <img src={content.founder_photo_url} alt="Profile" className="w-full h-full object-cover" />
                  ) : (
                    <User className="w-12 h-12 text-emerald-400" />
                  )}
                </div>
                <span className="text-[11px] text-slate-500 font-semibold">Founder Portrait</span>
              </div>
              <div className="md:col-span-8 space-y-3">
                <label className="text-xs font-extrabold text-slate-800 uppercase block">Upload Profile Photo</label>
                <label className="inline-flex items-center gap-2 bg-navy-900 hover:bg-navy-800 text-white text-xs font-bold px-4 py-2.5 rounded-xl cursor-pointer transition">
                  <Upload className="w-4 h-4" />
                  {uploading ? "Uploading to Storage..." : "Choose Image File"}
                  <input type="file" accept="image/*" onChange={handlePhotoUpload} className="hidden" />
                </label>
                <input
                  type="text"
                  placeholder="Or paste direct image URL..."
                  value={content.founder_photo_url || ""}
                  onChange={(e) => setContent({ ...content, founder_photo_url: e.target.value })}
                  className="w-full px-3 py-1.5 rounded-xl border border-slate-300 text-xs bg-white"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-extrabold text-slate-700">Founder Name</label>
                <input
                  type="text"
                  value={content.founder_name || ""}
                  onChange={(e) => setContent({ ...content, founder_name: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-sm font-bold"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-extrabold text-slate-700">Founder Designation / Title</label>
                <input
                  type="text"
                  value={content.founder_title || ""}
                  onChange={(e) => setContent({ ...content, founder_title: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-sm font-bold"
                />
              </div>
              <div className="md:col-span-2 space-y-1">
                <label className="text-xs font-extrabold text-slate-700">About Us Headline</label>
                <input
                  type="text"
                  value={content.about_hero_title || ""}
                  onChange={(e) => setContent({ ...content, about_hero_title: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-sm"
                />
              </div>
              <div className="md:col-span-2 space-y-1">
                <label className="text-xs font-extrabold text-slate-700">About Us Subtitle (Rich Text)</label>
                <textarea
                  rows={2}
                  value={content.about_hero_subtitle || ""}
                  onChange={(e) => setContent({ ...content, about_hero_subtitle: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm"
                />
              </div>
              <div className="md:col-span-2 space-y-1">
                <label className="text-xs font-extrabold text-slate-700">Founder Bio — Paragraph 1 (Rich Text)</label>
                <textarea
                  rows={3}
                  value={content.founder_bio_p1 || ""}
                  onChange={(e) => setContent({ ...content, founder_bio_p1: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm"
                />
              </div>
              <div className="md:col-span-2 space-y-1">
                <label className="text-xs font-extrabold text-slate-700">Founder Bio — Paragraph 2 (Rich Text)</label>
                <textarea
                  rows={3}
                  value={content.founder_bio_p2 || ""}
                  onChange={(e) => setContent({ ...content, founder_bio_p2: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm"
                />
              </div>
              <div className="md:col-span-2 space-y-1">
                <label className="text-xs font-extrabold text-slate-700">Operational Mission Statement (Rich Text)</label>
                <textarea
                  rows={2}
                  value={content.about_mission_text || ""}
                  onChange={(e) => setContent({ ...content, about_mission_text: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm"
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-4">
          <h2 className="text-lg font-black text-navy-900">Consultation Requests</h2>
          {leads.length === 0 ? (
            <p className="text-xs text-slate-500 py-8 text-center">No client inquiries received yet.</p>
          ) : (
            <div className="space-y-3">
              {leads.map((lead) => (
                <div key={lead.id} className="p-4 rounded-2xl border border-slate-200 flex flex-col sm:flex-row justify-between gap-4">
                  <div>
                    <div className="text-sm font-bold text-navy-900">{lead.full_name} ({lead.phone})</div>
                    <div className="text-xs text-slate-500">{lead.email} • Horizon: {lead.investment_horizon || "General"}</div>
                    {lead.message && <p className="text-xs text-slate-700 bg-slate-50 p-2 rounded-lg mt-1">{lead.message}</p>}
                  </div>
                  <span className="text-xs font-bold self-start bg-slate-100 text-slate-700 px-3 py-1 rounded-full">{lead.status || "New"}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
