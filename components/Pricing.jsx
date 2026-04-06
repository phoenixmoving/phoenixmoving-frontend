import CheckIcon from "@heroicons/react/20/solid/CheckIcon";
import Section from "@/ui/Section";
import SectionHeader from "@/ui/SectionHeader";
import { Button } from "./ui/button";
import Link from "next/link";

export async function getData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACK_END_API}/prices`, {
    next: { revalidate: 60 },
  });
  return res.json();
}

export default async function Pricing() {
  const prices = await getData();

  const tiers = [
    {
      name: "2 Movers",
      href: "/",
      priceMonthly: prices[0].two_men[0],
      oldPrice: prices[0].two_men[0] + 30,
      description: "Starting from",
      sizes: "Room/Studio",
      includedFeatures: [
        "2 Professional Movers.",
        "Clean, fully stocked moving trucks.",
        "Delicate handling of your stuff.",
        "All taxes included in the price.",
      ],
    },
    {
      name: "3 Movers",
      href: "/",
      priceMonthly: prices[0].three_men[0],
      oldPrice: prices[0].three_men[0] + 30,
      description: "Starting from",
      sizes: "1-2 Bedroom Apt/House",
      includedFeatures: [
        "3 Professional Movers.",
        "Clean, fully stocked moving trucks.",
        "Delicate handling of your stuff.",
        "All taxes included in the price.",
      ],
      isPopular: true,
    },
    {
      name: "4 Movers",
      href: "/",
      priceMonthly: prices[0].four_men[0],
      oldPrice: prices[0].four_men[0] + 30,
      description: "Starting from",
      sizes: "3-4 Bedroom Apt/House",
      includedFeatures: [
        "4 Professional Movers.",
        "Clean, fully stocked moving trucks.",
        "Delicate handling of your stuff.",
        "All taxes included in the price.",
      ],
    },
  ];

  return (
    <Section className="bg-muted">
      <SectionHeader
        title="Best prices, for everyone."
        subtitle="Affordable rates on professional moving services tailored to your
          needs."
      />
      <div className="mt-12 space-y-4 sm:mt-16 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:mx-auto lg:max-w-4xl xl:mx-0 xl:max-w-none xl:grid-cols-4">
        {tiers.map((tier) => (
          <div className="relative" key={tier.name}>
            {tier.isPopular && (
              <div className="bg-primary absolute -top-[12px] right-0 left-0 mx-auto w-fit rounded-full px-4 py-1 text-center text-xs font-medium text-white">
                MOST POPULAR
              </div>
            )}
            <div className="bg-background divide-y rounded-3xl shadow">
              <div className="p-6">
                <p className="text-lg leading-6 font-semibold">{tier.name}</p>
                <p className="text-muted-foreground mt-4 text-sm">
                  {tier.description}
                </p>
                <p className="text-4xl font-semibold tracking-tight">
                  ${tier.priceMonthly}
                  <span className="text-muted-foreground ml-1 text-sm font-normal tracking-normal">
                    per hour
                  </span>
                </p>
                <p className="my-8 font-semibold">{tier.sizes}</p>
                <Button
                  href={tier.href}
                  size="lg"
                  className="w-full"
                  title="Get a Quote"
                  asChild
                >
                  <Link href="/">Get a Quote</Link>
                </Button>
              </div>
              <div className="px-6 pt-6 pb-8">
                <p className="text-sm font-semibold">What&apos;s included</p>
                <ul className="mt-6 space-y-4">
                  {tier.includedFeatures.map((feature) => (
                    <li key={feature} className="flex space-x-3">
                      <CheckIcon
                        className="h-5 w-5 shrink-0 text-green-500"
                        aria-hidden="true"
                      />
                      <span className="text-sm font-light">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
        <div className="flex flex-col justify-between gap-4 sm:gap-6">
          <div className="bg-background h-full divide-y rounded-3xl shadow">
            <div className="p-6">
              <p className="text-lg leading-6 font-semibold">
                Additional mover
              </p>
              <p className="mt-4">
                <span className="text-4xl font-semibold tracking-tight">
                  ${prices[0].add_men[0]}
                </span>{" "}
                <span className="text-muted-foreground text-sm">per hour</span>
              </p>
            </div>
            <div className="px-6 pt-6 pb-8">
              <p className="flex space-x-3">
                <CheckIcon
                  className="h-5 w-5 shrink-0 text-green-500"
                  aria-hidden="true"
                />
                <span className="text-slate9500 text-sm font-light">
                  Rate per hour per moving added to your quoted houry rate if
                  you request it.
                </span>
              </p>
            </div>
          </div>
          <div className="bg-background h-full divide-y rounded-3xl shadow">
            <div className="p-6">
              <p className="text-lg leading-6 font-semibold">
                Additional truck
              </p>
              <p className="mt-4">
                <span className="text-4xl font-semibold tracking-tight">
                  ${prices[0].add_truck[0]}
                </span>{" "}
                <span className="text-muted-foreground text-sm">per hour</span>
              </p>
            </div>
            <div className="px-6 pt-6 pb-8">
              <p className="flex space-x-3">
                <CheckIcon
                  className="h-5 w-5 shrink-0 text-green-500"
                  aria-hidden="true"
                />
                <span className="text-sm font-light">
                  Rate per hour per truck added to your quoted houry rate if you
                  requested.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-primary text-primary-foreground mt-12 flex flex-col rounded-3xl p-6 text-center shadow">
        <h3 className="mb-2 text-2xl font-bold">Need a Custom Solution?</h3>
        <p className="mb-4 text-lg">
          Contact us for a personalized quote tailored to your specific moving
          needs.
        </p>
        <Button
          variant="secondary"
          size="lg"
          className="self-center"
          title="Contact Sales"
          asChild
        >
          <a href="tel:(508)315-9458">Contact Sales</a>
        </Button>
      </div>
    </Section>
  );
}
