import { SelectField } from '../FormFields';

const movingSizeOptions = [
  {
    label: 'Select...',
    value: '',
  },
  {
    label: 'One Room or less (<1000 lbs)',
    value: 'Room or less (partial move)',
  },
  { label: 'Studio apartment', value: 'Studio apartment' },
  { label: '1 Bedroom apartment', value: '1 Bedroom apartment' },
  { label: '2 Bedroom apartment', value: '2 Bedroom apartment' },
  {
    label: '3+ Bedroom apartment',
    value: '3+ Bedroom apartment',
  },
  {
    label: '2 Bedroom House/Townhouse',
    value: '2 Bedroom House/Townhouse',
  },
  {
    label: '3 Bedroom House/Townhouse',
    value: '3 Bedroom House/Townhouse',
  },
  {
    label: '4+ Bedroom House/Townhouse',
    value: '4+ Bedroom House/Townhouse',
  },
  {
    label: 'Office / Commercial space',
    value: 'Office / Commercial space',
  },
];

const floorOptions = [
  {
    label: 'Select...',
    value: '',
  },
  {
    value: '1st/ground floor',
    label: '1st/ground floor',
  },
  {
    value: '2nd floor',
    label: '2nd floor',
  },
  {
    value: '3rd floor',
    label: '3rd floor',
  },
  {
    value: '4th floor',
    label: '4th floor',
  },
  {
    value: 'elevator building',
    label: 'elevator building',
  },
  {
    value: 'private house',
    label: 'private house',
  },
  {
    value: 'storage unit',
    label: 'storage unit',
  },
];

export default function SecondStep(props) {
  const {
    formField: { originFloor, destinationFloor, size },
    showDestination,
  } = props;

  return (
    <div className="mt-6 grid grid-cols-4 gap-4 p-1">
      <div className="col-span-4">
        <SelectField
          name={size.name}
          label={size.label}
          options={movingSizeOptions}
        />
      </div>
      <div className="col-span-4">
        <SelectField
          name={originFloor.name}
          label={originFloor.label}
          options={floorOptions}
        />
      </div>
      {showDestination && (
        <div className="col-span-4">
          <SelectField
            name={destinationFloor.name}
            label={destinationFloor.label}
            options={floorOptions}
          />
        </div>
      )}
    </div>
  );
}
