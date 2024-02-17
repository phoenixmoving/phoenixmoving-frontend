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
          priority
          title={title}
          blurDataURL={image.blurDataURL}
          placeholder="blur"
        />
        <div className="absolute inset-0 bg-slate-900/50 mix-blend-multiply" />
      </div>
      <div className="relative py-40 sm:py-32 lg:py-28">
        <div className="mx-auto max-w-7xl lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            <div className="mx-auto max-w-md px-6 sm:max-w-2xl sm:text-center lg:flex lg:items-center lg:px-0 lg:text-left">
              <div className="lg:py-24">
                {title && (
                  <div className="flex-1 flex items-center justify-center flex-col">
                    <h1 className="relative text-center text-white block text-3xl font-semibold sm:text-4xl">
                      {title}
                    </h1>
                    <blockquote className="relative text-center text-slate-300 tracking-[0.3em] font-semibold mt-2">
                      Make Moving Chill
                    </blockquote>
                  </div>
                )}
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
