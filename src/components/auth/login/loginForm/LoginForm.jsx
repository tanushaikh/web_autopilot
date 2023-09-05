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
                      <svg
                        onClick={() => setShowPassword(!showPassword)}
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
                        onClick={() => setShowPassword(!showPassword)}
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
