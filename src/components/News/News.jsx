import React from "react";
import style from "../../Pages/NewsCart/NewsCart.module.scss";
import newsImg from "../../assets/newsimg.png";
import arrow from "../../assets/lock_nextImg/arrow_brown.png";
const News = () => {
    return (
        <div className={style.w_100}>
            <div className={style.mainCart}>
                <div className={style.newscart}>
                    <div className={style.newscart__blockLeft}>
                        <img src={newsImg} alt="img-news" />
                    </div>
                    <div className={style.newscart__blockRight}>
                        <p className={style.newscart__data}>22.06.21</p>
                        <h1 className={style.newscart__title}>
                            Гарантия обмена и возврата товара
                        </h1>
                        <p className={style.newscart__text}>
                            100% гарантия возврата товара -14 дней на возврат,
                            без скандалов и истерик
                        </p>
                        <button className={style.newscart__btn}>
                            Подробнее
                            <img src={arrow} alt="img-arrow" />
                        </button>
                    </div>
                </div>
                <div className={style.newscart}>
                    <div className={style.newscart__blockLeft}>
                        <img src={newsImg} alt="img-news" />
                    </div>
                    <div className={style.newscart__blockRight}>
                        <p className={style.newscart__data}>22.06.21</p>
                        <h1 className={style.newscart__title}>
                            Гарантия обмена и возврата товара
                        </h1>
                        <p className={style.newscart__text}>
                            100% гарантия возврата товара -14 дней на возврат,
                            без скандалов и истерик
                        </p>
                        <button className={style.newscart__btn}>
                            Подробнее
                            <img src={arrow} alt="img-arrow" />
                        </button>
                    </div>
                </div>
                <div className={style.newscart}>
                    <div className={style.newscart__blockLeft}>
                        <img src={newsImg} alt="img-news" />
                    </div>
                    <div className={style.newscart__blockRight}>
                        <p className={style.newscart__data}>22.06.21</p>
                        <h1 className={style.newscart__title}>
                            Гарантия обмена и возврата товара
                        </h1>
                        <p className={style.newscart__text}>
                            100% гарантия возврата товара -14 дней на возврат,
                            без скандалов и истерик
                        </p>
                        <button className={style.newscart__btn}>
                            Подробнее
                            <img src={arrow} alt="img-arrow" />
                        </button>
                    </div>
                </div>
                <div className={style.newscart}>
                    <div className={style.newscart__blockLeft}>
                        <img src={newsImg} alt="img-news" />
                    </div>
                    <div className={style.newscart__blockRight}>
                        <p className={style.newscart__data}>22.06.21</p>
                        <h1 className={style.newscart__title}>
                            Гарантия обмена и возврата товара
                        </h1>
                        <p className={style.newscart__text}>
                            100% гарантия возврата товара -14 дней на возврат,
                            без скандалов и истерик
                        </p>
                        <button className={style.newscart__btn}>
                            Подробнее
                            <img src={arrow} alt="img-arrow" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default News;
