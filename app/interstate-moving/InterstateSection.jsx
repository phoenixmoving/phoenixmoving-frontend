import Section from '@/ui/Section';
import SectionHeader from '@/ui/SectionHeader';
import Map from './Map';

const options = [
  {
    name: 'Packing and Unpacking',
    description:
      'Let us take the stress out of packing for your long-distance move. Our expert packers will carefully wrap and pack your belongings, ensuring they arrive at your new home safely and securely. Upon arrival, we can also assist with unpacking, helping you settle into your new space with ease.',
  },
  {
    name: 'Transportation',
    description:
      "Our fleet of modern, well-maintained vehicles is equipped to handle long-distance moves of any size. Whether you're moving a few miles or across the country, you can trust us to transport your belongings safely and on time.",
  },
  {
    name: 'Storage Solutions',
    description:
      'Need temporary storage during your long-distance move? We offer secure storage facilities where you can store your belongings for short or long periods. Our climate-controlled units provide the perfect solution for keeping your items safe and protected.',
  },
  {
    name: 'Customized Services',
    description:
      "Every long-distance move is unique, which is why we offer customizable services to meet your specific needs. Whether you require specialized handling for delicate items or assistance with furniture disassembly and reassembly, we've got you covered.",
  },
];

export default function InterstateSection() {
  return (
    <Section>
      <div className="mx-auto flex flex-col items-end justify-between gap-16 lg:mx-0 lg:max-w-none lg:flex-row">
        <div className="w-full lg:max-w-lg lg:flex-auto">
          <SectionHeader
            start
            title="Our Comprehensive Long-Distance Moving Services"
            subtitleClassName="mt-6 sm:leading-8"
            subtitle="Are you planning a long-distance move and need reliable assistance? Look no further! At Phoenix Movers, we specialize in professional long-distance moving services tailored to meet your needs. Whether you're relocating to a new state or city, our experienced team is here to make your move seamless and stress-free."
          />
          <div className="relative py-0">
            <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:px-0">
              <div className="relative overflow-hidden lg:pt-8">
                <Map />
              </div>
              <div className="pb-10 text-sm text-slate-500">
                <p className="flex items-center">
                  <span className="h-[10px] w-[10px] bg-[#00d866] mr-2" />
                  same/next day delivery
                </p>
                <p className="flex items-center">
                  <span className="h-[10px] w-[10px] bg-[#cddc39] mr-2" />
                  1-2 days delivery
                </p>
                <p className="flex items-center">
                  <span className="h-[10px] w-[10px] bg-[#ffc107] mr-2" />
                  2+ days delivery
                </p>
              </div>
            </div>
          </div>
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
