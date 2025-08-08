import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import ChevronDownIcon from "@heroicons/react/20/solid/ChevronDownIcon";

export default function MobileServicesDropdown({ item }) {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <DisclosureButton className="flex w-full items-center rounded-full px-3 py-2 leading-7 font-medium text-slate-900 hover:bg-slate-400/10">
            <span>{item.name}</span>
            {/* <ChevronDownIcon
              className={`${
                open ? 'rotate-180 transform' : ''
              } h-6 w-6 text-slate-900`}
            /> */}
            <ChevronDownIcon
              className={`relative top-[1px] ${
                open ? "rotate-180 transform" : ""
              } h-6 w-6`}
              aria-hidden="true"
            />
          </DisclosureButton>
          <DisclosurePanel className="px-4 text-sm text-slate-500">
            {item.items.map((el, i) => {
              return (
                <a
                  key={el.name}
                  href={el.href}
                  className="block rounded-full px-3 py-2 text-sm leading-7 font-medium text-slate-700 hover:bg-slate-400/10"
                >
                  {el.name}
                </a>
              );
            })}
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}
