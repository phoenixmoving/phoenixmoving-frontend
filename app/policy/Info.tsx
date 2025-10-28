import { Section } from "@/components/section";

const companyEmail = "info@gophoenixmoving.com";

export function Info() {
  return (
    <Section className="prose prose-a:text-blue-500 m-auto max-w-5xl">
      <section>
        <h2>Sec 1. Deposit Policy.</h2>
        <p>
          To secure your booking and confirm your move, a deposit is required at
          the time of reservation. This helps us prepare efficiently and ensures
          your spot during busy periods.
        </p>
        <ul>
          <li>
            <b>Local Moves:</b> $100 deposit.
          </li>
          <li>
            <b>Long-Distance Moves:</b> 10% of the quoted flat-rate price.
          </li>
        </ul>
        <p>
          Your deposit will be credited directly toward the total cost of your
          move.
        </p>
        <h3>Cancellation and Refund Policy</h3>
        <p>
          Deposits are fully refundable if you cancel at least 5 calendar days
          prior to the scheduled move date. Refunds will be processed within
          7-10 business days via the original payment method.
        </p>
        <p>However, the deposit is non-refundable in the following cases:</p>
        <ul>
          <li>
            Cancellation within 72 hours (3 days) of the scheduled move date.
          </li>
          <li>No-show by the customer on the move date.</li>
          <li>If the moving crew has already been dispatched.</li>
        </ul>
        <h3>Peak Season Considerations (May 1 - September 30)</h3>
        <p>
          During high-demand periods, availability is limited. Deposits are
          required to hold your slot and are non-refundable for any
          cancellations within 72 hours of the scheduled date to account for
          operational commitments.
        </p>
        <h3>Payment and Agreement</h3>
        <p>
          We accept secure payments via credit/debit card, zelle transfer, or
          digital wallets (e.g., PayPal, Apple Pay). By submitting your deposit,
          you acknowledge and agree to these terms. If you have questions or
          need to make changes, contact us at{" "}
          <a href={`mailto:${companyEmail}`}>{companyEmail}</a> as soon as
          possible. In the event of unforeseen circumstances (e.g., natural
          disasters or government restrictions), we may offer flexibility on a
          case-by-case basis.
        </p>
      </section>

      <section>
        <h2>Sec 2. Guidance, walk-trough and payment.</h2>
        <p>
          At the time of the move, the customer or a representative must be
          present during the move at all times, as movers will need guidance. It
          is customer&apos;s responsibility to do a final “walk-through” at the
          pickup location to ensure the movers have taken everything that needs
          to be moved. Having the form of payment, you choose to use at the end
          of the job ready will save you time and money. Please note: Any
          payments with a personal check have to be granted by your moving
          coordinator.
        </p>
      </section>

      <section>
        <h2>Sec 3. Moving cost.</h2>
        <p>
          The final cost of your move will be determined by multiplying the
          actual number of hours our moving crew had worked by the hourly rate
          indicated on your estimate, travel time, the amount of packing
          materials used, the amount of valuation coverage and any will be added
          to the final cost of your move, additional services listed below (if
          such services are provided). All jobs are subject to a 3 hour minimum
          including the travel time.
        </p>
      </section>

      <section>
        <h2>Sec 4. Labor time.</h2>
        <p>
          Labor time starts upon the arrival of our crew at your location and
          ends upon the departure from your final destination. Labor time is
          calculated based on 15-minute increments at the rate indicated on the
          estimate. Any travel between the origin and the destination is
          considered to be part of the labor time.
        </p>
      </section>

      <section>
        <h2>Sec 5. Travel time.</h2>
        <p>
          Please keep in mind that you will be billed for the travel time from
          our parking office to your origin, and for the travel time from your
          final destination back to our parking office. Those charges are
          prorated based on 15-minute increments and are calculated by the
          reading of the GPS or Google Maps. In case if our truck is being
          delayed by traffic, the additional time incurred will not be added to
          the bill.
        </p>
      </section>

      <section>
        <h2>Sec 6. Packing materials.</h2>
        <p>
          Our trucks carry a standard set of boxes: 5 small, 5 medium, 5 large,
          5 picture boxes, 5 wardrobe and 1 bundle of white packing paper. If
          you feel like there will be some packing for us to be done, please
          make sure to inform us ahead of time, otherwise we&apos;ll be limited
          to our supplies. All boxes and supplies used on your move are subject
          to addition charge, unless specified in your moving estimate.
        </p>
      </section>

      <section>
        <h2>Sec 7. Arrival time frame.</h2>
        <p>
          Please keep in mind that we do not provide a specific time of arrival.
          We offer 2-hour arrival time frames for all jobs scheduled in the
          morning and 3-hour arrival time frames for all the jobs scheduled in
          the afternoon.
        </p>
      </section>

      <section>
        <h2>Sec 8. Waiting time.</h2>
        <p>
          If our crew arrives at your location as agreed, but you&apos;re not
          ready for us to start the job, you&apos;ll be billed for our waiting
          time. Please understand that you&apos;re holding up our team by not
          being ready for the move.
        </p>
      </section>

      <section>
        <h2>Sec 9. Parking.</h2>
        <p>
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
      </section>

      <section>
        <h2>Sec 10. Payment and payment forms (for local moves).</h2>
        <p>
          For local moves, the payment is required at the end of the move/each
          moving day (for multiple days move), before the moving team leaves
          your location. The clock will continue running until the payment has
          been processed completely. We accept cash, Zelle, debit and all types
          of credit cards (Visa, Mastercard, Discover, AMEX) and 4% processing
          fee will be applied for all debit and credit card payments.
        </p>
        <p>
          For credit card payments, the name on the card must match the name the
          reservation is under otherwise, an authorization form must be signed
          by the person paying for the move.
        </p>
        <p>
          Any payments with a personal check have to be granted by your moving
          coordinator.
        </p>
      </section>

      <section>
        <h2>
          Sec 11. Payment and payment forms (for long distance/interstate
          moves).
        </h2>
        <p>
          We require cash, credit card, money order/cashier&apos;s check (no
          personal checks) at the time of delivery for any balance due on
          long-distance moves. 4% processing fee will be applied for credit card
          payments. For all interstate moves we require 10% deposit on booking
          stage to secure crew and truck for your move, another 40% due at the
          pick-up time and 50% balance due at the delivery after unloading.
        </p>
      </section>

      <section>
        <h2>Sec 12. Additional possible services/charges.</h2>
        <ul>
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
      </section>

      <section>
        <h2>Sec 13. Piano move.</h2>
        <p>
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
        <p>Prices may vary depending on the type of piano being moved:</p>
        <ul>
          <li>Upright Piano: Starting from $150.</li>
          <li>Baby Grand Piano: Starting from $300.</li>
          <li>Grand Piano: Starting from $400.</li>
        </ul>
      </section>

      <section>
        <h2>Sec 14. Heavy/Oversized items move.</h2>
        <p>
          Under safe conditions, we move upright or baby grand pianos,
          appliances, safe and items over 250 lbs. Unfortunately, sometimes, due
          to the weight of these items, damage may result to floor surfaces or
          walls so before we proceed with moving these items we will have a
          release of any liability signed so we can move those items for you.
        </p>
      </section>

      <section>
        <h2>Sec 15. Moving Crew size.</h2>
        <p>
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
      </section>

      <section>
        <h2>Sec 16. Storage in Transit (SIT) Policy.</h2>
        <p>
          If delivery to the final destination cannot be completed on the
          scheduled date, Phoenix Moving may provide Storage in Transit (SIT)
          services to temporarily store the customer&apos;s belongings in a
          secure facility until delivery can be made.
        </p>
        <p>
          SIT is available for up to 180 days, depending on the type of move. If
          items must be held overnight or for several days, the customer will be
          charged for each moving day that the crew is dispatched and working on
          the job.
        </p>
        <p>
          All storage and handling charges must be paid in full prior to the
          release or delivery of goods. While in SIT, items remain covered under
          the same valuation or insurance option selected for the move.
        </p>
      </section>

      <section>
        <h2>Sec 17. Responsibility and Claims Policy.</h2>
        <ol>
          <li>
            <b>Customer-Packed Items.</b> We are not responsible for damage to
            any items, boxes, totes, or containers packed by you or anyone
            outside our crew.
          </li>
          <li>
            <b>Pre-Existing Damage.</b> Phoenix Moving is not liable for any
            damage that existed before our involvement. Our team will document
            visible issues (e.g., via photos) prior to starting the move.
          </li>
          <li>
            <b>Perishable, Hazardous, or Restricted Items.</b> We do not
            transport perishable goods, plants, live animals, or hazardous
            materials. These are excluded from all coverage and liability.
          </li>
          <li>
            <b>Valuation Coverage.</b> Unless you purchase additional coverage,
            your move is protected under our Basic Valuation Coverage at $0.60
            per pound per article. (Example: A 50 lb. item would have a maximum
            liability of $30.)
          </li>
          <li>
            <b>Claims Process.</b> Report any damage or loss within 7 calendar
            days of your move completion. Submit claims via email to{" "}
            <a href={`mailto:${companyEmail}`}>{companyEmail}</a> including a
            detailed description, photos, and any supporting evidence. Our
            claims team will respond within 5 business days and may request an
            on-site inspection or further details.
          </li>
          <li>
            <b>Repairs and Compensation.</b> We reserve the right to repair
            damaged items or provide compensation based on their actual cash
            value (not replacement cost), at our discretion.
          </li>
          <li>
            <b>Property Damage.</b> Any damage to walls, floors, doors, or other
            property must be reported to our crew immediately before they depart
            the site. Failure to do so may invalidate the claim.
          </li>
          <li>
            <b>Weather-Related and Uncontrollable Delays.</b>
            We are not liable for damages or delays due to weather, traffic,
            road closures, mechanical issues, or other factors beyond our
            control (force majeure events).
          </li>
        </ol>
        <p>
          If a claim is denied, you may request a review by providing additional
          information within 14 days of the decision.
        </p>
      </section>

      <section>
        <h2>Sec 18. Coverage / Insurance Options.</h2>
        <p>
          Phoenix Moving provides valuation coverage options to protect your
          items during transit. Coverage only applies if we are responsible for
          the loss or damage. Note: Even if damage is identified during the
          move, full payment for services is still required.
        </p>
        <ol>
          <li>
            <b>Basic Value Protection (Default).</b>
            <ul>
              <li>$0.60 per pound per article.</li>
              <li>Automatically included if no upgrade is selected.</li>
            </ul>
          </li>
          <li>
            <b>Replacement Cost Coverage (Optional Upgrade).</b>
            <ul>
              <li>
                Covers repair, replacement, or reimbursement up to the full
                declared value of lost or damaged items.
              </li>
              <li>Cost: $50 per $1,000 of declared shipment value.</li>
              <li>Minimum: $5,000; Maximum: $20,000.</li>
              <li>
                To add this, declare your shipment value in writing at least 48
                hours before the move.
              </li>
            </ul>
          </li>
        </ol>
        <h3>Exclusions (Apply to All Coverage Options).</h3>
        <ul>
          <li>
            Furniture made of particle board, pressed wood, or similar
            materials.
          </li>
          <li>Items found damaged in boxes not packed by Phoenix Moving.</li>
          <li>
            Mechanical or functional issues with electronics during transit or
            storage.
          </li>
          <li>
            Previously damaged, repaired, or fragile items without prior
            disclosure.
          </li>
          <li>Loose, unpacked items.</li>
        </ul>
        <h3>Important Rules.</h3>
        <ul>
          <li>
            Valuation does not cover customer-packed items, pre-existing damage,
            or excluded categories (see Section 17).
          </li>
          <li>
            Select your coverage option during booking. By proceeding with the
            move, you agree to these terms and waive any claims outside this
            policy.
          </li>
          <li>
            For questions or to upgrade coverage, contact us at{" "}
            <a href={`mailto:${companyEmail}`}>{companyEmail}</a>{" "}
          </li>
        </ul>
      </section>

      <section>
        <h2>Changes to Our Policy.</h2>
        <p>
          We may change our Privacy and Website Use Policy from time to time.
          The most current version of the Policy will govern our collection, use
          and disclosure of information about you and will be detailed here. If
          we make material changes to this Policy, we will notify you by email
          or by posting a notice here prior to the effective date of the change.
          By continuing to access or use the Service after those changes become
          effective, you agree to the revised Privacy and Website Use Policy.
        </p>
      </section>
      <i>This Policy was last modified on July 1, 2025.</i>
    </Section>
  );
}
