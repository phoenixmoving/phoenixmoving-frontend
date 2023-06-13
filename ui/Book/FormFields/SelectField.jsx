import { useField, useFormikContext } from 'formik';
import React from 'react';
import clsx from 'clsx';

export default function SelectField(props) {
  const { label, options, icon } = props;
  const [field, meta] = useField(props);
  const { value, name } = field;
  const { touched, error } = meta;
  const isError = touched && Boolean(error);
  const isSuccess = touched && !Boolean(error);
  const formikProps = useFormikContext();

  function handleChnage(e) {
    const val = e.target.value;
    const removeToZip = val.localeCompare('Moving') !== 0;
    const removeDeliveryDate = val.localeCompare('Moving with Storage') !== 0;

    if (name === 'service') {
      if (removeToZip && removeDeliveryDate) {
        formikProps.setFieldValue(`deliveryDate`, '');
        formikProps.setFieldValue(`destinationAddress`, '');
        formikProps.setFieldValue(`destinationCity`, '');
        formikProps.setFieldValue(`destinationState`, '');
        formikProps.setFieldValue(`destinationZip`, '');
        formikProps.setFieldValue(`destinationFloor`, '');
        formikProps.setFieldValue(`destinationApt`, '');
      }
      if (removeDeliveryDate) {
        formikProps.setFieldValue(`deliveryDate`, '');
      }
    }
    field.onChange(e);
  }

  return (
    <>
      <label
        htmlFor={field.name}
        className="block text-sm font-medium leading-6"
      >
        {label}
      </label>
      <div className="relative rounded-md">
        <div className="z-10 pointer-events-none absolute inset-y-0 left-0 mt-1 flex items-center pl-3">
          {/* {icon &&
            React.createElement(icon, { width: 12, height: 12, color: '#000' })} */}
          {icon && (
            <props.icon
              className={clsx('h-4 w-4 stroke-[1.5]', {
                'text-gray-400': field.value === '',
                'text-gray-900': isError,
                'text-gray-900': isSuccess,
              })}
              aria-hidden="true"
            />
          )}
        </div>
        <select
          {...field}
          id={field.name}
          value={value}
          onChange={handleChnage}
          className={clsx(
            'relative mt-1 lock w-full rounded-md border-0 bg-gray-100 font-normal placeholder:text-gray-400 py-2 pl-10 pr-3 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm',
            {
              'text-gray-400': value === '',
              'shadow-inner bg-red-50': isError,
              'shadow-inner bg-green-50': isSuccess,
            },
          )}
        >
          {options.map((o) => {
            return (
              <option key={o.label} disabled={o.value === ''} value={o.value}>
                {o.label}
              </option>
            );
          })}
        </select>
      </div>
      {/* <select
        {...field}
        id={field.name}
        value={value}
        onChange={handleChnage}
        className={clsx(
          'mt-1 block w-full rounded-md border-0 bg-gray-100 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm',
          {
            'text-gray-400': value === '',
            'shadow-inner bg-red-100': isError,
            'shadow-inner bg-green-100': isSuccess,
          },
        )}
      >
        {options.map((o) => {
          return (
            <option key={o.label} disabled={o.value === ''} value={o.value}>
              {o.label}
            </option>
          );
        })}
      </select> */}
    </>
  );
}
