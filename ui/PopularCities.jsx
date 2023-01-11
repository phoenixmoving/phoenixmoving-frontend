'use client';
import { cities } from '@/lib/citiesData';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { useState } from 'react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function PopularCities() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen((prev) => !prev);
  return (
    <>
      <div
        onClick={() => handleOpen()}
        className={clsx('pt-6 w-full hover:cursor-pointer', {
          'border-b border-gray-500': !open,
        })}
      >
        <div className="w-full pb-4">
          <p className="text-white text-xs font-semibold flex items-center justify-between w-full">
            Popular Cities
            <ChevronDownIcon
              className={classNames(
                open ? '-rotate-180' : 'rotate-0',
                'h-4 w-4 transform',
              )}
            />
          </p>
        </div>
      </div>
      <div
        className={clsx(
          'pb-4 grid grid-cols-3 gap-1 md:grid-cols-6 border-b border-gray-500',
          {
            hidden: !open,
          },
        )}
      >
        {cities.map((city) => {
          return (
            <a
              key={city.fullName}
              href={`/${city.slug}`}
              title={`${city.fullName} near me`}
              className="hover:underline text-xs text-gray-400 col-span-1 justify-start"
            >
              {`${city.fullName} near me`}
            </a>
          );
        })}
      </div>
    </>
  );
}
