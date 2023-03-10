'use client';

import { useState, useEffect } from 'react';
import Bars3Icon from '@heroicons/react/24/outline/Bars3Icon';
import UserIcon from '@heroicons/react/20/solid/UserIcon';
import MobileMenu from './components/MobileMenu';
import clsx from 'clsx';
import DropDownMenu from './components/DropDownMenu';
import Button from '@/ui/Button';
import Image from 'next/image';
import Link from 'next/link';

const clientLink = process.env.NEXT_PUBLIC_CLIENT_LOGIN;

const navigation = [
  { name: 'Home', href: '/' },
  {
    name: 'Services',
    href: '#',
    items: [
      {
        name: 'Local Moving',
        description: 'Hourly based full moving servcies',
        href: 'local-moving',
      },
      {
        name: 'Interstate Moving',
        description:
          'Flat rate moving. Gas, mileage, tolls and insurance are included',
        href: 'interstate-moving',
      },
      {
        name: 'Packing Services',
        description:
          'Top-notch packing services to reduce the stress of moving',
        href: 'packing-services',
      },
      {
        name: 'Storage Solutions',
        description: 'Temperature-controlled storage for up to 6 months',
        href: 'storage-solutions',
      },
      {
        name: 'Piano Movers',
        description:
          'Right tools, equipment, and expertise to ensure it is done correctly and safely',
        href: 'piano-movers',
      },
    ],
  },
  { name: 'Pricing', href: 'pricing' },
  { name: 'Faq', href: 'faq' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [active, setActive] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 18) {
      setActive(true);
    } else {
      setActive(false);
    }
  };

  useEffect(() => {
    changeBackground();
    // adding the event when scroll change background
    window.addEventListener('scroll', changeBackground);

    return () => {
      window.removeEventListener('scroll', changeBackground);
    };
  }, []);

  return (
    <header
      className={clsx(
        'isolat sticky top-0 z-20 transition-colors ease-in-out duration-300',
        {
          'bg-white shadow-sm': active,
          'bg-trasnparent': !active,
        },
      )}
    >
      <div
        className={clsx(
          'px-6 lg:px-8 max-w-screen-xl m-auto transform ease-in-out duration-300',
          {
            'py-2': active,
            'py-4': !active,
          },
        )}
      >
        <nav className="flex h-9 items-center justify-between">
          <div className="flex lg:min-w-0 lg:flex-1">
            <a href="/" title="Home" className="-m-1.5">
              <span className="sr-only">Phoenix Moving Boston</span>
              <div className="relative">
                <Image
                  width={active ? 135 : 150}
                  height={active ? 38 : 43}
                  className="transition-all ease-in-out duration-300 object-cove"
                  priority
                  src={active ? '/logos/logo.png' : '/logos/logo-white.png'}
                  alt="phoenix moving logo"
                  title="Phoenix Moving Boston"
                />
              </div>
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open menu</span>
              <Bars3Icon
                aria-hidden="true"
                className={clsx(
                  'h-6 w-6 transition-colors ease-in-out duration-150',
                  {
                    'text-gray-900 hover:text-gray-600': active,
                    'text-white': !active,
                  },
                )}
              />
            </button>
          </div>
          <div className="hidden lg:flex lg:min-w-0 lg:flex-auto lg:justify-center lg:items-center lg:gap-x-6">
            {navigation.map((link) =>
              link.items ? (
                <DropDownMenu
                  title="Services"
                  active={active}
                  key={link.name}
                  items={link.items}
                />
              ) : (
                <Link
                  title={link.name}
                  key={link.name}
                  href={link.href}
                  className={clsx(
                    'font-medium transition-colors ease-in-out duration-150',
                    {
                      'text-gray-900 hover:text-gray-600': active,
                      'text-white hover:text-gray-300': !active,
                    },
                  )}
                >
                  {link.name}
                </Link>
              ),
            )}
            <a
              href="tel:(508)315-9458"
              title="Give us a call"
              className={clsx(
                'font-semibold uppercase text-md transition-colors ease-in-out duration-150',
                {
                  'text-palette-primary-500 hover:text-palette-primary-900':
                    active,
                  'text-white hover:text-gray-300': !active,
                },
              )}
            >
              (508) 315-9458
            </a>
          </div>
          <div className="hidden items-center gap-x-6 lg:flex lg:min-w-0 lg:flex-initial lg:justify-end">
            <a
              href={clientLink}
              target="_blank"
              className={clsx(
                'font-medium transition-colors ease-in-out duration-150 inline-flex gap-1 items-center justify-center',
                {
                  'text-gray-900 hover:text-gray-600': active,
                  'text-white hover:text-gray-300': !active,
                },
              )}
            >
              <UserIcon aria-hidden="true" className="h-4 w-4" />
              Client Login
            </a>
            <Button color="secondary" href="/" size="small">
              Book Now
            </Button>
          </div>
        </nav>
        <MobileMenu
          navigation={navigation}
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
          clientLink={clientLink}
        />
      </div>
    </header>
  );
}
