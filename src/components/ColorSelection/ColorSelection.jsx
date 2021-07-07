import React from "react";
import classes from "../ColorSelection/ColorSelection.module.scss";
import productJSON from "../../product";
const ColorSelection = () => {
    return productJSON.products.map((index) => (
        <div className={classes.main__colorsDiv} key={index.id} index={index}>
            <span className={classes.main__colorsHover}>
                <span
                    className={classes.main__colors}
                    style={{ background: index.color }}
                >
                    {index.colors[index]}
                </span>
            </span>
        </div>
    ));
};

export default ColorSelection;
