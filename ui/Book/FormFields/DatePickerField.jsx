import { useField } from 'formik';
import clsx from 'clsx';

export default function DatePickerField(props) {
  const [field, meta] = useField(props);
  const { touched, error } = meta;
  const isError = touched && Boolean(error);
  const isSuccess = touched && !Boolean(error);

  const { label } = props;

  return (
    <>
      <label
        htmlFor={field}
        className="block text-xs font-semibold text-gray-700"
      >
        {label}

        <input
          {...field}
          type="date"
          className={clsx(
            'mt-1 block w-full rounded-md border-gray-300 font-normal placeholder:text-gray-300 py-2 pl-3 pr-3 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm',
            {
              'text-gray-400': field.value === '',
              'border-red-500 bg-red-50': isError,
              'border-green-500 bg-green-50': isSuccess,
            }
          )}
        />
      </label>
    </>
  );
}
