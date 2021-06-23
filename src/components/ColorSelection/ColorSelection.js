import React from "react";
import classes from "../ColorSelection/ColorSelection.module.scss";
const ColorSelection = () => {
    return (
        <div className={classes.main__colorsDiv}>
            <span className={classes.main__colorsHover}>
                <span
                    className={classes.main__colors}
                    style={{ background: "#bdd4d1" }}
                ></span>
            </span>
            <span className={classes.main__colorsHover}>
                <span
                    className={classes.main__colors}
                    style={{ background: "#c5e7ab" }}
                ></span>
            </span>
            <span className={classes.main__colorsHover}>
                <span
                    className={classes.main__colors}
                    style={{ background: "#ab844a" }}
                ></span>
            </span>
            <span className={classes.main__colorsHover}>
                <span
                    className={classes.main__colors}
                    style={{ background: "#b9bff8" }}
                ></span>
            </span>
            <span className={classes.main__colorsHover}>
                <span
                    className={classes.main__colors}
                    style={{ background: "#ECECEC" }}
                ></span>
            </span>
            <span className={classes.main__colorsHover}>
                <span
                    className={classes.main__colors}
                    style={{ background: "#909091" }}
                ></span>
            </span>
            <span className={classes.main__colorsHover}>
                <span
                    className={classes.main__colors}
                    style={{ background: "#ff8787" }}
                ></span>
            </span>
        </div>
    );
};

export default ColorSelection;
