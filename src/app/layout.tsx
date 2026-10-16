import type { Metadata } from "next";
import { DM_Sans, Syne } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Derartu Nigatu Tuge — Software Engineer",
  description:
    "Software engineer in Addis Ababa building APIs, payment systems, and RAG products with Django, NestJS, Next.js, and LLMs.",
  openGraph: {
    title: "Derartu Nigatu Tuge — Software Engineer",
    description:
      "APIs, payments, and RAG systems — from design through deployment.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${syne.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
