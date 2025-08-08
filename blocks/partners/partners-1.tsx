import Image from "next/image";
import ArrowUpRightIcon from "@heroicons/react/24/outline/ArrowUpRightIcon";

type Partner = "google" | "yelp" | "thumbtack" | "unpakt";

type PartnerObject = {
  [key in Partner]: {
    name: string;
    url?: string;
    image: {
      src: string;
      alt: string;
      title: string;
      width: number;
      height: number;
    };
  };
};

const partners: PartnerObject = {
  google: {
    name: "Google",
    url: "https://www.google.com/maps/place/Phoenix+Moving+%26+Storage/@42.291787,-71.3626797,17z/data=!3m1!4b1!4m5!3m4!1s0x89e387680ffe9aeb:0x4651b1e640f15b41!8m2!3d42.291787!4d-71.360491",
    image: {
      src: "/partners/google.png",
      alt: "Google logo",
      title: "Google",
      width: 80,
      height: 27,
    },
  },
  yelp: {
    name: "Yelp",
    url: "https://www.yelp.com/biz/phoenix-moving-and-storage-natick-4",
    image: {
      src: "/partners/yelp.png",
      alt: "Yelp logo",
      title: "Yelp",
      width: 80,
      height: 33,
    },
  },
  thumbtack: {
    name: "Thumbtack",
    url: "https://www.thumbtack.com/ma/natick/moving-companies/phoenix-moving/service/452281587871776773?utm_medium=web&utm_source=txt&surface=sp",
    image: {
      src: "/partners/thumbtack.svg",
      alt: "Thumbtack logo",
      title: "Thumbtack",
      width: 110,
      height: 27,
    },
  },
  unpakt: {
    name: "Angi",
    image: {
      src: "/partners/angi.png",
      alt: "Angi logo",
      title: "Angi",
      width: 55,
      height: 33,
    },
  },
};

export function Partners1() {
  return (
    <section className="bg-muted">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 items-center gap-8 md:grid-cols-4">
          {Object.values(partners).map((partner) => {
            return (
              <div className="flex justify-center" key={partner.name}>
                <a
                  href={partner.url}
                  target="_blank"
                  title={partner.name}
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <Image
                    loading="lazy"
                    height={partner.image.height}
                    width={partner.image.width}
                    className="grayscale transition-all duration-200 hover:grayscale-0"
                    src={partner.image.src}
                    alt={partner.image.alt}
                    title={partner.image.title}
                  />
                  {partner.url && (
                    <ArrowUpRightIcon className="text-muted-foreground ml-1 h-3 w-3" />
                  )}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
