import React from 'react';

function TodayTime() {
    const Today = new Date().toString()
    return (
        <div>{Today}</div>
    )
}
export default TodayTime;