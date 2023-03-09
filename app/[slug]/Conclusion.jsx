import Section from '@/ui/Section';
import SectionHeader from '@/ui/SectionHeader';
import Link from 'next/link';

export default function Conclusion({ city }) {
  return (
    <Section>
      <SectionHeader start title="Get the help you need." />
      <p className="prose prose-blue text-gray-900 max-w-none">
        Moving can be a challenging and stressful experience, but if you hire
        the right movers near {city.name}, it doesn&apos;t have to be. We
        provide top-quality moving services to ensure a smooth and stress-free
        transition to your new home or office. Our team of experts is here to
        help you every step of the way, from planning and{' '}
        <Link href="/packing-services">packing</Link> to loading, unloading, and{' '}
        <Link href="/storage-solutions">storage</Link>. Contact us today to
        learn more about our services and to{' '}
        <Link href="/">request a quote</Link> for your upcoming move.
      </p>
    </Section>
  );
}
