// 'use client';

import { useField, useFormikContext } from 'formik';
import { RadioGroup } from '@headlessui/react';
import clsx from 'clsx';
import { useState } from 'react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function FloorSelect(props) {
  const { label, options } = props;
  const [field, meta] = useField(props);
  const { value, name } = field;
  const { touched, error } = meta;
  const isError = touched && Boolean(error);
  const isSuccess = touched && !Boolean(error);
  const formikProps = useFormikContext();
  const [mem, setMem] = useState(options[2]);

  function handleChange(e) {
    formikProps.setFieldValue(name, e.value);
    setMem(e);
  }

  return (
    <>
      <label htmlFor={field} className="block text-sm font-b text-gray-700">
        {label}
      </label>
      <RadioGroup onChange={handleChange} value={mem} className="mt-1">
        <RadioGroup.Label className="sr-only">{label}</RadioGroup.Label>
        <div className="flex gap-1 justify-between">
          {options.map((option) => (
            <RadioGroup.Option
              key={option.value}
              value={option}
              className={({ active, checked }) =>
                classNames(
                  checked
                    ? 'bg-indigo-600 border-transparent text-white hover:bg-indigo-700'
                    : 'bg-white border-gray-300 text-gray-900 hover:bg-gray-100',
                  'w-fit cursor-pointer focus:outline-none border rounded-lg py-[10px] px-[10px] sm:px-[8px] flex items-center justify-center text-xs sm:flex-1'
                )
              }
              //   disabled={!option.inStock}
            >
              <RadioGroup.Label as="span">{option.label}</RadioGroup.Label>
            </RadioGroup.Option>
          ))}
        </div>
      </RadioGroup>
      {/* <label
        htmlFor={field}
        className="block text-sm font-medium text-gray-700"
      >
        {label}
      </label>
      <select
        {...field}
        value={value}
        onChange={handleChnage}
        className={clsx(
          'mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm',
          {
            'text-gray-300': value === '',
            'border-red-500 bg-red-50': isError,
            'border-green-500 bg-green-50': isSuccess,
          }
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
