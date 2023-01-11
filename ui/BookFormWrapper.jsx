import Book from '@/ui/Book';

export async function getData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACK_END_API}/rates`, {
    cache: 'no-store',
  });
  return res.json();
}

export default async function BookFormWrapper() {
  const rates = await getData();
  return <Book rates={rates} />;
}
