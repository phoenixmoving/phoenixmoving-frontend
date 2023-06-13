import { format, intervalToDuration } from 'date-fns';
import CheckBoxField from '../FormFields/CheckBoxField';

const formatQuote = (quote) => {
  return quote.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
};

const getDaysDiff = (startDate, endDate, dateFormat = 'YYYY-MM-DD') => {
  let res = intervalToDuration({
    start: new Date(startDate),
    end: new Date(endDate),
  });

  return res;
};

export default function ReviewDetails(props) {
  const {
    formField: { agreed },
    values,
  } = props;
  let oCity = `${values.originAddress} ${values.originCity}, ${values.originState} ${values.originZip}`;
  let dCity = values.destinationCity
    ? `${values.destinationAddress} ${values.destinationCity}, ${values.destinationState} ${values.destinationZip}`
    : null;
  let isFlatRate = values.isFlatRate;

  // console.log('review page,', values.movingDate);
  // console.log('review page,', values.deliveryDate);

  return (
    <div>
      <div className="py-2 flex justify-between items-center text-xs">
        <dt className="font-semibold">Name</dt>
        <dd className="text-end flex-1">{`${values.firstName} ${values.lastName}`}</dd>
      </div>
      <div className="py-2 flex justify-between items-center text-xs">
        <dt className="font-semibold">Email</dt>
        <dd className="text-end flex-1">{values.email}</dd>
      </div>
      <div className="py-2 flex justify-between items-center text-xs">
        <dt className="font-semibold">Phone</dt>
        <dd className="text-end flex-1">{values.phone}</dd>
      </div>
      <div className="border-t py-2 flex justify-between items-center text-xs">
        <dt className="font-semibold">Moving date</dt>
        <dd className="text-end flex-1">
          {format(values.movingDate, 'MMMM dd, yyyy')}
        </dd>
      </div>
      {values.deliveryDate && (
        <div className="py-2 flex justify-between items-center text-xs">
          <dt className="font-semibold">Delivery date</dt>
          <dd className="text-end flex-1">
            {format(values.deliveryDate, 'MMMM dd, yyyy')}
          </dd>
        </div>
      )}
      {values.deliveryDate && !values.isFlatRate && (
        <p className="text-xs italic mb-2">
          Delivery rate and time will depend on your final destination and date
          of delivery.
        </p>
      )}
      <div className="py-2 flex justify-between items-center text-xs">
        <dt className="font-semibold">Preferred start time</dt>
        <dd className="text-end flex-1">{values.startTime}</dd>
      </div>
      <div className="border-t py-2 flex justify-between items-center text-xs">
        <dt className="font-semibold">Origin</dt>
        <dd className="text-end flex-1">
          {oCity}
          <p className="text-xs text-gray-500">
            {`${values.originFloor}  #${values.originApt}`}
          </p>
        </dd>
      </div>
      {values.deliveryDate && (
        <div className="py-2 flex justify-between items-center text-xs">
          <dt className="font-semibold">Storage</dt>
          <dd className="text-end flex-1">
            Phoenix Moving Storage
            <p className="text-xs text-gray-500">
              {`*${
                getDaysDiff(values.movingDate, values.deliveryDate).days
              } days`}
            </p>
          </dd>
        </div>
      )}
      {dCity && (
        <div className="py-2 flex justify-between items-center text-xs">
          <dt className="font-semibold">Destination</dt>
          <dd className="text-end flex-1">
            {dCity}{' '}
            <p className="text-xs text-gray-500">
              {`${values.destinationFloor}  #${values.destinationApt}`}
            </p>
          </dd>
        </div>
      )}
      <div className="border-t py-2 flex justify-between items-center text-xs">
        <dt className="font-semibold">Service</dt>
        <dd className="text-end flex-1">{values.service}</dd>
      </div>
      <div className="py-2 flex justify-between items-center text-xs">
        <dt className="font-semibold">Size</dt>
        <dd className="text-end flex-1">{values.size}</dd>
      </div>
      {!isFlatRate && (
        <div className="py-2 flex justify-between items-center text-xs">
          <dt className="font-semibold">
            <span className="text-palette-primary-500 text-base font-semibold">
              {values.crewSize}
            </span>{' '}
            Movers crew
          </dt>
          <dd className="text-xs">
            {' '}
            <span className="text-palette-primary-500 text-base font-semibold">
              {`$${values.rate}`}
            </span>{' '}
            /hour
          </dd>
        </div>
      )}
      {!isFlatRate && (
        <div className="py-2 flex justify-between items-center text-xs">
          <dt className="font-semibold">Estimate job time</dt>
          <dd className="text-end flex-1">
            <span className="text-palette-primary-500 text-base font-semibold">
              {values.estimateTime[0]}{' '}
              {values.estimateTime[1] ? '- ' + values.estimateTime[1] : null}
            </span>{' '}
            hours*
          </dd>
        </div>
      )}
      {!isFlatRate && (
        <div className="py-2 flex justify-between items-center text-xs">
          <dt className="font-semibold">Travel time</dt>
          <dd className="text-end flex-1">
            {values.travelTime[0]}/{values.travelTime[1]} min.
          </dd>
        </div>
      )}
      {!isFlatRate && (
        <div className="border-b py-2 flex justify-between items-center text-xs">
          <dt className="font-semibold">Estimated Quote:</dt>
          <dd className="text-end flex-1">
            <span className="text-palette-primary-500 text-base font-semibold">
              ${values.estimateQuote[0]}
              {values.estimateQuote[1]
                ? ' - $' + values.estimateQuote[1]
                : null}
            </span>
          </dd>
        </div>
      )}
      {isFlatRate && (
        <div className="border-b py-2 flex justify-between items-center text-xs">
          <dt className="font-semibold">FLAT RATE</dt>
          <dd className="text-end flex-1">
            {values.estimateQuote[0] && (
              <span className="text-palette-primary-500 text-base font-semibold">
                ${formatQuote(values.estimateQuote[0])}
              </span>
            )}
          </dd>
        </div>
      )}
      <div className="border-b py-2 flex justify-between items-center text-xs">
        <dt className="font-semibold">Additional info</dt>
        <dd className="text-end flex-1">{values.additionalInfo}</dd>
      </div>
      <div className="py-2 sm:py-5 ">
        {!isFlatRate && (
          <p className="mt-1 text-xs text-gray-500 sm:mt-0">
            *Please note, this quote is just an estimate and provided for your
            convenience only. Your final cost is based on hourly rate and actual
            time your move will take.
          </p>
        )}
        {isFlatRate && (
          <p className="mt-1 text-xs text-gray-500 sm:mt-0">
            *Please note, the above information provides an estimated quote only
            and is subject to change in case of undisclosed or unpredicetd
            circumstances.
          </p>
        )}
      </div>
      <div>
        <CheckBoxField name={agreed.name} label={agreed.label} />
        <p className="mt-4 text-palette-primary-500 uppercase text-xs font-medium">
          No credit card required, no obligation!
        </p>
      </div>
    </div>
  );
}
