import classes from "./AuthForm.module.scss";
import { Link } from "react-router-dom";

<<<<<<< HEAD

const AuthForm = (submitCallback) => {
=======
const AuthForm = () => {
>>>>>>> 044083d2432a4994abc23bf89ff4013eab558090
    return (
        <form className={classes.AuthForm}>
            <h1>BELLA</h1>
            <div className={classes.input_cont}>
                <h5>ВХОД</h5>
                <input
                    type="phone"
                    placeholder="введите номер телефона"
                    name="phone"
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
