import { Section } from "@/components/section";
import { ArrowUpRightIcon } from "lucide-react";
import Image from "next/image";

type ImageProps = {
  height: number;
  width: number;
};

type Partner = {
  name: string;
  image: string;
  imageProps: ImageProps;
  url?: string;
};

const partners: Partner[] = [
  {
    name: "Google",
    image: "/partners/google.png",
    imageProps: {
      height: 34,
      width: 100,
    },
    url: "https://www.google.com/maps/place/Phoenix+Moving+%26+Storage/@42.291787,-71.3626797,17z/data=!3m1!4b1!4m5!3m4!1s0x89e387680ffe9aeb:0x4651b1e640f15b41!8m2!3d42.291787!4d-71.360491",
  },
  {
    name: "Yelp",
    image: "/partners/yelp.png",
    imageProps: {
      height: 41,
      width: 100,
    },
    url: "https://www.yelp.com/biz/phoenix-moving-and-storage-natick-4",
  },
  {
    name: "Thumbtack",
    image: "/partners/thumbtack.svg",
    imageProps: {
      height: 32,
      width: 130,
    },
    url: "https://www.thumbtack.com/ma/natick/moving-companies/phoenix-moving/service/452281587871776773?utm_medium=web&utm_source=txt&surface=sp",
  },
  {
    name: "Angi",
    image: "/partners/angi.png",
    imageProps: {
      height: 39,
      width: 65,
    },
  },
];

export function Partners2() {
  return (
    <Section className="bg-muted sm:py-12">
      <div className="flex flex-wrap items-center justify-around gap-14">
        {partners.map((partner) => {
          return (
            <a
              key={partner.name}
              href={partner.url || undefined}
              target={partner.url ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <Image
                loading="lazy"
                src={partner.image}
                alt={partner.name}
                title={`${partner.name} logo`}
                {...partner.imageProps}
              />
              {partner.url && (
                <ArrowUpRightIcon className="text-muted-foreground ml-1 size-3" />
              )}
            </a>
          );
        })}
      </div>
    </Section>
  );
}
