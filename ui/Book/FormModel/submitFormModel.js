export default {
  formId: 'bookForm',
  formField: {
    firstName: {
      name: 'firstName',
      label: 'First name*',
      placeholder: 'First name',
      requiredErrorMsg: 'First name is required',
    },
    lastName: {
      name: 'lastName',
      label: 'Last name*',
      placeholder: 'Last name',
      requiredErrorMsg: 'Last name is required',
    },
    email: {
      name: 'email',
      label: 'Email*',
      placeholder: 'Email',
      requiredErrorMsg: 'Email is required',
    },
    phone: {
      name: 'phone',
      label: 'Phone*',
      placeholder: 'Phone',
      requiredErrorMsg: 'Phone is required',
    },
    movingDate: {
      name: 'movingDate',
      label: 'Move date*',
      requiredErrorMsg: 'Move date is required',
      invalidErrorMsg: 'Move date is not valid',
      placeholder: 'Moving date',
    },
    deliveryDate: {
      name: 'deliveryDate',
      label: 'Delivery date*',
      requiredErrorMsg: 'Delivery date is required',
      invalidErrorMsg: 'Delivery date is not valid',
      placeholder: 'Delivery date',
    },
    startTime: {
      name: 'startTime',
      label: 'Start time*',
      requiredErrorMsg: 'Start time is required',
    },
    service: {
      name: 'service',
      label: 'Service*',
      requiredErrorMsg: 'Service is required',
    },
    size: {
      name: 'size',
      label: 'Move size*',
      requiredErrorMsg: 'Movw size is required',
    },
    additionalInfo: {
      name: 'additionalInfo',
      label: 'Additioanl info',
      placeholder:
        'Please include information on heavy, oversized or fragile items, narrow stairways or halls, long walk ways, extra stops, or anything else that may affect the moving time.',
    },
    referral: {
      name: 'referral',
      label: 'How did you hear about us?*',
      requiredErrorMsg: 'Please select one option',
    },

    originAddress: {
      name: 'originAddress',
      label: 'Origin Address*',
      placeholder: '123 Street Name*',
      requiredErrorMsg: 'Address is required',
    },
    originCity: {
      name: 'originCity',
      label: '',
      // requiredErrorMsg: 'Address is required',
    },
    originState: {
      name: 'originState',
      label: '',
      // requiredErrorMsg: 'State is required',
    },
    originZip: {
      name: 'originZip',
      label: 'From zip*',
      requiredErrorMsg: 'From zip is required',
      invalidErrorMsg: 'Invalid zip',
    },
    originFloor: {
      name: 'originFloor',
      label: 'Entrance (from)*',
      requiredErrorMsg: 'Floor is required',
    },
    originApt: {
      name: 'originApt',
      label: 'Apt',
      placeholder: 'Apt',
    },

    destinationAddress: {
      name: 'destinationAddress',
      label: 'Destination Address*',
      placeholder: '123 Street Name',
      requiredErrorMsg: 'Address is required',
    },
    destinationCity: {
      name: 'destinationCity',
      label: '',
      // requiredErrorMsg: 'Address is required',
    },
    destinationState: {
      name: 'destinationState',
      label: '',
      // requiredErrorMsg: 'State is required',
    },
    destinationZip: {
      name: 'destinationZip',
      label: 'To zip*',
      requiredErrorMsg: 'To zip is required',
      invalidErrorMsg: 'Invalid zip',
    },
    destinationFloor: {
      name: 'destinationFloor',
      label: 'Entrance (to)*',
      requiredErrorMsg: 'Floor is required',
    },
    destinationApt: {
      name: 'destinationApt',
      label: 'Apt',
      placeholder: 'Apt',
    },
    isFlatRate: {
      name: 'isFlatRate',
      label: '',
    },
    crewSize: {
      name: 'crewSize',
      label: '',
    },
    estimateTime: {
      name: 'estimateTime',
      label: '',
    },
    estimateQuote: {
      name: 'estimateQuote',
      label: '',
    },
    travelTime: {
      name: 'travelTime',
      label: '',
    },
    timeBetween: {
      name: 'timeBetween',
      label: '',
    },
    distanceBetween: {
      name: 'distanceBetween',
      label: '',
    },
    agreed: {
      name: 'agreed',
      label: '',
      requiredErrorMsg: 'Please check this box if you want to proceed',
    },
    rates: {
      name: 'rates',
    },
    rate: {
      name: 'rate',
    },
  },
};
