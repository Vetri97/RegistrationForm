import registrationFormModel from "./RegistrationFormModel";
import * as Yup from "yup";

const {
  formField: { firstName, lastName, email, occupation },
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
];
export default validations;
