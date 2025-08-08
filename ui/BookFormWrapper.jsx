import Book from "@/ui/Book";

// export async function getRates() {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_BACK_END_API}/rates`);
//   return res.json();
// }

export async function getData() {
  const pricesResponse = await fetch(
    `${process.env.NEXT_PUBLIC_BACK_END_API}/prices`,
  );
  const prices = await pricesResponse.json();

  const ratesResponse = await fetch(
    `${process.env.NEXT_PUBLIC_BACK_END_API}/rates`,
  );
  const rates = await ratesResponse.json();

  return {
    prices,
    rates,
  };
}

export default async function BookFormWrapper() {
  const { prices, rates } = await getData();

  return <Book rates={rates} prices={prices} />;
}
