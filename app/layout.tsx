import type { Metadata } from "next";
import "./globals.css";
import { Header, Footer } from "@/components/layout";

export const metadata: Metadata = {
  title: "Owilavy - India's Premier Digital Marketing & Development Agency",
  description: "Transform your business with cutting-edge digital marketing, web development, app creation, and innovative solutions. Government, private, and freelance projects across all tech stacks.",
  keywords: "digital marketing, web development, app development, India, freelance, government projects, private projects",
  authors: [{ name: "Owilavy Team" }],
  creator: "Owilavy",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://owilavy.com",
    title: "Owilavy - Digital Marketing & Development Excellence",
    description: "India's leading agency for digital transformation",
    siteName: "Owilavy",
  },
  twitter: {
    card: "summary_large_image",
    title: "Owilavy - Digital Marketing & Development",
    description: "Transform your business with cutting-edge solutions",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
