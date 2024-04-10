import { ClockIcon, TruckIcon } from '@heroicons/react/24/outline';
import { FiPackage } from 'react-icons/fi';
import { CustomDatePicker, SelectField, ZipField } from '../FormFields';

const times = [
  {
    value: '',
    label: 'Select...',
  },
  {
    value: 'Any time',
    label: 'Any time',
  },
  {
    value: '8-9AM',
    label: 'morning',
  },
  {
    value: '12-3PM',
    label: 'noon',
  },
  {
    value: '3-7PM',
    label: 'afternoon',
  },
];

const services = [
  {
    value: 'Moving',
    label: 'Moving',
  },
  {
    value: 'Moving with Storage',
    label: 'Moving with Storage',
  },
  {
    value: 'Packing Only',
    label: 'Packing Only',
  },
  {
    value: 'Loading Help',
    label: 'Loading Help',
  },
  {
    value: 'Unloading Help',
    label: 'Unloading Help',
  },
  {
    value: 'Inside Move',
    label: 'Inside Move',
  },
];

const packingOptions = [
  {
    value: '',
    label: 'Select...',
  },
  {
    value: 'I will pack by myself',
    label: 'I will pack by myself',
  },
  {
    value: 'I need partial packing service',
    label: 'I need partial packing service',
  },
  {
    value: 'I need full packing service',
    label: 'I need full packing service',
  },
];

export default function FirstStep(props) {
  const {
    formField: {
      movingDate,
      deliveryDate,
      startTime,
      originZip,
      destinationZip,
      service,
      packing,
    },
    showDeliveryDate,
    showDestination,
    rates,
    prices,
  } = props;

  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="col-span-2">
        <CustomDatePicker
          name={movingDate.name}
          label={movingDate.label}
          placeholder={movingDate.placeholder}
          rates={rates}
          prices={prices}
        />
      </div>

      <div className="col-span-2">
        <SelectField
          name={startTime.name}
          label={startTime.label}
          options={times}
          // icon={<ClockIcon />}
          icon={ClockIcon}
        />
      </div>

      <div className="col-span-2">
        <ZipField
          name={originZip.name}
          label={originZip.label}
          placeholder="01234"
        />
      </div>

      <div className="col-span-2">
        {showDestination && (
          <ZipField
            name={destinationZip.name}
            label={destinationZip.label}
            placeholder="01234"
          />
        )}
      </div>

      <div className="col-span-2">
        <SelectField
          name={service.name}
          label={service.label}
          options={services}
          icon={TruckIcon}
        />
      </div>
      {showDeliveryDate && (
        <div className="col-span-2">
          <CustomDatePicker
            name={deliveryDate.name}
            label={deliveryDate.label}
            placeholder={deliveryDate.placeholder}
            rates={rates}
            prices={prices}
          />
        </div>
      )}
      <div className="col-span-4">
        <SelectField
          name={packing.name}
          label={packing.label}
          options={packingOptions}
          icon={FiPackage}
        />
        <p className="text-xs mt-2 font-medium text-slate-700 leading-tight">
          Note: Packing services are based on a same hourly rates. Packing
          materials charges will be applied upon usage.
        </p>
      </div>
    </div>
  );
}
