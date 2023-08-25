import React from 'react'
import { Link } from "react-router-dom";
import './VerifyOTP.scss'
import Button from 'react-bootstrap/Button';
const VerifyOTP = () => {
    return (
        <div>
            <div className='common-container-wraper'>
                <div className='common-container'>
                    <div className='text-start'>
                        <h5 className="title-login-and-signup mb-2">Verify OTP</h5>
                        <div className='small-text mb-1'>We’ve sent a 6 digit code to your </div>
                        <div className='small-text'>example@gmail.com</div>
                        <div>
                            <input className='my-4 input-box auth-input-box' type="number" />
                        </div>
                        <Link className='Link-tag'>Resend Code</Link>
                        <div>
                            <button className='mt-4 button'>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VerifyOTP