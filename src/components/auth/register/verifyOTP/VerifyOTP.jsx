import React from 'react'
import { Link } from "react-router-dom";
import './VerifyOTP.scss'
import Button from 'react-bootstrap/Button';
import { useFormik } from "formik";
import { verifyOtpSchema } from "../../../../schemas/Schema";

const initialValues = {
    otp: "",
};

const VerifyOTP = () => {
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
        useFormik({
            initialValues,
            validationSchema: verifyOtpSchema,
            onSubmit: (values, action) => {
                action.resetForm();
                console.log(values)
            },
        });
    return (
        <div>
            <div className='common-container-wraper'>
                <div className='common-container'>
                    <form onSubmit={handleSubmit}>
                        <div className='text-start'>
                            <h5 className="title-login-and-signup mb-2">Verify OTP</h5>
                            <div className='small-text mb-1'>We’ve sent a 6 digit code to your </div>
                            <div className='small-text'>example@gmail.com</div>
                            <div className='my-4'>
                                <div>
                                    <input
                                        className=' py-2 input-box auth-input-box'
                                        name='otp'
                                        value={values.otp}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                </div>
                                {errors.otp && touched.otp ? (
                                    <div className="d-flex mt-1 align-items-center text-start text-pink">
                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9 16.5C13.1421 16.5 16.5 13.1421 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85786 16.5 9 16.5Z" stroke="#ED4F9D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M9 5.66675V9.00008" stroke="#ED4F9D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M9 12.3333H9.00833" stroke="#ED4F9D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <div className='ms-1 '>{errors.otp}</div>
                                    </div>
                                ) : null}
                            </div>
                            <Link className='Link-tag'>Resend Code</Link>
                            <div>
                                <button type="submit" className='mt-4 button'>Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default VerifyOTP