import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Aerab Ul Quran",
  description: "Embark on a captivating journey through the linguistic labyrinth of the Holy Quran with aerabUlQuran. Delve into the intricate world of Nahw analysis, where every word is a revelation. Uncover the beauty of Quranic syntax and Arabic grammar, as you explore the profound depths of linguistic structure within the sacred text.",
  generator: "QuranicHub",
  manifest: "/manifest.json",
  keywords: ['Quranic grammar', 'Nahw analysis', 'Arabic grammar', 'Quranic linguistics', 'Quranic syntax', 'Morphological analysis', 'Quranic language', 'Arabic syntax', 'Nahw principles', 'Linguistic analysis', 'Morphological breakdown', 'Arabic morphology', 'Quranic grammar guide', 'Nahw concepts', 'Quranic linguistic structure', 'Nahw tutorials', 'Arabic language analysis', 'Quranic grammar study', 'Linguistic principles', 'Quranic grammar resources'],
  themeColor: [{ media: "(prefers-color-scheme: dark)", color: "#fff" }],
  authors: [
    {
      name: "Mohammad Usman" ,
      url:"https://github.com/Usman-bhat",
    },
    {
      name: "HASHIM-HAMEEM",
      url: "https://github.com/HASHIM-HAMEEM",
    },
  ],
  viewport:
    "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover",
  icons: [
    { rel: "apple-touch-icon", url: "./apple-touch-icon.png" },
    { rel: "icon", url: "./icon-32x32.png" },
    { src: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
    { src: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" }
  ],
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      
      <body className={inter.className}>{children}</body>
    </html>
  );
}
