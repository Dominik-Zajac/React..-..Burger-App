import React from 'react';

/* Styles */
import classes from './Modal.css';

const modal = (props) => (
    <div className={classes.Modal}>
        {props.children}
    </div>
);

export default modal;