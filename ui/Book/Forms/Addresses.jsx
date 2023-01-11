import { CheckIcon } from '@heroicons/react/24/outline';
import { InputField } from '../FormFields';

export default function Addresses({ formField, values, showDestination }) {
  const { originAddress, originApt, destinationAddress, destinationApt } =
    formField;

  return (
    <div className="mt-6 grid grid-cols-5 gap-4 p-1">
      <div className="col-span-3">
        <InputField
          name={originAddress.name}
          label={originAddress.label}
          placeholder={originAddress.placeholder}
        />
      </div>

      <div className="col-span-2">
        <InputField
          name={originApt.name}
          label={originApt.label}
          placeholder={originApt.placeholder}
          optional
        />
      </div>

      <div className="col-span-5">
        <p className="flex items-center text-sm font-medium text-gray-700">
          <CheckIcon
            className="mr-2 h-4 w-4 text-green-500"
            aria-hidden="true"
          />
          {`${values.originCity}, ${values.originState} ${values.originZip}`}
        </p>
      </div>

      {showDestination && (
        <>
          <div className="col-span-3">
            <InputField
              name={destinationAddress.name}
              label={destinationAddress.label}
              placeholder={destinationAddress.placeholder}
            />
          </div>

          <div className="col-span-2">
            <InputField
              name={destinationApt.name}
              label={destinationApt.label}
              placeholder={destinationApt.placeholder}
              optional
            />
          </div>
          <div className="col-span-5">
            <p className="flex items-center text-sm font-medium text-gray-700">
              <CheckIcon
                className="mr-2 h-4 w-4 text-green-500"
                aria-hidden="true"
              />
              {`${values.destinationCity}, ${values.destinationState} ${values.destinationZip}`}
            </p>
          </div>
        </>
      )}
    </div>
  );
}
