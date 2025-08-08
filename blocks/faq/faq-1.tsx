import { Section } from "@/components/section";
import { SectionHeader } from "@/components/section-header";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
// import { Button } from "@/components/ui/button";

type Faq = {
  question: string;
  answer: React.ReactNode | string;
};

const faqs: Faq[] = [
  {
    question: "Are you licensed and insured?",
    answer: (
      <>
        Yes, we are fully licensed with the Massachusetts Department of Public
        Utilities and we carry Cargo, Motor Vehicle, and General Liability
        Insurance.
      </>
    ),
  },
  {
    question: "Is the price base on the hours?",
    answer: (
      <>
        That is correct. If you're having a local move with us, your final price
        is based on the actual <b>labor time + travel time</b> to your origin
        and back from your destination. labor and travel time are being prorated
        based on 15 minute increments.
      </>
    ),
  },
  {
    question: "Do I have to pay for the travel time?",
    answer: (
      <>
        You will be billed for the travel time from our warehouse to your
        origin, and for the travel time from the destination back to our
        parking. Those charges are prorated based on <b>15 minute increments</b>{" "}
        and are calculated by the reading of Google Maps. In case if our truck
        is being delayed by traffic, the additional time incurred will not be
        added to the bill. Any travel time between the origin and the
        destination is considered to be part of the "labor time".
      </>
    ),
  },
  {
    question: "What forms of payment do you accept?",
    answer: (
      <>
        Payments for <a href="/local-moving">local services</a> can be made in
        form of cash, credit card or a certified bankers check. Payments for{" "}
        <a href="/interstate-moving">long distance services</a> can be made in
        form of cash, certified bankers check or debit/credit cards. Any
        payments with a personal check have to be granted by your moving
        coordinator.
      </>
    ),
  },
  {
    question: "When should I pay for the move?",
    answer: (
      <>
        There is a deposit of <b>$100.00</b> required on all local moves and a
        10% deposit from final price on any long distance move. All service
        charges on a local move can be paid upon the completion of the job.
        Payments for long distance move has to be performed prior to the actual
        unload of your shipment at your destination.
      </>
    ),
  },
  {
    question: "Can I leave stuff inside the dresser?",
    answer: (
      <>
        The answer to this question is yes and no. You can definitely leave your
        light linens inside the drawers, but please make sure to take out any
        heavier items (i.e. jeans, files, books). Please keep in mind that our
        movers might be changing the position of the dresser by standing it up
        vertically, therefore any small articles left inside might fall behind
        the drawers and get lost. Bottom line is, empty dresser is easier to be
        carried takes less time to be wrapped and the chances of something being
        lost or damaged are minimal.
      </>
    ),
  },
  {
    question:
      "Will you provide with moving pads for the furniture? Are those free of charge?",
    answer: (
      <>
        We provide free moving blankets for all moving jobs. However, we do not
        provide free packing tape to secure our pads around the furniture. It is
        up to you to decide if you want to use our tape or to purchase your own.
      </>
    ),
  },
  {
    question: "Am I able to change my move date and/or time?",
    answer: (
      <>
        If you need to change your move, date and/or time, log in to your
        profile to request a date and/or time change. If you can't log in, email{" "}
        <a href="mailto:info@gophoenixmoving.com">info@gophoenixmoving.com</a>{" "}
        or give us a call at <a href="tel:(508)315-9458">(508) 315-9458</a> and
        we will assist you with the change. Keep in mind that price may change
        when rescheduling online.
      </>
    ),
  },
];

export function Faq1() {
  return (
    <Section className="from-primary via-primary/90 to-primary/80 bg-gradient-to-br">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <SectionHeader
          title="Questions? Answers."
          subtitle={
            <>
              If you have anything else you want to ask,{" "}
              <a href="#" className="underline hover:text-blue-300">
                reach out to us
              </a>
              .
            </>
          }
          className="text-primary-foreground"
        />

        {/* FAQ Accordion */}
        <div className="rounded-3xl border border-white/20 bg-white/5 p-8 shadow-2xl backdrop-blur-lg">
          <Accordion
            type="single"
            collapsible
            className="space-y-4"
            defaultValue="question-0"
          >
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`question-${index}`}
                className="rounded-3xl border border-white/10 bg-white/5 px-6 py-2 backdrop-blur-sm transition-all duration-300 hover:bg-white/10"
              >
                <AccordionTrigger className="py-6 text-left text-lg font-semibold text-white hover:text-white/80 hover:no-underline [&>svg]:text-white">
                  <span className="flex items-center gap-3">
                    <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-white/20 text-sm font-bold">
                      {index + 1}
                    </span>
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="prose prose-a:text-white prose-a:underline prose-a:underline-offset-4 max-w-none pb-6 pl-11 text-base leading-relaxed text-balance text-white">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Bottom CTA */}
        {/* <div className="mt-12 text-center">
          <p className="mb-4 text-white/80">Still have questions?</p>
          <Button
            size="lg"
            className="text-primary transform rounded-full bg-white px-8 py-3 font-semibold shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-white/90 hover:shadow-xl"
          >
            Contact Support
          </Button>
        </div> */}
      </div>
    </Section>
  );
}
