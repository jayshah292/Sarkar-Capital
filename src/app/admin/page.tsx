"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { Lock, Save, LogOut, Clock, Mail, Phone, RefreshCw } from "lucide-react";

interface Inquiry {
  id: string;
  created_at: string;
  full_name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  status: string;
}

export default function AdminPortal() {
  const [session, setSession] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  const [activeTab, setActiveTab] = useState<"content" | "inquiries">("content");
  const [saveStatus, setSaveStatus] = useState("");
  
  // Content States
  const [content, setContent] = useState<Record<string, string>>({
    hero_badge: "",
    hero_title: "",
    hero_subtitle: "",
    stat_custody_val: "",
    stat_custody_label: "",
    stat_partners_val: "",
    stat_partners_label: "",
    stat_execution_val: "",
    stat_execution_label: "",
    about_summary: "",
  });

  // Inquiries State
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      if (session) {
        fetchContent();
        fetchInquiries();
      }
      setLoading(false);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      if (session) {
        fetchContent();
        fetchInquiries();
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError("");
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) setLoginError(error.message);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  const fetchContent = async () => {
    const { data } = await supabase.from("site_content").select("*");
    if (data) {
      const map: Record<string, string> = {};
      data.forEach((row: { key: string; value: string }) => {
        map[row.key] = row.value;
      });
      setContent((prev) => ({ ...prev, ...map }));
    }
  };

  const fetchInquiries = async () => {
    const { data } = await supabase
      .from("inquiries")
      .select("*")
      .order("created_at", { ascending: false });
    if (data) setInquiries(data);
  };

  const handleSaveContent = async () => {
    setSaveStatus("Saving changes...");
    for (const [key, value] of Object.entries(content)) {
      await supabase.from("site_content").upsert({ key, value });
    }
    setSaveStatus("Published live successfully!");
    setTimeout(() => setSaveStatus(""), 3000);
  };

  const updateInquiryStatus = async (id: string, newStatus: string) => {
    await supabase.from("inquiries").update({ status: newStatus }).eq("id", id);
    fetchInquiries();
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-slate-500 text-sm">Loading admin console...</div>
      </div>
    );
  }

  // Login Screen
  if (!session) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4">
        <div className="max-w-md w-full bg-white p-8 rounded-2xl border border-slate-200 shadow-xl">
          <div className="flex items-center justify-center w-12 h-12 bg-emerald-100 text-emerald-700 rounded-xl mx-auto mb-4">
            <Lock className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-bold text-center text-slate-900 mb-1">Tinny&apos;s Content Desk</h2>
          <p className="text-center text-xs text-slate-500 mb-6">Sarkar Capital Admin & Leads Portal</p>

          {loginError && (
            <div className="p-3 bg-red-50 text-red-700 text-xs rounded-lg mb-4">
              {loginError}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Email</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Password</label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2.5 bg-slate-900 text-white font-medium text-sm rounded-lg hover:bg-slate-800 transition"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    );
  }

  // Authenticated Admin Dashboard
  return (
    <div className="min-h-screen bg-slate-50 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-white p-6 rounded-2xl border border-slate-200 mb-8 gap-4 shadow-sm">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Admin Content Studio</h1>
            <p className="text-xs text-slate-500">Edit live text or review investor consultation leads</p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setActiveTab("content")}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition ${
                activeTab === "content" ? "bg-emerald-600 text-white" : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              Edit Content
            </button>
            <button
              onClick={() => setActiveTab("inquiries")}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition ${
                activeTab === "inquiries" ? "bg-emerald-600 text-white" : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              Leads ({inquiries.filter((i) => i.status === "pending").length})
            </button>
            <button
              onClick={handleLogout}
              className="p-2 text-slate-500 hover:text-red-600 rounded-lg border border-slate-200 hover:bg-slate-100 transition"
              title="Sign Out"
            >
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab 1: Content Editor */}
        {activeTab === "content" && (
          <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm space-y-6">
            <div className="flex justify-between items-center pb-4 border-b border-slate-100">
              <h2 className="text-lg font-bold text-slate-900">Homepage Text Elements</h2>
              <div className="flex items-center gap-3">
                {saveStatus && <span className="text-xs text-emerald-600 font-semibold">{saveStatus}</span>}
                <button
                  onClick={handleSaveContent}
                  className="flex items-center gap-2 px-5 py-2.5 bg-emerald-600 text-white text-sm font-medium rounded-lg hover:bg-emerald-700 shadow-sm transition"
                >
                  <Save className="w-4 h-4" /> Save & Publish
                </button>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Top Badge Pill</label>
                <input
                  type="text"
                  value={content.hero_badge || ""}
                  onChange={(e) => setContent({ ...content, hero_badge: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Hero Main Heading</label>
                <input
                  type="text"
                  value={content.hero_title || ""}
                  onChange={(e) => setContent({ ...content, hero_title: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Hero Subtitle Paragraph</label>
                <textarea
                  rows={3}
                  value={content.hero_subtitle || ""}
                  onChange={(e) => setContent({ ...content, hero_subtitle: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-100">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Stat 1 Value</label>
                  <input
                    type="text"
                    value={content.stat_custody_val || ""}
                    onChange={(e) => setContent({ ...content, stat_custody_val: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm mb-2"
                  />
                  <input
                    type="text"
                    value={content.stat_custody_label || ""}
                    onChange={(e) => setContent({ ...content, stat_custody_label: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs text-slate-600"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Stat 2 Value</label>
                  <input
                    type="text"
                    value={content.stat_partners_val || ""}
                    onChange={(e) => setContent({ ...content, stat_partners_val: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm mb-2"
                  />
                  <input
                    type="text"
                    value={content.stat_partners_label || ""}
                    onChange={(e) => setContent({ ...content, stat_partners_label: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs text-slate-600"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Stat 3 Value</label>
                  <input
                    type="text"
                    value={content.stat_execution_val || ""}
                    onChange={(e) => setContent({ ...content, stat_execution_val: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm mb-2"
                  />
                  <input
                    type="text"
                    value={content.stat_execution_label || ""}
                    onChange={(e) => setContent({ ...content, stat_execution_label: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs text-slate-600"
                  />
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">About Us Executive Summary</label>
                <textarea
                  rows={3}
                  value={content.about_summary || ""}
                  onChange={(e) => setContent({ ...content, about_summary: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm"
                />
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Consultation Leads */}
        {activeTab === "inquiries" && (
          <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-bold text-slate-900">Incoming Portfolio Consultations</h2>
              <button
                onClick={fetchInquiries}
                className="flex items-center gap-1.5 text-xs text-slate-600 hover:text-slate-900 border border-slate-200 px-3 py-1.5 rounded-lg"
              >
                <RefreshCw className="w-3.5 h-3.5" /> Refresh
              </button>
            </div>

            {inquiries.length === 0 ? (
              <p className="text-sm text-slate-500 py-8 text-center">No inquiries received yet.</p>
            ) : (
              <div className="divide-y divide-slate-100">
                {inquiries.map((inq) => (
                  <div key={inq.id} className="py-4 flex flex-col sm:flex-row justify-between sm:items-center gap-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-3">
                        <span className="font-bold text-slate-900 text-sm">{inq.full_name}</span>
                        <span
                          className={`text-[10px] px-2 py-0.5 rounded-full font-semibold uppercase ${
                            inq.status === "contacted"
                              ? "bg-blue-50 text-blue-700 border border-blue-200"
                              : inq.status === "closed"
                              ? "bg-slate-100 text-slate-600"
                              : "bg-emerald-50 text-emerald-700 border border-emerald-200"
                          }`}
                        >
                          {inq.status}
                        </span>
                        <span className="text-[11px] text-slate-400 flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {new Date(inq.created_at).toLocaleDateString("en-IN", {
                            day: "numeric",
                            month: "short",
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-4 text-xs text-slate-600">
                        <span className="flex items-center gap-1">
                          <Phone className="w-3.5 h-3.5 text-slate-400" /> {inq.phone}
                        </span>
                        <span className="flex items-center gap-1">
                          <Mail className="w-3.5 h-3.5 text-slate-400" /> {inq.email}
                        </span>
                        <span className="bg-slate-100 text-slate-700 px-2 py-0.5 rounded text-[11px]">
                          {inq.service}
                        </span>
                      </div>
                      {inq.message && (
                        <p className="text-xs text-slate-600 italic mt-1 bg-slate-50 p-2 rounded">
                          &ldquo;{inq.message}&rdquo;
                        </p>
                      )}
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      {inq.status === "pending" && (
                        <button
                          onClick={() => updateInquiryStatus(inq.id, "contacted")}
                          className="text-xs bg-slate-900 hover:bg-slate-800 text-white px-3 py-1.5 rounded-md transition"
                        >
                          Mark Contacted
                        </button>
                      )}
                      {inq.status === "contacted" && (
                        <button
                          onClick={() => updateInquiryStatus(inq.id, "closed")}
                          className="text-xs bg-slate-200 hover:bg-slate-300 text-slate-800 px-3 py-1.5 rounded-md transition"
                        >
                          Close Lead
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
