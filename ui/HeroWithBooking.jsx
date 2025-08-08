import Image from "next/image";
import BookFormWrapper from "@/ui/BookFormWrapper";
import { Suspense } from "react";
// import { getPlaiceholder } from 'plaiceholder';

// const getImage = async (src) => {
//   const buffer = await fetch(src).then(async (res) =>
//     Buffer.from(await res.arrayBuffer()),
//   );

//   const {
//     metadata: { height, width },
//     ...plaiceholder
//   } = await getPlaiceholder(buffer, { size: 10 });

//   return {
//     ...plaiceholder,
//     img: { src, height, width },
//   };
// };

export default async function HeroWithBooking({ image, title }) {
  return (
    <section className="relative">
      <div className="absolute inset-0">
        {/* <Image
          className="h-full w-full object-cover"
          src={image}
          alt={title}
          priority
          title={title}
          blurDataURL={image.blurDataURL}
          placeholder="blur"
        /> */}

        <Image
          src={image}
          blurDataURL={image.blurDataURL}
          placeholder="blur"
          alt={title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
          quality={80}
          title="Image of a moving truck"
        />
        {/* <div className="absolute inset-0 bg-slate-900/30 mix-blend-multiply" /> */}
        {/* Overlay to improve text readability */}
        <div className="from-foreground/70 to-foreground/30 absolute inset-0 bg-gradient-to-t" />
      </div>
      <div className="relative py-40 sm:py-32 lg:py-28">
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
                <p className="mt-3 hidden text-base text-slate-50 sm:mt-5 sm:text-xl md:block lg:text-lg xl:text-xl">
                  Professional moving company serving the Boston area. We
                  provide fast, reliable, and affordable moving services for
                  residential and commercial customers.
                </p>
                <div className="mt-10 hidden sm:mt-12 md:block">
                  <p className="mt-3 text-sm text-slate-50 sm:mt-4">
                    We offer FREE Online estimates to provide you with a
                    hassle-free and convenient experience.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-12 flex items-center justify-end px-2">
              <Suspense fallback={<div className="h-[567px] w-[400px]" />}>
                <BookFormWrapper />
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
