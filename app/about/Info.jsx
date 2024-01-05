import Section from '@/ui/Section';
import SectionHeader from '@/ui/SectionHeader';
import Button from '@/ui/Button';

export default function Info() {
  return (
    <Section>
      <div className="mx-auto max-w-prose text-base lg:max-w-none">
        <SectionHeader title="What makes us different." start />
      </div>
      <div className="relative z-10 mx-auto max-w-prose mb-8 lg:mx-0 lg:max-w-5xl lg:pr-72">
        <p className="text-slate-900">
          We are professional moving and storage company based in Boston, MA. We
          are dedicated to providing you with the highest quality service and
          value for your relocation needs.
        </p>
      </div>
      <div className="relative z-10">
        <div className="prose prose-blue mx-auto text-slate-900 lg:max-w-none">
          <p>
            Our experienced team of movers offer local and long distance, as
            well as packing and unpacking services, loading and unloading,
            storage solutions and much more.
          </p>
          <p>
            We take great pride in our commitment to customer satisfaction, and
            strive to make your move as stress-free as possible.
          </p>
          <h3>We&apos;re here to help.</h3>
          <p>
            With our competitive rates, reliable service, and wide range of
            solutions for every budget, we are the ideal choice for your next
            move.
          </p>
        </div>
        <div className="mx-auto mt-10 flex max-w-prose text-base lg:max-w-none">
          <Button href="/" size="large" color="primary" title="Get a Quote">
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
    </Section>
  );
}
