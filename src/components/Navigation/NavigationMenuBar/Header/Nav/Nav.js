import NavItem from "./NavItem/NavItem";
import classes from "./Nav.module.scss";
import lupa from "../../../images/lupa.png";
import heart from "../../../images/heart.png";
import shop from "../../../images/shop.png";
import user from "../../../images/user.png";
import bella from "../../../images/bella.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
const Nav = () => {
    const [visible, setVisible] = useState(false);

    let toggle = () => {
        setVisible(!visible);
    };

    return (
        <div className={classes.Nav}>
            <ul className={classes.ul}>
                <div className={classes.left}>
                    <NavItem url="/product">Product</NavItem>
                    <NavItem url="/about">About Us</NavItem>
                    <NavItem url="/new">New</NavItem>
                    <NavItem url="/delivery">Delivery</NavItem>
                    <NavItem url="/contacts"> Contacts</NavItem>
                </div>
                <NavItem url="/product" exact>
                    <img src={bella} alt="logo" />
                </NavItem>

                <div className={classes.right}>
                    <NavItem url="/search">
                        <span className={classes.img}>
                            <img src={lupa} alt="logo" />
                            Search
                        </span>
                    </NavItem>
                    <NavItem url="/favorites">
                        <span className={classes.img}>
                            <img src={heart} alt="logo" />
                            Favorites
                        </span>
                    </NavItem>

                    <span
                        style={{
                            cursor: "pointer",
                            display: "felx",
                            alignItems: "center",
                        }}
                    >
                        <div>
                            <div
                                className={classes.cont}
                                style={{
                                    position: "realtive",
                                    marginRight: "0",
                                }}
                            >
                                <img src={user} alt="logo" />
                                <span
                                    style={{ margin: "0" }}
                                    onClick={toggle}
                                    className={
                                        visible
                                            ? classes.hoverDropDown
                                            : classes.hoverDropDown__color
                                    }
                                >
                                    Profile
                                </span>
                            </div>

                            {visible && (
                                <>
                                    <div
                                        className={classes.dropDown}
                                        style={{ position: "absolute" }}
                                    >
                                        <span className={classes.link}>
                                            <Link to="/product">
                                                мои заказы
                                            </Link>
                                        </span>
                                        <span className={classes.link}>
                                            <Link to="/product">профиль</Link>
                                        </span>
                                        <span className={classes.link}>
                                            <Link to="/product">выйти</Link>
                                        </span>
                                    </div>
                                </>
                            )}
                        </div>
                    </span>

                    <NavItem url="/basket">
                        <span className={classes.img}>
                            <img src={shop} alt="logo" />
                            Basket
                        </span>
                    </NavItem>
                </div>
            </ul>
        </div>
    );
};

export default Nav;
