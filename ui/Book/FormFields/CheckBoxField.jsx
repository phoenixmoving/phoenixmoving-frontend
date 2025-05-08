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
            By checking this box, you agree to receive <b>SMS</b> messages from
            Phoenix Moving & Storage related to{' '}
            <b>
              Delivery notifications, Accounts notifications, Move details,
              arrival time updates, General questions, Promotional offers,
              discounts and Announcements.
            </b>{' '}
            You may reply STOP to opt-out at any time. Reply HELP to +1 (508)
            315-9458 for assistance. Messages and data rates may apply. Message
            frequency will vary. Learn more on our{' '}
            <a
              href="privacy"
              target="_blank"
              className="text-blue-600 hover:underline font-semibold"
            >
              Privacy Policy
            </a>{' '}
            page and{' '}
            <a
              href="terms"
              target="_blank"
              className="text-blue-600 hover:underline font-semibold"
            >
              Terms & Conditions.
            </a>{' '}
          </label>
        </div>
      </div>
      {isError && <p className="text-xs text-red-500">{error}</p>}
    </fieldset>
  );
}
