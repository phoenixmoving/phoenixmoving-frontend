import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
// import Link from 'next/link';
import { services, more } from '@/lib/navigation';
import Logo from '@/ui/Logo';
import Button from '@/ui/Button';

function MenuIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M5 6h14M5 18h14M5 12h14"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        width={20}
      />
    </svg>
  );
}

export default function MobileMenu({ invert }) {
  return (
    <Popover>
      <Popover.Button
        className={clsx(
          'inline-flex items-center justify-center rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500',
          {
            'text-gray-400 hover:bg-gray-100 hover:text-gray-500 stroke-gray-900':
              invert,
            'hover:text-gray-500 text-white bg-transparent stroke-white':
              !invert,
          },
        )}
      >
        <span className="sr-only">Open menu</span>
        <MenuIcon className="h-6 w-6" />
      </Popover.Button>
      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition xl:hidden"
        >
          {({ close }) => (
            <>
              <div className="divide-y-2 divide-gray-50 rounded-xl bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="px-5 pt-5 pb-6">
                  <div className="flex items-center justify-between">
                    <Logo />
                    <div className="-mr-2">
                      <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Close menu</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="mt-6">
                    <nav className="grid gap-y-8">
                      {services.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          title={item.name}
                          className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
                          // onClick={() => close()}
                        >
                          <span className="ml-3 font-medium text-gray-900">
                            {item.name}
                          </span>
                        </a>
                      ))}
                    </nav>
                  </div>
                </div>
                <div className="space-y-6 py-6 px-5">
                  <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                    <a
                      href="/pricing"
                      title="Pricing"
                      className="font-medium text-gray-900 hover:text-gray-700"
                    >
                      Pricing
                    </a>
                    {more.map((item) => {
                      return (
                        <div key={item.name}>
                          {item.href ? (
                            <a
                              href={item.href}
                              title={item.name}
                              className="font-medium text-gray-900 hover:text-gray-700"
                            >
                              {item.name}
                            </a>
                          ) : (
                            <p className="font-medium text-gray-400">
                              {item.name}
                            </p>
                          )}
                        </div>
                      );
                    })}
                  </div>
                  <div>
                    <Button
                      href="#"
                      color="primary"
                      className="w-full"
                      title="Book a move"
                    >
                      Book a move
                    </Button>
                    <p className="mt-6 text-center  font-medium text-gray-500">
                      Existing customer?{' '}
                      <a
                        href="https://www.gophoenixmoving.com/login"
                        target="_blank"
                        rel="nofollow"
                        title="Client login"
                        className="text-indigo-600 hover:text-indigo-500"
                      >
                        Client login
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </>
          )}
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
