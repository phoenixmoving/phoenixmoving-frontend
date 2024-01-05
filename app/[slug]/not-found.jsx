import Button from '@/ui/Button';

export default function NotFound() {
  return (
    <>
      <div className="min-h-full bg-palette-footer h-[100vh] grid place-items-center">
        <div className="mx-auto max-w-max">
          <main className="sm:flex">
            <p className="text-4xl font-bold tracking-tight text-indigo-200 sm:text-5xl">
              404
            </p>
            <div className="sm:ml-6">
              <div className="sm:border-l sm:border-slate-200 sm:pl-6">
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                  Page not found
                </h1>
              </div>
              <div className="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
                <Button href="/" color="primary">
                  Go Back Home
                </Button>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
