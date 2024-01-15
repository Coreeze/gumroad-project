import { useEffect, useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";
import TextField from "@mui/material/TextField";
import * as yup from "yup";
import { useFormik } from "formik";
import ReactStars from "react-rating-stars-component";
import { FaApple, FaAndroid } from "react-icons/fa";

import { COLORS } from "./utils/colors";
import profile from "./images/ellie-horn.webp";

const feedbackValidationSchema = yup.object({
  comment: yup
    .string("Enter comment")
    .max(140, "Comment maximum length is 140 characters"),
});

function App() {
  const [details, setDetails] = useState({
    receipt: false,
    library: false,
  });
  const [showOpen, setShowOpen] = useState(false);
  const [showDownload, setShowDownload] = useState(false);

  const formik = useFormik({
    initialValues: {
      comment: "",
    },
    validationSchema: feedbackValidationSchema,
    onSubmit: (values) => handleFormSubmit(values),
  });

  useEffect(() => {
    formik.handleSubmit();
  }, [formik.values]);

  const handleFormSubmit = (values) => {
    try {
      console.log(values);
    } catch (error) {
      console.log(error);
    }
  };

  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  const handleOpenDetails = (name) => {
    setDetails({ ...details, [name]: !details[name] });
  };

  return (
    <div className="App">
      <div className="top-bar">
        <div className="back-button">
          <FiArrowLeft size={14} />
          Back to Library
        </div>
      </div>
      <header>
        <h1>Masterclass: How to be an amazing comedy MC</h1>
        <div className="header-actions">
          <div
            className="button"
            onClick={() => (setShowOpen(!showOpen), setShowDownload(false))}
          >
            Open in app
          </div>
          <div
            className="button"
            onClick={() => (setShowDownload(!showDownload), setShowOpen(false))}
          >
            Download All <MdOutlineKeyboardArrowDown size={26} />
          </div>
          {showDownload && (
            <div className="dropdown">
              <div
                style={{
                  display: "grid",
                  gap: "23px",
                  gridAutoFlow: "column",
                  justifyContent: "space-between",
                }}
              >
                <div className="button">
                  <FaApple size={21} /> Download as ZIP
                </div>
                <div className="button" style={{ backgroundColor: "#142f40" }}>
                  <FaAndroid size={15} />
                  Save to Dropbox
                </div>
              </div>
            </div>
          )}
          {showOpen && (
            <div className="dropdown">
              <h3>Gumroad Library</h3>
              <div>Download from the App Store</div>
              <div
                style={{
                  display: "grid",
                  gap: "23px",
                  gridAutoFlow: "column",
                  justifyContent: "space-between",
                }}
              >
                <div className="button">
                  <FaApple size={21} /> App Store
                </div>
                <div className="button" style={{ backgroundColor: "#142f40" }}>
                  <FaAndroid size={15} />
                  Play Store
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
      <div className="content-container">
        <div className="paragraph" id="font-14px">
          <div className="stack">
            <div className="ratings-header">
              <div>Like it? Give it a rating:</div>
              <ReactStars
                count={5}
                onChange={ratingChanged}
                size={24}
                activeColor="#ffffff"
                emptyIcon={<i className="far fa-star"></i>}
                fullIcon={<i className="fa fa-star"></i>}
              />
            </div>
            <div className="ratings-comment">
              <div>Love it? Give it a comment!</div>
            </div>
            <div className="ratings-comment" style={{ paddingTop: "0px" }}>
              <TextField
                fullWidth
                multiline
                size="small"
                name="comment"
                id="comment"
                className="comment"
                placeholder="I love this product because..."
                value={formik.values.comment}
                onChange={formik.handleChange}
                error={formik.touched.comment && Boolean(formik.errors.comment)}
                helperText={formik.touched.comment && formik.errors.comment}
                sx={{
                  backgroundColor: COLORS.grey,
                  "& .MuiInputBase-input": {
                    fontFamily: "MabryPro",
                    color: COLORS.white,
                  },
                  "& fieldset": {
                    borderRadius: "6px",
                    border: "none",
                    transition: ".2s ease-in-out all",
                  },
                  ".MuiFormHelperText-root.Mui-error": {
                    fontFamily: "MabryPro",
                    paddingBottom: "10px",
                  },
                }}
              />
            </div>
          </div>
          <div className="stack">
            <div
              className="details"
              id="clickable"
              onClick={() => handleOpenDetails("receipt")}
            >
              <div className="details-header">
                {details.receipt ? (
                  <MdOutlineKeyboardArrowRight size={22} />
                ) : (
                  <MdOutlineKeyboardArrowDown size={22} />
                )}
                Receipt
              </div>
              {details.receipt && (
                <div className="paragraph">
                  <div className="button">View receipt</div>
                  <div className="button">Resend receipt</div>
                </div>
              )}
            </div>
            <div
              className="details"
              id="clickable"
              style={{ borderTop: "1px solid #646464" }}
              onClick={() => handleOpenDetails("library")}
            >
              <div className="details-header">
                {details.library ? (
                  <MdOutlineKeyboardArrowRight size={22} />
                ) : (
                  <MdOutlineKeyboardArrowDown size={22} />
                )}
                Library
              </div>
              {details.library && (
                <div className="paragraph">
                  <div className="button">Archive from library</div>
                  <div
                    className="button"
                    style={{ backgroundColor: "#dc341e" }}
                  >
                    Delete permanently
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="stack">
            <div className="description">
              Masterclass: How to be an amazing comedy MC
            </div>
            <div
              className="description"
              style={{ borderTop: "1px solid #646464" }}
            >
              <img className="profile-pic" src={profile} />
              By Ollie Horn
            </div>
          </div>
        </div>
        <div className="paragraph">
          <p>Here is the Zoom link!</p>

          <p>https://zoom.us/j/91311756247</p>
          <p>
            Please connect five minutes before we're due to start. Here's a
            calendar event so you won't forget!
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
