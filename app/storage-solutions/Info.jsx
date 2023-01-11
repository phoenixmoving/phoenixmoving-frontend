import Section from '@/ui/Section';
import SectionHeader from '@/ui/SectionHeader';
import Image from 'next/image';

const stats = [
  { label: 'Affordable Rates and Discounts.', value: '100%' },
  { label: 'Online and On-site Free Estamates.', value: '24/7' },
  { label: 'Guaranteed Price.', value: '100%' },
  { label: 'Fully Licensed and Insured.', value: '100%' },
];

const p1 =
  'Moving company storage services are ideal for those who need to move and store their belongings in a secure, safe and reliable environment. With these services, customers are able to store their items in state-of-the-art storage facilities, complete with a range of features like climate control, security systems, and 24-hour surveillance. Customers can also choose from a variety of storage sizes, ranging from small lockers to large storage units. Additionally, moving companies provide flexible payment plans and a variety of discounts, making storage services even more cost-effective. With the help of professional movers, customers can rest assured that their belongings are safe and secure in the hands of a reliable moving and storage company.';

export default function Info() {
  return (
    <Section>
      <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:items-start lg:gap-24 lg:px-8">
        <div className="relative sm:py-16 lg:py-0">
          <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:px-0 lg:py-20">
            <div className="relative overflow-hidden rounded-2xl pt-64 pb-10 shadow-lg rotate-2 lg:min-h-[350px]">
              <Image
                className="absolute inset-0 h-full w-full object-cover"
                src="/storage-units.jpg"
                alt="Image of a storage facility"
                title="Image of a storage facility"
                fill
              />
            </div>
          </div>
        </div>

        <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 pt-16 lg:pt-0">
          <SectionHeader
            title="Storage solutions for your moving needs."
            start
          />
          <div className="mt-6 space-y-6 text-gray-900 prose prose-blue">
            <p>
              For those who need storage services, our company provides
              convenient, secure, and reliable storage solutions. Our storage
              facilities are equipped with state-of-the-art security systems,
              climate control, and fire and theft protection to ensure your
              belongings are safe.
            </p>
            <p>
              We provide flexible storage options, whether you need short-term
              or long-term storage, so you can rest assured that your things
              will be well taken care of. Additionally, our staff are
              experienced professionals and can assist you in finding the best
              storage solution that fits your needs and budget.
            </p>
          </div>

          {/* Stats section */}
          <div className="mt-10">
            <dl className="grid grid-cols-2 gap-x-4 gap-y-8">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="border-t-2 border-gray-100 pt-6"
                >
                  <dt className="font-semibold text-gray-900">{stat.label}</dt>
                  <dd className="text-3xl font-semibold tracking-tight text-palette-primary-500">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
            <div className="mt-10 mb-2">
              <a
                href="/pricing"
                title="Moving Pricing Plans"
                className="inline-flex items-center rounded-xl border border-transparent px-4 py-3  font-medium leading-4 text-blue-600 hover:bg-indigo-50"
              >
                View Pricing Plans
                <span aria-hidden="true" className="ml-2">
                  {' '}
                  &rarr;
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
