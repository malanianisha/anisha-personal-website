// import "./globals.css";
// import type { Metadata } from "next";
// import { siteConfig } from "@/data/siteMeta";
// import { Navbar } from "@/components/layout/Navbar";
// import { Footer } from "@/components/layout/Footer";
// import { ThemeProvider } from "@/components/ThemeProvider";

// export const metadata: Metadata = {
//   title: {
//     default: siteConfig.title,
//     template: `%s | ${siteConfig.name}`
//   },
//   description: siteConfig.description,
//   metadataBase: new URL(siteConfig.url),
//   openGraph: {
//     title: siteConfig.title,
//     description: siteConfig.description,
//     url: siteConfig.url,
//     siteName: siteConfig.name,
//     type: "website"
//   },
//   twitter: {
//     card: "summary_large_image",
//     site: siteConfig.twitterHandle,
//     title: siteConfig.title,
//     description: siteConfig.description
//   }
// };

// export default function SiteLayout({
//   children
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en" suppressHydrationWarning>
//       import { ThemeProvider } from "@/components/ThemeProvider";

// <body>
//   <ThemeProvider>
//     <Navbar />
//     {children}
//     <Footer />
//   </ThemeProvider>
// </body>
//     </html>
//   );
// }

import "./globals.css";
import type { Metadata } from "next";
import { Manrope, Sora } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SignatureMark from "@/components/layout/SignatureMark";
import { ThemeProvider } from "@/components/ThemeProvider";
import { siteConfig } from "@/data/siteMeta";
import ScrollProgress from "@/components/motion/ScrollProgress";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#eef0f5" },
    { media: "(prefers-color-scheme: dark)", color: "#06080b" },
  ],
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: siteConfig.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${manrope.variable} ${sora.variable}`}
    >
      <body>
        <ThemeProvider>
          <a href="#content" className="skip-link">
            Skip to content
          </a>
          <ScrollProgress />
          <Navbar />
          <main id="content" className="min-h-screen">
            {children}
          </main>
          <Footer />
          <SignatureMark />
        </ThemeProvider>
      </body>
    </html>
  );
}
