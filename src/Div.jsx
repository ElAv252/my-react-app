import React from 'react';

function Div(props) {

    let MouseOver = props.onMouseOver
    let MouseOut = props.onMouseOut

    return (
        <div onMouseOver={MouseOver} onMouseOut={MouseOut}>Mydiv</div>
    )
};

export default Div;

