"use client";
import { cities } from "@/lib/citiesData";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { useState } from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function PopularCities() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen((prev) => !prev);
  return (
    <>
      <div
        onClick={() => handleOpen()}
        className={clsx("w-full pt-6 hover:cursor-pointer", {
          "border-b border-slate-500": !open,
        })}
      >
        <div className="w-full pb-4">
          <p className="flex w-full items-center justify-between text-xs font-semibold text-white">
            Popular Cities
            <ChevronDownIcon
              className={classNames(
                open ? "-rotate-180" : "rotate-0",
                "h-4 w-4 transform",
              )}
            />
          </p>
        </div>
      </div>
      <div
        className={clsx(
          "grid w-full grid-cols-3 gap-1 border-b border-slate-500 pb-4 md:grid-cols-6",
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
              className="col-span-1 justify-start text-xs text-slate-400 hover:underline"
            >
              {`${city.fullName} near me`}
            </a>
          );
        })}
      </div>
    </>
  );
}
