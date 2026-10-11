"use client";

// import { MotionConfig } from "framer-motion";
// import useMeasure from "react-use-measure";
// import { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
// import { useJsApiLoader } from "@react-google-maps/api";
// import { Formik, Form } from "formik";
// import validationSchema from "./FormModel/validationSchema";
// import sumbitFormModel from "./FormModel/submitFormModel";
// import formInitialValues from "./FormModel/formInitialValues";
// import FirstStep from "./Forms/FirstStep";
// import SecondStep from "./Forms/SecondStep";
// import ResultStep from "./Forms/ResultStep";
// import Addresses from "./Forms/Addresses";
// import ContactInfo from "./Forms/ContactInfo";
// import ReviewDetails from "./Forms/ReviewDetails";
// import { Button } from "@/components/ui/button";

// import { findTravelTime } from "./utils/findTravelTime";
// import { submitFormToDb } from "./utils/submitFormToDb";
// import { useQuery } from "@tanstack/react-query";
// import { fetchPrices, fetchRates } from "@/api";
import Script from "next/script";

// let duration = 0.5;

// const steps = [
//   "Get a Quote",
//   "Fill Move Details",
//   "Quote Result",
//   "Fill Addresses",
//   "Contact Information",
//   "Review & submit",
// ];
// const stepsButtons = [
//   "Continue",
//   "View Quote",
//   "Continue",
//   "Contact Info",
//   "Review Quote",
//   "Submit Request",
// ];

// const { formId, formField } = sumbitFormModel;

// function _renderStepContent(
//   step: number,
//   values: any,
//   rates: any,
//   prices: any,
// ) {
//   console.log(values);
//   const showDeliveryDate = values.service === "Moving with Storage";
//   const showDestination =
//     values.service === "Moving with Storage" || values.service === "Moving";

//   switch (step) {
//     case 0:
//       return (
//         <FirstStep
//           formField={formField}
//           showDeliveryDate={showDeliveryDate}
//           showDestination={showDestination}
//           rates={rates}
//           prices={prices}
//         />
//       );
//     case 1:
//       return (
//         <SecondStep formField={formField} showDestination={showDestination} />
//       );
//     case 2:
//       return <ResultStep values={values} />;
//     case 3:
//       return (
//         <Addresses
//           formField={formField}
//           values={values}
//           showDestination={showDestination}
//         />
//       );
//     case 4:
//       return <ContactInfo formField={formField} />;
//     case 5:
//       return <ReviewDetails values={values} formField={formField} />;
//     default:
//       return <div>Not Found</div>;
//   }
// }

export default function Book() {
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    // 1. Check if the script is loaded and the global init function exists
    // Note: If gophoenixmoving uses a different init name, we handle it here
    const globalWin = window as any;

    if (scriptLoaded) {
      // Some scripts auto-run on load. If yours doesn't, we trigger it manually:
      if (globalWin.initializeBookingWidget) {
        globalWin.initializeBookingWidget();
      } else if (globalWin.initBookingWidget) {
        globalWin.initBookingWidget();
      }

      // Optional: If the script auto-executes on window load, we can force-trigger its entry point
      // by dispatching a custom event or calling the script's global setup if it exists.
    }
  }, [scriptLoaded]);

  return (
    <>
      <div className="min-h-132 w-full max-w-sm max-lg:mx-auto lg:ml-auto">
        <div className="booking-widget-container"></div>
      </div>
      {/* 
      <Script
        src="http://app.gophoenixmoving.com/book-form-widget.js"
        strategy="afterInteractive" // Loads after the page becomes interactive
        onLoad={() => {
          // 3. Initialize the form if the script requires a manual function call
          if (window.initializeExternalForm) {
            window.initializeExternalForm({
              targetId: "my-external-form-placeholder",
              formId: "12345",
            });
          }
        }}
      /> */}

      <Script
        src="http://app.gophoenixmoving.com/book-form-widget.js"
        strategy="afterInteractive"
        // Runs on initial page load
        onLoad={() => setScriptLoaded(true)}
        // Runs if the script is already cached/loaded when navigating back
        onReady={() => setScriptLoaded(true)}
      />
    </>
  );
}

// function ResizablePanel({ children }: { children: React.ReactNode }) {
//   let [ref] = useMeasure();

//   return (
//     <div ref={ref} className="p-8">
//       {children}
//     </div>
//     // <motion.div animate={{ height: height || "auto" }} className="relative">
//     //   <AnimatePresence initial={false}>
//     //     <motion.div
//     //       // key={JSON.stringify(children, ignoreCircularReferences())}
//     //       // initial={{
//     //       //   x: 384,
//     //       // }}
//     //       // animate={{
//     //       //   x: 0,
//     //       //   // transition: { duration: duration / 2, delay: duration / 2 },
//     //       // }}
//     //       // exit={{
//     //       //   x: -384,
//     //       //   // transition: { duration: duration / 2 },
//     //       // }}
//     //       // className="relative"
//     //     >
//     //       <div ref={ref} className="p-8">
//     //         {children}
//     //       </div>
//     //     </motion.div>
//     //   </AnimatePresence>
//     // </motion.div>
//   );
// }

/*
  Replacer function to JSON.stringify that ignores
  circular references and internal React properties.
  https://github.com/facebook/react/issues/8669#issuecomment-531515508
*/
// const ignoreCircularReferences = () => {
//   const seen = new WeakSet();
//   return (key, value) => {
//     if (key.startsWith('_')) return; // Don't compare React's internal props.
//     if (typeof value === 'object' && value !== null) {
//       if (seen.has(value)) return;
//       seen.add(value);
//     }
//     return value;
//   };
// };
