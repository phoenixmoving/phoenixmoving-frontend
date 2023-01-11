// import { getMinutes } from 'utils/getMinutes';
// import { getMiles } from 'utils/getMiles';
// import { isEmptyString } from 'utils/isEmptyString';
import toast from 'react-hot-toast';

const getMiles = (i) => {
  // Math.round(number * 10) / 10
  let num = i / 1609;
  return Math.round(num * 10) / 10;
};

const getMinutes = (i) => {
  return Math.round(i / 60 / 5) * 5;
};

const isEmptyString = (arr) => {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === '') return false;
  }
  return true;
};

export const findTravelTime = (
  originZip,
  destinationZip,
  movingService,
  activeStep,
  setActiveStep,
  actions
) => {
  let office = '02026';
  let fromZip = originZip;
  let toZip = destinationZip;
  let originsArray = [];
  let destinationsArray = [];

  if (toZip === '') {
    originsArray = [office];
    destinationsArray = [fromZip];
  } else {
    originsArray = [office, fromZip];
    destinationsArray = [fromZip, toZip];
  }

  const TravelTime = new window.google.maps.DistanceMatrixService();
  TravelTime.getDistanceMatrix(
    {
      origins: originsArray,
      destinations: destinationsArray,
      travelMode: 'DRIVING',
      unitSystem: window.google.maps.UnitSystem.IMPERIAL,
      region: 'US',
      avoidHighways: false,
      avoidTolls: false,
    },
    function (response, status) {
      if (status !== 'OK') {
        console.log('Error was:', status);
      } else {
        let fromHq = 20;
        let toHq = 20;
        let timeBetween = 0;
        let distanceBetween = 0;
        // console.log(response);
        if (
          toZip === '' &&
          isEmptyString(response.destinationAddresses) &&
          response.rows[0].elements[0].status !== 'ZERO_RESULTS'
        ) {
          fromHq = getMinutes(response.rows[0].elements[0].duration.value);
          if (fromHq < 20) fromHq = 20;
          toHq = fromHq;
          actions.setFieldValue('distanceBetween', distanceBetween);
          actions.setFieldValue('travelTime', [fromHq, toHq]);
          actions.setFieldValue('timeBetween', timeBetween);
          actions.setFieldValue('isFlatRate', false);

          setActiveStep(activeStep + 1);
          actions.setTouched({});
          actions.setSubmitting(false);

          // console.log('from HQ', fromHq);
          // console.log('to HQ', toHq);
          // console.log('time between', timeBetween);
          // console.log('distance between', distanceBetween);
        }
        //moving and moving with storage
        else if (
          isEmptyString(response.originAddresses) &&
          isEmptyString(response.destinationAddresses) &&
          response.rows[0].elements[0].status !== 'ZERO_RESULTS' &&
          response.rows[0].elements[1].status !== 'ZERO_RESULTS' &&
          response.rows[1].elements[1].status !== 'ZERO_RESULTS' &&
          response.rows[1].elements[0].status !== 'ZERO_RESULTS'
        ) {
          fromHq = getMinutes(response.rows[0].elements[0].duration.value);
          toHq = getMinutes(response.rows[0].elements[1].duration.value);
          distanceBetween = getMiles(
            response.rows[1].elements[1].distance.value
          );

          if (fromHq < 20) fromHq = 20;
          if (toHq < 20) toHq = 20;
          if (
            movingService === 'Moving with Storage' &&
            distanceBetween < 180
          ) {
            timeBetween = toHq;
          } else {
            timeBetween = getMinutes(
              response.rows[1].elements[1].duration.value
            );
          }
          if (distanceBetween > 180) {
            actions.setFieldValue('isFlatRate', true);
          } else {
            actions.setFieldValue('isFlatRate', false);
          }
          actions.setFieldValue('distanceBetween', distanceBetween);
          actions.setFieldValue('travelTime', [fromHq, toHq]);
          actions.setFieldValue('timeBetween', timeBetween);

          // console.log('from HQ', fromHq);
          // console.log('to HQ', toHq);
          // console.log('time between', timeBetween);
          // console.log('distance between', distanceBetween);

          setActiveStep(activeStep + 1);
          actions.setTouched({});
          actions.setSubmitting(false);
        } else {
          toast.error('Sorry, we could not calculate driving directions');
          actions.setTouched({});
          actions.setSubmitting(false);
        }
      }
    }
  );
};
