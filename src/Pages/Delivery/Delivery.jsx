import classes from "./Delivery.module.scss";
import { Link } from "react-router-dom";

const Delivery = () => {
    return (
        <div className={classes.delivery}>
            <div className={classes.big__cont}>
                <div className={classes.product}>
                    <div className={classes.product1}>
                        <Link className={classes.link} to="/product">
                            Главная
                        </Link>
                        <span className={classes.span}>/</span>
                        <span className={classes.span}>Товары</span>
                    </div>
                </div>
                <div className={classes.cont}>
                    <div className={classes.column__first}>
                        <Link className={classes.link} to="/delivery" className={classes.del}>
                            Доставка
                        </Link>
                        <Link className={classes.link} to="/contacts">
                            Контакты
                        </Link>
                        <Link className={classes.link} to="/q&a">
                            Вопросы и ответы
                        </Link>
                    </div>

                    <div className={classes.column__second}>
                        <div className={classes.cont__p}>
                            <span className={classes.hr__cont}>
                                <hr className={classes.hr} />
                                <p className={classes.p}>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit ut aliquam, purus sit amet
                                    luctus venenatis, lectus magna fringilla
                                    urna, porttitor rhoncus dolor purus non enim
                                    praesent elementum facilisis leo, vel
                                    fringilla est ullamcorper eget nulla
                                    facilisi etiam dignissim diam quis enim
                                    lobortis scelerisque fermentum dui faucibus
                                    in ornare quam viverra orci sagittis eu
                                    volutpat odio facilisis mauris sit amet
                                    massa vitae tortor condimentum lacinia quis
                                    vel eros donec ac odio tempor orci dapibus
                                    ultrices in iaculis nunc sed augue lacus,
                                    viverra vitae congue eu, consequat ac felis
                                    donec et odio pellentesque diam volutpat
                                    commodo sed egestas egestas fringilla
                                    phasellus faucibus
                                </p>
                            </span>
                            <p className={classes.p}>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit ut aliquam, purus sit amet
                                luctus venenatis, lectus magna fringilla urna,
                                porttitor rhoncus dolor purus non enim praesent
                                elementum facilisis leo, vel fringilla est
                                ullamcorper eget nulla facilisi etiam dignissim
                                diam quis enim lobortis scelerisque fermentum
                                dui faucibus in ornare quam viverra orci
                                sagittis eu volutpat odio facilisis mauris sit
                                amet massa vitae tortor condimentum lacinia quis
                                vel eros donec ac odio tempor orci dapibus
                                ultrices in iaculis nunc sed augue lacus,
                                viverra vitae congue eu, consequat ac felis
                                donec et odio pellentesque diam volutpat commodo
                                sed egestas egestas fringilla phasellus faucibus
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Delivery;
