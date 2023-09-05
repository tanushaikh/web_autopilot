import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { handleAuth } from "../../../../redux/slices/AuthSlice";
import { useFormik } from "formik";
import { ResetPasswordSchema } from "../../../../schemas/Schema";
import EmailIcon from "../../../../icons/EmailIcon";
import ErrorIcon from "../../../../icons/ErrorIcon";

const initialValues = {
  email: "",
};
const ResetPassword = () => {
  const data = useSelector((state) => state.auth.value);
  const dispatch = useDispatch();

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: ResetPasswordSchema,
      onSubmit: (values, action) => {
        action.resetForm();
        console.log(values);
      },
    });
  return (
    <div className="common-container-wraper">
      <div className="common-container">
        <form onSubmit={handleSubmit}>
          <div>
            <div className="text-start title-login-and-signup mb-2">
              Reset Your Password
            </div>
            <div className="text-start small-text">
              Enter the email address associated with your account and
            </div>
            <div className="text-start small-text mt-1">
              we will send you a code to reset your password.
            </div>
            <div className="my-4">
              <div
                className={
                  errors.email && touched.email
                    ? "input-box-container-error"
                    : "input-box-container"
                }
              >
                <div className="d-flex align-items-center">
                  <div>
                    <EmailIcon />
                  </div>
                  <input
                    className="icon-input-box ms-2"
                    type="text"
                    placeholder="Email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
              </div>
              {errors.email && touched.email ? (
                <div className="d-flex mt-1 align-items-center text-start text-pink">
                  <ErrorIcon />
                  <div className="ms-1 ">{errors.email}</div>
                </div>
              ) : null}
            </div>
            <div className="my-4">
              <button type="submit" className="button">
                Continue
              </button>
            </div>
            <div className="mt-4 text-center">
              <Link
                onClick={() => dispatch(handleAuth("login"))}
                className="text-center Link-tag"
              >
                Back to Sign In
              </Link>
            </div>
            <div className="small-text text-center Dont-have-an-account">
              Don’t have an account? <Link className="Link-tag">Sign Up</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
