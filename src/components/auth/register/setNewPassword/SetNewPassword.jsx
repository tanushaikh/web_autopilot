import React, { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useFormik } from "formik";
import { SetNewPasswordSchema } from "../../../../schemas/Schema";
import LockIcon from "../../../../icons/LockIcon";
import ErrorIcon from "../../../../icons/ErrorIcon";
import EyeOpenIcon from "../../../../icons/EyeOpenIcon";
import EyeCloseIcon from "../../../../icons/EyeCloseIcon";

const initialValues = {
  password: "",
  confirm_password: "",
};
const SetNewPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: SetNewPasswordSchema,
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
            <div>
              <div className="text-start title-login-and-signup mb-2">
                Set Your New Password
              </div>
              <div className="text-start small-text">
                You are resetting password for
              </div>
              <div className="text-start small-text mt-1">
                Example@gmail.com
              </div>
            </div>
            <div className="my-4">
              <div className="text-start font-weight-normal">New Password</div>
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
                      placeholder="New Password"
                      className="icon-input-box ms-2"
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
            <div className="pb-4">
              <div className="text-start">Confirm New Password</div>
              <div
                className={
                  errors.confirm_password && touched.confirm_password
                    ? "input-box-container-error"
                    : "input-box-container"
                }
              >
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <LockIcon />
                    <input
                      placeholder="Confirm New Password"
                      className="icon-input-box ms-2"
                      type={showPassword1 ? "text" : "password"}
                      name="confirm_password"
                      value={values.confirm_password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                  <div>
                    {showPassword1 ? (
                      <div
                        className="cursor-pointer"
                        onClick={() => setShowPassword1(!showPassword1)}
                      >
                        <EyeOpenIcon />
                      </div>
                    ) : (
                      <div
                        className="cursor-pointer"
                        onClick={() => setShowPassword1(!showPassword1)}
                      >
                        <EyeCloseIcon />
                      </div>
                    )}
                  </div>
                </div>
              </div>
              {errors.confirm_password && touched.confirm_password ? (
                <div className="d-flex mt-1 align-items-center text-start text-pink">
                  <ErrorIcon />
                  <div className="ms-1 ">{errors.confirm_password}</div>
                </div>
              ) : null}
            </div>
            <div className="my-4">
              <button className="button">Update Password</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SetNewPassword;
