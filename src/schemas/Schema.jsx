import * as Yup from "yup";

// LoginSchema
export const LoginSchema = Yup.object({
    email: Yup.string().email().required("Please enter your email"),
    password: Yup.string().min(6).max(14).required("Please enter your password"),
    category: Yup.string().required("Please enter your category"),
    TermsAndConditions: Yup.boolean()
        .oneOf([true], 'You must accept the terms and conditions')
        .required('You must accept the terms and conditions'),
});
// signUpSchema
export const signUpSchema = Yup.object({
    username: Yup.string().min(2).max(25).required("Please enter your name"),
    email: Yup.string().email().required("Please enter your email"),
    password: Yup.string().min(6).max(14).required("Please enter your password"),
    // confirm_password: Yup.string()
    //     .required()
    //     .oneOf([Yup.ref("password"), null], "Password must match"),
    // category: Yup.string().required("Please enter your category"),
    TermsAndConditions: Yup.boolean()
        .oneOf([true], 'You must accept the terms and conditions')
        .required('You must accept the terms and conditions'),
});

// ResetPassword
export const ResetPasswordSchema = Yup.object({
    email: Yup.string().email().required("Please enter your email"),
});
// SetNewPasswordSchema
export const SetNewPasswordSchema = Yup.object({
    password: Yup.string().min(6).max(14).required("Please enter your password"),
    confirm_password: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Confirm Password is required'),

});

// Set Your New Password
export const verifyOtpSchema = Yup.object({
    otp: Yup.number().required("Please enter your 6 digit otp"),
});


// Information
export const RegisterInfoSchema = Yup.object({
    fullName: Yup.string().min(2).max(25).required("Please enter your name"),
    mobileNo: Yup.number().required("Please enter your 6 digit otp"),
    BusinessName: Yup.string().min(2).max(25).required("Please enter your name"),
    category: Yup.string().required("Please enter your category"),
});

