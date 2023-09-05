import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { handleAuth } from "../../../../redux/slices/AuthSlice";
import { useFormik } from "formik";
import { signUpSchema } from "../../../../schemas/Schema";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import UserIcon from "../../../../icons/UserIcon";
import ErrorIcon from "../../../../icons/ErrorIcon";
import EmailIcon from "../../../../icons/EmailIcon";
import LockIcon from "../../../../icons/LockIcon";
import EyeOpenIcon from "../../../../icons/EyeOpenIcon";
import EyeCloseIcon from "../../../../icons/EyeCloseIcon";
// import "../../../../common.scss";
const initialValues = {
  username: "",
  email: "",
  password: "",
  TermsAndConditions: false,
};

const RegisterForm = () => {
  const data = useSelector((state) => state.auth.value);
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values, action) => {
        action.resetForm();
        console.log("first");
        console.log(values);
      },
    });
  return (
    <div className="common-container-wraper">
      <div className="common-container">
        <div>
          <div className="pb-2">
            <div className="text-start title-login-and-signup mb-2">
              Sign Up for an Account
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="my-4 ">
              <div
                className={
                  errors.username && touched.username
                    ? "input-box-container-error"
                    : "input-box-container"
                }
              >
                <div className="d-flex">
                  <div>
                    <UserIcon />
                    <input
                      className=" icon-input-box ms-2"
                      placeholder="Username"
                      type="text"
                      name="username"
                      value={values.username}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                </div>
              </div>
              {errors.username && touched.username ? (
                <div className="d-flex mt-1 align-items-center text-start text-pink">
                  <ErrorIcon />
                  <div className="ms-1 ">{errors.username}</div>
                </div>
              ) : null}
            </div>
            <div className="my-4 ">
              <div
                className={
                  errors.email && touched.email
                    ? "input-box-container-error"
                    : "input-box-container"
                }
              >
                <div className="d-flex">
                  <div>
                    <EmailIcon />
                    <input
                      className=" icon-input-box ms-2"
                      placeholder="Email"
                      type="email"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                </div>
              </div>
              {errors.email && touched.email ? (
                <div className="d-flex mt-1 align-items-center text-start text-pink">
                  <ErrorIcon />
                  <div className="ms-1 ">{errors.email}</div>
                </div>
              ) : null}
            </div>
            <div className="pb-4">
              <div
                className={
                  errors.password && touched.password
                    ? "input-box-container-error"
                    : "input-box-container"
                }
              >
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <LockIcon />
                    <input
                      className=" icon-input-box ms-2"
                      placeholder="Password"
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                  <div>
                    {showPassword ? (
                      <div
                        className="cursor-pointer"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        <EyeOpenIcon />
                      </div>
                    ) : (
                      <div
                        className="cursor-pointer"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        <EyeCloseIcon />
                      </div>
                    )}
                  </div>
                </div>
              </div>
              {errors.password && touched.password ? (
                <div className="d-flex mt-1 align-items-center text-start text-pink">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 16.5C13.1421 16.5 16.5 13.1421 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85786 16.5 9 16.5Z"
                      stroke="#ED4F9D"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M9 5.66675V9.00008"
                      stroke="#ED4F9D"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M9 12.3333H9.00833"
                      stroke="#ED4F9D"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <div className="ms-1 ">{errors.password}</div>
                </div>
              ) : null}
            </div>
            <div>
              <div className="very-small-text">
                Your password must have at least 8 characters
              </div>
              <div className="d-flex mt-4">
                <div className="mt-1">
                  <input
                    className="checkbox-terms-and-condition"
                    type="checkbox"
                    name="TermsAndConditions"
                    value={values.TermsAndConditions}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                <div className="ms-2 very-small-text">
                  By creating an account means you agree to the{" "}
                  <b className="text-black">Terms</b>
                  <br />
                  <b className="text-black">& Conditions</b>
                  and our <b className="text-black">Privacy Policy</b>
                </div>
              </div>
              <div>
                {errors.TermsAndConditions && touched.TermsAndConditions ? (
                  <div className="d-flex mt-1 align-items-center text-start text-pink">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 16.5C13.1421 16.5 16.5 13.1421 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85786 16.5 9 16.5Z"
                        stroke="#ED4F9D"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M9 5.66675V9.00008"
                        stroke="#ED4F9D"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M9 12.3333H9.00833"
                        stroke="#ED4F9D"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <div className="ms-1 ">{errors.TermsAndConditions}</div>
                  </div>
                ) : null}
              </div>
            </div>
            <div className="mt-4">
              <button type="submit" className="button">
                Sign Up
              </button>
            </div>
          </form>
          <div className="my-4 d-flex align-items-center justify-content-center">
            <div>
              <svg
                className="sign-in-with-line"
                viewBox="0 0 145 2"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="0.5"
                  y1="1"
                  x2="144.5"
                  y2="1"
                  stroke="#E2E8F0"
                  stroke-linecap="round"
                />
              </svg>
            </div>
            <div className="small-text mx-2">Or sign up with</div>
            <div>
              <svg
                className="sign-in-with-line"
                viewBox="0 0 145 2"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="0.5"
                  y1="1"
                  x2="144.5"
                  y2="1"
                  stroke="#E2E8F0"
                  stroke-linecap="round"
                />
              </svg>
            </div>
          </div>
          <div className="text-center d-flex justify-content-center">
            <GoogleLogin
              onSuccess={(credentialResponse) => {
                let decoded = jwt_decode(credentialResponse.credential);
                console.log(decoded);
                if (decoded.name) {
                  navigate("/");
                }
              }}
              onError={() => {
                console.log("Login Failed");
              }}
              size="large"
              // width={500}
              logo_alignment="left"
            />
          </div>
          <div className="text-center mt-4 small-text">
            Already have an account?
            <Link
              onClick={() => dispatch(handleAuth("register"))}
              className="Link-tag"
            >
              Log In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
