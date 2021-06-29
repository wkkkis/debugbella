import { NavLink } from "react-router-dom";
import Backdrop from "../Backdrop/Backdrop";
import classes from "./Drawer.module.scss";
import user from "../../../../assets/image/user.png";
const Drawer = ({ open, closeDrawer }) => {
  const drawerClasses = [classes.content, open ? classes.open : classes.close];

  return (
    <div className={classes.Drawer}>
      <Backdrop show={open} click={closeDrawer} />
      <div className={drawerClasses.join(" ")}>
        <ul className={classes.ul}>
          <div className={classes.links}>
            <li>
              <NavLink to="/details">Товары</NavLink>
            </li>
            <li>
              <NavLink to="/about">О нас</NavLink>
            </li>
            <li>
              <NavLink to="/news">Новости</NavLink>
            </li>
            <li>
              <NavLink to="/delivery">Доставка</NavLink>
            </li>
            <li>
              <NavLink to="/contacts">Контакты</NavLink>
            </li>
            <li>
              <NavLink to="/favourite">Избранное</NavLink>
            </li>
          </div>
          <div className={classes.profile}>
            <img alt="profile" src={user} />
            <li>
              <NavLink to="/profile">Профиль</NavLink>
            </li>
          </div>
   
        </ul>
      </div>
    </div>
  );
};

export default Drawer;
