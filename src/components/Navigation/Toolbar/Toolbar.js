import React from 'react';

/* Components */
import Logo from '../../Logo/Logo';

/* Styles */
import classes from './Toolbar.css';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <div>Menu</div>
        <Logo />
        <nav>
            ...
        </nav>
    </header>
);

export default toolbar;