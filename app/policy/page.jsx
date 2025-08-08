import Info from "./Info";

const URL = `${process.env.NEXT_PUBLIC_MAIN_URL}/policy`;
const title = "Company Policy - Phoenix Moving Boston (Free Estimate)";
const description =
  "Our moving company policy page outlines all the services we provide. Read our policies to learn more about how we work and what to expect when you hire us.";

export const metadata = {
  title,
  description,
  alternates: {
    canonical: URL,
  },
};

export default async function PolicyPage() {
  return (
    <>
      <section className="bg-primary py-28">
        <div className="m-auto max-w-5xl p-4">
          <h1 className="text-primary-foreground text-4xl font-bold">
            Company Policy
          </h1>
        </div>
      </section>
      <Info />
    </>
  );
}
