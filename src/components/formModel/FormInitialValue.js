// refered formik and yup mostly from this website (https://www.geeksforgeeks.org/reactjs-form-validation-using-formik-and-yup/) and a few others

import registrationFormModel from "./RegistrationFormModel";
const {
  formField: {
    firstName,
    lastName,
    email,
    occupation,
    address1,
    address2,
    city,
    state,
    country,
    pincode,
  },
} = registrationFormModel;

const formInitialValues = {
  [firstName.name]: "",
  [lastName.name]: "",
  [email.name]: "",
  [occupation.name]: "",
  [address1.name]: "",
  [address2.name]: "",
  [city.name]: "",
  [state.name]: "",
  [country.name]: "",
  [pincode.name]: "",
};

export default formInitialValues;
