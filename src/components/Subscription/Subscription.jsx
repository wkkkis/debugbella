import React, { useState, useEffect } from "react";
import subscription_img from "../../assets/image/subscription_img.png";
import styles from "../../components/Subscription/Subscription.module.scss";
import bell from "../../assets/image/bell.png";
import { Modal } from "../Modal/Modal";
import { userSchema } from "../Validations/UserValidation";
const Subscription = () => {
    const [showModal, setShowModal] = useState(false);
    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
            openModal();
        }
    }, [errors]);

    function validate(values) {
        let errors = {};
        let valid = values.fullName && values.phone;

        if (!valid) {
            errors.valid = "Не заполнены обязательные поля";
        }
        return errors;
    }

    const handleSubmit = (event) => {
        if (event) event.preventDefault();
        setErrors(validate(values));

        if (setIsSubmitting(true)) {
            openModal();
        }
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
                        {/* <form onSubmit={handleSubmit}> */}
                        <input
                            placeholder="Ваше Ф.И.О."
                            className={styles.form_inp}
                            name="fullName"
                            onChange={handleChange}
                            // value="fullName"
                            required
                        />
                        <input
                            placeholder="WhatsApp номер"
                            className={styles.form_inp}
                            type="number"
                            name="phone"
                            onChange={handleChange}
                            // value="phone"
                            required
                        />
                        <select>
                            <option defaultValue className={styles.option}>
                                Выбрать категорию
                            </option>
                            <option
                                name="category"
                                // value={values.category}
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

                        <button
                            className={styles.form_wrapper__btn}
                            onClick={handleSubmit}
                        >
                            <img
                                src={bell}
                                alt="bell-icon"
                                className={styles.form_wrapper__img}
                            />
                            Подписаться
                        </button>
                        {errors.valid && (
                            <p className={styles.alert}>{errors.valid}</p>
                        )}
                        {/* </form> */}
                    </div>
                </div>
            </div>
            <Modal showModal={showModal} setShowModal={setShowModal} />
        </div>
    );
};

export default Subscription;
