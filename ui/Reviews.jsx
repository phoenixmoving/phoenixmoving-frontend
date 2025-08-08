import { Testimonials } from "@/ui/Testimonials";

const placeId = "ChIJ65r-D2iH44kRQVvxQOaxUUY";
const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

export async function getData() {
  const res = await fetch(
    `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&key=${API_KEY}`,
    {
      next: { revalidate: 604800 },
      cache: "force-cache",
    },
  );
  return res.json();
}

export default async function Reviews() {
  const data = await getData();

  return (
    <Testimonials
      reviews={data?.result?.reviews}
      totalReviews={data?.result?.user_ratings_total}
    />
  );
}

// https://mybusiness.googleapis.com/v4/accounts/{accountId}/locations/{locationId}/reviews
