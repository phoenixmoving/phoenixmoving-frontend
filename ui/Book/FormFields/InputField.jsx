import { useField } from 'formik';
import clsx from 'clsx';

export default function InputField(props) {
  const { label, placeholder, textArea, optional, icon, ...rest } = props;
  const [field, meta] = useField(props);
  const { touched, error } = meta;
  const isError = touched && Boolean(error);
  const isSuccess = touched && !Boolean(error);

  return (
    <>
      <label
        htmlFor={field.name}
        className="flex justify-between text-sm font-medium leading-6"
      >
        {label}
        {optional && (
          <span className="text-slate-400 font-normal">Optional</span>
        )}
      </label>
      {textArea ? (
        <textarea
          {...field}
          {...rest}
          id={field.name}
          placeholder={placeholder}
          type="text"
          className={clsx(
            'mt-1 resize-none block w-full rounded-md border-0 bg-slate-100 placeholder:text-slate-400 py-2 pl-3 pr-3 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm',
            {
              'shadow-inner bg-red-50': isError,
              'shadow-inner bg-green-50': isSuccess,
            },
          )}
        />
      ) : (
        <div className="relative rounded-md">
          <div className="z-10 pointer-events-none absolute inset-y-0 left-0 mt-1 flex items-center pl-3">
            {icon && (
              <props.icon
                className={clsx('h-4 w-4 stroke-[1.5]', {
                  'text-slate-400': field.value === '',
                  'text-slate-900': isError,
                  'text-slate-900': isSuccess,
                })}
                aria-hidden="true"
              />
            )}
          </div>
          <input
            {...field}
            {...rest}
            id={field.name}
            placeholder={placeholder}
            type={field.name === 'email' ? 'email' : 'text'}
            // className={clsx(
            //   'mt-1 block w-full rounded-md border-0 disabled:text-slate-900 bg-slate-100 placeholder:text-slate-400 py-2 pl-3 pr-3 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm',
            //   {
            //     'shadow-inner bg-red-50': isError,
            //     'shadow-inner bg-green-50': isSuccess,
            //   },
            // )}
            className={clsx(
              'relative mt-1 lock w-full rounded-md border-0 bg-slate-100 font-normal placeholder:text-slate-400 py-2 pl-10 pr-3 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm',
              {
                'text-slate-400': field.value === '',
                'shadow-inner !bg-red-50': isError,
                'shadow-inner !bg-green-50': isSuccess,
              },
            )}
          />
        </div>
      )}
    </>
  );
}
