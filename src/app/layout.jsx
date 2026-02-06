import Script from "next/script";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

export const metadata = {
  metadataBase: new URL("https://biozaz.com"),
  title: {
    default: "Biozaz | Medical Imaging, PACS, Ultrasound & Skincare Equipment",
    template: "%s | Biozaz"
  },
  description:
    "Biozaz provides medical imaging solutions including web-based PACS & DICOM viewers, ultrasound systems, and professional skincare equipment.",
  keywords: [
    "Biozaz",
    "PACS",
    "DICOM viewer",
    "ultrasound systems",
    "medical imaging",
    "radiology workflow",
    "skincare equipment"
  ],
  alternates: {
    canonical: "https://biozaz.com/"
  },
  openGraph: {
    title: "Biozaz | Medical Imaging, PACS & Ultrasound",
    description:
      "Web-based PACS & DICOM viewer, ultrasound systems, and professional skincare devices for clinics and hospitals.",
    url: "https://biozaz.com/",
    siteName: "Biozaz",
    images: [{ url: "/logotm2.svg" }],
    type: "website"
  },
  twitter: {
    card: "summary",
    title: "Biozaz | Medical Imaging, PACS & Ultrasound",
    description:
      "Web-based PACS & DICOM viewer, ultrasound systems, and professional skincare devices for clinics and hospitals.",
    images: ["/logotm2.svg"]
  }
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Biozaz",
  url: "https://biozaz.com",
  logo: "https://biozaz.com/logotm2.svg",
  email: "info@biozaz.com",
  telephone: "+92 336 4446339",
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "G2, 13A, Sindhi Muslim Cooperative Housing Society Cooperative Housing Society Block A Sindhi Muslim CHS (SMCHS)",
    addressLocality: "Karachi",
    postalCode: "75400",
    addressCountry: "PK"
  },
  sameAs: ["https://www.instagram.com/biozazofficial/"]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script src="https://cdn.tailwindcss.com" strategy="beforeInteractive" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body>
        <Navbar />
        <WhatsAppButton />
        {children}
        <Footer />
      </body>
    </html>
  );
}
