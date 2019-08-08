import React from 'react';

/* Styles */
import classes from './Input.css';

const input = (props) => {
    let inputElement = null;

    switch (props.elementType) {
        case ('input'):
            inputElement = <input
                {...props.elementConfig}
                onChange={props.inputChanged}
                value={props.value}
                className={classes.InputElement}
            />
            break;
        case ('textarea'):
            inputElement = <textarea
                value={props.value}
                onChange={props.inputChanged}
                {...props.elementConfig}
                className={classes.InputElement}
            />
            break;
        case ('select'):
            inputElement = <select
                value={props.value}
                onChange={props.inputChanged}
                className={classes.InputElement}>
                {props.elementConfig.options.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.displayValue}
                    </option>
                ))}
            </select>
            break;
        default:
            inputElement = <input
                {...props.elementConfig}
                onChange={props.inputChanged}
                value={props.value}
                className={classes.InputElement}
            />
    }

    return (
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            {inputElement}
        </div>
    );
};

export default input;