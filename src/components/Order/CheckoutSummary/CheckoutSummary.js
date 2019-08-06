import React from 'react';

/* Components */
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';

/* Styles */
import classes from './CheckoutSummary.css';

const checkoutSummary = (props) => {
    return (
        <div className={classes.CheckoutSummary}>
            <h1>We hope it tastes well!</h1>
            <div style={{ width: '100%', margin: 'auto' }}>
                <Burger ingredients={props.ingredients} />
            </div>
            <Button
                btnType='Danger'
                clicked>Cancel</Button>
            <Button btnType='Success'
                clicked>CONTINUE</Button>
        </div>
    );
}

export default checkoutSummary;