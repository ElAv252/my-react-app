import React, { useState, useEffect } from 'react';

function CountViewer(props) {
    const count = props.count;
    const [clickTimes, setClickTimes] = useState(0)

    useEffect(() => {
        console.log(`you click ${clickTimes} and the props:${count}`)
        //document.title = `you click ${clickTimes}`;
    }, [clickTimes, count])

    return (
        <React.Fragment>
            <div>{count + clickTimes}</div>
            <button onClick={() => setClickTimes(clickTimes + 1)}>click me!</button>
        </React.Fragment>
    )
};

export default CountViewer;