"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { Lock, Save, LogOut, Clock, Mail, Phone, RefreshCw, Upload, Image as ImageIcon } from "lucide-react";

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

type TabType = "homepage" | "about" | "media" | "inquiries";

export default function AdminPortal() {
  const [session, setSession] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  const [activeTab, setActiveTab] = useState<TabType>("homepage");
  const [saveStatus, setSaveStatus] = useState("");
  const [uploading, setUploading] = useState(false);

  const [content, setContent] = useState<Record<string, string>>({
    hero_title: "",
    hero_subtitle: "",
    about_hero_title: "",
    about_hero_subtitle: "",
    abhijit_photo_url: "",
    partner_logos: "",
  });

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
    setSaveStatus("Publishing updates...");
    for (const [key, value] of Object.entries(content)) {
      await supabase.from("site_content").upsert({ key, value });
    }
    setSaveStatus("Changes published live!");
    setTimeout(() => setSaveStatus(""), 3000);
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>, keyName: string) => {
    try {
      setUploading(true);
      const file = e.target.files?.[0];
      if (!file) return;

      const fileExt = file.name.split(".").pop();
      const fileName = `${keyName}-${Math.random()}.${fileExt}`;
      const filePath = `${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from("public-assets")
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      const { data } = supabase.storage.from("public-assets").getPublicUrl(filePath);
      
      setContent((prev) => ({ ...prev, [keyName]: data.publicUrl }));
      await supabase.from("site_content").upsert({ key: keyName, value: data.publicUrl });
      setSaveStatus("Image uploaded successfully!");
      setTimeout(() => setSaveStatus(""), 3000);
    } catch (error: any) {
      alert("Error uploading image: " + error.message);
    } finally {
      setUploading(false);
    }
  };

  const updateInquiryStatus = async (id: string, newStatus: string) => {
    await supabase.from("inquiries").update({ status: newStatus }).eq("id", id);
    fetchInquiries();
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-slate-500 text-sm">Loading Admin Studio...</div>
      </div>
    );
  }

  if (!session) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4">
        <div className="max-w-md w-full bg-white p-8 rounded-2xl border border-slate-200 shadow-xl">
          <div className="flex items-center justify-center w-12 h-12 bg-emerald-100 text-emerald-700 rounded-xl mx-auto mb-4">
            <Lock className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-bold text-center text-slate-900 mb-1">Tinny&apos;s Admin Studio</h2>
          <p className="text-center text-xs text-slate-500 mb-6">Sarkar Capital CMS &amp; Media Manager</p>

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
                className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Password</label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm"
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

  return (
    <div className="min-h-screen bg-slate-50 py-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-white p-6 rounded-2xl border border-slate-200 mb-6 gap-4 shadow-xs">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Admin Studio &amp; Media Uploader</h1>
            <p className="text-xs text-slate-500">Manage website copy, upload Abhijit Sarkar&apos;s photo, partner logos, and view leads.</p>
          </div>
          <div className="flex items-center gap-3">
            {saveStatus && <span className="text-xs text-emerald-600 font-semibold">{saveStatus}</span>}
            {activeTab !== "inquiries" && (
              <button
                onClick={handleSaveContent}
                className="flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white text-sm font-medium rounded-lg hover:bg-emerald-700 transition"
              >
                <Save className="w-4 h-4" /> Save Changes
              </button>
            )}
            <button
              onClick={handleLogout}
              className="p-2 text-slate-500 hover:text-red-600 rounded-lg border border-slate-200 hover:bg-slate-100 transition"
              title="Sign Out"
            >
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="flex gap-2 mb-6">
          {[
            { id: "homepage", label: "Homepage Copy" },
            { id: "about", label: "About & Founder Photo" },
            { id: "media", label: "Partner Logos Manager" },
            { id: "inquiries", label: `Leads Inbox (${inquiries.filter((i) => i.status === "pending").length})` },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as TabType)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                activeTab === tab.id
                  ? "bg-navy-900 text-white shadow-xs"
                  : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {activeTab === "homepage" && (
          <div className="bg-white rounded-2xl border border-slate-200 p-8 space-y-4 shadow-xs">
            <h2 className="text-lg font-bold text-slate-900 border-b pb-3">Homepage Content</h2>
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Headline (H1)</label>
              <input
                type="text"
                value={content.hero_title || ""}
                onChange={(e) => setContent({ ...content, hero_title: e.target.value })}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Subtitle</label>
              <textarea
                rows={3}
                value={content.hero_subtitle || ""}
                onChange={(e) => setContent({ ...content, hero_subtitle: e.target.value })}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm"
              />
            </div>
          </div>
        )}

        {activeTab === "about" && (
          <div className="bg-white rounded-2xl border border-slate-200 p-8 space-y-6 shadow-xs">
            <h2 className="text-lg font-bold text-slate-900 border-b pb-3">About Us &amp; Abhijit Sarkar Photo Uploader</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center bg-slate-50 p-6 rounded-2xl border border-slate-200">
              <div className="sm:col-span-4 flex flex-col items-center">
                {content.abhijit_photo_url ? (
                  <img
                    src={content.abhijit_photo_url}
                    alt="Abhijit Sarkar"
                    className="w-32 h-32 rounded-full object-cover border-2 border-emerald-500 shadow-md mb-3"
                  />
                ) : (
                  <div className="w-32 h-32 rounded-full bg-slate-900 text-emerald-400 flex items-center justify-center font-bold mb-3">
                    No Photo
                  </div>
                )}
                <span className="text-[11px] text-slate-500">Current Founder Photo</span>
              </div>

              <div className="sm:col-span-8 space-y-3">
                <label className="block text-xs font-bold text-slate-900 uppercase">Upload Abhijit Sarkar Photo</label>
                <p className="text-xs text-slate-500">Select a high-resolution professional portrait image (JPG, PNG) from your device.</p>
                <label className="inline-flex items-center gap-2 bg-navy-900 hover:bg-slate-800 text-white px-4 py-2.5 rounded-xl text-xs font-semibold cursor-pointer shadow-xs transition">
                  <Upload className="w-4 h-4" />
                  {uploading ? "Uploading..." : "Choose Image File"}
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleImageUpload(e, "abhijit_photo_url")}
                    className="hidden"
                  />
                </label>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">About Us Title</label>
              <input
                type="text"
                value={content.about_hero_title || ""}
                onChange={(e) => setContent({ ...content, about_hero_title: e.target.value })}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">About Us Subtitle</label>
              <textarea
                rows={3}
                value={content.about_hero_subtitle || ""}
                onChange={(e) => setContent({ ...content, about_hero_subtitle: e.target.value })}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm"
              />
            </div>
          </div>
        )}

        {activeTab === "media" && (
          <div className="bg-white rounded-2xl border border-slate-200 p-8 space-y-6 shadow-xs">
            <h2 className="text-lg font-bold text-slate-900 border-b pb-3">Partner &amp; AMC Logo Manager</h2>
            <p className="text-xs text-slate-600">
              Upload institutional partner logos (Nuvama, Axis, IIFL, HDFC, SBI, ICICI, Quant, etc.) to display them dynamically on the homepage partner rail.
            </p>
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 text-center space-y-3">
              <ImageIcon className="w-10 h-10 text-slate-400 mx-auto" />
              <h4 className="text-sm font-bold text-slate-900">Upload Partner Logo</h4>
              <label className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2.5 rounded-xl text-xs font-semibold cursor-pointer transition">
                <Upload className="w-4 h-4" />
                Upload Logo Image
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImageUpload(e, "partner_logo_new")}
                  className="hidden"
                />
              </label>
            </div>
          </div>
        )}

        {activeTab === "inquiries" && (
          <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-xs">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-bold text-slate-900">Consultation Inquiries Inbox</h2>
              <button
                onClick={fetchInquiries}
                className="flex items-center gap-1.5 text-xs text-slate-600 border border-slate-200 px-3 py-1.5 rounded-lg"
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
                        <span className="text-[10px] bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded font-semibold uppercase">
                          {inq.status}
                        </span>
                      </div>
                      <div className="flex gap-4 text-xs text-slate-600">
                        <span>Phone: {inq.phone}</span>
                        <span>Email: {inq.email}</span>
                      </div>
                      {inq.message && <p className="text-xs text-slate-600 italic">"{inq.message}"</p>}
                    </div>
                    {inq.status === "pending" && (
                      <button
                        onClick={() => updateInquiryStatus(inq.id, "contacted")}
                        className="text-xs bg-slate-900 text-white px-3 py-1.5 rounded-md"
                      >
                        Mark Contacted
                      </button>
                    )}
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
