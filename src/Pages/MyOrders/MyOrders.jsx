import React from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/styles.module.scss";
import classes from "./MyOrders.module.scss";
import summer from "../../assets/image/summer.png";
const MyOrders = () => {
    return (
        <>
            <div className={styles.mainContainer}>
                <div className={styles.breadCrumbs}>
                    <Link to="/" className={styles.breadCrumbs__left_col}>
                        <span>Главная /&ensp;</span>
                    </Link>
                    <span className={styles.breadCrumbs__right_col}>
                        Мои заказы
                    </span>
                </div>
            </div>

            <div className={classes.main_container}>
                <section className={classes.main_container__text}>
                    <span>Мои заказы</span>
                </section>
                <div className={classes.main_container__inner}>
                    <div className={classes.card_wrapper}>
                        <div className={classes.card_wrapper__all_images}>
                            <div className={classes.all_images}>
                                <section
                                    className={
                                        classes.card_wrapper__all_images__text
                                    }
                                >
                                    <span>Заказ №2032e231w </span>
                                    <span>Доставлено</span>
                                </section>
                                <section>
                                    <span className={classes.date}>
                                        24/03/21
                                    </span>
                                </section>
                            </div>
                            <div
                                className={
                                    classes.card_wrapper__all_images__images
                                }
                            >
                                <div
                                    className={
                                        classes.card_wrapper__all_images__images__one
                                    }
                                >
                                    <img src={summer} alt="" />
                                </div>
                                <div
                                    className={
                                        classes.card_wrapper__all_images__images__one
                                    }
                                >
                                    <img src={summer} alt="" />
                                </div>
                                <div
                                    className={
                                        classes.card_wrapper__all_images__images__one
                                    }
                                >
                                    <img src={summer} alt="" />
                                </div>
                                <div
                                    className={
                                        classes.card_wrapper__all_images__images__one
                                    }
                                >
                                    <img src={summer} alt="" />
                                </div>
                                <button className={classes.btn}>
                                    <p>+10</p>
                                </button>
                            </div>
                            <section className={classes.price_section_wrapper}>
                                <span className={classes.price_section}>
                                    23200c
                                </span>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MyOrders;
