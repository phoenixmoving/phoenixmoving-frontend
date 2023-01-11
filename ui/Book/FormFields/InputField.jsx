import { useField } from 'formik';
import clsx from 'clsx';

export default function InputField(props) {
  const { label, placeholder, textArea, optional, ...rest } = props;
  const [field, meta] = useField(props);
  const { touched, error } = meta;
  const isError = touched && Boolean(error);
  const isSuccess = touched && !Boolean(error);

  return (
    <>
      <label
        htmlFor={field}
        className="flex justify-between text-xs font-semibold text-gray-700"
      >
        {label}
        {optional && (
          <span className="text-gray-400 font-normal">Optional</span>
        )}
      </label>
      {textArea ? (
        <textarea
          {...field}
          {...rest}
          placeholder={placeholder}
          type="text"
          className={clsx(
            'mt-1 resize-none block w-full rounded-md border-gray-300 placeholder:text-gray-400 py-2 pl-3 pr-3 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm',
            {
              'border-red-500 bg-red-50': isError,
              'border-green-500 bg-green-50': isSuccess,
            },
          )}
        />
      ) : (
        <input
          {...field}
          {...rest}
          placeholder={placeholder}
          type={field.name === 'email' ? 'email' : 'text'}
          className={clsx(
            'mt-1 block w-full rounded-md border-gray-300 placeholder:text-gray-400 py-2 pl-3 pr-3 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm',
            {
              'border-red-500 bg-red-50': isError,
              'border-green-500 bg-green-50': isSuccess,
            },
          )}
        />
      )}
    </>
  );
}
