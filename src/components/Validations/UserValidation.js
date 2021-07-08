import * as yup from "yup";

export const userSchema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    phone: yup
        .string()
        .required()
        .matches(/\+[996]\d{10}[0-9]/g)
        .max(13, "too long"),
    password: yup
        .string()
        .required()
        .matches(/^[A-Za-z]\w{7,15}$/)
        .max(15, "too long"),
    repeatPassword: yup
        .string()
        .required()
        .matches(/^[A-Za-z]\w{7,15}$/),
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
// export const subSchema = yup.object().shape({
//     fullName: yup.string().required(),
//     phone_num: yup
//         .string()
//         .required()
//         .matches(/\+[996]\d{10}[0-9]/g)
//         .max(13, "too long"),
// });
export const validPhone = new RegExp(/\+[996]\d{10}[0-9]/g);
