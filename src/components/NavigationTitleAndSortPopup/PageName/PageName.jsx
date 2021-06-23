import React from "react"
import classes from './NavigationPageName.module.scss';
import { Route, Switch } from 'react-router-dom'

const PageName = () => {
  return (
    <div className={classes.pages_name}>
      <Switch>
        <Route exact path="/">
          <span>О нас</span>
        </Route>
        <Route exact path="/favorite">
          <span>Избранное</span>
        </Route>
        <Route exact path="/category">
          <span>Все товары</span>
        </Route>
      </Switch>
    </div>
  )
}

export default PageName
