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
    value: 'social media',
    label: 'Social media',
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
    <div className="mt-6 grid grid-cols-4 gap-4 p-1">
      <div className="col-span-2">
        <InputField
          name={firstName.name}
          label={firstName.label}
          placeholder={firstName.placeholder}
        />
      </div>

      <div className="col-span-2">
        <InputField
          name={lastName.name}
          label={lastName.label}
          placeholder={lastName.placeholder}
        />
      </div>
      <div className="col-span-4">
        <InputField
          name={email.name}
          label={email.label}
          placeholder={email.placeholder}
        />
      </div>
      <div className="col-span-4">
        <PhoneInput
          name={phone.name}
          label={phone.label}
          placeholder={phone.placeholder}
        />
      </div>
      <div className="col-span-4">
        <InputField
          name={additionalInfo.name}
          label={additionalInfo.label}
          placeholder={additionalInfo.placeholder}
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
        />
      </div>
    </div>
  );
}
