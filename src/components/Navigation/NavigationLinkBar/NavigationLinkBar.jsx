import React from "react"
import classes from './NavigationLinkBar.module.scss';

const NavigationLinkBar = () => {
  return (
    <div className={classes.navigationLink}>
      <span className={classes.mainLink}>Главная</span>
      <span>  /  </span>
      <span className={classes.allLink}>Избранное</span>
    </div>
  )
}

export default NavigationLinkBar
