import Container from '@/ui/Container';
import SectionHeader from '@/ui/SectionHeader';
import { Button } from '@/components/ui/button';

export default function CallToAction() {
  return (
    <section className="py-10 sm:py-16 bg-muted">
      <Container className="justify-center">
        <SectionHeader
          title="Have a moving need?"
          subtitle="Contact us for a free consultation."
        />
        <div className="flex justify-center">
          <Button
            size="lg"
            className="w-full sm:w-auto"
            title="Call us now"
            asChild
          >
            <a href="tel:(508)315-9458">+1 (508) 315-9458</a>
          </Button>
        </div>
      </Container>
    </section>
  );
}
