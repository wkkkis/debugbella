import React from "react";
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

            <div className={classes.btn_cont}>
                <span>
                    <input
                        type="checkbox"
                        name="checked"
                        className={classes.check}
                    />
                    <p>Согласен с условиями публичной аферты</p>
                </span>
                <button className={classes.btn}>
                    <p>Продолжить </p>
                </button>
            </div>
        </form>
    );
};

export default RegisterForm;
