import React, { useState, useEffect } from "react";
import classes from "./RegisterForm.module.scss";
import { userSchema } from "../../../../../components/Validations/UserValidation";

const RegisterForm = () => {

    const createUser = async (event) => {
        event.preventDefault()
        let  formData = {
            name: event.target[0].value,
            lastName: event.target[1].value,
            phone: event.target[2].value,
        };
        const isValid = await userSchema.isValid(formData)
        console.log(isValid);
    };

    return (
        <>
        <form className={classes.Register} onSubmit={createUser}>
            <h1>BELLA</h1>
            <div className={classes.input_cont}>
                <h5>Ваше имя</h5>
                <input
                    type="text"
                    placeholder="введите имя"
                    name="name"
                    id="name"
                />
            </div>

            <div className={classes.input_cont}>
                <h5>Ваше Фамилия</h5>
                <input
                    type="text"
                    placeholder="введите фамилию"
                    name="lastName"
                    id="lastName "
                />
            </div>

            <div className={classes.input_cont}>
                <h5>Номер телефона</h5>
                <input
                    type="text"
                    name="phone"
                    placeholder="+996"
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
                        // minLength="9"
                        // maxLength="13"
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
                    <button className={classes.btn}>
                        <p>Продолжить </p>
                    </button>
                </div>
            </form>
            <Confirmation
                SubmitOTP={SubmitOTP}
                state={state}
                setState={setState}
            />
        </>
    );
};

export default RegisterForm;
