import React, { useEffect } from 'react'
import { handleAuth } from '../../redux/slices/AuthSlice'
import { useSelector, useDispatch } from 'react-redux'
import ProductImage from './register/ProductImage'
import RegisterForm from './register/registerForm/RegisterForm'
import LoginForm from './login/loginForm/LoginForm'
import ResetPassword from './register/resetPassword/ResetPassword'
import SetNewPassword from './register/setNewPassword/SetNewPassword'
import VerifyOTP from './register/verifyOTP/VerifyOTP'
const Authentication = () => {
    const AuthData = useSelector((state) => state.auth.value)

    useEffect(() => {
        renderStep()
    }, [AuthData])
    const renderStep = () => {
        switch (AuthData) {
            case 'login':
                return <LoginForm />;
            case 'register':
                return < RegisterForm />;
            case 'resetPassword':
                return <ResetPassword />;
            case 'setNewPassword':
                return <SetNewPassword />;
            case 'verifyOTP':
                return <VerifyOTP />;
            default:
                return null;
        }
    };


    return (
        <div className='row'>
            <div className="col-lg-12">
                <ProductImage />
            </div>
            <div className="col-lg-12">
                {renderStep()}
            </div>

        </div>
    )
}

export default Authentication