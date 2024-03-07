import image from '@/images/moving-piano.jpg';
import Section from '@/ui/Section';
import SectionHeader from '@/ui/SectionHeader';
import Image from 'next/image';

const options = [
  {
    name: 'Local Piano Moves',
    description:
      'Our team of trained professionals will handle every aspect of your local piano move with care and precision, ensuring that your instrument is transported safely and efficiently to its new home.',
    items: [
      'Prices may vary depending on the type of piano being moved.',
      ' Upright Piano: Starting from $150.',
      'Baby Grand Piano: Starting from $300.',
      'Grand Piano: Starting from $400.',
    ],
  },
  {
    name: 'Interstate Piano Moves',
    description:
      'Planning a long-distance move? Trust Phoenix Movers to handle your interstate piano move with expertise and professionalism. We have the knowledge and resources to transport your piano securely to any destination across the states.',
  },
];

export default function InfoSection() {
  return (
    <Section>
      <div className="mx-auto flex flex-col items-end justify-between gap-16 lg:mx-0 lg:max-w-none lg:flex-row">
        <div className="w-full lg:max-w-lg lg:flex-auto">
          <SectionHeader
            start
            title="Welcome to Boston Piano Movers."
            subtitleClassName="mt-6 sm:leading-8"
            subtitle="Are you in need of professional piano movers in the Boston area? Look no further! At Phoenix Moving & Storage we specialize in expert piano moving services, catering to clients in Boston and the surrounding areas. Whether you're relocating within the city or across state lines, our experienced team is here to ensure your piano arrives safely and securely at its destination."
          />
          <Image
            src={image}
            placeholder="blur"
            blurDataURL={image.blurDataURL}
            alt="Truck and tree"
            className="mt-16 aspect-[6/5] w-full rounded-2xl -rotate-2 object-cover lg:aspect-auto lg:h-1/3"
            title="Local Moving Services"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="w-full lg:max-w-xl lg:flex-auto">
          <h3 className="sr-only">Local Moving Services</h3>
          <ul className="-my-8 divide-y divide-slate-100">
            {options.map((option) => (
              <li key={option.name} className="py-8">
                <dl className="relative flex flex-wrap gap-x-3">
                  <dt className="sr-only">{option.name}</dt>
                  <dd className="w-full flex-none text-lg font-semibold tracking-tight text-slate-900">
                    <p>
                      {option.name}
                      <span className="absolute inset-0" aria-hidden="true" />
                    </p>
                  </dd>
                  <dt className="sr-only">Description</dt>
                  <dd className="mt-2 w-full flex-none text-base leading-7 text-slate-900">
                    {option.description}
                    {option.items && (
                      <ul className="mt-2 list-disc pl-6">
                        {option.items.map((item) => (
                          <li key={item} className="text-slate-900">
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </dd>
                </dl>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
