import React from "react";
import classes from "./PagesBtn.module.scss";
import prevBtn from "../../assets/image/prevBtn.svg";
import nextBtn from "../../assets/image/nextBtn.png";
import jsonPlaceholder from "../../adapters/axios.config";
import { useEffect } from "react";
const PagesBtn = () => {
    useEffect(() => {
        jsonPlaceholder("/posts").then((res) => console.log(res));
    }, []);
    return (
        <div>
            <div>
                <button className={classes.prevBtn}>
                    <img src={prevBtn} alt="previous_button" />
                </button>
                <button className={classes.prevBtn}>
                    <img src={nextBtn} alt="next_button" />
                </button>
            </div>
        </div>
    );
};

export default PagesBtn;
