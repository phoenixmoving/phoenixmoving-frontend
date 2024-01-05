import Section from '@/ui/Section';
import SectionHeader from '@/ui/SectionHeader';

const stats = [
  { label: 'Reliable and Insured', value: '100%' },
  { label: 'Satisfaction', value: '24/7' },
  { label: 'Guaranteed Price', value: '100%' },
  { label: 'Legit', value: '100%' },
];

export default function Info({ city }) {
  return (
    <Section>
      <SectionHeader title={`Movers from Boston to ${city.name}.`} start />
      <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
        <div className="lg:w-full lg:max-w-2xl lg:flex-auto space-y-6 text-slate-900 prose prose-blue">
          <p>
            Long distance moving from{' '}
            <strong>
              Boston to {city.name} and from {city.name} to Boston
            </strong>{' '}
            can be a daunting task, especially if you&apos;re not familiar with
            the area or have never moved long distance before. Hiring a
            professional moving company that specializes in long distance moving
            can take the stress out of the process and ensure that your
            belongings arrive safely and on time.
          </p>
          <p>
            At Phoenix Moving, we offer comprehensive long distance moving
            services that include packing, loading, transportation, unloading,
            and unpacking. Our team of experienced movers will work closely with
            you to develop a customized moving plan that meets your specific
            needs and budget.
          </p>
          <p>
            We also offer competitive pricing and flexible scheduling options to
            make your move as smooth and hassle-free as possible. Whether
            you&apos;re moving from{' '}
            <strong>
              Boston to {city.name} or moving from {city.name} to Boston
            </strong>
            , trust Phoenix Moving Company to make your long distance move a
            success.
          </p>
        </div>
        <div className="lg:flex lg:flex-auto lg:justify-center">
          <dl className="lg:w-64 space-y-8 xl:w-80 text-center">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col-reverse gap-y-4">
                <dt className="text-base leading-7 text-slate-600">
                  {stat.label}
                </dt>
                <dd className="text-5xl font-semibold tracking-tight text-palette-primary-500">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Section>
  );
}
