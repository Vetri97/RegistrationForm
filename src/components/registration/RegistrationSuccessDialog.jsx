import React from "react";
import { Dialog, DialogTitle, DialogContent, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const RegistrationSuccessDialog = ({ open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>
        <Typography variant="h6" align="center">
          User registered successfully
        </Typography>
      </DialogTitle>
      <DialogContent
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <CheckCircleIcon sx={{ fontSize: 64, color: "green" }} />
      </DialogContent>
    </Dialog>
  );
};

export default RegistrationSuccessDialog;
