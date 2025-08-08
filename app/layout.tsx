import { Maven_Pro } from "next/font/google";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";

import Navbar from "@/ui/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { Viewport } from "next";
import { Cta1 } from "@/blocks/cta/cta-1";
import "./globals.css";

const maven = Maven_Pro({
  variable: "--font-maven",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

const GTAG = process.env.NEXT_PUBLIC_G_TAG || "";
const GTAG2 = process.env.NEXT_PUBLIC_G_TAG2 || "";

// export const metadata = {
//   verification: {
//     google: 'ACFgIKDb3RQe19sMvNkxXUi1lPW4t1kCQmgUDjGp_eA',
//   },
//   manifest: '/site.webmanifest',
// };

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_MAIN_URL || ""),
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  alternates: {
    canonical: new URL(process.env.NEXT_PUBLIC_MAIN_URL || ""),
  },
  applicationName: "MoveEasy",
  appleWebApp: {
    title: "MoveEasy",
    statusBarStyle: "default",
    capable: true,
  },
  verification: {
    google: process.env.GOOGLE_VERIFICATION || "",
    yandex: process.env.YANDEX_VERIFICATION || "",
    other: {
      "msvalidate.01": process.env.MS_VALIDATE || "",
      "facebook-domain-verification": process.env.FACEBOOK_VERIFICATION || "",
    },
  },
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        type: "image/x-icon",
      },
      {
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],
    shortcut: [
      {
        url: "/favicon.ico",
        type: "image/x-icon",
      },
    ],
    apple: [
      {
        url: "/apple-icon-57x57.png",
        sizes: "57x57",
        type: "image/png",
      },
      {
        url: "/apple-icon-60x60.png",
        sizes: "60x60",
        type: "image/png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={maven.className}>
      {process.env.NODE_ENV === "production" && (
        <>
          <GoogleAnalytics gaId={GTAG || ""} />
          <GoogleTagManager gtmId={GTAG2 || ""} />
        </>
      )}
      <body>
        <Navbar />
        <main className="mt-[-72px]">{children}</main>
        <Cta1 />
        <Contact />
        <Footer />
        <a
          href="tel:(508)315-9458"
          title="Call us"
          className="fixed right-[0px] bottom-[0px] z-10 m-6 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500 text-white drop-shadow-lg lg:hidden"
        >
          <svg
            xmlns="http:www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="inline-block h-7 w-7"
          >
            <path
              fillRule="evenodd"
              d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </body>
    </html>
  );
}
