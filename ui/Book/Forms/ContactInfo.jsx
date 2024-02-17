import {
  ArrowPathIcon,
  AtSymbolIcon,
  InformationCircleIcon,
  PhoneIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import { InputField, SelectField, PhoneInput } from '../FormFields';

const referralOptions = [
  {
    label: 'Select...',
    value: '',
  },
  {
    value: 'yelp',
    label: 'Yelp',
  },
  {
    value: 'google',
    label: 'Google',
  },
  {
    value: 'thumbtack',
    label: 'Thumbtack',
  },
  {
    value: 'bbb',
    label: 'BBB',
  },
  {
    value: 'social media',
    label: 'Social media',
  },
  {
    value: 'repeat customer',
    label: 'Repeat customer',
  },
  {
    value: 'saw our truck',
    label: 'Saw our truck',
  },
  {
    value: 'customer referral',
    label: 'Customer Referral',
  },
  {
    value: 'business card',
    label: 'Business Card',
  },
  {
    value: 'other',
    label: 'Other',
  },
];

export default function ContactInfo(props) {
  const {
    formField: { firstName, lastName, email, phone, additionalInfo, referral },
  } = props;

  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="col-span-2">
        <InputField
          name={firstName.name}
          label={firstName.label}
          placeholder={firstName.placeholder}
          icon={UserCircleIcon}
        />
      </div>

      <div className="col-span-2">
        <InputField
          name={lastName.name}
          label={lastName.label}
          placeholder={lastName.placeholder}
          icon={UserCircleIcon}
        />
      </div>
      <div className="col-span-4">
        <InputField
          name={email.name}
          label={email.label}
          placeholder={email.placeholder}
          icon={AtSymbolIcon}
        />
      </div>
      <div className="col-span-4">
        <PhoneInput
          name={phone.name}
          label={phone.label}
          placeholder={phone.placeholder}
          icon={PhoneIcon}
        />
      </div>
      <div className="col-span-4">
        <InputField
          name={additionalInfo.name}
          label={additionalInfo.label}
          placeholder={additionalInfo.placeholder}
          icon={InformationCircleIcon}
          rows="3"
          textArea
          optional
        />
      </div>
      <div className="col-span-4">
        <SelectField
          name={referral.name}
          label={referral.label}
          options={referralOptions}
          icon={ArrowPathIcon}
        />
      </div>
    </div>
  );
}
