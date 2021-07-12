import React from "react";
import { Link } from "react-router-dom";
import classes from "../Footer/Footer.module.scss";
import odnoklassniki from "../../assets/image/odnokl.png";
import vk from "../../assets/image/vk.png";
import insta from "../../assets/image/insta.png";
import facebook from "../../assets/image/facebook.png";
const Footer = () => {
    return (
        <div className={classes.mainContainer}>
            <div className={classes.mainContainer__inner}>
                <div className={classes.container}>
                    <ul className={classes.first__col}>
                        <span className={classes.col_header}>Покупателям</span>
                        <Link to="/news" className={classes.link}>
                            <li>Как сделать заказ</li>
                        </Link>
                        <Link className={classes.link} to="#">
                            <li>Способы оплаты</li>
                        </Link>

                        <Link to="/delivery" className={classes.link}>
                            <li>Доставка</li>
                        </Link>
                    </ul>
                    <ul className={classes.first__col}>
                        <span className={classes.col_header}>Покупателям</span>
                        <Link to="#" className={classes.link}>
                            <li>Возврат товара</li>
                        </Link>

                        <Link to="/" className={classes.link}>
                            <li>Вопросы и ответы</li>
                        </Link>

                        <Link to="#" className={classes.link}>
                            <li>Публичная оферта</li>
                        </Link>
                    </ul>
                    <ul className={classes.first__col}>
                        <span className={classes.col_header}>Компания</span>

                        <Link to="/about" className={classes.link}>
                            <li>О нас</li>
                        </Link>

                        <Link to="#" className={classes.link}>
                            <li>Реквизиты</li>
                        </Link>
                        <li>
                            <Link to="/contacts" className={classes.link}>
                                Контакты
                            </Link>
                        </li>
                    </ul>
                    <ul className={classes.first__col}>
                        <Link to="/contacts" className={classes.link}>
                            <span className={classes.col_header}>Контакты</span>
                        </Link>
                        <li>+996 778 898 776</li>
                        <li>mail@zulya.kg</li>
                        <li>г.Бишкек, Чуй 23</li>
                    </ul>
                </div>
                <div className={classes.secondContainer}>
                    <span className={classes.copyright}>
                        Developed by Sunrise Studio 2020
                    </span>
                    <div className={classes.socialMediaLink}>
                        <a href="https://ok.ru/dk?st.cmd=anonymMain&st.redirect=%2Fguests%3Fst.layer.cmd%3DPopLayerClose">
                            <img src={odnoklassniki} alt="odnoklassniki_icon" />
                        </a>
                        <a href="https://vk.com/?lang=en">
                            <img src={vk} alt="vk_icon" />
                        </a>
                        <a href="https://www.instagram.com/">
                            <img src={insta} alt="instagram_icon" />
                        </a>
                        <a href="https://www.facebook.com/">
                            <img src={facebook} alt="facebook_icon" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
