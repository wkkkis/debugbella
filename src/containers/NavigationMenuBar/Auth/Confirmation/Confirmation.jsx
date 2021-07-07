import React, { useState, useEffect } from "react";

import classes from "./Confirmation.module.scss";

const Confirmation = (props) => {
    const [seconds, setSeconds] = useState(60);
    const [isActive, setIsActive] = useState(false);
    useEffect((e) => {
        timer();
    }, []);
    function timer() {
        // e.preventDefault();
        if (seconds > 0 && seconds <= 60) {
            setTimeout(() => setSeconds(seconds - 1), 1000);
            setIsActive(true);
        } else if (seconds !== 1) {
            clearInterval();
            setSeconds("");
        }
    }
    // function toggle(e) {
    //     e.preventDefault();
    //     setIsActive(!isActive);
    // }

    return (
        <form className={classes.Confirmation}>
            <h1>BELLA</h1>
            <div className={classes.input_cont}>
                <h5>ВХОД</h5>
                <input
                    type="phone"
                    placeholder="введите код"
                    onChange={props.handleChange}
                    name="otp"
                    // required
                />
            </div>
            <div className={classes.btn_cont}>
                <button className={classes.btn_3} onClick={props.SubmitOTP}>
                    <p>Продолжить</p>
                </button>

                <button className={classes.btn_2} onClick={timer}>
                    <p>Не пришло SMS?</p>
                </button>
                <button className={classes.btn}>
                    <p>Отправить снова </p>
                    {isActive && <p>{seconds}</p>}
                </button>
            </div>
        </form>
    );
};

export default Confirmation;
