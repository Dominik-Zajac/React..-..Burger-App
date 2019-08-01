import React, { Component } from 'react';

/* Components */
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuilControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
    salad: 0.4,
    cheese: 0.5,
    meat: 1.5,
    bacon: 0.8
};

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 1,
            bacon: 1,
            cheese: 2,
            meat: 2
        },
        totalPrice: 4,
    };

    addIngredientHandler = (type) => {
        // Ingredient
        const oldCount = this.state.ingredients[type]
        const updateCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updateCount;

        //Price
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;

        this.setState({
            totalPrice: newPrice,
            ingredients: updatedIngredients
        });
    };

    render() {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <BuilControls
                    ingredientAdded={this.addIngredientHandler}
                />
            </Aux>
        );
    };
};

export default BurgerBuilder;