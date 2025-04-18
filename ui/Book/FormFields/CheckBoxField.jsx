import { useField } from 'formik';

export default function CheckBoxField(props) {
  const { label, placeholder, ...rest } = props;
  const [field, meta] = useField(props);
  const { touched, error } = meta;
  const isError = touched && Boolean(error);

  return (
    <fieldset className="space-y-2">
      <div className="flex items-start">
        <input
          type="checkbox"
          id={field.name}
          checked={field.value}
          className="h-4 w-4 mt-1 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
          {...rest}
          {...field}
        />
        <div className="ml-3 text-xs">
          <label htmlFor="agreed" className="text-xs">
            By checking this box, you agree to receive text messages from
            Phoenix Moving. Message and data rates may apply. Message frequency
            varies. Reply STOP to opt out.
            <br />
            By clicking "Submit", you agree to the
            <a
              href="terms"
              target="_blank"
              className="text-blue-600 hover:underline ml-1 font-semibold"
            >
              terms & conditions*
            </a>
          </label>
        </div>
      </div>
      {isError && <p className="text-xs text-red-500">{error}</p>}
    </fieldset>
  );
}
