import '../styles/global.css';
import { Maven_Pro } from 'next/font/google';
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';

import Navbar from '@/ui/Navbar';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';
import CTA from '@/components/CTA';

const maven = Maven_Pro({
  variable: '--font-maven',
  subsets: ['latin'],
  display: 'swap',
});

const GTAG = process.env.NEXT_PUBLIC_G_TAG;
const GTAG2 = process.env.NEXT_PUBLIC_G_TAG2;

export const metadata = {
  verification: {
    google: 'ACFgIKDb3RQe19sMvNkxXUi1lPW4t1kCQmgUDjGp_eA',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${maven.variable} font-sans`}>
      <body className="relative z-0">
        <Navbar />
        <main className="mt-[-72px]">{children}</main>
        <a
          href="tel:(508)315-9458"
          title="Call us"
          className="fixed lg:hidden z-10 bottom-[0px] right-[0px] m-6 bg-palette-cyan w-16 h-16 rounded-full drop-shadow-lg flex justify-center items-center text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-7 h-7 inline-block"
          >
            <path
              fillRule="evenodd"
              d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
              clipRule="evenodd"
            />
          </svg>
        </a>
        <CTA />
        <Contact />
        <Footer />
      </body>
      <GoogleAnalytics gaId={GTAG} />
      <GoogleTagManager gtmId={GTAG2} />
    </html>
  );
}
