import React/*, { useState, useEffect }*/ from 'react';
//import './Counter.css';
import Button from '@material-ui/core/Button'

class Counter extends React.Component {
    constructor() {
        super()
        this.state = { count: 0 }
    }

    IncreaseHandler = () => {
        const NewCount = this.state.count + 1;
        this.setState({ count: NewCount });
    }

    DecreaseHandler = () => {
        const NewCount = this.state.count - 1;
        this.setState({ count: NewCount });
    }

    RestartHandler = () => {
        // eslint-disable-next-line
        const NewCount = this.state.count = 0;
        this.setState({ count: NewCount });
    }

    render() {
        return <div>
            <Button color='primary' variant='contained' onClick={this.IncreaseHandler} className='CounterButton'>increase</Button>
            <Button color='primary' variant='contained' onClick={this.RestartHandler} className='CounterButton'>Reset</Button>
            <Button color='primary' variant='contained' onClick={this.DecreaseHandler} className='CounterButton'>decrease</Button>
            <br />
            <span>{this.state.count}</span>
        </div>
    }
}
export default Counter;





/*function Counter() {

    const [value, setValue] = useState(0)

    useEffect(() => { console.log('re-rendered!') })

    return (
        <div>
            <button onClick={() => setValue(value + 1)} className='CounterButton'>increase</button>
            <button onClick={() => setValue(0)} className='CounterButton'>Reset</button>
            <button onClick={() => setValue(value - 1)} className='CounterButton'>decrease</button>
            <br />
            <span>{value}</span>
        </div>

    )
};

export default Counter;*/