import { useField } from 'formik';

export default function CheckBoxField(props) {
  const { label, placeholder, ...rest } = props;
  const [field, meta] = useField(props);
  const { touched, error } = meta;
  const isError = touched && Boolean(error);

  return (
    <fieldset className="space-y-2">
      <div className="flex items-center">
        <input
          checked={field.value}
          type="checkbox"
          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
          {...rest}
          {...field}
        />
        <div className="ml-3 text-xs">
          <label htmlFor="agreed" className="text-xs text-gray-700">
            I have read and accept the
          </label>
          <a
            href="#"
            target="_blank"
            className="text-blue-600 hover:underline ml-1"
          >
            terms & conditions*
          </a>
        </div>
      </div>
      {isError && <p className="text-xs text-red-500">{error}</p>}
    </fieldset>
  );
}
