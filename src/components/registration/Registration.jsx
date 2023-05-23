import React, { useState, Fragment } from "react";
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  CircularProgress,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { Formik, Form } from "formik";
import GeneralDetails from "../forms/GeneralDetails";
import LocationDetails from "../forms/LocationDetails";

import validationSchema from "../formModel/ValidationSchema";
import registrationFormModel from "../formModel/RegistrationFormModel";
import formInitialValues from "../formModel/FormInitialValue";

import useStyles from "./Styles";
import {
  RegisterDetails,
  submitUserDetails,
} from "../../redux/store/userRegistration/UserRegistrationAction";
import RegistrationDetails from "./DisplayDetails";
import RegistrationSuccessDialog from "./RegistrationSuccessDialog";

const steps = ["General details", "Address information", "Review details"];
const { formId, formField } = registrationFormModel;

function _renderStepContent(step) {
  switch (step) {
    case 0:
      return <GeneralDetails formField={formField} />;
    case 1:
      return <LocationDetails formField={formField} />;
    case 2:
      return <RegistrationDetails />;
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

  const currentValidationSchema = validationSchema[activeStep];
  const isLastStep = activeStep === steps.length - 1;
  const [dialogOpen, setDialogOpen] = useState(false);

  const submitForm = (values, actions) => {
    actions.setSubmitting(false);
    if (isLastStep) {
      return;
    } else {
      setActiveStep(activeStep + 1);
    }
  };

  const clearDialogAndStepper = () => {
    setDialogOpen(true);
    setTimeout(() => {
      setActiveStep(0);
      setDialogOpen(false);
    }, 2000);
  };

  const handleSubmit = (values, actions) => {
    if (isLastStep) {
      submitForm(values, actions);
      dispatch(submitUserDetails(values), actions.resetForm({ values: "" }));
      clearDialogAndStepper();
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

  const handleDialogClose = () => {
    setDialogOpen(false);
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
                {activeStep !== 0 && (
                  <Button style={{ marginRight: "auto" }} onClick={handleBack}>
                    Back
                  </Button>
                )}
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
      <RegistrationSuccessDialog
        open={dialogOpen}
        onClose={handleDialogClose}
      />
    </Fragment>
  );
};

export default Registration;
