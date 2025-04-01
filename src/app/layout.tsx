import { Metadata } from "next";
import { Bellefair, Barlow_Condensed, Barlow } from "next/font/google";
import AppHeader from "@/components/app-header";
import "./globals.css";
import Head from "next/head";

// Load fonts using next/font/google
const bellefair = Bellefair({
  weight: "400", // Bellefair Regular
  subsets: ["latin"],
  variable: "--font-bellefair",
});

const barlowCondensed = Barlow_Condensed({
  weight: "400", // Barlow Condensed Regular
  subsets: ["latin"],
  variable: "--font-barlow-condensed",
});

const barlow = Barlow({
  weight: "400", // Barlow Regular
  subsets: ["latin"],
  variable: "--font-barlow",
});

export const metadata: Metadata = {
  title: "Explore Space",
  description: "Explore Space",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
      </Head>
      <body
        className={`${bellefair.variable} ${barlowCondensed.variable} ${barlow.variable} antialiased bg-blue-900 text-white`}
      >
        <main className="h-screen flex flex-col">
          <AppHeader />
          <div className="flex-1 flex flex-col">{children}</div>
        </main>
      </body>
    </html>
  );
}
