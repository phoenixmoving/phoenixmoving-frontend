import Button from '@/ui/Button';

export default function CTA() {
  return (
    <section aria-label="boston-moving-call-to-action">
      <div className="relative py-10 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 rounded-2xl">
          <div className="relative overflow-hidden bg-palette-primary-900 rounded-2xl px-6 py-10 sm:px-12 sm:py-20">
            <div
              aria-hidden="true"
              className="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0"
            >
              <svg
                className="absolute inset-0 h-full w-full rounded-2xl"
                preserveAspectRatio="xMidYMid slice"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 1463 360"
              >
                <path
                  className="text-palette-primary-500 text-opacity-40"
                  fill="currentColor"
                  d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"
                />
                <path
                  className="text-palette-primary-500 text-opacity-40"
                  fill="currentColor"
                  d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"
                />
              </svg>
            </div>
            <div className="relative">
              <div className="text-center">
                <h2 className="text-4xl sm:text-5xl font-medium tracking-tight text-white">
                  Move with Phoneix Moving Boston.
                </h2>
                <p className="text-center mt-4 text-lg text-white">
                  No credit card required.
                </p>
              </div>
              <div className="mt-8 flex justify-center">
                <Button
                  href="/"
                  size="large"
                  variant="outline"
                  className="w-full sm:w-auto border-0"
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
