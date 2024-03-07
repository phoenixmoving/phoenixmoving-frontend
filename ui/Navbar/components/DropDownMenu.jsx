import { Popover } from '@headlessui/react';
import ChevronDownIcon from '@heroicons/react/20/solid/ChevronDownIcon';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function DropDownMenu({ title, active, items }) {
  const pathname = usePathname();
  const showUnderline =
    items.filter((item) => item.href === pathname).length > 0;
  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button
            className={clsx(
              'flex items-center font-medium transition-colors ease-in-out duration-150',
              {
                'text-slate-900 hover:text-slate-600': active,
                'text-white hover:text-slate-300': !active,
              },
            )}
          >
            {title}
            <ChevronDownIcon
              className={`relative top-[1px] ${
                open ? 'rotate-180 transform' : ''
              } h-6 w-6`}
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
          <Popover.Panel className="absolute -left-8 top-full mt-3 w-80 rounded-3xl bg-white p-2 border border-slate-200 shadow-lg grid gap-1">
            {items.map((item, i) => (
              <Popover.Button
                as={Link}
                key={i}
                title={item.name}
                href={item.href}
                disabled={item.href === pathname}
                className={clsx(
                  'block rounded-2xl p-3 hover:bg-slate-100 group',
                  {
                    'bg-slate-100': item.href === pathname,
                  },
                )}
              >
                <p
                  className={clsx('font-medium group-hover:text-indigo-600', {
                    'text-indigo-600': item.href === pathname,
                  })}
                >
                  {item.name}
                </p>
                <p
                  className={clsx(
                    'text-xs text-slate-500 group-hover:text-slate-900',
                    {
                      'text-slate-900': item.href === pathname,
                    },
                  )}
                >
                  {item.description}
                </p>
              </Popover.Button>
            ))}
          </Popover.Panel>
        </>
      )}
    </Popover>
  );
}
