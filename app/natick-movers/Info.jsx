import Container from '@/ui/Container';
import Button from '@/ui/Button';
import Image from 'next/image';
import SectionHeader from '@/ui/SectionHeader';
import natick from '../../public/cities/natick.png';

export default function Info() {
  return (
    <section aria-labelledby="Natick MA page">
      <Container className="overflow-hidden py-16">
        <SectionHeader title="Reliable and affordable Natick movers." />
        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-8">
          <div className="relative z-10">
            <div className="prose prose-blue mx-auto text-gray-900 lg:max-w-none col-span-2">
              <p className="text-gray-900">
                Moving to a new apartment, home or office is an exciting
                adventure, but it can also be a daunting and stressful task.
                From packing up your belongings to arranging transportation and
                unloading at your new destination, there are countless details
                to consider and manage. That&apos;s why hiring professional
                moving company in Natick, MA can be the key to a smooth and
                hassle-free relocation experience.
              </p>
              <p>
                With the help of moving experts like Phoenix Moving Company, you
                can sit back, relax, and let the professionals take care of the
                heavy lifting for you. We are reputable and reliable moving
                company that offers a wide range of moving services in Natick,
                MA, and the surrounding areas. We understand that every move is
                unique, and they work closely with you to tailor their services
                to your individual needs and preferences.
              </p>
              <p>
                With our competitive rates and flexible payment options, you can
                rest assured that when moving to/from Natick MA , you&apos;re
                getting the best value for your money.{' '}
                <a href="tel:(508)315-9458">Contact us</a> today to learn more
                about our <a href="/local-moving">services</a> and to get a free
                quote.
              </p>
            </div>
            <div className="mx-auto mt-10 flex max-w-prose lg:max-w-none justify-evenly sm:justify-start sm:gap-4">
              <Button href="/" size="large" color="primary" title="Get a Quote">
                Get a Free Quote
              </Button>
              <Button
                href="/pricing"
                size="large"
                variant="soft"
                title="View Rates"
                color="primary"
              >
                View Pricing
              </Button>
            </div>
          </div>
          <div className="relative mx-auto mt-12 max-w-prose lg:mt-0 mb-7 lg:mb-0 w-[200px] lg:w-[300px] h-[200px] lg:h-[300px] animate-fade-in">
            <Image
              src={natick}
              alt="Natick MA image"
              title="Boston to Natick MA"
              className="object-contain"
              fill
              //   loading="lazy"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
