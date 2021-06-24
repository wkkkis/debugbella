import axios from "axios";
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

    // axios
    //   .post("https://bella-fb3be-default-rtdb.firebaseio.com/default.json", {
    //     name: data.get("name"),
    //     lastName: data.get("lastName"),
    //     phone: data.get("phone"),
    //   })
    //   .then((response) => {
    //     history.replace("/");
    //   });

    // event.preventDefault();
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
