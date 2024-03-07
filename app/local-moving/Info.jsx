import Section from '@/ui/Section';
import SectionHeader from '@/ui/SectionHeader';
import Image from 'next/image';
import img from '@/images/movers-and-boxes.jpg';

const p1 =
  "Are you searching for reliable local movers in Boston and the surrounding areas? Look no further! At Phoenix Moving, we specialize in professional local moving services tailored to meet your needs. Whether you're relocating within Boston, Cambridge, Somerville, Brookline, or beyond, our experienced team is here to make your move seamless and stress-free.";

export default function Info() {
  return (
    <Section>
      <div className="mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Boston local moving." />
        <div className="relative z-10 mx-auto max-w-prose  lg:mx-0 lg:max-w-5xl lg:pr-72 prose prose-blue ">
          <p className="text-slate-900">
            We are a <b>local moving company in Boston, Massachusetts</b>. If
            you&apos;re looking for local movers in Boston MA, see if we operate
            in your area, and then contact us for a quote.
          </p>
        </div>
        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-8">
          <div className="relative z-10">
            <div className="prose prose-blue mx-auto text-slate-900 lg:max-w-none">
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
            </div>
          </div>
          <div className="relative mx-auto mt-12 max-w-prose lg:mt-0 mb-7 lg:mb-0 w-full lg:w-[80%] h-[30rem] lg:h-full">
            <Image
              src={img}
              placeholder="blur"
              blurDataURL={img.blurDataURL}
              alt="Two movers packing dishes"
              className="rounded-2xl bg-white rotate-2 object-cover"
              title="Full Packing Services"
              fill
              loading="lazy"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
