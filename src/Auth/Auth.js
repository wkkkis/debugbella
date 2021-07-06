import React, { useState, useEffect } from "react";
import firebase from "../firebase";
import app from "../firebase";

function Auth() {
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
        const phoneNumber =  "+996" + name.mobile; 
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

    const SignOut = () => {
        firebase
            .auth()
            .signOut()
            .then(() => {
                window.open("/signin", "_self");
            })
            .catch((error) => {
                // An error happened.
                console.log(error);
            });
    };

    return (
        <div>
            <h2>Login Form</h2>

            <form onSubmit={SignInSubmit}>
                <div id="sign-in-button"></div>
                <input
                    type="number"
                    name="mobile"
                    placeholder="Mobile number"
                    required
                    onChange={handleChange}
                />
                <button type="submit">Submit</button>
            </form>
            <h2>Enter OTP</h2>
            <form onSubmit={SubmitOTP}>
                <input
                    type="number"
                    name="otp"
                    placeholder="OTP Number"
                    required
                    onChange={handleChange}
                />
                <button type="submit">Submit</button>
            </form>
            {/* {state ? <button state={state} onClick={SignOut}></button> : null} */}
        </div>
    );
}
export default Auth;
