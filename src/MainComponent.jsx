import React, { useState, useEffect } from 'react';
import Home from './Home';
import About from './About';
import Help from './Help';
import NiceImage from './NiceImage';

export default function MainComponent() {

    const [route, setRoute] = useState(window.location.hash.substr(1))

    useEffect(() => {
        let x = 0;
        window.addEventListener('hashchange', () => {
            setRoute(window.location.hash.substr(1))
            console.log(`work ${++x} times`)
        })
    }, [])

    let Child;
    function getChild() {
        switch (route) {
            case '/NiceImage':
                Child = NiceImage
                break
            case '/About':
                Child = About;
                break;
            case '/Help':
                Child = Help;
                break;
            default:
                Child = Home;
        }
    }

    return (
        <div>
            {getChild()}
            <h1>App</h1>
            <ul>
                <li><a href="#/About">About</a></li>
                <li><a href="#/Help">Help</a></li>
                <li><a href="#/Home">Home</a></li>
                <li><a href="#/NiceImage">NiceImage</a></li>
            </ul>
            <Child />
        </div>
    )
};