import type { Metadata } from "next";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";

const GA_MEASUREMENT_ID = "G-QKX4BCH6C3";
const SITE_URL = "https://sarkar.capital";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Sarkar Capital | Regulated Financial Product Distribution",
    template: "%s | Sarkar Capital",
  },
  description:
    "Institutional financial distribution across Mutual Funds, Equities (HDFC Securities & IIFL), Fixed Income (SGBs/Corporate FDs), and Insurance under NIC 66120 & 66220. 100% non-custodial capital routing.",
  keywords: [
    "Sarkar Capital",
    "Mutual Fund Distributor Kolkata",
    "AMFI Registered Mutual Fund Intermediary",
    "SIP Calculator India",
    "HDFC Securities Sub Broker Desk",
    "IIFL Demat Account Partner",
    "Sovereign Gold Bonds Desk",
    "Pure Term Insurance Distribution",
  ],
  authors: [{ name: "Sarkar Capital Private Limited" }],
  creator: "Sarkar Capital",
  publisher: "Sarkar Capital",
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: "Sarkar Capital",
    title: "Sarkar Capital | Disciplined Wealth Distribution",
    description:
      "AMFI-registered mutual fund distribution and equity desks via HDFC Securities and IIFL. Paperless onboarding and direct capital routing.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sarkar Capital | Regulated Financial Distribution",
    description:
      "Access Mutual Funds, Equities, SGBs, and Insurance through certified institutional channels.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FinancialService",
        "@id": `${SITE_URL}/#organization`,
        "name": "Sarkar Capital Private Limited",
        "url": SITE_URL,
        "logo": `${SITE_URL}/logo.png`,
        "description":
          "Regulated financial intermediary facilitating mutual funds, secondary market equities, fixed income instruments, and risk covers under NIC 66120 and 66220. Operates on a non-custodial architecture.",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Kolkata",
          "addressRegion": "West Bengal",
          "addressCountry": "IN",
        },
        "areaServed": [
          { "@type": "City", "name": "Kolkata" },
          { "@type": "City", "name": "Mumbai" },
          { "@type": "Country", "name": "India" },
        ],
        "currenciesAccepted": "INR",
        "paymentAccepted":
          "Direct Bank Transfer, Net Banking, UPI to Regulated Clearing Corporations",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Institutional Distribution Desks",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Mutual Funds & SIP Planning Desk",
                "description":
                  "AMFI-registered distribution across 40+ AMCs with zero client capital custody.",
              },
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Equity Broking & Demat Desk",
                "description":
                  "Authorised Person desk and sub-broker alignments through HDFC Securities and IIFL.",
              },
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Fixed Income & Capital Safety Desk",
                "description":
                  "Distribution of Sovereign Gold Bonds (SGBs), AAA Corporate Fixed Deposits, and 54EC Capital Gains Bonds.",
              },
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Insurance & Risk Protection Desk",
                "description":
                  "Unbundled pure term life and comprehensive family health floaters under NIC 66220.",
              },
            },
          ],
        },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        "url": SITE_URL,
        "name": "Sarkar Capital",
        "publisher": {
          "@id": `${SITE_URL}/#organization`,
        },
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>

        {/* Global Structured Data (AEO / SEO) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-slate-50 antialiased selection:bg-emerald-100 selection:text-emerald-900">
        <Navbar />
        <main className="flex-1">{children}</main>
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}
