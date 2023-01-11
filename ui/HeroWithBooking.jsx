import Image from 'next/image';
import BookFormWrapper from '@/ui/BookFormWrapper';

export default async function HeroWithBooking({ image, title }) {
  return (
    <section className="relative">
      <div className="relative sm:overflow-hidden min-h-[700px] flex">
        <Image
          src={image}
          alt={title}
          className="object-cover"
          fill
          priority
          title={title}
        />
        <div className="absolute inset-0 bg-gray-900/40 mix-blend-multiply" />
        <div className="pb-6 pt-20 sm:pb-10 sm:pt-32 relative overflow-hidden w-full flex">
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex-1 flex flex-col-reverse lg:flex-row items-center">
            <BookFormWrapper />
            {title && (
              <div className="flex-1 flex items-center justify-center flex-col">
                <h1 className="relative text-center text-white block text-3xl font-semibold sm:text-4xl">
                  {title}
                </h1>
                <blockquote className="relative text-center text-gray-300 tracking-[0.3em] font-semibold mt-2">
                  Make Moving Chill
                </blockquote>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
