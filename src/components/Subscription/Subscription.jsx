import React, { useState, useEffect } from "react";
import subscription_img from "../../assets/image/subscription_img.png";
import styles from "../../components/Subscription/Subscription.module.scss";
import bell from "../../assets/image/bell.png";
import { Modal } from "../Modal/Modal";

const Subscription = (callback, Validate) => {
    // const { values, errors, handleChange, handleSubmit } = SubscriptionCheck(
    //     Subscribe,
    //     Validate
    // );
    const [showModal, setShowModal] = useState(false);
    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
            callback();
        }
    }, [errors]);

    const handleSubmit = (event) => {
        if (event) event.preventDefault();
        setErrors(Validate(values));
        setIsSubmitting(true);
        openModal();
    };

    const handleChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            [event.target.name]: event.target.value,
        }));
    };
    const openModal = () => {
        setShowModal((prev) => !prev);
    };

    // function Subscribe() {
    //     console.log("Done");
    // }
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
<<<<<<< HEAD
                        {/* <label>Имя</label> */}
                        {/* <input
                            placeholder="Ваше Ф.И.О."
                            className={styles.form_inp}
                        /> */}
                        {/* <label>WhatsApp номер</label> */}
                        {/* <input
=======
                        <input
                            placeholder="Ваше Ф.И.О."
                            className={styles.form_inp}
                            name="fullName"
                            onChange={handleChange}
                            value={values.fullName}
                            required
                        />
                        <input
>>>>>>> a2b06506dff9685db0a396768877ac65a81a8c76
                            placeholder="WhatsApp номер"
                            className={styles.form_inp}
                            type="number"
                            name="phone"
                            onChange={handleChange}
                            value={values.phone}
                            required
                        />
                        <select>
                            <option defaultChecked className={styles.option}>
                                Выбрать категорию
                            </option>
                            <option
                                name="category"
                                value={values.category}
                                className={styles.option}
                            >
                                Платья
                            </option>
                            <option
                                value="category"
                                name="category"
                                className={styles.option}
                            >
                                Верхняя одежда
                            </option>
<<<<<<< HEAD
                            <option className={styles.option}>Пальто</option>
                            <option className={styles.option}>Туники</option>
                        </select> */}
=======
                            <option
                                value="category"
                                name="category"
                                className={styles.option}
                            >
                                Пальто
                            </option>
                            <option
                                value="category"
                                name="category"
                                className={styles.option}
                            >
                                Туники
                            </option>
                        </select>
>>>>>>> a2b06506dff9685db0a396768877ac65a81a8c76

                        {/* <button
                            className={styles.form_wrapper__btn}
                            onClick={handleSubmit}
                        >
                            <img
                                src={bell}
                                alt="bell-icon"
                                className={styles.form_wrapper__img}
                            />
                            Подписаться
<<<<<<< HEAD
                        </button> */}
                        <p className={styles.alert}>
                            Не заполнены обязательные поля
                        </p>
=======
                        </button>
                        {errors.valid && (
                            <p className={styles.alert}>{errors.valid}</p>
                        )}
>>>>>>> a2b06506dff9685db0a396768877ac65a81a8c76
                    </div>
                </div>
            </div>
            <Modal showModal={showModal} setShowModal={setShowModal} />
        </div>
    );
};

export default Subscription;
