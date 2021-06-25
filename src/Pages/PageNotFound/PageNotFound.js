import classes from "./PageNotFound.module.scss";
import page1 from "../../images/notpage.png"
import page2 from "../../images/notpage2.png"
const PageNotFound = () => {
  return (
    <div className={classes.pageNotFound}>
      <div className={classes.first__cont}>
        <div >
          <img src={page1} alt="loading.." className={classes.img1}/>
        </div>
        <div>
          <img src={page2} alt="loading.."  className={classes.img2}/>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
