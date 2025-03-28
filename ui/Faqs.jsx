import Section from '@/ui/Section';
import SectionHeader from './SectionHeader';

const faqs = [
  [
    {
      question: 'Are you licensed and insured?',
      answer:
        'Yes, we are fully licensed with the Massachusetts Department of Public Utilities and we carry Cargo, Motor Vehicle, and General Liability Insurance.',
    },
    {
      question: 'Is the price base on the hours?',
      answer:
        "That is correct. If you're having a local move with us, your final price is based on the actual <b>labor time + travel time</b> to your origin and back from your destination. labor and travel time are being prorated based on 15 minute increments.",
    },
    {
      question: 'Do I have to pay for the travel time?',
      answer:
        'You will be billed for the travel time from our warehouse to your origin, and for the travel time from the destination back to our parking. Those charges are prorated based on <b>15 minute increments</b> and are calculated by the reading of Google Maps. In case if our truck is being delayed by traffic, the additional time incurred will not be added to the bill. Any travel time between the origin and the destination is considered to be part of the "labor time".',
    },
  ],
  [
    {
      question: 'What forms of payment do you accept?',
      answer:
        'Payments for <a href="/local-moving">local services</a> can be made in form of cash, credit card or a certified bankers check. Payments for <a href="/interstate-moving">long distance services</a> can be made in form of cash, certified bankers check or debit/credit cards. Any payments with a personal check have to be granted by your moving coordinator.',
    },
    {
      question: 'When should I pay for the move?',
      answer:
        'There is a deposit of <b>$100.00</b> required on all local moves and a 10% deposit from final price on any long distance move. All service charges on a local move can be paid upon the completion of the job. Payments for long distance move has to be performed prior to the actual unload of your shipment at your destination.',
    },
    {
      question: 'Can I leave stuff inside the dresser?',
      answer:
        'The answer to this question is yes and no. You can definitely leave your light linens inside the drawers, but please make sure to take out any heavier items (i.e. jeans, files, books). Please keep in mind that our movers might be changing the position of the dresser by standing it up vertically, therefore any small articles left inside might fall behind the drawers and get lost. Bottom line is, empty dresser is easier to be carried takes less time to be wrapped and the chances of something being lost or damaged are minimal.',
    },
  ],
  [
    {
      question:
        'Will you provide with moving pads for the furniture? Are those free of charge?',
      answer:
        'We provide free moving blankets for all moving jobs. However, we do not provide free packing tape to secure our pads around the furniture. It is up to you to decide if you want to use our tape or to purchase your own.',
    },
    {
      question: 'Am I able to change my move date and/or time?',
      answer:
        "If you need to change your move, date and/or time, log\n in to your profile to request a date and/or time change. If you can't log in, email <a href='mailto:info@gophoenixmoving.com'>info@gophoenixmoving.com</a> or give us a call at <a href='tel:(508)315-9458'>(508)315-9458</a> and we will assist you with the change. Keep in mind that price may change when rescheduling online.",
    },
  ],
];

export default function Faqs() {
  return (
    <Section>
      <SectionHeader
        title="Questions? Answers."
        subtitle={
          <>
            If you have anything else you want to ask,{' '}
            <a
              title="Email us"
              href="mailto:info@gophoenixmoving.com"
              className="text-blue-600 hover:underline"
            >
              reach out to us
            </a>
            .
          </>
        }
      />
      <ul className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3">
        {faqs.map((column, columnIndex) => (
          <li key={columnIndex}>
            <ul className="space-y-10">
              {column.map((faq, faqIndex) => (
                <li key={faqIndex}>
                  <p className="text-lg font-semibold leading-6 text-slate-900">
                    {faq.question}
                  </p>
                  <p
                    dangerouslySetInnerHTML={{ __html: faq.answer }}
                    className="mt-4 text-sm prose prose-blue text-slate-900"
                  />
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </Section>
  );
}
