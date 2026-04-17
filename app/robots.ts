export default function robots() {
  return {
    rules: [
      { userAgent: "*", allow: ["/"], disallow: ["/private", "/not-found"] },
    ],
    sitemap: `${process.env.NEXT_PUBLIC_MAIN_URL}/sitemap.xml`,
  };
}
