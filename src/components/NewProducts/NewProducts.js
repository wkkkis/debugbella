import React from "react";
import classes from "../../styles/styles.module.scss";
import dress_model from "../../assets/image/dress_model.svg";
import cart from "../../assets/image/cart.svg";
import favourite from "../../assets/image/favourite.png";
import ColorSelection from "../ColorSelection/ColorSelection";
import new_logo from "../../assets/image/new.svg";

const NewProducts = () => {
    return (
        <div className={classes.topSales__wrap}>
            <section className={classes.topSales_wrap}>
                <span className={classes.topSales}>Новинки</span>
            </section>
            <div className={classes.inner_container2}>
                <div className={classes.category_card2}>
                    <img src={dress_model} alt="blue-dress" />
                    <div className={classes.icon_wrapper}>
                        <div>
                            <img src={new_logo} alt="new-product_icon" />
                        </div>
                        <div className={classes.favourite}>
                            <img src={favourite} alt="heart-icon" />
                        </div>
                    </div>
                    <div className={classes.cart_wrapper}>
                        <div>
                            <img src={cart} alt="cart-icon" />
                        </div>
                        <div>
                            <p>Добавить в корзину</p>
                        </div>
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
                            letterSpacing: "4%",
                            lineHeight: "30px",
                        }}
                    >
                        The Organic Cotton Clothes
                    </span>
                    <p style={{ color: "#7c7c7c", paddingRight: "145px" }}>
                        Размер 46-54
                    </p>
                    <ColorSelection />
                </div>
                <div className={classes.category_card2}>
                    <img src={dress_model} alt="blue-dress" />

                    <div className={classes.icon_wrapper}>
                        <div>
                            <img src={new_logo} alt="new-product_icon" />
                        </div>
                        <div className={classes.favourite}>
                            <img src={favourite} alt="heart-icon" />
                        </div>
                    </div>
                    <div className={classes.cart_wrapper}>
                        <div>
                            <img src={cart} alt="cart-icon" />
                        </div>
                        <div>
                            <p>Добавить в корзину</p>
                        </div>
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
                            letterSpacing: "4%",
                            lineHeight: "30px",
                        }}
                    >
                        The Organic Cotton Clothes
                    </span>
                    <p style={{ color: "#7c7c7c", paddingRight: "145px" }}>
                        Размер 46-54
                    </p>
                    <ColorSelection />
                </div>
                <div className={classes.category_card2}>
                    <img src={dress_model} alt="blue-dress" />
                    <div className={classes.icon_wrapper}>
                        <div>
                            <img src={new_logo} alt="new-product_icon" />
                        </div>
                        <div className={classes.favourite}>
                            <img src={favourite} alt="heart-icon" />
                        </div>
                    </div>
                    <div className={classes.cart_wrapper}>
                        <div>
                            <img src={cart} alt="cart-icon" />
                        </div>
                        <div>
                            <p>Добавить в корзину</p>
                        </div>
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
                            letterSpacing: "4%",
                            lineHeight: "30px",
                        }}
                    >
                        The Organic Cotton Clothes
                    </span>
                    <p style={{ color: "#7c7c7c", paddingRight: "145px" }}>
                        Размер 46-54
                    </p>
                    <ColorSelection />
                </div>

                <div className={classes.category_card2}>
                    <img
                        src={dress_model}
                        alt="blue-dress"
                        className={classes.mainProduct_img}
                    />
                    <div className={classes.icon_wrapper}>
                        <div>
                            <img src={new_logo} alt="new-product_icon" />
                        </div>
                        <div className={classes.favourite}>
                            <img src={favourite} alt="heart-icon" />
                        </div>
                    </div>
                    <div className={classes.cart_wrapper}>
                        <div>
                            <img src={cart} alt="cart-icon" />
                        </div>
                        <div>
                            <p>Добавить в корзину</p>
                        </div>
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
                            letterSpacing: "4%",
                            lineHeight: "30px",
                        }}
                    >
                        The Organic Cotton Clothes
                    </span>
                    <p style={{ color: "#7c7c7c", paddingRight: "145px" }}>
                        Размер 46-54
                    </p>
                    <ColorSelection />
                </div>
                <div className={classes.category_card2}>
                    <img src={dress_model} alt="blue-dress" />
                    <div className={classes.icon_wrapper}>
                        <div>
                            <img src={new_logo} alt="new-product_icon" />
                        </div>
                        <div className={classes.favourite}>
                            <img src={favourite} alt="heart-icon" />
                        </div>
                    </div>
                    <div className={classes.cart_wrapper}>
                        <div>
                            <img src={cart} alt="cart-icon" />
                        </div>
                        <div>
                            <p>Добавить в корзину</p>
                        </div>
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
                            letterSpacing: "4%",
                            lineHeight: "30px",
                        }}
                    >
                        The Organic Cotton Clothes
                    </span>
                    <p style={{ color: "#7c7c7c", paddingRight: "145px" }}>
                        Размер 46-54
                    </p>
                    <ColorSelection />
                </div>
                <div className={classes.category_card2}>
                    <img src={dress_model} alt="blue-dress" />
                    <div className={classes.icon_wrapper}>
                        <div>
                            <img src={new_logo} alt="new-product_icon" />
                        </div>
                        <div className={classes.favourite}>
                            <img src={favourite} alt="heart-icon" />
                        </div>
                    </div>

                    <div className={classes.cart_wrapper}>
                        <div>
                            <img src={cart} alt="cart-icon" />
                        </div>
                        <div>
                            <p>Добавить в корзину</p>
                        </div>
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
                            letterSpacing: "4%",
                            lineHeight: "30px",
                        }}
                    >
                        The Organic Cotton Clothes
                    </span>
                    <p style={{ color: "#7c7c7c", paddingRight: "145px" }}>
                        Размер 46-54
                    </p>
                    <ColorSelection />
                </div>
                <div className={classes.category_card2}>
                    <img src={dress_model} alt="blue-dress" />

                    <div className={classes.icon_wrapper}>
                        <div>
                            <img src={new_logo} alt="new-product_icon" />
                        </div>
                        <div className={classes.favourite}>
                            <img src={favourite} alt="heart-icon" />
                        </div>
                    </div>
                    <div className={classes.cart_wrapper}>
                        <div>
                            <img src={cart} alt="cart-icon" />
                        </div>
                        <div>
                            <p>Добавить в корзину</p>
                        </div>
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
                            letterSpacing: "4%",
                            lineHeight: "30px",
                        }}
                    >
                        The Organic Cotton Clothes
                    </span>
                    <p style={{ color: "#7c7c7c", paddingRight: "145px" }}>
                        Размер 46-54
                    </p>
                    <ColorSelection />
                </div>
                <div className={classes.category_card2}>
                    <img src={dress_model} alt="blue-dress" />
                    <div className={classes.icon_wrapper}>
                        <div>
                            <img src={new_logo} alt="new-product_icon" />
                        </div>
                        <div className={classes.favourite}>
                            <img src={favourite} alt="heart-icon" />
                        </div>
                    </div>
                    <div className={classes.cart_wrapper}>
                        <div>
                            <img src={cart} alt="cart-icon" />
                        </div>
                        <div>
                            <p>Добавить в корзину</p>
                        </div>
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
                            letterSpacing: "4%",
                            lineHeight: "30px",
                        }}
                    >
                        The Organic Cotton Clothes
                    </span>
                    <p style={{ color: "#7c7c7c", paddingRight: "145px" }}>
                        Размер 46-54
                    </p>
                    <ColorSelection />
                </div>
            </div>
        </div>
    );
};

export default NewProducts;
