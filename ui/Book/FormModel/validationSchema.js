import * as Yup from 'yup';
import submitFormModel from './submitFormModel';
import { jsonCityState } from '../UsCities';

const {
  formField: {
    firstName,
    lastName,
    email,
    phone,
    movingDate,
    deliveryDate,
    startTime,
    service,
    size,
    referral,
    originAddress,
    originZip,
    originFloor,
    destinationAddress,
    destinationZip,
    destinationFloor,
    agreed,
  },
} = submitFormModel;

const findCity = (zip) => {
  let cityObject = jsonCityState.find((o) => {
    return o.z === zip;
  });
  if (cityObject === undefined) {
    return null;
  }
  return cityObject;
};

// const visaRegEx = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;

export default [
  Yup.object().shape({
    [movingDate.name]: Yup.string()
      .nullable()
      .required(`${movingDate.requiredErrorMsg}`),
    [deliveryDate.name]: Yup.string()
      .ensure()
      .when(['service'], {
        is: (service) => service === 'Moving with Storage',
        then: Yup.string()
          .nullable()
          .required(`${deliveryDate.requiredErrorMsg}`),
      }),
    [startTime.name]: Yup.string()
      .nullable()
      .required(`${startTime.requiredErrorMsg}`),

    [originZip.name]: Yup.string()
      .required(`${originZip.requiredErrorMsg}`)
      .test('len', `${originZip.invalidErrorMsg}`, (val) => findCity(val)),
    [destinationZip.name]: Yup.string().when('service', {
      is: (service) =>
        service === 'Moving with Storage' || service === 'Moving',
      then: Yup.string()
        .nullable()
        .required(`${destinationZip.requiredErrorMsg}`)
        .test('len', `${destinationZip.invalidErrorMsg}`, (val) =>
          findCity(val)
        ),
    }),

    [service.name]: Yup.string().required(`${service.requiredErrorMsg}`),
  }),
  Yup.object().shape({
    [size.name]: Yup.string().required(`${size.requiredErrorMsg}`),
    [originFloor.name]: Yup.string().required(
      `${originFloor.requiredErrorMsg}`
    ),
    [destinationFloor.name]: Yup.string().when('service', {
      is: (service) =>
        service === 'Moving with Storage' || service === 'Moving',
      then: Yup.string()
        .nullable()
        .required(`${destinationFloor.requiredErrorMsg}`),
    }),
  }),
  Yup.object().shape({}),
  Yup.object().shape({
    [originAddress.name]: Yup.string().required(
      `${originAddress.requiredErrorMsg}`
    ),
    [destinationAddress.name]: Yup.string().when('service', {
      is: (service) =>
        service === 'Moving with Storage' || service === 'Moving',
      then: Yup.string()
        .nullable()
        .required(`${destinationAddress.requiredErrorMsg}`),
    }),
  }),
  Yup.object().shape({
    [firstName.name]: Yup.string().required(`${firstName.requiredErrorMsg}`),
    [lastName.name]: Yup.string().required(`${lastName.requiredErrorMsg}`),
    [email.name]: Yup.string()
      .required(`${email.requiredErrorMsg}`)
      .email('Email must be valid'),
    [phone.name]: Yup.string()
      .trim()
      .required('Phone is required')
      .matches(
        /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)$/,
        'Invalid phone number'
      ),
    [referral.name]: Yup.string()
      .nullable()
      .required(`${referral.requiredErrorMsg}`),
  }),
  Yup.object().shape({
    [agreed.name]: Yup.bool()
      .required(`${agreed.requiredErrorMsg}`)
      .oneOf([true], `${agreed.requiredErrorMsg}`),
  }),
];
