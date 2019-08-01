import React from 'react';

/*Components */
import Aux from '../../hoc/Aux';

/* Styles */
import classes from './Layout.css';

const layout = (props) => (
    <Aux>
        <div >Toolbar</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>
);

export default layout;