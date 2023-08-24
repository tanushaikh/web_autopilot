import React from 'react'
import './VerifyOTP.scss'
const VerifyOTP = () => {
    return (
        <div>
            <div className='verify-otp-container'>
                <div className='verify-otp-container-all'>
                    <h5 className="title-verify-otp">Verify OTP</h5>
                    <div>We’ve sent a 6 digit code to your </div>
                    <div>example@gmail.com</div>
                    <div>
                        <input type="number" />
                    </div>
                    <div>Resend Code</div>
                    <div><button>Submit</button></div>
                </div>
            </div>
        </div>
    )
}

export default VerifyOTP