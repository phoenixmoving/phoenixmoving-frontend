import clsx from 'clsx';
import { Popover } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

export default function NavButton({ label, invert, open, menu }) {
  return (
    <Popover.Button
      className={clsx(
        'font-medium relative group flex items-center -my-2 -mx-3 rounded-lg px-3 py-2 focus:outline-none focus-visible:outline-none outline-none',
        {
          'text-gray-900 hover:bg-palette-background': invert,
          'text-white hover:bg-palette-background/20': !invert,
        },
      )}
    >
      {label}
      <ChevronDownIcon
        className={clsx('ml-[2px] h-5 w-5 relative z-10', {
          'rotate-180': open,
        })}
        aria-hidden="true"
      />
    </Popover.Button>
  );
}
