import clsx from 'clsx';
import Image from 'next/image';

export default function Photos() {
  let rotations = [
    'rotate-2',
    '-rotate-2',
    'rotate-2',
    'rotate-2',
    '-rotate-2',
  ];

  const getTitle = (str) => {
    str = str.slice(1, str.indexOf('.')).split('-').join(' ');
    return str;
  };

  return (
    <section>
      <div className="-mb-10 relative z-[1] flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[
          '/wrapped-furniture.jpeg',
          '/two-movers-disassembling-beds.jpeg',
          '/two-movers-and-tv.jpeg',
          '/items-packed-in-the-truck.jpeg',
          '/movers-and-elliptical.jpeg',
        ].map((image, imageIndex) => (
          <div
            key={image}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-56 sm:rounded-2xl',
              rotations[imageIndex % rotations.length],
            )}
          >
            {/* <Image
              src={image}
              alt={getTitle(image)}
              width={224}
              height={249}
              className="absolute inset-0 h-full w-full object-cover"
              title={getTitle(image)}
            /> */}
            <Image
              src={image}
              alt={getTitle(image)}
              title={getTitle(image)}
              className="absolute inset-0 h-full w-full object-cover"
              width={224}
              height={249}
              // width={500} automatically provided
              // height={500} automatically provided
              // blurDataURL="data:..." automatically provided
              // placeholder="blur" // Optional blur-up while loading
            />
          </div>
        ))}
      </div>
    </section>
  );
}
