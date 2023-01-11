import Section from '@/ui/Section';
import SectionHeader from '@/ui/SectionHeader';
import Image from 'next/image';

const p1 =
  'Our packing service is an ideal solution for those looking to make their move as stress-free as possible. Our team of experienced professionals will come to your home and carefully pack all of your belongings into sturdy boxes and containers that are designed to protect your items during the move. We will label each box with its contents, so that you can easily find your belongings after the move. Additionally, our packing service allows you to focus on other aspects of your move, such as finding a new home or making travel arrangements. With our packing service, you can rest assured that your items will be securely and safely transported to your new home.';

export default function Info() {
  return (
    <Section>
      <div className="mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Packing and unpacking services." start />
        <div className="relative z-10 mx-auto max-w-prose lg:mx-0 lg:max-w-5xl lg:pr-72 prose prose-blue">
          <p className="text-gray-700">
            {p1}
            <a href="/pricing" className="ml-1">
              View pricing page
            </a>
            .
          </p>
        </div>
        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-8">
          <div className="relative z-10">
            <div className="prose prose-blue mx-auto text-gray-900 lg:max-w-none">
              <h3>Full Packing Service.</h3>
              <p>
                Our full packing and moving service is a comprehensive service
                package that helps individuals and businesses move their
                possessions from one location to another. This service includes
                packing, loading, unloading, and transporting items. It also
                includes setting up furniture and other items at the
                destination. With this service, all the stress of packing and
                moving is taken care of, and you can focus on other aspects of
                your move.
              </p>
              <h3>Packing Specialty Items.</h3>
              <p>
                Packing specialty items requires careful attention to detail and
                skill to ensure safe delivery. Specialty items may require
                custom boxes, specialty wrapping and cushioning materials, as
                well as specialized labeling. Our movers secure and label all
                materials to ensure items are not damaged during transit. We
                take additional care to ensure that any fragile items are
                properly protected and padded. We also use specialized equipment
                for heavier items if necessary. Following all packing
                instructions and taking the extra time to properly package
                specialty items can help ensure safe and successful delivery.
              </p>
              <h3>Self Packing.</h3>
              <p>
                If you choose to pack yourself, we provide packing materials
                such as boxes, packing tape, and bubble wrap. You pay only for
                the boxes you use, and we will collect any unused boxes on the
                day of your move. Don't know how many boxes you need for your
                move size? Check our <a href="#packages">Packages section</a>.
              </p>
            </div>
          </div>
          <div className="relative mx-auto mt-12 max-w-prose lg:mt-0 mb-7 lg:mb-0 w-full lg:w-[80%] h-[25rem] lg:h-[70%]">
            <Image
              src="/two-movers-packing-kitchen.jpeg"
              alt="Two movers packing dishes"
              className="rounded-2xl bg-white shadow-lg rotate-2 object-cover"
              title="Full Packing Services"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
