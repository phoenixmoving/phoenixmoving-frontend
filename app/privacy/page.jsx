import Info from "./Info";

const URL = `${process.env.NEXT_PUBLIC_MAIN_URL}/privacy`;
const title = "Privacy Policy - Phoenix Moving Boston (Free Estimate)";
const description = "Privacy Policy for Phoenix Moving & Storage";

export const metadata = {
  title,
  description,
  alternates: {
    canonical: URL,
  },
};

export default async function PrivacyPage() {
  return (
    <>
      <section className="bg-primary py-28">
        <div className="m-auto max-w-5xl p-4">
          <h1 className="text-primary-foreground text-4xl font-bold">
            Privacy Policy
          </h1>
        </div>
      </section>
      <Info />
    </>
  );
}
