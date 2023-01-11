import React, { useEffect, useCallback } from 'react';
import FlatRateQuote from './components/FlatRateQuote';
import LocalMoveQuote from './components/LocalMoveQuote';
import {
  getCrewSize,
  getCrewSizeLoadingUnloading,
  getCrewSizeFlatRate,
} from './getCrewSize';
import { estimateJobTime } from './getEstimateJobTime';
import { getEstimateQuote } from './getEstimateQuote';
import { useFormikContext } from 'formik';

const ResultStep = ({ values }) => {
  const formikProps = useFormikContext();

  useEffect(() => {
    findCrewSize();
  }, []);

  useEffect(() => {
    calculateJobTime();
  }, [formikProps.values.rate]);

  const findCrewSize = useCallback(() => {
    let crew = 0;
    if (values.destinationFloor === '') {
      crew = getCrewSizeLoadingUnloading(values.size, values.originFloor);
      // console.log('crew Size---> L U ', crew);
    } else if (values.isFlatRate) {
      crew = getCrewSizeFlatRate(
        values.size,
        values.originFloor,
        values.destinationFloor
      );
      // console.log('crew Size--->Flat rate', crew);
    } else {
      crew = getCrewSize(
        values.size,
        values.originFloor,
        values.destinationFloor
      );
      // console.log('crew Size---> Normal', crew);
    }
    formikProps.setFieldValue('crewSize', crew);
    formikProps.setFieldValue(
      'rate',
      parseInt(formikProps.values.rates[crew - 2])
    );
    return crew;
  }, [values]);

  const calculateJobTime = useCallback(() => {
    let data = {
      movingService: values.service,
      fromHouseType: values.originFloor,
      toHouseType: values.destinationFloor,
      movingSize: values.size,
      travelTime: values.travelTime,
      timeBetween: values.timeBetween,
      isFlatRate: values.isFlatRate,
    };
    let jobTime = estimateJobTime(data);

    formikProps.setFieldValue('estimateTime', jobTime);
    let quote = getEstimateQuote(
      values.distanceBetween,
      values.isFlatRate,
      jobTime,
      values.rate
    );
    formikProps.setFieldValue('estimateQuote', quote);
    return;
  }, [values]);

  return (
    <>
      {values.isFlatRate ? (
        <FlatRateQuote values={values} />
      ) : (
        <LocalMoveQuote values={values} />
      )}
    </>
  );
};

export default ResultStep;
