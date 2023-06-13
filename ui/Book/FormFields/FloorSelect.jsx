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
  const [mem, setMem] = useState(() =>
    options.find((o) => o.value === field.value),
  );

  function handleChange(e) {
    console.log(e);
    formikProps.setFieldValue(name, e.value);
    setMem(e);
  }

  console.log(field);

  return (
    <>
      <label className="block text-sm font-medium leading-6">{label}</label>
      <RadioGroup onChange={handleChange} value={mem} className="mt-1">
        <RadioGroup.Label className="sr-only">{label}</RadioGroup.Label>
        <div className="flex gap-2 flex-wrap items-center flex-1 col-span-2">
          {options.map((option) => (
            <RadioGroup.Option
              key={option.value}
              value={option || mem.label}
              className={({ active, checked }) =>
                classNames(
                  checked
                    ? 'bg-green-50 shadow-inner border border-green-400 text-green-600 hover:bg-green-100 flex-1'
                    : 'bg-white border-gray-300 text-gray-900 hover:bg-gray-100 flex-1',
                  'cursor-pointer focus:outline-none border rounded-lg py-2 px-4 flex items-center justify-center text-xs flex-1',
                )
              }
              //   disabled={!option.inStock}
            >
              <RadioGroup.Label as="span" className="font-medium">
                {option.label}
              </RadioGroup.Label>
            </RadioGroup.Option>
          ))}
        </div>
      </RadioGroup>
    </>
  );
}
