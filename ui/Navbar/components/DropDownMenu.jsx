import { Popover } from '@headlessui/react';
import ChevronDownIcon from '@heroicons/react/20/solid/ChevronDownIcon';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function DropDownMenu({ title, active, items }) {
  const pathname = usePathname();
  const showUnderline = items.filter((item) => item.href === pathname).length>0;
  return (
    <Popover className="relative">
      {({ open }) => (
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
            <ChevronDownIcon
              className={`${open ? 'rotate-180 transform' : ''} h-6 w-6`}
              aria-hidden="true"
            />
            {showUnderline && (
              <span
                className={clsx(
                  'absolute inset-x-1 -bottom-px h-px bg-gradient-to-r',
                  {
                    'from-purple-500/0 via-purple-500/40 to-purple-500/0 dark:from-purple-400/0 dark:via-purple-400/40 dark:to-purple-400/0':
                      active,
                    'from-yellow-500/0 via-yellow-500/40 to-yellow-500/0 dark:from-yellow-400/0 dark:via-yellow-400/40 dark:to-yellow-400/0':
                      !active,
                  },
                )}
              />
            )}
          </Popover.Button>
          <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 transform px-2 sm:px-0">
            <div className="overflow-hidden rounded-xl shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="relative grid gap-8 bg-white p-6">
                {items.map((item) => (
                  <Popover.Button
                    as={Link}
                    key={item.name}
                    title={item.name}
                    href={item.href}
                    disabled={item.href === pathname}
                    // className="-m-3 block rounded-lg p-3 transition duration-150 ease-in-out hover:bg-gray-100"
                    className={clsx(
                      '-m-3 block rounded-lg p-3 transition duration-150 ease-in-out hover:bg-gray-100',
                      {
                        'bg-gray-100': item.href === pathname,
                      },
                    )}
                  >
                    <p className="font-medium text-gray-900">{item.name}</p>
                    <p className="text-sm text-gray-500">{item.description}</p>
                  </Popover.Button>
                ))}
              </div>
            </div>
          </Popover.Panel>
        </>
      )}
    </Popover>
  );
}
