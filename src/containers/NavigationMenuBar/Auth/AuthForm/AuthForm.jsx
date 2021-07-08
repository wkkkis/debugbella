import React, { useState, useEffect } from "react";
import classes from "./AuthForm.module.scss";
import { Link } from "react-router-dom";
import authSchema from "../../../../components/Validations/UserValidation";

const AuthForm = () => {
<<<<<<< HEAD
=======
    const [state, setState] = useState(false);
    const [name, setName] = useState();
    const handleChange = (e) => {
        setName({
            savedPhone: e.target[0].value,
        });
    };
    const createSavedPhone = async (e) => {
        // event.preventDefault();
        let formData = {
            savedPhone: e.target[0].value,
        };
        const isValid = await authSchema.isValid(formData);
        console.log(isValid);
    };
>>>>>>> 28087da40f8bbc12713d720381374a2a07e93cb1
    return (
        <form className={classes.AuthForm} onSubmit={createSavedPhone}>
            <h1>BELLA</h1>
            <div className={classes.input_cont}>
                <h5>ВХОД</h5>
                <input
                    type="phone"
                    placeholder="Введите номер телефона"
                    name="savedPhone"
                    onChange={handleChange}
                />
            </div>
            <div className={classes.btn_cont}>
                <button className={classes.btn_reg}>
                    <p>войти </p>
                </button>
                <Link className={classes.btn_2} to="/register">
                    Зарегистрироваться
                </Link>
            </div>
        </form>
    );
};

export default AuthForm;
