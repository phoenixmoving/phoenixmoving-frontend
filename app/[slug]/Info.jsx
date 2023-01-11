import Container from '@/ui/Container';
import Button from '@/ui/Button';
import Image from 'next/image';
import SectionHeader from '@/ui/SectionHeader';

export default function Info({ city }) {
  return (
    <section aria-labelledby={`${city?.fullName} Info`}>
      <Container className="overflow-hidden py-16">
        <div className="mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title={`Reliable and professional ${city?.fullName}.`}
          />
          <div className="relative z-10 mx-auto max-w-prose  lg:mx-0 lg:max-w-5xl lg:pr-72">
            <p className="text-gray-900">
              Phoenix Moving is a premier moving company that provides
              high-quality service to customers in{' '}
              <strong>{`${city?.name}, ${city?.state}`}</strong> and entire
              state of Massachusetts.
            </p>
          </div>
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-8">
            <div className="relative z-10">
              <div className="prose prose-blue mx-auto text-gray-900 lg:max-w-none">
                {city?.intro ? (
                  <p>{city?.intro}</p>
                ) : (
                  <p>
                    As a{' '}
                    <strong className="text-gray-900">{`${city?.name} Moving Company`}</strong>
                    , we specialize in long-distance, commercial, and
                    residential moves, providing a stress-free and hassle-free
                    experience. Our team of highly-trained and experienced
                    movers will ensure that your possessions are packed and
                    moved securely and safely. We take great pride in offering
                    top-notch customer service and a wide range of moving
                    services. Our services include packing and unpacking,
                    loading and unloading, and furniture assembly. We also offer{' '}
                    <a href="/storage-solutions">storage solutions</a> for those
                    who need extra space for their belongings.
                  </p>
                )}
                <p>
                  {`With our competitive rates and flexible payment options, you
                  can rest assured that when moving to/from
                  ${city?.name} ${city?.state}, you're getting the best value
                  for your money. Contact us today to learn more about our `}
                  <a href="/local-moving">services</a> and to get a free quote.
                </p>
              </div>
              <div className="mx-auto mt-10 flex max-w-prose lg:max-w-none justify-between sm:justify-start">
                <Button
                  href="/"
                  size="large"
                  color="primary"
                  title="Get a Quote"
                >
                  Get a Quote
                </Button>
                <Button
                  href="/pricing"
                  size="large"
                  variant="soft"
                  className="ml-4"
                  title="View Rates"
                >
                  View Rates
                </Button>
              </div>
            </div>
            <div className="relative mx-auto mt-12 max-w-prose lg:mt-0 mb-7 lg:mb-0 w-[200px] lg:w-[300px] h-[200px] lg:h-[300px]">
              <Image
                src={city?.icon}
                alt={`${city?.name} ${city?.state} image`}
                title={`Boston to ${city?.fullName}`}
                className="object-contain"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
