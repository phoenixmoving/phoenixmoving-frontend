import Image from 'next/image';
import SectionHeader from '@/ui/SectionHeader';

export default function Info() {
  return (
    <div className="overflow-hidden bg-white">
      <div className="relative mx-auto max-w-7xl py-16 px-6 lg:px-8">
        <SectionHeader title="How does the process of moving a Piano work?" />
        <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="relative lg:col-start-2 lg:row-start-1">
            <div className="relative mx-auto mt-12 max-w-prose lg:mt-0 mb-7 lg:mb-0 w-full lg:w-[80%] h-[25rem] lg:h-[65%]">
              <Image
                src="/moving-piano.jpg"
                alt="Moving piano to the truck"
                className="rounded-2xl bg-white shadow-lg rotate-2 object-cover"
                title="Full Packing Services"
                fill
                loading="lazy"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
          <div className="mt-8 lg:mt-0">
            <div className="prose prose-indigo mx-auto text-gray-900 lg:col-start-1 lg:row-start-1 lg:max-w-none">
              <p>
                Moving a piano is no easy task. It requires the right tools,
                equipment, and expertise to ensure it is done correctly and
                safely. When moving a piano the most important step is to
                protect it from damage. This means securing it in a moving
                blanket and securing it tightly with straps. Once the piano is
                secured, it needs to be moved with the right tools, such as a
                piano dolly, to ensure it is moved in a safe manner. When moving
                a piano up or down stairs, it is important to have at least two
                people to help with the lift. Additionally, it is important to
                take extra care when moving it around corners and tight spaces.
                After the piano is in its new location, the moving blankets need
                to be removed and the piano needs to be tuned and adjusted for
                the new environment. With the right tools and expertise, piano
                moving can be done successfully and safely.
              </p>
              <h3>How much does It cost to move a Piano?</h3>
              <p>
                The average cost to move an upright piano in Phoenix Moving is
                about $150. Expect to add an additional $150 for baby grand
                pianos and an additional $250 for grand pianos. The final cost
                will ultimately depend on several factors: the type of piano,
                its age, whether there are sets of stairs, and the distance
                you&apos;re transporting it. Longer moves and larger instruments
                such as a grand piano will cost significantly more, as they
                require more equipment, extra manpower, and take more time.
              </p>
              <h3>Why choose Phoenix Moving?</h3>
              <p>
                Phoenix Moving is the perfect choice for moving your piano. They
                are experienced and knowledgeable in the safe handling of
                pianos, disassembling, wrapping, and moving them. Our
                experienced staff will handle your piano with the utmost care
                and make sure it arrives in its new home in the same condition
                as it left in. We also provide extra padding and special
                wrapping to protect the piano and its delicate parts during
                transport with Phoenix Moving, you can rest assured your piano
                will be safe and sound on its journey.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
