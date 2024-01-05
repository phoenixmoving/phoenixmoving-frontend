import clsx from 'clsx';
import Image from 'next/image';
import img1 from '@/images/wrapped-furniture.jpeg';
import img2 from '@/images/two-movers-disassembling-beds.jpeg';
import img3 from '@/images/two-movers-and-tv.jpeg';
import img4 from '@/images/items-packed-in-the-truck.jpeg';
import img5 from '@/images/movers-and-elliptical.jpeg';

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
      <div className="relative -mb-10 z-[1] flex gap-5 py-4 sm:gap-8 overflow-x-scroll w-full scrollbar sm:justify-center px-4 sm:px-0">
        {[img3, img2, img1, img4, img5].map((image, imageIndex) => (
          <Image
            key={imageIndex}
            src={image}
            placeholder="blur"
            blurDataURL={image.blurDataURL}
            alt={`Movers in action ${imageIndex + 1}`}
            title={`Movers in action ${imageIndex + 1}`}
            className={clsx(
              'relative object-cover w-40 h-48 sm:w-60 sm:h-72 flex-none overflow-hidden rounded-2xl',
              rotations[imageIndex % rotations.length],
            )}
          />
        ))}
      </div>
    </section>
  );
}
