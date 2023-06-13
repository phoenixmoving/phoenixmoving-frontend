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
    <div className="text-sm">
      <p>
        {values.service} a <b>{values.size}</b> from <b>{values.originFloor}</b>
        {dCity && (
          <>
            {' '}
            to <b>{values.destinationFloor}</b>
          </>
        )}
        .
        {/* <br />
        {values.distanceBetween > 0
          ? `Distance - ${values.distanceBetween} miles.`
          : null} */}
      </p>
      <p className="text-gray-500">
        {values.distanceBetween > 0
          ? `Distance - ${values.distanceBetween} miles.`
          : null}
      </p>
      <p className="flex justify-center items-center gap-4 mt-4 font-semibold uppercase">
        {oCity}
        {hideArrow && <span>&#x2192;</span>}
        {dCity}
      </p>
      <p className="mt-2">The FLAT RATE for this move starts from:</p>
      {/* <dl className="divide-y divide-gray-200 mt-2"> */}
      <div className="py-4 flex justify-between items-center">
        <p className="font-semibold">FLAT RATE</p>
        <p className="text-end flex-1">
          {values.estimateQuote && values.estimateQuote[0] && (
            <span className="text-palette-primary-500 font-semibold text-base">
              ${formatQuote(values.estimateQuote[0])}
            </span>
          )}
        </p>
      </div>
      <p className="py-4 text-gray-500 border-b">
        {values.distanceBetween > 500
          ? '2+ Days Delivery'
          : 'Same/Next Day Delivery'}
      </p>
      <p className="text-gray-500 py-2 sm:py-5">
        *Please note, the above information provides an estimated quote only and
        is subject to change. The final Flat Price will be determined based on
        actual inventory and specific moving loads.
      </p>
      {/* </dl> */}
    </div>
  );
}
