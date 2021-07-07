import React, { useState, useEffect } from "react";
import classes from "../ColorSelection/ColorSelection.module.scss";
import productJSON from "../../product";
const ColorSelection = () => {
    const [product, setProduct] = useState({});
    useEffect(() => {
        setTimeout(() => {
            setProduct(productJSON);
        }, 1000);
    }, [product]);
    return productJSON.products.map((index) => (
        <div className={classes.main__colorsDiv}>
            <span className={classes.main__colorsHover}>
                <span
                    className={classes.main__colors}
                    style={{ background: index.colors }}
                ></span>
            </span>
        </div>
    ));
};

export default ColorSelection;
