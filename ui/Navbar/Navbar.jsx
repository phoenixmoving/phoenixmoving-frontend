"use client";

import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import Bars3BottomRightIcon from "@heroicons/react/24/solid/Bars3BottomRightIcon";
import PhoneIcon from "@heroicons/react/24/solid/PhoneIcon";
import UserIcon from "@heroicons/react/24/solid/UserIcon";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import DropDownMenu from "./components/DropDownMenu";
import MobileMenu from "./components/MobileMenu";
import { cn } from "@/lib/utils";

const clientLink = process.env.NEXT_PUBLIC_CLIENT_LOGIN;

const navigation = [
  { name: "Home", href: "/" },
  {
    name: "Services",
    href: "#",
    items: [
      {
        id: 1,
        name: "Local Moving",
        description: "Hourly based full moving servcies",
        href: "/local-moving",
      },
      {
        id: 2,
        name: "Interstate Moving",
        description:
          "Flat rate moving. Gas, mileage, tolls and insurance are included",
        href: "/interstate-moving",
      },
      {
        id: 3,
        name: "Packing Services",
        description:
          "Top-notch packing services to reduce the stress of moving",
        href: "/packing-services",
      },
      {
        id: 4,
        name: "Storage Solutions",
        description: "Temperature-controlled storage for up to 6 months",
        href: "/storage-solutions",
      },
      {
        id: 5,
        name: "Piano Movers",
        description:
          "Right tools, equipment, and expertise to ensure it is done correctly and safely",
        href: "/piano-movers",
      },
    ],
  },
  { name: "Pricing", href: "/pricing" },
  { name: "Faq", href: "/faq" },
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
    window.addEventListener("scroll", changeBackground);

    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  return (
    <header
      className={clsx(
        "isolat sticky top-0 z-20 transition-colors duration-300",
        {
          "bg-white shadow-sm": active,
          "bg-trasnparent": !active,
        },
      )}
    >
      <div
        className={clsx(
          "m-auto max-w-screen-xl transform px-6 duration-300 lg:px-8",
          {
            "py-2": active,
            "py-4": !active,
          },
        )}
      >
        <nav className="flex h-10 items-center justify-between gap-x-4 lg:h-9">
          <div className="flex lg:min-w-0 lg:flex-1">
            <a href="/" title="Home">
              <span className="sr-only">Phoenix Moving Boston</span>
              <Logo active={active} />
            </a>
          </div>
          <div className="hidden lg:flex lg:min-w-0 lg:flex-auto lg:items-center lg:justify-center lg:gap-x-6">
            {navigation.map((link, i) =>
              link.items ? (
                <DropDownMenu
                  title="Services"
                  active={active}
                  key={i}
                  items={link.items}
                />
              ) : (
                <Link
                  title={link.name}
                  key={i}
                  href={link.href}
                  className={clsx(
                    "relative font-medium transition-colors duration-150",
                    {
                      "text-slate-900 hover:text-slate-600": active,
                      "text-white hover:text-slate-300": !active,
                    },
                  )}
                >
                  {link.name}
                  {link.href === pathname && (
                    <span
                      className={clsx(
                        "absolute inset-x-1 -bottom-px h-px bg-gradient-to-r",
                        {
                          "from-purple-500/0 via-purple-500/60 to-purple-500/0 dark:from-purple-400/0 dark:via-purple-400/40 dark:to-purple-400/0":
                            active,
                          "from-yellow-500/0 via-yellow-500/60 to-yellow-500/0 dark:from-yellow-400/0 dark:via-yellow-400/40 dark:to-yellow-400/0":
                            !active,
                        },
                      )}
                    />
                  )}
                </Link>
              ),
            )}
            {/* <a
              href="tel:(508)315-9458"
              title="Give us a call"
              className={clsx(
                'flex font-semibold text-sm transition-colors duration-150 gap-1 items-center justify-center rounded-full border py-1.5 px-3',
                {
                  'text-palette-primary-500 hover:bg-palette-primary-500/10 border-palette-primary-500':
                    active,
                  'text-white hover:bg-slate-50/10 border-slate-200': !active,
                },
              )}
            >
              <PhoneIcon aria-hidden="true" className="h-4 w-4" />
              <p>(508) 315-9458</p>
            </a> */}
            <Button
              variant="outline"
              asChild
              className={cn("border-primary text-primary hover:text-primary", {
                "text-primary-foreground border-primary-foreground bg-transparent":
                  !active,
              })}
            >
              <a href="tel:(508)315-9458" title="Give us a call">
                <PhoneIcon />
                {"(508) 315-9458"}
              </a>
            </Button>
          </div>
          <div className="flex flex-1 items-center justify-end gap-x-6 lg:flex-none">
            <a
              href={clientLink}
              target="_blank"
              className={clsx(
                "hidden items-center justify-center gap-1 font-medium transition-colors duration-150 lg:inline-flex",
                {
                  "text-slate-900 hover:text-slate-600": active,
                  "text-white hover:text-slate-300": !active,
                },
              )}
            >
              <UserIcon aria-hidden="true" className="h-4 w-4" />
              <p>Client Login</p>
            </a>
            <Button variant="secondary" asChild>
              <Link href="/">Get a Quote</Link>
            </Button>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate-900"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open menu</span>
              <Bars3BottomRightIcon
                aria-hidden="true"
                className={clsx("h-6 w-6 transition-colors duration-150", {
                  "text-slate-900 hover:text-slate-600": active,
                  "text-white": !active,
                })}
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
