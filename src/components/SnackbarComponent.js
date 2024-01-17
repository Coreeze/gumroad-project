import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

import { COLORS } from "../utils/colors";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const SnackbarComponent = ({ snackbar, setSnackbar }) => {
  return (
    <Snackbar
      open={snackbar.open}
      autoHideDuration={6000}
      onClose={() => setSnackbar({ ...snackbar, open: false })}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <Alert
        className={snackbar.severity === "success" && "success-snackbar"}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        severity={snackbar.severity}
        sx={{
          borderRadius: "6px",
          fontSize: "12px",
          display: "flex",
          alignItems: "center",
          backgroundColor:
            snackbar.severity === "success" ? COLORS.black : COLORS.white,
          border:
            snackbar.severity === "success"
              ? `1px solid ${COLORS.green}`
              : snackbar.severity === "warning"
              ? `1px solid ${COLORS.orange}`
              : `1px solid ${COLORS.red}`,
        }}
      >
        {snackbar.message}
      </Alert>
    </Snackbar>
  );
};
