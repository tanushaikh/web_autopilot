import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { handleAuth } from "../../../../redux/slices/AuthSlice";
import { useFormik } from "formik";
import { LoginSchema } from "../../../../schemas/Schema";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { googleLogout } from "@react-oauth/google";
import EmailIcon from "../../../../icons/EmailIcon";
import LockIcon from "../../../../icons/LockIcon";
import ErrorIcon from "../../../../icons/ErrorIcon";
import EyeCloseIcon from "../../../../icons/EyeCloseIcon";
import EyeOpenIcon from "../../../../icons/EyeOpenIcon";
const initialValues = {
  email: "",
  password: "",
  category: "",
  TermsAndConditions: false,
};
const LoginForm = ({ loginWithRedirect }) => {
  const data = useSelector((state) => state.auth.value);
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: LoginSchema,
      onSubmit: (values, action) => {
        action.resetForm();
        console.log(values);
      },
    });
  return (
    <div className="common-container-wraper">
      <div className="common-container">
        <div>
          <div className="pb-2">
            <div className="text-start title-login-and-signup mb-2">
              Login to your Account
            </div>
            <div className="text-start small-text">
              Welcome back! please enter your detail
            </div>
          </div>
          <form onSubmit={handleSubmit}>
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
                      placeholder="Enter Your Email Id"
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
                  <ErrorIcon />
                  <div className="ms-1 ">{errors.password}</div>
                </div>
              ) : null}
            </div>
            <div className="mb-4">
              <div
                className={
                  errors.category && touched.category
                    ? "input-box-container-error"
                    : "input-box-container"
                }
              >
                <select
                  className={
                    values.category
                      ? " icon-input-select text-black"
                      : " icon-input-select text-gray-400"
                  }
                  id="cars"
                  name="category"
                  value={values.category}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  <option className="category-options text-gray-400" value="">
                    Select Business Type
                  </option>
                  <option className="category-options" value="shop">
                    Shop
                  </option>
                  <option className="category-options" value="hotel">
                    Hotel
                  </option>
                  <option className="category-options" value="mercedes">
                    Mercedes
                  </option>
                  <option className="category-options" value="audi">
                    Audi
                  </option>
                </select>
              </div>

              {errors.category && touched.category ? (
                <div className="d-flex mt-1 align-items-center text-start text-pink">
                  <ErrorIcon />
                  <div className="ms-1 ">{errors.category}</div>
                </div>
              ) : null}
            </div>
            <div className="py-2 d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center">
                <input
                  className="checkbox checkbox-terms-and-condition"
                  type="checkbox"
                  name="TermsAndConditions"
                  value={values.TermsAndConditions}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <span className="ms-2 small-text text-black">Remember me</span>
              </div>
              <div>
                <Link
                  onClick={() => dispatch(handleAuth("resetPassword"))}
                  className="Link-tag"
                >
                  Forgot Password?
                </Link>
              </div>
            </div>
            <div className="mt-4">
              <button type="submit" className="button">
                Sign In
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
            <div className="small-text mx-2">Or sign in with</div>
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
                  navigate("/shop/masters");
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
            Don’t have an account?{" "}
            <Link
              onClick={() => dispatch(handleAuth("register"))}
              className="Link-tag"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
