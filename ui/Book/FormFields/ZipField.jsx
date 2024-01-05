import { useField, useFormikContext } from 'formik';
import clsx from 'clsx';
import { jsonCityState } from '../UsCities';
import toast from 'react-hot-toast';
import { MapPinIcon } from '@heroicons/react/24/outline';
// import { MapPinIcon } from '@heroicons/react/20/solid';

const onlyNumbers = (e) => {
  e.target.value = e.target.value.replace(/[^0-9]/g, '');
};

const findCity = (zip) => {
  let cityObject = jsonCityState.find((o) => {
    return o.z === zip;
  });
  if (cityObject === undefined) {
    return null;
  }
  // console.log(cityObject);
  return cityObject;
};

export default function ZipField(props) {
  const { errorText, label = null, placeholder, ...rest } = props;
  const [field, meta] = useField(props);
  const { touched, error } = meta;
  const formikProps = useFormikContext();
  const name = field.name.split(/(?=[A-Z])/)[0]; //origin ||  destination
  const isError = touched && Boolean(error);
  const isSuccess = touched && !Boolean(error);

  function notify(value) {
    let obj = findCity(value);
    if (obj) {
      if (name === 'zip') {
        formikProps.setFieldValue(`city`, obj.c);
        formikProps.setFieldValue(`state`, obj.s);
        toast(
          () => (
            <span>
              <b>
                {obj.c}, {obj.s}
              </b>
            </span>
          ),
          {
            icon: '🚚',
          },
        );
      } else {
        formikProps.setFieldValue(`${name}City`, obj.c);
        formikProps.setFieldValue(`${name}State`, obj.s);
        toast(
          () => (
            <span>
              Moving {name === 'origin' ? 'from' : 'to'}{' '}
              <b>
                {obj.c}, {obj.s}
              </b>
            </span>
          ),
          {
            icon: '🚚',
          },
        );
      }
    } else {
      toast.error('Invalid zip code');
    }
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
          <MapPinIcon
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
          {...rest}
          id={field.name}
          placeholder="01234"
          type="tel"
          pattern="[0-9]*"
          maxLength="5"
          className={clsx(
            'relative mt-1 lock w-full rounded-md border-0 bg-slate-100 font-normal placeholder:text-slate-400 py-2 pl-10 pr-3 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm',
            {
              'text-slate-400': field.value === '',
              'shadow-inner !bg-red-50': isError,
              'shadow-inner !bg-green-50': isSuccess,
            },
          )}
          onInput={onlyNumbers}
          onChange={(e) => {
            field.onChange(e);
            if (e.target.value.length === 5) {
              setTimeout(() => {
                notify(e.target.value);
              }, 10);
            }
          }}
        />
      </div>
      {/* <input
        {...field}
        {...rest}
        id={field.name}
        placeholder="01234"
        type="tel"
        pattern="[0-9]*"
        maxLength="5"
        className={clsx(
          'mt-1 block w-full rounded-md border-0 bg-slate-100 placeholder:text-slate-400 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm',
          {
            'shadow-inner bg-red-100': isError,
            'shadow-inner bg-green-100': isSuccess,
          },
        )}
        onInput={onlyNumbers}
        onChange={(e) => {
          field.onChange(e);
          if (e.target.value.length === 5) {
            setTimeout(() => {
              notify(e.target.value);
            }, 10);
          }
        }}
      /> */}
    </>
  );
}
