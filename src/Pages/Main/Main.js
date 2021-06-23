import React from "react";
import classes from "../../styles/styles.module.scss";
import red_coat from "../../assets/images/redCoat.png";
import yellowDress from "../../assets/images/yellowDress.png";
import pinkDress from "../../assets/images/pinkDress.png";
import blackDress from "../../assets/images/blackDress.png";
import TopSales from "../topSales/topSales";
import NewProducts from "../NewProducts/NewProducts";
import Collection from "../Collection/Collection";
import Button from "../Button/Button";
import Subscription from "../Subscription/Subscription";
import Advantages from "../Advantages/Advantages";
const Main = () => {
    return (
        <>
            <div className={classes.main_container}>
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
                                        class="fa fa-chevron-right"
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
                                        class="fa fa-chevron-right"
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
                                        class="fa fa-chevron-right"
                                        aria-hidden="true"
                                    ></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <TopSales />
                <Button />
                <NewProducts />
                <Button />
                <Collection />
                <Subscription />
                <Advantages />
            </div>
        </>
    );
};

export default Main;
