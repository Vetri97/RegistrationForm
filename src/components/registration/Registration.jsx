import React, { useState, Fragment } from "react";
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  CircularProgress,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form } from "formik";
import GeneralDetails from "../forms/GeneralDetails";

import validationSchema from "../formModel/ValidationSchema";
import registrationFormModel from "../formModel/RegistrationFormModel";
import formInitialValues from "../formModel/FormInitialValue";

import useStyles from "./Styles";
import { RegisterDetails } from "../../redux/store/userRegistration/UserRegistrationAction";

const steps = ["General details", "Address information", "Review details"];
const { formId, formField } = registrationFormModel;

function _renderStepContent(step) {
  switch (step) {
    case 0:
      return <GeneralDetails formField={formField} />;

    default:
      return <div>Not Found</div>;
  }
}

/**
 * @author Vetrivel Kumaravel
 * @function Registration
 **/

const Registration = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const dispatch = useDispatch();

  const state = useSelector((state) => state);
  console.log(state, "State log");

  const currentValidationSchema = validationSchema[activeStep];
  const isLastStep = activeStep === steps.length - 1;

  const submitForm = (values, actions) => {
    actions.setSubmitting(false);
    setActiveStep(activeStep + 1);
  };

  const handleSubmit = (values, actions) => {
    if (isLastStep) {
      submitForm(values, actions);
    } else {
      setActiveStep(activeStep + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
      dispatch(RegisterDetails(values));
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <Fragment>
      <Typography component="h1" variant="h4" align="center">
        Registration
      </Typography>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Fragment>
        <Formik
          initialValues={formInitialValues}
          validationSchema={currentValidationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form id={formId}>
              {_renderStepContent(activeStep)}

              <div className={classes.buttons}>
                {activeStep !== 0 && <Button onClick={handleBack}>Back</Button>}
                <div className={classes.wrapper}>
                  <Button
                    disabled={isSubmitting}
                    type="submit"
                    variant="contained"
                    color="primary"
                  >
                    {isLastStep ? "Submit" : "Next"}
                  </Button>
                  {isSubmitting && (
                    <CircularProgress
                      size={24}
                      className={classes.buttonProgress}
                    />
                  )}
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </Fragment>
    </Fragment>
  );
};

export default Registration;
