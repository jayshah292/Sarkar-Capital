"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import {
  Lock,
  LogOut,
  Save,
  Upload,
  Users,
  FileText,
  CheckCircle2,
  Clock,
  PhoneCall,
  Image as ImageIcon,
  ShieldCheck,
  LayoutGrid,
  UserCheck,
  Building2,
} from "lucide-react";

type Inquiry = {
  id: string;
  created_at: string;
  full_name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  status: "pending" | "contacted" | "closed";
};

export default function AdminPage() {
  const [session, setSession] = useState<any>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState("");
  const [loading, setLoading] = useState(true);

  // Navigation Tabs in Admin
  const [activeTab, setActiveTab] = useState<
    "home" | "about" | "services" | "compliance_contact" | "leads"
  >("about");

  // Save & Upload States
  const [saving, setSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState("");
  const [uploadingKey, setUploadingKey] = useState<string | null>(null);

  // Consultation Leads State
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);

  // Master Editable Content State (Retains all existing keys + adds Sampa Sarkar & remaining pages)
  const [content, setContent] = useState<Record<string, string>>({
    // 1. Homepage Content & Metrics
    hero_badge:
      "AMFI Registered Mutual Fund Distributor • Mumbai, Kolkata & Pan-India",
    hero_title: "Turn Your Monthly Income Into Generational Wealth.",
    hero_subtitle:
      "We help senior citizens, families, salaried professionals, and HNIs across Mumbai, Kolkata, and Pan-India build disciplined, goal-linked portfolios—with 100% direct-to-AMC security.",
    stat_years_val: "25+",
    stat_years_label: "Years in Business",
    stat_aum_val: "₹10 Cr+",
    stat_aum_label: "Assets Under Management (AUM)",
    stat_partners_val: "40+",
    stat_partners_label: "Empaneled Mutual Fund AMCs",
    stat_lives_val: "2,500+",
    stat_lives_label: "Lives Protected & Served",
    stat_custody_val: "₹0",
    stat_custody_label: "Client Fund Custody (100% Direct to AMC/Clearing)",
    stat_execution_val: "100%",
    stat_execution_label: "Paperless Digital Onboarding",
    home_banner_title: "One Trusted Partner Across All Regulated Financial Products",
    home_banner_subtitle:
      "Whether you are planning monthly retirement cash flows, starting Step-Up SIPs, or securing family health insurance, every investment settles directly with regulated institutions.",

    // 2. About Us & Leadership — Abhijit Sarkar (Existing)
    about_hero_badge: "Mumbai, Kolkata & Pan-India Presence",
    about_hero_title: "Institutional Credibility & Trusted Leadership",
    about_hero_subtitle:
      "Sarkar Capital Private Limited is an institutional financial distribution company engineered on radical transparency, modern digital tools, and zero client capital custody.",
    founder_name: "Abhijit Sarkar",
    founder_role: "Founder & Chief Wealth Planner",
    founder_heading: "Leading With Clarity, Trust & 25+ Years of Discipline",
    founder_photo_url: "",
    abhijit_photo_url: "",
    abhijit_bio_p1:
      "With over 25+ years of extensive experience in financial planning and retail portfolio architecture, Abhijit Sarkar established Sarkar Capital to provide senior citizens, retirees, families, and busy professionals with a trustworthy, modern wealth desk and transparent guidance.",
    abhijit_bio_p2:
      "Operating across Mumbai, Kolkata, and Pan-India, our desk manages ₹10 Cr+ in Assets Under Management across 40+ empaneled AMCs and has protected over 2,500+ lives—ensuring your hard-earned money is backed by NISM certifications, AMFI corporate standards, and zero proprietary fund pooling.",
    about_mission_title: "Our Core Mission & Zero-Custody Philosophy",
    about_moa_quote:
      "To carry on the business of distribution, marketing, sub-broking, referral, and intermediary facilitation of a wide spectrum of financial, investment, and wealth management products... strictly without engaging in direct banking, non-banking financial lending, chit fund operations, or accepting public deposits.",

    // 3. About Us & Leadership — Sampa Sarkar (New Feature Added)
    cofounder_name: "Sampa Sarkar",
    cofounder_role: "Director & Co-Founder",
    cofounder_heading: "Dedicated Client Service, Compliance & Family Care",
    cofounder_photo_url: "",
    sampa_photo_url: "",
    sampa_bio_p1:
      "As Director and Co-Founder of Sarkar Capital, Sampa Sarkar oversees client onboarding, KYC compliance, and ongoing service support across Mutual Funds, Corporate FDs, Bonds, and Life & Health Insurance.",
    sampa_bio_p2:
      "She ensures that senior citizens, retirees, and family members experience smooth paperless execution, timely portfolio statements, nomination updates, and dedicated claim and maturity assistance whenever required.",

    // 4. Products & Services Pages
    services_hero_title:
      "Every Regulated Wealth & Protection Product—Under One Roof.",
    services_hero_subtitle:
      "Explore our complete catalogue of SEBI, AMFI, RBI, and IRDAI regulated wealth and protection products. Every transaction settles directly with primary clearing corporations and issuing institutions.",
    mf_hero_title:
      "Stop Collecting Random Funds. Build a Goal-Engineered Portfolio.",
    mf_hero_subtitle:
      "Access over 40+ empaneled Asset Management Companies (AMCs) across India with disciplined SIP setups, goal-aligned allocations, and 100% direct clearing.",
    eq_hero_title:
      "Invest in Indian Equities With Institutional Research & Human Desk Support.",
    eq_hero_subtitle:
      "Direct secondary market access across NSE and BSE powered by corporate Authorised Person alignments with leading institutional brokers.",
    fi_hero_title:
      "Earn Predictable Fixed Returns—Without Stock Market Volatility.",
    fi_hero_subtitle:
      "Predictable cash-flow laddering and capital preservation using Sovereign Gold Bonds (SGBs), AAA-rated Corporate Fixed Deposits, and 54EC Capital Gains Bonds.",
    ins_hero_title:
      "Protect Your Family's Lifestyle & Savings From Life's Worst Days.",
    ins_hero_subtitle:
      "Unbundled Pure Term Life Insurance and Comprehensive Health Floaters backed by certified IRDAI PoSP frameworks.",
    calc_hero_title: "Financial Compounding & Inflation Calculators",
    calc_hero_subtitle:
      "Simulate monthly systematic investments with annual step-ups or evaluate lumpsum purchasing power adjusted for long-term inflation.",

    // 5. Compliance & Contact Pages
    compliance_hero_title: "Regulatory Disclosures & Investor Redressal Charter",
    compliance_hero_subtitle:
      "Operating strictly under AMFI Code of Conduct, SEBI intermediary guidelines, and IRDAI PoSP frameworks with a time-bound investor grievance escalation mechanism.",
    compliance_grievance_email: "grievance@sarkarcapital.in",
    compliance_officer_email: "compliance@sarkarcapital.in",
    contact_hero_title: "Connect With Sarkar Capital Desk",
    contact_hero_subtitle:
      "Schedule a 1-on-1 portfolio consultation across Mumbai, Kolkata, or our 100% paperless Pan-India digital desk.",
    contact_address: "Kolkata, Mumbai & Pan-India Digital Desk",
    contact_phone_primary: "+91 98300 12345",
    contact_email_primary: "desk@sarkarcapital.in",
  });

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
      if (session) {
        fetchSiteContent();
        fetchInquiries();
      }
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      if (session) {
        fetchSiteContent();
        fetchInquiries();
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  async function fetchSiteContent() {
    const { data } = await supabase.from("site_content").select("*");
    if (data && data.length > 0) {
      const mapped: Record<string, string> = {};
      data.forEach((row: { key: string; value: string }) => {
        mapped[row.key] = row.value;
      });
      setContent((prev) => ({
        ...prev,
        ...mapped,
        // Keep photo aliases synchronized so any frontend key works seamlessly
        founder_photo_url:
          mapped.founder_photo_url || mapped.abhijit_photo_url || prev.founder_photo_url,
        abhijit_photo_url:
          mapped.abhijit_photo_url || mapped.founder_photo_url || prev.abhijit_photo_url,
        cofounder_photo_url:
          mapped.cofounder_photo_url || mapped.sampa_photo_url || prev.cofounder_photo_url,
        sampa_photo_url:
          mapped.sampa_photo_url || mapped.cofounder_photo_url || prev.sampa_photo_url,
      }));
    }
  }

  async function fetchInquiries() {
    const { data } = await supabase
      .from("inquiries")
      .select("*")
      .order("created_at", { ascending: false });
    if (data) {
      setInquiries(data as Inquiry[]);
    }
  }

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setAuthError("");
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      setAuthError(error.message);
    }
  }

  async function handleLogout() {
    await supabase.auth.signOut();
  }

  function handleChange(key: string, value: string) {
    setContent((prev) => {
      const updated = { ...prev, [key]: value };
      // Mirror Abhijit and Sampa photo keys so About page works regardless of which key name it reads
      if (key === "founder_photo_url" || key === "abhijit_photo_url") {
        updated.founder_photo_url = value;
        updated.abhijit_photo_url = value;
      }
      if (key === "cofounder_photo_url" || key === "sampa_photo_url") {
        updated.cofounder_photo_url = value;
        updated.sampa_photo_url = value;
      }
      return updated;
    });
  }

  async function handleSaveAll() {
    setSaving(true);
    setSaveMessage("");
    try {
      const rows = Object.entries(content).map(([key, value]) => ({
        key,
        value: value ?? "",
        updated_at: new Date().toISOString(),
      }));

      const { error } = await supabase
        .from("site_content")
        .upsert(rows, { onConflict: "key" });

      if (error) throw error;
      setSaveMessage("All changes saved and published live!");
      setTimeout(() => setSaveMessage(""), 4000);
    } catch (err: any) {
      setSaveMessage(`Error saving: ${err.message}`);
    } finally {
      setSaving(false);
    }
  }

  async function handlePhotoUpload(
    e: React.ChangeEvent<HTMLInputElement>,
    leader: "abhijit" | "sampa"
  ) {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadingKey(leader);
    setSaveMessage("");

    try {
      const fileExt = file.name.split(".").pop();
      const fileName = `${leader}-sarkar-${Date.now()}.${fileExt}`;
      const filePath = `leadership/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from("public-assets")
        .upload(filePath, file, { upsert: true });

      if (uploadError) throw uploadError;

      const { data: publicUrlData } = supabase.storage
        .from("public-assets")
        .getPublicUrl(filePath);

      const publicUrl = publicUrlData.publicUrl;

      // Save both alias keys in state and database immediately
      const keysToUpdate =
        leader === "abhijit"
          ? ["founder_photo_url", "abhijit_photo_url"]
          : ["cofounder_photo_url", "sampa_photo_url"];

      setContent((prev) => {
        const next = { ...prev };
        keysToUpdate.forEach((k) => {
          next[k] = publicUrl;
        });
        return next;
      });

      const upsertRows = keysToUpdate.map((k) => ({
        key: k,
        value: publicUrl,
        updated_at: new Date().toISOString(),
      }));

      const { error: dbError } = await supabase
        .from("site_content")
        .upsert(upsertRows, { onConflict: "key" });

      if (dbError) throw dbError;

      setSaveMessage(
        `${
          leader === "abhijit" ? "Abhijit Sarkar" : "Sampa Sarkar"
        }'s portrait uploaded & published live!`
      );
      setTimeout(() => setSaveMessage(""), 4000);
    } catch (err: any) {
      setSaveMessage(`Upload error: ${err.message}`);
    } finally {
      setUploadingKey(null);
    }
  }

  async function updateInquiryStatus(
    id: string,
    status: "pending" | "contacted" | "closed"
  ) {
    const { error } = await supabase
      .from("inquiries")
      .update({ status })
      .eq("id", id);
    if (!error) {
      setInquiries((prev) =>
        prev.map((item) => (item.id === id ? { ...item, status } : item))
      );
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-sm font-semibold text-slate-600">
          Loading Sarkar Capital Admin Studio...
        </div>
      </div>
    );
  }

  if (!session) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center px-4 py-12 bg-slate-50">
        <div className="max-w-md w-full bg-white rounded-3xl border border-slate-200 p-8 shadow-lg space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-slate-900 text-emerald-400 flex items-center justify-center">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <h1 className="text-xl font-extrabold text-slate-900">
                Sarkar Capital Admin
              </h1>
              <p className="text-xs text-slate-500">
                Sign in to manage website content, photos &amp; investor leads
              </p>
            </div>
          </div>

          {authError && (
            <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700 font-medium">
              {authError}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                Admin Email
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm focus:border-emerald-600 focus:outline-none"
                placeholder="admin@sarkar.capital"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                Password
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm focus:border-emerald-600 focus:outline-none"
                placeholder="••••••••"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-slate-900 hover:bg-emerald-700 text-white font-bold py-3 rounded-xl text-sm transition"
            >
              Sign In to Admin Studio
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Top Admin Header */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full">
              <ShieldCheck className="w-4 h-4" /> Live CMS &amp; Leadership Studio
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Sarkar Capital Content &amp; Lead Manager
            </h1>
            <p className="text-xs sm:text-sm text-slate-500">
              Edit Homepage, Abhijit Sarkar &amp; Sampa Sarkar profiles/photos, Services, Compliance, and Leads.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={handleSaveAll}
              disabled={saving}
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white font-bold px-5 py-2.5 rounded-xl text-sm shadow-sm transition"
            >
              <Save className="w-4 h-4" />
              {saving ? "Publishing..." : "Publish All Changes"}
            </button>
            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-1.5 border border-slate-300 hover:bg-slate-100 text-slate-700 font-semibold px-4 py-2.5 rounded-xl text-xs transition"
            >
              <LogOut className="w-4 h-4" /> Sign Out
            </button>
          </div>
        </div>

        {/* Status Toast */}
        {saveMessage && (
          <div className="bg-emerald-900 text-white px-5 py-3.5 rounded-2xl shadow-md flex items-center justify-between text-xs sm:text-sm font-semibold">
            <span>{saveMessage}</span>
            <button
              onClick={() => setSaveMessage("")}
              className="text-emerald-200 hover:text-white ml-4"
            >
              ✕
            </button>
          </div>
        )}

        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2 border-b border-slate-200 pb-3">
          <button
            onClick={() => setActiveTab("about")}
            className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition ${
              activeTab === "about"
                ? "bg-slate-900 text-white shadow-sm"
                : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
            }`}
          >
            <UserCheck className="w-4 h-4" /> About Us &amp; Leadership (Abhijit &amp; Sampa)
          </button>

          <button
            onClick={() => setActiveTab("home")}
            className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition ${
              activeTab === "home"
                ? "bg-slate-900 text-white shadow-sm"
                : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
            }`}
          >
            <LayoutGrid className="w-4 h-4" /> Homepage &amp; Key Metrics
          </button>

          <button
            onClick={() => setActiveTab("services")}
            className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition ${
              activeTab === "services"
                ? "bg-slate-900 text-white shadow-sm"
                : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
            }`}
          >
            <FileText className="w-4 h-4" /> Products &amp; Calculators Copy
          </button>

          <button
            onClick={() => setActiveTab("compliance_contact")}
            className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition ${
              activeTab === "compliance_contact"
                ? "bg-slate-900 text-white shadow-sm"
                : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
            }`}
          >
            <Building2 className="w-4 h-4" /> Compliance &amp; Contact Info
          </button>

          <button
            onClick={() => setActiveTab("leads")}
            className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition ${
              activeTab === "leads"
                ? "bg-slate-900 text-white shadow-sm"
                : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
            }`}
          >
            <Users className="w-4 h-4" /> Investor Leads ({inquiries.length})
          </button>
        </div>

        {/* TAB 1: ABOUT US & LEADERSHIP (ABHIJIT SARKAR + SAMPA SARKAR) */}
        {activeTab === "about" && (
          <div className="space-y-8">
            {/* About Page Hero Header */}
            <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-5">
              <h2 className="text-lg font-extrabold text-slate-900 border-b border-slate-100 pb-3">
                1. About Us Page Header &amp; Mission Statement
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-600 mb-1">
                    Top Location / Trust Badge
                  </label>
                  <input
                    type="text"
                    value={content.about_hero_badge || ""}
                    onChange={(e) =>
                      handleChange("about_hero_badge", e.target.value)
                    }
                    className="w-full rounded-xl border border-slate-300 px-3.5 py-2 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-600 mb-1">
                    About Us Main Headline (H1)
                  </label>
                  <input
                    type="text"
                    value={content.about_hero_title || ""}
                    onChange={(e) =>
                      handleChange("about_hero_title", e.target.value)
                    }
                    className="w-full rounded-xl border border-slate-300 px-3.5 py-2 text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-600 mb-1">
                  About Us Hero Subtitle / Intro Paragraph
                </label>
                <textarea
                  rows={3}
                  value={content.about_hero_subtitle || ""}
                  onChange={(e) =>
                    handleChange("about_hero_subtitle", e.target.value)
                  }
                  className="w-full rounded-xl border border-slate-300 px-3.5 py-2 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-600 mb-1">
                  Corporate Mission / MOA Regulatory Mandate Quote
                </label>
                <textarea
                  rows={3}
                  value={content.about_moa_quote || ""}
                  onChange={(e) =>
                    handleChange("about_moa_quote", e.target.value)
                  }
                  className="w-full rounded-xl border border-slate-300 px-3.5 py-2 text-sm"
                />
              </div>
            </div>

            {/* Leadership Card 1: Abhijit Sarkar */}
            <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-slate-100 pb-3">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-emerald-700">
                    Leadership Card #1
                  </span>
                  <h2 className="text-lg font-extrabold text-slate-900">
                    Abhijit Sarkar — Photo &amp; Profile Content
                  </h2>
                </div>
              </div>

              {/* Photo Upload Row */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 bg-slate-50 p-5 rounded-2xl border border-slate-200/80">
                <div className="w-24 h-24 rounded-full overflow-hidden bg-slate-900 text-emerald-400 flex items-center justify-center shrink-0 border-2 border-emerald-500/40 shadow-md">
                  {content.founder_photo_url || content.abhijit_photo_url ? (
                    <img
                      src={
                        content.founder_photo_url || content.abhijit_photo_url
                      }
                      alt="Abhijit Sarkar"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-xl font-black">AS</span>
                  )}
                </div>

                <div className="space-y-2 flex-1">
                  <label className="block text-xs font-bold uppercase text-slate-700">
                    Upload Abhijit Sarkar Portrait Image
                  </label>
                  <div className="flex flex-wrap items-center gap-3">
                    <label className="cursor-pointer inline-flex items-center gap-2 bg-slate-900 hover:bg-emerald-700 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition">
                      <Upload className="w-4 h-4" />
                      {uploadingKey === "abhijit"
                        ? "Uploading..."
                        : "Choose Portrait Image"}
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handlePhotoUpload(e, "abhijit")}
                        className="hidden"
                      />
                    </label>
                    <input
                      type="text"
                      placeholder="Or paste direct image URL..."
                      value={
                        content.founder_photo_url ||
                        content.abhijit_photo_url ||
                        ""
                      }
                      onChange={(e) =>
                        handleChange("founder_photo_url", e.target.value)
                      }
                      className="flex-1 min-w-[220px] rounded-xl border border-slate-300 px-3 py-2 text-xs bg-white"
                    />
                  </div>
                  <p className="text-[11px] text-slate-500">
                    Automatically syncs to both <code>founder_photo_url</code>{" "}
                    and <code>abhijit_photo_url</code> on the About Us page.
                  </p>
                </div>
              </div>

              {/* Abhijit Text Inputs */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-600 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={content.founder_name || ""}
                    onChange={(e) =>
                      handleChange("founder_name", e.target.value)
                    }
                    className="w-full rounded-xl border border-slate-300 px-3.5 py-2 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-600 mb-1">
                    Designation Badge
                  </label>
                  <input
                    type="text"
                    value={content.founder_role || ""}
                    onChange={(e) =>
                      handleChange("founder_role", e.target.value)
                    }
                    className="w-full rounded-xl border border-slate-300 px-3.5 py-2 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-600 mb-1">
                    Profile Section Sub-Heading
                  </label>
                  <input
                    type="text"
                    value={content.founder_heading || ""}
                    onChange={(e) =>
                      handleChange("founder_heading", e.target.value)
                    }
                    className="w-full rounded-xl border border-slate-300 px-3.5 py-2 text-sm"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-600 mb-1">
                    Abhijit Sarkar Bio — Paragraph 1
                  </label>
                  <textarea
                    rows={3}
                    value={content.abhijit_bio_p1 || ""}
                    onChange={(e) =>
                      handleChange("abhijit_bio_p1", e.target.value)
                    }
                    className="w-full rounded-xl border border-slate-300 px-3.5 py-2 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-600 mb-1">
                    Abhijit Sarkar Bio — Paragraph 2
                  </label>
                  <textarea
                    rows={3}
                    value={content.abhijit_bio_p2 || ""}
                    onChange={(e) =>
                      handleChange("abhijit_bio_p2", e.target.value)
                    }
                    className="w-full rounded-xl border border-slate-300 px-3.5 py-2 text-sm"
                  />
                </div>
              </div>
            </div>

            {/* Leadership Card 2: Sampa Sarkar (NEW FEATURE) */}
            <div className="bg-white rounded-3xl border-2 border-emerald-500/30 p-6 sm:p-8 shadow-sm space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-slate-100 pb-3">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full">
                    Leadership Card #2 • Director &amp; Co-Founder
                  </span>
                  <h2 className="text-lg font-extrabold text-slate-900 mt-1">
                    Sampa Sarkar — Photo &amp; Profile Content
                  </h2>
                </div>
              </div>

              {/* Sampa Photo Upload Row */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 bg-emerald-50/50 p-5 rounded-2xl border border-emerald-200/80">
                <div className="w-24 h-24 rounded-full overflow-hidden bg-slate-900 text-emerald-400 flex items-center justify-center shrink-0 border-2 border-emerald-500/40 shadow-md">
                  {content.cofounder_photo_url || content.sampa_photo_url ? (
                    <img
                      src={
                        content.cofounder_photo_url || content.sampa_photo_url
                      }
                      alt="Sampa Sarkar"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-xl font-black">SS</span>
                  )}
                </div>

                <div className="space-y-2 flex-1">
                  <label className="block text-xs font-bold uppercase text-slate-700">
                    Upload Sampa Sarkar Portrait Image
                  </label>
                  <div className="flex flex-wrap items-center gap-3">
                    <label className="cursor-pointer inline-flex items-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition">
                      <Upload className="w-4 h-4" />
                      {uploadingKey === "sampa"
                        ? "Uploading..."
                        : "Choose Portrait Image"}
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handlePhotoUpload(e, "sampa")}
                        className="hidden"
                      />
                    </label>
                    <input
                      type="text"
                      placeholder="Or paste direct image URL..."
                      value={
                        content.cofounder_photo_url ||
                        content.sampa_photo_url ||
                        ""
                      }
                      onChange={(e) =>
                        handleChange("cofounder_photo_url", e.target.value)
                      }
                      className="flex-1 min-w-[220px] rounded-xl border border-slate-300 px-3 py-2 text-xs bg-white"
                    />
                  </div>
                  <p className="text-[11px] text-slate-500">
                    Automatically syncs to both{" "}
                    <code>cofounder_photo_url</code> and{" "}
                    <code>sampa_photo_url</code> on the About Us page.
                  </p>
                </div>
              </div>

              {/* Sampa Text Inputs */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-600 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={content.cofounder_name || ""}
                    onChange={(e) =>
                      handleChange("cofounder_name", e.target.value)
                    }
                    className="w-full rounded-xl border border-slate-300 px-3.5 py-2 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-600 mb-1">
                    Designation Badge
                  </label>
                  <input
                    type="text"
                    value={content.cofounder_role || ""}
                    onChange={(e) =>
                      handleChange("cofounder_role", e.target.value)
                    }
                    className="w-full rounded-xl border border-slate-300 px-3.5 py-2 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-600 mb-1">
                    Profile Section Sub-Heading
                  </label>
                  <input
                    type="text"
                    value={content.cofounder_heading || ""}
                    onChange={(e) =>
                      handleChange("cofounder_heading", e.target.value)
                    }
                    className="w-full rounded-xl border border-slate-300 px-3.5 py-2 text-sm"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-600 mb-1">
                    Sampa Sarkar Bio — Paragraph 1
                  </label>
                  <textarea
                    rows={3}
                    value={content.sampa_bio_p1 || ""}
                    onChange={(e) =>
                      handleChange("sampa_bio_p1", e.target.value)
                    }
                    className="w-full rounded-xl border border-slate-300 px-3.5 py-2 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-600 mb-1">
                    Sampa Sarkar Bio — Paragraph 2
                  </label>
                  <textarea
                    rows={3}
                    value={content.sampa_bio_p2 || ""}
                    onChange={(e) =>
                      handleChange("sampa_bio_p2", e.target.value)
                    }
                    className="w-full rounded-xl border border-slate-300 px-3.5 py-2 text-sm"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: HOMEPAGE & METRICS */}
        {activeTab === "home" && (
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
            <h2 className="text-lg font-extrabold text-slate-900 border-b border-slate-100 pb-3">
              Homepage Hero &amp; Key Institutional Metrics
            </h2>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase text-slate-600 mb-1">
                  Hero Top Regulatory Badge
                </label>
                <input
                  type="text"
                  value={content.hero_badge || ""}
                  onChange={(e) => handleChange("hero_badge", e.target.value)}
                  className="w-full rounded-xl border border-slate-300 px-3.5 py-2 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-600 mb-1">
                  Homepage Main Headline (H1)
                </label>
                <input
                  type="text"
                  value={content.hero_title || ""}
                  onChange={(e) => handleChange("hero_title", e.target.value)}
                  className="w-full rounded-xl border border-slate-300 px-3.5 py-2 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-600 mb-1">
                  Homepage Hero Subtitle
                </label>
                <textarea
                  rows={3}
                  value={content.hero_subtitle || ""}
                  onChange={(e) =>
                    handleChange("hero_subtitle", e.target.value)
                  }
                  className="w-full rounded-xl border border-slate-300 px-3.5 py-2 text-sm"
                />
              </div>
            </div>

            {/* 4 Key Metrics Grid (25+ Yrs, ₹10 Cr+ AUM, 40+ AMCs, 2500+ Lives) */}
            <div className="pt-4 border-t border-slate-100">
              <h3 className="text-sm font-extrabold text-slate-900 mb-3">
                Highlight Trust Counters (Displayed on Homepage &amp; About Us)
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <label className="block text-[11px] font-bold uppercase text-slate-500">
                    Counter 1 (Years)
                  </label>
                  <input
                    type="text"
                    value={content.stat_years_val || ""}
                    onChange={(e) =>
                      handleChange("stat_years_val", e.target.value)
                    }
                    className="w-full rounded-lg border border-slate-300 px-3 py-1.5 text-sm font-bold"
                  />
                  <input
                    type="text"
                    value={content.stat_years_label || ""}
                    onChange={(e) =>
                      handleChange("stat_years_label", e.target.value)
                    }
                    className="w-full rounded-lg border border-slate-300 px-3 py-1.5 text-xs"
                  />
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <label className="block text-[11px] font-bold uppercase text-slate-500">
                    Counter 2 (AUM)
                  </label>
                  <input
                    type="text"
                    value={content.stat_aum_val || ""}
                    onChange={(e) =>
                      handleChange("stat_aum_val", e.target.value)
                    }
                    className="w-full rounded-lg border border-slate-300 px-3 py-1.5 text-sm font-bold"
                  />
                  <input
                    type="text"
                    value={content.stat_aum_label || ""}
                    onChange={(e) =>
                      handleChange("stat_aum_label", e.target.value)
                    }
                    className="w-full rounded-lg border border-slate-300 px-3 py-1.5 text-xs"
                  />
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <label className="block text-[11px] font-bold uppercase text-slate-500">
                    Counter 3 (Empaneled AMCs)
                  </label>
                  <input
                    type="text"
                    value={content.stat_partners_val || ""}
                    onChange={(e) =>
                      handleChange("stat_partners_val", e.target.value)
                    }
                    className="w-full rounded-lg border border-slate-300 px-3 py-1.5 text-sm font-bold"
                  />
                  <input
                    type="text"
                    value={content.stat_partners_label || ""}
                    onChange={(e) =>
                      handleChange("stat_partners_label", e.target.value)
                    }
                    className="w-full rounded-lg border border-slate-300 px-3 py-1.5 text-xs"
                  />
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <label className="block text-[11px] font-bold uppercase text-slate-500">
                    Counter 4 (Lives Protected)
                  </label>
                  <input
                    type="text"
                    value={content.stat_lives_val || ""}
                    onChange={(e) =>
                      handleChange("stat_lives_val", e.target.value)
                    }
                    className="w-full rounded-lg border border-slate-300 px-3 py-1.5 text-sm font-bold"
                  />
                  <input
                    type="text"
                    value={content.stat_lives_label || ""}
                    onChange={(e) =>
                      handleChange("stat_lives_label", e.target.value)
                    }
                    className="w-full rounded-lg border border-slate-300 px-3 py-1.5 text-xs"
                  />
                </div>
              </div>
            </div>

            {/* Additional Homepage Banner Text */}
            <div className="pt-4 border-t border-slate-100 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase text-slate-600 mb-1">
                  Product Suite Section Heading
                </label>
                <input
                  type="text"
                  value={content.home_banner_title || ""}
                  onChange={(e) =>
                    handleChange("home_banner_title", e.target.value)
                  }
                  className="w-full rounded-xl border border-slate-300 px-3.5 py-2 text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-slate-600 mb-1">
                  Product Suite Section Subtitle
                </label>
                <input
                  type="text"
                  value={content.home_banner_subtitle || ""}
                  onChange={(e) =>
                    handleChange("home_banner_subtitle", e.target.value)
                  }
                  className="w-full rounded-xl border border-slate-300 px-3.5 py-2 text-sm"
                />
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: PRODUCTS & CALCULATORS COPY */}
        {activeTab === "services" && (
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
            <h2 className="text-lg font-extrabold text-slate-900 border-b border-slate-100 pb-3">
              Products Hub, Asset Desks &amp; Calculators Copy
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Master Products Hub */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <h3 className="text-xs font-extrabold uppercase tracking-wider text-emerald-800">
                  Master Products Hub (/services)
                </h3>
                <input
                  type="text"
                  value={content.services_hero_title || ""}
                  onChange={(e) =>
                    handleChange("services_hero_title", e.target.value)
                  }
                  className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm bg-white"
                  placeholder="Services Hub Title"
                />
                <textarea
                  rows={3}
                  value={content.services_hero_subtitle || ""}
                  onChange={(e) =>
                    handleChange("services_hero_subtitle", e.target.value)
                  }
                  className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm bg-white"
                  placeholder="Services Hub Subtitle"
                />
              </div>

              {/* Mutual Funds Desk */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <h3 className="text-xs font-extrabold uppercase tracking-wider text-emerald-800">
                  Mutual Funds Desk (/services/mutual-funds)
                </h3>
                <input
                  type="text"
                  value={content.mf_hero_title || ""}
                  onChange={(e) =>
                    handleChange("mf_hero_title", e.target.value)
                  }
                  className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm bg-white"
                />
                <textarea
                  rows={3}
                  value={content.mf_hero_subtitle || ""}
                  onChange={(e) =>
                    handleChange("mf_hero_subtitle", e.target.value)
                  }
                  className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm bg-white"
                />
              </div>

              {/* Equities Desk */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <h3 className="text-xs font-extrabold uppercase tracking-wider text-emerald-800">
                  Equities &amp; Demat Desk (/services/equities)
                </h3>
                <input
                  type="text"
                  value={content.eq_hero_title || ""}
                  onChange={(e) =>
                    handleChange("eq_hero_title", e.target.value)
                  }
                  className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm bg-white"
                />
                <textarea
                  rows={3}
                  value={content.eq_hero_subtitle || ""}
                  onChange={(e) =>
                    handleChange("eq_hero_subtitle", e.target.value)
                  }
                  className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm bg-white"
                />
              </div>

              {/* Fixed Income Desk */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <h3 className="text-xs font-extrabold uppercase tracking-wider text-emerald-800">
                  Fixed Income &amp; Bonds Desk (/services/fixed-income)
                </h3>
                <input
                  type="text"
                  value={content.fi_hero_title || ""}
                  onChange={(e) =>
                    handleChange("fi_hero_title", e.target.value)
                  }
                  className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm bg-white"
                />
                <textarea
                  rows={3}
                  value={content.fi_hero_subtitle || ""}
                  onChange={(e) =>
                    handleChange("fi_hero_subtitle", e.target.value)
                  }
                  className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm bg-white"
                />
              </div>

              {/* Insurance Desk */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <h3 className="text-xs font-extrabold uppercase tracking-wider text-emerald-800">
                  Life &amp; Health Insurance Desk (/services/insurance)
                </h3>
                <input
                  type="text"
                  value={content.ins_hero_title || ""}
                  onChange={(e) =>
                    handleChange("ins_hero_title", e.target.value)
                  }
                  className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm bg-white"
                />
                <textarea
                  rows={3}
                  value={content.ins_hero_subtitle || ""}
                  onChange={(e) =>
                    handleChange("ins_hero_subtitle", e.target.value)
                  }
                  className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm bg-white"
                />
              </div>

              {/* Calculators Hub */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <h3 className="text-xs font-extrabold uppercase tracking-wider text-emerald-800">
                  SIP &amp; Lumpsum Calculators Hub (/calculators)
                </h3>
                <input
                  type="text"
                  value={content.calc_hero_title || ""}
                  onChange={(e) =>
                    handleChange("calc_hero_title", e.target.value)
                  }
                  className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm bg-white"
                />
                <textarea
                  rows={3}
                  value={content.calc_hero_subtitle || ""}
                  onChange={(e) =>
                    handleChange("calc_hero_subtitle", e.target.value)
                  }
                  className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm bg-white"
                />
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: COMPLIANCE & CONTACT INFO */}
        {activeTab === "compliance_contact" && (
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
            <h2 className="text-lg font-extrabold text-slate-900 border-b border-slate-100 pb-3">
              Compliance Charter &amp; Contact Desk Details
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-xs font-extrabold uppercase tracking-wider text-emerald-800">
                  Contact Us Page (/contact)
                </h3>
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-600 mb-1">
                    Contact Headline
                  </label>
                  <input
                    type="text"
                    value={content.contact_hero_title || ""}
                    onChange={(e) =>
                      handleChange("contact_hero_title", e.target.value)
                    }
                    className="w-full rounded-xl border border-slate-300 px-3.5 py-2 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-600 mb-1">
                    Contact Subtitle
                  </label>
                  <textarea
                    rows={2}
                    value={content.contact_hero_subtitle || ""}
                    onChange={(e) =>
                      handleChange("contact_hero_subtitle", e.target.value)
                    }
                    className="w-full rounded-xl border border-slate-300 px-3.5 py-2 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-600 mb-1">
                    Operating Locations / Address Label
                  </label>
                  <input
                    type="text"
                    value={content.contact_address || ""}
                    onChange={(e) =>
                      handleChange("contact_address", e.target.value)
                    }
                    className="w-full rounded-xl border border-slate-300 px-3.5 py-2 text-sm"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-600 mb-1">
                      Primary Phone Number
                    </label>
                    <input
                      type="text"
                      value={content.contact_phone_primary || ""}
                      onChange={(e) =>
                        handleChange("contact_phone_primary", e.target.value)
                      }
                      className="w-full rounded-xl border border-slate-300 px-3.5 py-2 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-600 mb-1">
                      Primary Desk Email
                    </label>
                    <input
                      type="text"
                      value={content.contact_email_primary || ""}
                      onChange={(e) =>
                        handleChange("contact_email_primary", e.target.value)
                      }
                      className="w-full rounded-xl border border-slate-300 px-3.5 py-2 text-sm"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xs font-extrabold uppercase tracking-wider text-emerald-800">
                  Compliance &amp; Redressal Page (/compliance)
                </h3>
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-600 mb-1">
                    Compliance Headline
                  </label>
                  <input
                    type="text"
                    value={content.compliance_hero_title || ""}
                    onChange={(e) =>
                      handleChange("compliance_hero_title", e.target.value)
                    }
                    className="w-full rounded-xl border border-slate-300 px-3.5 py-2 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-600 mb-1">
                    Compliance Subtitle
                  </label>
                  <textarea
                    rows={2}
                    value={content.compliance_hero_subtitle || ""}
                    onChange={(e) =>
                      handleChange("compliance_hero_subtitle", e.target.value)
                    }
                    className="w-full rounded-xl border border-slate-300 px-3.5 py-2 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-600 mb-1">
                    Investor Grievance Desk Email
                  </label>
                  <input
                    type="text"
                    value={content.compliance_grievance_email || ""}
                    onChange={(e) =>
                      handleChange("compliance_grievance_email", e.target.value)
                    }
                    className="w-full rounded-xl border border-slate-300 px-3.5 py-2 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-600 mb-1">
                    Compliance Officer Email
                  </label>
                  <input
                    type="text"
                    value={content.compliance_officer_email || ""}
                    onChange={(e) =>
                      handleChange("compliance_officer_email", e.target.value)
                    }
                    className="w-full rounded-xl border border-slate-300 px-3.5 py-2 text-sm"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 5: INVESTOR LEADS INBOX */}
        {activeTab === "leads" && (
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h2 className="text-lg font-extrabold text-slate-900">
                Portfolio Consultation Leads ({inquiries.length})
              </h2>
              <button
                onClick={fetchInquiries}
                className="text-xs font-bold text-emerald-700 hover:underline"
              >
                Refresh Leads
              </button>
            </div>

            {inquiries.length === 0 ? (
              <p className="text-sm text-slate-500 py-8 text-center">
                No consultation inquiries submitted yet.
              </p>
            ) : (
              <div className="space-y-4">
                {inquiries.map((lead) => (
                  <div
                    key={lead.id}
                    className="rounded-2xl border border-slate-200 p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 bg-slate-50/60"
                  >
                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-base font-extrabold text-slate-900">
                          {lead.full_name}
                        </span>
                        <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-900">
                          {lead.service}
                        </span>
                        <span className="text-[11px] text-slate-400">
                          {new Date(lead.created_at).toLocaleString("en-IN")}
                        </span>
                      </div>
                      <div className="text-xs font-semibold text-slate-700 flex flex-wrap gap-4">
                        <span>📞 {lead.phone}</span>
                        <span>✉️ {lead.email}</span>
                      </div>
                      {lead.message && (
                        <p className="text-xs text-slate-600 pt-1">
                          &ldquo;{lead.message}&rdquo;
                        </p>
                      )}
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        onClick={() => updateInquiryStatus(lead.id, "pending")}
                        className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold border transition ${
                          lead.status === "pending"
                            ? "bg-amber-500 text-white border-amber-500"
                            : "bg-white text-slate-600 border-slate-300"
                        }`}
                      >
                        <Clock className="w-3.5 h-3.5" /> Pending
                      </button>
                      <button
                        onClick={() =>
                          updateInquiryStatus(lead.id, "contacted")
                        }
                        className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold border transition ${
                          lead.status === "contacted"
                            ? "bg-blue-600 text-white border-blue-600"
                            : "bg-white text-slate-600 border-slate-300"
                        }`}
                      >
                        <PhoneCall className="w-3.5 h-3.5" /> Contacted
                      </button>
                      <button
                        onClick={() => updateInquiryStatus(lead.id, "closed")}
                        className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold border transition ${
                          lead.status === "closed"
                            ? "bg-emerald-600 text-white border-emerald-600"
                            : "bg-white text-slate-600 border-slate-300"
                        }`}
                      >
                        <CheckCircle2 className="w-3.5 h-3.5" /> Closed
                      </button>
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
