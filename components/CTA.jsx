import { Button } from './ui/button';
export default function CTA() {
  return (
    <section>
      <div className="relative py-10 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden bg-primary rounded-3xl px-6 py-20 sm:px-12 sm:py-28">
            <div className="relative">
              <div className="text-center">
                <h2 className="text-4xl sm:text-5xl font-medium tracking-tight text-primary-foreground">
                  Move with Phoenix Moving Boston.
                </h2>
                <p className="text-center mt-4 text-lg text-primary-foreground">
                  No credit card required.
                </p>
              </div>
              <div className="mt-8 flex justify-center">
                <Button
                  href="/"
                  size="lg"
                  variant="secondary"
                  className="w-full sm:w-auto"
                  title="Reques tFree Estimate Online"
                >
                  Request Free Estimate Online
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
