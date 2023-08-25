import React from 'react'
import { Link } from "react-router-dom";
import './ResetPassword.scss'

const ResetPassword = () => {
    return (
        <div className='common-container-wraper'>
            <div className='common-container'>
                <div>
                    <div className="text-start title-login-and-signup mb-2">Reset your password</div>
                    <div className='text-start small-text'>
                        Enter the email address associated with your account and
                    </div>
                    <div className='text-start small-text mt-1'>we will send you a code to reset your password.</div>
                    <div className='input-box-container my-4'>
                        <div className='d-flex'>
                            <div>
                                <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17 1H3C1.89543 1 1 1.89543 1 3V13C1 14.1046 1.89543 15 3 15H17C18.1046 15 19 14.1046 19 13V3C19 1.89543 18.1046 1 17 1Z" stroke="#64748B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M1 3L10 9L19 3" stroke="#64748B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                            <input className='icon-input-box ms-2' type="text" />
                        </div>
                    </div>
                    <div>
                        <button className='button'>
                            Continue
                        </button>
                    </div>
                    <div className='mt-4'>
                        <Link className="Link-tag">Back to Sign In</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResetPassword