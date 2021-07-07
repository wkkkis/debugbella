import * as yup from "yup";

const phoneRegExp = /\+996\ddddddddd/
export const userSchema = yup.object().shape({
    name: yup.string().required(),
    lastName: yup.string().required(),
    phone: yup.string()
    .required("required")
    .matches(phoneRegExp, 'Phone number is not valid')
    .min(10, "to short")
    .max(10, "to long"),
})


