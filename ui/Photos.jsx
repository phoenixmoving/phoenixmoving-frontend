import clsx from "clsx";
import Image from "next/image";
import img1 from "@/images/2-movers-and-coffee-table-opt.jpg";
import img2 from "@/images/two-movers-disassembling-beds-opt.jpg";
import img3 from "@/images/two-movers-and-tv.jpeg";
import img4 from "@/images/2-movers-and-truck-opt.jpg";
import img5 from "@/images/movers-and-elliptical.jpeg";

export default function Photos() {
  let rotations = [
    "rotate-2",
    "-rotate-2",
    "rotate-2",
    "rotate-2",
    "-rotate-2",
  ];

  return (
    <section>
      <div className="scrollbar relative z-[1] -mb-10 flex w-full gap-5 overflow-x-scroll px-4 py-4 sm:justify-center sm:gap-8 sm:px-0">
        {[img3, img2, img1, img4, img5].map((image, imageIndex) => (
          <Image
            key={imageIndex}
            src={image}
            placeholder="blur"
            blurDataURL={image.blurDataURL}
            alt={`Movers in action ${imageIndex + 1}`}
            title={`Movers in action ${imageIndex + 1}`}
            className={clsx(
              "relative h-48 w-56 flex-none overflow-hidden rounded-2xl object-cover sm:h-72 sm:w-72",
              rotations[imageIndex % rotations.length],
            )}
          />
        ))}
      </div>
    </section>
  );
}
