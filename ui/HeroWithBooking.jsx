import Image from 'next/image';
import BookFormWrapper from '@/ui/BookFormWrapper';
import { Suspense } from 'react';

export default async function HeroWithBooking({ image, title }) {
  return (
    <section className="relative">
      <div className="absolute inset-0">
        <Image
          className="h-full w-full object-cover"
          src={image}
          alt={title}
          fill
          priority
          title={title}
        />
        <div className="absolute inset-0 bg-gray-900/60 mix-blend-multiply" />
      </div>
      <div className="relative py-40 sm:py-32 lg:overflow-hidden lg:py-28">
        <div className="mx-auto max-w-7xl lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            <div className="mx-auto max-w-md px-6 sm:max-w-2xl sm:text-center lg:flex lg:items-center lg:px-0 lg:text-left">
              <div className="lg:py-24">
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:mt-6 xl:text-5xl">
                  <span className="block">Phoenix Moving</span>
                  <span className="block text-purple-400">
                    #1 movers in Boston
                  </span>
                </h1>
                <p className="mt-3 text-base text-gray-50 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl hidden md:block">
                  Professional moving company serving the Boston area. We
                  provide fast, reliable, and affordable moving services for
                  residential and commercial customers.
                </p>
                <div className="mt-10 sm:mt-12 hidden md:block">
                  <p className="mt-3 text-sm text-gray-50 sm:mt-4">
                    We offer FREE Online estimates to provide you with a
                    hassle-free and convenient experience.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center mt-12 px-2">
              <Suspense fallback="loading...">
                <BookFormWrapper />
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
