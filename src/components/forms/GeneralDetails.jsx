import React, { Fragment } from "react";
import { Grid } from "@mui/material";
import { InputField, SelectField } from "../uiControls";

// import ProfilePictureCropper from "../profilePictureCropper/ProfilePictureCropper";

/**
 * @author Vetrivel Kumaravel
 * @function GeneralDetails
 **/

const occupationData = [
  {
    value: undefined,
    label: "None",
  },
  {
    value: "student",
    label: "Student",
  },
  {
    value: "employee",
    label: "Employee",
  },
  {
    value: "self-employed",
    label: "Self-Employed",
  },
];

const GeneralDetails = (props) => {
  const {
    formField: { firstName, lastName, email, occupation },
  } = props;

  return (
    <Fragment>
      <div style={{ padding: "20px" }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={3}></Grid>
          <Grid item xs={12} sm={6}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <InputField
                  name={firstName.name}
                  label={firstName.label}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <InputField
                  name={lastName.name}
                  label={lastName.label}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <InputField name={email.name} label={email.label} fullWidth />
              </Grid>

              <Grid item xs={12} sm={6}>
                <SelectField
                  name={occupation.name}
                  label={occupation.label}
                  fullWidth
                  data={occupationData}
                />
              </Grid>

              {/* <ProfilePictureCropper /> */}
            </Grid>
          </Grid>
          <Grid item xs={12} sm={3}></Grid>
        </Grid>
      </div>
    </Fragment>
  );
};

export default GeneralDetails;
