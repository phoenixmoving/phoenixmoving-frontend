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
  const { errorText, label = null, placeholder, ...rest } = props;
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
        htmlFor={field}
        className="block text-xs font-semibold text-gray-700"
      >
        {label}
      </label>
      <input
        {...field}
        {...rest}
        type="tel"
        placeholder={placeholder}
        onChange={handlePhoneChange}
        className={clsx(
          'mt-1 block w-full rounded-md border-gray-300 placeholder:text-gray-400 border-x border-y py-2 pl-3 pr-3 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm',
          {
            'bg-red-50 border-red-500 border-x border-y': isError,
            'bg-green-50 border-green-500 border-x border-y': isSuccess,
          }
        )}
      />
    </>
  );
}
