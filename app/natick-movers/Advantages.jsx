import Section from '@/ui/Section';
import SectionHeader from '@/ui/SectionHeader';

export default function Advantages() {
  return (
    <Section>
      <div className="bg-palette-background px-10 py-24 rounded-3xl">
        <SectionHeader title="Advantages of living in Natick" />
        <p className="prose text-slate-900 max-w-none">
          Natick Massachusetts is a great place to live for many reasons. It is
          located in Middlesex County, just a short drive from Boston, so you
          can enjoy the convenience of city life while still living in a quiet
          suburban setting. The town has top-rated public schools, a vibrant
          downtown area, and plenty of outdoor recreation opportunities. The
          town is also home to a variety of cultural and entertainment venues,
          such as the Charles River Museum of Industry and Innovation, The
          Natick Mall, and the Natick Historical Society. There is something for
          everyone in Natick, from outdoor activities like biking and hiking, to
          shopping and dining options, to cultural and educational events. With
          its excellent quality of life, Natick Massachusetts is an ideal place
          to move and call home.
        </p>
      </div>
    </Section>
  );
}
