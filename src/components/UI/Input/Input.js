import React from 'react';

/* Styles */
import classes from './Input.css';

const input = (props) => {
    let inputElement = null;
    const inputClasses = [classes.InputElement];

    if (props.invalid && props.shouldValidate && props.touched) {
        inputClasses.push(classes.Invalid);
    }

    switch (props.elementType) {
        case ('input'):
            inputElement = <input
                {...props.elementConfig}
                onChange={props.inputChanged}
                value={props.value}
                className={inputClasses.join(' ')}
            />
            break;
        case ('textarea'):
            inputElement = <textarea
                value={props.value}
                onChange={props.inputChanged}
                {...props.elementConfig}
                className={inputClasses.join(' ')}
            />
            break;
        case ('select'):
            inputElement = <select
                value={props.value}
                onChange={props.inputChanged}
                className={inputClasses.join(' ')}>
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
                className={inputClasses.join(' ')}
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