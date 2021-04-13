import React, { useState } from 'react';
import Div from './Div';

function MyDivContainer() {
    const [value, setValue] = useState('')

    return (
        <div>
            <Div onMouseOver={() => setValue('active')} onMouseOut={() => setValue('')} />
            { value}
        </div>
    )
};

export default MyDivContainer;