const MINIMUM_TIME_IN_MINUTES = 180;

const averageTime = {
  "Room or less (<300 cb.ft.)": 30,
  "Studio apartment": 70,
  "Small 1 Bedroom apartment": 120,
  "Large 1 Bedroom apartment": 120,
  "Small 2 Bedroom apartment": 120,
  "Large 2 Bedroom apartment": 130,
  "3 Bedroom apartment": 130,
  "2 Bedroom House/Townhouse": 180,
  "3 Bedroom House/Townhouse": 240,
  "4+ Bedroom House/Townhouse": 290,
  "Office / Commercial move": 220,
};

const averageTimeLongDistance = {
  "Room or less (<300 cb.ft.)": 60,
  "Studio apartment": 120,
  "Small 1 Bedroom apartment": 180,
  "Large 1 Bedroom apartment": 180,
  "Small 2 Bedroom apartment": 240,
  "Large 2 Bedroom apartment": 240,
  "3 Bedroom apartment": 240,
  "2 Bedroom House/Townhouse": 360,
  "3 Bedroom House/Townhouse": 480,
  "4+ Bedroom House/Townhouse": 540,
  "Office / Commercial move": 300,
};

const timeFrame = {
  "Room or less (<300 cb.ft.)": 0.5,
  "Studio apartment": 0.5,
  "Small 1 Bedroom apartment": 0.5,
  "Large 1 Bedroom apartment": 1.5,
  "Small 2 Bedroom apartment": 1.5,
  "Large 2 Bedroom apartment": 2,
  "3 Bedroom apartment": 2,
  "2 Bedroom House/Townhouse": 2,
  "3 Bedroom House/Townhouse": 2,
  "4+ Bedroom House/Townhouse": 2,
  "Office / Commercial move": 2,
};

const averageFloorTime = (size) => {
  if (!size) return {};
  let obj = {
    "storage unit": Math.round(averageTime[size] * 0.1),
    "private house": Math.round(averageTime[size] * 0.1),
    "elevator building": Math.round(averageTime[size] * 0.3),
    "1st/ground floor": Math.round(averageTime[size] * 0.1),
    "2nd floor": Math.round(averageTime[size] * 0.2),
    "3rd floor": Math.round(averageTime[size] * 0.3),
    "4th floor": Math.round(averageTime[size] * 0.4),
  };
  return obj;
};

const averageFloorTimeLongDistance = (size) => {
  if (!size) return {};
  let obj = {
    "elevator building": Math.round(averageTimeLongDistance[size] * 0.2),
    "private house": Math.round(averageTimeLongDistance[size] * 0.1),
    "storage unit": -10,
    "1st/ground floor": Math.round(averageTimeLongDistance[size] * 0.1),
    "2nd floor": Math.round(averageTimeLongDistance[size] * 0.2),
    "3rd floor": Math.round(averageTimeLongDistance[size] * 0.3),
    "4th floor": Math.round(averageTimeLongDistance[size] * 0.4),
  };
  return obj;
};

export function formatMinutesToQuarters(totalMinutes) {
  // 1. Round minutes up to the next quarter hour (using Math.ceil)
  // 292 / 15 ≈ 19.466...
  // Math.ceil(19.466...) = 20
  // 20 * 15 = 300 total minutes (rounded up)
  const roundedMinutes = Math.ceil(totalMinutes / 15) * 15;

  return roundedMinutes;
}

const roundTime = (hours) => {
  return Math.round(hours * 2) / 2;
};
const isLoading = (service) => {
  return service === "Loading Help";
};
const isUnloading = (service) => {
  return service === "Unloading Help";
};
const isPacking = (service) => {
  return service === "Packing Only";
};
const isInsideMove = (service) => {
  return service === "Inside Move";
};
const isMovingWithStorage = (service) => {
  return service === "Moving with Storage";
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

  // console.log("data", JSON.stringify(data, null, 2));

  if (travelTime.length == 0) return [];

  let travelTimeSum = formatMinutesToQuarters(
    travelTime.reduce((a, b) => a + b),
  );
  // console.log("ttSuma", travelTimeSum);
  if (isMovingWithStorage(movingService) && !isFlatRate) {
    travelTimeSum = travelTime[0] * 2;
  }

  let averageFloorTimeDest =
    toHouseType === "" ? 0 : averageFloorTime(movingSize)[toHouseType];

  // console.log("Avg Floor time dest", averageFloorTimeDest);
  let totalTimeInMinutes = 0;
  let averageLabourTime = averageTime[movingSize];
  let timeWindow =
    movingService === "Moving" || movingService === "Moving with Storage"
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
    timeBetween +
    travelTimeSum;

  // if (totalTimeInMinutes < 120) totalTimeInMinutes = 120;

  // console.log("avg labour", averageLabourTime);
  // console.log("avg floor pickup", averageFloorTime(movingSize)[fromHouseType]);
  // console.log("avg floor destination", averageFloorTimeDest);
  // console.log("tt suma", travelTimeSum);
  // console.log("time between", timeBetween);

  let totalTimeInHours = roundTime(totalTimeInMinutes / 60);
  let estimateTimeArray = [totalTimeInHours, totalTimeInHours + timeWindow];

  if (totalTimeInHours < MINIMUM_TIME_IN_MINUTES / 60) {
    totalTimeInHours = MINIMUM_TIME_IN_MINUTES / 60;
    estimateTimeArray = [MINIMUM_TIME_IN_MINUTES / 60];
  }

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

  // console.log(
  //   "formatMinutesToQuarters",
  //   formatMinutesToQuarters(travelTimeSum),
  // );

  // console.log("total Time in minutes --->", totalTimeInMinutes);

  // console.log("total Time in hours --->", totalTimeInHours);
  // console.log("time + window --->", totalTimeInHours + timeWindow);

  // if (totalTimeInHours + timeWindow <= MINIMUM_TIME_IN_MINUTES / 60)
  //   estimateTimeArray = [MINIMUM_TIME_IN_MINUTES / 60];
  return estimateTimeArray;
};

export const estimateJobTimeLongDistance = (data) => {
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
  if (isMovingWithStorage(movingService) && !isFlatRate)
    travelTimeSum = travelTime[0] * 2;

  let averageFloorTimeDest =
    toHouseType === ""
      ? 0
      : averageFloorTimeLongDistance(movingSize)[toHouseType];

  let totalTimeInMinutes = 0;
  let averageLabourTime = averageTimeLongDistance[movingSize];
  let timeWindow =
    movingService === "Moving" || movingService === "Moving with Storage"
      ? timeFrame[movingSize]
      : 0.5;

  if (isLoading(movingService))
    averageLabourTime = averageTimeLongDistance[movingSize] * 0.5;
  if (isUnloading(movingService) || isPacking(movingService))
    averageLabourTime = averageTimeLongDistance[movingSize] * 0.5;
  if (isInsideMove(movingService))
    averageLabourTime = averageTimeLongDistance[movingSize] * 0.2;

  totalTimeInMinutes =
    averageLabourTime +
    averageFloorTimeLongDistance(movingSize)[fromHouseType] +
    averageFloorTimeDest +
    travelTimeSum +
    timeBetween;

  let totalTimeInHours = roundTime(totalTimeInMinutes / 60);
  let estimateTimeArray = [totalTimeInHours, totalTimeInHours + timeWindow];

  if (totalTimeInHours + timeWindow <= 2) estimateTimeArray = [2];
  return estimateTimeArray;
};
