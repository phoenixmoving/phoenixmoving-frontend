import { Section } from "@/components/section";
import { SectionHeader } from "@/components/section-header";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";

interface Service {
  name: string;
  href: string;
  description: string;
}

const services: Service[] = [
  {
    name: "Local Moving.",
    href: "local-moving",
    description:
      "Phoenix Moving is a perfect soultion for your Boston and surrounding area move.",
  },
  {
    name: "Interstate Moving.",
    href: "interstate-moving",
    description:
      "Moving across United States with Fully Licensed and Insured Moving Company.",
  },
  {
    name: "Packing Services.",
    href: "packing-services",
    description:
      "Moving Packing Solutions. Phoenix Moving Company provides all kind of boxes and carefully pack your stuff.",
  },
  {
    name: "Storage Solutions.",
    href: "storage-solutions",
    description:
      "All types of storages for your move with Phoenix Moving Company. Short and Long terms available.",
  },
  {
    name: "Piano Movers.",
    href: "piano-movers",
    description:
      "Right tools, equipment, and expertise to ensure it is done correctly and safely",
  },
];

export function Services1() {
  return (
    <Section>
      <SectionHeader
        title="Moving services."
        subtitle="Phoenix Moving Boston is a premier moving company that provides high-quality service to customers throughout the United States. We specialize in long-distance, commercial, and residential moves, providing a stress-free and hassle-free experience."
      />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <Link href={service.href} title={service.name} key={service.name}>
            <Card className="group hover:border-primary h-full w-full transition-all duration-150 hover:scale-[1.05] hover:shadow-md">
              <CardContent className="space-y-2">
                <p className="group-hover:text-primary flex items-center justify-between text-lg font-semibold">
                  {service.name}
                  <ChevronRightIcon className="h-4 w-4" />
                </p>

                <p>{service.description}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </Section>
  );
}
