import React from "react";
import classes from "./Favourites.module.scss";
import { ProductCart } from "../../components";
import NavigationTitleAndSortPopup from "../../components/NavigationTitleAndSortPopup/NavigationTitleAndSortPopup/NavigationTitleAndSortPopup";

const favoriteSortItems = [
    { name: "По обновлению", type: "update", order: "desc" },
    { name: "По цене (высокая > низкая) ", type: "price", order: "desc" },
    { name: "По цене (низкая > высокая)", type: "name", order: "asc" },
];

const Favourites = () => {
    let arr = [];
    for (let i = 0; i < 12; i++) {
        arr.push(i);
    }

    const [count, setCount] = React.useState(arr);

    return (
        <div className={classes.favorite_wrap}>
            <div className={classes.favorite_wrap__inner}>
                <div className={classes.favorite_wrap__header}>
                    <span>Избранное</span>
                    <NavigationTitleAndSortPopup item={favoriteSortItems} />
                </div>
                <div className={classes.favorite_wrap__container}>
                    {count.map((item) => {
                        return <ProductCart key={item} />;
                    })}
                </div>
            </div>
        </div>
    );
};

export default Favourites;
