import { useField, useFormikContext } from 'formik';
import clsx from 'clsx';
import { AsYouType } from 'libphonenumber-js';

const COUNTRY = 'US';
const asYouType = new AsYouType(COUNTRY);

function phoneFilter(value) {
  asYouType.reset();
  let onlyDigits = ('' + value).replace(/\D/g, '');
  if (onlyDigits.length >= 10) {
    return asYouType.input(onlyDigits.slice(0, 10));
  }

  return onlyDigits;
}

export default function PhoneInput(props) {
  const { errorText, label = null, placeholder, icon, ...rest } = props;
  const [field, meta] = useField(props);
  const { touched, error } = meta;
  const isError = touched && Boolean(error);
  const isSuccess = touched && !Boolean(error);

  const formikProps = useFormikContext();

  const handlePhoneChange = (e) => {
    let val = e.target.value;
    val === '1' || val === '0'
      ? formikProps.setFieldValue('phone', '')
      : formikProps.setFieldValue('phone', phoneFilter(e.target.value));
  };

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
        <input
          {...field}
          {...rest}
          type="text"
          id={field.name}
          placeholder={placeholder}
          onChange={handlePhoneChange}
          // className={clsx(
          //   'mt-1 block w-full rounded-md border-0 bg-gray-100 placeholder:text-gray-400 py-2 pl-3 pr-3 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm',
          //   {
          //     'shadow-inner bg-red-50': isError,
          //     'shadow-inner bg-green-50': isSuccess,
          //   },
          // )}
          className={clsx(
            'relative mt-1 lock w-full rounded-md border-0 bg-gray-100 font-normal placeholder:text-gray-400 py-2 pl-10 pr-3 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm',
            {
              'text-gray-400': field.value === '',
              'shadow-inner bg-red-50': isError,
              'shadow-inner bg-green-50': isSuccess,
            },
          )}
        />
      </div>
    </>
  );
}
