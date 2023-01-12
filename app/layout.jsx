import '@/styles/tailwind.css';
import Footer from './Footer';
import { Inter } from '@next/font/google';
import Navbar from '@/ui/Navbar';
import Script from 'next/script';

const GTAG = process.env.NEXT_PUBLIC_G_TAG;

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  variable: '--font-inter',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} font-sans`}>
      <head>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GTAG}`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GTAG}', {
            page_path: window.location.pathname,
          });
        `,
          }}
        />
      </head>
      <body>
        <Navbar />
        <main className="mt-[-72px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
