import React, { useState } from 'react';
//import Button from './Button';
//import Input from './Input';
import { TextField, Button } from '@material-ui/core';

function InputViewer() {
    const [value, setValue] = useState('')
    const [viewValue, setViewValue] = useState('')
    return (
        <div>
            {/*<input onChange={e => setValue(e.target.value)} type="text" />*/}
            <TextField color='secondary' onChange={e => setValue(e.target.value)} type="text" />
            <br />
            {/*<button onClick={e => setViewValue(value)}>Click me!</button>*/}
            <Button color='secondary' onClick={e => setViewValue(value)} >Click me!</Button>
            <br />
            <span>{viewValue}</span>
        </div>

    )
};

export default InputViewer;