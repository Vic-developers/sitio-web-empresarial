import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "@/styles/globals.css";
import { Layout } from "@/components/layout/Layout";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://skillupsacademy.com"),
  title: {
    default: "SkillUps Academy | Capacitación, Tecnología y Transformación Digital",
    template: "%s | SkillUps Academy",
  },
  description:
    "Capacitación profesional, soluciones digitales y transformación empresarial para personas y organizaciones que quieren avanzar.",
  keywords: [
    "capacitación",
    "cursos",
    "diplomados",
    "desarrollo web",
    "LMS",
    "Moodle",
    "automatización",
    "marketing digital",
    "consultoría",
    "transformación digital",
    "tecnología educativa",
  ],
  authors: [{ name: "SkillUps Academy" }],
  creator: "SkillUps Academy",
  openGraph: {
    type: "website",
    locale: "es_MX",
    siteName: "SkillUps Academy",
    title: "SkillUps Academy | Capacitación, Tecnología y Transformación Digital",
    description:
      "Capacitación profesional, soluciones digitales y transformación empresarial para personas y organizaciones que quieren avanzar.",
  },
  twitter: {
    card: "summary_large_image",
    title: "SkillUps Academy",
    description:
      "Capacitación profesional, soluciones digitales y transformación empresarial.",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "SkillUps Academy",
    "description": "Capacitación profesional, soluciones digitales y transformación empresarial para personas y organizaciones.",
    "url": process.env.NEXT_PUBLIC_SITE_URL || "https://skillupsacademy.com",
    "logo": `${process.env.NEXT_PUBLIC_SITE_URL || "https://skillupsacademy.com"}/logo/logo.png`,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-849-577-4524",
      "contactType": "customer service",
      "availableLanguage": ["Spanish", "English"]
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Santo Domingo",
      "addressCountry": "DO"
    },
    "sameAs": [
      "https://www.facebook.com/skillupsacademy",
      "https://www.linkedin.com/company/skillupsacademy",
      "https://www.instagram.com/skillupsacademy"
    ]
  };

  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${plusJakarta.variable} ${jetbrains.variable} font-sans antialiased`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
