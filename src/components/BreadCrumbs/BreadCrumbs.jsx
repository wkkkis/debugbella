import React from "react";
import style from "../../components/NewsCart/NewsCart.module.scss";
const BreadCrumbs = () => {
    return (
        <div className={style.breadCrumbs}>
            <div className={style.breadCrumbs__link}>
                <ul className={style.breadCrumbs__list}>
                    <li>Главная &ensp;/</li>
                    <li>Новости</li>
                </ul>
            </div>
        </div>
    );
};

export default BreadCrumbs;
