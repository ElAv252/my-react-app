import React from 'react';

function Button(props) {
    const clickHandler = props.onClick
    return (
        <button onClick={clickHandler}>Click me!</button>
    )
};

export default Button;