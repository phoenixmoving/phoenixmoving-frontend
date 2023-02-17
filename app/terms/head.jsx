const URL = `${process.env.NEXT_PUBLIC_MAIN_URL}/terms`;
const title = 'Company Policy - Phoenix Moving Boston (Free Estimate)';
const description =
  'Our moving company policy page outlines all the services we provide. Read our policies to learn more about how we work and what to expect when you hire us.';

export default function Head() {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="theme-color" content="#fff" />
      <meta content="width=device-width, initial-scale=1.0" name="viewport" />
      <title>{title}</title>
      <meta name="description" content={description} />

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
