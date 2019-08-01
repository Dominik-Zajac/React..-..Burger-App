import React from 'react';

/* Components */
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

/* Styles */
import classes from './Burger.css';

const burger = (props) => {
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type='bread-top' />
            <BurgerIngredient type='cheese' />
            <BurgerIngredient type='meat' />
            <BurgerIngredient type='bread-bottom' />
        </div>
    );
};

export default burger;