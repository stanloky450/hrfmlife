import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Healing Rain Falling Ministries | HRFM Life",
  description: "Healing Rain Falling Ministries (HRFM) is an international prayer and deliverance ministry dedicated to fulfilling Isaiah 61:1-5 and Matthew 10:8. Join us in prayer, worship, and service.",
  keywords: ["church", "ministry", "prayer", "healing", "Chicago", "HRFM", "Healing Rain Falling Ministries"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Playfair+Display:wght@400..900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans antialiased" style={{ fontFamily: "'Inter', sans-serif" }}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
