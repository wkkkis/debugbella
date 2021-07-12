import React from "react";
import { Link } from "react-router-dom";
import classes from "../Contacts/Contacts.module.scss";
import styles from "../../styles/styles.module.scss";

const Contacts = () => {
    return (
        <>
            <div className={styles.mainContainer}>
                <div className={styles.breadCrumbs}>
                    <Link to="/" className={styles.breadCrumbs__left_col}>
                        <span>Главная /&ensp;</span>
                    </Link>
                    <span className={styles.breadCrumbs__right_col}>
                        Контакты
                    </span>
                </div>
            </div>
            <div className={classes.main_container}>
                <div className={classes.main_container__inner}>
                    <div className={classes.main_container__inner__flex}>
                        <div
                            className={
                                classes.main_container__inner__flex__info
                            }
                        >
                            <h4>Контакты</h4>
                            <div>
                                <span>Телефон:</span>
                                <p>+996 778 898 776</p>
                            </div>
                            <div>
                                <span>E-mail:</span>
                                <p>mail@zulya.kg</p>
                            </div>
                            <div>
                                <span>Адрес:</span>
                                <p>г.Бишкек, Чуй 23</p>
                            </div>
                        </div>
                        <div>
                            <div className={classes.iframe_wrapper}>
                                <p>Наше местонахождение:</p>
                                <iFrame
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2921.574830361604!2d74.58690891534143!3d42.92400707915306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec788951ea8a5%3A0xde5ffe8762a74a42!2z0KfRg9C5IDIzLCDQkdC40YjQutC10Lo!5e0!3m2!1sru!2skg!4v1625723685085!5m2!1sru!2skg"
                                    frameBorder="0"
                                    style={{
                                        border: 0,
                                        width: "100%",
                                        height: 450,
                                    }}
                                    allowFullScreen=""
                                    aria-hidden="false"
                                ></iFrame>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contacts;
