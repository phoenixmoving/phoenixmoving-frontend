import clsx from 'clsx';
import Image from 'next/image';
import img1 from '../public/wrapped-furniture.jpeg';
import img2 from '../public/two-movers-disassembling-beds.jpeg';
import img3 from '../public/two-movers-and-tv.jpeg';
import img4 from '../public/items-packed-in-the-truck.jpeg';
import img5 from '../public/movers-and-elliptical.jpeg';

export default function Photos() {
  let rotations = [
    'rotate-2',
    '-rotate-2',
    'rotate-2',
    'rotate-2',
    '-rotate-2',
  ];

  return (
    <section>
      <div className="-mb-10 relative z-[1] flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[img1, img2, img3, img4, img5].map((image, imageIndex) => (
          // <div
          //   key={imageIndex}
          //   className={clsx(
          //     'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-56 sm:rounded-2xl',
          //     rotations[imageIndex % rotations.length],
          //   )}
          // >
          <Image
            key={imageIndex}
            src={image}
            alt={`Movers in action ${imageIndex + 1}`}
            title={`Movers in action ${imageIndex + 1}`}
            className={clsx(
              'relative object-cover w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-56 sm:rounded-2xl',
              rotations[imageIndex % rotations.length],
            )}
          />
          // </div>
        ))}
      </div>
    </section>
  );
}
