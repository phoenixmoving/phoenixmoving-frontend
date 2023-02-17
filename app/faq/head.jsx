const URL = `${process.env.NEXT_PUBLIC_MAIN_URL}/faq`;
const title = 'FAQS - Phoenix Moving Boston (Free Estimate)';
const description =
  "Welcome to the FAQ page for Phoenix Moving Company. Here, you'll find answers to our most frequently asked questions about our services, pricing, and more.";

export default function Head() {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="theme-color" content="#fff" />
      <meta content="width=device-width, initial-scale=1.0" name="viewport" />
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* OG Card */}
      <meta property="og:url" content={URL} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="/twittercard.png" />
      {/* End OG Card */}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@phoenix_moving" />
      <meta property="twitter:domain" content={URL} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="/twittercard.png" />
      {/* End Twitter Card */}

      <meta name="robots" content="index,follow" />
      <link rel="canonical" href={URL} precedence="default" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="shortcut icon"
        type="image/x-icon"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="shortcut icon"
        type="image/x-icon"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
    </>
  );
}
