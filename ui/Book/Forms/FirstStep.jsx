import { SelectField, ZipField, CustomDatePicker } from '../FormFields';

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

export default function FirstStep(props) {
  const {
    formField: {
      movingDate,
      deliveryDate,
      startTime,
      originZip,
      destinationZip,
      service,
    },
    showDeliveryDate,
    showDestination,
    rates,
  } = props;

  return (
    <div className="mt-6 grid grid-cols-4 gap-4 p-1">
      <div className="col-span-2">
        <CustomDatePicker
          name={movingDate.name}
          label={movingDate.label}
          placeholder={movingDate.placeholder}
          rates={rates}
        />
      </div>

      <div className="col-span-2">
        <SelectField
          name={startTime.name}
          label={startTime.label}
          options={times}
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
        />
      </div>
      {showDeliveryDate && (
        <div className="col-span-2">
          {/* <DatePickerField
            name={deliveryDate.name}
            label={deliveryDate.label}
          /> */}
          <CustomDatePicker
            name={deliveryDate.name}
            label={deliveryDate.label}
            placeholder={deliveryDate.placeholder}
            rates={rates}
          />
        </div>
      )}
    </div>
  );
}
