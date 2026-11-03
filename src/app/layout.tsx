import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Fredoka, Caveat } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/site-config";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/layout/ScrollProgress";

const fontSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const fontDisplay = Fredoka({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["600", "700"],
});

const fontHandwriting = Caveat({
  subsets: ["latin"],
  variable: "--font-handwriting",
  display: "swap",
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Suraj Vishwakarma | Full-Stack Developer",
    template: "%s | Suraj Vishwakarma",
  },
  description:
    "I'm Suraj Vishwakarma, a Full-Stack Developer passionate about building responsive web applications, practical digital products, and useful AI-powered experiences. B.Sc. IT (2025) & M.Sc. IT | Abhinav College, Bhayandar.",
  keywords: [
    "Suraj Vishwakarma",
    "Full-Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Node.js Developer",
    "FastAPI",
    "Python",
    "Abhinav College",
    "Bhayandar",
    "Mumbai Developer",
  ],
  authors: [{ name: "Suraj Vishwakarma", url: siteConfig.links.github }],
  creator: "Suraj Vishwakarma",
  publisher: "Suraj Vishwakarma",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: "Suraj Vishwakarma | Full-Stack Developer",
    description:
      "Building digital experiences that work. Full-Stack Developer crafting fast, responsive & reliable web applications.",
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Suraj Vishwakarma — Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Suraj Vishwakarma | Full-Stack Developer",
    description:
      "Building digital experiences that work. Full-Stack Developer crafting fast, responsive & reliable web applications.",
    images: [siteConfig.ogImage],
  },
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLdPerson = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Suraj Vishwakarma",
    jobTitle: "Full-Stack Developer",
    url: siteConfig.url,
    sameAs: [siteConfig.links.github, siteConfig.links.linkedin],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Abhinav College, Bhayandar",
      location: "Bhayandar, Mumbai, Maharashtra, India",
    },
    knowsAbout: [
      "Full-Stack Web Development",
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "JavaScript",
      "TypeScript",
      "HTML5 & CSS3",
      "Tailwind CSS",
      "MongoDB & MySQL",
      "FastAPI & Python",
      "Git & GitHub",
      "RESTful APIs",
    ],
  };

  return (
    <html
      lang="en"
      className={`${fontSans.variable} ${fontDisplay.variable} ${fontHandwriting.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPerson) }}
        />
      </head>
      <body className="font-sans bg-[#FFFDF7] text-[#151515] antialiased selection:bg-[#FFD52E] selection:text-[#151515] min-h-screen flex flex-col relative overflow-x-hidden">
        <ScrollProgress />
        <Navbar />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
