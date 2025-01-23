import Section from '@/ui/Section';

export default function Info() {
  return (
    <Section className="max-w-5xl m-auto">
      <div className="mb-8 space-y-2">
        <p className="space-x-2">
          <span className="italic">Sec 1.</span>
          <span className="font-bold">Guidance, walk-trough and payment.</span>
        </p>
        <p className="text-sm font-light">
          At the time of the move, the customer or a representative must be
          present during the move at all times, as movers will need guidance. It
          is customer&apos;s responsibility to do a final “walk-through” at the
          pickup location to ensure the movers have taken everything that needs
          to be moved. Having the form of payment, you choose to use at the end
          of the job ready will save you time and money. Please note: Any
          payments with a personal check have to be granted by your moving
          coordinator.
        </p>
      </div>

      <div className="mb-8 space-y-2">
        <p className="space-x-2">
          <span className="italic">Sec 2.</span>
          <span className="font-bold">Moving cost.</span>
        </p>
        <p className="text-sm font-light">
          The final cost of your move will be determined by multiplying the
          actual number of hours our moving crew had worked by the hourly rate
          indicated on your estimate, travel time, the amount of packing
          materials used, the amount of valuation coverage and any will be added
          to the final cost of your move, additional services listed below (if
          such services are provided). All jobs are subject to a 2-hour minimum
          labor + fixed travel time.
        </p>
      </div>

      <div className="mb-8 space-y-2">
        <p className="space-x-2">
          <span className="italic">Sec 3.</span>
          <span className="font-bold">Labor time.</span>
        </p>
        <p className="text-sm font-light">
          Labor time starts upon the arrival of our crew at your location and
          ends upon the departure from your final destination. Labor time is
          calculated based on 15-minute increments at the rate indicated on the
          estimate. Any travel between the origin and the destination is
          considered to be part of the labor time.
        </p>
      </div>

      <div className="mb-8 space-y-2">
        <p className="space-x-2">
          <span className="italic">Sec 4.</span>
          <span className="font-bold">Travel time.</span>
        </p>
        <p className="text-sm font-light">
          Please keep in mind that you will be billed for the travel time from
          our parking office to your origin, and for the travel time from your
          final destination back to our parking office. Those charges are
          prorated based on 15-minute increments and are calculated by the
          reading of the GPS or Google Maps. In case if our truck is being
          delayed by traffic, the additional time incurred will not be added to
          the bill.
        </p>
      </div>

      <div className="mb-8 space-y-2">
        <p className="space-x-2">
          <span className="italic">Sec 5.</span>
          <span className="font-bold">Packing materials.</span>
        </p>
        <p className="text-sm font-light">
          Our trucks carry a standard set of boxes: 5 small, 5 medium, 5 large,
          5 picture boxes, 5 wardrobe and 1 bundle of white packing paper. If
          you feel like there will be some packing for us to be done, please
          make sure to inform us ahead of time, otherwise we&apos;ll be limited
          to our supplies. All boxes and supplies used on your move are subject
          to addition charge, unless specified in your moving estimate.
        </p>
      </div>

      <div className="mb-8 space-y-2">
        <p className="space-x-2">
          <span className="italic">Sec 6.</span>
          <span className="font-bold">Arrival time frame.</span>
        </p>
        <p className="text-sm font-light">
          Please keep in mind that we do not provide a specific time of arrival.
          We offer 2-hour arrival time frames for all jobs scheduled in the
          morning and 3-hour arrival time frames for all the jobs scheduled in
          the afternoon.
        </p>
      </div>

      <div className="mb-8 space-y-2">
        <p className="space-x-2">
          <span className="italic">Sec 7.</span>
          <span className="font-bold">Waiting time.</span>
        </p>
        <p className="text-sm font-light">
          If our crew arrives at your location as agreed, but you&apos;re not
          ready for us to start the job, you&apos;ll be billed for our waiting
          time. Please understand that you&apos;re holding up our team by not
          being ready for the move.
        </p>
      </div>

      <div className="mb-8 space-y-2">
        <p className="space-x-2">
          <span className="italic">Sec 8.</span>
          <span className="font-bold">Parking.</span>
        </p>
        <p className="text-sm font-light">
          Two parking spaces (to accommodate a 34-foot-long moving truck) should
          be provided/secured by the customer. Parking spot must be located
          within 75 feet from the entrance. In case if a parking permit is
          needed, it is customer&apos;s responsibility to inform Phoenix Moving.
          All parking permits must be obtained by the customer unless otherwise
          indicated on the move plan. In case if there is no parking space
          available next to the origin/delivery location and the moving truck
          needs to be parked in a non-permitted space, it is customer&apos;s
          responsibility to cover the cost of any parking tickets issued to
          Phoenix Moving.
        </p>
      </div>

      <div className="mb-8 space-y-2">
        <p className="space-x-2">
          <span className="italic">Sec 9.</span>
          <span className="font-bold">
            Payment and payment forms (for local moves).
          </span>
        </p>
        <p className="text-sm font-light">
          For local moves, the payment is required at the end of the move/each
          moving day (for multiple days move), before the moving team leaves
          your location. The clock will continue running until the payment has
          been processed completely. We accept cash, Zelle, debit and all types
          of credit cards (Visa, Mastercard, Discover, AMEX) and 4% processing
          fee will be applied for all debit and credit card payments.
        </p>
        <br />
        <p className="font-bold text-sm">
          For credit card payments, the name on the card must match the name the
          reservation is under otherwise, an authorization form must be signed
          by the person paying for the move.
        </p>
        <br />
        <p className="font-bold text-sm">
          Any payments with a personal check have to be granted by your moving
          coordinator.
        </p>
      </div>

      <div className="mb-8 space-y-2">
        <p className="space-x-2">
          <span className="italic">Sec 10.</span>
          <span className="font-bold">
            Payment and payment forms (for long distance/interstate moves).
          </span>
        </p>
        <p className="text-sm font-light">
          We require cash, credit card, money order/cashier&apos;s check (no
          personal checks) at the time of delivery for any balance due on
          long-distance moves. 4% processing fee will be applied for credit card
          payments. For all interstate moves we require 10% deposit on booking
          stage to secure crew and truck for your move, another 40% due at the
          pick-up time and 50% balance due at the delivery after unloading.
        </p>
      </div>

      <div className="mb-8 space-y-2">
        <p className="space-x-2">
          <span className="italic">Sec 11.</span>
          <span className="font-bold">
            Additional possible services/charges.
          </span>
        </p>
        <ul className="text-sm font-light list-disc ml-4">
          <li>
            Grand piano special handling cost: $450.00 (first floor to the first
            floor and/or elevator only).
          </li>
          <li>
            Baby Grand piano special handling cost: $300.00 (first floor to the
            first floor and/or elevator only).
          </li>
          <li>
            Upright piano: $150 (first floor to the first floor and/or elevator
            only). Please bring to our attention in writing the size and type of
            piano you&apos;re moving and also the access you have at both
            locations.
          </li>
          <li>
            Overweight item (over 250 lbs.) handling cost (gun safe/valuable
            safe, etc.): $150.00.
          </li>
          <li>
            All hoisting services will be subject to a fee of $40 (per item per
            flight).
          </li>
          <li>
            Appliance handling cost (washer/dryer/fridge/stove/freezer):
            $75/each.
          </li>
          <li>TV Box - Rent: $15/each.</li>
          <li>
            Moving blankets: If your shipment will be delivered to a storage
            facility, your warehouse, or loaded into a POD/container or a
            different truck instead of the Phoenix Movers truck, we will charge
            you $20 for each moving blanket. When you move out or receive your
            delivery from storage, if Phoenix Movers retrieves the moving
            blankets, we will refund you $10 for each blanket that was charged
            during the move-in or loading services.
          </li>
        </ul>
      </div>

      <div className="mb-8 space-y-2">
        <p className="space-x-2">
          <span className="italic">Sec 12.</span>
          <span className="font-bold">Piano move.</span>
        </p>
        <p className="text-sm font-light">
          We do not move large upright pianos up or down flights of stairs
          inside the house. We only move pianos from ground to ground floor.
          Exterior stairs are fine, but we encourage sending us pictures of
          entrances at each location, so that we can confirm that we can move
          your piano. There may be circumstances when we cannot safely move
          items and will need to discuss the situation with you. If the piano
          has thin legs (usually the front), we will not be responsible if they
          will not go back on if we take them off (sometimes the nut is loose
          inside the piano and will turn when you try to replace the leg). If
          the customer elects to leave the legs on, we will not be responsible
          if damage occurs to them.
        </p>
      </div>

      <div className="mb-8 space-y-2">
        <p className="space-x-2">
          <span className="italic">Sec 13.</span>
          <span className="font-bold">Heavy/Oversized items move.</span>
        </p>
        <p className="text-sm font-light">
          Under safe conditions, we move upright or baby grand pianos,
          appliances, safe and items over 250 lbs. Unfortunately, sometimes, due
          to the weight of these items, damage may result to floor surfaces or
          walls so before we proceed with moving these items we will have a
          release of any liability signed so we can move those items for you.
        </p>
      </div>

      <div className="mb-8 space-y-2">
        <p className="space-x-2">
          <span className="italic">Sec 14.</span>
          <span className="font-bold">Moving Crew size.</span>
        </p>
        <p className="text-sm font-light">
          The size of the moving crew is determined by the number of items that
          will have to be packed and/or moved as well as factors like access on
          each moving location, walking distance, stairs, etc. We recommend a
          certain number of movers for each job taking in consideration all the
          above as well as our current schedule, availability, etc. On extreme
          situations, Phoenix Moving & Storage might recommend sending extra men
          and/or truck during the day to complete a job if there is an overflow
          of items that needs to be moved, or additional packing required, a
          time restriction, very difficult access or very difficult pieces of
          furniture, etc. The hourly rate will be increased accordingly and the
          move will run more efficiently with more movers.
        </p>
      </div>

      <div className="mb-8 space-y-2">
        <p className="font-bold">Changes to Our Policy.</p>
        <p className="text-sm font-light">
          We may change our Privacy and Website Use Policy from time to time.
          The most current version of the Policy will govern our collection, use
          and disclosure of information about you and will be detailed here. If
          we make material changes to this Policy, we will notify you by email
          or by posting a notice here prior to the effective date of the change.
          By continuing to access or use the Service after those changes become
          effective, you agree to the revised Privacy and Website Use Policy.
        </p>
      </div>

      <p className="italic text-xs">
        This Policy was last modified on January 22, 2025.
      </p>
    </Section>
  );
}
