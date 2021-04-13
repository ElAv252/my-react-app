import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import { Button } from '@material-ui/core';
import Home from './Home';
import About from './About';
import Help from './Help';
import NiceImage from './NiceImage';

export default function MyRouter() {

    let [value1, setValue1] = useState('/NiceImage/159');

    const ChangeImage = () => {//this function change the image By changing the number of the URL.
        const Inum = document.getElementsByClassName('Inum')[0];
        if (Inum.value) {
            setValue1(`/NiceImage/${Inum.value}`)
        }
        console.log(Inum.value, value1)
    }


    return (
        <Router>
            <div>
                <h1>App</h1>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/help/050">Help</Link>
                    </li>
                    <li>
                        <Link to={value1}>NiceImage</Link>
                        <br />
                        <input type="number" className='Inum' />
                        <br />
                        <Button color='primary' onClick={ChangeImage}>Click me to change the image</Button>
                    </li>
                </ul>
                <hr />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/help/:id">
                        <Help />
                    </Route>
                    <Route path="/NiceImage/:id">
                        <NiceImage />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}