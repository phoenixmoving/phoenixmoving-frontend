// import Book from '@/ui/Book';
import dynamic from 'next/dynamic';

const DynamicBook = dynamic(() => import('@/ui/Book'), {
  loading: () => 'Loading...',
});

export async function getData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACK_END_API}/rates`, {
    next: { revalidate: 180 },
  });
  return res.json();
}

export default async function BookFormWrapper() {
  const rates = await getData();
  return <DynamicBook rates={rates} />;
}
