import { NavLink } from "react-router-dom";
import Backdrop from "../Backdrop/Backdrop";
import classes from "./Drawer.module.scss";
import user from "../../../../assets/image/user.png";
// import Register from "../../Auth/Register/Register";
import Confirmation from "../../Auth/Confirmation/Confirmation";
import { useState } from "react";
const Drawer = ({ open, closeDrawer }) => {
  const drawerClasses = [classes.content, open ? classes.open : classes.close];

  const [profile, setProfile] = useState(false);

  let handleProfile = () => {
    setProfile(!profile);
  };

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
          <div>
            <div
              className={classes.cont}
              style={{
                position: "realtive",
                marginRight: "0",
              }}
            >
              {profile ? (
                <>
                  <div className={classes.profile}>
                    <img alt="profile" src={user} />
                    <div className={classes.block}>
                    <li>
                      <NavLink to="/profile">Профиль</NavLink>
                    </li>
                    <li>
                      <NavLink to="/" onClick={handleProfile}>выйти</NavLink>
                    </li>
                    </div>

                    {/* <Confirmation /> */}
                    {/* <Register /> */}
                   
                  </div>
                </>
              ) : (
                <div>
                  <img src={user} alt="logo" onClick={handleProfile} />
                  <span onClick={handleProfile}>Войти</span>{" "}
                </div>
              )}
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Drawer;
