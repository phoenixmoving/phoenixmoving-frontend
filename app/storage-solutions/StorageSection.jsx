import Section from '@/ui/Section';
import SectionHeader from '@/ui/SectionHeader';
import Image from 'next/image';
import image from '@/images/storage-units.jpg';

const options = [
  {
    name: 'Monthly Storage',
    items: [
      'Perfect for those who need ongoing storage solutions, our monthly storage options offer flexibility and convenience.',
      'Room or Less: Starting from $100/month.',
      'Studio: Starting from $150/month.',
      'One Bedroom: Starting from $200/month.',
      'Two Bedroom: Starting from $250/month.',
      'Three Bedroom: Starting from $300/month.',
      'Private House: Starting from $400/month.',
    ],
  },
  {
    name: 'Short-term Storage',
    items: [
      'Ideal for temporary storage needs during a move or renovation, our short-term storage options provide a secure and accessible solution.',
      'Contact us for pricing and availability.',
    ],
  },
  {
    name: 'Long-term Storage',
    items: [
      'For those looking for extended storage solutions, our long-term storage options offer peace of mind knowing your belongings are safe and secure for the duration of your storage period.',
      'Contact us for pricing and availability.',
    ],
  },
  {
    name: 'Overnight Storage',
    items: [
      'Need to store your belongings overnight? Our overnight storage service provides a convenient solution for short-term storage needs.',
      'Price: $200 per overnight stay.',
    ],
  },
];

export default function StorageSection() {
  return (
    <Section>
      <div className="mx-auto flex flex-col items-end justify-between gap-16 lg:mx-0 lg:max-w-none lg:flex-row">
        <div className="w-full lg:max-w-lg lg:flex-auto">
          <SectionHeader
            start
            title="Welcome to Our Storage Services."
            subtitleClassName="mt-6 sm:leading-8"
            subtitle="Phoenix Movers offers a variety of storage solutions to meet your needs, whether you require short-term, long-term, or overnight storage. Our services are designed to provide convenience, affordability, and peace of mind for all your storage needs."
          />
          <Image
            src={image}
            placeholder="blur"
            blurDataURL={image.blurDataURL}
            alt="Truck and tree"
            className="mt-16 aspect-[6/5] w-full rounded-2xl -rotate-2 object-cover lg:aspect-auto lg:h-[34.5rem]"
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
