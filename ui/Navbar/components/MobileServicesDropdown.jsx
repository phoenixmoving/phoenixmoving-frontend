import { Disclosure } from '@headlessui/react';
import ChevronDownIcon from '@heroicons/react/20/solid/ChevronDownIcon';

export default function MobileServicesDropdown({ item }) {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className="flex items-center w-full rounded-lg py-2 px-3 font-medium leading-7 text-gray-900 hover:bg-gray-400/10">
            <span>{item.name}</span>
            <ChevronDownIcon
              className={`${
                open ? 'rotate-180 transform' : ''
              } h-6 w-6 text-gray-900`}
            />
          </Disclosure.Button>
          <Disclosure.Panel className="px-4 text-sm text-gray-500">
            {item.items.map((el, i) => {
              return (
                <a
                  key={el.name}
                  href={el.href}
                  className="-mx-3 block rounded-lg py-2 px-3 text-sm font-medium leading-7 text-gray-700 hover:bg-gray-400/10"
                >
                  {el.name}
                </a>
              );
            })}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
