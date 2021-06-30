import React from "react";
import { PagesNumber, Collection } from "../../components";
import classes from "../CollectionPage/CollectionPage.module.scss";
const CollectionPage = () => {
    return (
        <div className={classes.main_container}>
            <div className={classes.breadCrumbs}>
                <ul className={classes.breadCrumbs__list}>
                    <li>Главная /</li>
                    <li>Избранное</li>
                </ul>
            </div>
            <div className={classes.header}>
                <h4>Коллекция</h4>
            </div>
            <div className={classes.collection_wrapper}>
                <div>
                    <Collection />
                </div>
                <div className={classes.collection_wrapper__page}>
                    <PagesNumber />
                </div>
            </div>
        </div>
    );
};

export default CollectionPage;
