import classes from "./AuthForm.module.scss";
import { Link } from "react-router-dom";


const AuthForm = (submitCallback) => {
    return (
        <form className={classes.AuthForm}>
            <h1>BELLA</h1>
            <div className={classes.input_cont}>
                <h5>ВХОД</h5>
                <input
                    type="phone"
                    placeholder="введите номер телефона"
                    name="phone"
                    required
                    // pattern="0[0-9]{9}|+[0-9]{13}"
                    minLength="9"
                    maxLength="13"
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
