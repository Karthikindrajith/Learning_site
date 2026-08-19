import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.yourdomain.com"),

  title: {
    default: "SPS Solutions | Learn. Innovate. Succeed.",
    template: "%s | SPS Solutions",
  },

  description:
    "SPS Solutions offers industry-focused courses, hands-on projects, expert mentorship, career guidance and placement support to help learners build future-ready skills.",

  keywords: [
    "SPS Solutions",
    "SPS Learning Solutions",
    "Python Full Stack",
    "MERN Stack",
    "Cloud Computing",
    "Digital Marketing",
    "Software Projects",
    "Career Guidance",
    "Placement Support",
    "Student Projects",
  ],

  authors: [
    {
      name: "SPS Solutions",
    },
  ],

  creator: "SPS Solutions",
  publisher: "SPS Solutions",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.yourdomain.com",
    siteName: "SPS Solutions",
    title: "SPS Solutions | Learn. Innovate. Succeed.",
    description:
      "Industry-focused learning, hands-on projects, expert mentorship, career guidance and placement support.",
    images: [
      {
        url: "/images/og/sps-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SPS Solutions",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "SPS Solutions | Learn. Innovate. Succeed.",
    description:
      "Build future-ready skills with industry-focused courses, practical projects and career support.",
    images: ["/images/og/sps-og-image.jpg"],
  },

  category: "education",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}