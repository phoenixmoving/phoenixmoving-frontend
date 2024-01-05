'use client';
import { useField, useFormikContext } from 'formik';
import clsx from 'clsx';
// import useSWR from 'swr';
import CalendarWithRates from '@/ui/CalendarWithRates';
import { useState } from 'react';
import { format } from 'date-fns';
import { CalendarDaysIcon } from '@heroicons/react/24/outline';
// import { CalendarDaysIcon } from '@heroicons/react/20/solid';

// const fetcher = (url) => fetch(url).then((res) => res.json());

export default function CustomDatePicker(props) {
  const [open, setOpen] = useState();
  const [field, meta] = useField(props);
  const { touched, error } = meta;
  const isError = touched && Boolean(error);
  const isSuccess = touched && !Boolean(error);
  const formikProps = useFormikContext();
  // const { data, error: ratesError } = useSWR(
  //   `${process.env.NEXT_PUBLIC_BACK_END_API}/rates`,
  //   fetcher
  // );

  const movingDate = formikProps.values.movingDate;

  const { label, placeholder, rates, prices } = props;

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const hanldeChange = (date) => {
    // console.log(format(date, "yyyy-MM-dd'T'00:00:00"));
    const formattedDate = format(date, 'MM/dd/yyyy');
    const rateArray = rates.find((r) => r.date === formattedDate);

    formikProps.setFieldValue('rates', rateArray.rates);
    formikProps.setFieldValue(field.name, date);

    handleClose();
  };

  return (
    <>
      <label
        className="block text-sm font-medium leading-6"
        htmlFor={field.name}
      >
        {label}
      </label>
      <div className="relative rounded-md">
        <div className="z-10 pointer-events-none absolute inset-y-0 left-0 mt-1 flex items-center pl-3">
          <CalendarDaysIcon
            // className="h-4 w-4"
            className={clsx('h-5 w-5', {
              'text-slate-400': field.value === '',
              'text-slate-900': isError,
              'text-slate-900': isSuccess,
            })}
            aria-hidden="true"
          />
        </div>
        <input
          {...field}
          id={field.name}
          value={field.value ? format(field.value, 'MMM dd, yyyy') : ''}
          // inputMode="none"
          placeholder={placeholder}
          type="text"
          className={clsx(
            'relative mt-1 lock w-full rounded-md border-0 bg-slate-100 font-normal placeholder:text-slate-400 py-2 pl-10 pr-3 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm caret-transparent',
            {
              'text-slate-400': field.value === '',
              'shadow-inner !bg-red-50': isError,
              'shadow-inner !bg-green-50': isSuccess,
            },
          )}
          onClick={handleOpen}
          readOnly
        />
      </div>
      {/* <input
        id={field.name}
        {...field}
        value={field.value ? format(field.value, 'MMM dd, yyyy') : ''}
        inputMode="none"
        placeholder={placeholder}
        type="text"
        className={clsx(
          'relative mt-1 block w-full rounded-md border-0 bg-slate-100 font-normal placeholder:text-slate-400 py-2 pl-3 pr-3 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm caret-transparent',
          {
            'text-slate-400': field.value === '',
            'shadow-inner bg-red-100': isError,
            'shadow-inner bg-green-100': isSuccess,
          },
        )}
        onClick={handleOpen}
        readOnly
      /> */}

      {open && (
        <CalendarWithRates
          close={handleClose}
          hanldeChange={hanldeChange}
          pickedDay={field.value}
          movingDate={movingDate}
          isDelivery={field.name === 'deliveryDate'}
          rates={rates}
          prices={prices}
        />
      )}
    </>
  );
}
