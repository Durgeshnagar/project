import * as Yup from 'yup';

export const signUpSchema = Yup.object({

    Firstname:Yup.string().min(4).max(8).required("please enter your firstname"),
    Lastname:Yup.string().min(4).max(8).required("please enter your lastname"),
    Email:Yup.string().email().required("please enter your email"),
    // Phone:Yup.required("please enter mobile number"),
    Website:Yup.string().required("please enter your website"),
    Password:Yup.string().min(6).required("please enter your password"),
    Confirm_Password:Yup.string().required().oneOf(Yup.ref("password"),null,"password must match"),




});
