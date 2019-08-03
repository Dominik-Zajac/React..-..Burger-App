import React from 'react';

/* Image */
import burgerLogo from '../../assets/images/burger-logo.png';

/* Styles */
import classes from './Logo.css';

const logo = () => (
    <div className={classes.Logo}>
        <img src={burgerLogo} alt='Burger logo' />
    </div>
);

export default logo;