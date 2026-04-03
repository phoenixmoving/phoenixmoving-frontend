const roundAmount = (amount: number, rate: string) => {
  return Math.floor(amount * parseInt(rate));
};

export const getEstimateQuote = (distance: number, isFlatRate: boolean, estimateTime: number[], rate: string) => {
  if (estimateTime.length === 0) return [];
  let estimateQuoteArray = [];
  let oneDollarPerMile = Math.floor(distance * 2 * 0.6);
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
