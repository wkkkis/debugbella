import React from 'react';
import './HeroSettings.css'
import arrow from '../../assets/next.png'
import img1 from '../../assets/01.jpg'
import img2 from '../../assets/02.jpg'
import img3 from '../../assets/03.jpg'



const HeroSection = () => {
    return (
        <>
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
            <div class="carousel-item active">
                <img src={img1} class="d-block w-100" alt="..."/>
                <div class="carousel-caption d-none d-md-block">
                <div className="block_absolute">
                    <h5>Скидки до 70%! Вы точно <br/> захотите это увидеть</h5>
                    <button>Подробнее <img className="arrow" src={arrow} alt="img" /></button>
                </div>
                </div>
            </div>
            <div class="carousel-item">
                <img src={img2}  class="d-block w-100" alt="..."/>
                <div class="carousel-caption d-none d-md-block">
                <div className="block_absolute">
                    <h5>Скидки до 70%! Вы точно <br/> захотите это увидеть</h5>
                    <button>Подробнее <img className="arrow" src={arrow} alt="img" /></button>
                </div>
                </div>
            </div>
            <div class="carousel-item">
                <img src={img3}  class="d-block w-100" alt="..."/>
                <div class="carousel-caption d-none d-md-block">
                <div className="block_absolute">
                    <h5>Скидки до 70%! Вы точно <br/> захотите это увидеть</h5>
                    <button>Подробнее <img className="arrow" src={arrow} alt="img" /></button>
                </div>
                </div>
            </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            {/* <span class="carousel-control-prev-icon" aria-hidden="true"></span> */}
            <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            {/* <span class="carousel-control-next-icon" aria-hidden="true"></span> */}
            <span class="visually-hidden">Next</span>
            </button>
        </div>     
        </>
    );
};

export default HeroSection;