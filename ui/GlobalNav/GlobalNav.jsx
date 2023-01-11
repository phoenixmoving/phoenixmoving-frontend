'use client';

import { useState, useEffect } from 'react';
import { Popover } from '@headlessui/react';
import { UserIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
// import Link from 'next/link';
import { services, callsToAction, more, recentPosts } from '@/lib/navigation';
import Logo from '@/ui/Logo';
import NavLink from './components/NavLink';
import NavButton from './components/NavButton';
import MobileMenu from './components/MobileMenu';
import Button from '@/ui/Button';

export default function GlobalNav() {
  const [active, setActive] = useState(false);

  const changeBackground = () => {
    // console.log(window.scrollY);
    if (window.scrollY >= 80) {
      setActive(true);
    } else {
      setActive(false);
    }
  };

  useEffect(() => {
    changeBackground();
    // adding the event when scroll change background
    window.addEventListener('scroll', changeBackground);
  }, []);

  return (
    <Popover
      className={clsx(
        'sticky top-0 z-20 w-full transition-colors duration-150 ease-in',
        {
          'bg-white shadow-sm': active,
          'bg-transparent': !active,
        },
      )}
    >
      <div
        // className="mx-auto max-w-screen-xl px-4 sm:px-6"
        className="px-6 lg:px-8 max-w-screen-xl m-auto transition-all ease-in-out duration-300"
      >
        <div
          // className="flex items-center justify-between py-2 xl:justify-start xl:space-x-4"
          className={clsx(
            'flex items-center justify-between xl:justify-start xl:space-x-4 transition-all ease-in-out duration-300',
            {
              'py-2': active,
              'py-3': !active,
            },
          )}
        >
          <div className="flex justify-start lg:w-0 md:flex-[0.5] xl:flex-1">
            <Logo invert={active} />
          </div>
          <div className="-my-2 -mr-2 lg:hidden">
            <MobileMenu invert={active} />
          </div>
          <Popover.Group as="nav" className="hidden space-x-6 lg:flex">
            <NavLink label="Home" href="/" invert={active} />
            <Popover className="relative">
              {({ close, open }) => (
                <>
                  <NavButton
                    label="Services"
                    invert={active}
                    open={open}
                    menu={services}
                  />
                  <Popover.Panel className="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
                    <div className="overflow-hidden rounded-2xl shadow-lg ring-1 ring-black ring-opacity-5">
                      <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                        {services.map((item, i) => (
                          <a
                            key={item.name}
                            href={item.href}
                            title={item.name}
                            className=" relative -m-3 items-start p-3 rounded-lg hover:bg-palette-background"
                            // onClick={() => close()}
                          >
                            <p className="font-medium text-gray-900">
                              {item.name}
                            </p>
                            <p className="text-sm font-normal text-gray-400">
                              {item.description}
                            </p>
                          </a>
                        ))}
                      </div>
                      <div className="space-y-6 bg-palette-background px-5 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                        {callsToAction.map((item) => (
                          <div key={item.name} className="flow-root">
                            <a
                              href={item.href}
                              title={item.name}
                              className="-m-3 flex items-center p-3 font-medium text-gray-900"
                            >
                              <item.icon
                                className="h-6 w-6 flex-shrink-0 text-gray-700"
                                aria-hidden="true"
                              />
                              <span className="ml-3">{item.name}</span>
                            </a>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Popover.Panel>
                </>
              )}
            </Popover>
            <NavLink label="Pricing" href="pricing" invert={active} />

            <Popover className="relative">
              {({ open, close }) => (
                <>
                  <NavButton
                    label="More"
                    invert={active}
                    open={open}
                    menu={more}
                  />
                  <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 transform px-2 sm:px-0">
                    <div className="overflow-hidden rounded-2xl shadow-lg ring-1 ring-black ring-opacity-5">
                      <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                        {more.map((item, i) => {
                          return (
                            <div key={item.name}>
                              {item.href ? (
                                <a
                                  href={item.href}
                                  title={item.name}
                                  className="-m-3 flex items-start p-3 font-medium text-gray-900 rounded-lg hover:bg-palette-background"
                                  // onClick={() => close()}
                                >
                                  {item.name}
                                </a>
                              ) : (
                                <p className="-m-3 flex items-start rounded-lg p-3 font-medium text-gray-400">
                                  {item.name}
                                </p>
                              )}
                            </div>
                          );
                        })}
                      </div>
                      <div className="bg-palette-background px-5 py-5 sm:px-8 sm:py-8">
                        <div>
                          <h3 className=" font-medium text-gray-500">
                            Recent Posts
                          </h3>
                          <ul className="mt-4 space-y-4">
                            {recentPosts.map((post) => (
                              <li key={post.id} className="truncate ">
                                <a
                                  href={post.href}
                                  title={post.name}
                                  className="font-medium text-gray-900 hover:text-gray-700"
                                >
                                  {post.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="mt-5 text-sm">
                          <a
                            href="#"
                            title="View all posts"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                          >
                            View all posts
                            <span aria-hidden="true"> &rarr;</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </Popover.Panel>
                </>
              )}
            </Popover>
            <a
              href="tel:(508)315-9458"
              title="(508) 315-9458"
              className={clsx(
                'font-medium transition-colors duration-150 ease-in text-lg',
                {
                  'text-palette-primary-500': active,
                  'text-white hover:text-palette-primary-500': !active,
                },
              )}
            >
              (508) 315-9458
            </a>
          </Popover.Group>
          <div className="hidden items-center justify-end gap-1 lg:flex lg:flex-1 lg:w-0">
            <a
              href="https://www.gophoenixmoving.com/login"
              target="_blank"
              rel="nofollow"
              title="Client Login"
              className={clsx(
                'group px-3 py-2 inline-flex items-center rounded-lg font-medium transition-colors duration-150 ease-in',
                {
                  'text-gray-900 hover:bg-palette-background': active,
                  'text-white hover:bg-palette-background/20': !active,
                },
              )}
            >
              <UserIcon className="h-5 w-5" aria-hidden="true" />
              <span className="ml-1">Client login</span>
            </a>
            <Button
              href="/"
              className="hidden xl:flex"
              color="secondary"
              title="Book a move"
              size="small"
            >
              Book a move
            </Button>
          </div>
        </div>
      </div>
    </Popover>
  );
}
