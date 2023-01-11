'use client';

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

const steps = [
  'Swift Estimate!',
  'Fill Move Details',
  'Calculator Result',
  'Fill Addresses',
  'Contact Information',
  'Review & sumbit',
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

function _renderStepContent(step, values, rates) {
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

export default function Book({ rates }) {
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
      window.alert('ok');
      actions.setSubmitting(false);
      submitFormToDb(values, actions, activeStep, setActiveStep);
    } else if (activeStep === 0) {
      let originZip = values.originZip;
      let destinationZip = values.destinationZip;
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
      <div className="flex justify-center items-center w-full sm:w-[400px]">
        {/* relative */}
        <div className="w-full bg-white p-4 rounded-2xl shadow-lg shadow-gray-900/5 overflow-y-auto max-h-[525px]">
          {/* overflow-y-auto max-h-[525px] */}
          <React.Fragment>
            {activeStep === steps.length ? (
              // <BookSuccess />
              <div>Success</div>
            ) : (
              <Formik
                initialValues={formInitialValues}
                validationSchema={isLastStep ? merged : currentValidationSchema}
                onSubmit={_handleSubmit}
              >
                {({ isSubmitting, values, errors }) => {
                  // console.log(values);
                  // console.log(values.deliveryDate);
                  return (
                    <Form id={formId} autoComplete="off">
                      <p className="text-2xl font-semibold text-center">
                        {steps[activeStep]}
                      </p>
                      {_renderStepContent(activeStep, values, rates)}
                      <div className="flex mt-6 gap-2 justify-between">
                        {activeStep !== 0 && (
                          <Button
                            type="button"
                            onClick={_handleBack}
                            color="primary"
                            variant="outline"
                            size="small"
                            className="w-full"
                          >
                            Back
                          </Button>
                        )}

                        <Button
                          type="submit"
                          color="primary"
                          size="small"
                          className="w-full"
                        >
                          {isSubmitting
                            ? 'Loading...'
                            : stepsButtons[activeStep]}
                        </Button>
                      </div>
                      {activeStep === 0 && (
                        <p className="text-gray-500 font-semmibold text-xs text-center mt-2">
                          Free quote at step 3
                        </p>
                      )}
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
