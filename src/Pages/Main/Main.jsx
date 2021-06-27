import React from "react";
import classes from "../../styles/styles.module.scss";
import red_coat from "../../assets/image/redCoat.png";
import yellowDress from "../../assets/image/yellowDress.png";
import pinkDress from "../../assets/image/pinkDress.png";
import blackDress from "../../assets/image/blackDress.png";
import {
    NewProducts,
    Subscription,
    TopSales,
    Advantages,
    HeroSection,
    News,
    Button,
    Collection,
} from "../../components";
const Main = () => {
    return (
        <>
            <div className={classes.main_container}>
                <HeroSection />
                <div className={classes.secondary_container}>
                    <div className={classes.third_container}>
                        <div className={classes.inner_container}>
                            <div className={classes.category_card}>
                                <img src={red_coat} alt="red-coat" />
                                <span className={classes.embededText}>
                                    Верхняя одежда
                                </span>
                                <button className={classes.btn}>
                                    Смотреть все &ensp;
                                    <i
                                        className="fa fa-chevron-right"
                                        aria-hidden="true"
                                    ></i>
                                </button>
                            </div>
                            <div className={classes.category_card}>
                                <img src={yellowDress} alt="yellow-dress" />
                                <span className={classes.embededText2}>
                                    Платья
                                </span>
                                <button className={classes.btn}>
                                    Смотреть все &ensp;
                                    <i
                                        className="fa fa-chevron-right"
                                        aria-hidden="true"
                                    ></i>
                                </button>
                            </div>
                            <div className={classes.category_card}>
                                <img src={pinkDress} alt="pink-dress" />
                                <span className={classes.embededText3}>
                                    Туники
                                </span>
                                <button className={classes.btn}>
                                    Смотреть все &ensp;
                                    <i
                                        className="fa fa-chevron-right"
                                        aria-hidden="true"
                                    ></i>
                                </button>
                            </div>
                            <div className={classes.category_card}>
                                <img src={blackDress} alt="blackDress" />
                                <span className={classes.embededText4}>
                                    Туники
                                </span>
                                <button className={classes.btn}>
                                    Смотреть все &ensp;
                                    <i
                                        className="fa fa-chevron-right"
                                        aria-hidden="true"
                                    ></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <span className={classes.collection_font}>
                    <h4>Хит продаж</h4>
                </span>
                <TopSales />
                <Button />
                <span className={classes.collection_font}>
                    <h4>Новинки</h4>
                </span>
                <NewProducts />
                <Button />
                <div className={classes.backgroundColor_collection}>
                    <span className={classes.collection_font}>
                        <h4>Коллекция</h4>
                    </span>
                    <Collection />
                </div>
                <div className={classes.backgroundColor_subscription}>
                    <Subscription />
                </div>
                <span className={classes.collection_font}>
                    <h4>Наши преимущества</h4>
                </span>
                <Advantages />
                <span className={classes.collection_font}>
                    <h4>Новости</h4>
                </span>
                <News />
            </div>
        </>
    );
};

export default Main;
