import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://sarkarcapital.in"),
  title: {
    default: "Sarkar Capital | Regulated Financial Product Distribution",
    template: "%s | Sarkar Capital",
  },
  description:
    "Institutional financial distribution across Mutual Funds, Equities (HDFC & IIFL), Sovereign Gold Bonds, and Insurance under NIC 66120 & 66220. Zero client custody.",
  keywords: [
    "Sarkar Capital",
    "Mutual Fund Distributor West Bengal",
    "AMFI Registered Intermediary",
    "SIP Calculator India",
    "HDFC Securities Sub Broker",
    "IIFL Demat Account Partner",
    "Term Insurance Distribution",
    "Sovereign Gold Bonds Desk",
  ],
  authors: [{ name: "Sarkar Capital Private Limited" }],
  creator: "Sarkar Capital",
  publisher: "Sarkar Capital",
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
    url: "https://sarkarcapital.in",
    siteName: "Sarkar Capital",
    title: "Sarkar Capital | Disciplined Wealth Distribution",
    description:
      "AMFI-registered mutual fund distribution and equity desks via HDFC Securities and IIFL. 100% paperless onboarding and direct capital routing.",
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
        "@id": "https://sarkarcapital.in/#organization",
        "name": "Sarkar Capital Private Limited",
        "url": "https://sarkarcapital.in",
        "logo": "https://sarkarcapital.in/logo.png",
        "description":
          "Regulated financial intermediary facilitating mutual funds, secondary market equities, fixed income instruments, and risk covers under NIC 66120 and 66220. Operates on a non-custodial architecture.",
        "address": {
          "@type": "PostalAddress",
          "addressRegion": "West Bengal",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "addressCountry": "IN"
        },
        "areaServed": {
          "@type": "Country",
          "name": "India"
        },
        "currenciesAccepted": "INR",
        "paymentAccepted": "Direct Bank Transfer, Net Banking, UPI to Regulated Clearing Corporations",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Financial Distribution Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Mutual Funds & SIP Distribution",
                "description": "AMFI-registered distribution across 40+ AMCs with zero client capital custody."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Equity Demat & Trading Desk",
                "description": "Sub-broker and Authorised Person services through HDFC Securities and IIFL."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Fixed Income & Capital Protection",
                "description": "Distribution of Sovereign Gold Bonds, Corporate Fixed Deposits, and IRDAI-governed policies."
              }
            }
          ]
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://sarkarcapital.in/#website",
        "url": "https://sarkarcapital.in",
        "name": "Sarkar Capital",
        "publisher": {
          "@id": "https://sarkarcapital.in/#organization"
        }
      }
    ]
  };

  return (
    <html lang="en">
      <head>
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
        <Analytics />
      </body>
    </html>
  );
}
