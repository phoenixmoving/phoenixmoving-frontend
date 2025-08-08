import { Section } from "@/components/section";
import { SectionHeader } from "@/components/section-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckIcon } from "lucide-react";
import Link from "next/link";

type Tier = {
  name: string;
  href: string;
  hourlyRate: number;
  oldRate: number;
  description: string;
  sizes: string;
  includedFeatures: string[];
  isPopular?: boolean;
};

export async function getData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACK_END_API}/prices`, {
    next: { revalidate: 180 },
  });
  return res.json();
}

export async function Pricing1() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const prices = await getData();

  const tiers: Tier[] = [
    {
      name: "2 Movers",
      href: "/",
      hourlyRate: prices[0].two_men[0],
      oldRate: prices[0].two_men[0] + 30,
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
      hourlyRate: prices[0].three_men[0],
      oldRate: prices[0].three_men[0] + 30,
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
      hourlyRate: prices[0].four_men[0],
      oldRate: prices[0].four_men[0] + 30,
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
                  ${tier.hourlyRate}
                  <span className="text-muted-foreground ml-1 text-sm font-normal tracking-normal">
                    per hour
                  </span>
                </p>
                <p className="my-8 font-semibold">{tier.sizes}</p>
                <Button
                  size="lg"
                  className="w-full"
                  title="Get a Quote"
                  asChild
                >
                  <Link href="/">Get a Quote</Link>
                </Button>
              </div>
              <div className="px-6 pt-6 pb-8">
                <p className="font-semibold">What&apos;s included</p>
                <ul className="mt-6 space-y-4">
                  {tier.includedFeatures.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <CheckIcon className="size-5 flex-shrink-0 text-green-500" />
                      <span>{feature}</span>
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
              <p className="flex items-center gap-2">
                <CheckIcon className="size-5 flex-shrink-0 text-green-500" />
                <span>
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
              <p className="flex items-center gap-2">
                <CheckIcon className="size-5 flex-shrink-0 text-green-500" />
                <span>
                  Rate per hour per truck added to your quoted houry rate if you
                  requested.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Card className="from-primary via-primary/90 to-primary/80 text-primary-foreground mt-12 bg-gradient-to-br py-8">
        <CardContent className="flex flex-col items-center justify-center gap-4 text-center">
          <h3 className="text-2xl font-bold">Need a Custom Solution?</h3>
          <p className="text-lg">
            Contact us for a personalized quote tailored to your specific moving
            needs.
          </p>
          <Button
            size="lg"
            className="text-primary transform rounded-full bg-white px-8 py-3 font-semibold shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-white/90 hover:shadow-xl"
          >
            <a href="tel:(508)315-9458">Contact Us</a>
          </Button>
        </CardContent>
      </Card>
    </Section>
  );
}
