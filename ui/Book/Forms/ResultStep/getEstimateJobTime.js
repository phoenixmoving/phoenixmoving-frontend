const averageTime = {
  'Room or less (partial move)': 30,
  'Studio apartment': 60,
  '1 Bedroom apartment': 60,
  '2 Bedroom apartment': 70,
  '2 Bedroom House/Townhouse': 140,
  '3+ Bedroom apartment': 160,
  '3 Bedroom House/Townhouse': 230,
  '4+ Bedroom House/Townhouse': 320,
  'Office / Commercial space': 220,
};

const timeFrame = {
  'Room or less (partial move)': 0.5,
  'Studio apartment': 1,
  '1 Bedroom apartment': 1.5,
  '2 Bedroom apartment': 2,
  '2 Bedroom House/Townhouse': 2,
  '3+ Bedroom apartment': 2,
  '3 Bedroom House/Townhouse': 2,
  '4+ Bedroom House/Townhouse': 2,
  'Office / Commercial space': 2,
};

const averageFloorTime = (size) => {
  if (!size) return {};
  let obj = {
    'elevator building': Math.round(averageTime[size] * 0.2),
    'private house': Math.round(averageTime[size] * 0.1),
    'storage unit': -10,
    '1st/ground floor': Math.round(averageTime[size] * 0.1),
    '2nd floor': Math.round(averageTime[size] * 0.2),
    '3rd floor': Math.round(averageTime[size] * 0.3),
    '4th floor': Math.round(averageTime[size] * 0.4),
  };
  return obj;
};

const roundTime = (hours) => {
  return Math.round(hours * 2) / 2;
};
const isLoading = (service) => {
  return service === 'Loading Help';
};
const isUnloading = (service) => {
  return service === 'Unloading Help';
};
const isPacking = (service) => {
  return service === 'Packing Only';
};
const isInsideMove = (service) => {
  return service === 'Inside Move';
};
const isMovingWithStorage = (service) => {
  return service === 'Moving with Storage';
};

export const estimateJobTime = (data) => {
  //   console.log(data);
  //   return;
  const {
    movingService,
    fromHouseType,
    toHouseType,
    movingSize,
    travelTime,
    timeBetween,
    isFlatRate,
  } = data;

  if (travelTime.length == 0) return [];

  let travelTimeSum = travelTime.reduce((a, b) => a + b);
  // console.log("ttSuma", travelTimeSum);
  if (isMovingWithStorage(movingService) && !isFlatRate)
    travelTimeSum = travelTime[0] * 2;

  let averageFloorTimeDest =
    toHouseType === '' ? 0 : averageFloorTime(movingSize)[toHouseType];

  // console.log("Avg Floor time dest", averageFloorTimeDest);
  let totalTimeInMinutes = 0;
  let averageLabourTime = averageTime[movingSize];
  let timeWindow =
    movingService === 'Moving' || movingService === 'Moving with Storage'
      ? timeFrame[movingSize]
      : 0.5;

  if (isLoading(movingService))
    averageLabourTime = averageTime[movingSize] * 0.5;
  if (isUnloading(movingService) || isPacking(movingService))
    averageLabourTime = averageTime[movingSize] * 0.5;
  if (isInsideMove(movingService))
    averageLabourTime = averageTime[movingSize] * 0.2;

  totalTimeInMinutes =
    averageLabourTime +
    averageFloorTime(movingSize)[fromHouseType] +
    averageFloorTimeDest +
    travelTimeSum +
    timeBetween;

  // console.log('avg labour', averageLabourTime);
  // console.log('avg floor pickup', averageFloorTime(movingSize)[fromHouseType]);
  // console.log('avg floor destination', averageFloorTimeDest);
  // console.log('tt suma', travelTimeSum);
  // console.log('time between', timeBetween);

  let totalTimeInHours = roundTime(totalTimeInMinutes / 60);
  let estimateTimeArray = [totalTimeInHours, totalTimeInHours + timeWindow];
  //   if (movingService === "Moving" || movingService === "Moving with Storage") {
  //     estimateTimeArray = [
  //       totalTimeInHours,
  //       totalTimeInHours + timeFrame[movingSize],
  //     ];
  //   } else {
  //     estimateTimeArray = [
  //       totalTimeInHours,
  //       totalTimeInHours + timeFrame[movingSize] - 0.5,
  //     ];
  //   }

  // console.log('total Time in minutes --->', totalTimeInMinutes);

  // console.log('total Time in hours --->', totalTimeInHours);
  // console.log('time + window --->', totalTimeInHours + timeWindow);

  if (totalTimeInHours + timeWindow <= 2) estimateTimeArray = [2];
  return estimateTimeArray;
};
