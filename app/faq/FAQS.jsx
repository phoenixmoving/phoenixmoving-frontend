'use client';
import React from 'react';
import { Disclosure, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import Section from '@/ui/Section';

const faqs = [
  {
    question: 'Are you licensed and insured?',
    answer:
      'Yes, we are fully licensed with the Massachusetts Department of Public Utilities and we carry Cargo, Motor Vehicle, and General Liability Insurance.',
  },
  {
    question: 'Is the price base on the hours?',
    answer:
      "That is correct. If you're having a local move with us, your final price is based on the actual labor time + travel time to your origin and back from your destination. labor and travel time are being prorated based on 15 minute increments.",
  },
  {
    question: 'Do I have to pay for the travel time?',
    answer:
      'You will be billed for the travel time from our parking location in Natick, MA (18 Lakeview Gdns, Natick, MA 01760) to your origin, and for the travel time from the destination back to our parking. Those charges are prorated based on 15 minute increments and are calculated by the reading of Google Maps. In case if our truck is being delayed by traffic, the additional time incurred will not be added to the bill. Any travel time between the origin and the destination is considered to be part of the "labor time".',
  },
  {
    question: 'What forms of payment do you accept?',
    answer:
      'Payments for local services can be made in form of cash, credit card or a certified bankers check. Payments for long distance services can be made in form of cash, certified bankers check or debit/credit cards. Any payments with a personal check have to be granted by your moving coordinator.',
  },
  {
    question: 'When should I pay for the move?',
    answer:
      'There is a deposit of $100.00 required on all local moves and a 10% deposit from final price on any long distance move. All service charges on a local move can be paid upon the completion of the job. Payments for long distance move has to be performed prior to the actual unload of your shipment at your destination.',
  },
  {
    question: 'Can I leave stuff inside the dresser?',
    answer:
      'The answer to this question is yes and no. You can definitely leave your light linens inside the drawers, but please make sure to take out any heavier items (i.e. jeans, files, books). Please keep in mind that our movers might be changing the position of the dresser by standing it up vertically, therefore any small articles left inside might fall behind the drawers and get lost. Bottom line is, empty dresser is easier to be carryied takes less time to be wrapped and the chances of something being lost or damaged are minimal.',
  },
  {
    question:
      'Will you provide with moving pads for the furniture? Are those free of charge?',
    answer:
      'We provide free moving blankets for all moving jobs. However, we do not provide free packing tape to secure our pads around the furniture. It is up to you to decide if you want to use our tape or to purchase your own.',
  },
  {
    question: 'Am I able to change my move date and/or time?',
    answer:
      'If you need to change your move date and/or time, log\n in to your profile to request a date and/or time change. If you can’t log in, email info@phoenixmoving.com or give us a call at (508) 315-9458 and we will assist you with the change. Keep in mind that price may change when rescheduling online.',
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function FAQS() {
  return (
    <Section className="bg-palette-background">
      <dl className="mt-6 space-y-4 max-w-3xl m-auto">
        {faqs.map((faq) => (
          <Disclosure
            as="div"
            key={faq.question}
            className="py-4 px-6 bg-white rounded-lg"
          >
            {({ open }) => (
              <>
                <dt className="text-lg">
                  <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-400">
                    <span className="font-semibold text-gray-900">
                      {faq.question}
                    </span>
                    <span className="ml-6 flex h-7 items-center">
                      <ChevronDownIcon
                        className={classNames(
                          open ? '-rotate-180' : 'rotate-0',
                          'h-6 w-6 transform text-palette-primary-500',
                        )}
                        aria-hidden="true"
                      />
                    </span>
                  </Disclosure.Button>
                </dt>
                <Transition
                  enter="transition-all duration-200"
                  enterFrom="opacity-0 -translate-y-2"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition-all duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 -translate-y-2"
                >
                  <Disclosure.Panel as="dd" className="mt-2 pr-12">
                    <p className="font-light text-gray-900">{faq.answer}</p>
                  </Disclosure.Panel>
                </Transition>
              </>
            )}
          </Disclosure>
        ))}
      </dl>
    </Section>
  );
}
