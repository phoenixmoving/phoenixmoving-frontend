'use client';

import { useState, useEffect } from 'react';
import Bars3BottomRightIcon from '@heroicons/react/24/outline/Bars3BottomRightIcon';
import UserIcon from '@heroicons/react/20/solid/UserIcon';
import MobileMenu from './components/MobileMenu';
import clsx from 'clsx';
import DropDownMenu from './components/DropDownMenu';
import Button from '@/ui/Button';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import logoWhite from '../../public/logos/logo-white2.png';
import logo from '../../public/logos/logo.png';

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
        href: '/local-moving',
      },
      {
        name: 'Interstate Moving',
        description:
          'Flat rate moving. Gas, mileage, tolls and insurance are included',
        href: '/interstate-moving',
      },
      {
        name: 'Packing Services',
        description:
          'Top-notch packing services to reduce the stress of moving',
        href: '/packing-services',
      },
      {
        name: 'Storage Solutions',
        description: 'Temperature-controlled storage for up to 6 months',
        href: '/storage-solutions',
      },
      {
        name: 'Piano Movers',
        description:
          'Right tools, equipment, and expertise to ensure it is done correctly and safely',
        href: '/piano-movers',
      },
    ],
  },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Faq', href: '/faq' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [active, setActive] = useState(false);
  const pathname = usePathname();

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
        <nav className="flex h-10 lg:h-9 items-center justify-between gap-x-4">
          <div className="flex lg:min-w-0 lg:flex-1">
            <a href="/" title="Home">
              <span className="sr-only">Phoenix Moving Boston</span>
              <Image
                className={clsx(
                  'transition-all ease-in-out duration-300 object-cove w-fit',
                  {
                    'h-8 lg:h-10': active,
                    'h-10 lg:h-12': !active,
                  },
                )}
                priority
                src={active ? logo : logoWhite}
                alt="phoenix moving logo"
                title="Phoenix Moving Boston"
              />
            </a>
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
                    'relative font-medium transition-colors ease-in-out duration-150',
                    {
                      'text-gray-900 hover:text-gray-600': active,
                      'text-white hover:text-gray-300': !active,
                    },
                  )}
                >
                  {link.name}
                  {link.href === pathname && (
                    <span
                      className={clsx(
                        'absolute inset-x-1 -bottom-px h-px bg-gradient-to-r',
                        {
                          'from-purple-500/0 via-purple-500/60 to-purple-500/0 dark:from-purple-400/0 dark:via-purple-400/40 dark:to-purple-400/0':
                            active,
                          'from-yellow-500/0 via-yellow-500/60 to-yellow-500/0 dark:from-yellow-400/0 dark:via-yellow-400/40 dark:to-yellow-400/0':
                            !active,
                        },
                      )}
                    />
                  )}
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
          {/* <div className="hidden items-center gap-x-6 lg:flex lg:min-w-0 lg:flex-initial lg:justify-end"> */}
          <div className="flex flex-1 lg:flex-none items-center justify-end gap-x-6">
            <a
              href={clientLink}
              target="_blank"
              className={clsx(
                'hidden lg:inline-flex font-medium transition-colors ease-in-out duration-150 gap-1 items-center justify-center',
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
              Get a Quote
            </Button>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-900"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open menu</span>
              <Bars3BottomRightIcon
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
