import Section from '@/ui/Section';
import SectionHeader from '@/ui/SectionHeader';
import Image from 'next/image';
import image from '@/images/truck-and-tree-opt.jpg';

const localServices = [
  {
    name: 'Residential Local Moves',
    description:
      'Trust our skilled team to handle every aspect of your residential move with care and efficiency. We offer customizable moving packages designed to suit your unique requirements, including furniture disassembly/reassembly, packing/unpacking services, and secure transportation of your belongings.',
  },
  {
    name: 'Commercial Local Moves',
    description:
      'Planning an office relocation? Count our movers for professional commercial moving services. We understand the importance of minimizing downtime and disruption to your business operations. Our services include office furniture/equipment relocation, IT equipment handling, and comprehensive logistics management.',
  },
  {
    name: 'Small Moves',
    description:
      'If you find yourself needing to move only a few items, opting for a full-service moving company might not be necessary. At our company, we offer a diverse range of services tailored to meet your specific needs, whether it is relocating a piano or household appliances.',
  },
  {
    name: 'Loading/Unloading Help',
    description:
      'If you require solely loading or unloading assistance, Phoenix Moving Company has you covered. Our dedicated team ensures efficient and secure loading, or unloading, of your belongings, making your move hassle-free.',
  },
];

export default function ServicesSection() {
  return (
    <Section>
      <div className="mx-auto flex flex-col items-end justify-between gap-16 lg:mx-0 lg:max-w-none lg:flex-row">
        <div className="w-full lg:max-w-lg lg:flex-auto">
          <SectionHeader
            start
            title="Our Comprehensive Local Moving Services."
            subtitleClassName="mt-6 sm:leading-8"
            subtitle={
              <>
                Serving Boston, Natick, Cambridge, Somerville, Brookline, and
                Beyond.
                <br />
                Locally based Phoenix Movers proudly serves clients throughout
                the city and its neighboring areas. In addition to Boston, our
                services extend to Cambridge, Somerville, Brookline, Newton,
                Quincy, Waltham, Medford, Arlington, and other nearby cities.
                Wherever your destination may be within the Greater Boston area,
                we are here to assist you.
              </>
            }
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
            {localServices.map((service) => (
              <li key={service.name} className="py-8">
                <dl className="relative flex flex-wrap gap-x-3">
                  <dt className="sr-only">{service.name}</dt>
                  <dd className="w-full flex-none text-lg font-semibold tracking-tight text-slate-900">
                    <p>
                      {service.name}
                      <span className="absolute inset-0" aria-hidden="true" />
                    </p>
                  </dd>
                  <dt className="sr-only">Description</dt>
                  <dd className="mt-2 w-full flex-none text-base leading-7 text-slate-900">
                    {service.description}
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
