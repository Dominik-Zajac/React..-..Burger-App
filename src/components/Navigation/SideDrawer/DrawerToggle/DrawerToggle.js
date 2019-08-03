import React from 'react';

/* Styles */
import classes from './DrawerToggle.css';

const drawerToogle = (props) => (
    <div className={classes.DrawerToggle} onClick={props.clicked}>
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default drawerToogle;