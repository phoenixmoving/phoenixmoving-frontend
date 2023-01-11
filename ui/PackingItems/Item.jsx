import Image from 'next/image';

export default function Item({ item }) {
  const formatter = (price, currency) => {
    if (typeof price === 'string') return price;
    return currency + price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
  };
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-lg shadow-gray-900/5 flex flex-col min-w-[240px] mx-4">
      <div className="px-4 py-5 sm:px-6">
        <p className="text-sm font-medium text-gray-900">
          {formatter(item.price, '$')}
        </p>
      </div>
      <div className="flex flex-1 justify-center items-center relative w-[130px] h-full min-h-[170px] m-auto">
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
        <p className="text-sm font-semibold text-gray-900">{item.name}</p>
        <p className="text-sm text-gray-400">{item.size}</p>
      </div>
    </div>
  );
}
