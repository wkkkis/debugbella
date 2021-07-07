<<<<<<< HEAD
import bella from "../../../../../assets/image/bella.svg"
import classes from "./Logo.module.scss"
=======
import bella from "../../../../../assets/image/bella.svg";
import classes from "./Logo.module.scss";
>>>>>>> 81409da26ba3fdf852f364aa01fc4a8b48f91823
const Logo = () => {
    return (
        <div>
            <img src={bella} alt="logo" className={classes.logo} />
        </div>
    );
};

export default Logo;
