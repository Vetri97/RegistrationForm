import registrationFormModel from "./RegistrationFormModel";
const {
  formField: { firstName, lastName, email, occupation },
} = registrationFormModel;

const formInitialValues = {
  [firstName.name]: "",
  [lastName.name]: "",
  [email.name]: "",
  [occupation.name]: "",
};

export default formInitialValues;
