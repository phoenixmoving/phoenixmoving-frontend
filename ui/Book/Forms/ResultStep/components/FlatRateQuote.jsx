const formatQuote = (quote) => {
  return quote.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
};

export default function FlatRateQuote({ values }) {
  let oCity = values.originCity + ', ' + values.originState;
  let dCity = values.destinationCity
    ? values.destinationCity + ', ' + values.destinationState
    : null;
  let hideArrow = values.destinationCity !== '';
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
      <p className="mt-4 text-xs text-gray-900">
        The FLAT RATE for this move starts from:
      </p>
      <dl className="divide-y divide-gray-200 mt-2">
        <div className="py-2 grid grid-cols-2 gap-4 items-center">
          <dt className="text-xs font-medium text-gray-700">FLAT RATE</dt>
          <dd className="text-xs font-medium text-gray-700">
            {values.estimateQuote && values.estimateQuote[0] && (
              <span className="text-palette-primary-500 text-base">
                ${formatQuote(values.estimateQuote[0])}
              </span>
            )}
          </dd>
        </div>
        <p
          className="mb-4 mt-4 text-xs text-gray-500"
          style={{ border: 'none' }}
        >
          {values.distanceBetween > 500
            ? '2+ Days Delivery'
            : 'Same/Next Day Delivery'}
        </p>
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
