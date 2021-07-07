import classes from "./Header.module.scss";
import Nav from "./Nav/Nav";
import DrawerOpen from "./Drawer/DrawerOpen/DrawerOpen";
import { NavLink } from "react-router-dom";
import shop from "../../../assets/image/shop.png";
import lupa from "../../../assets/image/lupa.png";
import Logo from "./Nav/Logo/Logo";

const Header = ({ openDrawer }) => {
    return (
        <div className={classes.header}>
            <DrawerOpen onClick={openDrawer} />
            <div className={classes.logo}>
                <Logo />
            </div>
            <div className={classes.icon}>
                <NavLink to="/search">
                    <img src={lupa} alt="logo" className={classes.img2} />
                </NavLink>
                <span>
                    <img src={shop} alt="logo" className={classes.img1} />
                </span>
            </div>
            <Nav />
        </div>
    );
};

export default Header;
