import { useHistory } from "react-router-dom";
import classes from "./Register.module.scss";
import RegisterForm from "./RegisterForm/RegisterForm";

const Register = () => {

  const history = useHistory();

  function cancelCallback() {
    history.replace("/");
  }

  function submitCallback(event) {
    const data = new FormData(event.target);
  }

  return (
    <div className={classes.Register}>
      <RegisterForm
        submitCallback={submitCallback}
        cancelCallback={cancelCallback}
      />
    </div>
  );
};

export default Register;
