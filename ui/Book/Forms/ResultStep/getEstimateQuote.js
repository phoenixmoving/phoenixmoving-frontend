const roundAmount = (amount, rate) => {
  return Math.floor(amount * parseInt(rate));
};

export const getEstimateQuote = (distance, isFlatRate, estimateTime, rate) => {
  // console.log(rate);
  if (estimateTime.length === 0) return [];
  let estimateQuoteArray = [];
  let oneDollarPerMile = Math.floor(distance / 50) * 50;
  if (oneDollarPerMile < 300) {
    oneDollarPerMile += 300;
  }
  // let addTime = Math.ceil(distance / 50) * 50 * 5;
  // console.log('dollar per mile--->', oneDollarPerMile);
  if (isFlatRate) {
    estimateQuoteArray = [
      Math.ceil((roundAmount(estimateTime[0], rate) + oneDollarPerMile) / 50) *
        50,
    ];
  } else {
    estimateQuoteArray = [
      roundAmount(estimateTime[0], rate),
      roundAmount(estimateTime[1], rate),
    ];
  }
  return estimateQuoteArray;
};
