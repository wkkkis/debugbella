import classes from "./Profile.module.scss";
import { Link } from "react-router-dom";
import img1 from "../../images/bellaprofile3.png";
import img2 from "../../images/bellaprofile2.png";
const Profile = () => {
  return (
    <div className={classes.profilePage}>
      <div className={classes.product}>
        <div className={classes.product1}>
          <Link to="/product">Главная</Link>
          <span>/</span>
          <span>Профиль </span>
        </div>
      </div>
      <div className={classes.profile} >
        <div>
          <div className={classes.h3}>Профиль</div>
          <div className={classes.input_cont}>
            <h5>Имя</h5>
            <input type="text" placeholder="введите имя" name="name" required />
          </div>
          <div className={classes.input_cont}>
            <h5>Фамилия</h5>
            <input
              type="text"
              placeholder="введите фамилию"
              name="name"
              required
            />
          </div>
          <div className={classes.input_cont}>
            <h5>Номер телефона</h5>
            <input
              type="phone"
              placeholder="+996 (773) 870 100"
              name="name"
              required
            />
          </div>

          <button className={classes.btn_reg}>
            <Link to="/">изменить номер</Link>
          </button>

          <div className={classes.h3}>Адресс доставки</div>
          <div className={classes.input_cont}>
            <h5>Страна</h5>
            <input type="text" placeholder="Кыргызстан" name="name" required />
          </div>
          <div className={classes.input_cont}>
            <h5>Город</h5>
            <input type="text" placeholder="Бишкек" name="name" required />
          </div>
          <button className={classes.btn__save}>
            <Link to="/">Сохранить</Link>
          </button>
        </div>

        <div className={classes.second__cont}>
          <div className={classes.bella1}>
            <img src={img1} alt="loading..." className={classes.bella} />
          </div>
          <div>
            <img src={img2} alt="loading.." className={classes.img2} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
