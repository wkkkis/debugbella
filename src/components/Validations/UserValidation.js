import * as yup from "yup";

export const userSchema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    phone: yup
        .string()
        .matches(/\+[996]\d{10}[0-9]/g)
        .max(13, "too long")
        .required("type your phone number"),
    password: yup
        .string()
        // .matches(/^[A-Za-z]\w{7,15}$/)
        .matches(/[a-z]/, "at least one lowercase char")
        .matches(/[A-Z]/, "at least one uppercase char")
        .matches(
            /[a-zA-Z]+[^a-zA-Z\s]+/,
            "at least 1 number or special character (@,!,#, etc)."
        )
        .max(15, "too long")
        .required("password is needed"),
    repeatPassword: yup
        .string()
        .oneOf([yup.ref("password"), null], "Passwords don't match!")
        .required(),
});

export const otpSchema = yup.object().shape({
    otp: yup.number().required(),
});

export const authSchema = yup.object().shape({
    savedPhone: yup
        .string()
        .matches(/\+[996]\d{10}[0-9]/g)
        .max(13, "too long")
        .required(),
});
export const subSchema = yup.object().shape({
    fullName: yup.string().required(),
    phone_num: yup
        .string()
        .matches(/\+[996]\d{10}[0-9]/g)
        .max(13, "too long")
        .required("type your phone number"),
});
export const orderSchema = yup.object().shape({
    name: yup.string().required(),
    surname: yup.string().required(),
    phone: yup
        .string()
        .matches(/\+[996]\d{10}[0-9]/g)
        .max(13, "too long")
        .required(),
    country: yup.string().required(),
    city: yup.string().required(),
});
