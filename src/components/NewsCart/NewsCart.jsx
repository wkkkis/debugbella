import React from 'react';
import style from './NewsCart.module.scss';
import newsImg from '../../assets/newsimg.png';
import arrow from '../../assets/lock_nextImg/arrow_brown.png';
import { Link } from 'react-router-dom';

const NewsCart = (props) => {
  // props посмотри откуда приходит--это Нурбек---
  return (
    <>
      <div className={style.breadCrumbs}>
        <div className={style.breadCrumbs__link}>
          <ul className={style.breadCrumbs__list}>
            <li>Главная &ensp;/&ensp;</li>
            <li>Новости</li>
          </ul>
        </div>
        <h1 className={style.breadCrumbs__newsTitle}>Новости</h1>
      </div>

      <div className={style.w_100}>
        <div className={style.mainCart}>
        <Link to={`/news_details/`}> {/*${props.item.id} */}
          <div className={style.newscart}>
            <div className={style.newscart__blockLeft}>
              <img src={newsImg} alt="img-news" />
            </div>
            <div className={style.newscart__blockRight}>
              <p className={style.newscart__data}>22.06.21</p>
              <h1 className={style.newscart__title}>Гарантия обмена и возврата товара</h1>
              <p className={style.newscart__text}>100% гарантия возврата товара -14 дней на возврат, без скандалов и
                истерик</p>
              <button className={style.newscart__btn}>Подробнее
                <img src={arrow} alt="img-arrow" />
              </button>
            </div>
          </div>
        </Link>

          <div className={style.newscart}>
            <div className={style.newscart__blockLeft}>
              <img src={newsImg} alt="img-news" />
            </div>
            <div className={style.newscart__blockRight}>
              <p className={style.newscart__data}>22.06.21</p>
              <h1 className={style.newscart__title}>Гарантия обмена и возврата товара</h1>
              <p className={style.newscart__text}>100% гарантия возврата товара -14 дней на возврат, без скандалов и
                истерик</p>
              <button className={style.newscart__btn}>Подробнее
                <img src={arrow} alt="img-arrow" />
              </button>
            </div>
          </div>

          <div className={style.newscart}>
            <div className={style.newscart__blockLeft}>
              <img src={newsImg} alt="img-news" />
            </div>
            <div className={style.newscart__blockRight}>
              <p className={style.newscart__data}>22.06.21</p>
              <h1 className={style.newscart__title}>Гарантия обмена и возврата товара</h1>
              <p className={style.newscart__text}>100% гарантия возврата товара -14 дней на возврат, без скандалов и
                истерик</p>
              <button className={style.newscart__btn}>Подробнее
                <img src={arrow} alt="img-arrow" />
              </button>
            </div>
          </div>

          <div className={style.newscart}>
            <div className={style.newscart__blockLeft}>
              <img src={newsImg} alt="img-news" />
            </div>
            <div className={style.newscart__blockRight}>
              <p className={style.newscart__data}>22.06.21</p>
              <h1 className={style.newscart__title}>Гарантия обмена и возврата товара</h1>
              <p className={style.newscart__text}>100% гарантия возврата товара -14 дней на возврат, без скандалов и
                истерик</p>
              <button className={style.newscart__btn}>Подробнее
                <img src={arrow} alt="img-arrow" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsCart;
