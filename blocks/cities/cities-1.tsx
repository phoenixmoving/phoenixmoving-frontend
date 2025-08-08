import Link from "next/link";
import { cities } from "@/lib/citiesData";
import { Section } from "@/components/section";
import { SectionHeader } from "@/components/section-header";

export async function Cities1() {
  return (
    <Section>
      <div className="bg-muted rounded-3xl px-10 py-24">
        <SectionHeader title="Massachusetts serving areas." />
        <div className="grid grid-cols-2 gap-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          <Link
            href="/natick-movers"
            title="Natick Movers"
            className="col-span-1 w-fit text-start text-xs font-light hover:underline sm:text-sm"
          >
            Natick Movers
          </Link>
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
                <Link
                  key={i}
                  href={`/${city.slug}`}
                  title={city.fullName}
                  className="col-span-1 w-fit text-start text-xs font-light hover:underline sm:text-sm"
                >
                  {city.name} Movers
                </Link>
              );
            })}
        </div>
      </div>
    </Section>
  );
}
