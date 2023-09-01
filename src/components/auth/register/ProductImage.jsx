import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { handleAuth } from '../../../redux/slices/AuthSlice'
const ProductImage = () => {
    const data = useSelector((state) => state.auth.value)
    const dispatch = useDispatch()
    return (
        <div className="register-project-container-images bg-primary">
            <h1 >{data}</h1>
            <button onClick={() => dispatch(handleAuth("login"))}>Login</button>
            <button onClick={() => dispatch(handleAuth("register"))}>register</button>
            <button onClick={() => dispatch(handleAuth("resetPassword"))}>resetPassword</button>
            <button onClick={() => dispatch(handleAuth("verifyOTP"))}>verifyOTP</button>
            <button onClick={() => dispatch(handleAuth("setNewPassword"))}>setNewPassword</button>

            <div
                style={{ height: "86vh" }}
                className="register-project-images-and-text-container">
                <div className="register-page-product-image-container">
                    <svg
                        className="img-fluid"
                        xmlns="http://www.w3.org/2000/svg"
                        width="400"
                        height="400"
                        viewBox="0 0 524 524"
                        fill="none"
                    >
                        <circle
                            cx="262"
                            cy="262"
                            r="262"
                            fill="url(#paint0_linear_1243_29818)"
                            fill-opacity="0.06"
                        />
                        <defs>
                            <linearGradient
                                id="paint0_linear_1243_29818"
                                x1="261.473"
                                y1="-28.994"
                                x2="262"
                                y2="508"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stop-color="white" />
                                <stop offset="1" stop-color="white" stop-opacity="0" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
                <div>
                    <div className="text-white register-project-related-text-big">
                        Lorem impsum text related EMR project
                    </div>
                    <div className="text-white register-project-related-text-small my-2">
                        Everything you need in an easily customizable dashboard.
                    </div>
                    <div className="d-flex justify-content-center mt-3">
                        <svg
                            width="10"
                            height="10"
                            viewBox="0 0 10 10"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <circle cx="5" cy="5" r="5" fill="white" />
                        </svg>
                        <svg
                            className="mx-2"
                            width="10"
                            height="10"
                            viewBox="0 0 10 10"
                            fill="#"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <circle opacity="0.2" cx="5" cy="5" r="5" fill="white" />
                        </svg>
                        <svg
                            width="10"
                            height="10"
                            viewBox="0 0 10 10"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <circle opacity="0.2" cx="5" cy="5" r="5" fill="white" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductImage