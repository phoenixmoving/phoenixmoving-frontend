import Section from '@/ui/Section';
import SectionHeader from '@/ui/SectionHeader';

export default function Advantages({ city }) {
  return (
    <Section>
      <SectionHeader
        title={`Advantages of living in ${city?.name} ${city?.state}.`}
        start
      />
      <p className="prose text-gray-900 max-w-none">{city?.description}</p>
    </Section>
  );
}
