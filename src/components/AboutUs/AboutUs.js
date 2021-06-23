import React from "react";
import classes from "../AboutUs/AboutUs.module.scss";
import diva from "../../assets/images/diva.png";
import bella_font from "../../assets/images/bella_font.png";
import dress from "../../assets/images/about_us_dress.png";
import beach from "../../assets/images/beach.png";
const AboutUs = () => {
    return (
        <div className={classes.mainContainer}>
            <div className={classes.mainContainer__link}>
                <ul className={classes.mainContainer__list}>
                    <li>Главная &ensp;/&ensp;</li>
                    <li>О нас</li>
                </ul>
            </div>
            <div className={classes.main_header}>
                <span>О нас</span>

                <section className={classes.first_image}>
                    <img src={diva} alt="lady" className={classes.lady_img} />
                </section>
                <section className={classes.first_image__text}>
                    <img src={bella_font} alt="bella" />
                </section>

                <section className={classes.first_image__pg}>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        ut aliquam, purus sit amet luctus venenatis, lectus
                        magna fringilla urna, porttitor rhoncus dolor purus non
                        enim praesent elementum facilisis leo, vel fringilla est
                        ullamcorper eget nulla facilisi etiam dignissim diam
                        quis enim lobortis scelerisque fermentum dui faucibus in
                        ornare quam viverra orci sagittis eu volutpat odio
                        facilisis mauris sit amet massa vitae tortor condimentum
                        lacinia quis vel eros donec ac odio tempor orci dapibus
                        ultrices in iaculis nunc sed augue lacus, viverra vitae
                        congue eu, consequat ac felis donec et odio pellentesque
                        diam volutpat commodo sed egestas egestas fringilla
                        phasellus faucibus
                    </p>
                </section>
                <section className={classes.second_image}>
                    <img src={dress} alt="dress" />
                </section>
                <section className={classes.third_image}>
                    <img src={beach} alt="dress" />
                </section>
                <section className={classes.fourth_image}>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        ut aliquam, purus sit amet luctus venenatis, lectus
                        magna fringilla urna, porttitor rhoncus dolor purus non
                        enim praesent elementum facilisis leo, vel fringilla est
                        ullamcorper eget nulla facilisi etiam dignissim diam
                        quis enim lobortis scelerisque fermentum dui faucibus in
                        ornare quam viverra orci sagittis eu volutpat odio
                        facilisis mauris sit amet massa vitae tortor condimentum
                        lacinia quis vel eros donec ac odio tempor orci dapibus
                        ultrices in iaculis nunc sed augue lacus, viverra vitae
                        congue eu, consequat ac felis donec et odio pellentesque
                        diam volutpat commodo sed egestas egestas fringilla
                        phasellus faucibus
                    </p>
                </section>
            </div>
        </div>
    );
};

export default AboutUs;
