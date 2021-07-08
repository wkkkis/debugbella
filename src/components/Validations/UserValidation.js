import * as yup from "yup";

export const userSchema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    phone: yup
        .string()
        .required()
        .matches(/\+[996]\d{10}[0-9]/g)
        .max(13, "too long"),
});
export const otpSchema = yup.object().shape({
    otp: yup.number().required(),
});
export const authSchema = yup.object().shape({
    savedPhone: yup
        .string()
        .required()
        .matches(/\+[996]\d{10}[0-9]/g)
        .max(13, "too long"),
});
