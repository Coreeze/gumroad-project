import { FaFacebook, FaGoogle } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { BsStripe } from "react-icons/bs";
import { TextField } from "@mui/material";

import background from "../images/background-gumroad.webp";
import gumroad from "../images/gumroad-text.png";
import { COLORS } from "../utils/colors";

function Auth() {
  return (
    <div className="auth-container">
      <div className="login-form">
        <header>
          <div className="top-bar">
            <img src={gumroad} className="logo" />
            <p style={{ cursor: "pointer", textDecoration: "underline" }}>
              Sign up
            </p>
          </div>
          <h1>Log in</h1>
        </header>
        <div className="input-group">
          <div className="button" style={{ backgroundColor: "#4267b2" }}>
            <FaFacebook /> Facebook
          </div>
          <div className="button" style={{ backgroundColor: "#5383ec" }}>
            <FaGoogle /> Google
          </div>
          <div className="button" style={{ backgroundColor: "#000000" }}>
            <FaSquareXTwitter /> X
          </div>
          <div className="button" style={{ backgroundColor: "#625bf6" }}>
            <BsStripe /> Stripe
          </div>
        </div>
        <div className="divider">
          <div style={{ height: "1px", backgroundColor: COLORS.lightGrey }} />
          or
          <div style={{ height: "1px", backgroundColor: COLORS.lightGrey }} />
        </div>
        <div className="form">
          <div>
            <p>Email</p>
            <TextField
              fullWidth
              multiline
              size="small"
              name="comment"
              id="comment"
              className="comment"
              sx={{
                height: "47px",
                borderRadius: "6px",
                backgroundColor: COLORS.black,
                "& .MuiInputBase-input": {
                  fontFamily: "MabryPro",
                  color: COLORS.white,
                },
                "& fieldset": {
                  borderRadius: "6px",
                  border: `1px solid ${COLORS.lightGrey}`,
                  transition: ".2s ease-in-out all",
                  height: "52px",
                },
                ".MuiFormHelperText-root.Mui-error": {
                  fontFamily: "MabryPro",
                  paddingBottom: "10px",
                },
              }}
            />
          </div>
          <div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <p>Password</p>
              <p style={{ textDecoration: "underline", cursor: "pointer" }}>
                Forgot your password?
              </p>
            </div>
            <TextField
              fullWidth
              multiline
              size="small"
              name="comment"
              id="comment"
              className="comment"
              sx={{
                height: "47px",
                borderRadius: "6px",
                backgroundColor: COLORS.black,
                "& .MuiInputBase-input": {
                  fontFamily: "MabryPro",
                  color: COLORS.white,
                },
                "& fieldset": {
                  borderRadius: "6px",
                  border: `1px solid ${COLORS.lightGrey}`,
                  transition: ".2s ease-in-out all",
                  height: "52px",
                },
                ".MuiFormHelperText-root.Mui-error": {
                  fontFamily: "MabryPro",
                  paddingBottom: "10px",
                },
              }}
            />
          </div>
          <div className="button" id="login">
            Log in
          </div>
        </div>
      </div>
      <img src={background} className="background" />
    </div>
  );
}

export default Auth;
