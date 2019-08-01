import React from 'react';

/* Components */
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

/* Styles */
import classes from './Burger.css';

const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients)
        .map(ingredientsKey => {
            return [...Array(props.ingredients[ingredientsKey])]
                .map((_, index) => {
                    return <BurgerIngredient
                        key={ingredientsKey + index}
                        type={ingredientsKey}
                    />;
                })
        }).reduce((arr, element) => {
            return arr.concat(element)
        }, [])

    // Nothing ingredients
    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients!</p>
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type='bread-top' />
            {transformedIngredients}
            <BurgerIngredient type='bread-bottom' />
        </div>
    );
};

export default burger;