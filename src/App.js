import { useEffect, useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";
import TextField from "@mui/material/TextField";
import * as yup from "yup";
import { useFormik } from "formik";
import ReactStars from "react-stars";
import CircularProgress from "@mui/material/CircularProgress";

import { COLORS } from "./utils/colors";
import profile from "./images/ellie-horn.webp";
import { mockData } from "./mockData";
import { getReview, createReview } from "./api/reviews";
import { SnackbarComponent } from "./components/SnackbarComponent";

const feedbackValidationSchema = yup.object({
  comment: yup.string("Enter review").max(140, "Review limited to 140 chars"),
});

function App() {
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "",
  });
  const [details, setDetails] = useState({
    receipt: false,
    library: false,
  });

  const handleSnackbar = (message, severity) => {
    setSnackbar({
      open: true,
      message: message,
      severity: severity,
    });
  };

  const formik = useFormik({
    initialValues: {
      comment: "",
      stars: null,
    },
    validationSchema: feedbackValidationSchema,
    onSubmit: (values) => handleFormSubmit(values),
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getReview({ productId: mockData._id });

        formik.setValues({
          comment: data.data.comment,
          stars: data.data.stars,
        });
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const handleFormSubmit = async (values) => {
    try {
      console.log("Saving...");

      if (!values.stars && values.comment) {
        handleSnackbar("Cant post review without a star rating", "error");
        return;
      }

      const response = await createReview({
        productId: mockData._id,
        comment: values.comment,
        stars: values.stars,
      });

      handleSnackbar("Product successfully rated!", "success");
    } catch (error) {
      console.log(error);
      handleSnackbar("Error Saving Review", "error");
    }
  };

  const ratingChanged = (newRating) => {
    if (newRating !== formik.values.stars) {
      formik.setValues({
        ...formik.values,
        stars: newRating,
      });

      formik.handleSubmit();
    }
  };

  const handleOpenDetails = (name) => {
    setDetails({ ...details, [name]: !details[name] });
  };

  return (
    <div className="App">
      <SnackbarComponent snackbar={snackbar} setSnackbar={setSnackbar} />
      <div className="top-bar">
        <div className="back-button">
          <FiArrowLeft size={14} />
          Back to Library
        </div>
      </div>
      <header>
        <h1>{mockData.title}</h1>
        <div className="header-actions">
          <div className="button">Open in app</div>
          <div className="button">
            Download All <MdOutlineKeyboardArrowDown size={26} />
          </div>
        </div>
      </header>
      <div className="content-container">
        <div
          className="paragraph"
          id="font-14px"
          style={{ paddingRight: "0rem" }}
        >
          <div className="stack">
            <div className="ratings-header">
              <div>Like it? Give it a rating:</div>
              <ReactStars
                count={5}
                onChange={ratingChanged}
                value={formik.values.stars}
                size={24}
                color2="#ffffff"
              />
            </div>
            <div className="ratings-comment">
              <div>Love it? Give it a review!</div>
            </div>
            <div className="ratings-comment" style={{ paddingTop: "0px" }}>
              <TextField
                fullWidth
                multiline
                size="small"
                name="comment"
                id="comment"
                className="comment"
                placeholder="I love this because..."
                value={formik.values.comment}
                onChange={formik.handleChange}
                error={formik.touched.comment && Boolean(formik.errors.comment)}
                helperText={formik.touched.comment && formik.errors.comment}
                inputProps={{ maxLength: 141 }}
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
              <div className="comment-indicator">
                <CircularProgress
                  variant="determinate"
                  color="secondary"
                  value={(formik.values.comment?.length * 100) / 141}
                  style={{
                    color:
                      formik.values.comment.length <= 140
                        ? COLORS.white
                        : COLORS.red,
                    borderRadius: "50%",
                    boxShadow: `inset 0 0 0 ${(9 / 44) * 120}px ${
                      COLORS.lightGrey
                    }`,
                  }}
                  thickness={4}
                  size={30}
                />
              </div>
            </div>
            <div style={{ padding: "0 1rem 1rem " }}>
              <div className="button" onClick={() => formik.handleSubmit()}>
                Post review
              </div>
            </div>
          </div>
          <div className="stack">
            <div className="details" id="clickable">
              <div
                className="details-header"
                onClick={() => handleOpenDetails("receipt")}
              >
                {details.receipt ? (
                  <MdOutlineKeyboardArrowRight size={22} />
                ) : (
                  <MdOutlineKeyboardArrowDown size={22} />
                )}
                Receipt
              </div>
              {details.receipt && (
                <>
                  <div className="button" style={{ marginBottom: "15px" }}>
                    View receipt
                  </div>
                  <div className="button">Resend receipt</div>
                </>
              )}
            </div>
            <div
              className="details"
              id="clickable"
              style={{ borderTop: "1px solid #646464" }}
            >
              <div
                className="details-header"
                onClick={() => handleOpenDetails("library")}
              >
                {details.library ? (
                  <MdOutlineKeyboardArrowRight size={22} />
                ) : (
                  <MdOutlineKeyboardArrowDown size={22} />
                )}
                Library
              </div>
              {details.library && (
                <>
                  <div className="button" style={{ marginBottom: "15px" }}>
                    Archive from library
                  </div>
                  <div
                    className="button"
                    style={{ backgroundColor: "#dc341e" }}
                  >
                    Delete permanently
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="stack">
            <div className="description">{mockData.title}</div>
            <div
              className="description"
              style={{ borderTop: "1px solid #646464" }}
            >
              <img className="profile-pic" src={profile} />
              By {mockData.author}
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
