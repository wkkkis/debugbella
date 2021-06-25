import React from 'react';
import classes from './NavigationTitleAndPopup.module.scss';
import { SortPopup, PageName } from './index';

const NavigationTitleAndSortPopup = ({item}) => {
  return (
    <div className={classes.navigation_title_sort_wrap}>
      <SortPopup item={item} />
      <PageName />
    </div>
  );
};

export default NavigationTitleAndSortPopup;
