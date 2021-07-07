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
import Register from "../../Auth/Register/Register";

const Nav = () => {
    const [visible, setVisible] = useState(false);
    let toggle = () => {
        setVisible(!visible);
    };

    const [vid, setVid] = useState(false);
    let toggle1 = () => {
        setVid(!vid);
    };

    const [basket, setBasket] = useState(false);
    let handleBasketClick = () => {
        setBasket(!basket);
    };

    const [profile, setProfile] = useState(false);

    let handleProfile = () => {
        setProfile(true);
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
                                onClick={toggle1}
                                className={
                                    vid
                                        ? classes.hoverSearch
                                        : classes.hoverSearchDown
                                }
                                style={{ cursor: "pointer", margin: "0" }}
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
                                <img
                                    src={user}
                                    alt="logo"
                                    onClick={handleProfile}
                                />
                                {profile ? (
                                    <>
                                        <div
                                            className={classes.register_wrapper}
                                        >
                                            <Register />
                                        </div>
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
                                    </>
                                ) : (
                                    <span onClick={handleProfile}>Войти</span>
                                )}
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
                                            <Link to="/notFound">выйти</Link>
                                        </span>
                                    </div>
                                </>
                            )}
                        </div>
                    </span>

                    <span
                        className={classes.basket}
                        onClick={handleBasketClick}
                    >
                        <span className={classes.img}>
                            <img src={shop} alt="logo" />
                            Корзина
                        </span>
                    </span>
                </div>
            </ul>
            <Basket setBasket={setBasket} basket={basket} />
        </div>
    );
};

export default Nav;
