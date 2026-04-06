import { CheckIcon } from "@heroicons/react/24/outline";
import SectionHeader from "@/ui/SectionHeader";
import Section from "@/ui/Section";
import Link from "next/link";

const cities = [
  {
    name: "New York, NY",
    price: 950,
    imageUrl: "",
    url: "/boston-new-york-movers",
  },
  {
    name: "Charlotte, NC",
    price: 3000,
    imageUrl: "",
    url: "/boston-charlotte-movers",
  },
  {
    name: "Philadelphia, PA",
    price: 1300,
    imageUrl: "",
    url: "/boston-philadelphia-movers",
  },
  {
    name: "Miami, FL",
    price: 4000,
    imageUrl: "",
    url: "/boston-miami-movers",
  },
  {
    name: "Washington, DC.",
    price: 1600,
    imageUrl: "",
    url: "boston-washington-dc-movers",
  },
  {
    name: "Chicago, IL",
    price: 3200,
    imageUrl: "",
    url: "/boston-chicago-movers",
  },
];

const features = [
  {
    name: "Fuel",
    description: "mileage and tolls",
  },
  {
    name: "Transportation",
    description: "loading/unloading",
  },
  {
    name: "Insurance",
    description: "basic value protection",
  },
  {
    name: "Moving certificates",
    description: "Insurance for the building",
  },
  {
    name: "Furniture disassembly",
    description: "and reassembly",
  },
  {
    name: "Furniture protection",
    description: "blankets, bubble wrap",
  },
];

export default function InterstatePrices() {
  return (
    <Section>
      <SectionHeader
        title="Our most popular destinations."
        subtitle="Is based upon the mileage from the origin to the destination, and the cubic footage of your belongings."
      />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {cities.map((city, i) => (
          <Link
            href={city.url}
            key={i}
            className="group hover:border-primary flex items-center justify-between space-x-3 rounded-3xl border p-6 transition-all duration-150 hover:scale-[1.05] hover:shadow-md"
          >
            {/* rounded-3xl border border-slate-200 p-8 flex flex-col h-full hover:shadow-lg hover:scale-[1.05] transition-all duration-150 */}
            <p className="group-hover:text-primary text-sm font-semibold">
              {city.name}
            </p>
            <p>
              <span className="mr-2 text-sm text-slate-400">Starting at</span>$
              {city.price}
            </p>
          </Link>
        ))}
      </div>
      <h3 className="mt-16 text-xl font-medium tracking-tight">
        What is included in standard long distance move?
      </h3>
      <dl className="bg-muted mt-12 space-y-10 rounded-3xl p-8 sm:grid sm:grid-cols-2 sm:space-y-0 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-3 lg:gap-x-8">
        {features.map((feature) => (
          <div key={feature.name} className="relative">
            <dt>
              <CheckIcon
                className="absolute h-6 w-6 text-green-500"
                aria-hidden="true"
              />
              <p className="ml-9 leading-6 font-semibold">{feature.name}</p>
            </dt>
            <dd className="mt-2 ml-9 text-sm font-light">
              {feature.description}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
