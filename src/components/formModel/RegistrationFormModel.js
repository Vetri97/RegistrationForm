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
  },
};

export default registrationFormModel;
