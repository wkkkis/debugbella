import React, { useState, useEffect } from "react";
import classes from "./RegisterForm.module.scss";
// import firebase from "../../../../../firebase";
import app from "../../../../../firebase";
import Confirmation from "../../Confirmation/Confirmation";

const RegisterForm = ({ submitCallback, submitHandler }) => {
    const [state, setState] = useState(false);
    const [name, setName] = useState();
    const handleChange = (e) => {
        // const {name, value } = e.target
        setName({
            [e.target.name]: e.target.value,
        });
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
        const phoneNumber = "+996" + name.phone;
        console.log(phoneNumber);
        const appVerifier = window.recaptchaVerifier;
        app.auth()
            .signInWithPhoneNumber(phoneNumber, appVerifier)
            .then((confirmationResult) => {
                // SMS sent. Prompt user to type the code from the message, then sign the
                // user in with confirmationResult.confirm(code).
                window.confirmationResult = confirmationResult;
                console.log(confirmationResult);
                console.log("OTP has been sent");
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
    const SubmitOTP = (e) => {
        e.preventDefault();
        const code = name.otp;
        console.log(code);
        window.confirmationResult
            .confirm(code)
            .then((result) => {
                // User signed in successfully.
                const user = result.user;
                console.log(JSON.stringify(user));
                alert("User is verified");
                setState(true);
                // ...
            })
            .catch((error) => {
                // User couldn't sign in (bad verification code?)
                // ...
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
                <h1>BELLA</h1>
                <div className={classes.input_cont}>
                    <h5>Ваше имя</h5>
                    <input
                        type="text"
                        placeholder="введите имя"
                        name="name"
                        // id="name"
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className={classes.input_cont}>
                    <h5>Ваше Фамилия</h5>
                    <input
                        onChange={handleChange}
                        type="text"
                        placeholder="введите фамилию"
                        name="lastName"
                        required
                        id="lastName "
                    />
                </div>

                <div className={classes.input_cont}>
                    <h5>Номер телефона</h5>
                    <input
                        onChange={handleChange}
                        type="text"
                        name="phone"
                        placeholder="введите номер телефона"
                        required
                        // pattern="0[0-9]{9}|+[0-9]{13}"
                        minLength="9"
                        maxLength="13"
                    />
                </div>
                <div className={classes.btn_cont}>
                    <span>
                        <input
                            onChange={handleChange}
                            type="checkbox"
                            name="checked"
                            required
                            className={classes.check}
                        />
                        <p>Согласен с условиями публичной оферты</p>
                    </span>
                    <button className={classes.btn} onClick={SubmitOTP}>
                        <p>Продолжить </p>
                    </button>
                </div>
            </form>
            {/* <Confirmation SubmitOTP={SubmitOTP} /> */}
        </>
    );
};

export default RegisterForm;
