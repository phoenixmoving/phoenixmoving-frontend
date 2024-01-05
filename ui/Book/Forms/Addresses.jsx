import { MapPinIcon } from '@heroicons/react/24/outline';
import { HashtagIcon } from '@heroicons/react/20/solid';
import { InputField } from '../FormFields';
import { TbNumber } from 'react-icons/tb';

export default function Addresses({ formField, values, showDestination }) {
  const {
    originAddress,
    originApt,
    originCity,
    originState,
    originZip,
    destinationAddress,
    destinationApt,
    destinationCity,
    destinationState,
    destinationZip,
  } = formField;

  return (
    <div className="grid grid-cols-6 gap-4">
      <div className="col-span-4">
        <InputField
          name={originAddress.name}
          label={originAddress.label}
          placeholder={originAddress.placeholder}
          icon={MapPinIcon}
        />
      </div>

      <div className="col-span-2">
        <InputField
          name={originApt.name}
          label={originApt.label}
          placeholder={originApt.placeholder}
          icon={TbNumber}
          optional
        />
      </div>
      <div className="col-span-3">
        <InputField
          name={originCity.name}
          icon={MapPinIcon}
          readOnly
          disabled
        />
      </div>
      <div className="col-span-3">
        <InputField
          name={originState.name}
          icon={MapPinIcon}
          readOnly
          disabled
        />
      </div>
      <div className="col-span-2">
        <InputField name={originZip.name} icon={MapPinIcon} readOnly disabled />
      </div>

      {/* <div className="col-span-5">
        <p className="flex items-center text-sm font-medium text-slate-700">
          <CheckIcon
            className="mr-2 h-4 w-4 text-green-500"
            aria-hidden="true"
          />
          {`${values.originCity}, ${values.originState} ${values.originZip}`}
        </p>
      </div> */}
      <br />

      {showDestination && (
        <>
          <div className="col-span-4">
            <InputField
              name={destinationAddress.name}
              label={destinationAddress.label}
              placeholder={destinationAddress.placeholder}
              icon={MapPinIcon}
            />
          </div>

          <div className="col-span-2">
            <InputField
              name={destinationApt.name}
              label={destinationApt.label}
              placeholder={destinationApt.placeholder}
              icon={TbNumber}
              optional
            />
          </div>
          <div className="col-span-3">
            <InputField
              name={destinationCity.name}
              icon={MapPinIcon}
              readOnly
              disabled
            />
          </div>
          <div className="col-span-3">
            <InputField
              name={destinationState.name}
              icon={MapPinIcon}
              readOnly
              disabled
            />
          </div>
          <div className="col-span-2">
            <InputField
              name={destinationZip.name}
              icon={MapPinIcon}
              readOnly
              disabled
            />
          </div>

          {/* <div className="col-span-5">
            <p className="flex items-center text-sm font-medium text-slate-700">
              <CheckIcon
                className="mr-2 h-4 w-4 text-green-500"
                aria-hidden="true"
              />
              {`${values.destinationCity}, ${values.destinationState} ${values.destinationZip}`}
            </p>
          </div> */}
        </>
      )}
    </div>
  );
}
