import { states } from '@/lib/statesData';
import Section from '@/ui/Section';
import SectionHeader from '@/ui/SectionHeader';
import clsx from 'clsx';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Locations() {
  return (
    <Section>
      <SectionHeader title="Long distance moving destinations from Boston." />
      <ul className="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
        {states.map((state) => (
          <li
            key={state.name}
            className="col-span-1 flex rounded-2xl shadow-sm"
          >
            <div
              className={classNames(
                'bg-gray-600',
                'flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-2xl',
              )}
            >
              {state.abbr}
            </div>
            <div
              className={clsx(
                'flex flex-1 truncate rounded-r-2xl border-t border-r border-b border-gray-200 bg-white',
                {
                  'items-center': !state.cities,
                  'items-baseline': state.cities,
                },
              )}
            >
              <div className="flex-1 truncate px-4 py-2 text-sm flex-col flex">
                {state.slug ? (
                  <p>
                    <a
                      href={state.slug}
                      className="font-semibold text-gray-900 hover:text-gray-600 hover:underline"
                      title={`Moving From Boston to ${state.name}`}
                    >
                      {state.name}
                    </a>
                  </p>
                ) : (
                  <p className="font-semibold text-gray-900">{state.name}</p>
                )}
                {state.cities?.map((city) => {
                  return (
                    <p className="leading-none">
                      <a
                        key={city.name}
                        href={city.slug}
                        className="font-light text-xs text-gray-900 hover:text-gray-600 hover:underline"
                        title={`Moving From Boston to ${city.name}`}
                      >
                        Moving From Boston to {city.name}
                      </a>
                    </p>
                  );
                })}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
