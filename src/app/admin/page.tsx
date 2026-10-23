"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import {
  ShieldCheck,
  LogOut,
  Save,
  Upload,
  Users,
  FileText,
  CheckCircle2,
  Image as ImageIcon,
} from "lucide-react";

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

const CONTENT_FIELDS = [
  // Leadership Photos & Bios
  {
    section: "Leadership Photos & Bios (About Us)",
    key: "founder_photo_url",
    label: "Abhijit Sarkar — Portrait Photo",
    type: "image",
  },
  {
    section: "Leadership Photos & Bios (About Us)",
    key: "cofounder_photo_url",
    label: "Sampa Sarkar — Portrait Photo",
    type: "image",
  },
  {
    section: "Leadership Photos & Bios (About Us)",
    key: "sampa_bio_p1",
    label: "Sampa Sarkar — Bio Paragraph 1",
    type: "textarea",
  },
  {
    section: "Leadership Photos & Bios (About Us)",
    key: "sampa_bio_p2",
    label: "Sampa Sarkar — Bio Paragraph 2",
    type: "textarea",
  },
  // Highlighted Circular Metrics
  {
    section: "Highlighted Circular Metrics (Homepage & About)",
    key: "stat_aum_val",
    label: "Circle 1: Managed AUM (e.g., ₹10 Cr+)",
    type: "text",
  },
  {
    section: "Highlighted Circular Metrics (Homepage & About)",
    key: "stat_years_val",
    label: "Circle 2: Years in Business (e.g., 25+ Yrs)",
    type: "text",
  },
  {
    section: "Highlighted Circular Metrics (Homepage & About)",
    key: "stat_partners_val",
    label: "Circle 3: AMCs Empaneled (e.g., 40+)",
    type: "text",
  },
  {
    section: "Highlighted Circular Metrics (Homepage & About)",
    key: "stat_lives_val",
    label: "Circle 4: Lives Protected (e.g., 2,500+)",
    type: "text",
  },
  // Homepage Copy
  {
    section: "Homepage Hero Copy",
    key: "hero_badge",
    label: "Homepage Top Badge",
    type: "text",
  },
  {
    section: "Homepage Hero Copy",
    key: "hero_title",
    label: "Homepage Main Headline",
    type: "textarea",
  },
  {
    section: "Homepage Hero Copy",
    key: "hero_subtitle",
    label: "Homepage Subtitle",
    type: "textarea",
  },
  // About Us Page Header
  {
    section: "About Us Page Header",
    key: "about_hero_title",
    label: "About Us Main Headline",
    type: "text",
  },
  {
    section: "About Us Page Header",
    key: "about_hero_subtitle",
    label: "About Us Subtitle",
    type: "textarea",
  },
];

