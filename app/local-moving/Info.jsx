import Section from '@/ui/Section';
import SectionHeader from '@/ui/SectionHeader';
import Image from 'next/image';

const p1 =
  'Our local moving service provides fast and efficient transportation of your belongings from one residence to another. Our team of experienced movers will ensure that all of your items are transported safely and securely, while providing exceptional customer service. We also provide packing and unpacking services to make your move easier. We know how stressful moving can be, and we`re dedicated to helping you make it as seamless and stress-free as possible. With our local moving service, you can rest assured that your belongings will be delivered safely and on time.';

export default function Info() {
  return (
    <Section>
      <div className="mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Boston local moving." start />
        <div className="relative z-10 mx-auto max-w-prose  lg:mx-0 lg:max-w-5xl lg:pr-72 prose prose-blue ">
          <p className="text-gray-900">
            We are a <b>local moving company in Boston, Massachusetts</b>. If
            you're looking for local movers in Boston MA, see if we operate in
            your area, and then contact us for a quote.
          </p>
        </div>
        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-8">
          <div className="relative z-10">
            <div className="prose prose-blue mx-auto text-gray-900 lg:max-w-none">
              <p>{p1}</p>

              <ul>
                <li>
                  <b>High-quality local moving services.</b>
                </li>
                <li>
                  <b>Furniture disassembling and assembling.</b>
                </li>
                <li>
                  <b>Attentiveness and respect for the client.</b>
                </li>
              </ul>
              <p>
                Since moving is a big part of their everyday lives, our Phoenix
                Movers are experienced in everything that comes along with the
                word relocation. Accurate quotes, on-time arrival,{' '}
                <b>professional packing techniques</b>, and qualified handling
                of moving equipment and materials — our workers are trained and
                equipped in the best possible way.
              </p>
              <h3>We're here to help.</h3>
              <p>
                The cost of hiring a Boston local moving company is a loss only
                if you hire the wrong one. The quality and range of services
                provided must be considered when evaluating the
                cost-effectiveness of the investment. There's an entire laundry
                list of unexpected expenses that self-movers tend to forget when
                making their decisions not to seek professional help. Gas
                prices, tolls, rent and insurance pitfalls, accidents, injuries,
                delays — the list goes on. Choosing the wrong wrapping materials
                and covers can also lead to unforeseen damages and expenses.
                Without professional guidance, additional costs accrue almost
                every step of the way.
              </p>
            </div>
          </div>
          <div className="relative mx-auto mt-12 max-w-prose lg:mt-0 mb-7 lg:mb-0 w-full lg:w-[80%] h-[25rem] lg:h-[65%]">
            <Image
              src="/local.jpeg"
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
