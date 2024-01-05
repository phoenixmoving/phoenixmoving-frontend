export default function LocalMoveQuote({ values }) {
  let oCity = values.originCity + ', ' + values.originState;
  let dCity = values.destinationCity
    ? values.destinationCity + ', ' + values.destinationState
    : null;
  let hideArrow = values.destinationCity !== '';
  // console.log(values);
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
      </p>
      <p className="text-slate-500">
        {values.distanceBetween > 0
          ? `Distance - ${values.distanceBetween} miles.`
          : null}
      </p>
      {/* <p className="mt-2 text-xs text-slate-900 font-semibold uppercase">
        {oCity}
        {hideArrow && <span className="mx-4">&#x2192;</span>}
        {dCity}
      </p> */}
      <p className="flex justify-center items-center gap-4 mt-4 font-semibold uppercase">
        {oCity}
        {hideArrow && <span>&#x2192;</span>}
        {dCity}
      </p>
      <dl className="divide-y divide-slate-200 mt-2 text-xs">
        <div className="py-2 flex justify-between items-center">
          <dt className="font-semibold">
            <span className="text-palette-primary-500 text-base">
              {values.crewSize}
            </span>{' '}
            Movers crew
          </dt>
          <dd className="text-end flex-1">
            {' '}
            <span className="text-palette-primary-500 text-base font-semibold">
              {`$${values.rate}`}
            </span>{' '}
            /hour
          </dd>
        </div>
        <div className="py-2 flex justify-between items-center">
          <dt className="font-semibold">Estimate job time</dt>
          <dd className="text-end flex-1">
            <span className="text-palette-primary-500 text-base font-semibold">
              {values.estimateTime[0]}{' '}
              {values.estimateTime[1] ? '- ' + values.estimateTime[1] : null}
            </span>{' '}
            hours*
          </dd>
        </div>
        <div className="py-2 flex justify-between items-center">
          <dt className="font-semibold">Travel time</dt>
          <dd className="flex flex-1 justify-end items-center">
            {values.travelTime[0]}/{values.travelTime[1]} mins.
            <span className="text-slate-500 relative inline-block group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z"
                  clipRule="evenodd"
                />
              </svg>

              <span className="invisible group-hover:visible w-[200px] absolute right-0 bottom-6 bg-slate-100 shadow-3xl rounded-xl py-1 px-2 text-xs text-white z-10 scale-0 transition-all group-hover:scale-100">
                <img src="/traveltime.png" className="w-full h-full" />
              </span>
            </span>
          </dd>
        </div>
        <div className="py-2 flex justify-between items-center">
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
        <p className="text-slate-500 py-2 sm:py-5">
          *Please note, this quote is just an estimate and provided for your
          convenience only. Your final cost is based on hourly rate and actual
          time your move will take.
        </p>
      </dl>
    </div>
  );
}
