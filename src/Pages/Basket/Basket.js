import React, { useState } from 'react';
import style from './Basket.module.scss'
import Nav from '../../containers/NavigationMenuBar/Header/Nav/Nav';
import Backdrop from '../../containers/NavigationMenuBar/Header/Backdrop/Backdrop';

const Basket = ({setBasket, basket,open,closeDrawer}) => {

    return (
        <>
            {basket ? (
               <div className={style.modal}>
                    <div className={style.modal__inner}>
                        <div className={style.modal__inner__container}>
                            asd 
                        </div>
                    </div>
               </div>
            ) : (
                null
            )}
        </>
    );
};

export default Basket;