import React from "react";
import classes from "./Category.module.scss";
import NavigationTitleAndSortPopup from "../../components/NavigationTitleAndSortPopup/NavigationTitleAndSortPopup/NavigationTitleAndSortPopup";
import { ProductCart } from "../../components";
const categorySortItems = [
    { name: "По алфавиту", type: "alphabet", order: "desc" },
    { name: "По обновлению", type: "update", order: "desc" },
    { name: "По цене (высокая > низкая) ", type: "price", order: "desc" },
    { name: "По цене (низкая > высокая)", type: "name", order: "asc" },
];

const Category = () => {
    let arr = [];
    for (let i = 0; i < 12; i++) {
        arr.push(i);
    }

    const [count, setCount] = React.useState(arr);

    return (
        <div className={classes.category_wrap}>
            <div className={classes.category_wrap__inner}>
                <div className={classes.category_wrap__category_drop}>
                    <div
                        className={classes.category_wrap__category_drop__links}
                    >
                        <div
                            className={
                                classes.category_wrap__category_drop__links__title
                            }
                        >
                            <span>Категория</span>
                        </div>
                        <div>
                            <span>Верхняя одежда</span>
                            <svg
                                width="14"
                                height="7"
                                viewBox="0 0 14 7"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M7.45841 6.82618L13.8103 1.01266C14.0632 0.780896 14.0632 0.405589 13.8103 0.173824C13.557 -0.0579413 13.1466 -0.0579413 12.8936 0.173824L6.99999 5.56792L1.10639 0.173823C0.853393 -0.0579418 0.442908 -0.0579419 0.189913 0.173823C0.0633049 0.289706 -1.92931e-08 0.441373 -2.59315e-08 0.593242C-3.25699e-08 0.745111 0.0633049 0.896778 0.189913 1.01266L6.54172 6.82618C6.79493 7.05794 7.20545 7.05794 7.45841 6.82618Z"
                                    fill="#AB844A"
                                />
                            </svg>
                        </div>
                        <div>
                            <span>Платья</span>
                        </div>
                        <div>
                            <span>Туники</span>
                        </div>
                        <div>
                            <span>Футболки</span>
                            <svg
                                width="14"
                                height="7"
                                viewBox="0 0 14 7"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M7.45841 6.82618L13.8103 1.01266C14.0632 0.780896 14.0632 0.405589 13.8103 0.173824C13.557 -0.0579413 13.1466 -0.0579413 12.8936 0.173824L6.99999 5.56792L1.10639 0.173823C0.853393 -0.0579418 0.442908 -0.0579419 0.189913 0.173823C0.0633049 0.289706 -1.92931e-08 0.441373 -2.59315e-08 0.593242C-3.25699e-08 0.745111 0.0633049 0.896778 0.189913 1.01266L6.54172 6.82618C6.79493 7.05794 7.20545 7.05794 7.45841 6.82618Z"
                                    fill="#AB844A"
                                />
                            </svg>
                        </div>
                        <div>
                            <span>Шорты</span>
                        </div>
                        <div>
                            <span>Юбки</span>
                        </div>
                        <div>
                            <span>Вечерние платья</span>
                            <svg
                                width="14"
                                height="7"
                                viewBox="0 0 14 7"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M7.45841 6.82618L13.8103 1.01266C14.0632 0.780896 14.0632 0.405589 13.8103 0.173824C13.557 -0.0579413 13.1466 -0.0579413 12.8936 0.173824L6.99999 5.56792L1.10639 0.173823C0.853393 -0.0579418 0.442908 -0.0579419 0.189913 0.173823C0.0633049 0.289706 -1.92931e-08 0.441373 -2.59315e-08 0.593242C-3.25699e-08 0.745111 0.0633049 0.896778 0.189913 1.01266L6.54172 6.82618C6.79493 7.05794 7.20545 7.05794 7.45841 6.82618Z"
                                    fill="#AB844A"
                                />
                            </svg>
                        </div>
                        <div>
                            <span>Пижамы</span>
                            <svg
                                width="14"
                                height="7"
                                viewBox="0 0 14 7"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M7.45841 6.82618L13.8103 1.01266C14.0632 0.780896 14.0632 0.405589 13.8103 0.173824C13.557 -0.0579413 13.1466 -0.0579413 12.8936 0.173824L6.99999 5.56792L1.10639 0.173823C0.853393 -0.0579418 0.442908 -0.0579419 0.189913 0.173823C0.0633049 0.289706 -1.92931e-08 0.441373 -2.59315e-08 0.593242C-3.25699e-08 0.745111 0.0633049 0.896778 0.189913 1.01266L6.54172 6.82618C6.79493 7.05794 7.20545 7.05794 7.45841 6.82618Z"
                                    fill="#AB844A"
                                />
                            </svg>
                        </div>
                    </div>
                </div>

                <div className={classes.category_wrap__container}>
                    <NavigationTitleAndSortPopup item={categorySortItems} />

                    <div className={classes.category_wrap__container__product}>
                        {count.map((item) => {
                            return <ProductCart key={item} />;
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;
