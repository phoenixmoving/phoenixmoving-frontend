import Link from 'next/link';
import { Button } from '@/components/ui/button';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Not Found',
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <div className="from-background to-muted flex min-h-screen flex-col items-center justify-center bg-gradient-to-b">
      <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-lg px-8 py-12">
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center">
          <div className="relative mb-8 h-24 w-24">
            <div className="bg-primary/10 absolute inset-0 animate-pulse rounded-full" />
            <div className="bg-primary/20 absolute inset-2 rounded-full" />
            <div className="text-primary absolute inset-0 flex items-center justify-center text-4xl font-bold">
              404
            </div>
          </div>

          <h2 className="mb-4 text-3xl font-bold tracking-tight">
            Page Not Found
          </h2>

          <p className="text-muted-foreground mb-8 max-w-xs">
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved.
          </p>

          <Button asChild className="transition-all hover:scale-105" size="lg">
            <Link href="/">Return Home</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
