import React from 'react';

/* Styles */
import classes from './Order.css';

const order = (props) => {
    return (
        <div className={classes.Order}>
            <p>Ingredients: Salad (3)</p>
            <p>Price: <strong>USD 5.45</strong></p>
        </div>
    );
};

export default order;