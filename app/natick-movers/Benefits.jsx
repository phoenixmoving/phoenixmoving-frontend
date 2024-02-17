import SectionHeader from '@/ui/SectionHeader';
import img1 from '@/images/mover-and-truck.jpeg';
import img2 from '@/images/2-movers-and-coffee-table.jpg';
import img3 from '@/images/storage-services-main.jpg';
import Image from 'next/image';

/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const features = [
  {
    description:
      'One of the most significant benefits of hiring <strong>movers near Natick</strong>, MA is the peace of mind that comes with knowing your belongings are in good hands. Our experienced and skilled team of movers uses advanced equipment and techniques to handle fragile items, such as antiques and artwork, and large furniture, such as <a href="/piano-movers">pianos</a> and sofas, with care and precision. In addition to our expertise and flexibility, we pride on our top-notch customer service. We believe in open communication and transparency throughout the entire moving process, from the initial consultation to the final unloading. Our team is always available to answer any questions or concerns you may have, so you can feel confident and comfortable throughout the entire process.',
    imageSrc: img1,
    imageAlt: 'Mover carrying furniture to the truck',
  },
  {
    description:
      "We also provide <a href='/packing-services'>packing services</a>, so you don't have to worry about purchasing supplies or packing your items yourself. Our team will pack everything safely and securely, so your belongings arrive at your new destination in the same condition as when they left. Another advantage of using moving services in Natick, MA, is the convenience and flexibility they offer. We offer a range of options, from <a href='/local-moving'>local moves</a> to <a href='/interstate-moving'>long-distance</a> relocations, and we can work within your budget and schedule to ensure an stress-free move. Whether you need to move during the week or on the weekend, during business hours or after hours, we can accommodate your needs.",
    imageSrc: img2,
    imageAlt: 'Image of wrapped furniture',
  },
  {
    name: 'Storage services.',
    description:
      'We also offer <a href="/storage-solutions">storage solutions</a> in Natick, MA. Whether you need short-term or long-term storage, we have the space and security to keep your belongings safe and secure. Our storage facilities are clean, dry, and climate-controlled, which is especially important for delicate items, such as antiques and electronics. Our team will help you pack and store your belongings properly to ensure their safety. Phoenix Moving storage solutions is ideal for those who need extra space during a move, are downsizing, or are remodeling their home. <a href="mailto:info@gophoenixmoving.com">Contact us</a> today to learn more.',
    imageSrc: img3,
    imageAlt: 'Image of wrapped furniture',
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Benefits() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
        <SectionHeader title="Benefits of hiring movers in Natick." />

        <div className="mt-16 space-y-20">
          {features.map((feature, featureIdx) => (
            <div
              key={featureIdx}
              className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-10"
            >
              <div
                className={classNames(
                  featureIdx % 2 === 0 ? 'lg:col-start-1' : 'lg:col-start-7',
                  'mt-6 lg:col-span-6 lg:row-start-1 lg:mt-0',
                )}
              >
                {feature.name && (
                  <h3 className="text-xl font-semibold text-slate-900">
                    {feature.name}
                  </h3>
                )}
                <p
                  dangerouslySetInnerHTML={{ __html: feature.description }}
                  className="mt-2 prose prose-blue text-slate-900 max-w-none"
                />
              </div>
              <div
                className={classNames(
                  featureIdx % 2 === 0 ? 'lg:col-start-7' : 'lg:col-start-1',
                  'flex-auto lg:col-span-6 lg:row-start-1',
                )}
              >
                <div className="aspect-h-[5/2] aspect-w-5 overflow-hidden rounded-2xl bg-slate-100">
                  <Image
                    src={feature.imageSrc}
                    alt={feature.imageAlt}
                    title={feature.imageAlt}
                    className="object-cover object-center"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
