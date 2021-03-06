import React, { useState } from "react";
import classes from "./Confirmation.module.scss";
import { otpSchema } from "../../../../components/Validations/UserValidation";
const Confirmation = (props) => {
    // const [seconds, setSeconds] = useState(60);
    // const [isActive, setIsActive] = useState(false);
    // useEffect(() => {
    //     timer();
    // }, [seconds]);
    // const timer = (e) => {
    //     if (seconds > 0 && seconds <= 60) {
    //         setTimeout(() => setSeconds(seconds - 1), 1000);
    //     } else if (seconds !== 1) {
    //         clearInterval();
    //         setSeconds("");
    //     }
    // };
    // function toggle(e) {
    //     e.preventDefault();
    //     e.stopPropagation();
    //     setIsActive((prev) => !prev);
    // }
    const [name, setName] = useState();
    const handleChange = (e) => {
        setName({
            otp: e.target.value,
        });
    };
    const createOTP = async (e) => {
        const isValid = await otpSchema.isValid(name);
        console.log(isValid);
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
                createOTP();
                alert("Вы успешно зарегистрированы!Добро пожаловать!");
                props.setState(true);

                // ...
            })
            .catch((error) => {
                // User couldn't sign in (bad verification code?)
                // ...
            });
    };

    return (
        <form className={classes.Confirmation} onSubmit={SubmitOTP}>
            <div id="sign-in-button"></div>

            <div className={classes.input_cont}>
                <h5>Введите код подтвержения</h5>
                <input
                    type="text"
                    placeholder="введите код"
                    onChange={handleChange}
                    name="otp"
                />
            </div>
            <div className={classes.btn_cont}>
                <button className={classes.btn_3}>
                    <p>Продолжить</p>
                </button>

                <button className={classes.btn_2}>
                    <p>Не пришло SMS?</p>
                </button>
                {/* {isActive && ( */}
                <button className={classes.btn}>
                    <p>Отправить снова </p>
                    <p></p>
                </button>
                {/* )} */}
            </div>
        </form>
    );
};

export default Confirmation;
