import React from 'react'
import { Link } from "react-router-dom";
import { RegisterInfoSchema } from '../../../../schemas/Schema'
import { useFormik } from "formik";

const initialValues = {
    fullName: "",
    mobileNo: "",
    BusinessName: "",
    category: "",
};
const RegisterInfo = () => {

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
        useFormik({
            initialValues,
            validationSchema: RegisterInfoSchema,
            onSubmit: (values, action) => {
                action.resetForm();
                console.log(values)
            },
        });
    return (
        <div>
            <div className='common-container-wraper'>
                <div className='common-container'>
                    <form
                        onSubmit={handleSubmit}
                    >
                        <div className='text-start'>
                            <h5 className="title-login-and-signup mb-2">Fill Your Information</h5>
                            <div className='small-text mb-1'>Please Fill Your Information To Continue</div>
                            <div className='my-4'>
                                <div className=" lable-input-box mb-1">Name</div>
                                <div className={errors.fullName && touched.fullName ? "input-box-container-error" : "input-box-container"}>
                                    {/* <div className="input-box-container"> */}
                                    <input
                                        className='icon-input-box'
                                        name='fullName'
                                        placeholder='Enter your name'
                                        value={values.fullName}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                </div>
                                {errors.fullName && touched.fullName ? (
                                    <div className="d-flex mt-1 align-items-center text-start text-pink">
                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9 16.5C13.1421 16.5 16.5 13.1421 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85786 16.5 9 16.5Z" stroke="#ED4F9D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M9 5.66675V9.00008" stroke="#ED4F9D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M9 12.3333H9.00833" stroke="#ED4F9D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <div className='ms-1 '>{errors.fullName}</div>
                                    </div>
                                ) : null}
                            </div>
                            <div className='my-4'>
                                <div className=" lable-input-box mb-1">Mobile Number</div>
                                <div className={errors.mobileNo && touched.mobileNo ? "input-box-container-error" : "input-box-container"}>
                                    {/* <div className="input-box-container"> */}
                                    <input
                                        className='icon-input-box'
                                        name='mobileNo'
                                        placeholder='Enter your mobile number'
                                        value={values.mobileNo}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                </div>
                                {errors.mobileNo && touched.mobileNo ? (
                                    <div className="d-flex mt-1 align-items-center text-start text-pink">
                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9 16.5C13.1421 16.5 16.5 13.1421 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85786 16.5 9 16.5Z" stroke="#ED4F9D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M9 5.66675V9.00008" stroke="#ED4F9D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M9 12.3333H9.00833" stroke="#ED4F9D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <div className='ms-1 '>{errors.mobileNo}</div>
                                    </div>
                                ) : null}
                            </div>
                            <div className='my-4'>
                                <div className=" lable-input-box mb-1">Business Name</div>
                                <div className={errors.BusinessName && touched.BusinessName ? "input-box-container-error" : "input-box-container"}>
                                    {/* <div className="input-box-container"> */}
                                    <input
                                        className='icon-input-box'
                                        name='BusinessName'
                                        placeholder='Enter your business name'
                                        value={values.BusinessName}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                </div>
                                {errors.BusinessName && touched.BusinessName ? (
                                    <div className="d-flex mt-1 align-items-center text-start text-pink">
                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9 16.5C13.1421 16.5 16.5 13.1421 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85786 16.5 9 16.5Z" stroke="#ED4F9D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M9 5.66675V9.00008" stroke="#ED4F9D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M9 12.3333H9.00833" stroke="#ED4F9D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <div className='ms-1 '>{errors.BusinessName}</div>
                                    </div>
                                ) : null}
                            </div>
                            <div className="mb-4">
                                <div className=" lable-input-box mb-1">Business Type</div>
                                <div
                                    className=
                                    {errors.category && touched.category ? "input-box-container-error" : "input-box-container"}
                                // "input-box-container"
                                >
                                    <select
                                        className={values.category ? " icon-input-select text-black" : " icon-input-select text-gray-400"}
                                        // className="icon-input-select text-gray-400"
                                        id="cars"
                                        name="category"
                                        value={values.category}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    >
                                        <option className="category-options text-gray-400" value="">Select Business Type</option>
                                        <option className="category-options" value="shop">Shop</option>
                                        <option className="category-options" value="hotel">Hotel</option>
                                        <option className="category-options" value="mercedes">Mercedes</option>
                                        <option className="category-options" value="audi">Audi</option>
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
                            <div className='d-flex align-items-center'>
                                <div className='rounded-circle p-3 bg-background d-flex align-items-center'>
                                    <svg className='' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15 6L9 12L15 18" stroke="#0F172A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>
                                <div className='ms-3 w-100 d-flex align-items-center'>
                                    <button type="submit" className='button'>Continue</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default RegisterInfo