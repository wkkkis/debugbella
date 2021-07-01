import React, { useState } from "react";
import classes from "../OrderProcessing/OrderProcessing.module.scss";
import ModalOrder from "../../components/ModalOrder/ModalOrder";
import cardImage from "../../assets/image/summer.png";
const OrderProcessing = () => {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal((prev) => !prev);
    };
    return (
        <div className={classes.main_container}>
            <div className={classes.main_container__inner}>
                <div className={classes.main_container__order_composition}>
                    <section className={classes.main_container__inner__header}>
                        <h4>Оформление заказа</h4>
                    </section>
                    <div className={classes.address_title}>Адрес доставки</div>
                    <p>Александр Пистолетов &#44; +996 (708) 567 890</p>
                    <p>Кыргызстан &#44; &nbsp;Бишкек</p>
                    <button className={classes.edit_btn}>Редактировать</button>
                    <section>
                        <div className={classes.order_title}>
                            <p>Состав заказа</p>
                        </div>
                        <div className={classes.card_wrapper}>
                            <div
                                className={classes.card_wrapper__image_wrapper}
                            >
                                <img src={cardImage} alt="clothes" />
                            </div>
                            <div className={classes.card_wrapper__right_col}>
                                <span className={classes.title}>
                                    {" "}
                                    Платья с сетчатыми рукавами
                                </span>

                                <div className={classes.remove}>
                                    <div>&times;</div>
                                </div>

                                <span className={classes.composition}>
                                    <p className={classes.greyFont}>Артикул:</p>
                                    &nbsp;
                                    <p className={classes.blackFont}>
                                        PL984/dakota
                                    </p>
                                </span>
                                <span className={classes.composition}>
                                    <p className={classes.greyFont}>Цвет:</p>
                                    &nbsp;
                                    <p className={classes.blackFont}>Бежевый</p>
                                </span>
                                <span className={classes.composition}>
                                    <p className={classes.greyFont}>
                                        Количество товара в линейке:&nbsp;
                                    </p>{" "}
                                    <p className={classes.blackFont}>6ед</p>
                                </span>
                                <div className={classes.bottom_paragraph}>
                                    <div className={classes.composition}>
                                        <p className={classes.greyFont}>
                                            Количество линеек:&nbsp;
                                        </p>
                                        <button className={classes.decrement}>
                                            -
                                        </button>
                                        &nbsp;
                                        <p className={classes.blackFont}>20</p>
                                        &nbsp;
                                        <button className={classes.increment}>
                                            &#43;
                                        </button>
                                    </div>
                                    <div className={classes.bottom_price}>
                                        <span className={classes.prevPrice}>
                                            7344 c.
                                        </span>
                                        <span className={classes.currentPrice}>
                                            7100 c.
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <div className={classes.right_column_card}>
                    <div className={classes.right_column_card__inner}>
                        <div className={classes.right_column_card__inner__sum}>
                            Итого
                        </div>
                        <div
                            className={classes.right_column_card__inner__prices}
                        >
                            <div className={classes.all_prices}>
                                <span className={classes.left_text}>
                                    Общая сумма
                                </span>
                                <span>12000s</span>
                            </div>
                            <div className={classes.all_prices}>
                                <span className={classes.left_text}>
                                    Скидка
                                </span>
                                <span>-2000s</span>
                            </div>
                            <div className={classes.all_prices}>
                                <span className={classes.left_text}>Итог</span>
                                <span>10000s</span>
                            </div>
                        </div>
                        <div className={classes.button_order}>
                            <button onClick={openModal}>Оформить заказ</button>
                        </div>
                    </div>
                </div>
            </div>
            <ModalOrder showModal={showModal} setShowModal={setShowModal} />
        </div>
    );
};

export default OrderProcessing;
