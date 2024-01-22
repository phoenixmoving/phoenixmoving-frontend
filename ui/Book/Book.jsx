'use client';

import { AnimatePresence, motion, MotionConfig } from 'framer-motion';
import useMeasure from 'react-use-measure';
import { Toaster } from 'react-hot-toast';
import React, { useState } from 'react';
import { useJsApiLoader } from '@react-google-maps/api';
import { Formik, Form } from 'formik';
import Button from '@/ui/Button';
import validationSchema from './FormModel/validationSchema';
import sumbitFormModel from './FormModel/submitFormModel';
import formInitialValues from './FormModel/formInitialValues';
import FirstStep from './Forms/FirstStep';
import SecondStep from './Forms/SecondStep';
import ResultStep from './Forms/ResultStep';
import Addresses from './Forms/Addresses';
import ContactInfo from './Forms/ContactInfo';
import ReviewDetails from './Forms/ReviewDetails';

import { findTravelTime } from './utils/findTravelTime';
import { submitFormToDb } from './utils/submitFormToDb';

let duration = 0.5;

const steps = [
  'Get a Quote',
  'Fill Move Details',
  'Quote Result',
  'Fill Addresses',
  'Contact Information',
  'Review & submit',
];
const stepsButtons = [
  'Continue',
  'View Quote',
  'Continue',
  'Contact Info',
  'Review Quote',
  'Submit Request',
];

const { formId, formField } = sumbitFormModel;

function _renderStepContent(step, values, rates, prices) {
  // console.log(values);
  const showDeliveryDate = values.service === 'Moving with Storage';
  const showDestination =
    values.service === 'Moving with Storage' || values.service === 'Moving';

  switch (step) {
    case 0:
      return (
        <FirstStep
          formField={formField}
          showDeliveryDate={showDeliveryDate}
          showDestination={showDestination}
          rates={rates}
          prices={prices}
        />
      );
    case 1:
      return (
        <SecondStep formField={formField} showDestination={showDestination} />
      );
    case 2:
      return <ResultStep values={values} />;
    case 3:
      return (
        <Addresses
          formField={formField}
          values={values}
          showDestination={showDestination}
        />
      );
    case 4:
      return <ContactInfo formField={formField} />;
    case 5:
      return <ReviewDetails values={values} formField={formField} />;
    default:
      return <div>Not Found</div>;
  }
}

export default function Book({ rates, prices }) {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });
  const [activeStep, setActiveStep] = useState(0);
  const currentValidationSchema = validationSchema[activeStep];
  const isLastStep = activeStep === steps.length - 1;

  function merge(...schemas) {
    const [first, ...rest] = schemas;

    const merged = rest.reduce(
      (mergedSchemas, schema) => mergedSchemas.concat(schema),
      first,
    );

    return merged;
  }

  const merged = merge(
    validationSchema[0],
    validationSchema[1],
    validationSchema[2],
    validationSchema[3],
    validationSchema[4],
    validationSchema[5],
  );

  function _handleSubmit(values, actions) {
    if (isLastStep) {
      console.log('ok');
      // window.alert('ok');
      actions.setSubmitting(false);
      submitFormToDb(values, actions, activeStep, setActiveStep);
    } else if (activeStep === 0) {
      let originZip = `${values.originCity}, ${values.originState} ${values.originZip}, USA`;
      let destinationZip = `${values.destinationCity}, ${values.destinationState} ${values.destinationZip}, USA`;
      let service = values.service;
      if (isLoaded) {
        findTravelTime(
          originZip,
          destinationZip,
          service,
          activeStep,
          setActiveStep,
          actions,
        );
      }
    } else {
      setActiveStep(activeStep + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
    }
  }

  function _handleBack() {
    setActiveStep(activeStep - 1);
  }
  return (
    <React.Fragment>
      <Toaster />
      {/* <ResizablePanel> */}
      <div className="flex justify-center items-center w-full sm:w-[400px]">
        {/* relative */}
        <div className="w-full bg-white rounded-3xl shadow-3xl">
          {/* overflow-y-auto max-h-[525px] */}
          <React.Fragment>
            {activeStep === steps.length ? (
              <div className="text-center p-8">
                <img src="/hands.png" alt="" className="w-12 m-auto" />
                <p className="mt-4">We're on it!</p>
                <p className="mt-4">
                  Thanks for your submission. One of our moving specialists will
                  contact you shortly.
                </p>
                <Button
                  size="large"
                  component="a"
                  href="tel:(508)315-9458"
                  className="mt-4"
                  variant="soft"
                >
                  +1 (508) 315-9458
                </Button>
              </div>
            ) : (
              <Formik
                initialValues={formInitialValues}
                validationSchema={isLastStep ? merged : currentValidationSchema}
                onSubmit={_handleSubmit}
              >
                {({ isSubmitting, values, errors }) => {
                  // console.log(values);
                  // console.log(errors);
                  return (
                    <Form id={formId} autoComplete="off">
                      <MotionConfig transition={{ duration, type: 'tween' }}>
                        <ResizablePanel>
                          <p className="text-2xl font-semibold text-center mb-6">
                            {steps[activeStep]}
                          </p>

                          {_renderStepContent(
                            activeStep,
                            values,
                            rates,
                            prices,
                          )}

                          <div className="flex mt-10 gap-6 justify-between">
                            {activeStep !== 0 && (
                              <Button
                                type="button"
                                onClick={_handleBack}
                                // color="primary"
                                variant="outline"
                                className="w-full"
                                // size="small"
                              >
                                Back
                              </Button>
                            )}

                            <Button
                              type="submit"
                              color="primary"
                              className="w-full"
                              disabled={isSubmitting}
                              // size="small"
                            >
                              {isSubmitting
                                ? 'Loading...'
                                : stepsButtons[activeStep]}
                            </Button>
                          </div>
                          {activeStep === 0 ? (
                            <p className="text-slate-500 font-semmibold text-xs text-center mt-2">
                              Free instant quote at step 3
                            </p>
                          ) : (
                            <p className="text-slate-500 font-semmibold text-xs text-center mt-2">
                              step {activeStep + 1}/{steps.length}
                            </p>
                          )}
                        </ResizablePanel>
                      </MotionConfig>
                    </Form>
                  );
                }}
              </Formik>
            )}
          </React.Fragment>
        </div>
      </div>
    </React.Fragment>
  );
}

function ResizablePanel({ children }) {
  let [ref, { height }] = useMeasure();

  return (
    <motion.div
      animate={{ height: height || 'auto' }}
      className="relative overflow-hidden"
    >
      <AnimatePresence initial={false}>
        <motion.div
          // key={JSON.stringify(children, ignoreCircularReferences())}
          // initial={{
          //   x: 384,
          // }}
          // animate={{
          //   x: 0,
          //   // transition: { duration: duration / 2, delay: duration / 2 },
          // }}
          // exit={{
          //   x: -384,
          //   // transition: { duration: duration / 2 },
          // }}
          className="relative"
        >
          <div ref={ref} className="p-8">
            {children}
          </div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}

/*
  Replacer function to JSON.stringify that ignores
  circular references and internal React properties.
  https://github.com/facebook/react/issues/8669#issuecomment-531515508
*/
const ignoreCircularReferences = () => {
  const seen = new WeakSet();
  return (key, value) => {
    if (key.startsWith('_')) return; // Don't compare React's internal props.
    if (typeof value === 'object' && value !== null) {
      if (seen.has(value)) return;
      seen.add(value);
    }
    return value;
  };
};
