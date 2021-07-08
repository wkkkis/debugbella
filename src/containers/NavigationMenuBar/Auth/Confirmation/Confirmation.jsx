import React from "react";
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

    const createOTP = async (e) => {
        // event.preventDefault();
        let otp = {
            otp: e.target[0].value,
        };
        const isValid = await otpSchema.isValid(otp);
        console.log(isValid);
    };
    const SubmitOTP = (e) => {
        e.preventDefault();
        const code = props.name.otp;
        console.log(code);
        window.confirmationResult
            .confirm(code)
            .then((result) => {
                // User signed in successfully.
                const user = result.user;
                console.log(JSON.stringify(user));
                createOTP();
                alert("Пользователь зарегистрирован");
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
            <h1>BELLA</h1>
            <div className={classes.input_cont}>
                <h5>ВХОД</h5>
                <input
                    type="tel"
                    placeholder="введите код"
                    onChange={props.handleChange}
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
