import { Button } from "./ui/button";
export default function CTA() {
  return (
    <section>
      <div className="relative py-10 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-primary relative overflow-hidden rounded-3xl px-6 py-20 sm:px-12 sm:py-28">
            <div className="relative">
              <div className="text-center">
                <h2 className="text-primary-foreground text-4xl font-medium tracking-tight sm:text-5xl">
                  Move with Phoenix Moving Boston.
                </h2>
                <p className="text-primary-foreground mt-4 text-center text-lg">
                  No credit card required.
                </p>
              </div>
              <div className="mt-8 flex justify-center">
                <Button
                  href="/"
                  size="lg"
                  variant="secondary"
                  className="w-full sm:w-auto"
                  title="Request Free Estimate Online"
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
