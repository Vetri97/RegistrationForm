import { makeStyles } from "@mui/styles";
export default makeStyles(() => ({
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  wrapper: {
    position: "relative",
  },
  buttonProgress: {
    position: "absolute",
    top: "50%",
    left: "50%",
  },
}));
