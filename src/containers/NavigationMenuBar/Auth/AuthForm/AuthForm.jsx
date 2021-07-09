import React from "react";
import classes from "./AuthForm.module.scss";

const AuthForm = () => {
    return (
        <form className={classes.AuthForm}>
            <h1>BELLA</h1>
            <div className={classes.input_cont}>
                <h5>ВХОД</h5>
                <input
                    type="phone"
                    placeholder="Введите пароль"
                    name="savedPhone"
                />
            </div>
            <div className={classes.btn_cont}>
                <button className={classes.btn_reg}>
                    <p>войти </p>
                </button>
                <button className={classes.btn_2}>Зарегистрироваться</button>
            </div>
        </form>
    );
};

export default AuthForm;
