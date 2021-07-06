import { useHistory } from "react-router-dom";
import classes from "./Auth.module.scss";
import AuthForm from "./AuthForm/AuthForm";

const Auth = () => {
    const history = useHistory();

    function cancelCallback() {
        history.replace("/");
    }
    function submitCallback(event) {
        const data = new FormData(event.target);
    }

    return (
        <div className={classes.Auth}>
            <AuthForm
                submitCallback={submitCallback}
                cancelCallback={cancelCallback}
            />
        </div>
    );
};

export default Auth;
