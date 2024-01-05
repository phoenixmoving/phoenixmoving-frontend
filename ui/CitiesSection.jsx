// import Link from 'next/link';
import { cities } from '@/lib/citiesData';
import Section from './Section';
import SectionHeader from '@/ui/SectionHeader';

export default async function CitiesSection() {
  return (
    <Section>
      <div className="bg-palette-background px-10 py-24 rounded-3xl">
        <SectionHeader title="Massachusetts serving areas." />
        <div className="grid grid-cols-2 gap-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          <a
            href="/natick-movers"
            title="Natick Movers"
            className="hover:underline text-xs font-light sm:text-sm text-slate-900 col-span-1 text-start w-fit"
          >
            Natick Movers
          </a>
          {cities
            .sort((a, b) => {
              if (a.name < b.name) {
                return -1;
              }
              if (a.name > b.name) {
                return 1;
              }
              return 0;
            })
            .map((city, i) => {
              return (
                <a
                  key={i}
                  href={`/${city.slug}`}
                  title={city.fullName}
                  className="hover:underline text-xs font-light sm:text-sm text-slate-900 col-span-1 text-start w-fit"
                >
                  {city.name} Movers
                </a>
              );
            })}
        </div>
      </div>
    </Section>
  );
}
