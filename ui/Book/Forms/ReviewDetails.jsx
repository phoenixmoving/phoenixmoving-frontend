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
  let oCity = `${values.originAddress} ${values.originCity}, ${values.originState}`;
  let dCity = values.destinationCity
    ? `${values.destinationAddress} ${values.destinationCity}, ${values.destinationState}`
    : null;
  let isFlatRate = values.isFlatRate;

  // console.log('review page,', values.movingDate);
  // console.log('review page,', values.deliveryDate);

  return (
    <div className="mt-6 p-1">
      <dl className="mt-2">
        <div className="py-2 grid grid-cols-2 gap-4 items-center">
          <dt className="text-xs text-gray-900">Name</dt>
          <dd className="text-xs text-gray-900">{`${values.firstName} ${values.lastName}`}</dd>
        </div>
        <div className="py-2 grid grid-cols-2 gap-4 items-center">
          <dt className="text-xs text-gray-900">Email</dt>
          <dd className="text-xs text-gray-900">{values.email}</dd>
        </div>
        <div className="py-2 grid grid-cols-2 gap-4 items-center">
          <dt className="text-xs text-gray-900">Phone</dt>
          <dd className="text-xs text-gray-900">{values.phone}</dd>
        </div>
        <div className="py-2 grid grid-cols-2 gap-4 items-center border-t">
          <dt className="text-xs text-gray-900">Moving date</dt>
          <dd className="text-xs text-gray-900">
            {format(values.movingDate, 'MMMM dd, yyyy')}
          </dd>
        </div>
        {values.deliveryDate && (
          <div className="py-2 grid grid-cols-2 gap-4 items-center">
            <dt className="text-xs text-gray-900">Delivery date</dt>
            <dd className="text-xs text-gray-900">
              {format(values.deliveryDate, 'MMMM dd, yyyy')}
            </dd>
          </div>
        )}
        {values.deliveryDate && !values.isFlatRate && (
          <p className="text-xs text-gray-900 mb-2">
            Delivery rate and time will depend on your final destination and
            date of delivery.
          </p>
        )}
        <div className="py-2 grid grid-cols-2 gap-4 items-center">
          <dt className="text-xs text-gray-900">Preferred start time</dt>
          <dd className="text-xs text-gray-900">{values.startTime}</dd>
        </div>
        <div className="py-2 grid grid-cols-2 gap-4 items-center border-t">
          <dt className="text-xs text-gray-900">Origin</dt>
          <dd className="text-xs text-gray-900">
            {oCity}
            <p className="text-xs text-gray-400">
              {`${values.originFloor}  #${values.originApt}`}
            </p>
          </dd>
        </div>
        {values.deliveryDate && (
          <div className="py-2 grid grid-cols-2 gap-4 items-center">
            <dt className="text-xs text-gray-900">Storage</dt>
            <dd className="text-xs text-gray-900">
              Phoenix Moving Storage
              <p className="text-xs text-gray-400">
                {`*${
                  getDaysDiff(values.movingDate, values.deliveryDate).days
                } days`}
              </p>
            </dd>
          </div>
        )}
        {dCity && (
          <div className="py-2 grid grid-cols-2 gap-4 items-center">
            <dt className="text-xs text-gray-900">Destination</dt>
            <dd className="text-xs text-gray-900">
              {dCity}{' '}
              <p className="text-xs text-gray-400">
                {`${values.destinationFloor}  #${values.destinationApt}`}
              </p>
            </dd>
          </div>
        )}
        <div className="py-2 grid grid-cols-2 gap-4 items-center border-t">
          <dt className="text-xs text-gray-900">Service</dt>
          <dd className="text-xs text-gray-900">{values.service}</dd>
        </div>
        <div className="py-2 grid grid-cols-2 gap-4 items-center">
          <dt className="text-xs text-gray-900">Size</dt>
          <dd className="text-xs text-gray-900">{values.size}</dd>
        </div>
        {!isFlatRate && (
          <div className="py-2 grid grid-cols-2 gap-4 items-center">
            <dt className="text-xs text-gray-900">
              <span className="text-palette-primary-500 text-base">
                {values.crewSize}
              </span>{' '}
              Movers crew
            </dt>
            <dd className="text-xs text-gray-900">
              {' '}
              <span className="text-palette-primary-500 text-base">
                {`$${values.rate}`}
              </span>{' '}
              /hour
            </dd>
          </div>
        )}
        {!isFlatRate && (
          <div className="py-2 grid grid-cols-2 gap-4 items-center">
            <dt className="text-xs text-gray-900">Estimate job time</dt>
            <dd className="text-xs text-gray-900">
              <span className="text-palette-primary-500 text-base">
                {values.estimateTime[0]}{' '}
                {values.estimateTime[1] ? '- ' + values.estimateTime[1] : null}
              </span>{' '}
              hours*
            </dd>
          </div>
        )}
        {!isFlatRate && (
          <div className="py-2 grid grid-cols-2 gap-4 items-center">
            <dt className="text-xs text-gray-900">Travel time</dt>
            <dd className="text-xs text-gray-900">
              {values.travelTime[0]}/{values.travelTime[1]} min.
            </dd>
          </div>
        )}
        {!isFlatRate && (
          <div className="py-2 grid grid-cols-2 gap-4 items-center border-b">
            <dt className="text-xs text-gray-900">Estimated Quote:</dt>
            <dd className="text-xs text-gray-900">
              <span className="text-palette-primary-500 text-base">
                ${values.estimateQuote[0]}
                {values.estimateQuote[1]
                  ? ' - $' + values.estimateQuote[1]
                  : null}
              </span>
            </dd>
          </div>
        )}
        {isFlatRate && (
          <div className="py-2 grid grid-cols-2 gap-4items-center border-b">
            <dt className="text-xs text-gray-900">FLAT RATE</dt>
            <dd className="text-xs text-gray-500">
              {values.estimateQuote[0] && (
                <span className="text-palette-primary-500 text-base">
                  ${formatQuote(values.estimateQuote[0])}
                </span>
              )}
            </dd>
          </div>
        )}
        <div className="py-2 grid grid-cols-2 gap-4items-center border-b">
          <dt className="text-xs text-gray-900">Additional info</dt>
          <dd className="text-xs text-gray-500">{values.additionalInfo}</dd>
        </div>
        <div className="py-2 sm:py-5 ">
          {!isFlatRate && (
            <p className="mt-1 text-xs text-gray-400 sm:mt-0">
              *Please note, this quote is just an estimate and provided for your
              convenience only. Your final cost is based on hourly rate and
              actual time your move will take.
            </p>
          )}
          {isFlatRate && (
            <p className="mt-1 text-xs text-gray-400 sm:mt-0">
              *Please note, the above information provides an estimated quote
              only and is subject to change in case of undisclosed or
              unpredicetd circumstances.
            </p>
          )}
        </div>
        <div>
          <CheckBoxField name={agreed.name} label={agreed.label} />
          <p className="mt-4 text-palette-primary-500 uppercase text-xs">
            No credit card required, no obligation!
          </p>
        </div>
      </dl>
    </div>
  );
}
