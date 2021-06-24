import React from "react";
import classes from "../../styles/styles.module.scss";
import dress_model from "../../assets/image/dress_model.svg";
import cart from "../../assets/image/cart.svg";
import favourite from "../../assets/image/favourite.png";
import styles from "../topSales/topSales.module.scss";
import ColorSelection from "../ColorSelection/ColorSelection";

const TopSales = () => {
    return (
        <div className={classes.topSales__wrap}>
            <section className={classes.topSales_wrap}>
                <span className={classes.topSales}>Хит продаж</span>
            </section>
            <div className={classes.inner_container2}>
                <div className={classes.category_card2}>
                    <img src={dress_model} alt="blue-dress" />

                    <div className={styles.favourite}>
                        <img src={favourite} alt="heart-icon" />
                    </div>
                    <div className={classes.cart_wrapper}>
                        <div>
                            <img src={cart} alt="cart-icon" />
                        </div>
                        <span>Добавить в корзину</span>
                    </div>
                    <div className={classes.price_box}>
                        <p className={classes.prevPrice}>12000 c.</p>
                        <p className={classes.currentPrice}>12000 c.</p>
                        <span className={classes.discount}></span>
                    </div>
                    <span
                        style={{
                            paddingRight: "60px",
                            fontWeight: "550",
                            fontSize: "15px",
                        }}
                    >
                        The Organic Cotton Clothes
                    </span>
                    <span style={{ color: "#7c7c7c", paddingRight: "145px" }}>
                        Размер 46-54
                    </span>
                    <ColorSelection />
                </div>
                <div className={classes.category_card2}>
                    <img src={dress_model} alt="blue-dress" />

                    <div className={styles.favourite}>
                        <img src={favourite} alt="heart-icon" />
                    </div>
                    <div className={classes.cart_wrapper}>
                        <img src={cart} alt="cart-icon" />

                        <span>Добавить в корзину</span>
                    </div>
                    <div className={classes.price_box}>
                        <p className={classes.prevPrice}>12000 c.</p>
                        <p className={classes.currentPrice}>12000 c.</p>
                        <span className={classes.discount}></span>
                    </div>
                    <span
                        style={{
                            paddingRight: "60px",
                            fontWeight: "550",
                            fontSize: "15px",
                        }}
                    >
                        The Organic Cotton Clothes
                    </span>
                    <span style={{ color: "#7c7c7c", paddingRight: "145px" }}>
                        Размер 46-54
                    </span>
                    <ColorSelection />
                </div>
                <div className={classes.category_card2}>
                    <img src={dress_model} alt="blue-dress" />

                    <div className={styles.favourite}>
                        <img src={favourite} alt="heart-icon" />
                    </div>
                    <div className={classes.cart_wrapper}>
                        <div>
                            <img src={cart} alt="cart-icon" />
                        </div>
                        <span>Добавить в корзину</span>
                    </div>
                    <div className={classes.price_box}>
                        <p className={classes.prevPrice}>12000 c.</p>
                        <p className={classes.currentPrice}>12000 c.</p>
                        <span className={classes.discount}></span>
                    </div>
                    <span
                        style={{
                            paddingRight: "60px",
                            fontWeight: "550",
                            fontSize: "15px",
                        }}
                    >
                        The Organic Cotton Clothes
                    </span>
                    <span style={{ color: "#7c7c7c", paddingRight: "145px" }}>
                        Размер 46-54
                    </span>
                    <ColorSelection />
                </div>

                <div className={classes.category_card2}>
                    <img src={dress_model} alt="blue-dress" />

                    <div className={styles.favourite}>
                        <img src={favourite} alt="heart-icon" />
                    </div>
                    <div className={classes.cart_wrapper}>
                        <img src={cart} alt="cart-icon" />

                        <span>Добавить в корзину</span>
                    </div>
                    <div className={classes.price_box}>
                        <p className={classes.prevPrice}>12000 c.</p>
                        <p className={classes.currentPrice}>12000 c.</p>
                        <span className={classes.discount}>35%</span>
                    </div>
                    <span
                        style={{
                            paddingRight: "60px",
                            fontWeight: "550",
                            fontSize: "15px",
                        }}
                    >
                        The Organic Cotton Clothes
                    </span>
                    <span style={{ color: "#7c7c7c", paddingRight: "145px" }}>
                        Размер 46-54
                    </span>
                    <ColorSelection />
                </div>
                <div className={classes.category_card2}>
                    <img src={dress_model} alt="blue-dress" />

                    <div className={styles.favourite}>
                        <img src={favourite} alt="heart-icon" />
                    </div>
                    <div className={classes.cart_wrapper}>
                        <img src={cart} alt="cart-icon" />
                        <span>Добавить в корзину</span>
                    </div>
                    <div className={classes.price_box}>
                        <p className={classes.prevPrice}>12000 c.</p>
                        <p className={classes.currentPrice}>12000 c.</p>
                        <span className={classes.discount}></span>
                    </div>
                    <span
                        style={{
                            paddingRight: "60px",
                            fontWeight: "550",
                            fontSize: "15px",
                        }}
                    >
                        The Organic Cotton Clothes
                    </span>
                    <span style={{ color: "#7c7c7c", paddingRight: "145px" }}>
                        Размер 46-54
                    </span>
                    <ColorSelection />
                </div>
                <div className={classes.category_card2}>
                    <img src={dress_model} alt="blue-dress" />

                    <div className={styles.favourite}>
                        <img src={favourite} alt="heart-icon" />
                    </div>
                    <div className={classes.cart_wrapper}>
                        <img src={cart} alt="cart-icon" />
                        <span>Добавить в корзину</span>
                    </div>
                    <div className={classes.price_box}>
                        <p className={classes.prevPrice}>12000 c.</p>
                        <p className={classes.currentPrice}>12000 c.</p>
                        <span className={classes.discount}></span>
                    </div>
                    <span
                        style={{
                            paddingRight: "60px",
                            fontWeight: "550",
                            fontSize: "15px",
                        }}
                    >
                        The Organic Cotton Clothes
                    </span>
                    <span style={{ color: "#7c7c7c", paddingRight: "145px" }}>
                        Размер 46-54
                    </span>
                    <ColorSelection />
                </div>
            </div>
        </div>
    );
};

export default TopSales;
