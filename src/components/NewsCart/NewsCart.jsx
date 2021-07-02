import React from "react";
import classes from "./NewsCart.module.scss";
import newsImg from "../../assets/newsimg.png";
import arrow from "../../assets/lock_nextImg/arrow_brown.png";
import { Link } from "react-router-dom";

const NewsCart = (props) => {
<<<<<<< HEAD
    // props посмотри откуда приходит--это Нурбек---
    return (
        <>
            <div className={classes.w_100}>
                <div className={classes.mainCart}>
                    <Link to={/news_details/}>
                        {" "}
                        {/*${props.item.id} */}
                        <div className={classes.newscart}>
                            <div className={classes.newscart__blockLeft}>
                                <img src={newsImg} alt="img-news" />
                            </div>
                            <div className={classes.newscart__blockRight}>
                                <p className={classes.newscart__data}>
                                    22.06.21
                                </p>
                                <h1 className={classes.newscart__title}>
                                    Гарантия обмена и возврата товара
                                </h1>
                                <p className={classes.newscart__text}>
                                    100% гарантия возврата товара -14 дней на
                                    возврат, без скандалов и истерик
                                </p>
                                <button className={classes.newscart__btn}>
                                    Подробнее
                                    <img src={arrow} alt="img-arrow" />
                                </button>
                            </div>
                        </div>
                    </Link>

                    <div className={classes.newscart}>
                        <div className={classes.newscart__blockLeft}>
                            <img src={newsImg} alt="img-news" />
                        </div>
                        <div className={classes.newscart__blockRight}>
                            <p className={classes.newscart__data}>22.06.21</p>
                            <h1 className={classes.newscart__title}>
                                Гарантия обмена и возврата товара
                            </h1>
                            <p className={classes.newscart__text}>
                                100% гарантия возврата товара -14 дней на
                                возврат, без скандалов и истерик
                            </p>
                            <button className={classes.newscart__btn}>
                                Подробнее
                                <img src={arrow} alt="img-arrow" />
                            </button>
                        </div>
                    </div>
=======
  // props посмотри откуда приходит--это Нурбек---
  return (
    <>
      <div className={classes.w_100}>
        <div className={classes.mainCart}>
          <div  className={classes.newscart}> {/*${props.item.id} */}
            <div className={classes.newscart__blockLeft}>
              <img src={newsImg} alt="img-news" />
            </div>
            <div className={classes.newscart__blockRight}>
              <p className={classes.newscart__data}>22.06.21</p>
              <h1 className={classes.newscart__title}>Гарантия обмена и возврата товара</h1>
              <p className={classes.newscart__text}>100% гарантия возврата товара -14 дней на возврат, без скандалов и
                истерик
              </p>
              <Link to={`/news_details/`}>
                <button className={classes.newscart__btn}>Подробнее
                  <img src={arrow} alt="img-arrow" />
                </button>
              </Link>
            </div>
          </div>
          <div className={classes.newscart}>
            <div className={classes.newscart__blockLeft}>
              <img src={newsImg} alt="img-news" />
            </div>
            <div className={classes.newscart__blockRight}>
              <p className={classes.newscart__data}>22.06.21</p>
              <h1 className={classes.newscart__title}>Гарантия обмена и возврата товара</h1>
              <p className={classes.newscart__text}>100% гарантия возврата товара -14 дней на возврат, без скандалов и
                истерик</p>
              <button className={classes.newscart__btn}>Подробнее
                <img src={arrow} alt="img-arrow" />
              </button>
            </div>
          </div>
>>>>>>> f37361477b0a90d8c03efe315a03e4afdd2039b0

                    <div className={classes.newscart}>
                        <div className={classes.newscart__blockLeft}>
                            <img src={newsImg} alt="img-news" />
                        </div>
                        <div className={classes.newscart__blockRight}>
                            <p className={classes.newscart__data}>22.06.21</p>
                            <h1 className={classes.newscart__title}>
                                Гарантия обмена и возврата товара
                            </h1>
                            <p className={classes.newscart__text}>
                                100% гарантия возврата товара -14 дней на
                                возврат, без скандалов и истерик
                            </p>
                            <button className={classes.newscart__btn}>
                                Подробнее
                                <img src={arrow} alt="img-arrow" />
                            </button>
                        </div>
                    </div>

                    <div className={classes.newscart}>
                        <div className={classes.newscart__blockLeft}>
                            <img src={newsImg} alt="img-news" />
                        </div>
                        <div className={classes.newscart__blockRight}>
                            <p className={classes.newscart__data}>22.06.21</p>
                            <h1 className={classes.newscart__title}>
                                Гарантия обмена и возврата товара
                            </h1>
                            <p className={classes.newscart__text}>
                                100% гарантия возврата товара -14 дней на
                                возврат, без скандалов и истерик
                            </p>
                            <button className={classes.newscart__btn}>
                                Подробнее
                                <img src={arrow} alt="img-arrow" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NewsCart;
