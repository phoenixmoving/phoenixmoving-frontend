import { Section } from "@/components/section";
import { SectionHeader } from "@/components/section-header";
import { cn } from "@/lib/utils";
import { ClipboardDocumentCheckIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const incentives = [
  {
    name: "Efficient and Proficient",
    imageSrc: "/icon-shipping-simple.svg",
    description:
      "Your local Boston Movers are polite, fast and of course caring with your belongings.",
  },
  {
    name: "100% On-Time Guarantee",
    imageSrc: "/icon-warranty-simple.svg",
    description:
      "We guarantee that we will be at the needed place on time, as specified in our agreement. Be sure that we got you covered.",
  },
  {
    name: "Licensed, Bonded and Insured",
    imageSrc: ClipboardDocumentCheckIcon,
    description:
      "Phoenix Moving is Fully Licensed and Insured with the Massachusetts Department of Public Utilities.",
  },
];

export function Feature1() {
  return (
    <Section id="why-book-with-phoenix-moving">
      <SectionHeader title="Why book with Phoenix Moving Boston." />
      <div className="mx-auto mt-12 grid max-w-sm grid-cols-1 gap-x-8 gap-y-10 sm:max-w-none lg:grid-cols-3">
        {incentives.map((incentive, i) => (
          <div
            key={incentive.name}
            className={cn("space-y-4 text-center", {
              "relative bottom-2": i === 1,
            })}
          >
            <div className="sm:flex-shrink-0">
              <div className="flow-root">
                {typeof incentive.imageSrc === "string" ? (
                  <Image
                    className="mx-auto h-16 w-16"
                    width={64}
                    height={64}
                    src={incentive.imageSrc}
                    alt={incentive.name}
                    title={incentive.name}
                  />
                ) : (
                  <incentive.imageSrc className="mx-auto size-16 stroke-[0.7px]" />
                )}
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">{incentive.name}</h3>
              <p>{incentive.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
