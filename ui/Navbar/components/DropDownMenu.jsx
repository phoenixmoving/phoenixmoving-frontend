import { Popover } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import clsx from 'clsx';

export default function DropDownMenu({ title, active, items }) {
  return (
    <Popover className="relative">
      {() => (
        <>
          <Popover.Button
            className={clsx(
              'flex items-center font-medium transition-colors ease-in-out duration-150 focus:outline-none focus-visible:outline-none outline-none',
              {
                'text-gray-900 hover:text-gray-600': active,
                'text-white hover:text-gray-300': !active,
              },
            )}
          >
            {title}
            <ChevronDownIcon className="h-6 w-6" aria-hidden="true" />
          </Popover.Button>
          <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 transform px-2 sm:px-0">
            <div className="overflow-hidden rounded-xl shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="relative grid gap-8 bg-white p-6">
                {items.map((item) => (
                  <a
                    key={item.name}
                    title={item.name}
                    href={item.href}
                    className="-m-3 block rounded-lg p-3 transition duration-150 ease-in-out hover:bg-gray-100"
                  >
                    <p className="font-medium text-gray-900">{item.name}</p>
                    <p className="text-sm text-gray-500">{item.description}</p>
                  </a>
                ))}
              </div>
            </div>
          </Popover.Panel>
        </>
      )}
    </Popover>
  );
}
