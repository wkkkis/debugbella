import React, { useState, useEffect } from "react";
import classes from "./RegisterForm.module.scss";
import { userSchema } from "../../../../../components/Validations/UserValidation";
import app from "../../../../../firebase";
import Confirmation from "../../Confirmation/Confirmation";
const RegisterForm = () => {
    const [state, setState] = useState(false);
    const [name, setName] = useState();
    const handleChange = (e) => {
        setName({
            firstName: e.target.value,
            lastName: e.target.value,
            phone: e.target.value,
            password: e.target.value,
            repeatPassword: e.target.value,
        });
    };
    const createUser = async (e) => {
        const isValid = await userSchema.isValid(name);
        console.log(isValid);
    };
    useEffect(() => {
        window.recaptchaVerifier = new app.auth.RecaptchaVerifier(
            "sign-in-button",
            {
                size: "invisible",
                callback: (response) => {
                    // reCAPTCHA solved, allow signInWithPhoneNumber.
                    SignInSubmit();
                    console.log("Recaptca varified");
                },
                defaultCountry: "KG",
            }
        );
    }, []);
    const SignInSubmit = (e) => {
        e.preventDefault();
        const phoneNumber = name.phone;
        console.log(name);
        const appVerifier = window.recaptchaVerifier;
        app.auth()
            .signInWithPhoneNumber(phoneNumber, appVerifier)
            .then((confirmationResult) => {
                // SMS sent. Prompt user to type the code from the message, then sign the
                // user in with confirmationResult.confirm(code).
                window.confirmationResult = confirmationResult;
                console.log(confirmationResult);
                console.log("OTP has been sent");
                createUser();
                // ...
                appVerifier.clear();
            })
            .catch((error) => {
                // Error; SMS not sent
                // ...
                console.log(error);
                console.log("SMS not sent");
                appVerifier.clear();
            });
    };

    // const SignOut = () => {
    //     firebase
    //         .auth()
    //         .signOut()
    //         .then(() => {
    //             window.open("/signin", "_self");
    //         })
    //         .catch((error) => {
    //             // An error happened.
    //             console.log(error);
    //         });
    // };

    return (
        <>
            <form className={classes.RegisterForm} onSubmit={SignInSubmit}>
                <div id="sign-in-button"></div>
                <h3>Регистрация</h3>
                <div className={classes.input_cont}>
                    <p>Ваше имя</p>
                    <input
                        type="text"
                        placeholder="введите имя"
                        name="firstName"
                        id="name"
                        onChange={handleChange}
                    />
                </div>

                <div className={classes.input_cont}>
                    <p>Ваше Фамилия</p>
                    <input
                        type="text"
                        placeholder="введите фамилию"
                        name="lastName"
                        onChange={handleChange}
                        id="lastName "
                    />
                </div>

                <div className={classes.input_cont}>
                    <p>Номер телефона</p>
                    <input
                        onChange={handleChange}
                        type="text"
                        name="phone"
                        placeholder="введите номер телефона"
                        required
                        // pattern="0[0-9]{9}|+[0-9]{13}"
                        // minLength="9"
                        // maxLength="13"
                    />
                </div>
                <div className={classes.input_cont}>
                    <p>Введите пароль</p>
                    <input
                        onChange={handleChange}
                        type="text"
                        name="password"
                        placeholder="введите пароль"
                        // pattern="0[0-9]{9}|+[0-9]{13}"
                        // minLength="9"
                        // maxLength="13"
                    />
                </div>
                <div className={classes.input_cont}>
                    <p>Подтвердите пароль</p>
                    <input
                        onChange={handleChange}
                        type="text"
                        name="repeatPassword"
                        placeholder="подтвердите пароль"

                        // pattern="0[0-9]{9}|+[0-9]{13}"
                        // minLength="9"
                        // maxLength="13"
                    />
                </div>
                <div className={classes.btn_cont}>
                    <span className={classes.span}>
                        <input
                            type="checkbox"
                            name="checked"
                            required
                            className={classes.check}
                        />
                        <p>Согласен с условиями публичной оферты</p>
                    </span>
                    <button className={classes.btn}>
                        <p>Продолжить </p>
                    </button>
                </div>
            </form>
            <Confirmation
            // state={state}
            // setState={setState}
            // name={name}
            // setName={setName}
            // handleChange={handleChange}
            />
        </>
    );
};

export default RegisterForm;
