import React from "react";
import { useSelector } from "react-redux";
import {
  Typography,
  Paper,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const DisplayDetails = () => {
  const registration = useSelector(
    (state) => state.UserRegistration.registrations
  );

  return (
    <div style={{ marginTop: "1%" }}>
      <Paper
        elevation={3}
        sx={{ padding: "35px 45px", maxWidth: "750px", margin: "0 auto" }}
      >
        <Typography
          variant="h6"
          gutterBottom
          style={{ textAlign: "center", textDecoration: "underline" }}
        >
          Verify your details before submitting
        </Typography>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="subtitle1" style={{ fontWeight: "bold" }}>
              General Details:
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle1">
                  <strong>First Name:</strong> {registration.firstName}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle1">
                  <strong>Last Name:</strong> {registration.lastName}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle1">
                  <strong>Email:</strong> {registration.email}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle1">
                  <strong>Occupation:</strong> {registration.occupation}
                </Typography>
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="subtitle1" style={{ fontWeight: "bold" }}>
              Address Details:
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="subtitle1">
                  <strong>Address 1:</strong> {registration.address1}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subtitle1">
                  <strong>Address 2:</strong> {registration.address2}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle1">
                  <strong>City:</strong> {registration.city}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle1">
                  <strong>State:</strong> {registration.state}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle1">
                  <strong>Country:</strong> {registration.country}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle1">
                  <strong>Pincode:</strong> {registration.pincode}
                </Typography>
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>
      </Paper>
    </div>
  );
};

export default DisplayDetails;
