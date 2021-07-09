import classes from "./Header.module.scss";
import Nav from "./Nav/Nav";
import DrawerOpen from "./Drawer/DrawerOpen/DrawerOpen"
import { NavLink } from "react-router-dom";
import shop from "../../../assets/image/shop.png";
import lupa from "../../../assets/image/lupa.png";
import Logo from "./Logo/Logo";
import { useState } from "react";

const Header = ({ openDrawer }) => {
const [visible , setVisible] = useState(false)
let toggle1 = () => {
    setVisible(!visible)
}


    return (
        <div className={classes.header}>
            <DrawerOpen click={openDrawer} />
            <div className={classes.logo}>
                <Logo />
            </div>
            <div className={classes.icon}>
            <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              className={classes.cont}
              style={{
                position: "realtive",
                marginRight: "0",
              }}
            >
              <span
                onClick={toggle1}
                className={visible ? classes.hoverSearch : classes.hoverSearchDown}
                style={{ cursor: "pointer", margin: "0" }}
              >
                <img src={lupa} alt="logo" />
            
              </span>
            </div>
          </div>
          {visible && (
            <>
              <div className={classes.div1}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    height: "44px",
                  }}
                >
                  <input
                    className={classes.input}
                    type="text"
                    placeholder="Искать"
                  />
                  <span>
                    <button className={classes.btn1} onClick={toggle1}>
                      <div className={classes.div2}>&times;</div>
                    </button>
                  </span>
                </div>
              </div>
            </>
          )}
              
                <span>
                    <img src={shop} alt="image" className={classes.img1} />
                </span>
            </div>
            <Nav/>
        </div>
    );
};

export default Header;
