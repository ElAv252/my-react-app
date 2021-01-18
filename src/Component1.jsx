import React from 'react';

function Component1(props) {
    /*const name = props.name;
    const prefix = props.prefix;*/
    const { name, prefix } = props.user

    return (
        <span>Hello, {prefix} {name}!</span>
    )
};

export default Component1;
