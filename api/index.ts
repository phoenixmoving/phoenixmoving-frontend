export async function fetchRates() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACK_END_API}/rates`,
  );
  return response.json();
}
export async function fetchPrices() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACK_END_API}/prices`,
  );
  return response.json();
}