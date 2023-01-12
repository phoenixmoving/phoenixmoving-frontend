import Image from 'next/image';
import BookFormWrapper from '@/ui/BookFormWrapper';
import { Fragment } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { ChevronRightIcon } from '@heroicons/react/20/solid';

const incentives = [
  {
    name: 'Free Online Estimate',
    imageSrc: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-10 h-10 text-white"
      >
        <path
          fillRule="evenodd"
          d="M6.32 1.827a49.255 49.255 0 0111.36 0c1.497.174 2.57 1.46 2.57 2.93V19.5a3 3 0 01-3 3H6.75a3 3 0 01-3-3V4.757c0-1.47 1.073-2.756 2.57-2.93zM7.5 11.25a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H8.25a.75.75 0 01-.75-.75v-.008zm.75 1.5a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H8.25zm-.75 3a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H8.25a.75.75 0 01-.75-.75v-.008zm.75 1.5a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V18a.75.75 0 00-.75-.75H8.25zm1.748-6a.75.75 0 01.75-.75h.007a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.007a.75.75 0 01-.75-.75v-.008zm.75 1.5a.75.75 0 00-.75.75v.008c0 .414.335.75.75.75h.007a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75h-.007zm-.75 3a.75.75 0 01.75-.75h.007a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.007a.75.75 0 01-.75-.75v-.008zm.75 1.5a.75.75 0 00-.75.75v.008c0 .414.335.75.75.75h.007a.75.75 0 00.75-.75V18a.75.75 0 00-.75-.75h-.007zm1.754-6a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75v-.008zm.75 1.5a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75h-.008zm-.75 3a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75v-.008zm.75 1.5a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V18a.75.75 0 00-.75-.75h-.008zm1.748-6a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75v-.008zm.75 1.5a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75h-.008zm-8.25-6A.75.75 0 018.25 6h7.5a.75.75 0 01.75.75v.75a.75.75 0 01-.75.75h-7.5a.75.75 0 01-.75-.75v-.75zm9 9a.75.75 0 00-1.5 0V18a.75.75 0 001.5 0v-2.25z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: '100% On-Time Guarantee',
    imageSrc: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-10 h-10 text-white"
      >
        <path
          fillRule="evenodd"
          d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: 'Licensed and Insured',
    imageSrc: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-10 h-10 text-white"
      >
        <path
          fillRule="evenodd"
          d="M9 1.5H5.625c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0016.5 9h-1.875a1.875 1.875 0 01-1.875-1.875V5.25A3.75 3.75 0 009 1.5zm6.61 10.936a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 14.47a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
          clipRule="evenodd"
        />
        <path d="M12.971 1.816A5.23 5.23 0 0114.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 013.434 1.279 9.768 9.768 0 00-6.963-6.963z" />
      </svg>
    ),
  },
];

export default async function HeroWithBooking({ image, title }) {
  return (
    <section className="relative">
      <div className="absolute inset-0">
        <Image
          className="h-full w-full object-cover"
          src={image}
          alt={title}
          // className="object-cover"
          fill
          priority
          title={title}
        />
        <div className="absolute inset-0 bg-gray-900/60 mix-blend-multiply" />
      </div>
      <div className="relative py-40 sm:py-32 lg:overflow-hidden lg:py-28">
        <div className="mx-auto max-w-7xl lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            <div className="mx-auto max-w-md px-6 sm:max-w-2xl sm:text-center lg:flex lg:items-center lg:px-0 lg:text-left">
              <div className="lg:py-24">
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:mt-6 xl:text-5xl">
                  <span className="block">Phoenix Moving</span>
                  <span className="block text-purple-400">
                    #1 movers in Boston
                  </span>
                </h1>
                <p className="mt-3 text-base text-gray-50 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                  Professional moving company serving the Boston area. We
                  provide fast, reliable, and affordable moving services for
                  residential and commercial customers.
                </p>
                <div className="mt-10 sm:mt-12">
                  {/* <div className="sm:flex">
                      <div className="min-w-0 flex-1">
                        <label htmlFor="email" className="sr-only">
                          Email address
                        </label>
                        <input
                          id="email"
                          type="email"
                          placeholder="Enter your email"
                          className="block w-full rounded-md border-0 px-4 py-3 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:ring-offset-2 focus:ring-offset-gray-900"
                        />
                      </div>
                      <div className="mt-3 sm:mt-0 sm:ml-3">
                        <button
                          type="submit"
                          className="block w-full rounded-md bg-indigo-500 py-3 px-4 font-medium text-white shadow hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:ring-offset-2 focus:ring-offset-gray-900"
                        >
                          Start free trial
                        </button>
                      </div>
                    </div> */}
                  <p className="mt-3 text-sm text-gray-50 sm:mt-4">
                    We offer FREE Online estimates to provide you with a
                    hassle-free and convenient experience.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center mt-12 px-2">
              {/* <div className="flex justify-center items-center"> */}
              {/* Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ */}
              {/* <img
                    className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                    src="https://tailwindui.com/img/component-images/cloud-illustration-indigo-400.svg"
                    alt=""
                  /> */}
              <BookFormWrapper />
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* More main page content here... */}
      {/* <div className="relative sm:overflow-hidden min-h-[840px] sm:min-h-[700px] flex">
        <Image
          src={image}
          alt={title}
          className="object-cover"
          fill
          priority
          title={title}
        />
        <div className="absolute inset-0 bg-gray-900/50 mix-blend-multiply" />
        <div className="pb-6 pt-20 sm:pb-10 sm:pt-32 relative overflow-hidden w-full flex">
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex-1 flex flex-col-reverse lg:flex-row items-center">
            <BookFormWrapper />
            {title && (
              <div className="flex-1 flex items-center justify-center flex-col">
                <h1 className="relative text-center text-white block text-3xl font-semibold lg:text-4xl">
                  {title}
                </h1>
                <blockquote className="relative text-center text-gray-300 tracking-[0.3em] font-semibold mt-2">
                  Make Moving Chill
                </blockquote>
                <div className="mx-auto mt-20 hidden lg:grid max-w-sm grid-cols-1 gap-y-10 sm:max-w-none lg:grid-cols-3">
                  {incentives.map((incentive, i) => (
                    <div
                      key={incentive.name}
                      className={
                        i === 1
                          ? 'text-center sm:flex sm:text-left lg:block lg:text-center lg:relative bottom-10'
                          : 'text-center sm:flex sm:text-left lg:block lg:text-center'
                      }
                    >
                      <div className="sm:flex-shrink-0">
                        <div className="flex justify-center">
                          {incentive.imageSrc || ''}
                        </div>
                      </div>
                      <div className="mt-2 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0">
                        <p className="text-base font-bold text-white">
                          {incentive.name}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div> */}
    </section>
  );
}
