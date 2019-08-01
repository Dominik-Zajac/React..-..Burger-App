import React from 'react';

/* Components */
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

/* Styles */
import classes from './Burger.css';

const burger = (props) => {
    const transformedIngredients = Object.keys(props.ingredients)
        .map(ingredientsKey => {
            return [...Array(props.ingredients[ingredientsKey])]
                .map((_, index) => {
                    return <BurgerIngredient
                        key={ingredientsKey + index}
                        type={ingredientsKey}
                    />;
                });
        })
    console.log(transformedIngredients)

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type='bread-top' />
            {transformedIngredients}
            <BurgerIngredient type='bread-bottom' />
        </div>
    );
};

export default burger;