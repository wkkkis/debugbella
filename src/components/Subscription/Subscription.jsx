import React, { useState, useEffect } from "react";
import subscription_img from "../../assets/image/subscription_img.png";
import styles from "../../components/Subscription/Subscription.module.scss";
import bell from "../../assets/image/bell.png";
import { Modal } from "../Modal/Modal";
import { subSchema } from "../Validations/UserValidation";
const Subscription = () => {
    const [showModal, setShowModal] = useState(false);
    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const handleChange = (e) => {
        setValues((values) => ({
            ...values,
            [e.target.name]: e.target.value,
        }));
        console.log(e.target.value);
    };

    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
            openModal();
        }
    }, [errors]);

    function validate(values) {
        let errors = {};
        let valid = values.fullName && values.phone_num;

        if (!valid) {
            errors.valid = "Не заполнены обязательные поля";
        }
        return errors;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const isValid = await subSchema.isValid(values);
        console.log(isValid);
        if (e) {
            setErrors(validate(values));
        }

        if (setIsSubmitting(true) && isValid === true) {
            openModal();
        }
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
                        <form onSubmit={handleSubmit}>
                            <input
                                placeholder="Ваше Ф.И.О."
                                className={styles.form_inp}
                                name="fullName"
                                onChange={handleChange}
                                // value="fullName"
                            />
                            <input
                                placeholder="WhatsApp номер"
                                className={styles.form_inp}
                                name="phone_num"
                                onChange={handleChange}
                                type="phone"
                                // value="phone"
                            />
                            <select onChange={handleChange}>
                                <option defaultValue className={styles.option}>
                                    Выбрать категорию
                                </option>
                                <option
                                    name="dress"
                                    values={values.dress}
                                    className={styles.option}
                                >
                                    Платья
                                </option>
                                <option
                                    values={values.clothes}
                                    name="clothes"
                                    className={styles.option}
                                >
                                    Верхняя одежда
                                </option>
                                <option
                                    values={values.coat}
                                    name="coat"
                                    className={styles.option}
                                >
                                    Пальто
                                </option>
                                <option
                                    values={values.tunic}
                                    name="tunic"
                                    className={styles.option}
                                >
                                    Туники
                                </option>
                            </select>

                            <button
                                className={styles.form_wrapper__btn}
                                // onClick={handleSubmit}
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
                        </form>
                    </div>
                </div>
            </div>
            <Modal showModal={showModal} setShowModal={setShowModal} />
        </div>
    );
};

export default Subscription;
