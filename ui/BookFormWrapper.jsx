// import Book from '@/ui/Book';
import dynamic from 'next/dynamic';

const DynamicBook = dynamic(() => import('@/ui/Book'), {
  loading: () => 'Loading...',
});

export async function getData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACK_END_API}/rates`, {
    next: { revalidate: 5 },
  });
  return res.json();
}

export async function getPrices() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACK_END_API}/prices`, {
    next: { revalidate: 5 },
  });
  return res.json();
}

export default async function BookFormWrapper() {
  const rates = await getData();
  const prices = await getPrices();
  return <DynamicBook rates={rates} prices={prices} />;
}
