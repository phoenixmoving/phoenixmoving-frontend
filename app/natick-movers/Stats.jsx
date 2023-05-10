import SectionHeader from '@/ui/SectionHeader';

export default function Stats() {
  return (
    <section className="bg-palette-background pt-12 sm:pt-16">
      <div className="px-4">
        <SectionHeader
          title="Trusted by thousands of people."
          subtitle="The most Trusted and Reliable Moving Company in Boston."
        />
      </div>
      <div className="mt-10 bg-white pb-12 sm:pb-16">
        <div className="relative">
          <div className="absolute inset-0 h-1/2 bg-palette-background" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <dl className="rounded-2xl bg-white shadow-lg shadow-gray-900/5 sm:grid sm:grid-cols-3">
                <div className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                  <dt className="order-2 mt-2 text-lg font-semibold leading-6 text-gray-900">
                    Reliable
                  </dt>
                  <dd className="order-1 text-5xl font-semibold tracking-tight text-palette-primary-500">
                    100%
                  </dd>
                </div>
                <div className="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                  <dt className="order-2 mt-2 text-lg font-semibold leading-6 text-gray-900">
                    Satisfaction
                  </dt>
                  <dd className="order-1 text-5xl font-semibold tracking-tight text-palette-primary-500">
                    24/7
                  </dd>
                </div>
                <div className="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
                  <dt className="order-2 mt-2 text-lg font-semibold leading-6 text-gray-900">
                    Guaranteed Price
                  </dt>
                  <dd className="order-1 text-5xl font-semibold tracking-tight text-palette-primary-500">
                    100%
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
