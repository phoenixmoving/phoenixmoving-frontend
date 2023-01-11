import axios from 'axios';
import { format } from 'date-fns';

const API = process.env.NEXT_PUBLIC_API_ENDPOINT;

export async function submitFormToDb(
  values,
  actions,
  activeStep,
  setActiveStep,
) {
  // console.log('submit function', format(values.movingDate, 'yyyy-MM-dd'));
  // console.log('submit function', format(values.deliveryDate, 'yyyy-MM-dd'));

  const formattedMovingDate = format(
    values.movingDate,
    "yyyy-MM-dd'T'00:00:00",
  );
  const formattedDeliveryDate = values.deliveryDate
    ? format(values.deliveryDate, "yyyy-MM-dd'T'00:00:00")
    : '';
  const obj = {
    customer: {
      first_name: values.firstName,
      last_name: values.lastName,
      email: values.email,
      phone: values.phone,
      password: '111111',
      password_confirmation: '111111',
    },
    job: {
      // droppable_id: '1',
      // index: 1,
      pick_up_date: formattedMovingDate,
      delivery_date: formattedDeliveryDate,
      start_time: values.startTime,
      job_size: values.size,
      job_type: values.service,
      job_status: 'Pending',
      additional_info: values.additionalInfo,
      is_flat_rate: values.isFlatRate,
      crew_size: values.crewSize,
      job_rate: values.rate,
      time_between: values.timeBetween,
      estimated_time: values.estimateTime,
      travel_time: values.travelTime,
      estimated_quote: values.estimateQuote,
      referral: values.referral,
    },
    origin: {
      address: values.originAddress,
      city: values.originCity,
      state: values.originState,
      zip: values.originZip,
      floor: values.originFloor,
      apt_number: values.originApt,
      // droppable_index: 0,
    },
    destination: {
      address: values.destinationAddress,
      city: values.destinationCity,
      state: values.destinationState,
      zip: values.destinationZip,
      floor: values.destinationFloor,
      apt_number: values.destinationApt,
      // droppable_index: 1,
    },
  };

  let customer = obj.customer;
  axios.post(`${API}/api/v1/customers`, { customer }).then((response) => {
    // console.log('customer', response);
    if (response.data.customer) {
      let customerId = response.data.customer.id;
      let job = obj.job;
      job.customer_id = customerId;
      axios.post(`${API}/api/v1/jobs`, { job }).then((response) => {
        // console.log('job', response);
        let jobId = response.data.job.id;

        let origin = obj.origin;
        let destination = obj.destination;

        let address = { ...origin, job_id: jobId, is_origin: true };
        axios
          .post(`${API}/api/v1/addresses`, {
            address,
          })
          .then((response) => {
            // console.log('address origin', response);
          })
          .catch((err) => console.log(err));

        address = { ...destination, job_id: jobId, is_destination: true };

        if (destination.state) {
          axios
            .post(`${API}/api/v1/addresses`, {
              address,
            })
            .then((resp) => {
              // console.log('address destination', response);
            })
            .catch((err) => console.log(err));
        }

        setActiveStep(activeStep + 1);
        actions.setTouched({});
        actions.setSubmitting(false);
      });
    }
  });
}
