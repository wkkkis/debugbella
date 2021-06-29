import React, { useState } from "react";
import subscription_img from "../../assets/image/subscription_img.png";
import styles from "../../components/Subscription/Subscription.module.scss";
import bell from "../../assets/image/bell.png";
import { Modal } from "../Modal/Modal";

const Subscription = () => {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal((prev) => !prev);
    };
    return (
        <div className={styles.main_subscription}>
            <div className={styles.subscription_wrapper}>
                <div className={styles.img_wrapper}>
                    <img src={subscription_img} alt="girl" />
                </div>
                <div className={styles.subscription_wrapper__form}>
                    <div className={styles.form_wrapper}>
                        <span>Оформите подписку</span>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Ipsum, id feugiat nec in sed eget. Turpis
                            purus, sollicitudin quis augue consectetur lectus
                            pharetra in ullamcorper. Sapien tortor, nunc
                            venenatis aliquam accumsan, arcu, nibh adipiscing
                            mattis. Bibendum ornare at porta sed eget
                            ullamcorper porttitor faucibus tellus. Elit
                            ullamcorper lorem in mauris.
                        </p>
                        {/* <label>Имя</label> */}
                        {/* <input
                            placeholder="Ваше Ф.И.О."
                            className={styles.form_inp}
                        /> */}
                        {/* <label>WhatsApp номер</label> */}
                        {/* <input
                            placeholder="WhatsApp номер"
                            className={styles.form_inp}
                        />
                        <select>
                            <option className={styles.option}>
                                Выбрать категорию
                            </option>
                            <option className={styles.option}>Платья</option>
                            <option className={styles.option}>
                                Верхняя одежда
                            </option>
                            <option className={styles.option}>Пальто</option>
                            <option className={styles.option}>Туники</option>
                        </select> */}

                        {/* <button
                            className={styles.form_wrapper__btn}
                            onClick={openModal}
                        >
                            <img
                                src={bell}
                                alt="bell-icon"
                                className={styles.form_wrapper__img}
                            />
                            Подписаться
                        </button> */}
                        <p className={styles.alert}>
                            Не заполнены обязательные поля
                        </p>
                    </div>
                </div>
            </div>
            <Modal showModal={showModal} setShowModal={setShowModal} />
        </div>
    );
};

export default Subscription;
