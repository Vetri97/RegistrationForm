// refered formik and yup mostly from this website (https://www.geeksforgeeks.org/reactjs-form-validation-using-formik-and-yup/) and a few others

import registrationFormModel from "./RegistrationFormModel";
import * as Yup from "yup";

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

const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

const validations = [
  Yup.object().shape({
    [firstName.name]: Yup.string().required(`${firstName.requiredErrorMsg}`),
    [lastName.name]: Yup.string().required(`${lastName.requiredErrorMsg}`),
    [email.name]: Yup.string()
      .email("Invalid email")
      .matches(emailRegex, "Invalid email format")
      .required(`${email.requiredErrorMsg}`),
    [occupation.name]: Yup.string().required(`${occupation.requiredErrorMsg}`),
  }),
  Yup.object().shape({
    [address1.name]: Yup.string().required(`${address1.requiredErrorMsg}`),
    [address2.name]: Yup.string().required(`${address2.requiredErrorMsg}`),
    [city.name]: Yup.string().required(`${city.requiredErrorMsg}`),
    [state.name]: Yup.string().required(`${state.requiredErrorMsg}`),
    [country.name]: Yup.string().required(`${country.requiredErrorMsg}`),
    [pincode.name]: Yup.string().required(`${pincode.requiredErrorMsg}`),
  }),
];
export default validations;
