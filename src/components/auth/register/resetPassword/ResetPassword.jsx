import React from 'react'
import { Link } from "react-router-dom";
import './ResetPassword.scss'
import { useSelector, useDispatch } from 'react-redux'
import { handleAuth } from '../../../../redux/slices/AuthSlice'
import { useFormik } from "formik";
import { ResetPasswordSchema } from "../../../../schemas/Schema";

const initialValues = {
    email: "",
};
const ResetPassword = () => {
    const data = useSelector((state) => state.auth.value)
    const dispatch = useDispatch()

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
        useFormik({
            initialValues,
            validationSchema: ResetPasswordSchema,
            onSubmit: (values, action) => {
                action.resetForm();
                console.log(values)
            },
        });
    return (
        <div className='common-container-wraper'>
            <div className='common-container'>
                <form onSubmit={handleSubmit}>
                    <div>
                        <div className="text-start title-login-and-signup mb-2">Reset your password</div>
                        <div className='text-start small-text'>
                            Enter the email address associated with your account and
                        </div>
                        <div className='text-start small-text mt-1'>we will send you a code to reset your password.</div>
                        <div className='my-4'>
                            <div className={errors.email && touched.email ? "input-box-container-error" : "input-box-container"}>
                                <div className='d-flex align-items-center'>
                                    <div>
                                        <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17 1H3C1.89543 1 1 1.89543 1 3V13C1 14.1046 1.89543 15 3 15H17C18.1046 15 19 14.1046 19 13V3C19 1.89543 18.1046 1 17 1Z" stroke="#64748B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M1 3L10 9L19 3" stroke="#64748B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </div>
                                    <input
                                        className='icon-input-box ms-2'
                                        type="text"
                                        placeholder='Email'
                                        name='email'
                                        value={values.email}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                </div>
                            </div>
                            {errors.email && touched.email ? (
                                <div className="d-flex mt-1 align-items-center text-start text-pink">
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9 16.5C13.1421 16.5 16.5 13.1421 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85786 16.5 9 16.5Z" stroke="#ED4F9D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M9 5.66675V9.00008" stroke="#ED4F9D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M9 12.3333H9.00833" stroke="#ED4F9D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <div className='ms-1 '>{errors.email}</div>
                                </div>
                            ) : null}
                        </div>
                        <div className='my-4'>
                            <button type='submit' className='button'>
                                Continue
                            </button>
                        </div>
                        <div className='mt-4'>
                            <Link onClick={() => dispatch(handleAuth("login"))} className="Link-tag">Back to Sign In</Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ResetPassword