import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCart from '../ProductCart/ProductCart';


function CartSlider() {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        cssEase: "linear"
    }


    return (
        <div className="ProductSlider">
            <div className="ProductSlider__container">
                <h1>Похожие товары</h1>
                <Slider {...settings}>
                    <div className="card-wrapper">
                        <ProductCart/>

                    </div>
                    <div className="card-wrapper">
                        <ProductCart/>

                    </div>
                    <div className="card-wrapper">
                        <ProductCart/>

                    </div>
                    <div className="card-wrapper">
                        <ProductCart/>

                    </div>
                    <div className="card-wrapper">
                        <ProductCart/>
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default CartSlider

//... is called spread operator

//thanks for watching
//pleae subscribe my channel