// refered formik and yup mostly from this website (https://www.geeksforgeeks.org/reactjs-form-validation-using-formik-and-yup/) and a few others

const registrationFormModel = {
  formId: "checkoutForm",
  formField: {
    firstName: {
      name: "firstName",
      label: "First name*",
      requiredErrorMsg: "First name is required",
    },
    lastName: {
      name: "lastName",
      label: "Last name*",
      requiredErrorMsg: "Last name is required",
    },
    email: {
      name: "email",
      label: "Email*",
      requiredErrorMsg: "Email name is required",
    },
    occupation: {
      name: "occupation",
      label: "Occupation*",
      requiredErrorMsg: "Occupation is required",
    },
    address1: {
      name: "address1",
      label: "Address 1*",
      requiredErrorMsg: "Address 1 is required",
    },
    address2: {
      name: "address2",
      label: "Address 2",
      requiredErrorMsg: "Address 2 is required",
    },
    city: {
      name: "city",
      label: "City*",
      requiredErrorMsg: "City is required",
    },
    state: {
      name: "state",
      label: "State*",
      requiredErrorMsg: "State is required",
    },
    country: {
      name: "country",
      label: "Country*",
      requiredErrorMsg: "Country is required",
    },
    pincode: {
      name: "pincode",
      label: "Pincode*",
      requiredErrorMsg: "Pincode is required",
    },
  },
};

export default registrationFormModel;
