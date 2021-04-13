import React, { useState, useEffect } from 'react';

function CountButton(props) {

    const [count, setCount] = useState(0);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        let counter;
        if (props.load) {
            counter = props.load('counter');
        } else {
            console.log('ERROR!')
        }
        let initialCounter = Number(counter) || 0;
        setCount(initialCounter)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    function CountUp() {
        setCount(count + 1)
        if (props.save) {
            props.save('counter', count + 1)
        } else {
            console.log('ERROR!')
        }
    }

    function clear() {
        if (props.clear) {
            setCount(0)
            props.clear()
        } else {
            console.log('ERROR!')
        }
    }
    return (
        <div>
            <h2>{count}</h2>
            <button onClick={CountUp}>Click me!</button>
            <button onClick={clear}>Clear</button>
        </div>
    )
};

export default CountButton;