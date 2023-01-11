export default function LocalMoveQuote({ values }) {
  let oCity = values.originCity + ', ' + values.originState;
  let dCity = values.destinationCity
    ? values.destinationCity + ', ' + values.destinationState
    : null;
  let hideArrow = values.destinationCity !== '';
  // console.log(values);
  return (
    <div className="mt-6 p-1">
      <p className="text-xs text-gray-900">
        {values.service} a <b>{values.size}</b> from <b>{values.originFloor}</b>
        {dCity && (
          <>
            {' '}
            to <b>{values.destinationFloor}</b>
          </>
        )}
        . <br />
        {values.distanceBetween > 0
          ? `Distance - ${values.distanceBetween} miles.`
          : null}
      </p>
      <p className="mt-2 text-xs text-gray-900 font-semibold uppercase">
        {oCity}
        {hideArrow && <span className="mx-4">&#x2192;</span>}
        {dCity}
      </p>
      <dl className="divide-y divide-gray-200 mt-2">
        <div className="py-2 grid grid-cols-2 gap-4  items-center">
          <dt className="text-xs font-medium text-gray-700">
            <span className="text-palette-primary-500 text-base">
              {values.crewSize}
            </span>{' '}
            Movers crew
          </dt>
          <dd className="text-xs font-medium text-gray-700">
            {' '}
            <span className="text-palette-primary-500 text-base">
              {`$${values.rate}`}
            </span>{' '}
            /hour
          </dd>
        </div>
        <div className="py-2 grid grid-cols-2 gap-4  items-center">
          <dt className="text-xs font-medium text-gray-700">
            Estimate job time
          </dt>
          <dd className="text-xs font-medium text-gray-700">
            <span className="text-palette-primary-500 text-base">
              {values.estimateTime[0]}{' '}
              {values.estimateTime[1] ? '- ' + values.estimateTime[1] : null}
            </span>{' '}
            hours*
          </dd>
        </div>
        <div className="py-2 grid grid-cols-2 gap-4  items-center">
          <dt className="text-xs font-medium text-gray-700">Travel time</dt>
          <dd className="text-xs font-medium text-gray-700">
            {values.travelTime[0]}/{values.travelTime[1]} min.
          </dd>
        </div>
        <div className="py-2 grid grid-cols-2 gap-4  items-center">
          <dt className="text-xs font-medium text-gray-700">
            Estimated Quote:
          </dt>
          <dd className="text-xs font-medium text-gray-700">
            <span className="text-palette-primary-500 text-base">
              ${values.estimateQuote[0]}
              {values.estimateQuote[1]
                ? ' - $' + values.estimateQuote[1]
                : null}
            </span>
          </dd>
        </div>
        <div className="py-2 sm:py-5 ">
          <p className="mt-1 text-xs text-gray-400">
            *Please note, this quote is just an estimate and provided for your
            convenience only. Your final cost is based on hourly rate and actual
            time your move will take.
          </p>
        </div>
      </dl>
    </div>
  );
}
