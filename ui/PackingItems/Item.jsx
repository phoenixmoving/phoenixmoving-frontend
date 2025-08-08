import Image from 'next/image';

export default function Item({ item }) {
  const formatter = (price, currency) => {
    if (typeof price === 'string') return price;
    return currency + price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
  };
  return (
    <div className="overflow-hidden rounded-3xl bg-background shadow flex flex-col min-w-[240px] mx-4">
      <div className="px-4 py-5 sm:px-6">
        <p className="text-sm font-medium">{formatter(item.price, '$')}</p>
      </div>
      <div className="relative flex flex-1 justify-center items-center w-[130px] h-full min-h-[170px] m-auto">
        <Image
          src={item.img}
          alt={item.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-contain object-center"
          title={item.name}
        />
      </div>
      <div className="px-4 py-4 sm:px-6">
        <p className="text-sm font-semibold">{item.name}</p>
        <p className="text-sm text-muted-foreground/80">{item.size}</p>
      </div>
    </div>
  );
}
