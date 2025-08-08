import Info from "./Info";

const URL = `${process.env.NEXT_PUBLIC_MAIN_URL}/terms`;
const title = "Terms and Conditions - Phoenix Moving Boston (Free Estimate)";
const description = "Terms and Conditions for Phoenix Moving & Storage";

export const metadata = {
  title,
  description,
  alternates: {
    canonical: URL,
  },
};

export default async function TermsPage() {
  return (
    <>
      <section className="bg-primary py-28">
        <div className="m-auto max-w-5xl p-4">
          <h1 className="text-primary-foreground text-4xl font-bold">
            Terms and Conditions
          </h1>
        </div>
      </section>
      <Info />
    </>
  );
}
