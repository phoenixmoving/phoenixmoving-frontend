import Image from 'next/image';
import ArrowUpRightIcon from '@heroicons/react/24/outline/ArrowUpRightIcon';

const links = {
  google:
    'https://www.google.com/maps/place/Phoenix+Moving+%26+Storage/@42.291787,-71.3626797,17z/data=!3m1!4b1!4m5!3m4!1s0x89e387680ffe9aeb:0x4651b1e640f15b41!8m2!3d42.291787!4d-71.360491',
  yelp: 'https://www.yelp.com/biz/phoenix-moving-and-storage-natick-4',
  thumbtack:
    'https://www.thumbtack.com/ma/natick/movers/phoenix-moving/service/452281587871776773?utm_medium=web&utm_source=txt&surface=sp',
  unpakt: '#',
};

export default function Partners() {
  return (
    <section className="bg-palette-background">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 items-center">
          <div className="flex justify-center">
            <a
              href={links['google']}
              target="_blank"
              title=""
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <Image
                loading="lazy"
                height={27}
                width={80}
                className="grayscale hover:grayscale-0 transition-all duration-200"
                src="/partners/google.png"
                alt="Google logo"
                title="Google"
              />
              <ArrowUpRightIcon className="w-3 h-3 ml-1 text-slate-700" />
            </a>
          </div>
          <div className="flex justify-center">
            <a
              href={links['yelp']}
              target="_blank"
              title=""
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <Image
                loading="lazy"
                height={33}
                width={80}
                className="grayscale hover:grayscale-0 transition-all duration-200"
                src="/partners/yelp.png"
                alt="Yelp logo"
                title="Better Business Bureau"
              />
              <ArrowUpRightIcon className="w-3 h-3 ml-1 text-slate-700" />
            </a>
          </div>
          <div className="flex justify-center">
            <a
              href={links['thumbtack']}
              target="_blank"
              title=""
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <Image
                loading="lazy"
                height={27}
                width={110}
                className="grayscale hover:grayscale-0 transition-all duration-200"
                src="/partners/thumbtack.svg"
                alt="Thumbtack logo"
                title="Thumbtack"
              />
              <ArrowUpRightIcon className="w-3 h-3 ml-1 text-slate-700" />
            </a>
          </div>
          <div className="flex justify-center">
            <p className="flex items-center">
              <Image
                loading="lazy"
                height={33}
                width={55}
                className="grayscale hover:grayscale-0 transition-all duration-200"
                src="/partners/angi.png"
                alt="Angi logo"
                title="Angi"
              />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
