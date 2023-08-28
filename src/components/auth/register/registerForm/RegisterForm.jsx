import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./RegisterForm.scss";
import { useSelector, useDispatch } from "react-redux";
import { handleAuth } from "../../../../redux/slices/AuthSlice";
import { useFormik } from "formik";
import { signUpSchema } from "../../../../schemas/Schema";

const initialValues = {
  username: "",
  email: "",
  password: "",
  TermsAndConditions: false,
};

const RegisterForm = () => {
  const data = useSelector((state) => state.auth.value);
  const dispatch = useDispatch();
  const [passwordShow, setPasswordShow] = useState(false);

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values, action) => {
        action.resetForm();
        console.log(values);
      },
    });
  return (
    <div className="text-center register-container">
      <div className="text-start title-login-and-signup">
        Sign Up for an Account
      </div>
      <form onSubmit={handleSubmit}>
        <div className="my-4">
          <div
            className={
              errors.username && touched.username
                ? "register-input-icon-container-error"
                : "register-input-icon-container"
            }
          >
            <div className="d-flex align-items-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                  stroke="#64748B"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6 21V19C6 17.9391 6.42143 16.9217 7.17157 16.1716C7.92172 15.4214 8.93913 15 10 15H14C15.0609 15 16.0783 15.4214 16.8284 16.1716C17.5786 16.9217 18 17.9391 18 19V21"
                  stroke="#64748B"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <input
                className="register-input-box"
                type="text"
                placeholder="Username"
                name="username"
                value={values.username}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
          </div>
          {errors.username && touched.username ? (
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
              <div className="ms-1 ">{errors.username}</div>
            </div>
          ) : null}
        </div>
        <div className="my-2">
          <div
            className={
              errors.email && touched.email
                ? "register-input-icon-container-error"
                : "register-input-icon-container"
            }
          >
            <div className="d-flex align-items-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5Z"
                  stroke="#64748B"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3 7L12 13L21 7"
                  stroke="#64748B"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <input
                className="register-input-box"
                type="email"
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
              <div className="ms-1 ">{errors.email}</div>
            </div>
          ) : null}
        </div>
        <div className="my-4">
          <div
            className={
              errors.password && touched.password
                ? "register-input-icon-container-error"
                : "register-input-icon-container"
            }
          >
            <div className="d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17 11H7C5.89543 11 5 11.8954 5 13V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V13C19 11.8954 18.1046 11 17 11Z"
                    stroke="#64748B"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 17C12.5523 17 13 16.5523 13 16C13 15.4477 12.5523 15 12 15C11.4477 15 11 15.4477 11 16C11 16.5523 11.4477 17 12 17Z"
                    stroke="#64748B"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8 11V7C8 5.93913 8.42143 4.92172 9.17157 4.17157C9.92172 3.42143 10.9391 3 12 3C13.0609 3 14.0783 3.42143 14.8284 4.17157C15.5786 4.92172 16 5.93913 16 7V11"
                    stroke="#64748B"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <input
                  className="register-input-box text-start"
                  type={passwordShow ? "text" : "password"}
                  placeholder="Password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              {passwordShow ? (
                <svg
                  onClick={() => setPasswordShow(!passwordShow)}
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z"
                    stroke="#64748B"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M22 12C19.333 16.667 16 19 12 19C8 19 4.667 16.667 2 12C4.667 7.333 8 5 12 5C16 5 19.333 7.333 22 12Z"
                    stroke="#64748B"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              ) : (
                <svg
                  onClick={() => setPasswordShow(!passwordShow)}
                  width="22"
                  height="20"
                  viewBox="0 0 22 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 1L20 19"
                    stroke="#64748B"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9.58399 8.58691C9.20871 8.96193 8.99778 9.47067 8.99759 10.0012C8.9974 10.5317 9.20798 11.0406 9.58299 11.4159C9.95801 11.7912 10.4667 12.0021 10.9973 12.0023C11.5278 12.0025 12.0367 11.7919 12.412 11.4169"
                    stroke="#64748B"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8.363 3.36506C9.22042 3.11978 10.1082 2.9969 11 3.00006C15 3.00006 18.333 5.33306 21 10.0001C20.222 11.3611 19.388 12.5241 18.497 13.4881M16.357 15.3491C14.726 16.4491 12.942 17.0001 11 17.0001C7 17.0001 3.667 14.6671 1 10.0001C2.369 7.60506 3.913 5.82506 5.632 4.65906"
                    stroke="#64748B"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              )}
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
        <div className="text-start very-small-text">
          Your password must have at least 8 characters
        </div>
        <div className="my-4 text-small">
          <div className="text-start d-flex very-small-text ">
            <div className="mt-1">
              <input
                type="checkbox"
                name="TermsAndConditions"
                value={values.TermsAndConditions}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <div className="ms-1">
              By creating an account means you agree to the{" "}
              <b className="text-black">Terms & Conditions</b> and our{" "}
              <b className="text-black">Privacy Policy</b>
            </div>
          </div>
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
        <div>
          <button type="submit" className="button">
            Sign Up
          </button>
        </div>
      </form>
      <div className="d-flex align-items-center my-4">
        <div>
          <svg
            className="img-fluid"
            width="120"
            height="2"
            viewBox="0 0 143 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="0.5"
              y1="1"
              x2="142.5"
              y2="1"
              stroke="#E2E8F0"
              stroke-linecap="round"
            />
          </svg>
        </div>
        <div className="very-small-text mx-2">Or sign up with</div>
        <div>
          <svg
            width="120"
            height="2"
            viewBox="0 0 143 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="0.5"
              y1="1"
              x2="142.5"
              y2="1"
              stroke="#E2E8F0"
              stroke-linecap="round"
            />
          </svg>
        </div>
      </div>
      <div className="register-page-login-with-google">
        <div className="d-flex align-items-center justify-content-center">
          <div>
            <svg
              className="img-fluid"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.7511 10.1944C18.7511 9.47495 18.6915 8.94995 18.5626 8.40552H10.1797V11.6527H15.1003C15.0011 12.4597 14.4654 13.675 13.2749 14.4916L13.2582 14.6003L15.9087 16.6126L16.0924 16.6305C17.7788 15.1041 18.7511 12.8583 18.7511 10.1944Z"
                fill="#4285F4"
              />
              <path
                d="M10.1793 18.75C12.59 18.75 14.6138 17.9722 16.092 16.6305L13.2745 14.4916C12.5206 15.0068 11.5086 15.3666 10.1793 15.3666C7.81822 15.3666 5.81427 13.8402 5.09992 11.7305L4.99522 11.7392L2.23917 13.8295L2.20312 13.9277C3.67136 16.786 6.68723 18.75 10.1793 18.75Z"
                fill="#34A853"
              />
              <path
                d="M5.10014 11.7305C4.91165 11.186 4.80257 10.6027 4.80257 9.99992C4.80257 9.3971 4.91165 8.81379 5.09022 8.26935L5.08523 8.1534L2.29464 6.02954L2.20333 6.0721C1.5982 7.25823 1.25098 8.5902 1.25098 9.99992C1.25098 11.4096 1.5982 12.7415 2.20333 13.9277L5.10014 11.7305Z"
                fill="#FBBC05"
              />
              <path
                d="M10.1794 4.63331C11.8559 4.63331 12.9868 5.34303 13.6317 5.93613L16.1516 3.525C14.604 2.11528 12.59 1.25 10.1794 1.25C6.68725 1.25 3.67137 3.21387 2.20312 6.07218L5.09002 8.26944C5.8143 6.15972 7.81825 4.63331 10.1794 4.63331Z"
                fill="#EB4335"
              />
            </svg>
          </div>
          <div className="mx-1">Google</div>
        </div>
      </div>
      <div className="small-text my-4">
        Already have an account?
        <Link
          onClick={() => dispatch(handleAuth("login"))}
          className="Link-tag"
        >
          {" "}
          Log In
        </Link>
      </div>
    </div>
  );
};

export default RegisterForm;
