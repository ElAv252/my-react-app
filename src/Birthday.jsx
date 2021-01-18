import React from 'react';

function Birthday(props) {
    const { age, name } = props.user
    let phrase;

    if (age <= 18) {
        phrase = 'You are underaged!';
    } else {
        phrase = 'You are OK!';
    }

    return <span>Happy Birthday {name}! You are {age}, {phrase}</span>
};

export default Birthday;
