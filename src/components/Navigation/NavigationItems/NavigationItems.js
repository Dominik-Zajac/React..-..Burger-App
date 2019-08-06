import React from 'react';

/* Components */
import NavigationItem from './NavigationItem/NavigationItem';

/* Styles */
import classes from './NavigationItems.css';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link='/' exact>Burger Builder</NavigationItem>
        <NavigationItem link='/orders'>Orders</NavigationItem>
    </ul>
);

export default navigationItems;