export default function AdminPage() {
  const [session, setSession] = useState<any>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState("");
  const [activeTab, setActiveTab] = useState<"content" | "leads">("content");

  const [contentMap, setContentMap] = useState<Record<string, string>>({
    stat_aum_val: "₹10 Cr+",
    stat_years_val: "25+ Yrs",
    stat_partners_val: "40+",
    stat_lives_val: "2,500+",
    sampa_bio_p1:
      "As Director and Co-Founder of Sarkar Capital, Sampa Sarkar oversees client onboarding, KYC compliance, and ongoing service support across Mutual Funds, Corporate FDs, Bonds, and Life & Health Insurance.",
    sampa_bio_p2:
      "She ensures that senior citizens, retirees, and family members experience smooth paperless execution, timely portfolio statements, nomination updates, and dedicated claim and maturity assistance whenever required.",
  });

  const [saving, setSaving] = useState(false);
  const [uploadingKey, setUploadingKey] = useState<string | null>(null);
  const [saveMessage, setSaveMessage] = useState("");
  const [leads, setLeads] = useState<Lead[]>([]);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
    });
    const { data: listener } = supabase.auth.onAuthStateChange((_event, sess) => {
      setSession(sess);
    });
    return () => listener.subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (session) {
      fetchContent();
      fetchLeads();
    }
  }, [session]);

  async function fetchContent() {
    const { data } = await supabase.from("site_content").select("key, value");
    if (data) {
      const nextMap: Record<string, string> = {};
      data.forEach((row: { key: string; value: string }) => {
        nextMap[row.key] = row.value;
      });
      setContentMap((prev) => ({ ...prev, ...nextMap }));
    }
  }

  async function fetchLeads() {
    const { data } = await supabase
      .from("consultation_leads")
      .select("*")
      .order("created_at", { ascending: false });
    if (data) setLeads(data);
  }

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setAuthError("");
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) setAuthError(error.message);
  }

  async function handleLogout() {
    await supabase.auth.signOut();
  }

  async function handleImageUpload(key: string, file: File) {
    setUploadingKey(key);
    setSaveMessage("");
    try {
      const ext = file.name.split(".").pop() || "jpg";
      const filePath = `leadership/${key}-${Date.now()}.${ext}`;

      const { error: uploadErr } = await supabase.storage
        .from("public-assets")
        .upload(filePath, file, { upsert: true });

      if (uploadErr) throw uploadErr;

      const { data: pubData } = supabase.storage
        .from("public-assets")
        .getPublicUrl(filePath);

      const publicUrl = pubData.publicUrl;

      setContentMap((prev) => ({ ...prev, [key]: publicUrl }));

      await supabase.from("site_content").upsert(
        { key, value: publicUrl },
        { onConflict: "key" }
      );

      setSaveMessage("Photo uploaded and saved live!");
    } catch (err: any) {
      alert("Upload error: " + (err.message || "Please check storage bucket permissions."));
    } finally {
      setUploadingKey(null);
    }
  }

  async function handleSaveAll() {
    setSaving(true);
    setSaveMessage("");
    try {
      const rows = Object.entries(contentMap).map(([key, value]) => ({
        key,
        value,
      }));
      const { error } = await supabase
        .from("site_content")
        .upsert(rows, { onConflict: "key" });
      if (error) throw error;
      setSaveMessage("All website changes published live!");
    } catch (err: any) {
      alert("Save error: " + err.message);
    } finally {
      setSaving(false);
    }
  }

  async function updateLeadStatus(id: string, status: string) {
    await supabase.from("consultation_leads").update({ status }).eq("id", id);
    fetchLeads();
  }

  if (!session) {
    return (
      <div className="min-h-[75vh] flex items-center justify-center px-4 py-12 bg-slate-50">
        <form
          onSubmit={handleLogin}
          className="bg-white p-8 rounded-3xl border border-slate-200 shadow-lg max-w-md w-full space-y-5"
        >
          <div className="flex items-center gap-2 text-emerald-700 font-bold text-xs uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" /> Sarkar Capital Admin Studio
          </div>
          <h1 className="text-2xl font-black text-navy-900">Sign In to Admin</h1>
          {authError && (
            <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-700 font-semibold">
              {authError}
            </div>
          )}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700">Admin Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700">Password</label>
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

  const sections = Array.from(new Set(CONTENT_FIELDS.map((f) => f.section)));

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <div className="flex flex-wrap items-center justify-between gap-4 bg-navy-900 text-white p-6 rounded-3xl shadow-md">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-widest text-emerald-400">
            CMS &amp; Lead Portal
          </span>
          <h1 className="text-2xl font-black">Sarkar Capital Admin Studio</h1>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setActiveTab("content")}
            className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition ${
              activeTab === "content"
                ? "bg-emerald-500 text-navy-950"
                : "bg-slate-800 text-slate-300 hover:bg-slate-700"
            }`}
          >
            <FileText className="w-4 h-4" /> Website Copy &amp; Photos
          </button>
          <button
            onClick={() => setActiveTab("leads")}
            className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition ${
              activeTab === "leads"
                ? "bg-emerald-500 text-navy-950"
                : "bg-slate-800 text-slate-300 hover:bg-slate-700"
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
            <div className="text-xs font-bold text-emerald-950 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              {saveMessage || "Upload leadership photos or edit text below, then click Publish Changes."}
            </div>
            <button
              onClick={handleSaveAll}
              disabled={saving}
              className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-extrabold px-5 py-2.5 rounded-xl shadow-xs transition inline-flex items-center gap-1.5"
            >
              <Save className="w-4 h-4" />
              {saving ? "Publishing..." : "Publish All Changes"}
            </button>
          </div>

          {sections.map((sec) => (
            <div
              key={sec}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-5"
            >
              <h2 className="text-lg font-black text-navy-900 border-b border-slate-100 pb-3">
                {sec}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {CONTENT_FIELDS.filter((f) => f.section === sec).map((field) => (
                  <div
                    key={field.key}
                    className={field.type === "textarea" ? "md:col-span-2 space-y-1.5" : "space-y-2"}
                  >
                    <label className="text-xs font-extrabold text-slate-700 block">
                      {field.label}
                    </label>

                    {field.type === "image" ? (
                      <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                        <div className="w-20 h-20 rounded-full overflow-hidden bg-white border-2 border-emerald-500 shrink-0 flex items-center justify-center">
                          {contentMap[field.key] ? (
                            <img
                              src={contentMap[field.key]}
                              alt={field.label}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <ImageIcon className="w-7 h-7 text-slate-400" />
                          )}
                        </div>
                        <div className="space-y-2 flex-1">
                          <label className="inline-flex items-center gap-1.5 bg-navy-900 hover:bg-navy-800 text-white text-xs font-bold px-4 py-2 rounded-xl cursor-pointer transition">
                            <Upload className="w-3.5 h-3.5" />
                            {uploadingKey === field.key ? "Uploading..." : "Choose Portrait Image"}
                            <input
                              type="file"
                              accept="image/*"
                              className="hidden"
                              onChange={(e) => {
                                const file = e.target.files?.[0];
                                if (file) handleImageUpload(field.key, file);
                              }}
                            />
                          </label>
                          <input
                            type="text"
                            placeholder="Or paste direct image URL..."
                            value={contentMap[field.key] || ""}
                            onChange={(e) =>
                              setContentMap((prev) => ({ ...prev, [field.key]: e.target.value }))
                            }
                            className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-xs bg-white"
                          />
                        </div>
                      </div>
                    ) : field.type === "textarea" ? (
                      <textarea
                        rows={3}
                        value={contentMap[field.key] || ""}
                        onChange={(e) =>
                          setContentMap((prev) => ({ ...prev, [field.key]: e.target.value }))
                        }
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm"
                      />
                    ) : (
                      <input
                        type="text"
                        value={contentMap[field.key] || ""}
                        onChange={(e) =>
                          setContentMap((prev) => ({ ...prev, [field.key]: e.target.value }))
                        }
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm font-bold text-navy-900"
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-4">
          <h2 className="text-lg font-black text-navy-900">Client Consultation Requests</h2>
          {leads.length === 0 ? (
            <p className="text-xs text-slate-500 py-8 text-center">No leads submitted yet.</p>
          ) : (
            <div className="space-y-3">
              {leads.map((lead) => (
                <div
                  key={lead.id}
                  className="p-4 rounded-2xl border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="space-y-1">
                    <div className="text-sm font-black text-navy-900">
                      {lead.full_name}{" "}
                      <span className="text-xs font-semibold text-emerald-700">
                        ({lead.phone})
                      </span>
                    </div>
                    <div className="text-xs text-slate-500">
                      {lead.email} • Goal/Horizon: {lead.investment_horizon || "General"}
                    </div>
                    {lead.message && (
                      <p className="text-xs text-slate-700 bg-slate-50 p-2 rounded-lg mt-1">
                        {lead.message}
                      </p>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <select
                      value={lead.status || "New"}
                      onChange={(e) => updateLeadStatus(lead.id, e.target.value)}
                      className="text-xs font-bold border border-slate-300 rounded-xl px-3 py-2"
                    >
                      <option value="New">New</option>
                      <option value="Contacted">Contacted</option>
                      <option value="Onboarded">Onboarded</option>
                    </select>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
