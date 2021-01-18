import logo from './logo.svg';
import React from 'react';
import './App.css';
import Welcome from './Welcome';
import * as obj1 from './components/Vars';
import TodayTime from './TodayTime';
import Component1 from './Component1';
import Birthday from './Birthday';

function App() {
  console.log(obj1.bar)
  let hello = <span>hello</span>;
  let world = <span>world</span>;
  let names = ['elazar', 'moshe', 'david', 'ron']
  let bool = true;
  let shoppingList = [<li key={1}>milk</li>, <li key={2}>bread</li>, <li key={3}>apple</li>, <li key={4}>water</li>]
  let fathers = ['Avraham', 'Itzhak', 'Yaakov']
  let theListOfFathers = fathers.map((fathers, index) => {
    return <li key={index}>
      {fathers}
    </li>
  })
  const items = [];
  for (let i = 10; i > 0; i--) {
    items.push(<li key={i}>{i}</li>)
  }
  const user1 = {
    name: 'Ran',
    lastName: 'Bar-Zik',
    city: 'Petah Tiqwa',
    id: '666',
  }
  let userAr = Object.keys(user1).map((value, key) => {
    return <span key={key}>{value}:{user1[value]}</span>
  })

  const user2 = {
    name: 'Ron',
    prefix: 'Doctor'
  }

  const user3 = {
    name: 'elazar',
    age: 19
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Welcome />
        <p>{hello} {world}</p>
        <p>1+1={1 + 1}</p>
        <p>{names.map((vlaue, key) => <span key={key}>{vlaue} </span>)}</p>
        {bool === true ? <span>I am TRUE</span> : <span>I am FALSE</span>}
        <ul>
          {shoppingList}
        </ul>
        <ul>
          {theListOfFathers}
        </ul>
        <ul>
          {items}
        </ul>
        <TodayTime />
        <br />
        {userAr}
        <br />
        <Component1 user={user2} />
        <br />
        <Birthday user={user3} />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
