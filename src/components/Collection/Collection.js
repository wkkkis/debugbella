import React from "react";
import classes from "../../styles/styles.module.scss";
import styles from "../Collection/Collection.module.scss";
import summer from "../../assets/images/summer.png";
import autumn from "../../assets/images/autumn.png";
const Collection = () => {
    return (
        <>
            {/* <div className={classes.main_container}> */}
            <div className={classes.collection_container}>
                <section className={classes.topSales_wrap}></section>
                <span className={classes.topSales}>Коллекция</span>
                <div className={classes.third_container}>
                    <div className={classes.inner_container}>
                        <div className={classes.category_card}>
                            <img src={summer} alt="red-coat" />
                            <span className={styles.collectionText}>Лето</span>
                            <button className={classes.btn}>
                                Смотреть все &ensp;
                                <i
                                    className="fa fa-chevron-right"
                                    aria-hidden="true"
                                ></i>
                            </button>
                        </div>
                        <div className={classes.category_card}>
                            <img src={summer} alt="yellow-dress" />
                            <span className={styles.collectionText}>Весна</span>
                            <button className={classes.btn}>
                                Смотреть все &ensp;
                                <i
                                    class="fa fa-chevron-right"
                                    aria-hidden="true"
                                ></i>
                            </button>
                        </div>
                        <div className={classes.category_card}>
                            <img src={autumn} alt="pink-dress" />
                            <span className={styles.collectionText}>Осень</span>
                            <button className={classes.btn}>
                                Смотреть все &ensp;
                                <i
                                    class="fa fa-chevron-right"
                                    aria-hidden="true"
                                ></i>
                            </button>
                        </div>
                        <div className={classes.category_card}>
                            <img src={summer} alt="yellow-dress" />
                            <span className={styles.collectionText}>Весна</span>
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
        </>
    );
};

export default Collection;
