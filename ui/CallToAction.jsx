import Button from '@/ui/Button';
import Container from '@/ui/Container';
import SectionHeader from '@/ui/SectionHeader';

export default function CallToAction() {
  return (
    <section
      aria-label="boston-moving-call-to-action"
      className="py-10 sm:py-16 bg-palette-background"
    >
      <Container className="justify-center">
        <SectionHeader
          title="Have a moving need?"
          subtitle="Contact us for a free consultation."
        />
        <div className="flex justify-center">
          <Button
            href="tel:(508)315-9458"
            size="large"
            variant="solid"
            color="primary"
            className="w-full sm:w-auto"
            title="Call us now"
          >
            +1 (508) 315-9458
          </Button>
        </div>
      </Container>
    </section>
  );
}
