import NavItem from "./NavItem/NavItem";
import classes from "./Nav.module.scss";
import lupa from "../../../../assets/image/lupa.png";
import heart from "../../../../assets/image/heart.png";
import shop from "../../../../assets/image/shop.png";
import user from "../../../../assets/image/user.png";
<<<<<<< HEAD
import bella from "../../../../assets/image/bella.svg"; 
=======
import bella from "../../../../assets/image/bella.svg";
>>>>>>> 4e8e38bca780f86f28141a3dff34ee66866036b5
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
                    <NavItem url="/">Product</NavItem>
                    <NavItem url="/about">About Us</NavItem>
                    <NavItem url="/new">New</NavItem>
                    <NavItem url="/delivery">Delivery</NavItem>
                    <NavItem url="/contacts"> Contacts</NavItem>
                </div>
                <NavItem url="/" exact>
                    <img src={bella} alt="logo" />
                </NavItem>

                <div className={classes.right}>
                    <NavItem url="/search">
                        <span className={classes.img}>
                            <img src={lupa} alt="logo" />
                            Search
                        </span>
                    </NavItem>
                    <NavItem url="/favourites">
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
