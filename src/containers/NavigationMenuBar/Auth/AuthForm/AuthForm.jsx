import React, { useState } from "react";
import classes from "./AuthForm.module.scss";

const AuthForm = () => {
<<<<<<< HEAD
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
=======
    // const handleChange = (e) => {
    //     setName({
    //         savedPhone: e.target.value,
    //     });
    // };
    // const createSavedPhone = async (e) => {

    //     const isValid = await authSchema.isValid(formData);
    //     console.log(isValid);
    // };

>>>>>>> e0a590037791378aa159b5806854bbb2d5b5c676
    return (
        <form className={classes.AuthForm}>
            <h1>BELLA</h1>
            <div className={classes.input_cont}>
                <h5>ВХОД</h5>
                <input
                    type="phone"
                    placeholder="Введите пароль"
                    name="savedPhone"
                    // onChange={handleChange}
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
