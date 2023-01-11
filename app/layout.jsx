import '@/styles/tailwind.css';
// import localFont from '@next/font/local';
import GlobalNav from '@/ui/GlobalNav';
import Footer from './Footer';
import { Inter } from '@next/font/google';

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  variable: '--font-inter',
});

// const myFont = localFont({ src: '../styles/fonts/Inter-roman.var.woff2' });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} font-sans`}>
      <head />
      <body>
        <GlobalNav />
        <main className="mt-[-72px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
