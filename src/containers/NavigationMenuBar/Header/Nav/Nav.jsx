import NavItem from "./NavItem/NavItem";
import classes from "./Nav.module.scss";
import lupa from "../../../../assets/image/lupa.png";
import heart from "../../../../assets/image/heart.png";
import shop from "../../../../assets/image/shop.png";
import user from "../../../../assets/image/user.png";
import bella from "../../../../assets/image/bella.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import Basket from "../../../../Pages/Basket/Basket";

const Nav = () => {
    const [visible, setVisible] = useState(false);

    let toggle = () => {
        setVisible(!visible);
    };

    const [vid, setVid] = useState(false);

    let toggle1 = () => {
        setVid(!vid);
    };

    return (
        <div className={classes.Nav}>
            <ul className={classes.ul}>
                <div className={classes.left}>
                    <NavItem url="/">Товары</NavItem>
                    <NavItem url="/about">О нас</NavItem>
                    <NavItem url="/news">Новости</NavItem>
                    <NavItem url="/delivery">Доставка</NavItem>
                    <NavItem url="/contacts"> Контакты</NavItem>
                </div>
                <NavItem url="/" exact>
                    <img src={bella} alt="logo" />
                </NavItem>

                <div className={classes.right}>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                        }}
                    >
                        <div
                            className={classes.cont}
                            style={{
                                position: "realtive",
                                marginRight: "0",
                            }}
                        >
                            <span
                                style={{ margin: "0" }}
                                onClick={toggle1}
                                className={
                                    vid
                                        ? classes.hoverSearch
                                        : classes.hoverSearchDown
                                }
                                style={{ cursor: "pointer" }}
                            >
                                <img src={lupa} alt="logo" />
                                Поиск
                            </span>
                        </div>
                    </div>
                    {vid && (
                        <>
                            <div className={classes.div1}>
                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        height: "44px",
                                    }}
                                >
                                    <input
                                        className={classes.input}
                                        type="text"
                                        placeholder="Искать"
                                    />
                                    <span>
                                        <button
                                            className={classes.btn1}
                                            onClick={toggle1}
                                        >
                                            <div className={classes.div2}>
                                                &times;
                                            </div>
                                        </button>
                                    </span>
                                </div>
                            </div>
                        </>
                    )}

                    <NavItem url="/favourites">
                        <span className={classes.img}>
                            <img src={heart} alt="logo" />
                            Избранные
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
                                    Профиль
                                </span>
                            </div>

                            {visible && (
                                <>
                                    <div
                                        className={classes.dropDown}
                                        style={{ position: "absolute" }}
                                    >
                                        <span className={classes.link}>
                                            <Link to="/orders">мои заказы</Link>
                                        </span>
                                        <span className={classes.link}>
                                            <Link to="/profile">профиль</Link>
                                        </span>
                                        <span className={classes.link}>
                                            <Link to="/notFound">выйти</Link>
                                        </span>
                                    </div>
                                </>
                            )}
                        </div>
                    </span>

                    <NavItem url="/basket">
                        <span className={classes.img}>
                            <img src={shop} alt="logo" />
                            Корзина
                        </span>
                    </NavItem>
                </div>
            </ul>
        </div>
    );
};

export default Nav;
