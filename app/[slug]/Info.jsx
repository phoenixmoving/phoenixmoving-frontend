import Container from '@/ui/Container';
import Button from '@/ui/Button';
import Image from 'next/image';
import SectionHeader from '@/ui/SectionHeader';

export default function Info({ city }) {
  return (
    <section aria-labelledby={`${city?.fullName} Info`}>
      <Container className="overflow-hidden py-16">
        <SectionHeader
          title={`Reliable and affordable movers near ${city?.name}, ${city?.state}.`}
        />
        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-8">
          <div className="relative z-10">
            <div className="prose prose-blue mx-auto text-slate-900 lg:max-w-none">
              <p className="text-slate-900">
                Phoenix Moving is a premier moving company that provides
                high-quality moving services to customers in{' '}
                <strong>{`${city?.name}, ${city?.state}`}</strong> and entire
                state of Massachusetts.
              </p>
              <p>
                Phoneix Moving {city.name} is one of the best moving company in{' '}
                {city.name}, MA. We have been providing quality moving services
                for many years and have built up a great reputation in the area.
                We offer a variety of services including residential and
                commercial moves, packing and unpacking, storage and much more.
                Our team of experienced movers will make sure that your move is
                stress-free and your belongings are safe and secure. We will
                provide you with a quote before the move and will work with you
                to make sure your move goes as smoothly as possible. Phoneix
                Moving {city.name} is the perfect choice for anyone looking for
                reliable and affordable house{' '}
                <strong>movers near {city.name}</strong>, MA.
              </p>
              <p>
                With our competitive rates and flexible payment options, you can
                rest assured that when moving to/from {city?.name} {city?.state}
                , you&apos;re getting the best value for your money.{' '}
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
              >
                View Rates
              </Button>
            </div>
          </div>
          <div className="relative mx-auto mt-12 max-w-prose lg:mt-0 mb-7 lg:mb-0 w-[200px] lg:w-[300px] h-[200px] lg:h-[300px] animate-fade-in">
            <Image
              src={city?.icon}
              alt={`${city?.name} ${city?.state} image`}
              title={`Boston to ${city?.fullName}`}
              className="object-contain"
              fill
              loading="lazy"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
