import React from 'react';
import classes from './HeroSettings.module.scss';
import arrow from '../../assets/lock_nextImg/next.png';
import img1 from '../../assets/sliderImg/01.jpg';
import img2 from '../../assets/sliderImg/02.jpg';
import img3 from '../../assets/sliderImg/03.jpg';

const HeroSection = () => {

  useEffect(() => {
    getProducts(frfe)
  })

  return (
    <>
      <div id="carouselExampleCaptions" data-bs-ride="carousel">
        <div>
          <button type="button" data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="0" aria-current="true" aria-label="Slide 1">
          </button>
          <button type="button" data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="1" aria-label="Slide 2">
          </button>
          <button type="button" data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="2" aria-label="Slide 3">
          </button>
        </div>
        <div>
          <div className="carousel-item active">
            <img src={img1} className="d-block w-100" alt="" />
            <div className="carousel-caption d-none d-md-block">
              <div className="block_absolute">
                <h5>Скидки до 70%! Вы точно <br /> захотите это увидеть</h5>
                <button>Подробнее <img className="arrow" src={arrow} alt="img" /></button>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img src={img2} alt="" />
            <div>
              <div className="block_absolute">
                <h5>Скидки до 70%! Вы точно <br /> захотите это увидеть</h5>
                <button>Подробнее <img className="arrow" src={arrow} alt="img" /></button>
              </div>
            </div>
          </div>
          <div className={classes.carousel_item}>
            <img src={img3} alt="" />
            <div>
              <div className={classes.block_absolute}>
                <h5>Скидки до 70%! Вы точно <br /> захотите это увидеть</h5>
                <button>Подробнее <img className={classes.arrow} src={arrow} alt="img" /></button>
              </div>
            </div>
          </div>
        </div>
        <button type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev">
          <span className="visually-hidden">Previous</span>
        </button>
        <button type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next">
          <span>Next</span>
        </button>
      </div>
    </>
  );
};

export default HeroSection;
