'use client';
import { useField, useFormikContext } from 'formik';
import clsx from 'clsx';
// import useSWR from 'swr';
import CalendarWithRates from '@/ui/CalendarWithRates';
import { useState } from 'react';
import { format } from 'date-fns';

const fetcher = (url) => fetch(url).then((res) => res.json());

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

  const { label, placeholder, rates } = props;

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
        htmlFor={field}
        className="block text-xs font-semibold text-gray-700"
      >
        {label}
        <input
          {...field}
          value={field.value ? format(field.value, 'MM-dd-yyyy') : ''}
          inputMode="none"
          placeholder={placeholder}
          type="text"
          className={clsx(
            'mt-1 block w-full rounded-md border-gray-300 font-normal placeholder:text-gray-400 py-2 pl-3 pr-3 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm caret-transparent',
            {
              'text-gray-400': field.value === '',
              'border-red-500 bg-red-50': isError,
              'border-green-500 bg-green-50': isSuccess,
            }
          )}
          onClick={handleOpen}
        />
      </label>
      {open && (
        <CalendarWithRates
          close={handleClose}
          hanldeChange={hanldeChange}
          pickedDay={field.value}
          movingDate={movingDate}
          isDelivery={field.name === 'deliveryDate'}
          rates={rates}
          // error={ratesError}
        />
      )}
    </>
  );
}
